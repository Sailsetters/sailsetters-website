import type { CollectionConfig } from 'payload'

import { authenticated } from '../lib/access'
import { revalidateHomeAfterChange, revalidateHomeAfterDelete } from '../lib/revalidate'

/**
 * Der Vorstand, wie er auf der Startseite erscheint. Wird jedes Jahr nach
 * der Mitgliederversammlung hier aktualisiert – ohne Code.
 */
export const Team: CollectionConfig = {
  slug: 'team',
  labels: { singular: 'Vorstandsmitglied', plural: 'Vorstand' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'order'],
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
    { name: 'role', type: 'text', label: 'Rolle', required: true },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Foto',
      admin: { description: 'Quadratisch, mindestens 400 × 400 Pixel. Ohne Foto erscheinen die Initialen.' },
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
