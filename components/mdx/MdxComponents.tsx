import Image from 'next/image'
import Link from 'next/link'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Button } from '@/components/ui/Button'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.embelezaday.com.br'

function CTA({ href = `${APP_URL}/auth?signup=1`, text = 'Começar grátis por 14 dias' }: { href?: string; text?: string }) {
  return (
    <div className="not-prose my-8 flex flex-col sm:flex-row items-center gap-3 p-5 bg-gradient-to-br from-primary-50 to-accent-50/40 border border-primary-100 rounded-2xl">
      <div className="flex-1 text-burgundy-800/80 text-sm">
        Quer testar o EmbelezaDay e ver isso funcionando na sua agenda?
      </div>
      <Button href={href} variant="primary" size="md" external>
        {text}
      </Button>
    </div>
  )
}

function Callout({ children, type = 'info' }: { children: ReactNode; type?: 'info' | 'tip' | 'warning' }) {
  const styles = {
    info: 'bg-primary-50/60 border-primary-200 text-burgundy-800',
    tip: 'bg-accent-50 border-accent-200 text-burgundy-800',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
  }
  const labels = { info: '💡', tip: '✨', warning: '⚠️' }
  return (
    <aside className={`not-prose my-6 p-4 border rounded-xl ${styles[type]}`}>
      <div className="text-sm leading-relaxed flex gap-2">
        <span className="shrink-0 text-base">{labels[type]}</span>
        <div>{children}</div>
      </div>
    </aside>
  )
}

function MdxLink({ href = '', children, ...props }: ComponentPropsWithoutRef<'a'>) {
  const isExternal = href.startsWith('http')
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary-600 underline-offset-2 hover:underline" {...props}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className="text-primary-600 underline-offset-2 hover:underline" {...props}>
      {children}
    </Link>
  )
}

function MdxImage({ src, alt }: ComponentPropsWithoutRef<'img'>) {
  if (typeof src !== 'string' || !src) return null
  return (
    <Image
      src={src}
      alt={alt ?? ''}
      width={1200}
      height={675}
      className="rounded-xl border border-primary-100 my-6"
    />
  )
}

export const mdxComponents = {
  CTA,
  Callout,
  a: MdxLink,
  img: MdxImage,
}
