'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-500/30">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-display font-bold flex items-center gap-2">
            <span className="text-amber-500">✦</span> HumanizeAI Pro
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#how-it-works" className="hover:text-white transition-colors">How it works</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Log in
            </Link>
            <Link href="/auth/login" className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">
              Start Free →
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Trusted by 50,000+ writers
            </div>
            <h1 className="text-6xl md:text-7xl font-display font-bold leading-tight mb-6">
              Turn AI Text Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                Human Writing.
              </span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Multi-pass linguistic rewriting that sounds genuinely written by a human — not just paraphrased. Bypass detection and elevate your content quality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/auth/login" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-full text-lg font-medium transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,168,83,0.3)]">
                Start for Free <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="py-24 px-6 border-t border-white/5 bg-[#0A0A0B]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Why choose HumanizeAI Pro?</h2>
            <p className="text-zinc-400">Our 4-pass pipeline does what simple paraphrasers can't.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Multi-Pass Pipeline', desc: 'Structure, vocabulary, rhythm, and polish passes.', icon: <Zap className="text-amber-500" /> },
              { title: 'Tone Intelligence', desc: 'Academic, casual, professional, and creative tones.', icon: <CheckCircle2 className="text-amber-500" /> },
              { title: 'Live Scoring', desc: 'Real-time human, readability, and burstiness scores.', icon: <Zap className="text-amber-500" /> },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center text-zinc-500">
        <p>© 2026 HumanizeAI Pro. All rights reserved.</p>
      </footer>
    </div>
  )
}
