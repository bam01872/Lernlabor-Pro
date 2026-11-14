# Lernlabor Pro

Lern- und Übungsplattform für die Handlungsspezifischen Qualifikationen der Industriemeister in sechs Fachrichtungen: Metall, Elektrotechnik, Chemie, Kunststoff & Kautschuk, Mechatronik und Logistik. Eigenständige Schwester von Lernlabor und Meisterlabor, Farbe Anthrazit und Orange.

Stand: Version 12 (14.11.2026): Metall mit elf bewegten Regler-Zeichnungen (Knopf zum Anhalten, Rücksicht auf „Bewegung reduzieren“). Version 11: Zahl und Einheit stehen immer zusammen, Wörter werden nur nach Wörterbuch getrennt, Texte stehen nicht über Ränder (sonst etwas kleinere Schrift). Version 10: neues App-Symbol. Version 9: Antworten bleiben gespeichert, Formelzeichen an den Reglern, Glossar und Formelsammlung, „Woran lag es?“, Schrittleiste folgt dem Lesen, Einheiten mit Bruchstrich, Knopfzeile in einer Zeile, Kacheln 2 × 2, Blocksatz in allen Textfeldern. Version 8: Bedienung wie im Lernlabor: Adresse je Ansicht (Zurück, Neuladen, Teilen, QR-Code), eine Zeichnung statt zwei, einzeilige Regler, Rechenaufgaben mit Rückfrage, Hinweis und Lösungsweg nach dem zweiten Versuch, Menüs Lernen / Üben & Prüfen / Ich, heller Standard. Version 7: Korrekturen aus der fachlichen Prüfung (Durchlauf 1) in allen sechs Fachrichtungen. Seit Version 6 gibt es die Fachrichtungen Kunststoff & Kautschuk, Mechatronik und Logistik. Seit Version 5 hat Chemie das Gebiet Thermodynamik (zehn Themen). Seit Version 4 ist die Bedienung an das Lernlabor angeglichen (Wischleisten, Regler mit Zahlenfeld, Nachschlagen, Einheiten mit Bruchstrich). Metall 39 Themen, Elektrotechnik 40, Chemie 51, Kunststoff & Kautschuk 42, Mechatronik 43, Logistik 42, dazu je fünf mehrstufige Aufgaben „Im Betrieb“. Alle Texte und Aufgaben sind eigene, keine Prüfungsoriginale. Der Lernstand bleibt lokal im Browser, es gibt keine Konten und keine Nutzungszählung.

## Aufbau

