import { NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { HumanizePipeline } from '@/lib/ai/pipeline'
import { ratelimit } from '@/lib/utils/ratelimit'
import { z } from 'zod'

const HumanizeSchema = z.object({
  text: z.string().min(10).max(15000),
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

    // 2. Rate limit
    const { success } = await ratelimit.limit(user.id)
    if (!success) {
      return Response.json({ error: 'Rate limit exceeded' }, { status: 429 })
    }

    // 3. Validate input
    const body = HumanizeSchema.parse(await req.json())
    
    // Default to free plan for now (we can fetch this from profiles table)
    const { data: profile } = await supabase
      .from('profiles')
      .select('plan')
      .eq('id', user.id)
      .single()

    const plan = profile?.plan || 'free'

    // 4. Advanced mode: Pro only check
    if (body.mode === 'advanced' && plan === 'free') {
      return Response.json({ error: 'Advanced mode requires Pro plan', upgrade: true }, { status: 402 })
    }

    // 5. Create pipeline and execute
    const pipeline = new HumanizePipeline({
      text: body.text,
      tone: body.tone,
      mode: body.mode,
      useCase: body.useCase,
      plan: plan,
    })

    const streamResult = await pipeline.execute()
    
    // Next.js App Router stream response
    return streamResult.toDataStreamResponse()

  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({ error: 'Invalid input', details: error.errors }, { status: 400 })
    }
    console.error('Humanize Error:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
