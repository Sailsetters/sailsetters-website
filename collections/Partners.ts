import type { CollectionConfig } from 'payload'

import { authenticated } from '../lib/access'
import { revalidateHomeAfterChange, revalidateHomeAfterDelete } from '../lib/revalidate'

/** Havens und Partnerinstitutionen – die Logowand auf der Startseite. */
export const Partners: CollectionConfig = {
  slug: 'partners',
  labels: { singular: 'Partner', plural: 'Havens & Partner' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'website', 'order'],
    group: 'Website',
  },
  access: {
    read: () => true,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  hooks: {
    afterChange: [revalidateHomeAfterChange],
    afterDelete: [revalidateHomeAfterDelete],
  },
  fields: [
    { name: 'name', type: 'text', label: 'Name', required: true },
    {
      name: 'website',
      type: 'text',
      label: 'Website',
      admin: { description: 'Vollständige Adresse inklusive https://' },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
      required: true,
      admin: { description: 'PNG oder SVG mit transparentem Hintergrund, wenn möglich.' },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Reihenfolge',
      defaultValue: 0,
      admin: { position: 'sidebar', description: 'Kleinere Zahlen zuerst.' },
    },
  ],
}
