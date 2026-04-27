import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Tone = 'academic' | 'casual' | 'professional' | 'creative' | 'persuasive'
export type Mode = 'fast' | 'advanced'

export interface Scores {
  human: number
  readability: number
  burstiness: number
}

interface EditorStore {
  inputText: string
  outputText: string
  tone: Tone
  mode: Mode
  useCase: string
  scores: Scores | null
  isProcessing: boolean
  
  setInput: (text: string) => void
  setOutput: (text: string) => void
  setTone: (tone: Tone) => void
  setMode: (mode: Mode) => void
  setScores: (scores: Scores | null) => void
  setIsProcessing: (isProcessing: boolean) => void
  reset: () => void
}

export const useEditorStore = create<EditorStore>()(
  persist(
    (set) => ({
      inputText: '',
      outputText: '',
      tone: 'professional',
      mode: 'fast',
      useCase: 'general',
      scores: null,
      isProcessing: false,
      setInput: (text) => set({ inputText: text }),
      setOutput: (text) => set({ outputText: text }),
      setTone: (tone) => set({ tone }),
      setMode: (mode) => set({ mode }),
      setScores: (scores) => set({ scores }),
      setIsProcessing: (isProcessing) => set({ isProcessing }),
      reset: () => set({ inputText: '', outputText: '', scores: null }),
    }),
    { name: 'editor-store' }
  )
)
