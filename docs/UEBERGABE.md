# Übergabe Lernlabor Pro (Stand 16.11.2026)

Diese Datei ist der Startpunkt für das eigene Projekt „Lernlabor Pro“. Sie fasst alles zusammen, was bisher im Projekt „Lernlabor v2“ dazu entstanden ist. Ein neuer Claude-Thread soll damit ohne Rückfragen weiterarbeiten können.

## 1. Kurz zusammengefasst

- **Zweck:** Lern- und Übungsplattform für die **Handlungsspezifischen Qualifikationen (HQ)** der IHK-Industriemeister, Bereiche **Technik**, **Organisation**, **Führung & Personal**, in sechs Fachrichtungen: Metall, Elektrotechnik, Chemie, Kunststoff & Kautschuk, Mechatronik, Logistik. Darstellung und Bedienung wie das Lernlabor, Farbe **Anthrazit/Orange**. „Lernlabor Pro“ ist ein vorläufiger Name.
- **Besitzer:** Markus (Dr. rer. nat. Markus Baum), nebenberuflicher Dozent für Industriemeister. Deutsch, Du-Form.
- **Repo:** https://github.com/bam01872/Lernlabor-Pro (öffentlich, Branch `main`)
- **Live (GitHub Pages, main / root, seit 14.11.2026):** https://bam01872.github.io/Lernlabor-Pro/
- **Stand main:** **Version 25** (16.11.2026). Gemergt sind PR #1 bis #26.
- **Nächste freie Version:** 26
- **Umfang:** Metall 39 Themen, Elektrotechnik 40, Chemie 51 (mit Gebiet Thermodynamik), Kunststoff & Kautschuk 42, Mechatronik 43, Logistik 42; je 5 mehrstufige Aufgaben „Im Betrieb“, Situationsaufgaben, Fachgespräch-Fragen; `tests/check.js` prüft 213+ Rechenaufgaben.

### Versionsgeschichte (kurz)
| Version | PR | Inhalt |
|---|---|---|
| 1–2 | #1, #2 | Grundgerüst aus Meisterlabor v5, alle 38 Metall-Themen |
| 3 | #3 | Fachrichtungen Elektrotechnik und Chemie (Umschalter, Kästen Wichtiges/Gleichungen/Fehlerquellen) |
| 4 | #4 | Bedienung wie Lernlabor (Wischleisten, Regler mit Zahlenfeld, Nachschlagen eingeklappt) |
| 5 | #5 | Chemie: Gebiet Thermodynamik (10 Themen) |
| 6 | #6 | Kunststoff & Kautschuk, Mechatronik, Logistik |
| 7 | #7 | Korrekturen Fachprüfung Durchlauf 1 (24 Befunde), neues `tests/check.js` |
| 8 | #8 | Lernlabor-Übernahmen (Hash-Routing, Teilen/QR, eine Zeichnung, Menüs, heller Standard) |
| 9 | #9 | 15 Restpunkte, Knopfzeile, Kacheln 2×2, Blocksatz, Einheiten als Bruch überall |
| 10 | #10 | neues App-Symbol (Kolben mit PRO-Feld) |
| 11 | #11 | Zahl+Einheit zusammen, nichts über Ränder, Trennung nach Rechtschreibung |
| 12, 13, 15, 17, 18 | #12 … #18 | bewegte Regler-Zeichnungen: Metall, Elektro, Chemie, Kunststoff, Mechatronik/Logistik |
| 14 | #14 | Versionsanzeige, „Jetzt laden“, sw.js (offline) |
| 16 | #16 | „Weiter mit …“ im Menü Lernen |
| 19 | #20 | Fachrichtungs-Wahl als gleich breites Kachelraster |
| 20 | #21 | Zahl + Bruch-Einheit zusammen, kurze Formeln in einer Zeile (Formatierungsregel) |
| 21 | #22 | Tutorial wie im Lernlabor: 4 Einführungskarten, Ich → Tutorial mit 7 Kapiteln (`pro-tut.js`) |
| 22 | #23 | Gerechnete Prüfungsaufgaben wie Lernlabor v322: ✓/✎/○, Übersicht mit Filter, „Zufällige offene Aufgabe“ (`pro-ex.js`) |
| 23 | #24 | Dozentenversion Grundlage: `build-dozent.py`, Prüfung in `tests/check.js`, Bericht mit Fachrichtung, feste Pages-Adresse für Links |
| 24 | #25 | Dozentenversion: „📧 Auswertung an mich mailen“ mit Teilnehmerzahl je Kurs (`pro-dz.js`) |
| 25 | #26 | Kurslink `#kurs/<Name>/<Tage>` mit QR (Dozent), füllt „Meine Kurstermine“, nächster Kurstag oben auf der Startseite |

