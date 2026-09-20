import type { Metadata } from 'next'

import FormPage from '@/components/forms/FormPage'
import PageHeader from '@/components/ui/PageHeader'
import { verein } from '@/lib/verein'

import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Kontakt · Sailsetters',
  description: 'Schreib uns eine Nachricht. Wir freuen uns auf deine Anfrage.',
}

// Prefills keyed by the ?betreff= value that /, /foerdern and /verein link
// with. Looked up with Object.hasOwn so ?betreff=constructor (an inherited
// key) falls through to the default instead of rendering an empty header.
type Prefill = { subject: string; title?: string; intro?: string }

const PREFILLS: Record<string, Prefill> = {
  partnerschaft: {
    subject: 'Partnerschaft mit Sailsetters',
    title: 'Werde unser Haven',
    intro: 'Erzähl uns, wo Studierende bei euch etwas bewegen könnten. Wir entwickeln gemeinsam ein Angebot, das zu eurer Einrichtung passt.',
  },
  spende: {
    subject: 'Spende an Sailsetters',
    title: 'Danke, dass du uns unterstützen willst',
    intro: 'Schreib uns kurz, und wir schicken dir alles, was du für deine Spende brauchst: die Bankverbindung und auf Wunsch eine Zuwendungsbestätigung.',
  },
  foerderung: {
    subject: 'Förderung von Sailsetters',
    title: 'Sailsetters dauerhaft fördern',
    intro: 'Unternehmen und Stiftungen, die uns über eine einzelne Spende hinaus unterstützen möchten: Schreib uns, was ihr euch vorstellt. Unsere Outreach-Taskforce meldet sich.',
  },
}

const DEFAULT_HEADER = {
  title: 'Schreib uns',
  intro: 'Du hast eine Frage, möchtest mit uns zusammenarbeiten oder uns unterstützen? Wir melden uns so bald wie möglich.',
}

export default async function KontaktPage({
  searchParams,
}: {
  searchParams: Promise<{ betreff?: string }>
}) {
  const { betreff } = await searchParams
  const prefill = betreff && Object.hasOwn(PREFILLS, betreff) ? PREFILLS[betreff] : undefined
  const header = prefill?.title ? { title: prefill.title, intro: prefill.intro } : DEFAULT_HEADER

  return (
    <>
      <PageHeader eyebrow="Kontakt" title={header.title} intro={header.intro} />
      <FormPage
        form={<ContactForm defaultSubject={prefill?.subject} />}
        aside={
          <>
            <div className="flex flex-col gap-3 rounded-[20px] bg-dune p-6">
              <h2 className="text-xl">{verein.name}</h2>
              <address className="not-italic leading-relaxed">
                {verein.street}
                <br />
                {verein.city}
              </address>
              <a href={`mailto:${verein.email}`} className="underline hover:text-port">
                {verein.email}
              </a>
            </div>
            <p className="px-1 text-[15px] text-driftwood">
              Wir sind ehrenamtlich unterwegs und antworten meist innerhalb weniger Tage.
            </p>
          </>
        }
      />
    </>
  )
}
