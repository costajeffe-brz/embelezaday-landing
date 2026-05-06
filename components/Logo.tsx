import Image from 'next/image'

interface Props {
  variant?: 'full' | 'icon'
  className?: string
  priority?: boolean
}

export function Logo({ variant = 'full', className = '', priority = false }: Props) {
  if (variant === 'icon') {
    return (
      <Image
        src="/icon.png"
        alt="EmbelezaDay"
        width={40}
        height={40}
        priority={priority}
        className={className}
      />
    )
  }
  return (
    <Image
      src="/logo.png"
      alt="EmbelezaDay"
      width={180}
      height={48}
      priority={priority}
      className={className}
      sizes="180px"
    />
  )
}
