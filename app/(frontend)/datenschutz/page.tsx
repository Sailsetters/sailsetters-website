import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'

import PageBody from '@/components/ui/PageBody'
import PageHeader from '@/components/ui/PageHeader'
import Prose from '@/components/ui/Prose'
import { verein } from '@/lib/verein'

export const metadata: Metadata = {
  title: 'Datenschutz · Sailsetters',
  description: 'Informationen zur Verarbeitung personenbezogener Daten auf sailsetters.de.',
}

/*
 * Describes what the code actually does. Keep it in step when that changes:
 * a new service (analytics, embeds, another processor), a new form field, a
 * different hosting region (vercel.json) or different retention periods.
 */

function List({ children }: { children: ReactNode }) {
  return <ul className="m-0 flex list-disc flex-col gap-1.5 pl-6">{children}</ul>
}

const mail = <a href={`mailto:${verein.email}`}>{verein.email}</a>

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        intro="Welche Daten wir verarbeiten, wenn du unsere Website besuchst, uns schreibst oder dich bei uns bewirbst."
      />
      <PageBody className="pb-20 lg:pb-28">
        <Prose>
          <h2>Auf einen Blick</h2>
          <p>
            Auf unserer Website setzen wir keine Cookies und keine Werkzeuge zur Reichweitenmessung,
            Werbung oder zum Tracking ein. Personenbezogene Daten verarbeiten wir nur, soweit es für
            den Betrieb der Website technisch nötig ist und wenn du uns schreibst oder dich als
            Sailsetter:in bewirbst. Wir geben deine Daten nicht weiter, außer an die unten genannten
            Dienstleister, die für uns Website, Datenbank und E-Mail betreiben.
          </p>

          <h2>Verantwortlich</h2>
          <p>
            {verein.name}
            <br />
            {verein.street}
            <br />
            {verein.city}
            <br />
            E-Mail: {mail}
          </p>
          <p>
            Der Verein wird durch seinen Vorstand vertreten. Weitere Angaben findest du im{' '}
            <Link href="/impressum">Impressum</Link>. Bei Fragen zum Datenschutz schreib uns einfach an
            die oben genannte Adresse.
          </p>

          <h2>Besuch der Website</h2>
          <h3>Hosting</h3>
          <p>
            Unsere Website wird bei Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA,
            gehostet. Wenn du eine Seite aufrufst, übermittelt dein Browser automatisch Daten, die
            Vercel verarbeitet:
          </p>
          <List>
            <li>deine IP-Adresse</li>
            <li>Datum und Uhrzeit des Abrufs</li>
            <li>die aufgerufene Adresse</li>
            <li>Browser und Betriebssystem (User-Agent)</li>
            <li>den HTTP-Statuscode der Antwort</li>
          </List>
          <p>
            Diese Daten sind nötig, um dir die Website auszuliefern und sie vor Angriffen und
            Missbrauch zu schützen. Rechtsgrundlage ist unser berechtigtes Interesse an einer
            sicheren und funktionsfähigen Website (Art. 6 Abs. 1 lit. f DSGVO). Die Protokolle, die
            Vercel uns zur Fehlersuche bereitstellt, werden nach einem Tag gelöscht. Wir führen
            diese Daten nicht mit anderen Daten zusammen und versuchen nicht, dich darüber zu
            identifizieren.
          </p>
          <p>
            Seiten und Bilder liefert Vercel über ein weltweites Netz von Servern aus, in der Regel
            von einem Standort in deiner Nähe. Formulareingaben verarbeiten wir auf Servern in
            Frankfurt am Main.
          </p>

          <h3>Verschlüsselung</h3>
          <p>
            Die Verbindung zu unserer Website ist per TLS verschlüsselt. Du erkennst das an
            „https://“ in der Adresszeile deines Browsers. Formulareingaben können so auf dem Weg
            zu uns nicht von Dritten mitgelesen werden.
          </p>

          <h3>Schriftarten</h3>
          <p>
            Die Schriftarten unserer Website liefern wir selbst aus. Beim Aufruf wird keine
            Verbindung zu Google oder anderen Schriftanbietern aufgebaut.
          </p>

          <h3>Cookies</h3>
          <p>
            Auf den öffentlichen Seiten setzen wir keine Cookies und speichern auch sonst nichts in
            deinem Browser. Deshalb gibt es bei uns keinen Cookie-Banner.
          </p>
          <p>
            Einzige Ausnahme ist der Verwaltungsbereich unserer Website: Mitglieder unseres Teams,
            die sich dort anmelden, erhalten ein Cookie, das sie angemeldet hält. Es ist dafür
            technisch unbedingt erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG) und wird mit der Abmeldung
            oder nach Ablauf der Sitzung ungültig.
          </p>

          <h2>Kontaktformular</h2>
          <p>
            Wenn du uns über das Kontaktformular schreibst, verarbeiten wir deinen Namen, deine
            E-Mail-Adresse, den Betreff und deine Nachricht, um deine Anfrage zu beantworten.
            Rechtsgrundlage ist deine Einwilligung, die du beim Absenden erteilst (Art. 6 Abs. 1
            lit. a DSGVO). Du kannst sie jederzeit mit Wirkung für die Zukunft widerrufen, zum
            Beispiel per E-Mail an {mail}.
          </p>
          <p>
            Deine Nachricht wird in unserer Datenbank gespeichert. Lesen können sie nur Mitglieder
            unseres Teams mit einem persönlichen Zugang zum Verwaltungsbereich. Unsere Antwort
            schicken wir dir per E-Mail.
          </p>
          <p>
            Wir löschen deine Anfrage, sobald sie erledigt ist, spätestens sechs Monate nach
            unserem letzten Austausch, es sei denn, gesetzliche Aufbewahrungspflichten stehen dem
            entgegen.
          </p>

          <h2>Kontakt per E-Mail</h2>
          <p>
            Wenn du uns direkt per E-Mail schreibst, verarbeiten wir deine E-Mail-Adresse und die
            Angaben aus deiner Nachricht, um dir zu antworten. Rechtsgrundlage ist unser
            berechtigtes Interesse, Anfragen zu beantworten (Art. 6 Abs. 1 lit. f DSGVO). Geht es um
            eine Mitarbeit oder Zusammenarbeit, ist es Art. 6 Abs. 1 lit. b DSGVO. Für die Löschung
            gilt dasselbe wie beim Kontaktformular.
          </p>
          <p>
            Unser E-Mail-Postfach und der Versand unserer E-Mails, auch der an Bewerber:innen,
            laufen über IONOS SE, Elgendorfer Str. 57, 56410 Montabaur.
          </p>

          <h2>Bewerbung als Sailsetter:in</h2>
          <p>Wenn du dich über unser Bewerbungsformular bewirbst, verarbeiten wir:</p>
          <List>
            <li>Name, E-Mail-Adresse und Alter</li>
            <li>deine Motivation</li>
            <li>deinen Lebenslauf als PDF</li>
            <li>freiwillig: Hochschule, Studiengang, Fachsemester und Verfügbarkeit</li>
          </List>
          <p>
            Wir nutzen diese Angaben, um deine Bewerbung zu prüfen, dich zu einem Kennenlerngespräch
            einzuladen und dir unsere Entscheidung mitzuteilen. Dafür halten wir außerdem den Stand
            deiner Bewerbung, interne Notizen unseres Teams und die E-Mails fest, die wir dir
            schicken.
          </p>
          <p>
            Rechtsgrundlage ist deine Einwilligung, die du beim Absenden erteilst (Art. 6 Abs. 1
            lit. a DSGVO). Du kannst sie jederzeit mit Wirkung für die Zukunft widerrufen, zum
            Beispiel per E-Mail an {mail}. Wir betrachten deine Bewerbung dann als zurückgezogen und
            löschen deine Daten. Wirst du Sailsetter:in, verarbeiten wir die Angaben, die wir für
            deine Mitarbeit brauchen, auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO weiter.
          </p>
          <p>
            Bewerbungen liegen in unserer Datenbank, Lebensläufe in einem nicht öffentlichen
            Dateispeicher unter einem zufälligen Dateinamen. Beides ist nur für Mitglieder unseres
            Teams mit einem persönlichen Zugang zum Verwaltungsbereich abrufbar.
          </p>
          <p>
            Kommt es nicht zu einer Zusammenarbeit, weil wir absagen oder du deine Bewerbung
            zurückziehst, löschen wir sie sechs Monate nach der Entscheidung, zusammen mit
            Lebenslauf, Notizen und E-Mail-Verlauf. So können wir in der Zwischenzeit noch Rückfragen
            beantworten. Wirst du Sailsetter:in, bewahren wir deine Bewerbung auf, solange du bei
            uns aktiv bist, und löschen sie sechs Monate nach deinem Ausscheiden.
          </p>

          <h2>Dienstleister</h2>
          <p>
            Für den Betrieb unserer Website setzen wir die folgenden Dienstleister als
            Auftragsverarbeiter ein. Mit allen haben wir Verträge nach Art. 28 DSGVO geschlossen;
            sie verarbeiten deine Daten nur nach unserer Weisung.
          </p>
          <List>
            <li>
              <strong>Vercel Inc.</strong>, 440 N Barranca Avenue #4133, Covina, CA 91723, USA:
              Hosting der Website und Speicherung der Lebensläufe (Speicherort Frankfurt am Main)
            </li>
            <li>
              <strong>Neon, LLC</strong>, ein Unternehmen der Databricks, Inc., 160 Spear Street,
              Suite 1300, San Francisco, CA 94105, USA: Datenbank für Kontaktanfragen und Bewerbungen
              (Speicherort Frankfurt am Main)
            </li>
            <li>
              <strong>IONOS SE</strong>, Elgendorfer Str. 57, 56410 Montabaur: E-Mail-Postfach und
              E-Mail-Versand
            </li>
          </List>
          <p>
            Darüber hinaus geben wir deine Daten nicht an Dritte weiter, es sei denn, wir sind
            gesetzlich dazu verpflichtet.
          </p>

          <h3>Übermittlung in die USA</h3>
          <p>
            Vercel und Neon haben ihren Sitz in den USA. Auch wenn deine Daten in Frankfurt
            gespeichert werden, können diese Unternehmen aus den USA darauf zugreifen, etwa für
            Wartung und Support. Beide sind nach dem EU-U.S. Data Privacy Framework zertifiziert.
            Für zertifizierte Unternehmen hat die EU-Kommission ein angemessenes Datenschutzniveau
            festgestellt (Angemessenheitsbeschluss vom 10. Juli 2023, Art. 45 DSGVO).
          </p>

          <h2>Links auf andere Websites</h2>
          <p>
            Wir verlinken auf unsere Profile bei Instagram und LinkedIn sowie auf die Websites
            unserer Partner. Das sind einfache Links ohne eingebettete Inhalte oder Social-Media-Plugins:
            Daten werden erst übertragen, wenn du einen Link anklickst. Für die verlinkten Seiten
            gelten die Datenschutzbestimmungen ihrer Betreiber.
          </p>

          <h2>Deine Rechte</h2>
          <p>Du hast uns gegenüber das Recht auf</p>
          <List>
            <li>Auskunft über deine bei uns gespeicherten Daten (Art. 15 DSGVO),</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
            <li>Löschung deiner Daten (Art. 17 DSGVO),</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO) und</li>
            <li>
              Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3
              DSGVO).
            </li>
          </List>
          <p>Eine formlose E-Mail an {mail} genügt.</p>

          {/* Art. 21 Abs. 4 DSGVO: set apart from the rest of the text. */}
          <div className="flex flex-col gap-2 rounded-2xl bg-dune p-5 lg:p-6" role="note">
            <h3 className="mt-0!">Widerspruchsrecht</h3>
            <p>
              Soweit wir deine Daten auf Grundlage unseres berechtigten Interesses verarbeiten
              (Art. 6 Abs. 1 lit. f DSGVO), kannst du dem jederzeit aus Gründen widersprechen, die
              sich aus deiner besonderen Situation ergeben (Art. 21 DSGVO). Wir verarbeiten deine
              Daten dann nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe
              nachweisen, die deine Interessen überwiegen, oder die Verarbeitung dient der
              Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
            </p>
          </div>

          <h3>Beschwerde bei einer Aufsichtsbehörde</h3>
          <p>
            Du kannst dich bei einer Datenschutz-Aufsichtsbehörde beschweren, wenn du meinst, dass
            wir deine Daten nicht rechtmäßig verarbeiten (Art. 77 DSGVO). Für uns zuständig ist:
          </p>
          <p>
            Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)
            <br />
            Promenade 18
            <br />
            91522 Ansbach
            <br />
            <a href="https://www.lda.bayern.de">www.lda.bayern.de</a>
          </p>

          <h2>Sonstiges</h2>
          <p>
            Du bist weder gesetzlich noch vertraglich verpflichtet, uns Daten bereitzustellen. Ohne
            die Pflichtangaben in den Formularen können wir deine Anfrage oder Bewerbung aber nicht
            bearbeiten. Eine automatisierte Entscheidungsfindung einschließlich Profiling (Art. 22
            DSGVO) findet nicht statt. Über Bewerbungen entscheiden Menschen aus unserem Team.
          </p>
          <p>
            Wir passen diese Datenschutzerklärung an, wenn sich unsere Website oder die Rechtslage
            ändert.
          </p>
          <p className="text-driftwood">Stand: Oktober 2026</p>
        </Prose>
      </PageBody>
    </>
  )
}
