import { login, signup } from './actions'
import { Button } from '@/components/ui/button'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-zinc-900 rounded-2xl shadow-xl border border-zinc-800">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-zinc-400 mt-2">Sign in to HumanizeAI Pro</p>
        </div>
        
        <form className="space-y-4 flex flex-col">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-300">Email</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="mt-1 block w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500" 
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-300">Password</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              className="mt-1 block w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500" 
            />
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <Button formAction={login} className="w-full bg-white text-black hover:bg-zinc-200">
              Log In
            </Button>
            <Button formAction={signup} variant="outline" className="w-full border-zinc-700 text-white hover:bg-zinc-800">
              Sign Up
            </Button>
          </div>
          
          {searchParams?.message && (
            <p className="mt-4 p-4 bg-zinc-800/50 text-amber-500 text-center text-sm rounded-md border border-zinc-700/50">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
