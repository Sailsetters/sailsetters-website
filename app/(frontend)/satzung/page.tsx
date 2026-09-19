import type { Metadata } from 'next'

import Container from '@/components/ui/Container'
import PageHeader from '@/components/ui/PageHeader'
import Prose from '@/components/ui/Prose'

export const metadata: Metadata = {
  title: 'Satzung — Sailsetters',
  description: 'Die Satzung des Sailsetters e.V.',
}

/** Anchor id for a section title like "§ 12 Mitgliederversammlung" → "p12". */
const anchor = (title: string) => 'p' + (title.match(/§ (\d+)/)?.[1] ?? '')

const sections = [
  '§ 1 Name, Sitz, Geschäftsjahr',
  '§ 2 Zweck, Gemeinnützigkeit',
  '§ 3 Erwerb der Mitgliedschaft',
  '§ 4 Beendigung der Mitgliedschaft',
  '§ 5 Mitgliedsbeiträge',
  '§ 6 Rechte und Pflichten der Mitglieder',
  '§ 7 Organe des Vereins',
  '§ 8 Vorstand',
  '§ 9 Zuständigkeit des Vorstands',
  '§ 10 Wahl und Amtsdauer des Vorstands',
  '§ 11 Sitzung und Beschlüsse des Vorstands',
  '§ 12 Mitgliederversammlung',
  '§ 13 Einberufung der Mitgliederversammlung',
  '§ 14 Ablauf der Mitgliederversammlung',
  '§ 15 Auflösung des Vereins',
]

function Paragraph({ number, text }: { number: number; text: string }) {
  return (
    <p>
      <span className="font-semibold">({number})</span> {text}
    </p>
  )
}

function SubParagraph({ number, text }: { number: string; text: string }) {
  return (
    <p className="pl-8">
      <span className="font-semibold">{number}</span> {text}
    </p>
  )
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 id={anchor(title)} className="scroll-mt-28">
      {title}
    </h2>
  )
}

