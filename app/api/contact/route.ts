import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const CONTACT_TO = process.env.CONTACT_EMAIL_TO ?? 'costajeffe@gmail.com'
const CONTACT_FROM = process.env.CONTACT_EMAIL_FROM ?? 'EmbelezaDay <onboarding@resend.dev>'

interface Payload {
  name?: string
  email?: string
  message?: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: Request) {
  let body: Payload
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'JSON inválido' }, { status: 400 })
  }

  const name = (body.name ?? '').trim()
  const email = (body.email ?? '').trim()
  const message = (body.message ?? '').trim()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Campos obrigatórios faltando' }, { status: 400 })
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: 'Mensagem muito longa' }, { status: 400 })
  }

  // Without API key (local dev / not configured yet), just log
  if (!RESEND_API_KEY) {
    console.log('[contact] (RESEND_API_KEY missing — logging only)', { name, email, message })
    return NextResponse.json({ ok: true })
  }

  const resend = new Resend(RESEND_API_KEY)
  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `Contato pela landing — ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
    })
    if (error) {
      console.error('[contact] resend error', error)
      return NextResponse.json({ error: 'Falha ao enviar email' }, { status: 500 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] unexpected error', err)
    return NextResponse.json({ error: 'Erro inesperado' }, { status: 500 })
  }
}
