import { generateText, streamText } from 'ai'
import { openai } from '@ai-sdk/openai'
import { anthropic } from '@ai-sdk/anthropic'
import { PROMPTS } from './prompts'
import { Tone, Mode } from '@/store/editorStore'

export interface PipelineConfig {
  text: string
  tone: Tone
  mode: Mode
  useCase: string
  plan: 'free' | 'pro' | 'team' | 'api'
}

export class HumanizePipeline {
  private config: PipelineConfig

  constructor(config: PipelineConfig) {
    this.config = config
  }

  async execute() {
    if (this.config.mode === 'fast') {
      return this.fastPass()
    }
    return this.advancedPipeline()
  }

  private async fastPass() {
    return streamText({
      model: openai('gpt-4o-mini'),
      system: PROMPTS.system(this.config.tone, this.config.useCase),
      prompt: this.config.text,
      temperature: 0.85,
    })
  }

  private async advancedPipeline() {
    const text = this.config.text

    // Pass 1: Structural variation
    const { text: pass1 } = await generateText({
      model: openai('gpt-4o-mini'),
      system: PROMPTS.structureVariation,
      prompt: text,
      temperature: 0.7,
    })

    // Pass 2: Synonym & vocabulary diversification
    const { text: pass2 } = await generateText({
      model: openai('gpt-4o-mini'),
      system: PROMPTS.vocabularyDiversify(this.config.tone),
      prompt: pass1,
      temperature: 0.8,
    })

    // Pass 3: Sentence rhythm & burstiness
    const { text: pass3 } = await generateText({
      model: openai('gpt-4o-mini'),
      system: PROMPTS.rhythmRandomize,
      prompt: pass2,
      temperature: 0.9,
    })

    // Pass 4: Final polish (streamed)
    const model = this.config.plan === 'free' ? openai('gpt-4o-mini') : anthropic('claude-3-5-sonnet-latest')
    
    return streamText({
      model,
      system: PROMPTS.finalPolish(this.config.tone, this.config.useCase),
      prompt: pass3,
      temperature: 0.85,
    })
  }
}
