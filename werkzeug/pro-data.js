/* ===== Lernlabor Pro: Daten (Handlungsspezifische Qualifikationen, Fachrichtung Metall) =====
   Eigene Texte und Aufgaben. Keine IHK-Originale, keine Texte fremder Seiten.
   Bruchschreibweise in Texten: [[Zähler||Nenner]] wird als echter Bruchstrich gezeigt. */
['reha','beha','mikp','zib'].forEach(k=>delete D[k]);
C.length=0;CASES.length=0;ORAL.length=0;
/* Zahlen: Komma, Tausender-Leerzeichen nur bei runden Zahlen ab 10 000 und ab sechs Stellen */
const nz=(v,d)=>{let s=Number(v).toFixed(d),[i,f]=s.split('.'),ng=i[0]==='-';if(ng)i=i.slice(1);
 if(i.length>=6||(i.length===5&&/000$/.test(i)))i=i.replace(/\B(?=(\d{3})+(?!\d))/g,' ');return (ng?'−':'')+i+(f?','+f:'')};
const nt=(v,d=3)=>nz(v,d).replace(/,?0+$/,'');
const W=(t,intro,plan,pk)=>({t,intro,pts:['Geplante Inhalte: '+plan],mcq:[],wip:pk});

D.tec={name:'Technik',kurz:'Technik',icon:'⚙',col:'#2f6fd0',modules:[
W('Instandhaltung & Wartung','Wie Du Anlagen verfügbar hältst: Wartung, Inspektion, Instandsetzung und Verbesserung, dazu die passende Strategie für jede Maschine.','Grundmaßnahmen der Instandhaltung, Strategien (ausfallbedingt, vorbeugend, zustandsorientiert, vorausschauend), Verfügbarkeit und MTBF, Instandhaltungsplan, Ersatzteilhaltung.','T1'),
W('Zustandsüberwachung & Schadensanalyse','Schäden erkennen, bevor die Maschine steht: Messgrößen, Messverfahren und die Frage, warum ein Bauteil versagt hat.','Schwingungsmessung, Thermografie, Ölanalyse, Verschleißbilder an Lagern, Zahnrädern und Wellen, Schadensanalyse in Schritten.','T1'),
{t:'Hydraulik: Zylinder & Pumpe',intro:'Hydraulik bewegt große Lasten mit kleinen Bauteilen. In der Technikaufgabe rechnest Du Kolbenkräfte, Geschwindigkeiten und Pumpenleistungen und wählst passende Bauteile aus.',
pts:['Der Druck wirkt auf die Kolbenfläche: F = p · A. Umrechnung: 1 bar = 10 N/cm² = 100 000 Pa.',
'Kolbenfläche: A = [[π · D²||4]]. Rechne D in cm, dann kommt A in cm² heraus.',
'Beim Einfahren wirkt nur die Ringfläche: A_R = [[π · (D² − d²)||4]] mit d als Kolbenstangendurchmesser. Die Einfahrkraft ist kleiner, die Einfahrgeschwindigkeit größer.',
'Geschwindigkeit: v = [[Q||A]]. Mit Q in cm³/min und A in cm² erhältst Du v in cm/min. 1 l/min = 1000 cm³/min.',
'Hydraulische Leistung: P = p · Q. Die Pumpe braucht mehr: P_zu = [[p · Q||η]].',
'Es gilt auch P = F · v. Mehr Kraft und mehr Tempo zugleich gibt es nur mit mehr Leistung, egal welchen Zylinder Du wählst.',
'Wichtige Bauteile: Pumpe, Druckbegrenzungsventil (schützt die Anlage), Wegeventil (z. B. 4/3), Rückschlagventil, Drosselrückschlagventil (stellt die Geschwindigkeit ein), Filter, Druckspeicher.'],
mcq:[['Du verdoppelst den Kolbendurchmesser bei gleichem Druck. Wie ändert sich die Kolbenkraft?','Sie wird viermal so groß','Sie verdoppelt sich','Sie bleibt gleich','Sie halbiert sich','Die Fläche wächst mit D², also mit dem Faktor 4.'],
['Welches Ventil begrenzt den Systemdruck und schützt die Anlage?','Druckbegrenzungsventil','Rückschlagventil','4/3-Wegeventil','Drosselventil','Es öffnet beim eingestellten Druck und leitet das Öl zum Tank.'],
['Warum fährt ein Differentialzylinder bei gleichem Volumenstrom schneller ein als aus?','Die Ringfläche ist kleiner als die Kolbenfläche','Der Druck ist beim Einfahren höher','Die Pumpe läuft beim Einfahren schneller','Die Kolbenstange ist leichter','v = Q ÷ A: kleinere Fläche, größere Geschwindigkeit.'],
['Womit stellst Du die Ausfahrgeschwindigkeit eines Zylinders ein?','Drosselrückschlagventil','Druckbegrenzungsventil','Manometer','Filter','Die Drossel begrenzt den Volumenstrom in einer Richtung.']]},
W('Pneumatik & Vakuumtechnik','Druckluft für schnelle, leichte Bewegungen und Sauggreifer für flache Teile: Kräfte, Luftverbrauch und Energiekosten.','Zylinderkraft mit Wirkungsgrad, Luftverbrauch, Leckagekosten, Wartungseinheit, Saugkraft von Sauggreifern mit Sicherheitsfaktor, Schaltpläne lesen.','T2'),
W('Antriebe & Getriebe','Motor, Getriebe und Kupplung passend auswählen: Drehzahl, Drehmoment und Leistung durch den Antriebsstrang rechnen.','Übersetzung, Drehmoment und Leistung, Wirkungsgrad mehrstufiger Getriebe, Riemen- und Kettentriebe, Frequenzumrichter, Auswahl eines Antriebs.','T2'),
{t:'Zerspanung: Drehen',intro:'Beim Drehen bestimmen Schnittgeschwindigkeit, Vorschub und Schnitttiefe, wie viel Kraft und Leistung die Maschine braucht und wie lange ein Teil läuft. Diese Rechnungen kommen in der Technikaufgabe immer wieder vor.',
pts:['Drehzahl aus der Schnittgeschwindigkeit: n = [[v_c · 1000||π · d]] mit v_c in m/min, d in mm und n in 1/min.',
'Spanungsquerschnitt: A = a_p · f (Schnitttiefe a_p in mm, Vorschub f in mm je Umdrehung).',
'Schnittkraft: F_c = A · k_c. Die spezifische Schnittkraft k_c in N/mm² steht im Tabellenbuch. Sie hängt vom Werkstoff und von der Spanungsdicke ab.',
'Schnittleistung: P_c = F_c · v_c. Rechne v_c vorher von m/min in m/s um, also durch 60 teilen.',
'Antriebsleistung: P_zu = [[P_c||η]]. Sie muss unter der Motorleistung der Maschine bleiben.',
'Hauptnutzungszeit: t_h = [[L · i||n · f]] mit L als Vorschubweg in mm (mit An- und Überlauf) und i als Zahl der Schnitte.',
'Schreib in jeder Zeile die Einheit mit. Der Faktor 60 zwischen Minute und Sekunde ist der häufigste Fehler.'],
mcq:[['Du verdoppelst den Vorschub, sonst bleibt alles gleich. Wie ändert sich die Schnittleistung (vereinfacht mit gleichem k_c)?','Sie verdoppelt sich','Sie vervierfacht sich','Sie bleibt gleich','Sie halbiert sich','A = a_p · f verdoppelt sich, damit auch F_c und P_c.'],
['Welche Einheit hat die spezifische Schnittkraft k_c?','N/mm²','N/mm','kW','m/min','Kraft je Fläche des Spanungsquerschnitts.'],
['Du drehst einen größeren Durchmesser mit gleicher Schnittgeschwindigkeit. Was passiert mit der Drehzahl?','Sie wird kleiner','Sie wird größer','Sie bleibt gleich','Sie hängt nur vom Vorschub ab','Großes d im Nenner: kleinere Drehzahl.'],
['Wovon hängt die Hauptnutzungszeit eines Schnitts beim Längsdrehen NICHT ab?','Von der Schnitttiefe a_p','Vom Vorschub f','Von der Drehzahl n','Vom Vorschubweg L','a_p steckt nur indirekt in der Zahl der Schnitte i.']]},
W('Zerspanung: Fräsen & Schleifen','Vorschubgeschwindigkeit, Zahnvorschub und Zeitspanvolumen beim Fräsen, dazu Grundlagen des Schleifens.','Vorschubgeschwindigkeit v_f = f_z · z · n, Hauptnutzungszeit Fräsen, Schnittleistung, Zeitspanvolumen, Schleifscheiben und Umfangsgeschwindigkeit.','T1'),
W('Werkstoffe & Wärmebehandlung','Den passenden Stahl wählen und begründen, Härteverfahren unterscheiden und Wärmebehandlungen festlegen.','Stahlbezeichnungen, Eisen-Kohlenstoff-Diagramm vereinfacht, Härten, Anlassen, Vergüten, Einsatzhärten, Nitrieren, Glühverfahren, Werkstoffprüfung (Härte, Zugversuch).','T3'),
W('Umformen, Trennen & additive Fertigung','Biegen, Tiefziehen, Scherschneiden, Laserschneiden und 3D-Druck: Wann lohnt welches Verfahren?','Biegeradius und Rückfederung, Schneidkraft beim Scherschneiden, thermisches Trennen, additive Verfahren und ihre Grenzen.','T3'),
W('Oberflächen & Korrosionsschutz','Beschichten, Verzinken, Brünieren: Welche Oberfläche passt zum Einsatz und zur Umgebung?','Korrosionsarten, Beschichtungsverfahren, Schichtdicke und Kosten, Vorbehandlung, Umweltauflagen.','T3'),
W('Montageplanung & Fügen','Montage in der richtigen Reihenfolge planen und das passende Fügeverfahren wählen.','Montagearten, Vorranggraph, Montageplan, Schraubenverbindungen und Anziehverfahren, Schweißen, Kleben, Pressverbände, Taktzeit.','T4'),
W('Inbetriebnahme & Abnahme','Eine Maschine sicher in Betrieb nehmen, prüfen und an die Fertigung übergeben.','Ablauf der Inbetriebnahme, Prüfungen vor der ersten Verwendung, Abnahmeprotokoll und Mängelliste, CE-Kennzeichnung und neue EU-Maschinenverordnung, Übergabe und Unterweisung.','T4'),
W('FMEA: Risiken bewerten','Fehler vorhersehen, bevor sie passieren: Bedeutung, Auftreten und Entdeckung bewerten und Maßnahmen ableiten.','Ablauf einer FMEA, Risikoprioritätszahl und Aufgabenpriorität, Maßnahmen und Neubewertung, Beispiele aus Fertigung und Montage.','T4'),
W('Automatisierung & Robotik','Roboterzellen und automatisierte Linien planen, sichern und wirtschaftlich bewerten.','Aufbau einer Roboterzelle, Schutzeinrichtungen, kollaborierende Roboter, Taktzeit und Ausbringung, Energieeffizienz.','T4')]};

