import path from 'path'
import { fileURLToPath } from 'url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { de } from '@payloadcms/translations/languages/de'
import { en } from '@payloadcms/translations/languages/en'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { Applications } from './collections/Applications'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { Emails } from './collections/Emails'
import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { EmailVorlagen } from './globals/EmailVorlagen'

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
      titleSuffix: ' — Sailsetters',
    },
  },
  // The team is German-speaking and the site is German only, so the admin
  // panel defaults to German.
  i18n: {
    supportedLanguages: { de, en },
    fallbackLanguage: 'de',
  },
  collections: [Applications, ContactSubmissions, Emails, Media, Users],
  globals: [EmailVorlagen],
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
})
