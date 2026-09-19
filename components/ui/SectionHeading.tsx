import type { ReactNode } from 'react'

export function Eyebrow({ children, tone = 'driftwood' }: { children: ReactNode; tone?: 'driftwood' | 'port' | 'sunrise' }) {
  const color = { driftwood: 'text-driftwood', port: 'text-port', sunrise: 'text-sunrise' }[tone]
  return <span className={`text-sm font-semibold uppercase tracking-[0.08em] ${color}`}>{children}</span>
}

export function SectionHeading({
  eyebrow,
  children,
  intro,
  className = '',
}: {
  eyebrow: string
  children: ReactNode
  intro?: ReactNode
  className?: string
}) {
  return (
    <div className={`flex max-w-[800px] flex-col gap-3 ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl leading-[1.12] tracking-tight lg:text-[44px]">{children}</h2>
      {intro && <p className="pt-2 text-lg leading-relaxed">{intro}</p>}
    </div>
  )
}
