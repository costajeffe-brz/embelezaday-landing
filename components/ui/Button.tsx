import Link from 'next/link'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2'

const variants: Record<Variant, string> = {
  primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
  secondary: 'bg-white text-burgundy-800 border border-primary-200 hover:bg-primary-50',
  ghost: 'text-burgundy-800 hover:bg-primary-50',
}

const sizes: Record<Size, string> = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-sm px-4 py-2.5',
  lg: 'text-base px-6 py-3',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  children: ReactNode
}

interface AsLink extends CommonProps {
  href: string
  external?: boolean
}

interface AsButton extends CommonProps, Omit<ComponentPropsWithoutRef<'button'>, 'children'> {
  href?: undefined
}

export function Button(props: AsLink | AsButton) {
  const { variant = 'primary', size = 'md', children } = props
  const className = `${base} ${variants[variant]} ${sizes[size]}`

  if ('href' in props && props.href) {
    const isExternal = props.external || props.href.startsWith('http')
    return (
      <Link
        href={props.href}
        className={className}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    )
  }

  const { variant: _v, size: _s, children: _c, ...buttonProps } = props as AsButton
  void _v; void _s; void _c
  return <button className={className} {...buttonProps}>{children}</button>
}
