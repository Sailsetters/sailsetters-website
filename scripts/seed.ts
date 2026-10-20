/**
 * Befüllt eine leere Datenbank mit den Inhalten der Startseite: Havens &
 * Partner (mit Logos), Projekte, Vorstand und Kennzahlen.
 *
 *   npm run seed
 *
 * Läuft nur, wenn die jeweilige Collection noch leer ist – vorhandene
 * Inhalte werden nie überschrieben. Für den Produktivgang einmal gegen die
 * Produktionsdatenbank ausführen (DATABASE_URI entsprechend setzen).
 */
import path from 'path'
import { fileURLToPath } from 'url'

import config from '@payload-config'
import { getPayload } from 'payload'

const assets = path.join(path.dirname(fileURLToPath(import.meta.url)), 'seed-assets')

/**
 * Nothing to revalidate outside a Next request.
 *
 * A fresh object per call, never a shared one: Payload's cloud-storage hooks
 * write their own flags into `req.context`, and reusing one object across
 * creates makes every upload after the first silently do nothing.
 */
const context = () => ({ disableRevalidate: true })

const partners = [
  { name: 'Lichtblick Hasenbergl', website: 'https://lichtblick-hasenbergl.org', logo: 'logo_lichtblickHasenbergl.png' },
  { name: 'Gesellschaft macht Schule', website: 'https://www.gesellschaft-macht-schule.de/', logo: 'logo_gms.png' },
  { name: 'Startstark', website: 'https://startstark.de', logo: 'logo_startstark.png' },
  { name: 'Adelgundenheim', website: 'https://adelgundenheim.de/', logo: 'logo_adelgundenheim.png' },
  { name: 'She.codes', website: 'https://codes.education/', logo: 'logo_shecodes.png' },
  { name: 'Condrobs', website: 'https://www.condrobs.de/', logo: 'logo_condrobs.png' },
  { name: 'Diakonie Bayern', website: 'https://www.diakonie-bayern.de/', logo: 'diakonie_logo.png' },
  { name: 'TUM Think Tank', website: 'https://tumthinktank.de/', logo: 'logo_tumThinkTank.svg' },
  { name: 'LESEZEICHEN München', website: 'https://lesezeichen-muenchen.de/', logo: 'logo_lesezeichen.png' },
]

type Category = 'eigenes-projekt' | 'foerderung'

// Current as of October 2026: Wellenbrecher, Übertrittsnachhilfe, Kinderuni,
// Naturwissenschaftliche Experimente, Lesepatenschaft. Everything else is a
// past project.
const CURRENT = new Set([
  'Projekt Wellenbrecher',
  'Übertrittsnachhilfe',
  'Kinderuni',
  'Naturwissenschaftliche Experimente',
  'Lesepatenschaft',
])

type SeedProject = {
  title: string
  tagline: string
  description: string
  category: Category
  /** As in the collection, but `partner` is the partner's name. */
  bewerbung?: { hinweis: string; bestaetigung: string; partner: string }
}

