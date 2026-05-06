import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  size?: 'narrow' | 'default' | 'wide'
}

const sizes = {
  narrow: 'max-w-3xl',
  default: 'max-w-5xl',
  wide: 'max-w-6xl',
}

export function Container({ children, className = '', size = 'default' }: Props) {
  return (
    <div className={`w-full ${sizes[size]} mx-auto px-4 md:px-8 ${className}`}>
      {children}
    </div>
  )
}