## 2. Aufbau des Repos

- `index.html`: fertige App in einer Datei, **gebaut, nicht von Hand ändern**.
- `sw.js`: gebaut aus `werkzeug/sw-vorlage.js`, Cache `lernlabor-pro-v<APPV>`.
- `fonts/`, `manifest.webmanifest`, `icon-192/512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`.
- `tests/check.js`: lädt alle sechs Fachrichtungen, prüft jede Rechenaufgabe in 25 Zahlenvarianten (gültig, **relative** Toleranz ≤ 5 %, falsche Eingaben werden abgelehnt), Version/sw.js/Hinweis.
- `werkzeug/`: Quellen und Bauwerkzeug.
  - **Bauen:** `python3 werkzeug/build.py werkzeug/basis/meisterlabor-v5.html index.html`
  - **Version nur oben in `werkzeug/build.py` hochzählen:** `APPV,APPD=20,'15.11.2026'`. Daraus entstehen APPV in der App, Fußzeilen und sw.js. Dazu NEU-Eintrag (Was ist neu) und README-Stand.
  - `basis/meisterlabor-v5.html`: Gerüst (Meisterlabor Version 5).
  - Inhalte: `pro-data.js`, `pro-pakete.js`, `pro-p3a..d.js` (Metall, Org, Führung), `pro-fr.js` (Fachrichtungen), `pro-el1/2` + `pro-xe1/2` (Elektro), `pro-ch1/2` + `pro-xc1/2` (Chemie), `pro-thd` + `pro-xthd` (Thermodynamik), `pro-ku1` + `pro-xku`, `pro-mt1` + `pro-xmt` (enthält Skizzenhelfer XTI/XMX/XP/XFO/XSTK), `pro-lo1` + `pro-xlo`, `pro-ib`/`pro-ib2` (Im Betrieb), `pro-a1/a2` + `pro-xa/xa2` (Situationsaufgaben, Fachgespräch).
  - Darstellung/Bedienung: `pro-ml5.js`, `pro-x2..x4.js` (Vermuten, Kurz erklärt, Skizzen, Regler), `pro-ll.js` (Hash-Routing `#thema/<slug>`, Teilen/QR, ONE-Liste ohne Doppel-Skizze, Menüs, Ich → Sonstiges), `pro-l9.js` (Restpunkte, „Weiter mit …“), `pro-nb.js` (Zahl+Einheit, Ränder, Trennung), `pro-upd.js` (Hinweis neue Version), `pro-tut.js`/`pro-tut.css` (Ich → Tutorial, Adresse `#tutorial/<n>`), `pro-ex.js` (gerechnete Prüfungsaufgaben, localStorage `lernlabor-pro-gerechnet`+FRS; gerechnet = alle Teilaufgaben selbst bewertet, begonnen = Antwort geschrieben oder Erwartungshorizont geöffnet; in Sichern/Wiederherstellen/Zurücksetzen enthalten), `pro-anim.js` (bewegte Zeichnungen), `pro.css`, `qrcode.js`.
- Fachrichtung über `?fr=me|el|ch|ku|mt|lo`, `window.name` oder localStorage `lernlabor-pro-fr`; Lernstand je Fachrichtung getrennt (Schlüssel-Suffix). Organisation und Führung & Personal sind gemeinsam, die Technik wechselt.

