'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect(`/auth/login?message=${encodeURIComponent(error.message)}`)
  }

  revalidatePath('/', 'layout')
  redirect('/app/dashboard')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const fullName = formData.get('full_name') as string

  const { data: authData, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      }
    }
  })

  if (error) {
    redirect(`/auth/signup?message=${encodeURIComponent(error.message)}`)
  }

  if (!authData.session) {
    redirect('/auth/signup?message=Kayıt başarılı! Lütfen e-posta adresinize gelen doğrulama linkine tıklayarak hesabınızı onaylayın.&type=success')
  }

  revalidatePath('/', 'layout')
  redirect('/app/dashboard')
}

export async function logout() {
  const supabase = createClient()
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  redirect('/auth/login')
}

export async function deleteAccount() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (user) {
    const { createAdminClient } = await import('@/lib/supabase/admin')
    const adminSupabase = createAdminClient()
    
    // Delete profile (if not cascade) and then user from auth.users
    await supabase.from('profiles').delete().eq('id', user.id)
    await adminSupabase.auth.admin.deleteUser(user.id)
    
    await supabase.auth.signOut()
  }
  revalidatePath('/', 'layout')
  redirect('/')
}

export async function requestPasswordReset(formData: FormData) {
  const supabase = createClient()
  const email = formData.get('email') as string
  
  const origin = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3002'
  
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/update-password`,
  })

  if (error) {
    redirect(`/auth/reset-password?message=${encodeURIComponent(error.message)}`)
  }

  redirect('/auth/reset-password?message=Password reset link has been sent to your email.')
}

export async function updatePassword(formData: FormData) {
  const supabase = createClient()
  const password = formData.get('password') as string

  const { error } = await supabase.auth.updateUser({ password })

  if (error) {
    redirect(`/auth/update-password?message=${encodeURIComponent(error.message)}`)
  }

  redirect('/auth/login?message=Your password has been successfully updated. You can now log in.')
}