D.org={name:'Organisation',kurz:'Organisation',icon:'📋',col:'#c27a12',modules:[
{t:'Maschinenstundensatz',intro:'Der Maschinenstundensatz verteilt alle Kosten einer Maschine auf ihre Laufstunden. Mit ihm kalkulierst Du Aufträge und prüfst, ob sich eine Maschine rechnet.',
pts:['Maschinenabhängige Kosten pro Jahr: kalkulatorische Abschreibung, kalkulatorische Zinsen, Raumkosten, Energiekosten, Instandhaltung, bei Bedarf Werkzeugkosten.',
'Kalkulatorische Abschreibung = [[Wiederbeschaffungswert||Nutzungsdauer]] in €/Jahr. Ist kein Wiederbeschaffungswert genannt, nimm den Anschaffungswert.',
'Kalkulatorische Zinsen = [[Anschaffungswert||2]] · Zinssatz. Im Mittel ist nur die Hälfte des Kapitals gebunden.',
'Raumkosten = Fläche · Mietsatz, z. B. 25 m² · 12 €/(m² · Monat) · 12 Monate.',
'Energiekosten = Leistung · Auslastung · Laufzeit · Strompreis. Sie fallen nur an, wenn die Maschine läuft.',
'Maschinenstundensatz = [[maschinenabhängige Kosten pro Jahr||Laufzeit pro Jahr]] in €/h.',
'Fixe Kosten verteilen sich auf die Laufzeit. Läuft die Maschine weniger, steigt der Stundensatz stark.'],
mcq:[['Die Laufzeit einer Maschine sinkt von 1600 h auf 800 h im Jahr. Was passiert mit dem Maschinenstundensatz?','Er steigt deutlich, knapp auf das Doppelte','Er halbiert sich','Er bleibt gleich','Er steigt genau auf das Doppelte','Die fixen Kosten verteilen sich auf weniger Stunden. Nur die Energiekosten je Stunde bleiben gleich.'],
['Warum rechnest Du die kalkulatorischen Zinsen mit dem halben Anschaffungswert?','Durch die Abschreibung ist im Durchschnitt nur die Hälfte des Kapitals gebunden','Weil Banken nur die Hälfte finanzieren','Weil die Hälfte Umsatzsteuer ist','Weil Zinsen nur im ersten Jahr anfallen','Das gebundene Kapital sinkt von 100 % auf 0 %, im Mittel also 50 %.'],
['Welche Kostenart hängt direkt von der Laufzeit ab?','Energiekosten','Raumkosten','Kalkulatorische Zinsen','Kalkulatorische Abschreibung (linear nach Zeit)','Strom wird nur verbraucht, wenn die Maschine läuft.']]},
W('Zuschlagskalkulation & BAB','Vom Betriebsabrechnungsbogen zum Angebotspreis, mit Maschinenstundensatz in der Fertigung.','Zuschlagssätze aus dem BAB, Kalkulationsschema, Maschinen- und Restfertigungsgemeinkosten, Vor- und Nachkalkulation.','O1'),
{t:'Kostenvergleich & kritische Menge',intro:'Zwei Verfahren, zwei Maschinen oder selbst fertigen gegen fremd vergeben: Die Kostenvergleichsrechnung zeigt, ab welcher Menge sich welche Lösung lohnt. In der Prüfung folgt auf die Rechnung immer eine begründete Entscheidung.',
pts:['Gesamtkosten je Verfahren: K = K_f + k_v · x, also fixe Kosten pro Jahr plus variable Stückkosten mal Menge.',
'Kritische Menge: Dort sind beide Verfahren gleich teuer, K_f1 + k_v1 · x = K_f2 + k_v2 · x.',
'Umgestellt: x_krit = [[K_f2 − K_f1||k_v1 − k_v2]].',
'Unter der kritischen Menge ist das Verfahren mit den kleineren Fixkosten günstiger, darüber das mit den kleineren variablen Kosten.',
'Selbst fertigen oder fremd vergeben: Beim Fremdbezug gibt es meist keine eigenen Fixkosten, dafür einen höheren Preis je Stück.',
'Zur Entscheidung gehören auch Punkte ohne Zahl: Qualität, Termintreue, Auslastung, Know-how und Abhängigkeit vom Lieferanten.'],
mcq:[['Verfahren A: 12 000 € fix, 8 €/Stück. Verfahren B: 30 000 € fix, 5 €/Stück. Bei welcher Menge sind beide gleich teuer?','6000 Stück','3600 Stück','2250 Stück','14 000 Stück','x = (30 000 € − 12 000 €) ÷ (8 €/Stück − 5 €/Stück) = 6000 Stück.'],
['Die geplante Menge liegt über der kritischen Menge. Welches Verfahren ist günstiger?','Das mit den niedrigeren variablen Stückkosten','Das mit den niedrigeren Fixkosten','Beide sind gleich teuer','Das mit der höheren Abschreibung','Rechts vom Schnittpunkt wirken die kleineren variablen Kosten stärker.'],
['Welcher Punkt gehört nicht zur Rechnung, aber zur Entscheidung?','Lieferzuverlässigkeit des Lohnfertigers','Variable Stückkosten','Fixkosten pro Jahr','Geplante Menge','Qualitative Gründe ergänzen die Rechnung.']]},
W('Amortisation & Rentabilität','Lohnt sich die Investition? Amortisationszeit und Rentabilität rechnen und bewerten.','Statische Amortisationsrechnung, Rentabilität einer Investition, Gewinnvergleich, Grenzen statischer Verfahren.','O1'),
W('Deckungsbeitrag & Gewinnschwelle','Welcher Auftrag bringt Geld, welcher nur Umsatz? Deckungsbeitrag, Break-even und Zusatzaufträge.','Deckungsbeitrag je Stück und gesamt, Gewinnschwelle, Preisuntergrenze, Zusatzauftrag bei freier Kapazität, Engpassrechnung.','O1'),
W('Plankosten & Abweichungen','Soll und Ist vergleichen: Was ist teurer geworden, und warum?','Plankosten, Sollkosten, Istkosten, Verbrauchs- und Beschäftigungsabweichung, Maßnahmen ableiten.','O1'),
W('Kapazitäts- und Terminplanung','Aufträge auf Maschinen und Personal verteilen und Termine sicher planen.','Kapazitätsbedarf und Auslastung, Durchlaufzeit, Netzplan und kritischer Weg, Balkendiagramm, Engpässe auflösen.','O2'),
W('Reihenfolgeplanung','Welcher Auftrag zuerst? Prioritätsregeln und ihre Wirkung auf Termine und Rüstzeiten.','Prioritätsregeln (z. B. kürzeste Bearbeitungszeit, frühester Liefertermin), Rüstfolgen, Auswirkungen vergleichen.','O2'),
W('Material: ABC, XYZ, Bestellmenge, Kanban','Material in der richtigen Menge zur richtigen Zeit: Analysen und Steuerung im Materialfluss.','ABC- und XYZ-Analyse, Meldebestand, optimale Bestellmenge, Kanban, Just-in-Time und Just-in-Sequence, MRP.','O2'),
W('Zeitwirtschaft: Auftragszeit & Zeitgrad','Vorgabezeiten bilden und Leistung bewerten.','Auftragszeit aus Rüst- und Ausführungszeit, Grund-, Erhol- und Verteilzeiten, Zeitgrad, Leistungsgrad, Multimomentaufnahme.','O2'),
W('Gefährdungsbeurteilung & Unterweisung','Gefährdungen systematisch erkennen, Maßnahmen festlegen und Mitarbeiter wirksam unterweisen.','Ablauf der Gefährdungsbeurteilung, Rangfolge der Maßnahmen, Betriebsanweisung, Unterweisung und Dokumentation, Verantwortung des Meisters.','O3'),
W('Gefahrstoffe & Lagerung','Kühlschmierstoffe, Öle, Reiniger: Gefahrstoffe kennzeichnen, lagern und ersetzen.','Gefahrstoffverzeichnis, Kennzeichnung, Sicherheitsdatenblatt, Zusammenlagerung, Ersatzstoffprüfung, Schutzmaßnahmen.','O3'),
W('Nach einem Unfall richtig handeln','Erste Hilfe, Meldung, Untersuchung und Maßnahmen gegen Wiederholung.','Rettungskette, Unfallanzeige, Unfalluntersuchung, Maßnahmen, Gespräch mit dem Team.','O3'),
W('Umwelt- und Energiemanagement','Abfälle, Emissionen und Energieverbrauch im Betrieb senken und nachweisen.','Abfalltrennung und Entsorgung, Energiekennzahlen, Druckluftleckagen, Umweltmanagementsystem.','O3')]};

