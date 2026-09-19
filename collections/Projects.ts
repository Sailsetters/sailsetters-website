import type { CollectionConfig } from 'payload'

import { authenticated } from '../lib/access'
import { revalidateHomeAfterChange, revalidateHomeAfterDelete } from '../lib/revalidate'

/**
 * Projekte, wie sie auf der Startseite erscheinen. Öffentlich lesbar, nur
 * intern bearbeitbar. Alte Projekte werden archiviert statt gelöscht, damit
 * die Geschichte des Vereins erhalten bleibt.
 */
export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: { singular: 'Projekt', plural: 'Projekte' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'featured', 'order'],
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
    { name: 'title', type: 'text', label: 'Titel', required: true },
    {
      name: 'tagline',
      type: 'text',
      label: 'Untertitel',
      admin: {
        description: 'Ein kurzer Claim („Perspektiven schaffen“) oder der Haven, bei dem das Projekt läuft.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Beschreibung',
      required: true,
      admin: { description: 'Zwei bis drei Sätze. Erscheint so auf der Startseite.' },
    },
    {
      name: 'category',
      type: 'select',
      label: 'Kategorie',
      required: true,
      options: [
        { label: 'Eigenes Projekt', value: 'eigenes-projekt' },
        { label: 'Unterstützung in München', value: 'unterstuetzung' },
        { label: '1-zu-1-Förderung', value: 'foerderung' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      required: true,
      defaultValue: 'aktiv',
      options: [
        { label: 'Aktiv', value: 'aktiv' },
        { label: 'Archiviert', value: 'archiviert' },
      ],
      admin: { position: 'sidebar', description: 'Nur aktive Projekte erscheinen auf der Website.' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Auf der Startseite zeigen',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description:
          'Die Startseite zeigt drei Projekte. Sind mehr markiert, gelten die ersten drei nach Reihenfolge; ist keines markiert, die ersten drei aktiven.',
      },
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