- `index.html`: die fertige App in einer Datei (gebaut, nicht von Hand ändern)
- `fonts/`, `manifest.webmanifest`, Symbole
- `werkzeug/`: Quellen und Bauwerkzeug
  - `build.py`: baut `index.html` aus dem Meisterlabor-Gerüst und den Pro-Dateien
  - `basis/meisterlabor-v5.html`: das Gerüst (Meisterlabor Version 5)
  - `pro-data.js`, `pro-pakete.js`, `pro-p3a.js` bis `pro-p3d.js`: Fächer, Themen, Check-Fragen, Rechenaufgaben, Situationsaufgaben, Fachgespräch
  - `pro-ml5.js`, `pro-x2.js`, `pro-x3.js`, `pro-x4.js`: Vermuten, Kurz erklärt, Skizzen, Regler mit Auftrag
  - `pro-fr.js`: Fachrichtungen (Umschalter, Gruppen, Prüfungsaufbau)
  - `pro-el1.js`, `pro-el2.js`, `pro-xe1.js`, `pro-xe2.js`: Elektrotechnik (Themen, Aufgaben, Erklärstrecken, Skizzen, Regler)
  - `pro-ch1.js`, `pro-ch2.js`, `pro-xc1.js`, `pro-xc2.js`: Chemie
  - `pro-thd.js`, `pro-xthd.js`: Chemie, Gebiet Thermodynamik (Themen, Aufgaben, Erklärstrecken, Skizzen, Regler)
  - `pro-ku1.js`, `pro-xku.js`: Kunststoff & Kautschuk
  - `pro-mt1.js`, `pro-xmt.js`: Mechatronik (dazu Regler, die auch Elektrotechnik nutzt)
  - `pro-lo1.js`, `pro-xlo.js`: Logistik
  - `pro-a2.js`, `pro-xa2.js`: Rüsten (SMED), Zusatzthemen der Organisation, Situationsaufgaben und Fachgespräch der drei neuen Fachrichtungen
  - `pro-ib.js`, `pro-ib2.js`: Aufgaben „Im Betrieb“ für alle Fachrichtungen
  - `pro-a1.js`, `pro-xa.js`: Zusatzthemen und Fachbeispiele in der Organisation, Situationsaufgaben, Fachgespräch
  - `pro-anim.js`: bewegte Regler-Zeichnungen, Paket Metall (Getriebe, Hydraulik, Instandhaltung, Zustandsüberwachung, Sauggreifer, Drehen, Fräsen, Scherschneiden, Verzinken, Montagelinie, Roboterzelle). `svg()` baut das Bild, `tick()` bewegt nur Attribute benannter Teile (`data-a`)
  - `pro.css`: Gestaltung
  - `pro-nb.js`: Version 11, Zahl und Einheit zusammenhalten, Texte und Beschriftungen in ihr Feld einpassen
  - `pro-l9.js`: Version 9, übrige Punkte aus dem UI-Audit (Antworten speichern, Formelzeichen, Reglerwerte behalten, Schrittleiste, Startseite, Lernstand, Glossar, Formelsammlung, Rückweg aus Im Betrieb)
  - `pro-ll.js`: Version 8, Bedienung wie im Lernlabor (Adressen, Teilen/QR, eine Zeichnung, Rechenaufgaben, Menüs, Darstellung, Skizzenschrift am Handy)
  - `qrcode.js`: QR-Code-Generator (qrcode-generator 1.4.4, MIT-Lizenz), aus dem Lernlabor übernommen

## Bauen

```
python3 werkzeug/build.py werkzeug/basis/meisterlabor-v5.html index.html
```

## Prüfen

```
node tests/check.js
```

Lädt die App in allen sechs Fachrichtungen und prüft jede Rechenaufgabe in 25 Zahlenvarianten: gültiges Ergebnis, kleine relative Toleranz (höchstens 5 %), falsche Eingaben (Hälfte, plus 10 %) werden abgelehnt. Braucht Playwright mit Chromium. Wichtig: `tol` ist immer relativ (0,01 = 1 % des Ergebnisses), nie ein absoluter Wert.

## Hinweis zum Rechtsstand

Die Themen zu Arbeitsschutz, Gefahrstoffen und Unfallmeldung sind nach bestem Wissen geschrieben (November 2026) und noch nicht gegen die aktuellen Gesetzestexte abgeglichen.

## Fachrichtungen

Die Fachrichtung wird auf der Startseite gewählt (oder per `?fr=me`, `?fr=el`, `?fr=ch`, `?fr=ku`, `?fr=mt`, `?fr=lo`). Der Lernstand wird je Fachrichtung getrennt im Browser gespeichert. Organisation sowie Führung und Personal sind gemeinsam, die Technik wechselt.

Chemie folgt dem Aufbau der Verordnung von 2004: Der technische Handlungsbereich heißt dort „Chemische Produktion“ (Verfahrens- und Anlagentechnik, Chemische Prozesse und Verfahren, Prozessleittechnik). Die Spezialisierungsgebiete sind noch nicht enthalten.

Normwerte (zum Beispiel Abschaltzeiten, Richtwerte für den Spannungsfall, Grenzwerte) sind Beispiel- und Richtwerte zum Üben. Maßgeblich sind die aktuellen Normen, Tabellenbücher und die Angaben der IHK.
