import type { ReactNode } from 'react'

interface Props {
  eyebrow?: string
  title: ReactNode
  subtitle?: string
  align?: 'center' | 'left'
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'center' }: Props) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-burgundy-900 leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-burgundy-700/70 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
