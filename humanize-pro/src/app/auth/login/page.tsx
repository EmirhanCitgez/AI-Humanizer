import { login, signInWithGoogle } from '../actions'
import Link from 'next/link'
import { Sparkles, BrainCircuit } from 'lucide-react'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string }
}) {
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
          
          <div className="space-y-6">
            <h2 className="text-4xl font-display font-bold leading-tight">
              Transform AI text into <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">human brilliance.</span>
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Bypass AI detectors and engage your audience with our state-of-the-art 4-pass linguistic pipeline.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm">
              <Sparkles className="text-amber-500 mb-3" size={24} />
              <h4 className="font-bold mb-1">Undetectable</h4>
              <p className="text-sm text-zinc-500">Scores 99% human on Turnitin & GPTZero.</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm">
              <BrainCircuit className="text-amber-500 mb-3" size={24} />
              <h4 className="font-bold mb-1">Context-Aware</h4>
              <p className="text-sm text-zinc-500">Preserves original meaning and formatting.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-display font-bold text-white tracking-tight">Welcome Back</h1>
            <p className="text-zinc-400 mt-2 text-sm">Enter your details to access your dashboard.</p>
          </div>
          
          <form className="space-y-5">
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
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-zinc-300">Password</label>
                <Link href="/auth/reset-password" className="text-xs text-amber-500 hover:text-amber-400 transition-colors">Forgot password?</Link>
              </div>
              <input 
                id="password" 
                name="password" 
                type="password" 
                required 
                className="block w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-600 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors" 
                placeholder="••••••••"
              />
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                formAction={login} 
                className="w-full bg-white text-black hover:bg-zinc-200 h-12 rounded-lg font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                Sign In →
              </button>
            </div>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-800"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-wider">
                <span className="bg-black px-4 text-zinc-500">Or continue with</span>
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
              <div className="mt-6 p-4 bg-amber-500/10 text-amber-500 text-sm rounded-lg border border-amber-500/20 text-center">
                {searchParams.message}
              </div>
            )}

            <p className="text-center mt-8 text-sm text-zinc-500">
              Don't have an account?{' '}
              <Link href="/auth/signup" className="text-white hover:text-amber-500 font-medium transition-colors underline underline-offset-4">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
