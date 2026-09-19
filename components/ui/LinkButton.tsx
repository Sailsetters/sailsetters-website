import Link from 'next/link'
import type { ComponentProps } from 'react'

const base =
  'inline-flex items-center justify-center rounded-full px-7 py-4 text-[17px] font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-port/40'

/**
 * Text colours follow the design guide's contrast rules: Paper on Port,
 * Ink on Sunrise, never Paper on Sunrise.
 */
const variants = {
  primary: 'bg-port text-paper hover:bg-ink',
  secondary: 'border-[1.5px] border-ink text-ink hover:bg-ink hover:text-sand',
  sunrise: 'bg-sunrise text-ink hover:bg-sand',
  onDark: 'border-[1.5px] border-sand text-sand hover:bg-sand hover:text-ink',
} as const

type Props = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants
  size?: 'md' | 'sm'
}

export default function LinkButton({ variant = 'primary', size = 'md', className = '', ...props }: Props) {
  const sizing = size === 'sm' ? 'px-5 py-3 text-[15px]' : ''
  return <Link className={`${base} ${variants[variant]} ${sizing} ${className}`} {...props} />
}
