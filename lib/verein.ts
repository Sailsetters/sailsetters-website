/**
 * Stammdaten des Vereins. Einzige Quelle für Adresse, Kontakt und
 * Bankverbindung — wird im Impressum, auf der Kontaktseite, im Footer und
 * auf /foerdern verwendet.
 */
export const verein = {
  name: 'Sailsetters e.V.',
  street: 'Kurfürstenstr. 33',
  city: '80801 München',
  email: 'contact@sailsetters.de',
  bank: {
    // In Vierergruppen, wie man sie abliest; kopiert wird ohne Leerzeichen.
    iban: 'DE04 7015 0000 1009 2671 52',
    bic: 'SSKMDEMMXXX',
    name: 'Stadtsparkasse München',
  },
} as const
