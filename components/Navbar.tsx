'use client'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
  { href: '/#ueber-uns', text: 'Über uns' },
  { href: '/#projekte', text: 'Projekte' },
  { href: '/#partner', text: 'Partner' },
  { href: '/#verein', text: 'Verein' },
  { href: '/kontakt', text: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 transition-colors duration-200 ${
        scrolled || open ? 'bg-sand/85 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:h-[88px]">
        <Link href="/" className="flex items-center gap-3 text-ink" aria-label="Sailsetters Startseite">
          <Image src="/logo_ink.png" alt="" width={36} height={49} className="h-[38px] w-7 lg:h-[49px] lg:w-9" priority />
          <span className="font-display text-xl font-semibold tracking-tight lg:text-2xl">Sailsetters</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="font-medium text-ink transition-colors hover:text-port">
              {l.text}
            </Link>
          ))}
          <Link
            href="/bewerbung"
            className="rounded-full bg-port px-5 py-3 text-[15px] font-semibold text-paper transition-colors hover:bg-ink"
          >
            Sailsetter:in werden
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          className="flex h-11 w-11 items-center justify-center text-ink lg:hidden"
        >
          {open ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Hauptnavigation"
        hidden={!open}
        className="border-t border-ink/10 px-5 pt-2 pb-6 lg:hidden"
      >
        <ul className="flex flex-col">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-lg font-medium text-ink hover:text-port"
              >
                {l.text}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <Link
              href="/bewerbung"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-port px-5 py-3 text-center font-semibold text-paper hover:bg-ink"
            >
              Sailsetter:in werden
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
