# Sailsetters e.V. — Design- und Präsentationsvorlage

## Was hier drin ist

| Datei | Zweck |
|---|---|
| `Sailsetters_Vorlage.potx` | Die eigentliche Vorlage. Doppelklick öffnet eine neue Präsentation. |
| `Sailsetters_Beispieldeck.pptx` | Beispieldeck mit allen zehn Layouts befüllt. Zum Anschauen und Abgucken. |
| `fonts/` | Die acht Schriftschnitte. **Zuerst installieren.** |
| `assets/` | Logo in drei Farben und fünf Blob-Formen als PNG mit Transparenz. |

---

## 1. Zuerst: Schriften installieren

Die Vorlage sieht ohne diesen Schritt falsch aus, weil PowerPoint Fraunces und Inter nicht mitliefert.

**Windows:** Alle acht `.ttf`-Dateien markieren → Rechtsklick → *Für alle Benutzer installieren*.
**macOS:** Alle acht markieren → Doppelklick → *Installieren* in der Schriftsammlung.

Danach PowerPoint neu starten. Fraunces und Inter stehen dann in der Schriftliste.

Das sind keine gewöhnlichen Google-Fonts-Downloads. Fraunces ist eine Variable Font mit vier Achsen, deren Standardinstanz auf der Schriftgrad-Achse bei 9 pt liegt — also dem Schnitt für Fließtext. In PowerPoint gäbe es keine Möglichkeit, das umzustellen, und Überschriften sähen gedrungener aus als auf der Website. Diese Dateien sind feste Instanzen bei Schriftgrad 72 in den Gewichten 600 und 800, dazu Inter bei Schriftgrad 18 in 400 und 700. Alle acht sind als reguläre Familien mit Kursiv- und Fettschnitt angelegt, damit die Fett- und Kursiv-Knöpfe in PowerPoint echte Schnitte benutzen statt sie zu verzerren.

Beide Familien stehen unter der SIL Open Font License — Weitergabe an alle Mitglieder ist ausdrücklich erlaubt. Die Lizenztexte liegen bei.

**Für die Website:** dort bitte weiterhin die Variable Fonts über Google Fonts einbinden. Im Browser funktioniert die optische Größenanpassung automatisch, das ist besser als eine feste Instanz.

---

## 2. Farben

Alle zehn Farben sind als Theme-Farben hinterlegt und erscheinen in PowerPoints Farbwähler in der obersten Reihe.

| Farbe | Hex | Theme-Slot | Einsatz |
|---|---|---|---|
| Sand | `#F7F1E7` | Hell 2 | Standard-Folienhintergrund |
| Dune | `#EDE3D3` | Akzent 6 | Zitat- und Kennzahlenfolien, Tabellenköpfe |
| Paper | `#FFFFFF` | Hell 1 | Datenfolien, Karten auf Sand |
| Ink | `#1F1A17` | Dunkel 1 | Überschriften und Fließtext |
| Driftwood | `#6A5F57` | Dunkel 2 | Bildunterschriften, Quellen, Seitenzahlen |
| Sunrise | `#EE6C3E` | Akzent 1 | Blobs, Icons, Diagramme |
| Coral | `#D9527A` | Akzent 2 | zweiter Akzent, Ende des Farbverlaufs |
| Port | `#8C2F39` | Akzent 3 | Kapiteltrenner, Schlüsselzahlen |
| Harbour | `#21414F` | Akzent 4 | Diagramme, Förderanträge |
| Tide | `#5C8A8C` | Akzent 5 | zweite Datenreihe |

**Wichtig:** Sunrise und Coral erreichen auf Sand nur 2,7:1 beziehungsweise 3,4:1 Kontrast und fallen damit durch die Barrierefreiheitsprüfung. Sie sind Flächenfarben, keine Textfarben. Lesbarer Text kommt aus Ink, Driftwood, Port oder Harbour — die bestehen alle WCAG AA auf Sand.

Der Markenverlauf läuft von Sunrise `#EE6C3E` nach Coral `#D9527A`. Die Blobs in `assets/` sind bereits damit gefüllt.

---

## 3. Schrift

| Element | Schrift | Größe |
|---|---|---|
| Titelfolie | Fraunces Regular | 44 pt |
| Kapitelüberschrift | Fraunces Regular | 40 pt |
| Folienüberschrift | Fraunces Regular | 28–30 pt |
| Kennzahl | Fraunces Regular | 54 pt |
| Fließtext | Inter Regular | 15–16 pt |
| Bildunterschrift, Quelle | Inter Regular | 10–13 pt |

Fraunces „Regular" ist hier bereits das Gewicht 600, also der Schnitt aus dem Entwurf. Deshalb Überschriften **nicht** zusätzlich fett setzen — der Fett-Knopf springt auf 800 und wird zu schwer. Fett ist für Hervorhebungen im Fließtext gedacht, und dort ist Inter zuständig.

---

## 4. Die zehn Layouts

Über *Start → Neue Folie* auswählen.

| Layout | Hintergrund | Wofür |
|---|---|---|
| 01 Titel | Sand | Deckblatt |
| 02 Kapitel | Port | Abschnittstrenner |
| 03 Titel + Inhalt | Sand | Standardfolie |
| 04 Zwei Spalten | Sand | Vergleiche, Vorher/Nachher |
| 05 Text + Bild | Sand | Projektvorstellung, Bild randabfallend rechts |
| 06 Kennzahlen | Dune | Wirkungszahlen, drei Stück |
| 07 Zitat | Dune | Stimmen von Teilnehmenden und Partnern |
| 08 Daten | Paper | Diagramme, weißer Grund für Klarheit |
| 09 Team | Sand | vier Personen oder Projekte |
| 10 Abschluss | Ink | Aufruf und Kontakt |

Die Blobs sind das eine wiederkehrende Gestaltungsmerkmal. In der Vorlage liegen sie bei 12 bis 20 Prozent Deckkraft im Hintergrund. Wer selbst welche einsetzt: höchstens eine Form pro Folie in voller Deckkraft, sonst wird es unruhig. Genau diese Zurückhaltung erzeugt den ruhigen Eindruck — nicht das Abschwächen der Farben.

---

## 5. Zwei Dinge zum Testen, bevor es ernst wird

**PDF-Export mit ß prüfen.** Für Inter ist im Januar ein Fehler gemeldet worden: Beim PDF-Export aus PowerPoint für Mac erschienen ß sowie Halbgeviert- und Geviertstrich als „No Glyph", obwohl sie in PowerPoint selbst korrekt aussahen. Die hier mitgelieferten Dateien enthalten alle diese Zeichen — geprüft. Trotzdem: eine Folie mit „Bildungsstraße — 30 %" schreiben, als PDF exportieren, anschauen. Falls es auftritt, in PowerPoint unter *Datei → Optionen → Speichern* die Schrifteinbettung aktivieren.

**Vorlage verteilen.** Die `.potx` gehört auf jeden Rechner in den Vorlagenordner, damit sie unter *Datei → Neu* auftaucht:

- Windows: `C:\Users\<Name>\AppData\Roaming\Microsoft\Templates`
- macOS: `~/Library/Group Containers/UBF8T346G9.Office/User Content/Templates`

Wer das nicht einrichten will, öffnet die `.potx` einfach per Doppelklick — daraus entsteht automatisch eine neue Präsentation, die Vorlage selbst bleibt unverändert.
