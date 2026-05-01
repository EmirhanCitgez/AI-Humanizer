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
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const fullName = formData.get('full_name') as string

  const { createAdminClient } = await import('@/lib/supabase/admin')
  const adminSupabase = createAdminClient()

  // Admin ile kullanıcı oluştur — Supabase SMTP tetiklenmiyor
  const { data: userData, error: createError } = await adminSupabase.auth.admin.createUser({
    email,
    password,
    user_metadata: { full_name: fullName },
    email_confirm: false, // Email onayı gerekli
  })

  if (createError && !createError.message.toLowerCase().includes('already registered')) {
    redirect(`/auth/signup?message=${encodeURIComponent(createError.message)}`)
  }

  // Confirmation link oluştur
  const { data: linkData, error: linkError } = await adminSupabase.auth.admin.generateLink({
    type: 'signup',
    email,
    password,
  })

  if (linkError || !linkData?.properties?.action_link) {
    redirect(`/auth/signup?message=${encodeURIComponent('Could not generate confirmation link. Please try again.')}`)
  }

  // Resend SDK ile email gönder
  const { Resend } = await import('resend')
  const resend = new Resend(process.env.RESEND_API_KEY)

  const firstName = fullName?.split(' ')[0] || 'there'
  const confirmUrl = linkData.properties.action_link

  await resend.emails.send({
    from: 'LexoraAI <onboarding@resend.dev>',
    to: email,
    subject: 'Confirm your LexoraAI account',
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#09090b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#09090b;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#0f0f11;border:1px solid #27272a;border-radius:16px;overflow:hidden;max-width:560px;">
        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#1c1600 0%,#0f0f11 100%);padding:32px 40px;border-bottom:1px solid #27272a;">
          <div style="font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.04em;">
            <span style="color:#f59e0b;">✦</span> LexoraAI
          </div>
        </td></tr>
        <!-- Body -->
        <tr><td style="padding:40px;">
          <h1 style="color:#ffffff;font-size:24px;font-weight:700;margin:0 0 12px;letter-spacing:-0.02em;">Hey ${firstName}, confirm your email</h1>
          <p style="color:#a1a1aa;font-size:15px;line-height:1.6;margin:0 0 32px;">
            You&apos;re almost ready to start humanizing your text. Click the button below to confirm your email address and activate your LexoraAI account.
          </p>
          <a href="${confirmUrl}" style="display:inline-block;background:#f59e0b;color:#000000;text-decoration:none;font-weight:700;font-size:15px;padding:14px 32px;border-radius:10px;letter-spacing:-0.01em;">
            Confirm my account →
          </a>
          <p style="color:#52525b;font-size:13px;line-height:1.5;margin:32px 0 0;">
            This link expires in 24 hours. If you didn&apos;t create a LexoraAI account, you can safely ignore this email.
          </p>
        </td></tr>
        <!-- Footer -->
        <tr><td style="padding:24px 40px;border-top:1px solid #27272a;">
          <p style="color:#3f3f46;font-size:12px;margin:0;">© 2026 LexoraAI. All rights reserved.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
  })

  redirect('/auth/signup?message=Check your email to confirm your account — link expires in 24 hours.&type=success')
}

export async function logout() {
  const supabase = createClient()
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  redirect('/auth/login')
}

export async function signInWithGoogle() {
  const supabase = createClient()
  const origin = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  })

  if (error) {
    redirect(`/auth/login?message=${encodeURIComponent(error.message)}`)
  }

  if (data.url) {
    redirect(data.url)
  }
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
  
  const origin = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  
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
