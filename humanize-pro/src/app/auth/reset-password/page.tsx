import { requestPasswordReset } from '../actions'
import Link from 'next/link'

export default function ResetPasswordPage({
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
          <div className="flex items-center gap-2 text-2xl font-logo mb-12">
            <span className="text-amber-500">\u2726</span> LexoraAI
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-display font-bold leading-tight">
              Regain access to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">your workspace.</span>
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Don&apos;t worry, it happens to the best of us. Enter your email and we&apos;ll help you get back on track.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-display font-bold text-white tracking-tight">Reset Password</h1>
            <p className="text-zinc-400 mt-2 text-sm">Enter your email address and we'll send you a link to reset your password.</p>
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

            <div className="pt-2">
              <button 
                type="submit"
                formAction={requestPasswordReset} 
                className="w-full bg-amber-500 text-black hover:bg-amber-400 h-12 rounded-lg font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,168,83,0.3)]"
              >
                Send Reset Link
              </button>
            </div>
            
            {searchParams?.message && (
              <div className="mt-6 p-4 bg-zinc-900 border border-zinc-800 text-white text-sm rounded-lg text-center">
                {searchParams.message}
              </div>
            )}

            <p className="text-center mt-8 text-sm text-zinc-500">
              Remembered your password?{' '}
              <Link href="/auth/login" className="text-white hover:text-amber-500 font-medium transition-colors underline underline-offset-4">
                Back to log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
