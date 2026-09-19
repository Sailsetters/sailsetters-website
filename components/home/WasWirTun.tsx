import Container from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

type Props = {
  aktiveMitglieder: string
  projekteProSemester: string
  partnerCount: number
}

export default function WasWirTun({ aktiveMitglieder, projekteProSemester, partnerCount }: Props) {
  const kennzahlen = [
    { value: aktiveMitglieder, label: 'aktive Sailsetter:innen' },
    { value: projekteProSemester, label: 'Projekte pro Semester' },
    { value: String(partnerCount), label: 'Havens und Partner in München' },
  ]

  return (
    <>
      <section id="ueber-uns" className="py-16 lg:py-24">
        <Container className="flex flex-col gap-10 lg:gap-14">
          <SectionHeading eyebrow="Was wir tun">Bildung auf Augenhöhe, getragen von Studierenden</SectionHeading>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl lg:text-[26px]">Vision</h3>
              <p className="text-base leading-relaxed lg:text-lg">
                Unsere Vision ist ein bildungsgerechtes Deutschland, in dem alle Kinder und
                Jugendlichen Zugang zu schulischer und sozialer Bildung haben – und damit die
                Chance auf ein selbstbestimmtes Leben.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl lg:text-[26px]">Mission</h3>
              <p className="text-base leading-relaxed lg:text-lg">
                Als Studierende aller Fachrichtungen entwickeln wir eigenständige Projekte, die
                Kinder und Jugendliche auf Augenhöhe begleiten. Jede:r Sailsetter:in bringt dafür
                etwa 20 Stunden pro Semester ein und erhält ein Zertifikat für das Engagement.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-dune py-12 lg:py-18" aria-label="Kennzahlen">
        <Container className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {kennzahlen.map((k) => (
            <div key={k.label} className="flex flex-col gap-2">
              <span className="font-display text-[56px] font-semibold leading-none text-port lg:text-[72px]">
                {k.value}
              </span>
              <span className="text-driftwood lg:text-[17px]">{k.label}</span>
            </div>
          ))}
        </Container>
      </section>
    </>
  )
}
