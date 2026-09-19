import Container from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

/*
 * Figures are quoted from named studies; keep the source line when editing.
 * DZHW Bildungstrichter 2024, IGLU 2021, Statistisches Bundesamt (Abgangsjahr 2024).
 */
const stats = [
  {
    big: '25',
    small: 'von 100',
    text: 'Kindern aus Nichtakademikerfamilien beginnen ein Studium. Bei Akademikerkindern sind es 78 von 100.',
    source: 'DZHW, Bildungstrichter 2024',
  },
  {
    big: '25',
    small: '%',
    text: 'der Viertklässler:innen erreichen beim Lesen nicht den Mindeststandard. 2016 waren es noch 19 %.',
    source: 'IGLU 2021',
  },
  {
    big: '6,9',
    small: '%',
    text: 'eines Jahrgangs verlassen die Schule ohne Hauptschulabschluss – seit 2018 nahezu unverändert.',
    source: 'Statistisches Bundesamt, Abgangsjahr 2024',
  },
]

function Term({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="text-sunrise" aria-hidden="true">
          {icon}
        </span>
        <h3 className="text-2xl lg:text-[26px]">{title}</h3>
      </div>
      <p className="text-base leading-relaxed lg:text-lg">{children}</p>
    </div>
  )
}

export default function Warum() {
  return (
    <section id="warum" className="py-16 lg:py-24">
      <Container className="flex flex-col gap-10 lg:gap-14">
        <SectionHeading eyebrow="Warum es uns gibt">Bildung darf nicht vom Elternhaus abhängen</SectionHeading>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          <Term
            title="Bildungsgerechtigkeit"
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7l9-4 9 4-9 4-9-4z" />
                <path d="M7 9v5c0 1.5 2.5 3 5 3s5-1.5 5-3V9" />
                <path d="M21 7v6" />
              </svg>
            }
          >
            heißt: Jedes Kind bekommt die Unterstützung, die es braucht, um seine Möglichkeiten
            auszuschöpfen – unabhängig davon, was seine Eltern verdienen, gelernt haben oder
            woher sie kommen.
          </Term>
          <Term
            title="Chancengleichheit"
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18" />
                <path d="M5 7h14" />
                <path d="M5 7l-3 6a3 3 0 0 0 6 0l-3-6z" />
                <path d="M19 7l-3 6a3 3 0 0 0 6 0l-3-6z" />
                <path d="M8 21h8" />
              </svg>
            }
          >
            heißt: Der Weg zu Abschluss, Ausbildung oder Studium steht allen offen – nicht nur
            denen, die Nachhilfe, Bücher und Rückenwind von zu Hause mitbekommen.
          </Term>
        </div>

        <p className="max-w-[860px] text-lg leading-relaxed lg:text-xl">
          In Deutschland hängt der Bildungsweg eines Kindes eng mit der sozialen Herkunft
          zusammen. Das ist ungerecht für die Einzelnen – und es kostet die Gesellschaft
          Talente, die sie braucht. Wir setzen dort an, wo die Weichen gestellt werden: in der
          Grundschule, beim Übertritt und in den Jahren danach.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          {stats.map((s) => (
            <article key={s.source} className="flex flex-col gap-3 rounded-2xl bg-paper p-7 shadow-[0_1px_2px_rgba(31,26,23,0.06)]">
              <div className="flex items-baseline gap-2.5 font-display font-semibold leading-none text-port">
                <span className="text-[56px] lg:text-[64px]">{s.big}</span>
                <span className="text-2xl lg:text-[26px]">{s.small}</span>
              </div>
              <p className="leading-relaxed">{s.text}</p>
              <span className="text-[13px] text-driftwood">{s.source}</span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
