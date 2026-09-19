import path from 'path'
import { fileURLToPath } from 'url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { de } from '@payloadcms/translations/languages/de'
import { en } from '@payloadcms/translations/languages/en'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { ApplicationFiles } from './collections/ApplicationFiles'
import { Applications } from './collections/Applications'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { Emails } from './collections/Emails'
import { Media } from './collections/Media'
import { Partners } from './collections/Partners'
import { Projects } from './collections/Projects'
import { Team } from './collections/Team'
import { Users } from './collections/Users'
import { EmailVorlagen } from './globals/EmailVorlagen'
import { Startseite } from './globals/Startseite'
import { privateVercelBlobAdapter } from './lib/privateBlobAdapter'

const dirname = path.dirname(fileURLToPath(import.meta.url))

// Mail goes out through the Verein's existing IONOS mailbox over SMTP, so no
// additional processor is involved. Without SMTP_HOST (local dev) Payload
// falls back to logging emails to the console instead of sending them.
const email = process.env.SMTP_HOST
  ? nodemailerAdapter({
      defaultFromAddress: process.env.EMAIL_FROM || 'contact@sailsetters.de',
      defaultFromName: 'Sailsetters e.V.',
      transportOptions: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
    })
  : undefined

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' · Sailsetters',
    },
  },
  // The team is German-speaking and the site is German only, so the admin
  // panel defaults to German.
  i18n: {
    supportedLanguages: { de, en },
    fallbackLanguage: 'de',
  },
  collections: [
    ApplicationFiles,
    Applications,
    ContactSubmissions,
    Emails,
    Media,
    Partners,
    Projects,
    Team,
    Users,
  ],
  globals: [EmailVorlagen, Startseite],
  email,
  editor: lexicalEditor(),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  sharp,
  plugins: [
    // Vercel's filesystem is ephemeral, so in production uploads go to
    // Vercel Blob: public media (logos, photos) through the official plugin,
    // applicants' CVs as private blobs through our own adapter. Locally,
    // without the token, both land on disk.
    ...(process.env.BLOB_READ_WRITE_TOKEN
      ? [
          vercelBlobStorage({
            collections: { media: true },
            token: process.env.BLOB_READ_WRITE_TOKEN,
          }),
          cloudStoragePlugin({
            collections: {
              'application-files': {
                adapter: privateVercelBlobAdapter({ token: process.env.BLOB_READ_WRITE_TOKEN }),
                disableLocalStorage: true,
              },
            },
          }),
        ]
      : []),
  ],
})
