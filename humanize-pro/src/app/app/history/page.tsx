import { createClient } from '@/lib/supabase/server'
import { Clock } from 'lucide-react'
import HistoryClient from './HistoryClient'

export default async function HistoryPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  let plan = 'free'
  if (user) {
    const { data: profile } = await supabase.from('profiles').select('plan').eq('id', user.id).single()
    if (profile?.plan) plan = profile.plan
  }

  // Fetch history
  const { data: rewrites } = await supabase
    .from('rewrites')
    .select('*')
    .eq('user_id', user?.id)
    .order('created_at', { ascending: false })

  return (
    <div className="p-6 max-w-5xl mx-auto min-h-full">
      <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-6">
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
          <Clock className="text-amber-500" size={24} />
        </div>
        <div>
          <h1 className="text-3xl font-display font-bold">Rewrite History</h1>
          <p className="text-zinc-400 mt-1">Manage and reuse your previously humanized content.</p>
        </div>
      </div>

      <HistoryClient initialRewrites={rewrites || []} plan={plan} />
    </div>
  )
}
