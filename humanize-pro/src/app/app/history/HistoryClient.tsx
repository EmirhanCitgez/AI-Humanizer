'use client'

import { useState, useTransition } from 'react'
import { Clock, Copy, Trash2, RotateCcw, AlertTriangle, Lock, FileText, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { deleteHistoryItem } from './actions'

interface Rewrite {
  id: number
  tone: string
  mode: string
  input_text: string
  output_text: string
  output_words?: number
  created_at: string
}

export default function HistoryClient({ initialRewrites, plan }: { initialRewrites: Rewrite[], plan: string }) {
  const [rewrites, setRewrites] = useState<Rewrite[]>(initialRewrites)
  const [copiedId, setCopiedId] = useState<number | null>(null)
  const [, startTransition] = useTransition()

  const isFree = plan === 'free'
  const displayLimit = isFree ? 10 : rewrites.length
  const displayedRewrites = rewrites.slice(0, displayLimit)

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleDelete = async (id: number) => {
    // Optimistic UI update
    setRewrites(rewrites.filter(r => r.id !== id))
    
    // Server action
    startTransition(async () => {
      const result = await deleteHistoryItem(id)
      if (result.error) {
        // Revert on error
        setRewrites(rewrites)
        console.error("Failed to delete item:", result.error)
      }
    })
  }

  return (
    <div className="space-y-6">
      {/* Upgrade Triggers for Free Plan */}
      {isFree && (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={20} />
            <div>
              <h3 className="text-amber-500 font-bold">Free Plan Limit: 10 Recent Items</h3>
              <p className="text-sm text-amber-500/80 mt-1">
                Your older items will be automatically deleted. Upgrade to Pro for unlimited, permanent history storage and version tracking.
              </p>
            </div>
          </div>
          <Button className="bg-amber-500 hover:bg-amber-400 text-black font-bold whitespace-nowrap">
            Upgrade to Pro
          </Button>
        </div>
      )}

      {displayedRewrites.length > 0 ? (
        <div className="space-y-4">
          {displayedRewrites.map((item) => {
            const isExpiring = isFree && new Date().getTime() - new Date(item.created_at).getTime() > 25 * 24 * 60 * 60 * 1000 // 25 days old
            
            return (
              <div key={item.id} className="bg-[#0A0A0B] border border-zinc-800 rounded-xl overflow-hidden shadow-lg transition-all hover:border-zinc-700 relative group">
                {isExpiring && (
                  <div className="absolute top-0 right-0 bg-red-500/90 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10 flex items-center gap-1">
                    <Clock size={10} /> Expiring Soon
                  </div>
                )}
                
                <div className="p-5">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-zinc-800/50 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="bg-zinc-800 text-zinc-300 text-xs font-bold px-2 py-1 rounded capitalize">
                        {item.tone}
                      </span>
                      <span className="bg-zinc-800 text-zinc-300 text-xs font-bold px-2 py-1 rounded capitalize">
                        {item.mode}
                      </span>
                      <span className="text-zinc-500 text-sm flex items-center gap-1">
                        <FileText size={14} /> {item.output_words || item.output_text.split(/\s+/).filter(Boolean).length} words
                      </span>
                    </div>
                    <div className="text-zinc-500 text-sm flex items-center gap-2" suppressHydrationWarning>
                      <Clock size={14} /> {new Date(item.created_at).toLocaleString()}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-xs font-bold text-zinc-500 mb-2">ORIGINAL INPUT</h4>
                      <p className="text-zinc-400 text-sm line-clamp-3 leading-relaxed">
                        {item.input_text}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-amber-500 mb-2 flex items-center gap-2">
                        HUMANIZED OUTPUT
                      </h4>
                      <p className="text-zinc-200 text-sm line-clamp-3 leading-relaxed">
                        {item.output_text}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900/50 px-5 py-3 border-t border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className={`h-8 ${copiedId === item.id ? 'text-green-500 bg-green-500/10' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`}
                      onClick={() => handleCopy(item.id, item.output_text)}
                    >
                      {copiedId === item.id ? <><CheckCircle2 size={14} className="mr-2" /> Copied!</> : <><Copy size={14} className="mr-2" /> Copy Output</>}
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 text-zinc-400 hover:text-white hover:bg-zinc-800">
                      <RotateCcw size={14} className="mr-2" /> Reuse
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      disabled={isFree}
                      className="h-8 text-zinc-400 hover:text-white hover:bg-zinc-800 relative group/btn"
                    >
                      Compare
                      {isFree && <Lock size={12} className="ml-2 text-zinc-500" />}
                      {isFree && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-amber-500 border border-amber-500/30 text-[10px] px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                          Pro Feature
                        </div>
                      )}
                    </Button>
                    <div className="w-px h-4 bg-zinc-800 mx-1"></div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleDelete(item.id)}
                      className="h-8 text-red-500/70 hover:text-red-500 hover:bg-red-500/10"
                    >
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-20 bg-[#0A0A0B] rounded-2xl border border-zinc-800 shadow-xl">
          <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-4">
            <Clock className="text-zinc-500" size={24} />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">No history yet</h3>
          <p className="text-zinc-400 mb-6 max-w-sm mx-auto">
            Start humanizing text to see your results here. You can view, copy, and manage your past rewrites.
          </p>
          <Button render={<a href="/app/humanize" />} className="bg-amber-500 hover:bg-amber-400 text-black font-bold">
            Start Humanizing
          </Button>
        </div>
      )}
    </div>
  )
}
