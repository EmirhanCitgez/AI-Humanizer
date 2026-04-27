'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Zap, BrainCircuit, ShieldCheck, PenTool, Sparkles, MessageSquare, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-500/30 font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-display font-bold flex items-center gap-2">
            <span className="text-amber-500">✦</span> HumanizeAI Pro
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#how-it-works" className="hover:text-white transition-colors">How it works</Link>
            <Link href="#use-cases" className="hover:text-white transition-colors">Use Cases</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Log in
            </Link>
            <Link href="/auth/login" className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors">
              Start Free →
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              The #1 Advanced AI Text Humanizer
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6 tracking-tight">
              Make AI writing sound <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">authentically human.</span>
            </h1>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed max-w-xl">
              Don't let robotic tones ruin your message. Our 4-pass linguistic pipeline removes AI patterns, varies sentence structure, and injects natural rhythm so your content connects and bypasses detection.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/auth/login" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,168,83,0.3)]">
                Humanize Text Now <ArrowRight size={20} />
              </Link>
              <span className="text-sm text-zinc-500">No credit card required.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm overflow-hidden shadow-2xl">
              <div className="flex border-b border-zinc-800">
                <div className="flex-1 p-4 border-r border-zinc-800 bg-zinc-900">
                  <div className="text-xs font-bold text-zinc-500 mb-2">ROBOTIC AI INPUT</div>
                  <p className="text-sm text-zinc-400 font-mono leading-relaxed">
                    "In today's fast-paced digital world, it is crucial to leverage cutting-edge paradigms. Furthermore, utilizing these tools will unlock unprecedented synergies. In conclusion, adapting is paramount."
                  </p>
                </div>
                <div className="flex-1 p-4 bg-amber-500/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
                  <div className="text-xs font-bold text-amber-500 mb-2 flex items-center gap-2">
                    <Sparkles size={12} /> HUMANIZED OUTPUT
                  </div>
                  <p className="text-sm text-zinc-200 leading-relaxed">
                    "If you want to keep up online, you have to use the best tools available. Finding the right software changes everything—it makes your team faster and more connected. The bottom line? You either adapt or fall behind."
                  </p>
                </div>
              </div>
              <div className="bg-zinc-950 p-3 flex justify-between items-center text-xs text-zinc-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-green-500"><ShieldCheck size={14}/> 100% Human Score</span>
                  <span>41 words</span>
                </div>
                <div className="flex gap-2">
                  <span className="bg-zinc-800 px-2 py-1 rounded">Tone: Casual</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-10 border-y border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-zinc-500 font-medium mb-6 uppercase tracking-widest">Trusted by professionals at</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
            {/* Placeholder logos */}
            <h3 className="text-2xl font-bold font-serif">Forbes</h3>
            <h3 className="text-2xl font-bold font-sans">Medium</h3>
            <h3 className="text-2xl font-bold tracking-tighter">Substack</h3>
            <h3 className="text-2xl font-bold font-mono">TechCrunch</h3>
          </div>
        </div>
      </section>

      {/* How it Works / 4-Pass Pipeline */}
      <section id="how-it-works" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold mb-4">Beyond simple paraphrasing</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Most "humanizers" just spin synonyms. We built a sophisticated 4-pass linguistic pipeline that reconstructs your text from the ground up.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Structure Variation', desc: 'Breaks up repetitive AI paragraph and sentence lengths.', icon: <BrainCircuit /> },
              { step: '02', title: 'Vocabulary Sweep', desc: 'Removes clichéd AI words like "delve", "leverage", and "crucial".', icon: <PenTool /> },
              { step: '03', title: 'Rhythm & Burstiness', desc: 'Injects natural human pacing with mixed sentence phrasing.', icon: <Zap /> },
              { step: '04', title: 'Tone Polish', desc: 'Final pass using Claude 3.5 Sonnet to ensure perfect contextual tone.', icon: <Sparkles /> },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-amber-500 mb-6">{feature.icon}</div>
                <div className="text-sm font-bold text-zinc-500 mb-2">STEP {feature.step}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-24 px-6 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">Designed for every writing context</h2>
            <p className="text-lg text-zinc-400 mb-8">
              Choose from specific templates and tones to ensure your output perfectly matches your intention.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Academic & Essays', desc: 'Maintain formal objectivity while removing detectable AI patterns.' },
                { title: 'SEO Content & Blogs', desc: 'Engage readers with conversational rhythm that ranks well.' },
                { title: 'Professional Emails', desc: 'Sound competent and direct without sounding robotic.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 bg-amber-500/10 p-2 rounded-full h-fit">
                    <CheckCircle2 className="text-amber-500" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-zinc-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                <MessageSquare className="text-zinc-500 mb-4" />
                <h4 className="font-bold mb-2">Casual Tone</h4>
                <p className="text-sm text-zinc-400">Perfect for LinkedIn, Twitter threads, and personal blogs.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                <PenTool className="text-zinc-500 mb-4" />
                <h4 className="font-bold mb-2">Creative Tone</h4>
                <p className="text-sm text-zinc-400">Vivid storytelling and unexpected metaphors.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 border-amber-500/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-amber-500/5" />
                <Zap className="text-amber-500 mb-4" />
                <h4 className="font-bold mb-2">Persuasive</h4>
                <p className="text-sm text-zinc-400">Drive action with punchy, sales-focused copywriting.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                <ShieldCheck className="text-zinc-500 mb-4" />
                <h4 className="font-bold mb-2">Academic</h4>
                <p className="text-sm text-zinc-400">Precise, formal vocabulary with complex structures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-zinc-400">Start for free, upgrade when you need advanced features.</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Free Tier */}
          <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <p className="text-zinc-400 mb-6">Perfect for trying out our humanizer.</p>
            <div className="text-5xl font-bold mb-8">$0<span className="text-lg text-zinc-500 font-normal">/mo</span></div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-zinc-300"><CheckCircle2 className="text-amber-500" size={20}/> 1,000 words per day</li>
              <li className="flex items-center gap-3 text-zinc-300"><CheckCircle2 className="text-amber-500" size={20}/> Fast Mode (Single pass)</li>
              <li className="flex items-center gap-3 text-zinc-300"><CheckCircle2 className="text-amber-500" size={20}/> 3 basic tones</li>
            </ul>
            
            <Link href="/auth/login" className="block w-full text-center bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-full font-bold transition-colors">
              Start Free
            </Link>
          </div>

          {/* Pro Tier */}
          <div className="p-8 rounded-3xl bg-zinc-900 border-2 border-amber-500 relative transform md:-translate-y-4 shadow-2xl shadow-amber-500/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-black px-4 py-1 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-zinc-400 mb-6">For professionals who need undetectable writing.</p>
            <div className="text-5xl font-bold mb-8">$15<span className="text-lg text-zinc-500 font-normal">/mo</span></div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-white"><CheckCircle2 className="text-amber-500" size={20}/> Unlimited words</li>
              <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 className="text-amber-500" size={20}/> Advanced Mode (4-pass pipeline)</li>
              <li className="flex items-center gap-3 text-white"><CheckCircle2 className="text-amber-500" size={20}/> Claude 3.5 Sonnet Integration</li>
              <li className="flex items-center gap-3 text-white"><CheckCircle2 className="text-amber-500" size={20}/> All tones & templates</li>
              <li className="flex items-center gap-3 text-white"><CheckCircle2 className="text-amber-500" size={20}/> Save custom templates</li>
            </ul>
            
            <Link href="/auth/login" className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-black py-3 rounded-full font-bold transition-colors shadow-[0_0_15px_rgba(212,168,83,0.4)]">
              Upgrade to Pro
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How is this different from a normal AI rewriter?', a: 'Most tools simply use GPT to paraphrase text. We use a proprietary 4-pass linguistic pipeline that specifically targets structural repetition, predictable vocabulary, and robotic rhythm, completely reconstructing the text.' },
              { q: 'Will this bypass AI detectors?', a: 'Yes. Our Advanced Mode is specifically designed to create high "burstiness" and "perplexity" scores, which are the metrics AI detectors use. Output from our Pro tier consistently registers as 99% human on Turnitin, GPTZero, and Originality.ai.' },
              { q: 'What AI models do you use?', a: 'We use a combination of models. Fast passes utilize OpenAI GPT-4o-mini for speed and structure, while our Advanced polishing pass uses Anthropic Claude 3.5 Sonnet, which currently produces the most nuanced, human-like text on the market.' },
              { q: 'Do I lose the original meaning of my text?', a: 'No. Our strict prompt engineering ensures that all factual claims, statistics, and core arguments remain intact. We only change HOW it is said, not WHAT is said.' }
            ].map((faq, i) => (
              <div key={i} className="border border-zinc-800 rounded-xl bg-zinc-900/50 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-zinc-800/50 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === i && (
                  <div className="p-6 pt-0 text-zinc-400 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-amber-500/10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to sound human again?</h2>
          <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto">
            Join thousands of writers, marketers, and students who trust HumanizeAI Pro to elevate their content.
          </p>
          <Link href="/auth/login" className="inline-flex bg-white text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-zinc-200 transition-colors shadow-2xl">
            Create Your Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900 bg-black text-center text-zinc-600 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-display font-bold text-zinc-400">
            <span className="text-amber-500">✦</span> HumanizeAI Pro
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-zinc-300 transition-colors">Contact</Link>
          </div>
          <p>© 2026 HumanizeAI Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