D.fp={name:'Führung & Personal',kurz:'Führung',icon:'🤝',col:'#c2457b',modules:[
{t:'Mitarbeitergespräche führen',intro:'Als Meister führst Du viele Gespräche: Anerkennung, Kritik, Zielvereinbarung, Rückkehr nach Krankheit. Im Fachgespräch zählt, dass Du ein Gespräch zur Situation planen und begründen kannst.',
pts:['Vorbereiten: Anlass und Ziel klären, Fakten und Beispiele sammeln, Ort und Zeit ohne Störung wählen.',
'Einstieg: begrüßen, den Anlass offen nennen, eine ruhige Atmosphäre schaffen.',
'Sachverhalt: konkretes Verhalten beschreiben, nicht die Person bewerten. Ich-Botschaften statt Vorwürfe.',
'Sicht des Mitarbeiters: zuhören, offene Fragen stellen, Gründe verstehen.',
'Lösung: gemeinsam Maßnahmen vereinbaren, Unterstützung anbieten, das Ziel überprüfbar machen.',
'Abschluss: Ergebnis zusammenfassen, Folgetermin festlegen, wertschätzend beenden und kurz dokumentieren.',
'Gesprächsarten: Anerkennung, Kritik, Zielvereinbarung, Beurteilung, Rückkehr nach Krankheit, Konflikt.',
'Kritik immer unter vier Augen. Anerkennung darf auch vor dem Team stattfinden.'],
mcq:[['Ein Mitarbeiter macht seit zwei Wochen mehr Fehler. Womit beginnst Du das Gespräch am besten?','Anlass offen nennen und konkrete Beobachtungen schildern','Mit einer Abmahnung drohen','Gleich die Lösung vorgeben','Erst lange über andere Themen reden und das Problem am Ende kurz ansprechen','Klarer Einstieg mit Fakten, danach die Sicht des Mitarbeiters hören.'],
['Welche Aussage ist eine Ich-Botschaft?','„Ich habe bemerkt, dass drei Prüfprotokolle fehlen.“','„Du bist immer schlampig.“','„Man macht das so nicht.“','„Alle beschweren sich über Dich.“','Ich-Botschaften beschreiben die eigene Wahrnehmung, ohne die Person abzuwerten.'],
['Was gehört an das Ende eines Kritikgesprächs?','Vereinbarung zusammenfassen und Folgetermin festlegen','Noch einmal alle Fehler aufzählen','Ohne Ergebnis auseinandergehen','Den Mitarbeiter vor dem Team loben','Das Ergebnis muss verbindlich sein und nachgehalten werden.'],
['Wo führst Du ein Kritikgespräch?','Unter vier Augen in einem ruhigen Raum','In der Teambesprechung','Direkt an der Maschine vor Kollegen','Per E-Mail','Kritik vor anderen beschämt und verhärtet die Fronten.']]},
W('Delegation & Führungsstil','Aufgaben sinnvoll übertragen und den Führungsstil an Mitarbeiter und Lage anpassen.','Delegation mit Aufgabe, Kompetenz und Verantwortung, situatives Führen nach Reifegrad, Führen mit Zielen, typische Fehler.','F1'),
W('Konflikte im Team','Konflikte früh erkennen, Gespräche moderieren und tragfähige Lösungen vereinbaren.','Konfliktarten und Eskalation, Konfliktgespräch in Schritten, Vermittlung, Regeln im Team.','F1'),
W('Motivation & Anerkennung','Was Mitarbeiter antreibt und was Du als Meister beeinflussen kannst.','Motivationstheorien kurz, Anerkennung und Rückmeldung, Beteiligung, Arbeitsgestaltung, Umgang mit Belastung.','F1'),
W('Personalbedarf ermitteln','Wie viele Mitarbeiter mit welcher Qualifikation brauchst Du für das Programm?','Brutto- und Nettopersonalbedarf, Fehlzeiten, Schichtmodelle, Einsatzplanung, Rechenbeispiele.','F2'),
W('Qualifizierung & Schulungsplan','Qualifikationslücken erkennen und Schulungen planen, durchführen und bewerten.','Qualifikationsmatrix, Soll-Ist-Vergleich, Schulungsplan, Lernerfolg prüfen, Kosten und Nutzen.','F2'),
W('Einarbeitung & Unterweisung','Neue Mitarbeiter schnell und sicher in die Arbeit bringen.','Einarbeitungsplan, Pate, Vier-Stufen-Methode, Unterweisung und Dokumentation, Probezeitgespräch.','F2'),
W('QM-System & Audit','Wie ein Qualitätsmanagementsystem im Betrieb funktioniert und was bei einem Audit geprüft wird.','Prozessorientierung, Normanforderungen im Überblick, Dokumentation, interne und externe Audits, Kennzahlen.','F3'),
W('Qualitätswerkzeuge & KVP','Probleme mit System lösen und Verbesserungen dauerhaft verankern.','Pareto, Ishikawa, 5 Why, PDCA, 8D-Report, Kennzahlen, kontinuierlicher Verbesserungsprozess.','F3'),
W('Prüfen, Messen & Fehleranalyse','Prüfplanung, Messmittel und Fähigkeit von Maschinen und Prozessen.','Prüfplan, Messmittelüberwachung, Stichprobe, Regelkarte, Maschinen- und Prozessfähigkeit, Fehleranalyse.','F3')]};

