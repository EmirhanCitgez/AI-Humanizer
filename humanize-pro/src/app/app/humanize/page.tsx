'use client'

import { useEditorStore } from '@/store/editorStore'
import { Button } from '@/components/ui/button'
import { useCompletion } from '@ai-sdk/react'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Lock, Sparkles, BarChart3, AlertTriangle } from 'lucide-react'

export default function HumanizePage() {
  const { inputText, tone, mode, useCase, setInput, setTone, setMode, setOutput, setIsProcessing } = useEditorStore()
  const [plan, setPlan] = useState<'free' | 'pro' | null>(null)
  const [showError, setShowError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPlan = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const { data } = await supabase.from('profiles').select('plan').eq('id', user.id).single()
        const userPlan = data?.plan || 'free'
        setPlan(userPlan)
        if (userPlan === 'free' && mode === 'advanced') {
          setMode('fast')
        }
      }
    }
    fetchPlan()
  }, [mode, setMode])

  const { completion, complete, isLoading, error } = useCompletion({
    api: '/api/humanize',
    body: { tone, mode, useCase },
    onError: (err) => {
      try {
        const parsed = JSON.parse(err.message)
        setShowError(parsed.error || err.message)
      } catch {
        setShowError(err.message)
      }
    }
  })

  useEffect(() => {
    if (completion) {
      setOutput(completion)
    }
  }, [completion, setOutput])

  useEffect(() => {
    setIsProcessing(isLoading)
    if (isLoading) setShowError(null)
  }, [isLoading, setIsProcessing])

  const wordCount = inputText.split(/\s+/).filter(Boolean).length
  const isOverLimit = plan === 'free' && wordCount > 150

  const handleHumanize = async () => {
    if (!inputText.trim()) return
    if (isOverLimit) {
      setShowError(`Your text is ${wordCount} words. Free plan is limited to 150 words per request.`)
      return
    }
    setShowError(null)
    await complete(inputText)
  }

  return (
    <div className="h-full flex flex-col p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Humanize Text</h1>
        
        <div className="flex items-center gap-4 bg-zinc-900 p-2 rounded-lg border border-zinc-800">
          <select 
            value={tone}
            onChange={(e) => setTone(e.target.value as "academic" | "casual" | "professional" | "creative" | "persuasive")}
            className="bg-transparent text-sm text-zinc-300 outline-none px-2 cursor-pointer"
          >
            <option value="academic">Academic</option>
            <option value="casual">Casual</option>
            <option value="professional">Professional</option>
            <option value="creative">Creative</option>
            <option value="persuasive">Persuasive</option>
          </select>
          
          <div className="w-px h-4 bg-zinc-700" />
          
          <div className="flex items-center">
            <select 
              value={mode}
              onChange={(e) => {
                if (plan === 'free' && e.target.value === 'advanced') {
                  setShowError("Advanced mode requires a Pro plan.")
                  return
                }
                setMode(e.target.value as "fast" | "advanced")
              }}
              className={`bg-transparent text-sm outline-none px-2 cursor-pointer ${mode === 'advanced' ? 'text-amber-500 font-medium' : 'text-zinc-300'}`}
            >
              <option value="fast">⚡ Fast Pass</option>
              {plan === 'free' ? (
                <option value="advanced" disabled>✦ Advanced (Pro Only)</option>
              ) : (
                <option value="advanced">✦ Advanced Multi-pass</option>
              )}
            </select>
            {plan === 'free' && <Lock size={12} className="text-zinc-500 ml-1" />}
          </div>
        </div>
      </div>

      {(error || showError) && (
        <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 flex items-start gap-3 rounded-xl">
          <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={18} />
          <div>
            <p className="text-sm font-medium text-red-500">Error processing request</p>
            <p className="text-sm text-red-400 mt-1">{showError || error?.message}</p>
          </div>
        </div>
      )}

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0">
        {/* Input Pane */}
        <div className="flex flex-col rounded-2xl border border-zinc-800 bg-[#0A0A0B] overflow-hidden shadow-lg relative">
          <div className="px-5 py-4 border-b border-zinc-800/50 flex justify-between items-center bg-zinc-900/30">
            <span className="text-sm font-bold text-zinc-300">INPUT</span>
          </div>
          <textarea
            value={inputText}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your AI-generated text here to humanize it..."
            className="flex-1 w-full bg-transparent p-5 resize-none outline-none text-zinc-200 placeholder:text-zinc-600 leading-relaxed"
          />
          <div className={`px-5 py-3 border-t flex justify-between items-center bg-zinc-900/30 ${isOverLimit ? 'border-red-500/30' : 'border-zinc-800/50'}`}>
            <span className={`text-xs font-medium px-2 py-1 rounded-md ${isOverLimit ? 'bg-red-500/10 text-red-500' : 'bg-zinc-800 text-zinc-400'}`}>
              {wordCount} {plan === 'free' ? '/ 150 words' : 'words'}
            </span>
            {isOverLimit && <span className="text-xs text-red-500 font-medium">Free plan limit exceeded</span>}
          </div>
        </div>

        {/* Output Pane */}
        <div className="flex flex-col rounded-2xl border border-zinc-800 bg-[#0A0A0B] overflow-hidden shadow-lg relative">
          <div className="px-5 py-4 border-b border-zinc-800/50 flex justify-between items-center bg-zinc-900/30">
            <span className="text-sm font-bold text-amber-500 flex items-center gap-2">
              <Sparkles size={16} /> HUMANIZED OUTPUT
            </span>
            
            {/* Mocked Scores Area */}
            {completion && (
              <div className="flex gap-3">
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-zinc-500">Human:</span>
                  <span className={`font-bold ${plan === 'free' ? 'text-zinc-400 blur-sm select-none' : 'text-green-500'}`}>98%</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-zinc-500">Readability:</span>
                  <span className={`font-bold ${plan === 'free' ? 'text-zinc-400 blur-sm select-none' : 'text-blue-500'}`}>A+</span>
                </div>
                {plan === 'free' && (
                  <div className="absolute right-4 top-3.5 flex items-center gap-1 text-xs text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    <Lock size={10} /> Pro Scores
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="flex-1 p-5 overflow-auto text-zinc-200 whitespace-pre-wrap leading-relaxed">
            {isLoading && !completion && (
              <div className="flex items-center gap-3 text-amber-500/60 font-medium animate-pulse">
                <Sparkles size={18} /> Processing your text...
              </div>
            )}
            {completion || (!isLoading && <span className="text-zinc-600">Your humanized result will appear here.</span>)}
          </div>

          {/* Smart Rewrite Controls (Pro Only) */}
          <div className="px-5 py-3 border-t border-zinc-800/50 bg-zinc-900/30 flex items-center gap-2 overflow-x-auto relative">
            <span className="text-xs text-zinc-500 font-medium mr-2 whitespace-nowrap flex items-center gap-1.5">
              Smart Controls
              {plan === 'free' && (
                <span className="bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[9px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
                  Pro
                </span>
              )}
              :
            </span>
            {['More engaging', 'Shorten', 'Make casual'].map((action) => (
              <button 
                key={action}
                disabled={!completion}
                title={plan === 'free' ? 'Pro Only Feature' : ''}
                onClick={() => {
                  if (plan === 'free') {
                    setShowError(`${action} requires a Pro plan. Upgrade to use Smart Controls.`)
                  } else {
                    // To be implemented
                  }
                }}
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-700 bg-zinc-800 text-zinc-300 transition-colors relative group ${!completion ? 'opacity-50 cursor-not-allowed' : 'hover:bg-zinc-700 hover:text-white cursor-pointer'} ${plan === 'free' ? 'border-amber-500/20 hover:border-amber-500/50' : ''}`}
              >
                <div className="flex items-center gap-1.5">
                  {action}
                  {plan === 'free' && <Lock size={10} className="text-amber-500/70" />}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Button 
          onClick={handleHumanize}
          disabled={!inputText.trim() || isLoading || isOverLimit}
          className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white border-none shadow-[0_0_20px_rgba(212,168,83,0.3)] px-10 py-7 text-lg rounded-2xl font-bold transition-all disabled:opacity-50"
        >
          {isLoading ? (
            <span className="flex items-center gap-2"><Sparkles className="animate-spin" size={20} /> Humanizing...</span>
          ) : (
            <span className="flex items-center gap-2"><Sparkles size={20} /> Humanize Now</span>
          )}
        </Button>
      </div>
    </div>
  )
}
