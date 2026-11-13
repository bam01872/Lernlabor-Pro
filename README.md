# Lernlabor Pro

Lern- und Übungsplattform für die Handlungsspezifischen Qualifikationen der Industriemeister Metall (Technik, Organisation, Führung und Personal). Eigenständige Schwester von Lernlabor und Meisterlabor, Farbe Anthrazit und Orange.

Stand: Version 2 (13.11.2026), alle 38 Themen ausgebaut. Alle Texte und Aufgaben sind eigene, keine Prüfungsoriginale. Der Lernstand bleibt lokal im Browser, es gibt keine Konten und keine Nutzungszählung.

## Aufbau

- `index.html`: die fertige App in einer Datei (gebaut, nicht von Hand ändern)
- `fonts/`, `manifest.webmanifest`, Symbole
- `werkzeug/`: Quellen und Bauwerkzeug
  - `build.py`: baut `index.html` aus dem Meisterlabor-Gerüst und den Pro-Dateien
  - `basis/meisterlabor-v5.html`: das Gerüst (Meisterlabor Version 5)
  - `pro-data.js`, `pro-pakete.js`, `pro-p3a.js` bis `pro-p3d.js`: Fächer, Themen, Check-Fragen, Rechenaufgaben, Situationsaufgaben, Fachgespräch
  - `pro-ml5.js`, `pro-x2.js`, `pro-x3.js`, `pro-x4.js`: Vermuten, Kurz erklärt, Skizzen, Regler mit Auftrag
  - `pro.css`: Gestaltung

## Bauen

```
python3 werkzeug/build.py werkzeug/basis/meisterlabor-v5.html index.html
```

## Hinweis zum Rechtsstand

Die Themen zu Arbeitsschutz, Gefahrstoffen und Unfallmeldung sind nach bestem Wissen geschrieben (November 2026) und noch nicht gegen die aktuellen Gesetzestexte abgeglichen.
