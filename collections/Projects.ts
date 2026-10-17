import type { CollectionConfig } from 'payload'

import { authenticated } from '../lib/access'
import { revalidateHomeAfterChange, revalidateHomeAfterDelete } from '../lib/revalidate'

/**
 * Projekte auf der Startseite, unter /projekte und auf /bewerbung. Öffentlich
 * lesbar, nur intern bearbeitbar. Abgeschlossene Projekte werden auf
 * „Vergangen“ gesetzt statt gelöscht — sie erscheinen dann unter „Vergangene
 * Projekte“.
 *
 * Every current project can be picked as the Wunschprojekt in the application
 * form. The `bewerbung` group is for projects that work differently, e.g. the
 * Lesepatenschaft, where a partner does the onboarding: a note shown when the
 * project is picked, a sentence the applicant must confirm, and the partner
 * we pass the application on to (which needs its own consent).
 */
export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: { singular: 'Projekt', plural: 'Projekte' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'period', 'order'],
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
      name: 'bewerbung',
      type: 'group',
      label: 'Bewerbung',
      admin: {
        description:
          'Alles optional. Nur für Projekte, bei denen die Bewerbung anders läuft als sonst, z. B. weil ein Partner die Einarbeitung übernimmt.',
      },
      fields: [
        {
          name: 'hinweis',
          type: 'textarea',
          label: 'Hinweis für Bewerber:innen',
          admin: {
            rows: 8,
            description:
              'Erscheint im Bewerbungsformular, sobald jemand dieses Projekt wählt, und aufklappbar auf der Projektkarte unter /projekte und /bewerbung. Absätze durch eine Leerzeile trennen.',
          },
        },
        {
          name: 'bestaetigung',
          type: 'text',
          label: 'Pflicht-Bestätigung',
          admin: {
            description:
              'Ein Satz, den Bewerber:innen für dieses Projekt ankreuzen müssen, z. B. „Ich kann mich für ein Schuljahr auf einen wöchentlichen Termin festlegen.“',
          },
        },
        {
          name: 'partner',
          type: 'relationship',
          relationTo: 'partners',
          label: 'Bewerbungen weitergeben an',
          admin: {
            description:
              'Der Partner, dem wir Name und E-Mail-Adresse der Bewerber:innen weitergeben, damit er sich bei ihnen meldet. Das Formular fragt dafür eine eigene Einwilligung ab, die den Partner nennt.',
          },
        },
      ],
    },
    {
      name: 'category',
      type: 'select',
      label: 'Kategorie',
      required: true,
      options: [
        { label: 'Eigenes Projekt', value: 'eigenes-projekt' },
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
        { label: 'Aktuell', value: 'aktiv' },
        { label: 'Vergangen', value: 'archiviert' },
      ],
      admin: {
        position: 'sidebar',
        description:
          'Aktuelle Projekte stehen auf der Startseite, oben auf /projekte und im Bewerbungsformular zur Auswahl. Vergangene erscheinen auf /projekte unter „Vergangene Projekte“.',
      },
    },
    {
      name: 'period',
      type: 'text',
      label: 'Zeitraum',
      admin: {
        position: 'sidebar',
        description: 'Optional, z. B. „WiSe 2024/25“ oder „seit 2023“. Erscheint auf der Karte.',
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
