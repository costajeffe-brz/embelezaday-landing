'use client'

import { useState, type FormEvent } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState<string>('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setMessage('')

    const formData = new FormData(e.currentTarget)
    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      message: String(formData.get('message') ?? ''),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error ?? 'Falha ao enviar')
      }
      setStatus('sent')
      setMessage('Mensagem enviada! Em breve a gente responde no email que você informou.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Erro inesperado')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <label className="block">
          <span className="sr-only">Nome</span>
          <input
            type="text"
            name="name"
            required
            placeholder="Seu nome"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
          />
        </label>
        <label className="block">
          <span className="sr-only">Email</span>
          <input
            type="email"
            name="email"
            required
            placeholder="seu@email.com"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
          />
        </label>
      </div>
      <label className="block">
        <span className="sr-only">Mensagem</span>
        <textarea
          name="message"
          required
          rows={3}
          placeholder="Conta o que você precisa..."
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 resize-none"
        />
      </label>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="bg-white text-burgundy-900 font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
        >
          {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
        </button>
        {message && (
          <p className={`text-sm ${status === 'error' ? 'text-accent-300' : 'text-white/80'}`}>
            {message}
          </p>
        )}
      </div>
    </form>
  )
}
