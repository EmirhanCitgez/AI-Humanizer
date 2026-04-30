import Link from 'next/link'
import { Zap, LayoutTemplate, Clock, Settings, User } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  let profile = null
  if (user) {
    const { data } = await supabase
      .from('profiles')
      .select('full_name, plan')
      .eq('id', user.id)
      .single()
    profile = data
  }

  const displayName = profile?.full_name || user?.email?.split('@')[0] || 'User'
  const plan = profile?.plan || 'free'
  const planDisplay = plan.charAt(0).toUpperCase() + plan.slice(1) + ' Plan'

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 flex flex-col bg-[#0A0A0B]">
        <div className="p-6">
          <Link href="/app/humanize" className="text-2xl font-logo flex items-center gap-2">
            <span className="text-amber-500">✦</span> LexoraAI
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link href="/app/humanize" className="flex items-center gap-3 px-3 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-md transition-colors">
            <Zap size={18} /> Humanize
          </Link>
          <Link href="/app/templates" className="flex items-center gap-3 px-3 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-md transition-colors">
            <LayoutTemplate size={18} /> Templates
          </Link>
          <Link href="/app/history" className="flex items-center gap-3 px-3 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-md transition-colors">
            <Clock size={18} /> History
          </Link>
        </nav>

        {/* Footer Area / Settings */}
        <div className="p-4 border-t border-zinc-800">
          <Link href="/app/settings" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-md transition-colors mb-2">
            <Settings size={18} /> Settings
          </Link>
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
              <span className="text-xs font-bold text-zinc-400">
                {displayName.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-medium truncate">{displayName}</span>
              <span className={`text-xs ${plan === 'free' ? 'text-zinc-500' : 'text-amber-500 font-bold'}`}>
                {planDisplay}
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
