import type { GlobalConfig } from 'payload'

import { authenticated } from '../lib/access'

/**
 * The texts that get copied into a new email draft. Editable in the admin
 * panel so the team can reword them without touching code.
 *
 * `{{name}}` and `{{bearbeiter}}` are filled in automatically. Anything else
 * in double braces — `{{meetingLink}}`, `{{slackLink}}` — is left for the
 * person sending to replace, and the email cannot be sent until they have.
 */

const PLACEHOLDER_HELP =
  'Platzhalter: {{name}} = Name der bewerbenden Person, {{bearbeiter}} = dein Name. ' +
  'Beide werden automatisch eingesetzt. Alles andere in doppelten geschweiften Klammern ' +
  '(z. B. {{meetingLink}}) bleibt im Entwurf stehen und muss vor dem Senden ersetzt werden.'

const templateFields = (defaults: { betreff: string; text: string }) =>
  [
    { name: 'betreff', type: 'text', label: 'Betreff', required: true, defaultValue: defaults.betreff },
    { name: 'text', type: 'textarea', label: 'Text', required: true, defaultValue: defaults.text, admin: { rows: 14 } },
  ] as const

export const EmailVorlagen: GlobalConfig = {
  slug: 'email-vorlagen',
  label: 'E-Mail-Vorlagen',
  admin: {
    group: 'Bewerbungen',
    description: PLACEHOLDER_HELP,
  },
  access: {
    read: authenticated,
    update: authenticated,
  },
  fields: [
    {
      name: 'einladung',
      type: 'group',
      label: 'Einladung zum Gespräch',
      admin: { description: 'Wird als Entwurf angelegt, sobald eine Bewerbung auf „Eingeladen“ gesetzt wird.' },
      fields: [
        ...templateFields({
          betreff: 'Deine Bewerbung bei Sailsetters – Einladung zum Kennenlernen',
          text: `Hallo {{name}},

vielen Dank für deine Bewerbung bei Sailsetters! Wir würden dich gerne persönlich kennenlernen und laden dich zu einem kurzen Gespräch ein.

Hier ist der Link zum Termin: {{meetingLink}}

Falls der Termin nicht passt, antworte einfach auf diese E-Mail und wir finden einen anderen.

Wir freuen uns auf dich!

Viele Grüße
{{bearbeiter}}
Sailsetters e.V.`,
        }),
      ],
    },
    {
      name: 'zusage',
      type: 'group',
      label: 'Zusage',
      admin: { description: 'Wird als Entwurf angelegt, sobald eine Bewerbung auf „Angenommen“ gesetzt wird.' },
      fields: [
        ...templateFields({
          betreff: 'Willkommen bei Sailsetters!',
          text: `Hallo {{name}},

wir freuen uns sehr, dich als Sailsetter:in an Bord zu haben – herzlich willkommen im Team!

Über diesen Link kommst du in unseren Slack, in dem unsere gesamte Kommunikation läuft: {{slackLink}}

Alle weiteren Schritte zum Onboarding besprechen wir dort.

Bis bald!

Viele Grüße
{{bearbeiter}}
Sailsetters e.V.`,
        }),
      ],
    },
  ],
}
