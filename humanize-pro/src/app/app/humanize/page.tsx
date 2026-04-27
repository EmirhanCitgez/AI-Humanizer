'use client'

import { useEditorStore } from '@/store/editorStore'
import { Button } from '@/components/ui/button'
import { useCompletion } from 'ai/react'
import { useEffect } from 'react'

export default function HumanizePage() {
  const { inputText, tone, mode, useCase, setInput, setTone, setMode, setOutput, setIsProcessing } = useEditorStore()

  const { completion, complete, isLoading, error } = useCompletion({
    api: '/api/humanize',
    body: { tone, mode, useCase },
  })

  // Sync completion with store output
  useEffect(() => {
    if (completion) {
      setOutput(completion)
    }
  }, [completion, setOutput])

  useEffect(() => {
    setIsProcessing(isLoading)
  }, [isLoading, setIsProcessing])

  const handleHumanize = async () => {
    if (!inputText.trim()) return
    await complete(inputText)
  }

  const wordCount = inputText.split(/\s+/).filter(Boolean).length

  return (
    <div className="h-full flex flex-col p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Humanize Text</h1>
        
        <div className="flex items-center gap-4 bg-zinc-900 p-2 rounded-lg border border-zinc-800">
          <select 
            value={tone}
            onChange={(e) => setTone(e.target.value as any)}
            className="bg-transparent text-sm text-zinc-300 outline-none px-2"
          >
            <option value="academic">Academic</option>
            <option value="casual">Casual</option>
            <option value="professional">Professional</option>
            <option value="creative">Creative</option>
            <option value="persuasive">Persuasive</option>
          </select>
          
          <div className="w-px h-4 bg-zinc-700" />
          
          <select 
            value={mode}
            onChange={(e) => setMode(e.target.value as any)}
            className="bg-transparent text-sm text-zinc-300 outline-none px-2"
          >
            <option value="fast">⚡ Fast</option>
            <option value="advanced">✦ Advanced</option>
          </select>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-900/30 border border-red-800 text-red-400 rounded-lg">
          Error: {error.message}
        </div>
      )}

      <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
        {/* Input Pane */}
        <div className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
          <div className="px-4 py-3 border-b border-zinc-800 bg-zinc-900 flex justify-between items-center">
            <span className="text-sm font-medium text-zinc-400">INPUT</span>
          </div>
          <textarea
            value={inputText}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your AI-generated text here..."
            className="flex-1 w-full bg-transparent p-4 resize-none outline-none text-zinc-200"
          />
          <div className="px-4 py-2 border-t border-zinc-800 text-xs text-zinc-500 flex justify-between">
            <span>{wordCount} words</span>
          </div>
        </div>

        {/* Output Pane */}
        <div className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden relative">
          <div className="px-4 py-3 border-b border-zinc-800 bg-zinc-900 flex justify-between items-center">
            <span className="text-sm font-medium text-amber-500">OUTPUT</span>
          </div>
          <div className="flex-1 p-4 overflow-auto text-zinc-200 whitespace-pre-wrap">
            {isLoading && !completion && <span className="text-amber-500/50 animate-pulse">✦ Processing...</span>}
            {completion || (!isLoading && <span className="text-zinc-600">✦ Humanized result will appear here...</span>)}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Button 
          onClick={handleHumanize}
          disabled={!inputText.trim() || isLoading}
          className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white border-none shadow-[0_0_20px_rgba(212,168,83,0.3)] px-8 py-6 text-lg rounded-xl font-medium transition-all disabled:opacity-50"
        >
          {isLoading ? '✦ Humanizing...' : '✦ Humanize Now'}
        </Button>
      </div>
    </div>
  )
}