**Technik-Hinweise**
- Im Gerüst heißt die Navigationsleiste `#fs`, das Auswahlfeld der Situationsaufgaben deshalb `#fsel`.
- `tol` ist immer relativ (0,01 = 1 %). Je Thema ein Regler; ein Auftrag braucht ≥ 3 passende Reglerstellungen und darf am Start nicht erfüllt sein.
- SVG-Helfer `L()` rendert keine Tiefstellung. Einheiten mit Schrägstrich in den Quellen, Bruch macht der DOM-Walker (auch in SVG über `svgFr`); Texte, die sich in `tick` ändern, dürfen keinen „/“ enthalten.
- Bewegte Zeichnungen: `SIMX(titel,{svg,tick,fix})`; `svg(v,r)` baut Teile mit `data-a="name"`, `tick(E,v,r,t,dt,st)` setzt nur Attribute (kein innerHTML). Knopf zum Anhalten oben rechts: Bereich x > 432, y < 47 (viewBox 480×270) frei lassen. `prefers-reduced-motion` startet angehalten. Leitungen nie im Leeren enden lassen.
- `build.py` hängt `+FRS` an Speicherschlüssel wie `lernlabor-pro-last` an.
- Playwright: zuerst die `.tour` wegklicken; Zeichnung für Aufnahmen mit `scrollIntoView({block:'center'})` holen.

## 3. Arbeitsweise und Regeln

**Allgemein**
- Deutsch, Du-Form, kurze klare Antworten.
- **Darstellung am Lernlabor ausrichten**, bei Abweichung nachfragen.
- Nur **eigene Texte und Aufgaben**, keine IHK-Originale. Fremde Seiten (z. B. Übersichtsseiten zu HQ Metall) nur als Themenliste, keine Texte, Zahlen oder Statistiken übernehmen. Prüfungszeiten nur aus der Verordnung.
- Lernstand lokal, keine Konten, keine Nutzungszählung, keine KI in der App (KI-Knöpfe aus dem Gerüst sind ausgeblendet).
- Markus' „Dozenten-/Prüfersicht“-Texte sind Orientierung für Schwerpunkte, keine Textvorlage. Fachliche Korrekturen an seinen Beispielen sind erwünscht.
- Bewegte Zeichnungen: nicht auf Biegen und Brechen; nur wo es anschaulich ist, in der Vorschau je Thema begründen.
- Aufgaben nicht zu komplex für den Kurs (z. B. keine Polytropen-Formeln, kein Stefan-Boltzmann).
- Fehlerverwaltung mit Kennungen (z. B. KONS-001, ELT-001); nichts gilt als erledigt ohne Nachprüfung.

**Ablauf**
- Code, Commit, PR nur nach Markus' Ja.
- Vor jeder **Darstellungsänderung zuerst eine Vorschau**: Artifact-Seite mit Screenshots Handy und Laptop, hell und dunkel, bei Bewegung GIFs. Link **im Klartext** in die Fertig-Meldung.
- **Merge nur auf Markus' Ja mit Merge-Wort** („PR und merge“; diktiert auch „PR Merchant“, „PR und Merch“, „merge es“, „Dann merge“). Direkt nach einer Vorschau-Meldung gilt es für diese. „PR und merge für X“ = nur X.
- „Strukturiere den Prompt, bevor du ihn ausführst“ = erst Ist / Soll / Akzeptanzkriterien / Vorschlag, Umsetzung nach Ja. „… und führe ihn dann aus“ = kurz strukturieren, bis zur Vorschau umsetzen.
- „Abspeichern“ / „Aufgabe merken“ = Branch gepusht lassen, kein PR.
- Parallele Threads: vor dem PR `origin/main` holen, rebasen, nächste freie Version in `APPV`, neu bauen, nie rückwärts. Der Koordinator vergibt Versionsnummern in Merge-Reihenfolge.
- Vor jedem PR `node tests/check.js` (CI maßgeblich). PRs per `gh api` REST. Nach dem Merge den Pages-Workflow „pages build and deployment“ prüfen (curl auf die Seite geht nicht, Proxy 403).
- Force-Push ist gesperrt: nach gemergtem PR `git checkout -B <branch> origin/main`, Änderung per `cherry-pick -n`, neu bauen, vor dem Push `git merge -s ours origin/<branch>`.