const projects: SeedProject[] = [
  {
    title: 'Projekt Wellenbrecher',
    tagline: 'Perspektiven schaffen',
    description:
      'Berufliche Orientierung und Soft Skills für Jugendliche im Mittelschulalter, mit Workshops, Besuchen bei Unternehmen und langfristiger Begleitung. Ziel ist, dass gerade benachteiligte Jugendliche ihre Talente entdecken und ihre Zukunft selbstbestimmt gestalten.',
    category: 'eigenes-projekt',
  },
  {
    title: 'Übertrittsnachhilfe',
    tagline: 'Individuelle Nachhilfe für den Schulübertritt',
    description:
      'Wöchentliche Wiederholungsstunden in 1-zu-1-Betreuung, damit Viertklässler:innen den Notenschnitt für ihre Wunschschule erreichen, inklusive Lernstrategien für die Zeit danach.',
    category: 'eigenes-projekt',
  },
  {
    title: 'Kinderuni',
    tagline: 'Neugier wecken',
    description:
      'Interaktive Lerneinheiten für Grundschulkinder zu Themen jenseits des Lehrplans. In Vorträgen und Unterrichtsstunden stillen die Kinder ihre Neugier durch Fragen und werden spielerisch belohnt.',
    category: 'eigenes-projekt',
  },
  {
    title: 'Naturwissenschaftliche Experimente',
    tagline: 'Haus für Kinder Perlach & Lichtblick Hasenbergl',
    description:
      'Sailsetter:innen bereiten Experimente für Kindergartenkinder vor und führen sie alle zwei Wochen mit wechselnden Gruppen durch: ein spielerischer erster Kontakt mit den Naturwissenschaften.',
    category: 'eigenes-projekt',
  },
  {
    title: 'Lesepatenschaft',
    tagline: 'Gemeinsam mit [LESEZEICHEN](https://lesezeichen-muenchen.de/)',
    description:
      'Als Lesepat:in liest du ein Schuljahr lang jede Woche 45 Minuten mit einem Grundschulkind – an einer Schule in Wohnort- oder Uninähe. Es geht nicht um Nachhilfe, sondern um Freude am Lesen, Selbstvertrauen und bessere Bildungschancen für Kinder.',
    category: 'foerderung',
    bewerbung: {
      hinweis: `45 Minuten pro Woche, ein ganzes Schuljahr lang. [LESEZEICHEN](https://lesezeichen-muenchen.de/) legt großen Wert auf Kontinuität, denn dein Lesekind braucht eine verlässliche Bezugsperson. Vertrauen entsteht, wenn du regelmäßig da bist.
In den Schulferien finden keine Lesestunden statt. Natürlich kannst du auch während der Schulzeit mal in den Urlaub fahren, wenn du das vorher ankündigst. Längere Unterbrechungen passen dagegen leider nicht: Vier Monate Costa Rica oder sechs Wochen Pause in der Prüfungszeit gehen nicht.

Wenn du dich über uns als Lesepat:in bewerben möchtest, stellen wir mit deinem Einverständnis den Kontakt zu LESEZEICHEN her. Dort findet ein Erstgespräch statt, in dem deine Rolle und Zuständigkeit als Lesepat:in geklärt werden und du erfährst, wie LESEZEICHEN dich bei deiner Aufgabe unterstützt. Auch das weitere Kennenlernen und die Beantragung des erweiterten Führungszeugnisses laufen über LESEZEICHEN. Lesepat:in kannst du ab 18 Jahren werden.

LESEZEICHEN begleitet dich auch bei der Gestaltung deiner Lesestunden – unter anderem mit einer Einführungsveranstaltung und einem umfassenden Fortbildungsprogramm, an dem du freiwillig teilnehmen kannst.

Bei Sailsetters bist du trotzdem voll dabei: Du wirst Sailsetter:in wie alle anderen auch, mit Zugang zu unserer Community-Plattform, unseren sozialen Events und allem, was unsere Mitglieder sonst haben.`,
      bestaetigung: 'Ich kann mich für ein ganzes Schuljahr auf einen festen wöchentlichen Termin festlegen.',
      partner: 'LESEZEICHEN München',
    },
  },
  {
    title: 'Handwerken mit Kindergartenkindern',
    tagline: 'Haus für Kinder Perlach',
    description:
      'An der Werkbank des Havens bauen Sailsetter:innen alle zwei Wochen kleine Dinge mit Kindergartenkindern. Ideen und Anleitung entwickeln unsere Mitglieder selbst.',
    category: 'eigenes-projekt',
  },
  {
    title: 'She.codes Informatik-Workshops',
    tagline: 'Condrobs',
    description:
      'Gemeinsam mit She.codes führen unsere Mitglieder Informatik-Workshops für weiblich gelesene Kinder und Jugendliche durch, die einen ersten Zugang zum Programmieren öffnen.',
    category: 'eigenes-projekt',
  },
  {
    title: 'Get-to-know München',
    tagline: 'Diakonie',
    description:
      'Stadttouren für Geflüchtete, vorbereitet und geführt von Sailsetter:innen, damit das Ankommen in München leichter wird, an mehreren Terminen mit derselben Gruppe.',
    category: 'eigenes-projekt',
  },
  {
    title: 'IT-Crashkurs für Geflüchtete',
    tagline: 'Diakonie',
    description:
      'Unsere Mitglieder bereiten einen IT-Crashkurs zu einem selbst gewählten Thema vor und führen ihn mit verschiedenen Gruppen von Geflüchteten durch.',
    category: 'eigenes-projekt',
  },
  {
    title: 'Angebote für Kinder der Familienhilfe',
    tagline: 'Adelgundenheim',
    description:
      'Zusammen mit Pädagoginnen des Adelgundenheims entwickeln Sailsetter:innen Freizeitangebote für Kinder, damit deren Mütter Zeit für andere Aktivitäten gewinnen.',
    category: 'eigenes-projekt',
  },
  {
    title: 'Sommerfest für Mentees und Mentor:innen',
    tagline: 'Adelgundenheim',
    description:
      'Unsere Mitglieder unterstützen bei Planung und Durchführung des Sommerfests für die Mentees und Mentor:innen des Adelgundenheims.',
    category: 'eigenes-projekt',
  },
  {
    title: 'Nachhilfe',
    tagline: 'Diakonie, Adelgundenheim, Gesellschaft macht Schule',
    description:
      'Klassische Nachhilfe für Kinder und Jugendliche. An mehreren unserer Havens gibt es dafür laufend Bedarf.',
    category: 'foerderung',
  },
  {
    title: 'Deutsch lernen durch Konversation',
    tagline: 'Adelgundenheim',
    description:
      'Alle zwei Wochen üben Sailsetter:innen mit Kindern im 1-zu-1-Gespräch Deutsch, ohne Arbeitsblätter und mit viel Reden.',
    category: 'foerderung',
  },
  {
    title: 'Deutschkurse für Geflüchtete',
    tagline: 'Diakonie',
    description:
      'Unsere Mitglieder unterstützen Deutschkurse für Geflüchtete, mit Fokus auf die gesprochene Sprache. Ukrainisch, Russisch oder Arabisch helfen, sind aber keine Voraussetzung.',
    category: 'foerderung',
  },
  {
    title: 'Patenschaften mit Geflüchteten',
    tagline: 'Diakonie',
    description:
      'Sailsetter:innen begleiten geflüchtete Kinder und Jugendliche als feste Ansprechpersonen über ein Semester.',
    category: 'foerderung',
  },
  {
    title: 'Leseförderung durch Vorlesen',
    tagline: 'Diakonie und Lichtblick Hasenbergl',
    description:
      'Unsere Mitglieder unterstützen Kinder durch Vorlesen und gemeinsames Lesen beim Lesenlernen.',
    category: 'foerderung',
  },
]

