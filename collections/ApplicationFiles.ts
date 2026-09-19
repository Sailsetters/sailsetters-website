import type { CollectionConfig } from 'payload'

import { authenticated } from '../lib/access'

/**
 * Lebensläufe aus dem Bewerbungsformular. Personenbezogene Daten — nie
 * öffentlich: lokal liegen die Dateien außerhalb von public/ und werden nur
 * über Payloads API mit Login ausgeliefert; in Produktion als private Blobs
 * (siehe lib/privateBlobAdapter.ts).
 *
 * Wird beim Löschen der zugehörigen Bewerbung mitgelöscht.
 */
export const ApplicationFiles: CollectionConfig = {
  slug: 'application-files',
  labels: { singular: 'Bewerbungsunterlage', plural: 'Bewerbungsunterlagen' },
  admin: {
    group: 'Bewerbungen',
    description: 'Lebensläufe aus dem Bewerbungsformular. Nur mit Login abrufbar.',
  },
  access: {
    // The public form goes through the Local API on the server, which
    // bypasses these rules. The REST endpoint stays closed.
    create: authenticated,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  upload: {
    staticDir: 'uploads/application-files',
    mimeTypes: ['application/pdf'],
    // Download, never render inline: a PDF viewer running on the admin
    // origin is an attack surface we don't need. Applies to local files; the
    // private blob adapter sets the same headers.
    modifyResponseHeaders: ({ headers }) => {
      headers.set('Content-Disposition', 'attachment')
      headers.set('X-Content-Type-Options', 'nosniff')
      headers.set('Cache-Control', 'private, no-store')
      return headers
    },
  },
  fields: [],
}
