import type { Metadata } from 'next'

import Section from '@/components/Section'

import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Kontakt — Sailsetters',
  description: 'Schreib uns eine Nachricht — wir freuen uns auf deine Anfrage.',
}

export default function KontaktPage() {
  return (
    <Section className="pt-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl text-ink sm:text-4xl">Kontakt</h1>
        <p className="mt-4 text-lg text-ink">
          Du hast eine Frage, möchtest mit uns zusammenarbeiten oder uns
          unterstützen? Schreib uns — wir melden uns so bald wie möglich.
        </p>

        <div className="mt-8 rounded-lg bg-paper p-6 shadow-md">
          <h2 className="font-semibold text-ink">Sailsetters e.V.</h2>
          <p className="mt-2 text-ink">
            Zedernweg 6
            <br />
            80939 München
            <br />
            <a href="mailto:contact@sailsetters.de" className="underline hover:text-port">
              contact@sailsetters.de
            </a>
          </p>
        </div>

        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}