const team = [
  { name: 'Johannes Trahasch', role: 'Vorstandsvorsitzender' },
  { name: 'Florian Reis', role: 'Stellvertretender Vorstand' },
  { name: 'Anna-Zita Bentele', role: 'Schatzmeisterin' },
  { name: 'Carina Dechant', role: 'Head of Recruiting' },
]

const payload = await getPayload({ config })

async function isEmpty(collection: 'partners' | 'projects' | 'team') {
  return (await payload.count({ collection })).totalDocs === 0
}

if (await isEmpty('partners')) {
  for (const [i, p] of partners.entries()) {
    const logo = await payload.create({
      collection: 'media',
      data: { alt: `Logo ${p.name}` },
      filePath: path.join(assets, p.logo),
      context: context(),
    })
    await payload.create({
      collection: 'partners',
      data: { name: p.name, website: p.website, logo: logo.id, order: i },
      context: context(),
    })
  }
  console.log(`${partners.length} Partner angelegt`)
} else {
  console.log('Partner vorhanden, übersprungen')
}

if (await isEmpty('projects')) {
  for (const [i, { bewerbung, ...p }] of projects.entries()) {
    const partner = bewerbung
      ? (await payload.find({ collection: 'partners', where: { name: { equals: bewerbung.partner } }, limit: 1 }))
          .docs[0]
      : undefined
    await payload.create({
      collection: 'projects',
      data: {
        ...p,
        ...(bewerbung && { bewerbung: { ...bewerbung, partner: partner?.id } }),
        status: CURRENT.has(p.title) ? 'aktiv' : 'archiviert',
        order: i,
      },
      context: context(),
    })
  }
  console.log(`${projects.length} Projekte angelegt`)
} else {
  console.log('Projekte vorhanden, übersprungen')
}

if (await isEmpty('team')) {
  for (const [i, m] of team.entries()) {
    await payload.create({ collection: 'team', data: { ...m, order: i }, context: context() })
  }
  console.log(`${team.length} Vorstandsmitglieder angelegt`)
} else {
  console.log('Vorstand vorhanden, übersprungen')
}

await payload.updateGlobal({
  slug: 'startseite',
  data: { kennzahlen: { aktiveMitglieder: '30', projekteProSemester: '3–5' } },
  context: context(),
})
console.log('Kennzahlen gesetzt')

process.exit(0)
