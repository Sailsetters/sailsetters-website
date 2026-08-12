import type { CollectionConfig } from 'payload'

/**
 * Nachrichten aus dem Kontaktformular. Same access model as Applications:
 * public create, authenticated everything else.
 */
export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  labels: { singular: 'Kontaktanfrage', plural: 'Kontaktanfragen' },
  admin: {
    useAsTitle: 'subject',
    defaultColumns: ['subject', 'name', 'email', 'status', 'createdAt'],
    group: 'Formulare',
  },
  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'name', type: 'text', label: 'Name', required: true },
        { name: 'email', type: 'email', label: 'E-Mail', required: true },
      ],
    },
    { name: 'subject', type: 'text', label: 'Betreff', required: true },
    { name: 'message', type: 'textarea', label: 'Nachricht', required: true },
    {
      name: 'consent',
      type: 'checkbox',
      label: 'Einwilligung zur Datenverarbeitung erteilt',
      required: true,
      // See Applications: `required` alone does not reject a false checkbox on a
      // public-create collection.
      validate: (value: unknown) =>
        value === true || 'Ohne Einwilligung dürfen wir die Nachricht nicht speichern.',
      admin: { readOnly: true },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      defaultValue: 'neu',
      required: true,
      options: [
        { label: 'Neu', value: 'neu' },
        { label: 'In Bearbeitung', value: 'in-bearbeitung' },
        { label: 'Erledigt', value: 'erledigt' },
      ],
      admin: { position: 'sidebar' },
    },
  ],
}
