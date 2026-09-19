import type { ReactNode } from 'react'

import Blob from '@/components/ui/Blob'
import Container from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/SectionHeading'

/** Header for the inner pages, with a full-colour blob bleeding off the top right. */
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
      {/* Sized to end inside the header, so its lower edge is a curve and not a cut. */}
      <Blob
        name="warm-b"
        priority
        className="-top-20 -right-24 w-[240px] sm:-top-24 sm:-right-20 sm:w-[300px] lg:-top-28 lg:-right-16 lg:w-[340px]"
      />
      <Container className="relative flex max-w-[1200px] flex-col gap-4">
        <Eyebrow tone="port">{eyebrow}</Eyebrow>
        <h1 className="max-w-[800px] text-[40px] leading-[1.06] tracking-tight lg:text-[56px]">{title}</h1>
        {intro && <p className="max-w-[640px] text-lg leading-relaxed lg:text-xl">{intro}</p>}
      </Container>
    </section>
  )
}
