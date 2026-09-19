import type { Metadata } from 'next'

import { semesterSteps } from '@/components/home/Semester'
import FormPage from '@/components/forms/FormPage'
import PageHeader from '@/components/ui/PageHeader'
import { verein } from '@/lib/verein'

import ApplicationForm from './ApplicationForm'

export const metadata: Metadata = {
  title: 'Sailsetter:in werden — Sailsetters',
  description:
    'Bewirb dich als Sailsetter:in und engagiere dich für Bildungsgerechtigkeit in München.',
}

export default function BewerbungPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mitmachen"
        title="Sailsetter:in werden"
        intro="Schön, dass du dabei sein möchtest. Erzähl uns kurz etwas über dich – wir melden uns danach für ein Kennenlerngespräch."
      />
      <FormPage
        form={<ApplicationForm />}
        aside={
          <>
            <div className="flex flex-col gap-4 rounded-[20px] bg-dune p-6">
              <h2 className="text-xl">So geht es weiter</h2>
              <ol className="flex flex-col gap-3">
                {semesterSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-port font-display text-sm font-semibold text-paper">
                      {i + 1}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-medium">{s.title}</span>
                      <span className="text-sm text-driftwood">{s.text}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex flex-col gap-2 px-1 text-[15px] text-driftwood">
              <span>
                Etwa 20 Stunden pro Semester, ein Zertifikat für dein Engagement, an der TUM 3 ECTS
                möglich.
              </span>
              <span>
                Fragen vorab?{' '}
                <a href={`mailto:${verein.email}`} className="underline hover:text-port">
                  {verein.email}
                </a>
              </span>
            </div>
          </>
        }
      />
    </>
  )
}