/* ---------- Rechenaufgaben (Zufallswerte, Einheiten in jedem Schritt) ---------- */
C.push({f:'tec',m:5,name:'Drehzahl beim Drehen',gen:r=>{const d=r.p([30,40,50,60,80,100,120,160]),vc=r.step(120,280,20),n=vc*1000/(Math.PI*d);
 return{q:'Ein Wellenabsatz mit d = '+d+' mm wird mit einer Schnittgeschwindigkeit von '+vc+' m/min gedreht. Welche Drehzahl stellst Du ein?',a:n,u:'1/min',d:0,tol:0.003,
 sol:['n = [[v_c · 1000||π · d]]','n = [['+vc+' m/min · 1000 mm/m||π · '+d+' mm]]','n = '+nz(n,0)+' 1/min']}}});
C.push({f:'tec',m:5,name:'Antriebsleistung beim Drehen',gen:r=>{const ap=r.p([1.5,2,2.5,3,4]),f=r.p([0.15,0.2,0.25,0.3,0.4]),kc=r.p([1800,2000,2200,2400]),vc=r.step(120,240,30),eta=r.p([0.75,0.8,0.85]);
 const A=ap*f,Fc=A*kc,v=vc/60,Pc=Fc*v,Pz=Pc/eta/1000;
 return{q:'Schruppen auf der Drehmaschine: a_p = '+nt(ap)+' mm, f = '+nt(f)+' mm, k_c = '+nz(kc,0)+' N/mm², v_c = '+vc+' m/min, Wirkungsgrad der Maschine η = '+nt(eta)+'. Welche Antriebsleistung braucht die Maschine?',a:Pz,u:'kW',d:2,tol:0.005,
 sol:['A = a_p · f = '+nt(ap)+' mm · '+nt(f)+' mm = '+nt(A)+' mm²','F_c = A · k_c = '+nt(A)+' mm² · '+nz(kc,0)+' N/mm² = '+nz(Fc,0)+' N','v_c = [['+vc+' m/min||60 s/min]] = '+nz(v,2)+' m/s',
  'P_c = F_c · v_c = '+nz(Fc,0)+' N · '+nz(v,2)+' m/s = '+nz(Pc,0)+' W = '+nz(Pc/1000,2)+' kW','P_zu = [[P_c||η]] = [['+nz(Pc/1000,2)+' kW||'+nt(eta)+']] = '+nz(Pz,2)+' kW']}}});
