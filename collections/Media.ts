import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Medium', plural: 'Medien' },
  admin: { group: 'Inhalte' },
  access: {
    // Uploaded media is served on the public website.
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  upload: {
    // Local disk in development. In production the Vercel Blob plugin in
    // payload.config.ts takes over (Vercel's filesystem is ephemeral).
    staticDir: 'public/media',
    mimeTypes: ['image/*', 'application/pdf'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alternativtext',
      required: true,
      admin: {
        description: 'Bildbeschreibung für Screenreader und Suchmaschinen.',
      },
    },
  ],
}
