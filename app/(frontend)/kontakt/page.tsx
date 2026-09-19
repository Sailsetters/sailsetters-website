import type { Metadata } from 'next'

import FormPage from '@/components/forms/FormPage'
import PageHeader from '@/components/ui/PageHeader'
import { verein } from '@/lib/verein'

import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Kontakt · Sailsetters',
  description: 'Schreib uns eine Nachricht. Wir freuen uns auf deine Anfrage.',
}

// Known prefills, keyed by the ?betreff= value the homepage links with.
const SUBJECTS: Record<string, string> = {
  partnerschaft: 'Partnerschaft mit Sailsetters',
  foerderung: 'Förderung von Sailsetters',
  spende: 'Spende an Sailsetters',
}

// Header copy per prefill; anything else gets the default.
const HEADERS: Record<string, { title: string; intro: string }> = {
  partnerschaft: {
    title: 'Werde unser Haven',
    intro: 'Erzähl uns, wo Studierende bei euch etwas bewegen könnten. Wir entwickeln gemeinsam ein Angebot, das zu eurer Einrichtung passt.',
  },
  spende: {
    title: 'Danke, dass du uns unterstützen willst',
    intro: 'Schreib uns kurz, und wir schicken dir alles, was du für deine Spende brauchst: die Bankverbindung und auf Wunsch eine Zuwendungsbestätigung.',
  },
}

export default async function KontaktPage({
  searchParams,
}: {
  searchParams: Promise<{ betreff?: string }>
}) {
  const { betreff } = await searchParams
  const defaultSubject = betreff ? SUBJECTS[betreff] : undefined
  const header = (betreff && HEADERS[betreff]) || {
    title: 'Schreib uns',
    intro: 'Du hast eine Frage, möchtest mit uns zusammenarbeiten oder uns unterstützen? Wir melden uns so bald wie möglich.',
  }

  return (
    <>
      <PageHeader eyebrow="Kontakt" title={header.title} intro={header.intro} />
      <FormPage
        form={<ContactForm defaultSubject={defaultSubject} />}
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
