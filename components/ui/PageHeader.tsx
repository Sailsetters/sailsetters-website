import Image from 'next/image'
import type { ReactNode } from 'react'

import Container from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/SectionHeading'

/**
 * Header for the inner pages. One blob at background opacity (the guide's
 * 12–20 %), never the full-opacity one — that is reserved for the homepage.
 */
export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: string
  intro?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden pt-28 pb-10 lg:pt-40 lg:pb-14">
      <Image
        src="/blob_warm_b.png"
        alt=""
        width={654}
        height={828}
        priority
        className="pointer-events-none absolute -top-40 -right-40 w-[360px] opacity-[0.14] lg:-top-56 lg:-right-24 lg:w-[560px]"
      />
      <Container className="relative flex max-w-[1200px] flex-col gap-4">
        <Eyebrow tone="port">{eyebrow}</Eyebrow>
        <h1 className="max-w-[800px] text-[40px] leading-[1.06] tracking-tight lg:text-[56px]">{title}</h1>
        {intro && <p className="max-w-[640px] text-lg leading-relaxed lg:text-xl">{intro}</p>}
      </Container>
    </section>
  )
}
