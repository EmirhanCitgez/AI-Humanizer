import { NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { HumanizePipeline } from '@/lib/ai/pipeline'
import { freeRatelimit, proRatelimit, premiumRatelimit } from '@/lib/utils/ratelimit'
import { z } from 'zod'

const HumanizeSchema = z.object({
  prompt: z.string().min(10).max(15000),
  tone: z.enum(['academic', 'casual', 'professional', 'creative', 'persuasive']),
  mode: z.enum(['fast', 'advanced']),
  useCase: z.string().default('general'),
})

export async function POST(req: NextRequest) {
  try {
    // 1. Auth check
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // 2. Default to free plan for now (we can fetch this from profiles table)
    const { data: profile } = await supabase
      .from('profiles')
      .select('plan')
      .eq('id', user.id)
      .single()

    const plan = profile?.plan || 'free'

    // 3. Rate limit based on plan
    let limiter = freeRatelimit
    if (plan === 'pro') limiter = proRatelimit
    if (plan === 'premium') limiter = premiumRatelimit

    const { success } = await limiter.limit(user.id)
    if (!success) {
      if (plan === 'free') {
        return Response.json({ error: 'Daily limit exceeded. Please upgrade to Pro for more requests.', upgrade: true }, { status: 429 })
      } else {
        return Response.json({ error: 'Fair usage limit reached. Please wait a bit before your next request.', upgrade: false }, { status: 429 })
      }
    }

    // 4. Validate input
    const body = HumanizeSchema.parse(await req.json())
    const inputWordCount = body.prompt.split(/\s+/).filter(Boolean).length

    // 5. Enforce word count limits
    if (plan === 'free' && inputWordCount > 150) {
      return Response.json({ error: `Text too long (${inputWordCount} words). Free plan is limited to 150 words. Upgrade to Pro for longer texts.`, upgrade: true }, { status: 403 })
    }
    if (plan === 'pro' && inputWordCount > 1500) {
      return Response.json({ error: `Text too long (${inputWordCount} words). Pro plan supports up to 1500 words per request. Upgrade to Premium for maximum length.`, upgrade: true }, { status: 403 })
    }
    if (plan === 'premium' && inputWordCount > 2500) {
      return Response.json({ error: `Text too long (${inputWordCount} words). Maximum supported length is 2500 words per request.`, upgrade: true }, { status: 403 })
    }

    // 6. Advanced mode: Pro only check
    if (body.mode === 'advanced' && plan === 'free') {
      return Response.json({ error: 'Advanced mode requires Pro plan', upgrade: true }, { status: 402 })
    }

    let streamResult;
    try {
      // Force fallback to mock stream for testing since AI API keys have no credits
      throw new Error("Forcing mock stream for testing");
      
      const pipeline = new HumanizePipeline({
        text: body.prompt,
        tone: body.tone,
        mode: body.mode,
        useCase: body.useCase,
        plan: plan,
      })
      streamResult = await pipeline.execute()
    } catch (e: any) {
      console.warn("AI API failed, falling back to mock stream:", e.message)
      
      // Create a mock stream using Vercel AI SDK DataStream protocol
      const encoder = new TextEncoder();
      const mockText = `This is a mocked humanized version of your text using the ${body.tone} tone and ${body.mode} mode. Since the AI API keys are out of credits, this simulated response is provided to allow testing of the UI, history, and full application flow.`;
      
      const stream = new ReadableStream({
        async start(controller) {
          const words = mockText.split(' ');
          for (const word of words) {
            controller.enqueue(encoder.encode(`0:${JSON.stringify(word + " ")}\n`));
            await new Promise(r => setTimeout(r, 50));
          }
          controller.close();
          
          // Track history even in mock mode
          const inputWords = body.prompt.split(/\s+/).filter(Boolean).length;
          const outputWords = words.length;
          await Promise.all([
            supabase.rpc('increment_usage', {
              p_user_id: user!.id,
              p_words_input: inputWords,
              p_words_output: outputWords,
              p_tokens: Math.round(outputWords * 1.3)
            }),
            supabase.from('rewrites').insert({
              user_id: user!.id,
              input_text: body.prompt,
              output_text: mockText,
              tone: body.tone,
              mode: body.mode,
              input_words: inputWords,
              output_words: outputWords
            })
          ]);
        }
      });
      
      return new Response(stream, {
        headers: { 
          'Content-Type': 'text/plain; charset=utf-8',
          'x-vercel-ai-data-stream': 'v1'
        }
      });
    }

    // Track usage asynchronously without blocking the stream
    streamResult.text.then(async (text: string) => {
      const inputWords = body.prompt.split(/\s+/).filter(Boolean).length
      const outputWords = text ? text.split(/\s+/).filter(Boolean).length : inputWords
      
      await Promise.all([
        supabase.rpc('increment_usage', {
          p_user_id: user!.id,
          p_words_input: inputWords,
          p_words_output: outputWords,
          p_tokens: Math.round(outputWords * 1.3) // rough estimate
        }),
        supabase.from('rewrites').insert({
          user_id: user!.id,
          input_text: body.prompt,
          output_text: text,
          tone: body.tone,
          mode: body.mode,
          input_words: inputWords,
          output_words: outputWords
        })
      ])
    }).catch(console.error)

    // Next.js App Router stream response
    return streamResult.toTextStreamResponse()

  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({ error: 'Invalid input', details: error.flatten() }, { status: 400 })
    }
    console.error('Humanize Error:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