C.push({f:'tec',m:5,name:'Hauptnutzungszeit beim Längsdrehen',gen:r=>{const l=r.step(60,240,20),la=2,i=r.i(1,3),n=r.step(500,1600,50),f=r.p([0.15,0.2,0.25,0.3]),L=l+2*la,t=L*i/(n*f);
 return{q:'Ein Absatz wird auf einer Länge von '+l+' mm längsgedreht. Anlauf und Überlauf je 2 mm, '+i+' Schnitt'+(i>1?'e':'')+', n = '+n+' 1/min, f = '+nt(f)+' mm. Wie groß ist die Hauptnutzungszeit?',a:t,u:'min',d:2,tol:0.005,
 sol:['L = l + l_a + l_ü = '+l+' mm + 2 mm + 2 mm = '+L+' mm','t_h = [[L · i||n · f]]','t_h = [['+L+' mm · '+i+'||'+n+' 1/min · '+nt(f)+' mm]] = '+nz(t,2)+' min']}}});
C.push({f:'tec',m:2,name:'Kolbenkraft beim Ausfahren',gen:r=>{const D=r.p([40,50,63,80,100,125]),p=r.step(60,200,10),eta=r.p([0.85,0.9,0.95]),A=Math.PI*(D/10)**2/4,F=p*10*A*eta/1000;
 return{q:'Ein Hydraulikzylinder mit D = '+D+' mm fährt mit '+p+' bar aus. Wirkungsgrad des Zylinders η = '+nt(eta)+'. Welche Kraft gibt die Kolbenstange ab?',a:F,u:'kN',d:1,tol:0.005,
 sol:['A = [[π · D²||4]] = [[π · ('+nt(D/10,1)+' cm)²||4]] = '+nz(A,2)+' cm²','p = '+p+' bar = '+nz(p*10,0)+' N/cm²','F = p · A · η = '+nz(p*10,0)+' N/cm² · '+nz(A,2)+' cm² · '+nt(eta)+' = '+nz(F*1000,0)+' N = '+nz(F,1)+' kN']}}});
C.push({f:'tec',m:2,name:'Ausfahrgeschwindigkeit',gen:r=>{const D=r.p([40,50,63,80,100]),Q=r.step(6,40,2),A=Math.PI*(D/10)**2/4,v=Q*1000/A/100;
 return{q:'Eine Pumpe fördert '+Q+' l/min in einen Zylinder mit D = '+D+' mm. Mit welcher Geschwindigkeit fährt der Kolben aus (Verluste vernachlässigen)?',a:v,u:'m/min',d:2,tol:0.005,
 sol:['A = [[π · D²||4]] = [[π · ('+nt(D/10,1)+' cm)²||4]] = '+nz(A,2)+' cm²','Q = '+Q+' l/min = '+nz(Q*1000,0)+' cm³/min','v = [[Q||A]] = [['+nz(Q*1000,0)+' cm³/min||'+nz(A,2)+' cm²]] = '+nz(Q*1000/A,1)+' cm/min','v = '+nz(Q*1000/A,1)+' cm/min = '+nz(v,2)+' m/min']}}});