export default function Satzung() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Satzung" intro="Die Satzung des Sailsetters e.V. in der aktuellen Fassung." />
      <Container className="pb-20 lg:pb-28">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
          <nav aria-label="Inhalt" className="lg:sticky lg:top-28">
            <span className="text-sm font-semibold uppercase tracking-[0.08em] text-driftwood">Inhalt</span>
            <ol className="mt-3 flex flex-col gap-1.5 text-[15px]">
              {sections.map((t) => (
                <li key={t}>
                  <a href={`#${anchor(t)}`} className="text-ink hover:text-port">
                    {t}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <Prose>
        <SectionTitle title="§ 1 Name, Sitz, Geschäftsjahr" />
        <Paragraph
          number={1}
          text="Der Verein führt den Namen „Sailsetters“. Der Verein soll in das Vereinsregister eingetragen werden; nach der Eintragung führt er im Namen den Zusatz „e. V.“"
        />
        <Paragraph
          number={2}
          text="Der Verein hat seinen Sitz in der Schellingstraße 36, 80799 München, Deutschland."
        />
        <Paragraph
          number={3}
          text="Das Geschäftsjahr des Vereins beginnt am ersten Oktober und endet am 30. September des darauf folgenden Jahres."
        />

        <SectionTitle title="§ 2 Zweck, Gemeinnützigkeit" />
        <Paragraph
          number={1}
          text="Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne der §§ 51 ff. AO (Abschnitt „Steuerbegünstigte Zwecke“ der Abgabenordnung). Zweck des Vereins ist die Förderung der Jugendhilfe (§ 52 Abs. 2 Satz 1 Nr. 4 AO) und die Förderung der Erziehungs- und Berufsbildung (§ 52 Abs. 2 Satz 1 Nr. 7 AO). Der Verein setzt sich zum Ziel, die Begegnung junger Menschen zu ermöglichen, kreative und kulturelle Betätigung zu fördern, Kritikfähigkeit anzuregen, Bildungsmaßnahmen für Jugendliche zu leisten und solidarisches Verhalten zu fördern. Der Verein will die individuelle und soziale Entwicklung junger Leute fördern. Diese Ziele sollen durch Einrichtung und Veranstaltung von Projekten wie Mentoringprogrammen, Nachhilfekursen, Tutoringprogrammen, Spielenachmittagen und Nachmittagsbetreuungen für Jugendliche und der gemeinsamen Teilnahme an kulturellen Freizeitaktivitäten (Museumsbesuche oder andere Exkursionen) mit den Jugendlichen verwirklicht werden. Alle genannten Aktivitäten finden ausschließlich schulbegleitend statt."
        />
        <Paragraph
          number={2}
          text="Der Verein ist selbstlos tätig; er verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke."
        />
        <Paragraph
          number={3}
          text="Mittel des Vereins dürfen nur für die satzungsmäßigen Zwecke verwendet werden. Die Mitglieder erhalten keine Zuwendungen aus den Mitteln des Vereins. Es darf keine Person durch Ausgaben, die dem Zweck des Vereins fremd sind, oder durch unverhältnismäßig hohe Vergütungen begünstigt werden. Das Ausüben von Ämtern nach der Satzung geschieht ehrenamtlich."
        />
        <Paragraph
          number={4}
          text="Bei Auflösung oder Aufhebung des Vereins oder bei Wegfall seines steuerbegünstigten Zwecks fällt das Vermögen des Vereins an die STIFTUNG LICHTBLICK KINDER- UND JUGENDHILFE c/o GR-AD KG, die es unmittelbar und ausschließlich für gemeinnützige Zwecke zu verwenden hat."
        />

        <SectionTitle title="§ 3 Erwerb der Mitgliedschaft" />
        <Paragraph number={1} text="Dem Verein beitreten können:" />
        <SubParagraph
          number="1."
          text="Als aktives Mitglied: Jede natürliche Person, die das 16. Lebensjahr vollendet hat, an einer Hochschule im deutschsprachigen Raum studiert und sich dem Zwecke des Vereins verbunden fühlt. Als Nachweis dient die Immatrikulationsbescheinigung."
        />
        <SubParagraph
          number="1."
          text="Als passives Mitglied: Jede natürliche Person, die das 16. Lebensjahr vollendet hat und sich dem Zwecke des Vereins verbunden fühlt. Passive Mitglieder sind nicht stimmberechtigt."
        />
        <Paragraph
          number={2}
          text="Voraussetzung für den Erwerb der Mitgliedschaft ist ein schriftlicher Aufnahmeantrag, der an 1 den Vorstand zu richten ist. Bei Minderjährigen ist der Antrag auch von deren gesetzlichen Vertretern (§§ 1626, 1629 BGB) zu unterschreiben."
        />
        <Paragraph
          number={3}
          text="Der Vorstand entscheidet über den Aufnahmeantrag nach freiem Ermessen. Bei Ablehnung des Antrags ist er nicht verpflichtet, dem Antragsteller die Gründe für die Ablehnung mitzuteilen. Die Mitgliedschaft kann von Seiten des Vorstandes nicht willkürlich abgelehnt werden. Die Mitgliedschaft darf nicht davon abhängen, dass die beitrittswillige Person zu einer bestimmten Familie gehört, in einem bestimmten Unternehmen arbeitet, in einem sehr kleinen Gebiet wohnt oder Teil eines auf andere Art abgeschlossenen, auf Dauer nur kleinen Kreises ist."
        />
        <Paragraph
          number={4}
          text="Auf Vorschlag des Vorstands kann die Mitgliederversammlung Ehrenmitglieder auf Lebenszeit ernennen."
        />
        <Paragraph
          number={5}
          text="Für eine Mitgliedschaft nach §3,1a ist eine Immatrikulationsbescheinigung einzureichen (erstmalig als Voraussetzung zur Aufnahme, dann unaufgefordert zu Beginn jedes neuen Semesters, spätestens bis zur ersten Vorstandssitzung des jeweiligen Semesters). Bei Nichteinhaltung dieser Frist wird das Mitglied vorrübergehend in den Status des „passiven Mitglieds“ versetzt, bis eine gültige Immatrikulationsbescheinigung vorliegt."
        />

        <SectionTitle title="§ 4 Beendigung der Mitgliedschaft" />
        <Paragraph
          number={1}
          text="Die Mitgliedschaft endet durch Tod, Austritt aus dem Verein, Ausschluss durch den Vorstand oder Beendigung des Studiums an einer Hochschule im Deutschsprachigen Raum."
        />
        <Paragraph
          number={2}
          text="Der Austritt erfolgt durch schriftliche Erklärung gegenüber dem Verein. Bei Minderjährigen ist die Austrittserklärung durch die gesetzlichen Vertreter (§§ 1626, 1629 BGB) zu unterschreiben. Der Austritt kann nur zum Ende eines Geschäftsjahres erklärt werden. Dabei ist eine Kündigungsfrist von zwei Monaten einzuhalten."
        />
        <Paragraph
          number={3}
          text="Ein Mitglied kann durch Beschluss des Vorstandes aus dem Verein ausgeschlossen werden, wenn es schuldhaft in grober Weise die Interessen des Vereins verletzt oder die in §6,2 festgelegten Pflichten nicht befolgt. Vor der Beschlussfassung muss der Vorstand dem Mitglied Gelegenheit zur mündlichen oder schriftlichen Stellungnahme geben. Der Beschluss des Vorstandes ist schriftlich zu begründen und dem Mitglied zuzusenden. Gegen den Beschluss kann das Mitglied innerhalb eines Monats nach Zugang des Beschlusses schriftlich Berufung an die Mitgliederversammlung einlegen. Über die Berufung ist abschließend in der nächsten Mitgliederversammlung zu entscheiden, die nach Eingang der Berufung stattfindet, jedenfalls aber binnen eines Jahres nach fristgemäßer Einlegung der Berufung. Bis zur Entscheidung ruhen die Rechte des Mitglieds. Erfolgt eine Entscheidung nicht rechtzeitig, ist der Ausschluss unwirksam."
        />

        <SectionTitle title="§ 5 Mitgliedsbeiträge" />
        <Paragraph number={1} text="Es gibt keinen Mitgliedsbeitrag." />

        <SectionTitle title="§ 6 Rechte und Pflichten der Mitglieder" />
        <Paragraph
          number={1}
          text="Die Mitglieder sind berechtigt an den Veranstaltungen des Vereins teilzunehmen. Aktive Mitglieder sind in der Mitgliederversammlung stimmberechtigt. Passive Mitglieder sind in der Mitgliederversammlung nicht stimmberechtigt."
        />
        <Paragraph
          number={2}
          text="Die Mitglieder haben im Rahmen ihrer Betätigung im Verein die vom Vorstand festgelegten Pflichten zu erfüllen. Bei Nichterfüllung dieser Pflichten folgt der Ausschluss aus dem Verein."
        />

        <SectionTitle title="§ 7 Organe des Vereins" />
        <Paragraph
          number={1}
          text="Organe des Vereins sind der Vorstand und die Mitgliederversammlung."
        />

        <SectionTitle title="§ 8 Vorstand" />
        <Paragraph
          number={1}
          text="Der Vorstand des Vereins i. S. v. § 26 BGB besteht aus fünf aktiven Mitgliedern."
        />
        <Paragraph
          number={2}
          text="Der Vorstandsvorsitzende vertritt den Verein einzeln, im Übrigen wird der Verein durch zwei Vorstandsmitglieder gemeinschaftlich vertreten."
        />

        <SectionTitle title="§ 9 Zuständigkeit des Vorstands" />
        <Paragraph
          number={1}
          text="Der Vorstand ist für alle Angelegenheiten des Vereins zuständig, soweit sie nicht durch die Satzung einem anderen Organ des Vereins übertragen sind."
        />
        <Paragraph
          number={2}
          text="Der Vorstand hat insbesondere folgende Aufgaben:"
        />
        <SubParagraph
          number="a."
          text="Vorbereitung und Einberufung der Mitgliederversammlung sowie Aufstellung der Tagesordnung;"
        />
        <SubParagraph
          number="b."
          text="Ausführung von Beschlüssen der Mitgliederversammlung;"
        />
        <SubParagraph
          number="c."
          text="Vorbereitung des Haushaltsplans, Buchführung, Erstellung des Jahresberichts;"
        />
        <SubParagraph
          number="d."
          text="Beschlussfassung über die Aufnahme von Mitgliedern."
        />

        <SectionTitle title="§ 10 Wahl und Amtsdauer des Vorstands" />
        <Paragraph
          number={1}
          text="Der Vorstand wird von der Mitgliederversammlung für die Dauer von einem Jahr, gerechnet von der Wahl an, gewählt. Er bleibt bis zur Neuwahl des Vorstands im Amt. Jedes Vorstandsmitglied ist einzeln zu wählen. Zu Vorstandsmitgliedern können nur aktive Vereinsmitglieder gewählt werden. Mit der Beendigung der Mitgliedschaft im Verein endet auch das Amt eines Vorstandsmitglieds."
        />
        <Paragraph
          number={2}
          text="Scheidet ein Mitglied des Vorstands vorzeitig aus, so kann der verbleibende Vorstand für die restliche Amtsdauer des Ausgeschiedenen einen Nachfolger wählen."
        />

        <SectionTitle title="§ 11 Sitzung und Beschlüsse des Vorstands" />
        <Paragraph
          number={1}
          text="Der Vorstand beschließt in Sitzungen. Sie können von jedem Vorstandsmitglied einberufen werden. Die Einberufung erfolgt in Textform. Die Einberufungsfrist beträgt drei Tage. Die Frist beginnt mit dem auf die Absendung folgenden Tag."
        />
        <Paragraph
          number={2}
          text="Der Vorstand ist beschlussfähig, wenn drei Mitglieder anwesend sind. Die Beschlüsse werden mit absoluter Mehrheit gefasst."
        />
        <Paragraph
          number={3}
          text="Der Vorstand kann im schriftlichen Verfahren beschließen, wenn drei Vorstandsmitglieder dem zustimmen."
        />

        <SectionTitle title="§ 12 Mitgliederversammlung" />
        <Paragraph
          number={1}
          text="In der Mitgliederversammlung hat jedes Mitglied, welches das 16. Lebensjahr vollendet hat, eine Stimme. Zur Ausübung des Stimmrechts kann ein anderes stimmberechtigtes Mitglied schriftlich bevollmächtigt werden. Ein Mitglied darf jedoch nicht mehr als drei fremde Stimmen vertreten. Die Bevollmächtigung ist für jede Mitgliederversammlung gesondert zu erteilen."
        />
        <Paragraph
          number={2}
          text="Die Mitgliederversammlung ist für folgende Angelegenheiten zuständig:"
        />
        <SubParagraph
          number="a."
          text="Genehmigung des Haushaltsplans für das nächste Geschäftsjahr; Entgegennahme des Jahresberichts des Vorstands; Entlastung des Vorstands;"
        />
        <SubParagraph
          number="b."
          text="Wahl und Abberufung der Mitglieder des Vorstands;"
        />
        <SubParagraph
          number="c."
          text="Beschlussfassung über Änderung der Satzung und über die Auflösung des Vereins;"
        />
        <SubParagraph
          number="d."
          text="Beschlussfassung über die Berufung gegen einen Ausschließungsbeschluss;"
        />
        <SubParagraph number="e." text="Ernennung von Ehrenmitgliedern." />

        <SectionTitle title="§ 13 Einberufung der Mitgliederversammlung" />
        <Paragraph
          number={1}
          text="Die ordentliche Mitgliederversammlung findet einmal jährlich zu Beginn des Geschäftsjahres statt. Sie wird vom Vorstand unter Einhaltung einer Frist von zwei Wochen unter Angabe der Tagesordnung einberufen. Die Tagesordnung setzt der Vorstand fest. Die Einberufung erfolgt in Textform. Die Frist beginnt mit dem auf die Absendung der Einladung folgenden Tag. Die Einladung gilt dem Mitglied als zugegangen, wenn es an die letzte vom Mitglied dem Verein in Textform gegebene E-Mail-Adresse gerichtet ist. Eine Verletzung dieser Bestimmung ist ohne Folgen."
        />
        <Paragraph
          number={2}
          text="Jedes Mitglied kann bis spätestens eine Woche vor einer Mitgliederversammlung beim Vorstand in Textform eine Ergänzung der Tagesordnung beantragen. Der Versammlungsleiter hat zu Beginn der Mitgliederversammlung die Ergänzung bekannt zugeben."
        />
        <Paragraph
          number={3}
          text="Über Anträge auf Ergänzung der Tagesordnung, die in Mitgliederversammlungen gestellt werden, beschließt die Versammlung."
        />
        <Paragraph
          number={4}
          text="Eine außerordentliche Mitgliederversammlung ist vom Vorstand einzuberufen, wenn das Interesse des Vereins es erfordert oder wenn ein Zehntel der Mitglieder dies beim Vorstand schriftlich unter Angabe des Zwecks und der Gründe beantragt."
        />

        <SectionTitle title="§ 14 Ablauf der Mitgliederversammlung" />
        <Paragraph
          number={1}
          text="Die Mitgliederversammlung wird vom Vorsitzenden, bei dessen Verhinderung vom Stellvertretenden Vorsitzenden geleitet. Ist kein Vorstandsmitglied anwesend, bestimmt die Versammlung den Versammlungsleiter. Bei Wahlen kann die Versammlungsleitung für die Dauer des Wahlganges und der vorhergehenden Diskussion einem Wahlausschuss übertragen werden. Der Versammlungsleiter bestimmt einen Protokollführer."
        />
        <Paragraph
          number={2}
          text="Die Art der Abstimmung bestimmt der Versammlungsleiter. Die Abstimmung muss aber schriftlich durchgeführt werden, wenn ein Drittel der anwesenden oder vertretenen stimmberechtigten Mitglieder dies beantragt, und bei Wahlen, wenn ein solches Mitglied dies beantragt."
        />
        <Paragraph
          number={3}
          text="Die Mitgliederversammlung ist beschlussfähig, wenn mindestens ein Fünftel sämtlicher Vereinsmitglieder anwesend oder vertreten ist. Bei Beschlussunfähigkeit ist der Vorstand verpflichtet, eine zweite Mitgliederversammlung mit der gleichen Tagesordnung einzuberufen, die innerhalb von sechs Wochen stattzufinden hat. Diese ist ohne Rücksicht auf die Zahl der anwesenden und vertretenen Mitglieder beschlussfähig, wenn hierauf in der Einladung hingewiesen wird."
        />
        <Paragraph
          number={4}
          text="Die Mitgliederversammlung fasst Beschlüsse mit einfacher Mehrheit der abgegebenen gültigen Stimmen. Stimmenthaltungen gelten als nicht abgegebene Stimmen. Zur Änderung der Satzung ist jedoch eine Mehrheit von drei Vierteln der abgegebenen gültigen Stimmen und zu einer Änderung des Zwecks des Vereins oder zur Auflösung des Vereins eine solche von neun Zehnteln der abgegebenen gültigen Stimmen erforderlich."
        />
        <Paragraph
          number={5}
          text="Bei Wahlen ist gewählt, wer mehr als die Hälfte der abgegebenen gültigen Stimmen erhalten hat. Hat niemand mehr als die Hälfte der abgegebenen gültigen Stimmen erhalten, so findet zwischen den beiden Kandidaten, welche die meisten gültigen Stimmen erhalten haben, eine Stichwahl statt. Gewählt ist dann derjenige, der die meisten gültigen Stimmen erhalten hat. Bei gleicher Stimmenzahl entscheidet das von dem Versammlungsleiter zu ziehende Los."
        />
        <Paragraph
          number={6}
          text="Über Beschlüsse der Mitgliederversammlung ist ein Protokoll aufzunehmen, das vom jeweiligen Schriftführer zu unterzeichnen ist."
        />

        <SectionTitle title="§ 15 Auflösung des Vereins" />
        <Paragraph
          number={1}
          text="Die Auflösung des Vereins kann nur in einer Mitgliederversammlung mit einer Mehrheit von neun Zehnteln der abgegebenen gültigen Stimmen beschlossen werden (§ 15, 4)."
        />
        <Paragraph
          number={2}
          text="Falls die Mitgliederversammlung mit einfacher Mehrheit nichts anderes beschließt, sind der Vorsitzende und der Stellvertretende Vorsitzende gemeinsam vertretungsberechtigte Liquidatoren."
        />

          </Prose>
        </div>
      </Container>
    </>
  )
}
