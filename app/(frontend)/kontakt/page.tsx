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
}

export default async function KontaktPage({
  searchParams,
}: {
  searchParams: Promise<{ betreff?: string }>
}) {
  const { betreff } = await searchParams
  const defaultSubject = betreff ? SUBJECTS[betreff] : undefined
  const partnerIntro = betreff === 'partnerschaft'

  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title={partnerIntro ? 'Werde unser Haven' : 'Schreib uns'}
        intro={
          partnerIntro
            ? 'Erzähl uns, wo Studierende bei euch etwas bewegen könnten. Wir entwickeln gemeinsam ein Angebot, das zu eurer Einrichtung passt.'
            : 'Du hast eine Frage, möchtest mit uns zusammenarbeiten oder uns unterstützen? Wir melden uns so bald wie möglich.'
        }
      />
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
