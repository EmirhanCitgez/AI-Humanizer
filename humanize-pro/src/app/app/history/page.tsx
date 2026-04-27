import { createClient } from '@/lib/supabase/server'
import { Clock } from 'lucide-react'

export default async function HistoryPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  // Fetch history (assuming table exists and is populated)
  const { data: rewrites } = await supabase
    .from('rewrites')
    .select('*')
    .eq('user_id', user?.id)
    .order('created_at', { ascending: false })

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4">
        <Clock className="text-amber-500" size={24} />
        <h1 className="text-2xl font-bold">Rewrite History</h1>
      </div>

      <div className="space-y-4">
        {rewrites && rewrites.length > 0 ? (
          rewrites.map((item) => (
            <div key={item.id} className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
              <div className="flex justify-between text-sm text-zinc-500 mb-2">
                <span className="capitalize">{item.tone} Tone · {item.mode} Mode</span>
                <span>{new Date(item.created_at).toLocaleDateString()}</span>
              </div>
              <p className="text-zinc-300 line-clamp-2">{item.output_text}</p>
            </div>
          ))
        ) : (
          <div className="text-center py-20 text-zinc-500 bg-zinc-900/50 rounded-xl border border-zinc-800 border-dashed">
            No history found. Your past rewrites will appear here.
          </div>
        )}
      </div>
    </div>
  )
}
