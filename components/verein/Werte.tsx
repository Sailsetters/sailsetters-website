import Container from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

function Block({ icon, title, children }: { icon?: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        {icon && (
          <span className="text-sunrise" aria-hidden="true">
            {icon}
          </span>
        )}
        <h3 className="text-2xl lg:text-[26px]">{title}</h3>
      </div>
      <p className="text-base leading-relaxed lg:text-lg">{children}</p>
    </div>
  )
}

/** Vision, Mission und die beiden Begriffe, für die der Verein steht. */
export default function Werte() {
  return (
    <section className="py-16 lg:py-24">
      <Container className="flex flex-col gap-14 lg:gap-20">
        <div className="flex flex-col gap-10 lg:gap-12">
          <SectionHeading eyebrow="Was wir tun">Bildung auf Augenhöhe, getragen von Studierenden</SectionHeading>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            <Block title="Vision">
              Unsere Vision ist ein bildungsgerechtes Deutschland, in dem alle Kinder und Jugendlichen
              Zugang zu schulischer und sozialer Bildung haben und damit die Chance auf ein
              selbstbestimmtes Leben.
            </Block>
            <Block title="Mission">
              Als Studierende aller Fachrichtungen entwickeln wir eigenständige Projekte, die Kinder
              und Jugendliche auf Augenhöhe begleiten. Jede:r Sailsetter:in bringt dafür im Schnitt
              ein bis zwei Stunden pro Woche ein und erhält ein Zertifikat für das Engagement.
            </Block>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:gap-12">
          <SectionHeading eyebrow="Wofür wir stehen">Zwei Begriffe, ein Anspruch</SectionHeading>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            <Block
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
              auszuschöpfen, unabhängig davon, was seine Eltern verdienen, gelernt haben oder woher
              sie kommen.
            </Block>
            <Block
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
              heißt: Der Weg zu Abschluss, Ausbildung oder Studium steht allen offen, nicht nur
              denen, die Nachhilfe, Bücher und Rückenwind von zu Hause mitbekommen.
            </Block>
          </div>
        </div>
      </Container>
    </section>
  )
}
