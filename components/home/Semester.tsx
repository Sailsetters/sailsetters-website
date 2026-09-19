import Container from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

export const semesterSteps = [
  { title: 'Bewerbung', text: 'Über unser Online-Formular – Name, Studium, Motivation. Mehr brauchen wir am Anfang nicht.' },
  { title: 'Kennenlernen', text: 'Ein Gespräch mit zwei Sailsetter:innen. Wir wollen wissen, was dich antreibt – nicht deinen Lebenslauf.' },
  { title: 'Onboarding Day', text: 'Alle neuen Sailsetter:innen lernen den Verein, die Havens und ihre Projektteams kennen.' },
  { title: 'Projektphase', text: 'Etwa 20 Stunden über das Semester verteilt, in einem oder mehreren Projekten.' },
  { title: 'Reflection Day', text: 'Alle Aktiven tauschen in einem Workshop aus, was sie in ihren Projekten erlebt haben.' },
]

export default function Semester() {
  return (
    <section id="semester" className="py-16 lg:py-24">
      <Container className="flex flex-col gap-10 lg:gap-14">
        <SectionHeading eyebrow="Mitmachen">Ein Semester bei Sailsetters</SectionHeading>
        <ol className="relative grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-6">
          {/* connecting line: vertical on mobile, horizontal from md */}
          <span aria-hidden="true" className="absolute top-5 bottom-5 left-5 w-0.5 bg-dune md:top-6 md:right-6 md:bottom-auto md:left-6 md:h-0.5 md:w-auto" />
          {semesterSteps.map((s, i) => (
            <li key={s.title} className="relative flex gap-4 md:flex-col md:gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-port font-display text-[17px] font-semibold text-paper md:h-12 md:w-12 md:text-xl">
                {i + 1}
              </span>
              <div className="flex flex-col gap-1.5 pt-2 md:pt-0">
                <h3 className="text-xl lg:text-[22px]">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-driftwood">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
