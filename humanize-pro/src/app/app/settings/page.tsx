import { Settings, User, CreditCard, Key, CheckCircle2, Zap, Shield, Clock, Download, RefreshCcw, Copy, ExternalLink, ChevronRight, BarChart3 } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { logout, deleteAccount } from '@/app/auth/actions'

export default async function SettingsPage({ searchParams }: { searchParams: { tab?: string } }) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user?.id)
    .single()

  // Get today's usage
  const startOfDay = new Date()
  startOfDay.setUTCHours(0, 0, 0, 0)
  
  const { count } = await supabase
    .from('rewrites')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user?.id)
    .gte('created_at', startOfDay.toISOString())

  const usageCount = count || 0
  const maxLimit = profile?.plan === 'premium' ? 1000 : profile?.plan === 'pro' ? 200 : 3
  const usagePercentage = Math.min((usageCount / maxLimit) * 100, 100)

  const tab = searchParams.tab || 'profile'

  const activeClass = "flex items-center gap-3 px-4 py-3 bg-zinc-800/80 text-white rounded-lg font-medium transition-all shadow-sm border border-zinc-700/50"
  const inactiveClass = "flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800/40 rounded-lg transition-all"

  return (
    <div className="min-h-full p-6 lg:p-10 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-10 pb-6 border-b border-zinc-800/60">
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
          <Settings className="text-amber-500" size={24} />
        </div>
        <div>
          <h1 className="text-3xl font-display font-bold text-white tracking-tight">Account Settings</h1>
          <p className="text-zinc-400 mt-1">Manage your profile, billing, and developer settings.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Navigation Sidebar */}
        <div className="w-full lg:w-64 flex-shrink-0 space-y-2">
          <Link href="?tab=profile" className={tab === 'profile' ? activeClass : inactiveClass}>
            <User size={18} /> 
            <span>Profile</span>
          </Link>
          <Link href="?tab=billing" className={tab === 'billing' ? activeClass : inactiveClass}>
            <CreditCard size={18} /> 
            <span>Billing & Plans</span>
          </Link>
          <Link href="?tab=api" className={tab === 'api' ? activeClass : inactiveClass}>
            <Key size={18} /> 
            <span>API Keys</span>
          </Link>
        </div>

        {/* Settings Content */}
        <div className="flex-1 space-y-8">
          {tab === 'profile' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Profile Card */}
              <div className="bg-[#0A0A0B] border border-zinc-800/80 p-8 rounded-2xl shadow-xl">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <User size={20} className="text-amber-500" />
                  Personal Information
                </h2>
                
                <div className="flex items-start gap-8 mb-8 pb-8 border-b border-zinc-800/50">
                  <div className="w-24 h-24 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center text-3xl font-bold text-zinc-500 relative group cursor-pointer overflow-hidden">
                    {profile?.full_name?.charAt(0).toUpperCase() || 'U'}
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs text-white">Upload</span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Full Name</label>
                        <input 
                          type="text" 
                          defaultValue={profile?.full_name || ''} 
                          className="w-full bg-zinc-900/50 border border-zinc-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Email Address</label>
                        <input 
                          type="email" 
                          disabled 
                          value={user?.email || ''} 
                          className="w-full bg-zinc-900/30 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-500 cursor-not-allowed"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-zinc-200 transition-colors shadow-sm">
                    Save Changes
                  </button>
                </div>
              </div>

              {/* Usage Stats Card */}
              <div className="bg-[#0A0A0B] border border-zinc-800/80 p-8 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <BarChart3 size={20} className="text-amber-500" />
                  Usage & Limits
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-5">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <p className="text-zinc-400 text-sm mb-1">Request Quota</p>
                        <p className="text-xl font-bold text-white">
                          {usageCount} <span className="text-sm font-normal text-zinc-500">/ {maxLimit} requests</span>
                        </p>
                      </div>
                      <span className="text-xs font-medium text-amber-500 bg-amber-500/10 px-2 py-1 rounded">
                        {profile?.plan === 'free' ? 'Daily Reset' : 'Fair Usage'}
                      </span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-amber-600 to-amber-400 h-2 rounded-full" style={{ width: `${usagePercentage}%` }}></div>
                    </div>
                  </div>

                  <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-5">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <p className="text-zinc-400 text-sm mb-1">Words per Request</p>
                        <p className="text-2xl font-bold text-white">
                          Max <span className="text-lg text-zinc-500">{profile?.plan === 'premium' ? '2500' : profile?.plan === 'pro' ? '1500' : '150'}</span>
                        </p>
                      </div>
                      <span className="text-xs font-medium text-zinc-400 bg-zinc-800 px-2 py-1 rounded capitalize">{profile?.plan || 'Free'} Plan Limit</span>
                    </div>
                    {profile?.plan !== 'premium' && (
                      <p className="text-xs text-zinc-500 mt-3">Upgrade to unlock longer requests and better quality.</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Account Management Card */}
              <div className="bg-[#0A0A0B] border border-red-900/30 p-8 rounded-2xl shadow-xl relative overflow-hidden">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Shield size={20} className="text-red-500" />
                  Account Management
                </h2>
                
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <form action={logout}>
                    <button type="submit" className="px-6 py-2.5 rounded-lg font-medium bg-zinc-800 hover:bg-zinc-700 text-white transition-colors border border-zinc-700">
                      Log Out
                    </button>
                  </form>
                  <form action={deleteAccount}>
                    <button type="submit" className="px-6 py-2.5 rounded-lg font-medium bg-red-500/10 hover:bg-red-500/20 text-red-500 transition-colors border border-red-500/20">
                      Delete Account
                    </button>
                  </form>
                </div>
                <p className="text-sm text-zinc-500 mt-4">
                  Warning: Deleting your account is permanent and cannot be undone. All your history, templates, and remaining credits will be lost.
                </p>
              </div>
            </div>
          )}

          {tab === 'billing' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Current Plan Alert */}
              <div className="bg-gradient-to-r from-zinc-900 to-[#0A0A0B] border border-zinc-800 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                    <Shield size={24} className={profile?.plan === 'premium' ? 'text-amber-500' : 'text-zinc-400'} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg capitalize">Current Plan: {profile?.plan || 'Free'} Tier</h3>
                    <p className="text-zinc-400 text-sm mt-1">
                      {profile?.plan === 'premium' 
                        ? 'You have access to maximum usage and ultra quality.' 
                        : profile?.plan === 'pro' 
                          ? 'You are using the advanced multi-pass humanizer.' 
                          : 'You are using the basic fast-pass humanizer.'}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-xs text-zinc-500 mb-2">
                    {profile?.plan === 'free' ? 'Daily limits active' : 'Fair usage active'}
                  </p>
                  {profile?.plan !== 'premium' && (
                    <button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-[0_0_15px_rgba(212,168,83,0.2)]">
                      Upgrade to {profile?.plan === 'pro' ? 'Premium' : 'Pro'}
                    </button>
                  )}
                </div>
              </div>

              {/* Pricing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Free Plan */}
                <div className="bg-[#0A0A0B] border border-zinc-800 rounded-2xl p-6 relative flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">Free Plan</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white">$0</span>
                      <span className="text-zinc-500">/forever</span>
                    </div>
                    <p className="text-sm text-zinc-400 mt-4">Test the waters with basic capabilities.</p>
                  </div>

                  <div className="flex-1 space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-zinc-600 mt-0.5 shrink-0" />
                      <span className="text-zinc-300 text-sm">3 Requests per day</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-zinc-600 mt-0.5 shrink-0" />
                      <span className="text-zinc-300 text-sm">Max 150 words per request</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-zinc-600 mt-0.5 shrink-0" />
                      <span className="text-zinc-300 text-sm">Fast Mode (Single-pass AI)</span>
                    </div>
                    <div className="flex items-start gap-3 opacity-50">
                      <Shield size={18} className="text-zinc-600 mt-0.5 shrink-0" />
                      <span className="text-zinc-500 text-sm line-through">Advanced Multi-pass Rewrite</span>
                    </div>
                  </div>

                  <button className="w-full py-3 rounded-lg border border-zinc-700 text-zinc-300 font-medium cursor-default bg-zinc-800/30">
                    Current Plan
                  </button>
                </div>

                {/* Pro Plan */}
                <div className="bg-[#0A0A0B] border-2 border-amber-500/50 rounded-2xl p-6 relative flex flex-col shadow-[0_0_30px_rgba(212,168,83,0.05)] overflow-hidden">
                  <div className="absolute top-0 right-0 bg-amber-500 text-black text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                    RECOMMENDED
                  </div>
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/20 blur-3xl rounded-full pointer-events-none" />

                  <div className="mb-6 relative">
                    <h3 className="text-xl font-bold text-amber-500 mb-2 flex items-center gap-2">
                      <Zap size={20} className="fill-amber-500" /> Pro
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white">$10</span>
                      <span className="text-zinc-500">/month</span>
                    </div>
                    <p className="text-sm text-zinc-300 mt-4 font-medium">Designed for regular professional use.</p>
                  </div>

                  <div className="flex-1 space-y-4 mb-8 relative">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-amber-500 mt-0.5 shrink-0" />
                      <span className="text-white text-sm font-medium">High usage supported</span>
                    </div>
                    <div className="flex items-start gap-3 pl-8 -mt-2">
                      <span className="text-zinc-400 text-xs">Fair usage applies</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-amber-500 mt-0.5 shrink-0" />
                      <span className="text-zinc-300 text-sm">Advanced Multi-pass Pipeline</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-amber-500 mt-0.5 shrink-0" />
                      <span className="text-zinc-300 text-sm">Smart Controls & Templates</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-amber-500 mt-0.5 shrink-0" />
                      <span className="text-zinc-300 text-sm">Expanded History Access</span>
                    </div>
                  </div>

                  <button className="w-full py-3 rounded-lg bg-amber-500 text-black font-bold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 relative z-10">
                    Upgrade to Pro
                  </button>
                </div>

                {/* Premium Plan */}
                <div className="bg-[#0A0A0B] border border-zinc-800 rounded-2xl p-6 relative flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white">$20</span>
                      <span className="text-zinc-500">/month</span>
                    </div>
                    <p className="text-sm text-zinc-400 mt-4">For power users and heavy workloads.</p>
                  </div>

                  <div className="flex-1 space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-amber-500 mt-0.5 shrink-0" />
                      <span className="text-white text-sm font-medium">Maximum usage supported</span>
                    </div>
                    <div className="flex items-start gap-3 pl-8 -mt-2">
                      <span className="text-zinc-400 text-xs">Fair usage applies</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-amber-500 mt-0.5 shrink-0" />
                      <span className="text-zinc-300 text-sm">Ultra Humanization Quality</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-amber-500 mt-0.5 shrink-0" />
                      <span className="text-zinc-300 text-sm">Advanced Templates</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-amber-500 mt-0.5 shrink-0" />
                      <span className="text-zinc-300 text-sm">Fastest processing priority</span>
                    </div>
                  </div>

                  <button className="w-full py-3 rounded-lg bg-white text-black font-bold hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5 relative z-10">
                    Upgrade to Premium
                  </button>
                </div>
              </div>

              {/* Pay-as-you-go Credits */}
              <div className="bg-[#0A0A0B] border border-zinc-800 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Need a one-time boost?</h3>
                  <p className="text-zinc-400 text-sm">Get 1,000 extra words to use anytime without a subscription.</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-white">$1.00</span>
                  <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-2 rounded-lg font-medium transition-colors border border-zinc-700">
                    Buy Credits
                  </button>
                </div>
              </div>
            </div>
          )}

          {tab === 'api' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-[#0A0A0B] border border-zinc-800 p-8 rounded-2xl shadow-xl">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <Key size={20} className="text-amber-500" />
                      Developer API Keys
                    </h2>
                    <p className="text-zinc-400 text-sm">Use these keys to authenticate API requests to the HumanizeAI Pro engine.</p>
                  </div>
                  <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2 text-sm shadow-sm">
                    <CheckCircle2 size={16} /> Create New Key
                  </button>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-xl overflow-hidden">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-zinc-800/50 text-zinc-400 border-b border-zinc-800/80">
                      <tr>
                        <th className="px-6 py-4 font-medium">NAME</th>
                        <th className="px-6 py-4 font-medium">KEY</th>
                        <th className="px-6 py-4 font-medium">CREATED</th>
                        <th className="px-6 py-4 font-medium text-right">ACTION</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50">
                      <tr className="hover:bg-zinc-800/20 transition-colors">
                        <td className="px-6 py-4 text-white font-medium">Production Key</td>
                        <td className="px-6 py-4 font-mono text-zinc-500 flex items-center gap-2">
                          sk_live_••••••••••••••••••••••••
                          <Copy size={14} className="text-zinc-400 hover:text-white cursor-pointer" />
                        </td>
                        <td className="px-6 py-4 text-zinc-400">Oct 24, 2024</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-red-400 hover:text-red-300 font-medium text-xs">Revoke</button>
                        </td>
                      </tr>
                      <tr className="hover:bg-zinc-800/20 transition-colors">
                        <td className="px-6 py-4 text-white font-medium">Testing environment</td>
                        <td className="px-6 py-4 font-mono text-zinc-500 flex items-center gap-2">
                          sk_test_••••••••••••••••••••••••
                          <Copy size={14} className="text-zinc-400 hover:text-white cursor-pointer" />
                        </td>
                        <td className="px-6 py-4 text-zinc-400">Oct 25, 2024</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-red-400 hover:text-red-300 font-medium text-xs">Revoke</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 p-5 bg-amber-500/5 border border-amber-500/20 rounded-xl flex items-start gap-4">
                  <Shield className="text-amber-500 shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-amber-500 font-medium mb-1">Keep your keys secure</h4>
                    <p className="text-sm text-amber-500/80">Do not share your API keys in publicly accessible areas such as GitHub, client-side code, and so forth. All API requests must be made over HTTPS.</p>
                  </div>
                </div>

                <div className="mt-6">
                  <a href="#" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                    <ExternalLink size={14} /> View API Documentation
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
