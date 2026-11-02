import type { CollectionConfig } from 'payload'

import { authenticated } from '../lib/access'
import { revalidateHomeAfterChange, revalidateHomeAfterDelete } from '../lib/revalidate'

/**
 * Ansprechpartner:innen für einzelne Projekte. Erscheinen auf „Über uns“
 * unter „Projektleitung“, getrennt vom Vorstand und nach Projekt geordnet,
 * solange das Projekt aktuell ist.
 */
export const ProjectLeads: CollectionConfig = {
  slug: 'project-leads',
  labels: { singular: 'Projekt-Leiter:in', plural: 'Projekt-Leiter:innen' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'project', 'email'],
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
      name: 'project',
      type: 'relationship',
      relationTo: 'projects',
      label: 'Projekt',
      required: true,
      admin: {
        description:
          'Erscheint nur, solange das Projekt auf „Aktuell“ steht. Wer mehrere Projekte leitet, bekommt einen Eintrag pro Projekt.',
      },
    },
    {
      name: 'email',
      type: 'email',
      label: 'E-Mail',
      required: true,
      // The page renders through the Local API, which bypasses access control;
      // this only keeps the address out of the public REST and GraphQL API.
      access: { read: authenticated },
      admin: {
        description: 'Öffentlich: erscheint auf „Über uns“, wenn man bei der Person auf „Kontakt“ klickt.',
      },
    },
  ],
}
