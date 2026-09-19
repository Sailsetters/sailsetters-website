/**
 * Wann das Bewerbungsformular offen ist.
 *
 * Die Bewerbungsfenster sind fest: 1. bis 21. Oktober und 1. bis 21. April,
 * jedes Jahr, nach Berliner Zeit. Das Global „Bewerbungsphase“ im Admin kann
 * das übersteuern (dauerhaft offen oder geschlossen).
 */

export type Modus = 'automatisch' | 'offen' | 'geschlossen'

type Day = { y: number; m: number; d: number }

/** Month (1–12) and the inclusive day range of each intake window. */
const WINDOWS: { m: number; from: number; to: number }[] = [
  { m: 4, from: 1, to: 21 },
  { m: 10, from: 1, to: 21 },
]

export function berlinToday(now = new Date()): Day {
  const [y, m, d] = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Berlin',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
    .format(now)
    .split('-')
    .map(Number)
  return { y: y!, m: m!, d: d! }
}

function currentWindow(t: Day) {
  return WINDOWS.find((w) => w.m === t.m && t.d >= w.from && t.d <= w.to)
}

function nextWindowStart(t: Day): Day {
  for (const w of WINDOWS) {
    if (t.m < w.m) return { y: t.y, m: w.m, d: w.from }
  }
  return { y: t.y + 1, m: WINDOWS[0]!.m, d: WINDOWS[0]!.from }
}

export type Phase =
  | { open: true; closesOn?: Day }
  | { open: false; nextOpensOn?: Day }

export function bewerbungsphase(modus: Modus, now = new Date()): Phase {
  if (modus === 'offen') return { open: true }
  if (modus === 'geschlossen') return { open: false }
  const today = berlinToday(now)
  const w = currentWindow(today)
  if (w) return { open: true, closesOn: { y: today.y, m: w.m, d: w.to } }
  return { open: false, nextOpensOn: nextWindowStart(today) }
}

/** "1. Oktober 2026" */
export function formatDay(day: Day): string {
  return new Intl.DateTimeFormat('de-DE', {
    timeZone: 'UTC',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(Date.UTC(day.y, day.m - 1, day.d, 12)))
}
