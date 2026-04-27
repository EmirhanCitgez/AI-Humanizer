import { LayoutTemplate } from 'lucide-react'

export default function TemplatesPage() {
  const templates = [
    { name: 'Academic Essay', icon: '📝', tone: 'academic', desc: 'Formal and objective tone for academic writing.' },
    { name: 'Business Email', icon: '💼', tone: 'professional', desc: 'Clear, concise, and professional communication.' },
    { name: 'LinkedIn Post', icon: '📱', tone: 'casual', desc: 'Engaging, networking-focused professional tone.' },
    { name: 'Sales Ad Copy', icon: '🛒', tone: 'persuasive', desc: 'Action-oriented and compelling for conversions.' },
    { name: 'Creative Blog', icon: '📖', tone: 'creative', desc: 'Vivid, engaging storytelling style.' },
    { name: 'Twitter Thread', icon: '🐦', tone: 'casual', desc: 'Punchy and hook-driven for social media.' },
  ]

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4">
        <LayoutTemplate className="text-amber-500" size={24} />
        <h1 className="text-2xl font-bold">Templates</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((t, idx) => (
          <div key={idx} className="p-5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-amber-500/50 transition-colors cursor-pointer group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-3xl mb-3">{t.icon}</div>
            <h3 className="text-lg font-bold text-white mb-1">{t.name}</h3>
            <p className="text-sm text-zinc-400 mb-4">{t.desc}</p>
            <div className="text-xs uppercase tracking-wider text-amber-500 font-semibold">
              Use Template →
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