C.push({f:'tec',m:2,name:'Antriebsleistung der Pumpe',gen:r=>{const p=r.step(80,250,10),Q=r.step(10,60,5),eta=r.p([0.8,0.85,0.9]),Qs=Q/60000,Ph=p*1e5*Qs,P=Ph/eta/1000;
 return{q:'Eine Hydraulikpumpe fördert '+Q+' l/min bei '+p+' bar. Gesamtwirkungsgrad η = '+nt(eta)+'. Welche Antriebsleistung braucht der Motor?',a:P,u:'kW',d:2,tol:0.005,
 sol:['p = '+p+' bar = '+nz(p*1e5,0)+' N/m²','Q = '+Q+' l/min = [['+Q+' l||60 s]] = '+nz(Qs*1000,3)+' l/s = '+nz(Qs*1000,3)+' · 10⁻³ m³/s','P_hydr = p · Q = '+nz(p*1e5,0)+' N/m² · '+nz(Qs*1000,3)+' · 10⁻³ m³/s = '+nz(Ph,0)+' W','P_zu = [[P_hydr||η]] = [['+nz(Ph,0)+' W||'+nt(eta)+']] = '+nz(P*1000,0)+' W = '+nz(P,2)+' kW']}}});
C.push({f:'org',m:0,name:'Maschinenstundensatz',gen:r=>{const AW=r.step(120,360,20)*1000,n=r.p([6,8,10]),i=r.p([5,6,7]),qm=r.step(15,40,5),mi=r.p([8,10,12]),kw=r.p([11,15,18,22]),au=r.p([0.6,0.7,0.8]),pr=r.p([0.22,0.25,0.28]),ih=r.step(3,9,1)*1000,L=r.p([1400,1600,1800,2000]);
 const ab=AW/n,zi=AW/2*i/100,ra=qm*mi*12,en=kw*au*L*pr,s=ab+zi+ra+en+ih,m=s/L;
 return{q:'Ein Bearbeitungszentrum kostet '+nz(AW,0)+' € (Nutzungsdauer '+n+' Jahre, linear). Kalkulatorischer Zins '+i+' %. Platzbedarf '+qm+' m² zu '+mi+' €/(m² · Monat). Anschlussleistung '+kw+' kW, mittlere Auslastung '+nz(au*100,0)+' %, Strompreis '+nz(pr,2)+' €/kWh. Instandhaltung '+nz(ih,0)+' € pro Jahr. Laufzeit '+L+' h pro Jahr. Wie hoch ist der Maschinenstundensatz?',a:m,u:'€/h',d:2,tol:0.004,
 sol:['Abschreibung = [['+nz(AW,0)+' €||'+n+' Jahre]] = '+nz(ab,2)+' €/Jahr','Zinsen = [['+nz(AW,0)+' €||2]] · '+i+' % = '+nz(zi,2)+' €/Jahr','Raumkosten = '+qm+' m² · '+mi+' €/(m² · Monat) · 12 Monate/Jahr = '+nz(ra,2)+' €/Jahr',
  'Energie = '+kw+' kW · '+nz(au,1)+' · '+L+' h/Jahr · '+nz(pr,2)+' €/kWh = '+nz(en,2)+' €/Jahr','Instandhaltung = '+nz(ih,2)+' €/Jahr','Summe = '+nz(s,2)+' €/Jahr','Maschinenstundensatz = [['+nz(s,2)+' €/Jahr||'+L+' h/Jahr]] = '+nz(m,2)+' €/h']}}});
C.push({f:'org',m:0,name:'Laufzeit für einen Ziel-Stundensatz',gen:r=>{const F=r.step(30,70,2)*1000,e=r.p([2.4,2.8,3.2,3.6]),S=r.step(30,60,2),L=F/(S-e);
 return{q:'Die fixen Maschinenkosten betragen '+nz(F,0)+' € pro Jahr, die Energiekosten '+nz(e,2)+' € je Laufstunde. Der Vertrieb kann höchstens '+nz(S,2)+' €/h Maschinenkosten am Markt durchsetzen. Wie viele Stunden muss die Maschine pro Jahr mindestens laufen?',a:Math.ceil(L),u:'h',d:0,tol:0.002,
 sol:['Maschinenstundensatz = [[K_fix||L]] + Energie je Stunde','[['+nz(F,0)+' €||L]] + '+nz(e,2)+' €/h = '+nz(S,2)+' €/h','[['+nz(F,0)+' €||L]] = '+nz(S-e,2)+' €/h','L = [['+nz(F,0)+' €||'+nz(S-e,2)+' €/h]] = '+nz(L,1)+' h, also mindestens '+nz(Math.ceil(L),0)+' h pro Jahr']}}});
C.push({f:'org',m:2,name:'Kritische Menge',gen:r=>{const kva=r.step(60,120,5)/10,d=r.p([1.5,2,2.5,3,4]),kvb=kva-d,x0=r.step(20,80,5)*100,kfa=r.step(8,30,2)*1000,kfb=kfa+x0*d;
 return{q:'Verfahren A: Fixkosten '+nz(kfa,0)+' € pro Jahr, variable Kosten '+nz(kva,2)+' € je Stück. Verfahren B: Fixkosten '+nz(kfb,0)+' € pro Jahr, variable Kosten '+nz(kvb,2)+' € je Stück. Bei welcher Menge sind beide Verfahren gleich teuer?',a:x0,u:'Stück',d:0,tol:0,
 sol:['x_krit = [[K_fB − K_fA||k_vA − k_vB]]','x_krit = [['+nz(kfb,0)+' € − '+nz(kfa,0)+' €||'+nz(kva,2)+' €/Stück − '+nz(kvb,2)+' €/Stück]]','x_krit = [['+nz(kfb-kfa,0)+' €||'+nz(d,2)+' €/Stück]] = '+nz(x0,0)+' Stück']}}});
