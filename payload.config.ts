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
import { Bewerbungsphase } from './globals/Bewerbungsphase'
import { EmailVorlagen } from './globals/EmailVorlagen'
import { Startseite } from './globals/Startseite'
import { privateVercelBlobAdapter } from './lib/privateBlobAdapter'

const dirname = path.dirname(fileURLToPath(import.meta.url))

// Vercel Blob: one public store for media, one private store for CVs.
const publicBlobToken = process.env.BLOB_READ_WRITE_TOKEN
// Connecting a second Blob store with the prefix PRIVATE makes Vercel name the
// variable PRIVATE_READ_WRITE_TOKEN; the longer name is what .env.example uses.
const privateBlobToken =
  process.env.PRIVATE_BLOB_READ_WRITE_TOKEN || process.env.PRIVATE_READ_WRITE_TOKEN

// Fail loudly rather than write applicants' CVs to Vercel's ephemeral
// filesystem, where they would vanish on the next deploy.
if (process.env.VERCEL && publicBlobToken && !privateBlobToken) {
  throw new Error(
    'No private Blob token (PRIVATE_BLOB_READ_WRITE_TOKEN or ' +
      'PRIVATE_READ_WRITE_TOKEN). Create a Vercel Blob store with private ' +
      'access for applicants\' CVs and set its token, or remove ' +
      'BLOB_READ_WRITE_TOKEN to keep uploads on disk.',
  )
}

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
  globals: [Bewerbungsphase, EmailVorlagen, Startseite],
  email,
  editor: lexicalEditor(),
  db: postgresAdapter({
    pool: {
      // DATABASE_URL is what Neon's Vercel integration injects (pooled);
      // DATABASE_URI is what .env.example and local development use.
      connectionString: process.env.DATABASE_URI || process.env.DATABASE_URL || '',
    },
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  sharp,
  plugins: [
    // Vercel's filesystem is ephemeral, so in production uploads go to Vercel
    // Blob. Two stores, because the site has two kinds of file: public media
    // (logos, board photos) through the official plugin, and applicants' CVs
    // as private blobs through our own adapter. A Blob store is public or
    // private for its whole lifetime, so one store cannot serve both.
    // Without the tokens — local development — both land on disk.
    ...(publicBlobToken
      ? [
          vercelBlobStorage({
            collections: { media: true },
            token: publicBlobToken,
          }),
        ]
      : []),
    ...(privateBlobToken
      ? [
          cloudStoragePlugin({
            collections: {
              'application-files': {
                adapter: privateVercelBlobAdapter({ token: privateBlobToken }),
                disableLocalStorage: true,
              },
            },
          }),
        ]
      : []),
  ],
})