**Gestaltung (aus dem Lernlabor)**
- Themenseite: Einstieg → Vermuten → Kurz erklärt → Skizze → Regler mit Auftrag („Werte einstellen“), dann Nachschlagen eingeklappt, Üben am Ende.
- Einheiten überall als echter Bruch, Blocksatz mit Trennung nur nach Rechtschreibung, nichts über Ränder.
- **Formatierungsregel Zahl, Einheit, Formel (Markus, 15.11.2026, Version 20), gilt für die ganze App:**
  - Zahl und Einheit nie trennen: auch nicht vor einer Bruch-Einheit (kJ/kg, `[[kJ||kg]]`), nicht bei Tausenderlücke (30 000 €/Jahr), ein folgender Punkt oder ein folgendes Komma bleibt dabei. Zählwörter wie Mitarbeiter, Paletten, Betriebsstunden gelten als Einheit.
  - Kurze Formeln stehen in einer Zeile: „r = 2257 kJ/kg“, „c = 4,18 kJ/(kg·K)“, „Q = m · c · ΔT“, „P = √3 · U · I · cos φ“. Nie am „=“ oder am Malpunkt umbrechen.
  - Lange Wortformeln, die am Handy nicht in eine Zeile passen („Beschäftigungsabweichung = Sollkosten − …“): „=“ bleibt am Wort davor, Umbruch erst dahinter. Die Schrift wird dafür nicht verkleinert.
  - Umgesetzt zentral in `werkzeug/pro-nb.js` beim Anzeigen (geschützte Leerzeichen, Kasten `.nw` mit `white-space:nowrap`). Inhalte nie einzeln von Hand mit geschützten Leerzeichen versehen. Neue Einheiten oder Zählwörter in die Liste `U` in `pro-nb.js` eintragen.
  - Prüfen: alle Themenseiten bei 320, 360, 390 px und Laptop auf Umbrüche zwischen Zahl und Einheit und in Formeln.
- Einheiten in jedem Rechenschritt. Skizzen verraten keine Lösung, Beschriftungen nie überlappend/verdeckt, alle Ansichten (390 px, 320 px, Laptop, hell/dunkel, Safari) prüfen.
- Chemie-Symbol 🧪 wie im Lernlabor; Kacheln 🧴 Kunststoff, 🤖 Mechatronik, 📦 Logistik.

## 4. Offene Punkte und nächste Schritte