C.push({f:'org',m:2,name:'Kostenvorteil bei geplanter Menge',gen:r=>{const p=r.step(90,180,5)/10,kf=r.step(20,60,4)*1000,kv=r.step(30,60,2)/10,x=r.step(50,150,10)*100,E=kf+kv*x,Fm=p*x,V=Fm-E;
 return{q:'Ein Teil kostet beim Lohnfertiger '+nz(p,2)+' € je Stück. Selbst gefertigt entstehen '+nz(kf,0)+' € Fixkosten pro Jahr und '+nz(kv,2)+' € variable Kosten je Stück. Geplant sind '+nz(x,0)+' Stück pro Jahr. Wie viel spart die Eigenfertigung (negativ = Mehrkosten)?',a:V,u:'€',d:2,tol:0.001,
 sol:['K_eigen = K_f + k_v · x = '+nz(kf,0)+' € + '+nz(kv,2)+' €/Stück · '+nz(x,0)+' Stück = '+nz(E,2)+' €','K_fremd = p · x = '+nz(p,2)+' €/Stück · '+nz(x,0)+' Stück = '+nz(Fm,2)+' €','Vorteil = '+nz(Fm,2)+' € − '+nz(E,2)+' € = '+nz(V,2)+' €']}}});

/* ---------- Situationsaufgaben (eigene Fälle, mehrere Handlungsbereiche verknüpft) ---------- */
CASES.push(
{f:'tec',t:'Neue Drehzelle für Hydraulikflansche',txt:'Dein Betrieb fertigt Flansche aus Vergütungsstahl für Hydraulikaggregate. Eine neue CNC-Drehmaschine mit 15 kW Motorleistung (Wirkungsgrad 0,8) wird aufgestellt. Das Werkstück wird hydraulisch gespannt. Du bist als Meister für Inbetriebnahme, Fertigung und die Einweisung von zwei Mitarbeitern verantwortlich.',
tasks:[{q:'Ein Flansch mit d = 160 mm wird mit v_c = 200 m/min geschruppt. Berechne die Drehzahl.',a:'n = v_c · 1000 ÷ (π · d) = 200 m/min · 1000 mm/m ÷ (π · 160 mm) = 398 1/min.',p:3},
{q:'Schnitttiefe 4 mm, Vorschub 0,4 mm, k_c = 2300 N/mm². Reicht die Motorleistung? Schlage bei Bedarf eine Änderung vor.',a:'A = a_p · f = 4 mm · 0,4 mm = 1,6 mm². F_c = A · k_c = 1,6 mm² · 2300 N/mm² = 3680 N. v_c = 200 m/min ÷ 60 s/min = 3,33 m/s. P_c = 3680 N · 3,33 m/s = 12,27 kW. P_zu = 12,27 kW ÷ 0,8 = 15,33 kW, die Maschine wäre überlastet. Schnitttiefe auf 3,5 mm senken (P_zu = 13,42 kW) oder den Vorschub verringern.',p:6},
{q:'Der Spannzylinder hat D = 63 mm, der Systemdruck beträgt 60 bar. Berechne die Spannkraft ohne Verluste.',a:'A = π · D² ÷ 4 = π · (6,3 cm)² ÷ 4 = 31,17 cm². p = 60 bar = 600 N/cm². F = p · A = 600 N/cm² · 31,17 cm² = 18702 N, also rund 18,7 kN.',p:4},
{q:'Nenne vier Punkte, die Du bei Inbetriebnahme und Abnahme der Drehzelle prüfst und dokumentierst.',a:'Aufstellung und Ausrichtung nach Herstellerangaben. Schutzeinrichtungen wie Türverriegelung und Not-Halt auf Funktion prüfen. Hydraulik auf Druck, Dichtheit und Spannkraftüberwachung prüfen. Probelauf mit Musterteil und Erstteilprüfung. Übergabeprotokoll mit Mängelliste, Betriebsanleitung und Konformitätserklärung.',p:4},
{q:'Fällt der Spanndruck ab, kann das Werkstück herausgeschleudert werden. Bewerte das Risiko in einer FMEA mit B = 9, A = 3, E = 5 und schlage eine Maßnahme vor.',a:'RPZ = B · A · E = 9 · 3 · 5 = 135. Die Bedeutung ist sehr hoch, weil Menschen verletzt werden können, deshalb ist eine Maßnahme nötig, auch wenn die RPZ nur mittel ist. Maßnahme: Druckschalter, der bei Druckabfall die Spindel stoppt, dazu ein entsperrbares Rückschlagventil im Spannkreis. Danach neu bewerten.',p:4},
{q:'Zwei Mitarbeiter sollen die Maschine künftig bedienen. Wie gehst Du bei der Unterweisung vor?',a:'Unterweisung vor der ersten Tätigkeit anhand der Betriebsanweisung. Vier-Stufen-Methode: vorbereiten, vormachen und erklären, nachmachen lassen, üben. Gefahren und Schutzeinrichtungen besonders erklären. Verständnis prüfen. Unterweisung mit Unterschrift dokumentieren und regelmäßig, mindestens jährlich, wiederholen.',p:4}]},
{f:'org',t:'Gehäuse selbst fräsen oder fremd vergeben?',txt:'Ein Gehäuse wird bisher bei einem Lohnfertiger für 14,50 € je Stück gefräst. Du sollst prüfen, ob Dein Betrieb es auf einem eigenen Bearbeitungszentrum fertigen soll. Daten: Anschaffungswert 280 000 €, Nutzungsdauer 8 Jahre, kalkulatorischer Zins 6 %, Raumkosten 4800 € pro Jahr, Instandhaltung 6200 € pro Jahr, Energie 3,20 € je Laufstunde, geplante Laufzeit 2000 h pro Jahr. Fertigungszeit 6 min je Gehäuse, Lohnkosten 42 € je Stunde. Das Material ist in beiden Fällen gleich.',
tasks:[{q:'Berechne den Maschinenstundensatz.',a:'Abschreibung = 280 000 € ÷ 8 Jahre = 35 000 €/Jahr. Zinsen = 280 000 € ÷ 2 · 6 % = 8400 €/Jahr. Fixe Kosten = 35 000 € + 8400 € + 4800 € + 6200 € = 54 400 €/Jahr. Fixer Anteil = 54 400 € ÷ 2000 h = 27,20 €/h. Maschinenstundensatz = 27,20 €/h + 3,20 €/h = 30,40 €/h.',p:6},
{q:'Berechne die Fertigungskosten je Gehäuse aus Maschinen- und Lohnkosten.',a:'6 min = 0,1 h. Maschinenkosten = 30,40 €/h · 0,1 h = 3,04 €. Lohnkosten = 42 €/h · 0,1 h = 4,20 €. Fertigungskosten = 3,04 € + 4,20 € = 7,24 € je Stück. Der Wert gilt nur bei 2000 h Laufzeit.',p:3},
{q:'Ab welcher Jahresmenge lohnt sich die Eigenfertigung? Trenne dazu fixe und variable Kosten.',a:'Fixe Kosten = 54 400 €/Jahr. Variable Kosten je Stück = 3,20 €/h · 0,1 h + 42 €/h · 0,1 h = 0,32 € + 4,20 € = 4,52 €. x_krit = 54 400 € ÷ (14,50 €/Stück − 4,52 €/Stück) = 5451 Stück (aufgerundet).',p:6},
{q:'Geplant sind 8000 Gehäuse pro Jahr. Wie groß ist der Kostenvorteil der Eigenfertigung?',a:'K_eigen = 54 400 € + 4,52 €/Stück · 8000 Stück = 90560 €. K_fremd = 14,50 €/Stück · 8000 Stück = 116 000 €. Vorteil = 116 000 € − 90560 € = 25440 € pro Jahr.',p:4},
{q:'Nenne drei Gründe, die trotz Kostenvorteil gegen die Eigenfertigung sprechen können.',a:'Kapital wird gebunden und fehlt für andere Investitionen. Fachpersonal fehlt oder muss erst qualifiziert werden. Die Menge ist unsicher, unter 5451 Stück lohnt es sich nicht. Der Lohnfertiger fängt Schwankungen flexibel auf. Anlaufzeit und Qualitätsrisiko am Anfang.',p:3},
{q:'Die Entscheidung fällt für die Eigenfertigung. Ein erfahrener Mitarbeiter fürchtet, dass seine konventionelle Fräsmaschine wegfällt. Wie führst Du das Gespräch?',a:'Früh und offen informieren, unter vier Augen. Sorgen ernst nehmen und nachfragen. Fakten nennen: Was ändert sich, was bleibt. Perspektive bieten, z. B. Qualifizierung zum CNC-Bediener, seine Erfahrung wird beim Einrichten gebraucht. Nächste Schritte und Folgetermin vereinbaren. Betriebsrat bei einer Versetzung beteiligen.',p:4}]});

