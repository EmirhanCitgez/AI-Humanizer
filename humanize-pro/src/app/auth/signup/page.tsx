import { signup, signInWithGoogle } from '../actions'
import Link from 'next/link'
import { CheckCircle2, Mail, ArrowRight, Inbox } from 'lucide-react'

export default function SignupPage({
  searchParams,
}: {
  searchParams: { message?: string, type?: string }
}) {
  // Email confirmation success screen
  if (searchParams?.type === 'success') {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-black text-white font-sans selection:bg-amber-500/30 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="relative z-10 max-w-md w-full mx-auto px-6 text-center">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-2 text-xl font-display font-bold mb-12 hover:opacity-80 transition-opacity">
            <span className="text-amber-500">✦</span> HumanizeAI Pro
          </Link>

          {/* Icon */}
          <div className="relative mx-auto mb-8 w-24 h-24">
            <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl" />
            <div className="relative w-24 h-24 rounded-full bg-zinc-900 border-2 border-amber-500/40 flex items-center justify-center">
              <Inbox className="text-amber-500" size={40} />
            </div>
          </div>

          <h1 className="text-3xl font-display font-bold text-white mb-3">Check your inbox</h1>
          <p className="text-zinc-400 text-base leading-relaxed mb-8">
            We've sent a confirmation link to your email address.
            <br />
            Click the link to activate your account and start humanizing.
          </p>

          {/* Steps */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 mb-8 text-left space-y-4">
            {[
              { icon: '1', text: 'Open your email inbox' },
              { icon: '2', text: 'Find the email from HumanizeAI Pro' },
              { icon: '3', text: 'Click the confirmation link' },
            ].map((step) => (
              <div key={step.icon} className="flex items-center gap-4">
                <div className="w-7 h-7 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <span className="text-amber-500 text-xs font-bold">{step.icon}</span>
                </div>
                <span className="text-zinc-300 text-sm">{step.text}</span>
              </div>
            ))}
          </div>

          <Link
            href="/auth/login"
            className="inline-flex items-center gap-2 w-full justify-center bg-amber-500 hover:bg-amber-400 text-black py-3 px-6 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(212,168,83,0.3)] hover:shadow-[0_0_30px_rgba(212,168,83,0.5)]"
          >
            Go to Login <ArrowRight size={18} />
          </Link>

          <p className="text-zinc-600 text-xs mt-6">
            Didn't receive an email? Check your spam folder or{' '}
            <Link href="/auth/signup" className="text-zinc-400 hover:text-amber-500 transition-colors underline underline-offset-4">
              try again
            </Link>
            .
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full flex bg-black text-white font-sans selection:bg-amber-500/30">

      {/* Left side - Decorative */}
      <div className="hidden lg:flex w-1/2 relative bg-zinc-950 items-center justify-center p-12 overflow-hidden border-r border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-lg">
          <Link href="/" className="flex items-center gap-2 text-2xl font-display font-bold mb-12 hover:opacity-80 transition-opacity">
            <span className="text-amber-500">✦</span> HumanizeAI Pro
          </Link>

          {/* Student badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium mb-8">
            <span>🎓</span> Built for students, researchers and professionals.
          </div>

          <div className="space-y-4 mb-10">
            <h2 className="text-4xl font-display font-bold leading-tight">
              Turn your AI drafts into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">undetectable essays.</span>
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Thousands of students trust HumanizeAI Pro to submit AI-assisted work that bypasses Turnitin, GPTZero, and every major detector — while keeping their original arguments intact.
            </p>
          </div>

          {/* Social proof stats */}
          <div className="grid grid-cols-3 gap-4 mb-10 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/60">
            <div className="text-center">
              <p className="text-2xl font-bold text-amber-400">99%</p>
              <p className="text-xs text-zinc-500 mt-1">Human score</p>
            </div>
            <div className="text-center border-x border-zinc-800">
              <p className="text-2xl font-bold text-white">50k+</p>
              <p className="text-xs text-zinc-500 mt-1">Students</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">3 free</p>
              <p className="text-xs text-zinc-500 mt-1">Daily uses</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-zinc-300">
              <CheckCircle2 className="text-amber-500 shrink-0" size={18} />
              <span>Bypasses Turnitin, GPTZero & Originality.ai</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <CheckCircle2 className="text-amber-500 shrink-0" size={18} />
              <span>Preserves your arguments & citations</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <CheckCircle2 className="text-amber-500 shrink-0" size={18} />
              <span>Academic, casual & professional tones</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <CheckCircle2 className="text-amber-500 shrink-0" size={18} />
              <span>Free forever — no credit card needed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 overflow-y-auto">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-display font-bold text-white tracking-tight">Create an account</h1>
            <p className="text-zinc-400 mt-2 text-sm">Sign up in seconds to start humanizing your text.</p>
          </div>

          <form className="space-y-5" action={signup}>
            <div className="space-y-1.5">
              <label htmlFor="full_name" className="block text-sm font-medium text-zinc-300">Full Name</label>
              <input
                id="full_name"
                name="full_name"
                type="text"
                required
                className="block w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-600 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-600 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="password" className="block text-sm font-medium text-zinc-300">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-600 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                placeholder="••••••••"
                minLength={6}
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-amber-500 text-black hover:bg-amber-400 h-12 rounded-lg font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,168,83,0.3)]"
              >
                Create Account →
              </button>
            </div>
          </form>

          <div className="space-y-5 mt-5">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-800"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-wider">
                <span className="bg-black px-4 text-zinc-500">Or sign up with</span>
              </div>
            </div>

            <form action={signInWithGoogle}>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 border border-zinc-800 bg-zinc-900/30 text-zinc-300 hover:bg-zinc-800 hover:text-white h-12 rounded-lg font-medium transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </button>
            </form>

            {searchParams?.message && (
              <div className={`p-4 text-sm rounded-lg border text-center ${searchParams.type === 'success' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-amber-500/10 text-amber-500 border-amber-500/20'}`}>
                {searchParams.message}
              </div>
            )}

            <p className="text-center text-sm text-zinc-500">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-white hover:text-amber-500 font-medium transition-colors underline underline-offset-4">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
