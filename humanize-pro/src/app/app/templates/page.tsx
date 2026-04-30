'use client'

import { LayoutTemplate, Lock, Crown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEditorStore, Tone } from '@/store/editorStore'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

export default function TemplatesPage() {
  const router = useRouter()
  const { setTone, setMode } = useEditorStore()
  const [plan, setPlan] = useState<'free' | 'pro' | null>(null)

  useEffect(() => {
    const fetchPlan = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const { data } = await supabase.from('profiles').select('plan').eq('id', user.id).single()
        setPlan(data?.plan || 'free')
      }
    }
    fetchPlan()
  }, [])

  const templates: { name: string, icon: string, tone: Tone, desc: string }[] = [
    { name: 'Academic Essay', icon: '📝', tone: 'academic', desc: 'Formal and objective tone for academic writing.' },
    { name: 'Business Email', icon: '💼', tone: 'professional', desc: 'Clear, concise, and professional communication.' },
    { name: 'LinkedIn Post', icon: '📱', tone: 'casual', desc: 'Engaging, networking-focused professional tone.' },
    { name: 'Sales Ad Copy', icon: '🛒', tone: 'persuasive', desc: 'Action-oriented and compelling for conversions.' },
    { name: 'Creative Blog', icon: '📖', tone: 'creative', desc: 'Vivid, engaging storytelling style.' },
    { name: 'Twitter Thread', icon: '🐦', tone: 'casual', desc: 'Punchy and hook-driven for social media.' },
  ]

  const handleUseTemplate = (tone: Tone) => {
    if (plan === 'free') return
    setTone(tone)
    router.push('/app/humanize')
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4">
        <LayoutTemplate className="text-amber-500" size={24} />
        <h1 className="text-2xl font-bold">Smart Templates</h1>
      </div>

      <div className="relative">
        {plan === 'free' && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm rounded-2xl border border-zinc-800/50">
            <div className="bg-zinc-900 border border-amber-500/30 p-8 rounded-2xl flex flex-col items-center text-center max-w-md shadow-2xl">
              <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mb-4">
                <Crown className="text-amber-500" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Pro Feature</h2>
              <p className="text-zinc-400 mb-6">
                Intelligent templates actively modify the AI's behavior to match specific formats like LinkedIn hooks or Email structures. Upgrade to Premium to unlock.
              </p>
              <Link href="/app/settings?tab=billing" className="bg-gradient-to-r from-amber-600 to-amber-500 text-white font-bold py-3 px-8 rounded-xl shadow-[0_0_15px_rgba(212,168,83,0.3)] hover:from-amber-500 hover:to-amber-400 transition-colors">
                View Plans
              </Link>
            </div>
          </div>
        )}

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${plan === 'free' ? 'opacity-30 pointer-events-none blur-[2px]' : ''}`}>
          {templates.map((t, idx) => (
            <div 
              key={idx} 
              onClick={() => handleUseTemplate(t.tone)}
              className="p-5 bg-[#0A0A0B] border border-zinc-800 rounded-xl hover:border-amber-500/50 transition-colors cursor-pointer group relative overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl mb-3">{t.icon}</div>
              <h3 className="text-lg font-bold text-white mb-1">{t.name}</h3>
              <p className="text-sm text-zinc-400 mb-4">{t.desc}</p>
              <div className="text-xs uppercase tracking-wider text-amber-500 font-semibold group-hover:translate-x-1 transition-transform inline-block">
                Use Template →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