/* ---------- Situationsbezogenes Fachgespräch (Kern: Führung und Personal) ---------- */
ORAL.push(
['fp','Ein neuer Mitarbeiter wirkt nach drei Wochen unsicher und macht Fehler. Wie gehst Du vor?','Gespräch suchen und Ursachen erfragen, Einarbeitungsplan prüfen, einen Paten benennen, Unterweisung wiederholen, Zwischenziele vereinbaren, Fortschritte anerkennen.'],
['fp','Wie bereitest Du ein Kritikgespräch vor?','Anlass und Ziel klären, Fakten und Beispiele sammeln, Termin unter vier Augen ohne Störung, mögliche Reaktionen bedenken, Lösungsideen vorbereiten.'],
['fp','Wann delegierst Du eine Aufgabe, und was beachtest Du dabei?','Wenn der Mitarbeiter fähig und bereit ist und es keine Führungsaufgabe ist. Aufgabe, Befugnis und Verantwortung gemeinsam übertragen, Ziel und Termin nennen, Rückmeldung vereinbaren, Ergebnis würdigen.'],
['fp','Wie ermittelst Du den Qualifizierungsbedarf in Deiner Abteilung?','Anforderungen der Arbeitsplätze und künftiger Technik ableiten, vorhandenes Können erfassen (Qualifikationsmatrix), Lücken bestimmen, Prioritäten setzen, Maßnahmen mit Termin und Erfolgskontrolle planen.'],
['fp','Zwei Schichtführer streiten über die Schichtübergabe. Was tust Du?','Früh eingreifen, erst Einzelgespräche, dann gemeinsames Gespräch, sachliche Ursache klären (z. B. fehlende Übergaberegel), Regel gemeinsam vereinbaren und festhalten, nachhalten.'],
['fp','Ein Kunde reklamiert Teile aus Deiner Fertigung. Wie gehst Du vor?','Sofortmaßnahmen (Bestand sperren, sortieren, Kunde informieren), Team bilden, Ursache systematisch suchen (z. B. 8D, Ishikawa, 5 Why), Abstellmaßnahme einführen, Wirksamkeit prüfen, auf ähnliche Teile übertragen.'],
['fp','Wie motivierst Du ein Team bei hoher Arbeitsbelastung?','Ziele und Gründe erklären, Belastung fair verteilen, Mitarbeiter beteiligen, Hindernisse beseitigen, Anerkennung zeigen, Pausen und Ausgleich sichern, Erfolge sichtbar machen.'],
['tec','Wie wählst Du die Instandhaltungsstrategie für eine Engpassmaschine?','Wegen hoher Ausfallkosten vorbeugend oder zustandsorientiert: feste Inspektionen, Zustandsüberwachung (z. B. Schwingung, Temperatur), Ersatzteile vorhalten. Ausfallbedingte Instandhaltung nur bei unkritischen Anlagen.'],
['tec','Warum braucht jeder Hydraulikkreis ein Druckbegrenzungsventil?','Es begrenzt den höchsten Druck und schützt Pumpe, Leitungen und Zylinder vor Überlast. Beim eingestellten Druck fließt das Öl zum Tank.'],
['org','Was sagt der Maschinenstundensatz aus, und wie senkst Du ihn?','Er nennt die Kosten je Laufstunde. Senken durch höhere Auslastung (fixe Kosten verteilen sich), weniger Stillstand, günstigere Energie, vorbeugende Instandhaltung.'],
['org','Was gehört zu einer Gefährdungsbeurteilung?','Arbeitsbereiche und Tätigkeiten festlegen, Gefährdungen ermitteln und beurteilen, Maßnahmen in der richtigen Rangfolge festlegen, umsetzen, Wirksamkeit prüfen, dokumentieren und fortschreiben.']);
