import type { CollectionConfig } from 'payload'

/**
 * Bewerbungen als Sailsetter:in.
 *
 * Anyone may create (the public form posts here); only logged-in team members
 * may read, edit or delete. Applicant data is personal data under the DSGVO —
 * see `consent` and `status` below, and the retention note in the README.
 */
export const Applications: CollectionConfig = {
  slug: 'applications',
  labels: { singular: 'Bewerbung', plural: 'Bewerbungen' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'status', 'createdAt'],
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
    {
      type: 'row',
      fields: [
        { name: 'university', type: 'text', label: 'Hochschule' },
        { name: 'studySubject', type: 'text', label: 'Studiengang' },
        { name: 'semester', type: 'text', label: 'Fachsemester' },
      ],
    },
    {
      name: 'motivation',
      type: 'textarea',
      label: 'Motivation',
      required: true,
      admin: {
        description: 'Warum möchtest du bei Sailsetters mitmachen?',
      },
    },
    {
      name: 'availability',
      type: 'textarea',
      label: 'Verfügbarkeit',
      admin: {
        description: 'Wie viel Zeit kannst du pro Semester einbringen?',
      },
    },
    {
      name: 'consent',
      type: 'checkbox',
      label: 'Einwilligung zur Datenverarbeitung erteilt',
      required: true,
      // `required` alone does not reject a missing or false checkbox, and this
      // collection is public-create — so without this the consent requirement
      // could be bypassed by posting straight to the REST API.
      validate: (value: unknown) =>
        value === true || 'Ohne Einwilligung darf die Bewerbung nicht gespeichert werden.',
      admin: {
        readOnly: true,
        description:
          'Wird beim Absenden des Formulars gesetzt. Ohne Einwilligung darf die Bewerbung nicht gespeichert werden.',
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      defaultValue: 'neu',
      required: true,
      options: [
        { label: 'Neu', value: 'neu' },
        { label: 'In Prüfung', value: 'in-pruefung' },
        { label: 'Zum Gespräch eingeladen', value: 'eingeladen' },
        { label: 'Angenommen', value: 'angenommen' },
        { label: 'Abgelehnt', value: 'abgelehnt' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'internalNotes',
      type: 'textarea',
      label: 'Interne Notizen',
      access: {
        // Never exposed through the public API, only to logged-in team members.
        read: ({ req }) => Boolean(req.user),
        update: ({ req }) => Boolean(req.user),
      },
    },
  ],
}
