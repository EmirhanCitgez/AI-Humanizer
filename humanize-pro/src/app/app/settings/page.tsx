import { Settings, User, CreditCard, Key } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'

export default async function SettingsPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user?.id)
    .single()

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4">
        <Settings className="text-amber-500" size={24} />
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Navigation Sidebar */}
        <div className="col-span-1 space-y-2">
          <div className="flex items-center gap-2 px-3 py-2 bg-zinc-800 text-white rounded-md cursor-pointer font-medium">
            <User size={18} /> Profile
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-md cursor-pointer transition-colors">
            <CreditCard size={18} /> Billing
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-md cursor-pointer transition-colors">
            <Key size={18} /> API Keys
          </div>
        </div>

        {/* Settings Content */}
        <div className="col-span-3 space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
            <h2 className="text-lg font-bold mb-4">Profile Information</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Email Address</label>
                <input 
                  type="email" 
                  disabled 
                  value={user?.email || ''} 
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-zinc-500 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Full Name</label>
                <input 
                  type="text" 
                  defaultValue={profile?.full_name || ''} 
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                  placeholder="Enter your name"
                />
              </div>
              <button type="button" className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-zinc-200 transition-colors">
                Save Changes
              </button>
            </form>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
            <h2 className="text-lg font-bold mb-4">Current Plan</h2>
            <div className="flex items-center justify-between p-4 border border-amber-500/30 bg-amber-500/5 rounded-lg">
              <div>
                <div className="text-amber-500 font-bold uppercase tracking-wider text-sm mb-1">
                  {profile?.plan || 'Free'} Plan
                </div>
                <div className="text-sm text-zinc-400">
                  You are currently on the free tier. Upgrade for advanced features.
                </div>
              </div>
              <button className="bg-amber-500 text-black px-4 py-2 rounded-md font-medium hover:bg-amber-400 transition-colors">
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
