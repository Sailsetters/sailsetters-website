import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import { verein } from '@/lib/verein'

const columns = [
  {
    title: 'Sailsetters',
    links: [
      { href: '/#ueber-uns', text: 'Über uns' },
      { href: '/#projekte', text: 'Projekte' },
      { href: '/#partner', text: 'Havens & Partner' },
      { href: '/#verein', text: 'Verein' },
    ],
  },
  {
    title: 'Mitmachen',
    links: [
      { href: '/bewerbung', text: 'Bewerbung' },
      { href: '/kontakt', text: 'Kontakt' },
    ],
  },
  {
    title: 'Rechtliches',
    links: [
      { href: '/impressum', text: 'Impressum' },
      { href: '/satzung', text: 'Satzung' },
      { href: '/datenschutz', text: 'Datenschutz' },
    ],
  },
]

const social = [
  { href: 'https://www.instagram.com/sailsetters/', label: 'Instagram', icon: faInstagram },
  { href: 'https://www.linkedin.com/company/sailsetters', label: 'LinkedIn', icon: faLinkedin },
]

/*
 * Text on Ink: Sand for links, Dune for the small print. Driftwood fails
 * contrast on Ink (≈2.9:1) and is not used here.
 */
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-sand/15 bg-ink text-sand">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-5 py-12 sm:px-8 lg:py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {columns.map((c) => (
            <div key={c.title} className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-sunrise">{c.title}</span>
              {c.links.map((l) => (
                <Link key={l.href} href={l.href} className="text-[15px] text-sand transition-colors hover:text-paper">
                  {l.text}
                </Link>
              ))}
            </div>
          ))}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-sunrise">Social</span>
            <ul className="flex gap-4">
              {social.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center text-sand transition-colors hover:text-paper"
                  >
                    <FontAwesomeIcon icon={s.icon} className="h-[22px] w-[22px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 border-t border-sand/15 pt-6 text-sm text-dune sm:flex-row sm:justify-between">
          <span>
            © {year} {verein.name} · {verein.street} · {verein.city}
          </span>
          <a href={`mailto:${verein.email}`} className="hover:text-paper">
            {verein.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
