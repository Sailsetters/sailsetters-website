import Image from 'next/image'

import Container from '@/components/ui/Container'
import LinkButton from '@/components/ui/LinkButton'
import { Eyebrow } from '@/components/ui/SectionHeading'

export default function Mitmachen() {
  return (
    <section id="mitmachen" className="bg-ink py-16 text-sand lg:py-24">
      <Container className="flex flex-col gap-8 lg:gap-14">
        <div className="flex items-center gap-4 lg:gap-5">
          <Image src="/logo_paper.png" alt="" width={44} height={60} className="h-11 w-8 lg:h-[60px] lg:w-11" />
          <h2 className="text-3xl leading-[1.12] tracking-tight text-sand lg:text-[44px]">Setz mit uns die Segel</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-start gap-4 border-t border-sand/25 pt-6 lg:pt-7">
            <Eyebrow tone="sunrise">Für Studierende</Eyebrow>
            <h3 className="text-2xl text-sand lg:text-[28px]">Werde Sailsetter:in</h3>
            <p className="leading-relaxed text-dune lg:text-[17px]">
              Etwa 20 Stunden im Semester, ein Projektteam, echte Verantwortung – und ein Zertifikat
              für dein Engagement. Egal, was du studierst.
            </p>
            <LinkButton href="/bewerbung" variant="sunrise" className="mt-2">
              Jetzt bewerben
            </LinkButton>
          </div>
          <div className="flex flex-col items-start gap-4 border-t border-sand/25 pt-6 lg:pt-7">
            <Eyebrow tone="sunrise">Für Institutionen</Eyebrow>
            <h3 className="text-2xl text-sand lg:text-[28px]">Werde unser Haven</h3>
            <p className="leading-relaxed text-dune lg:text-[17px]">
              Schulen, Einrichtungen und Vereine in München: Erzähl uns, wo Studierende bei euch
              etwas bewegen könnten. Wir melden uns.
            </p>
            <LinkButton href="/kontakt?betreff=partnerschaft" variant="onDark" className="mt-2">
              Kontakt aufnehmen
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  )
}
