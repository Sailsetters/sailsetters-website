import type { GlobalConfig } from 'payload'

import { authenticated } from '../lib/access'
import { revalidateAfterGlobalChange } from '../lib/revalidate'

/** Öffnet oder schließt das Bewerbungsformular unabhängig von den festen Fenstern. */
export const Bewerbungsphase: GlobalConfig = {
  slug: 'bewerbungsphase',
  label: 'Bewerbungsphase',
  admin: {
    group: 'Bewerbungen',
    description:
      'Die Bewerbungsfenster sind fest: 1. bis 21. Oktober und 1. bis 21. April. „Automatisch“ folgt diesen Fenstern; „Offen“ und „Geschlossen“ übersteuern sie.',
  },
  access: {
    read: () => true,
    update: authenticated,
  },
  hooks: {
    afterChange: [revalidateAfterGlobalChange(['/bewerbung'])],
  },
  fields: [
    {
      name: 'modus',
      type: 'select',
      label: 'Formular',
      required: true,
      defaultValue: 'automatisch',
      options: [
        { label: 'Automatisch (1.–21. Oktober und 1.–21. April)', value: 'automatisch' },
        { label: 'Offen', value: 'offen' },
        { label: 'Geschlossen', value: 'geschlossen' },
      ],
    },
    {
      name: 'hinweis',
      type: 'textarea',
      label: 'Hinweis bei geschlossenem Formular',
      admin: {
        description:
          'Optional. Erscheint unter dem Satz „Die Bewerbungsphase ist derzeit geschlossen …“, z. B. mit einem Hinweis auf die Taskforces oder eine Info-Veranstaltung.',
      },
    },
  ],
}
