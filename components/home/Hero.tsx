import Blob from '@/components/ui/Blob'
import Container from '@/components/ui/Container'
import LinkButton from '@/components/ui/LinkButton'
import { Eyebrow } from '@/components/ui/SectionHeading'

export default function Hero() {
  // No overflow-hidden on the section: the blob is meant to run on into the
  // next one. The horizontal bleed is clipped by <main> in the layout.
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-44 lg:pb-32">
      <Blob
        name="warm-a"
        priority
        className="-top-16 -right-44 w-[400px] sm:-top-24 sm:-right-36 sm:w-[560px] lg:-top-32 lg:w-[820px]"
      />
      <Container className="relative">
        <div className="flex max-w-[700px] flex-col gap-6 lg:gap-7">
          <Eyebrow tone="port">Studentischer Verein in München</Eyebrow>
          <h1 className="text-[40px] leading-[1.06] tracking-tight sm:text-[56px] lg:text-[68px]">
            Gemeinsam für ein bildungsgerechtes Deutschland
          </h1>
          <p className="max-w-[580px] text-lg leading-relaxed lg:text-xl">
            Wir sind Studierende der TUM und LMU und begleiten Kinder und Jugendliche in
            München bei ihrer schulischen und sozialen Entwicklung – in Projekten, die wir
            selbst entwickeln, und an der Seite unserer Havens.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
            <LinkButton href="/bewerbung">Sailsetter:in werden</LinkButton>
            <LinkButton href="/#partner" variant="secondary">
              Partner werden
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  )
}