1. **Name** („Lernlabor Pro“ ist vorläufig).
2. **Rechtsstand** der Themen Arbeitsschutz, Gefahrstoffe, Unfallanzeige (O3), Maschinenverordnung 2023/1230 (ab 20.01.2027) u. a. nur mit „Stand prüfen“ markiert, nicht gegen Gesetzestexte geprüft.
3. **Fachliche Durchsicht** Elektro, Chemie, Kunststoff, Mechatronik, Logistik durch Fachleute steht aus (nicht Markus' Fach). Normwerte sind Beispielwerte.
4. **Fachprüfung Durchlauf 2** in Paketen P1–P7 (P1 Antwortprüfung zuerst); Prüfwerkzeuge lagen nur in Sitzungen und müssten neu gebaut werden.
5. **Dozentenversion:** Grundlage seit Version 23 (siehe Abschnitt 8). Seit Version 24 „Auswertung an mich mailen“, seit Version 25 Kurslink. Offen, je einzeln nach Markus' Ja: Top-3-Fehler (braucht gespeicherte „Woran lag es?“-Wahl), Übungslinks je Thema, Eigene Aufgaben.
6. **Sicherung** läuft seit 15.11.2026 nach jedem Merge (Abschnitt 8).
7. Gasgesetze gibt es auch im Lernlabor; in Pro bewusst behalten (Chemie hat kein NTG), auf Wunsch streichen.
8. Rückführung der Kunststoff-Animation mit Tg ins Lernlabor (Punkt 52 aus Plan V6) nicht gemacht.
9. Ideen ohne Auftrag: SPS-Selbsthaltung als Regler; SMIL-Bewegungen (Fließen, Spritzgießen, Extrusion, Positionierachse) hören nicht auf den Anhalten-Knopf.
10. Vorbereitet, nicht gemergt: Branch `claude/project-thread-oyrrmu` hängt `?v=10` an Symbol-/Manifest-Adressen (nur falls Handys das Symbol nicht neu laden).
11. Spezialisierungsgebiete Chemie (Wahlteil der Verordnung 2004) sind nicht enthalten.
12. Alte Branches im Repo (`12opyq`, `4xcazm`, `655pw1`, `6mjqvw`, `iqts91`, `vzzzjd`, `wkvecu`) sind gemergt oder überholt und können nach Markus' Ja gelöscht werden.

## 5. Vorschauen, Gutachten, Pläne (Artifacts)

| Was | Link |
|---|---|
| Prototyp (klickbar, alter Stand) | https://claude.ai/artifact/W8eDtUJmkNMPMvrzsW2pid |
| Vorschau-Seite Version 1–3 | https://claude.ai/artifact/Abbs6ozJXgtn4k23P1BvBA |
| Fachrichtungen Vorschlag | https://claude.ai/artifact/YX3XFDJRsZSRxNbjbsKmXa |
| Pro wie Lernlabor (Checkliste, Version 4) | https://claude.ai/artifact/QvoEN7N9aaDDSaWu5C3ASt |
| Thermodynamik in Chemie (Version 5) | https://claude.ai/artifact/1auQV3j89M37X1ZMEYbze5 |
| Plan drei neue Fachrichtungen (52 Punkte) | https://claude.ai/artifact/VGXMYaW8HeLATnwLTh73h1 |
| Neue Fachrichtungen (Version 6) | https://claude.ai/artifact/6H8Dx4gAcrobyNn4iBjXcT |
| Fachprüfung Durchlauf 1 (24 Befunde) | https://claude.ai/artifact/UdHxYkX4gaGb6k3pPZoNjz |
| Korrekturen (Version 7) | https://claude.ai/artifact/7rQ8VqDamGsQLY4atMJmsW |
| UI-Audit Version 7 | https://claude.ai/artifact/PjXPVHYJDkhuRDm6wDUX1X |
| Vergleich Pro / Lernlabor (Übernahme-Liste) | https://claude.ai/artifact/8XUEoTxcncATC939x7LPo4 |
| Version 8 | https://claude.ai/artifact/Axam2i7KbmJq4wFK2whuxa |
| Version 9 | https://claude.ai/artifact/3XVeA2m5z4u49msth2WPjR |
| App-Symbol (Auswahl, Variante 2 gewählt) | https://claude.ai/artifact/8Zi1qhAJAMDe4R8hV8pPSL |
| App-Symbol Einbau | https://claude.ai/artifact/7LyEqqzYh3ue62ozwURVgF |
| Version 11 | https://claude.ai/artifact/WBUrH6boTxVtjf6JK4FhEr |
| Animationen Metall (V12) | https://claude.ai/artifact/QSNsRKfyLrRTVjzUnqa8LN |
| Animationen Elektro (V13) | https://claude.ai/artifact/EErFr7gkJ3CoguGFLAvmR4 |
| Versionsanzeige (V14) | https://claude.ai/artifact/2oZZ5MxxsZG2FCNqFABKLf |
| Animationen Chemie (V15) | https://claude.ai/artifact/GoLvG8gWipv6r269JSSvth |
| Weiter-Knopf (V16) | https://claude.ai/artifact/48rRK2iN6w89Kd7C4p5ake |
| Animationen Kunststoff (V17) | https://claude.ai/artifact/XPfKnJMHXCBVotEGQLqDKz |
| Animationen Mechatronik/Logistik (V18) | https://claude.ai/artifact/WuvV6x26yuZJzUfZqhCJeU |
| Zahl, Einheit und Formel zusammen (V20) | https://claude.ai/artifact/7yxX4fCPcCCxmdHrLSpZZS |
| Tutorial wie im Lernlabor (V21) | https://claude.ai/artifact/EAWAmnFz3utG5sRuHR3qz1 |

## 6. Bezug zu den Schwester-Apps

- Lernlabor (NTG): https://bam01872.github.io/Lernlabor/, Repo bam01872/Lernlabor. Vorbild für Darstellung und Bedienung; bei neuen Lernlabor-Lösungen prüfen, ob Pro sie übernehmen soll.
- Meisterlabor (BQ: ReHa, BeHa, MIKP, ZiB): https://bam01872.github.io/Meisterlabor/, Repo bam01872/Meisterlabor. Pro baut auf dessen Gerüst Version 5 auf (Kopie in `werkzeug/basis/`).
- Kontakt-Mail für Impressum: baum.ma91@yahoo.de. Impressum/Datenschutz in der Fußzeile, von Markus freigegeben (14.11.).

## 7. Werkzeug im Repo und Dateien aus dem alten Projekt

Seit 15.11.2026 liegen zusätzlich im Repo:
- `werkzeug/symbol/`: Quelle des App-Symbols (`gen.py` erzeugt `v2-pro-schild.svg` und die maskierbare Fassung; daraus entstehen die PNG-Symbole).
- `werkzeug/pruefung/`: Prüfskripte aus dem UI-Audit (u. a. `scan.js` alle Themenseiten, `dup.js` Skizze gegen Regler, `wk.py`/`wk.js` Safari-Prüfung mit WebKitGTK, `lib.js` gemeinsame Helfer). Pfade darin sind teils noch auf alte Sitzungsordner gestellt; vor Gebrauch anpassen.
- `werkzeug/backup.py`: Sicherungsskript (Standard-Repo bam01872/Lernlabor-Pro). Aufruf: `BACKUP_ZIEL=/mnt/project-files/backup python3 werkzeug/backup.py`. Bisher gab es für Pro noch keine Sicherung: nach jedem Merge laufen lassen.

Nicht im Repo, nur im Projektordner von „Lernlabor v2“: Vorschaubilder und -seiten aller Versionen (über die Artifact-Links oben erreichbar) und eine alte Kopie von `werkzeug/`. Diese werden nicht gebraucht, das Repo ist die Quelle der Wahrheit.

## 8. Dozentenversion und Ablauf nach jedem Merge (seit Version 23)

- **Eine Quelle:** Die Dozentenversion ist die fertig gebaute `index.html` mit `const DOZENT=true;`. Alles nur für Dozenten hängt an `if(DOZENT)`. In der Dozentendatei hat `<html>` die Klasse `dz`.
- **Nie committen:** Im Repo steht immer `const DOZENT=false;` (`tests/check.js` prüft das und den Titel). Die Dozentendatei liegt nur unter `/mnt/project-files/dozent/lernlabor-pro_dozent.html`, nicht im Repo, nicht auf Pages, nicht als Artifact.
- **Bauen:** `python3 /mnt/project-files/dozent/build-dozent.py index.html /mnt/project-files/dozent/lernlabor-pro_dozent.html` (Kopie des Skripts in `werkzeug/build-dozent.py`). Titel wird „Dozent · Lernlabor Pro“, 3 Schriften werden eingebettet, die Datei läuft per Doppelklick.
- **Kursübersicht** (Ich → 👩‍🏫 Kursübersicht, Adresse `#dozent`): Bericht `typ:'lernlabor-pro-bericht'` mit `fr`/`frn` (Fachrichtung), Filter nach Kurs und Fachrichtung, Daten nur im Browser (`lernlabor-pro-dozent-v1`). „📧 Auswertung an mich mailen“ (`pro-dz.js`, seit Version 24): anonyme Auswertung des gefilterten Kurses als HTML-Datei plus Mail an die Impressum-Adresse, Teilnehmerzahl je Kurs unter `lernlabor-pro-doztn`. „🔗 Kurslink für Teilnehmer“ (seit Version 25): `#kurs/<Name>/<JJJJ-MM-TT~Thema,…>`, Name und Thema einzeln mit encodeURIComponent; `kursImport()` in `pro-ll.js` ersetzt frühere Kurslink-Tage, eigene Termine (`own`) bleiben, setzt den Kurs im Lernfortschritt. `pro-dz.js` wird vor `pro-ll.js` geladen; aus `pro-ll.js` stehen `llBase`, `llQr`, `llToast` global bereit.
- **Links:** `base()` in `pro-ll.js` entfernt `dozent….html` aus der Adresse; bei `file://` gilt https://bam01872.github.io/Lernlabor-Pro/.
- **Nach jedem Merge (fest):** 1. Dozentenversion aus der neuen main-`index.html` bauen und prüfen (DOZENT=true, Titel, `#dozent` ohne JS-Fehler). 2. Sicherung: `werkzeug/backup.py` nach `/mnt/project-files/backup/werkzeug/` kopieren, dann `BACKUP_REPO=bam01872/Lernlabor-Pro BACKUP_ZIEL=/mnt/project-files/backup python3 /mnt/project-files/backup/werkzeug/backup.py`. 3. Beides in der Fertig-Meldung nennen.
