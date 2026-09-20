import Container from '@/components/ui/Container'
import InfoCard from '@/components/ui/InfoCard'
import LinkButton from '@/components/ui/LinkButton'
import { SectionHeading } from '@/components/ui/SectionHeading'

const taskforces = [
  {
    title: 'Marketing',
    text: 'Social Media, Website, Fotos und Texte: alles, womit Sailsetters nach außen sichtbar wird.',
  },
  {
    title: 'Outreach',
    text: 'Sponsoring, Förderanträge und der Kontakt zu Unternehmen, Stiftungen und Hochschulen.',
  },
  {
    title: 'Community',
    text: 'Onboarding Day, Reflection Day und gemeinsame Events: alles, was aus Mitgliedern ein Team macht.',
  },
  {
    title: 'Recruiting',
    text: 'Bewerbungen, Kennenlerngespräche und der Start neuer Sailsetter:innen.',
  },
]

/** Die vier Taskforces neben den Projektteams. */
export default function Taskforces() {
  return (
    <section id="taskforces" className="py-16 lg:py-24">
      <Container className="flex flex-col gap-10 lg:gap-12">
        <SectionHeading
          eyebrow="Taskforces"
          intro="Neben den Projektteams tragen vier Taskforces den Verein. Sie kümmern sich um alles, was Projekte überhaupt erst möglich macht."
        >
          Vier Teams hinter den Projekten
        </SectionHeading>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {taskforces.map((t) => (
            <InfoCard key={t.title} title={t.title} text={t.text} />
          ))}
        </ul>

        <div className="flex flex-col items-start gap-4 rounded-[20px] bg-dune p-7 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div className="flex max-w-[720px] flex-col gap-1">
            <h3 className="text-2xl">Lieber Taskforce als Projekt?</h3>
            <p className="leading-relaxed">
              Auch dafür suchen wir Leute. Wer Erfahrung in Marketing, Outreach, Community oder
              Recruiting sammeln will, ist bei uns richtig, auch ohne aktive Projektarbeit.
            </p>
          </div>
          <LinkButton href="/bewerbung" className="shrink-0">
            Sailsetter:in werden
          </LinkButton>
        </div>
      </Container>
    </section>
  )
}
