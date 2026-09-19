import MediaImage from '@/components/MediaImage'
import Container from '@/components/ui/Container'
import LinkButton from '@/components/ui/LinkButton'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Partner } from '@/payload-types'

export default function PartnerSection({ partners }: { partners: Partner[] }) {
  return (
    <section id="partner" className="bg-dune py-16 lg:py-24">
      <Container className="flex flex-col gap-10 lg:gap-12">
        <SectionHeading eyebrow="Havens & Partner">
          Unsere Havens sind die Orte, an denen unsere Arbeit ankommt
        </SectionHeading>

        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-5">
          {partners.map((p) => {
            const tile = (
              <MediaImage
                media={p.logo}
                sizes="200px"
                className="h-auto max-h-14 w-auto max-w-[75%] object-contain lg:max-h-16"
              />
            )
            const tileClass =
              'flex h-24 items-center justify-center rounded-xl bg-paper p-4 lg:h-[120px] lg:p-6'
            return (
              <li key={p.id}>
                {p.website ? (
                  <a href={p.website} target="_blank" rel="noopener noreferrer" aria-label={p.name} className={tileClass}>
                    {tile}
                  </a>
                ) : (
                  <div className={tileClass} title={p.name}>
                    {tile}
                  </div>
                )}
              </li>
            )
          })}
        </ul>

        <div className="grid grid-cols-1 items-center gap-6 rounded-[20px] bg-paper p-7 lg:grid-cols-[1.4fr_1fr] lg:gap-12 lg:p-12">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl leading-tight lg:text-[30px]">Wir suchen immer neue Partner</h3>
            <p className="leading-relaxed lg:text-[17px]">
              Du arbeitest an einer Schule, in einer Einrichtung der Kinder- und Jugendhilfe oder in
              einem Verein in München und könntest Unterstützung durch Studierende gebrauchen? Wir
              entwickeln gemeinsam ein Angebot, das zu euch passt – von einmaligen Workshops bis zur
              wöchentlichen Begleitung über ein ganzes Semester.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:justify-self-end">
            <LinkButton href="/kontakt?betreff=partnerschaft">Partner werden</LinkButton>
          </div>
        </div>
      </Container>
    </section>
  )
}
