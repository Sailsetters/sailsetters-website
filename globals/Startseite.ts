import type { GlobalConfig } from 'payload'

import { authenticated } from '../lib/access'
import { revalidateHomeAfterGlobalChange } from '../lib/revalidate'

/** Die Kennzahlen im Band unter „Was wir tun“. Die Partnerzahl kommt aus der Partner-Collection. */
export const Startseite: GlobalConfig = {
  slug: 'startseite',
  label: 'Startseite',
  admin: { group: 'Website' },
  access: {
    read: () => true,
    update: authenticated,
  },
  hooks: {
    afterChange: [revalidateHomeAfterGlobalChange],
  },
  fields: [
    {
      name: 'kennzahlen',
      type: 'group',
      label: 'Kennzahlen',
      fields: [
        {
          name: 'aktiveMitglieder',
          type: 'text',
          label: 'Aktive Sailsetter:innen',
          required: true,
          defaultValue: '30',
        },
        {
          name: 'projekteProSemester',
          type: 'text',
          label: 'Projekte pro Semester',
          required: true,
          defaultValue: '3–5',
          admin: { description: 'Text, damit auch „3–5“ möglich ist.' },
        },
      ],
    },
  ],
}
