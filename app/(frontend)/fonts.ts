import { Fraunces, Inter } from 'next/font/google'

/*
 * Both are loaded as variable fonts, as the design guide asks for the web:
 * Fraunces' optical-size axis then follows the font-size on its own, which a
 * fixed instance could not do. The CSS variables are picked up in globals.css.
 */

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT', 'WONK'],
})
