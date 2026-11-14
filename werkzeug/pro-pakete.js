/* ===== Lernlabor Pro, Pakete O1, T1, T2, F1 (Vorschau 2): Inhalte der zwölf neuen Themen. Eigene Texte und Aufgaben. ===== */
const PK=(f,t,o)=>{const ms=D[f].modules,i=ms.findIndex(x=>x.t===t);if(i<0)throw new Error('Thema fehlt: '+t);ms[i]=Object.assign({t},o)};

/* ---------- O1 Kostenwesen ---------- */
PK('org','Zuschlagskalkulation & BAB',{intro:'Der Betriebsabrechnungsbogen verteilt die Gemeinkosten auf die Kostenstellen. Daraus entstehen Zuschlagssätze, mit denen Du einen Auftrag vom Material bis zum Angebotspreis kalkulierst. In der Organisationsaufgabe kommt das fast immer vor, oft zusammen mit dem Maschinenstundensatz.',
pts:['Einzelkosten lassen sich dem Auftrag direkt zuordnen: Fertigungsmaterial und Fertigungslohn. Gemeinkosten fallen für viele Aufträge gemeinsam an und werden über Zuschläge verteilt.',
'Der BAB verteilt die Gemeinkosten auf die Kostenstellen Material, Fertigung, Verwaltung und Vertrieb.',
'Zuschlagssatz = [[Gemeinkosten der Kostenstelle||Zuschlagsbasis]] · 100 %. Basis: Material → Fertigungsmaterial, Fertigung → Fertigungslohn, Verwaltung und Vertrieb → Herstellkosten.',
'Schema: Materialkosten = MEK + MGK. Fertigungskosten = FL + FGK. Herstellkosten = MK + FK. Selbstkosten = HK + VwGK + VtGK.',
'Barverkaufspreis = Selbstkosten + Gewinn. Über Skonto und Rabatt geht es weiter bis zum Listenpreis.',
'Mit Maschinenstundensatz: Fertigungskosten = Maschinenstundensatz · Maschinenzeit + FL + Restfertigungsgemeinkosten (Zuschlag auf den Fertigungslohn).',
'Vorkalkulation vor dem Auftrag mit Normalzuschlägen, Nachkalkulation danach mit Istwerten. Der Vergleich zeigt, ob der Auftrag Geld gebracht hat.'],
mcq:[['Im BAB stehen 36 000 € Materialgemeinkosten bei 240 000 € Fertigungsmaterial. Wie hoch ist der MGK-Zuschlag?','15 %','6,7 %','36 %','24 %','36 000 € ÷ 240 000 € · 100 % = 15 %.'],
['Auf welche Basis rechnest Du den Verwaltungsgemeinkostenzuschlag?','Herstellkosten','Fertigungslohn','Fertigungsmaterial','Selbstkosten','Verwaltung und Vertrieb werden auf die Herstellkosten bezogen.'],
['Was zählt zu den Einzelkosten eines Auftrags?','Fertigungslohn für genau diesen Auftrag','Gehalt des Meisters','Miete der Halle','Heizkosten','Einzelkosten lassen sich dem Auftrag direkt zurechnen.'],
['Die Nachkalkulation ergibt höhere Kosten als die Vorkalkulation, der Preis steht fest. Was bedeutet das?','Der Auftrag bringt weniger Gewinn als geplant','Der Auftrag war profitabler als geplant','Die Zuschläge waren zu hoch','Der Kunde zahlt nachträglich mehr','Höhere Istkosten bei gleichem Preis senken den Gewinn.']]});

PK('org','Amortisation & Rentabilität',{intro:'Bevor der Betrieb eine Maschine kauft, will die Geschäftsleitung wissen: Wann ist das Geld zurück, und wie gut arbeitet das eingesetzte Kapital? Mit zwei kurzen Rechnungen lieferst Du die Antwort und eine begründete Empfehlung.',
pts:['Amortisationszeit = [[Kapitaleinsatz||jährlicher Rückfluss]]. Der Rückfluss ist der jährliche Gewinn (oder die Kostenersparnis) plus die Abschreibung.',
'Warum plus Abschreibung? Sie mindert den Gewinn, fließt aber nicht als Geld ab. Das Geld dafür kommt über die Verkaufspreise zurück.',
'Abschreibung (linear) = [[Anschaffungswert||Nutzungsdauer]].',
'Die Kostenersparnis stammt meist aus einem Kostenvergleich. Dort ist die Abschreibung schon als Kosten enthalten, deshalb wird sie beim Rückfluss wieder addiert.',
'Rentabilität = [[Gewinn bzw. Kostenersparnis||durchschnittlicher Kapitaleinsatz]] · 100 %. Durchschnittlich gebunden ist der halbe Anschaffungswert.',
'Entscheidung: Die Amortisationszeit muss deutlich unter der Nutzungsdauer und unter der Vorgabe des Betriebs liegen. Die Rentabilität sollte über dem Zinssatz für Fremdkapital liegen.',
'Grenzen: Statische Verfahren rechnen mit Durchschnittswerten und ohne Zinseszins. Was nach der Amortisation passiert, zählt nicht mit.'],
mcq:[['Eine Maschine kostet 120 000 €, Abschreibung 20 000 € pro Jahr, Gewinn 10 000 € pro Jahr. Wie lange dauert die Amortisation?','4 Jahre','6 Jahre','12 Jahre','3 Jahre','120 000 € ÷ (10 000 €/Jahr + 20 000 €/Jahr) = 4 Jahre.'],
['Warum zählt die Abschreibung zum Rückfluss?','Sie mindert den Gewinn, fließt aber nicht als Geld ab','Weil das Finanzamt sie erstattet','Weil die Bank sie auszahlt','Weil sie Zinsen enthält','Das Geld für die Abschreibung kommt über die Verkaufspreise herein.'],
['Investition 200 000 €, jährliche Kostenersparnis 18 000 €. Wie hoch ist die Rentabilität?','18 %','9 %','11,1 %','36 %','18 000 € ÷ 100 000 € · 100 % = 18 %. Gebunden ist im Mittel die Hälfte.'],
['Welcher Nachteil gilt für die statische Amortisationsrechnung?','Erträge nach der Amortisation werden nicht berücksichtigt','Sie ist zu aufwendig','Sie braucht keine Zahlen','Sie gilt nur für Gebäude','Zwei Maschinen mit gleicher Amortisationszeit können danach sehr unterschiedlich viel bringen.']]});

PK('org','Deckungsbeitrag & Gewinnschwelle',{intro:'Nicht jeder Auftrag mit Umsatz bringt auch Geld. Der Deckungsbeitrag zeigt, was ein Produkt zur Deckung der Fixkosten beiträgt. Daraus folgen die Gewinnschwelle, die Preisuntergrenze und die Entscheidung über einen Zusatzauftrag.',
pts:['Deckungsbeitrag je Stück: db = p − k_v, also Preis minus variable Stückkosten.',
'Gesamter Deckungsbeitrag: DB = db · x. Gewinn = DB − K_f.',
'Gewinnschwelle (Break-even): x_BE = [[K_f||p − k_v]]. Ab dieser Menge sind alle Fixkosten gedeckt.',
'Kurzfristige Preisuntergrenze bei freier Kapazität: die variablen Stückkosten. Langfristig muss der Preis die Selbstkosten decken.',
'Zusatzauftrag: annehmen, wenn Kapazität frei ist, der Preis über k_v liegt und die Stammkunden nicht auf den niedrigen Preis pochen.',
'Engpass: Ist eine Maschine voll ausgelastet, zählt der Deckungsbeitrag je Engpassminute, nicht je Stück.'],
mcq:[['Preis 50 €, variable Kosten 30 € je Stück, Fixkosten 80 000 €. Wo liegt die Gewinnschwelle?','4000 Stück','1600 Stück','2667 Stück','1000 Stück','80 000 € ÷ (50 €/Stück − 30 €/Stück) = 4000 Stück.'],
['Ein Kunde bietet für einen Zusatzauftrag 22 € je Stück. Variable Kosten 18 €, Vollkosten 26 €. Kapazität ist frei. Was empfiehlst Du rein rechnerisch?','Annehmen, jedes Stück bringt 4 € Deckungsbeitrag','Ablehnen, der Preis liegt unter den Vollkosten','Ablehnen, die Fixkosten steigen','Nur bei 26 € annehmen','Die Fixkosten fallen ohnehin an. Jeder Euro über k_v verbessert das Ergebnis.'],
['Was ist die kurzfristige Preisuntergrenze?','Die variablen Stückkosten','Die Selbstkosten','Der Listenpreis','Die Fixkosten je Stück','Darunter verliert der Betrieb mit jedem Stück zusätzlich Geld.'],
['Eine Maschine ist der Engpass. Welches Produkt fertigst Du bevorzugt?','Das mit dem höchsten Deckungsbeitrag je Maschinenminute','Das mit dem höchsten Preis','Das mit dem höchsten Deckungsbeitrag je Stück','Das mit den niedrigsten Fixkosten','Die knappe Maschinenzeit soll möglichst viel Deckungsbeitrag bringen.']]});

PK('org','Plankosten & Abweichungen',{intro:'Die Plankostenrechnung legt vorher fest, was eine Kostenstelle kosten darf. Am Monatsende vergleichst Du Soll und Ist. Die Abweichungen zeigen, ob zu viel verbraucht oder nur weniger gearbeitet wurde. Als Meister erklärst Du sie und leitest Maßnahmen ab.',
pts:['Plankosten: geplante Kosten bei Planbeschäftigung, aufgeteilt in fixe und variable Plankosten.',
'Sollkosten = K_f,plan + [[K_v,plan||Planbeschäftigung]] · Istbeschäftigung. So viel dürfte die tatsächliche Beschäftigung kosten.',
'Verrechnete Plankosten = [[Plankosten||Planbeschäftigung]] · Istbeschäftigung.',
'Verbrauchsabweichung = Istkosten − Sollkosten. Positiv heißt: mehr verbraucht als erlaubt. Dafür ist die Kostenstelle verantwortlich.',
'Beschäftigungsabweichung = Sollkosten − verrechnete Plankosten. Sie entsteht, wenn weniger als geplant gearbeitet wird und Fixkosten liegen bleiben.',
'Gesamtabweichung = Istkosten − verrechnete Plankosten = Verbrauchsabweichung + Beschäftigungsabweichung.',
'Ursachen einer Verbrauchsabweichung: Ausschuss, Nacharbeit, Mehrverbrauch an Material oder Energie, Störungen, Überstunden.'],
mcq:[['Plankosten 50 000 € bei 1000 h, davon fix 20 000 €. Ist: 800 h. Wie hoch sind die Sollkosten?','44 000 €','40 000 €','50 000 €','36 000 €','20 000 € + 30 €/h · 800 h = 44 000 €.'],
['Die Istkosten liegen über den Sollkosten. Was zeigt das?','Eine Verbrauchsabweichung: Die Kostenstelle hat mehr verbraucht als erlaubt','Eine Beschäftigungsabweichung','Dass weniger gearbeitet wurde','Dass die Plankosten zu hoch waren','Soll und Ist werden bei derselben Beschäftigung verglichen.'],
['Wofür ist der Meister einer Kostenstelle in erster Linie verantwortlich?','Für die Verbrauchsabweichung','Für die Beschäftigungsabweichung','Für die Höhe der Fixkosten','Für den Verrechnungssatz','Die Beschäftigung hängt meist an der Auftragslage, der Verbrauch an der Kostenstelle.'],
['Warum entsteht bei Unterbeschäftigung eine Beschäftigungsabweichung?','Die Fixkosten verteilen sich auf weniger Stunden als geplant','Die variablen Kosten je Stunde steigen','Die Materialpreise steigen','Es entsteht mehr Ausschuss','Die verrechneten Plankosten enthalten anteilig Fixkosten, die bei weniger Stunden nicht gedeckt werden.']]});

/* ---------- T1 Instandhaltung & Zerspanung ---------- */
PK('tec','Instandhaltung & Wartung',{intro:'Steht eine Maschine, steht oft die ganze Linie. Als Meister legst Du fest, welche Anlage wie instand gehalten wird, und prüfst mit Kennzahlen wie Verfügbarkeit, MTBF und MTTR, ob sich eine Maßnahme lohnt.',
pts:['Grundmaßnahmen nach DIN 31051: Wartung (Abnutzung verzögern), Inspektion (Ist-Zustand feststellen), Instandsetzung (Soll-Zustand wiederherstellen), Verbesserung (Schwachstellen beseitigen).',
'Strategien: ausfallbedingt (erst nach dem Schaden), vorbeugend (nach Zeit oder Laufleistung), zustandsorientiert (nach gemessenem Zustand), vorausschauend (Trend der Messwerte, Restlaufzeit berechnet).',
'MTBF = [[Betriebszeit||Zahl der Ausfälle]]: mittlere Zeit zwischen zwei Ausfällen.',
'MTTR = [[gesamte Reparaturzeit||Zahl der Ausfälle]]: mittlere Dauer einer Reparatur.',
'Technische Verfügbarkeit: V = [[MTBF||MTBF + MTTR]] · 100 %.',
'OEE (Gesamtanlageneffektivität) = Verfügbarkeit · Leistungsgrad · Qualitätsrate.',
'Strategie nach Bedeutung wählen: Engpassmaschinen und Sicherheitsteile vorbeugend oder zustandsorientiert, unkritische Teile mit Ersatz auch ausfallbedingt.',
'Ersatzteile mit langer Lieferzeit für Engpassmaschinen vorhalten.'],
mcq:[['Zu welcher Grundmaßnahme gehört das Messen der Lagertemperatur?','Inspektion','Wartung','Instandsetzung','Verbesserung','Die Inspektion stellt den Ist-Zustand fest.'],
['Eine Maschine lief 2000 h und fiel 8-mal aus. Die Reparaturen dauerten zusammen 40 h. Wie groß ist MTTR?','5 h','250 h','40 h','16 h','40 h ÷ 8 Ausfälle = 5 h.'],
['MTBF = 95 h, MTTR = 5 h. Wie hoch ist die technische Verfügbarkeit?','95 %','90 %','5 %','100 %','95 h ÷ (95 h + 5 h) · 100 % = 95 %.'],
['Welche Strategie passt am wenigsten zu einer Engpassmaschine ohne Ersatz?','Ausfallbedingte Instandhaltung','Zustandsorientierte Instandhaltung','Vorbeugende Instandhaltung','Vorausschauende Instandhaltung','Ein ungeplanter Ausfall legt die Fertigung still.'],
['Verfügbarkeit 90 %, Leistungsgrad 95 %, Qualitätsrate 98 %. Wie hoch ist die OEE?','83,8 %','94,3 %','90 %','98 %','0,90 · 0,95 · 0,98 = 0,838, also 83,8 %.']]});

PK('tec','Zustandsüberwachung & Schadensanalyse',{intro:'Lager, Zahnräder und Spindeln kündigen ihren Ausfall meist an: Sie werden lauter, wärmer oder schwingen stärker. Wer diese Signale misst und deutet, wechselt Teile geplant statt im Notfall. Und wenn doch etwas bricht, findet die Schadensanalyse die Ursache.',
pts:['Messgrößen: Schwingung (Schwinggeschwindigkeit in mm/s), Temperatur (Thermografie), Körperschall, Ölzustand (Partikel, Wasser, Viskosität), Stromaufnahme des Motors.',
'Grenzwerte gibt der Hersteller oder eine Norm vor: unter dem Warnwert normal, ab dem Warnwert Wechsel planen, ab dem Alarmwert sofort handeln.',
'Trend statt Einzelwert: Steigt ein Messwert gleichmäßig, schätzt Du die Restlaufzeit: t_Rest = [[Grenzwert − aktueller Wert||Anstieg je Woche]].',
'Schadensbilder: Grübchen (Pittings) an Zahnflanken und Laufbahnen durch Ermüdung, Fressen bei Schmierstoffmangel, Riefen durch Schmutz, Dauerbruch mit Rastlinien bei Wechselbelastung.',
'Dauerbruch: glatte Zone mit Rastlinien und eine kleine raue Restbruchfläche. Gewaltbruch: die ganze Fläche rau, oft verformt.',
'Schadensanalyse in Schritten: Schaden sichern und fotografieren, Betriebsdaten sammeln, Bruchfläche und Umgebung untersuchen, Ursache bestimmen, Abstellmaßnahme festlegen, Wirksamkeit prüfen.'],
mcq:[['Ein Lager zeigt seit Wochen steigende Schwingwerte, liegt aber noch unter dem Warnwert. Was tust Du?','Trend weiter beobachten und den Wechsel im nächsten geplanten Stillstand vorbereiten','Die Anlage sofort abschalten','Nichts, solange kein Alarm kommt','Das Messgerät tauschen','Der Trend erlaubt einen geplanten Wechsel ohne Notfall.'],
['Eine Bruchfläche zeigt eine glatte Zone mit Rastlinien und eine kleine raue Restfläche. Welche Bruchart?','Dauerbruch','Gewaltbruch','Korrosion','Verschleiß durch Schmutz','Rastlinien zeigen den schrittweisen Rissfortschritt unter Wechsellast.'],
['Womit findest Du lockere Klemmen in einem Schaltschrank am schnellsten?','Thermografie','Ölanalyse','Schwingungsmessung','Härteprüfung','Schlechte Kontakte werden warm.'],
['Schwingung 3,2 mm/s, Alarmwert 7,1 mm/s, Anstieg 0,3 mm/s je Woche. Wann ist der Alarmwert erreicht?','in etwa 13 Wochen','in etwa 24 Wochen','in etwa 3 Wochen','in etwa 10 Wochen','(7,1 mm/s − 3,2 mm/s) ÷ 0,3 mm/s je Woche = 13 Wochen.']]});

PK('tec','Zerspanung: Fräsen & Schleifen',{intro:'Beim Fräsen dreht das Werkzeug, das Werkstück fährt. Aus Schnittgeschwindigkeit, Zähnezahl und Zahnvorschub ergibt sich die Vorschubgeschwindigkeit und daraus die Bearbeitungszeit. Schleifen nimmt wenig Material ab, dafür sehr genau.',
pts:['Drehzahl: n = [[v_c · 1000||π · d]] mit dem Fräserdurchmesser d in mm.',
'Vorschubgeschwindigkeit: v_f = f_z · z · n in mm/min (f_z Vorschub je Zahn, z Zähnezahl).',
'Hauptnutzungszeit: t_h = [[L · i||v_f]]. Beim Planfräsen über die ganze Länge: L = Werkstücklänge + Fräserdurchmesser + An- und Überlauf.',
'Zeitspanvolumen: Q = [[a_p · a_e · v_f||1000]] in cm³/min (a_e Eingriffsbreite, alle Maße in mm).',
'Gleichlauffräsen gibt bessere Oberflächen, braucht aber einen spielfreien Vorschub wie an CNC-Maschinen. Gegenlauf eignet sich für Maschinen mit Spiel und für Gusshaut.',
'Schleifscheibe: v_c = [[π · d · n||60 000]] in m/s (d in mm, n in 1/min). Die zulässige Höchstgeschwindigkeit steht auf der Scheibe und darf nie überschritten werden.',
'Vor dem Einsatz: Scheibe prüfen (bei keramischer Bindung Klangprobe), Probelauf unter Schutzhaube, Abstand der Werkstückauflage einstellen. Abrichten macht die Scheibe wieder rund und griffig.'],
mcq:[['f_z = 0,1 mm, z = 4, n = 2000 1/min. Wie groß ist die Vorschubgeschwindigkeit?','800 mm/min','80 mm/min','200 mm/min','8000 mm/min','0,1 mm · 4 · 2000 1/min = 800 mm/min.'],
['Wann wählst Du Gleichlauffräsen?','Auf spielfreien CNC-Maschinen für gute Oberflächen','Auf alten Maschinen mit Spiel im Vorschub','Bei Werkstücken mit Gusshaut','Nur beim Schleifen','Im Gleichlauf zieht der Fräser das Werkstück. Spiel im Antrieb führt dann zu Rattern.'],
['Eine Schleifscheibe mit d = 300 mm läuft mit 3000 1/min. Welche Umfangsgeschwindigkeit hat sie?','47,1 m/s','15,7 m/s','94,2 m/s','4,7 m/s','v_c = π · 300 mm · 3000 1/min ÷ 60 000 = 47,1 m/s.'],
['Was prüfst Du vor dem Aufspannen einer neuen Schleifscheibe immer?','Dass die zulässige Umfangsgeschwindigkeit nicht überschritten wird','Dass die Scheibe eingeölt ist','Dass die Schutzhaube abgenommen ist','Dass die Scheibe warm ist','Die zulässige Höchstgeschwindigkeit steht auf dem Etikett.']]});

/* ---------- T2 Fluidtechnik & Antriebe ---------- */
PK('tec','Pneumatik & Vakuumtechnik',{intro:'Druckluft bewegt schnell und sauber, ist aber eine teure Energie. Sauggreifer halten flache Teile ohne Spuren. Du rechnest Zylinderkräfte, Luftverbrauch und Haltekräfte und weißt, wo Leckagen Geld kosten.',
pts:['Kolbenkraft: F = p_e · A · η. Der Wirkungsgrad liegt wegen der Dichtungsreibung etwa bei 0,85 bis 0,95.',
'Einheiten: 1 bar = 10 N/cm². In der Pneumatik ist p_e der Überdruck gegenüber der Umgebung.',
'Luftverbrauch je Hub, umgerechnet auf angesaugte Luft: V = A · s · [[p_e + 1 bar||1 bar]].',
'Doppeltwirkender Zylinder: Ausfahren mit der Kolbenfläche, Einfahren mit der Ringfläche. Je Doppelhub zählen beide Volumen.',
'Haltekraft von Sauggreifern: F = Δp · A · n (Unterdruck mal Saugfläche mal Zahl der Sauger). Nötig ist F ≥ m · (g + a) · S mit Sicherheitsfaktor S von mindestens 2.',
'Leckagen kosten rund um die Uhr: Kosten = Leckage in m³/h · Stunden mit Netzdruck · Preis je m³ Druckluft.',
'Wartungseinheit: Filter, Druckregler mit Manometer, bei Bedarf Öler. Den Druck nur so hoch einstellen wie nötig, das spart Energie.'],
mcq:[['Ein Zylinder mit D = 50 mm arbeitet mit 6 bar, η = 0,9. Welche Kraft entsteht?','etwa 1060 N','etwa 1180 N','etwa 106 N','etwa 2650 N','A = 19,63 cm², F = 60 N/cm² · 19,63 cm² · 0,9 = 1060 N.'],
['Warum ist Druckluft eine teure Energieform?','Beim Verdichten geht ein Großteil der Energie als Wärme verloren','Weil Luft gekauft werden muss','Weil die Leitungen aus Kupfer sind','Weil Zylinder teuer sind','Nur ein kleiner Teil des Stroms kommt als Arbeit am Zylinder an.'],
['Ein Sauggreifer soll ein Blech von 20 kg senkrecht heben, a = 5 m/s², S = 2. Welche Haltekraft brauchst Du mindestens?','etwa 590 N','etwa 300 N','etwa 200 N','etwa 400 N','F = 20 kg · (9,81 m/s² + 5 m/s²) · 2 = 592 N.'],
['Womit senkst Du die Druckluftkosten am schnellsten?','Leckagen suchen und abdichten','Den Netzdruck erhöhen','Größere Zylinder einbauen','Den Kompressor dauernd laufen lassen','Leckagen laufen auch, wenn nicht produziert wird.']]});

PK('tec','Antriebe & Getriebe',{intro:'Ein Motor liefert Drehzahl, die Maschine braucht Drehmoment. Das Getriebe tauscht das eine gegen das andere. Du rechnest Übersetzung, Drehmoment und Wirkungsgrad durch den ganzen Antriebsstrang und wählst einen passenden Motor.',
pts:['Übersetzung: i = [[n_an||n_ab]]. Bei mehreren Stufen werden die Übersetzungen multipliziert: i_ges = i_1 · i_2.',
'Zahnradtrieb: i = [[z_2||z_1]] (getriebenes durch treibendes Rad). Riementrieb: i = [[d_2||d_1]].',
'Drehmoment aus Leistung: M = [[9550 · P||n]] mit P in kW, n in 1/min und M in N·m.',
'Abtriebsmoment: M_ab = M_an · i · η. Die Drehzahl sinkt um i, das Moment steigt um i, abzüglich der Verluste.',
'Wirkungsgrad mehrerer Stufen: η_ges = η_1 · η_2 · η_3.',
'Leistung durch das Getriebe: P_ab = P_an · η. Die Leistung wird nie größer.',
'Drehstrom-Asynchronmotor: Synchrondrehzahl bei 50 Hz 3000, 1500 oder 1000 1/min, die Nenndrehzahl liegt wegen des Schlupfs etwas darunter (z. B. 1450 1/min). Ein Frequenzumrichter stellt die Drehzahl stufenlos ein.'],
mcq:[['Motor 1450 1/min, Übersetzung i = 25. Welche Abtriebsdrehzahl?','58 1/min','36 250 1/min','1425 1/min','25 1/min','1450 1/min ÷ 25 = 58 1/min.'],
['Ein Motor gibt 7,5 kW bei 1450 1/min ab. Welches Drehmoment?','etwa 49,4 N·m','etwa 4,9 N·m','etwa 494 N·m','etwa 10,9 N·m','M = 9550 · 7,5 kW ÷ 1450 1/min = 49,4 N·m.'],
['Drei Getriebestufen mit je η = 0,97. Wie groß ist der Gesamtwirkungsgrad?','etwa 0,91','0,97','2,91','0,94','0,97 · 0,97 · 0,97 = 0,913.'],
['Riementrieb: treibende Scheibe 100 mm, getriebene 250 mm, Motor 1450 1/min. Drehzahl der getriebenen Scheibe?','580 1/min','3625 1/min','1450 1/min','145 1/min','n_2 = 1450 1/min · 100 mm ÷ 250 mm = 580 1/min.']]});

/* ---------- F1 Personalführung ---------- */
PK('fp','Delegation & Führungsstil',{intro:'Ein Meister kann nicht alles selbst machen. Wer gut delegiert, entlastet sich und entwickelt seine Leute. Wie viel Du vorgibst und wie viel Du überlässt, hängt vom Mitarbeiter und von der Lage ab.',
pts:['Delegieren heißt: Aufgabe, Befugnis und Verantwortung zusammen übertragen. Fehlt die Befugnis, kann der Mitarbeiter nicht handeln.',
'Die Handlungsverantwortung trägt der Mitarbeiter. Die Führungsverantwortung für Auswahl, Anleitung und Kontrolle bleibt beim Meister.',
'Nicht delegierbar sind Führungsaufgaben: Ziele setzen, beurteilen, Kritikgespräche, vertrauliche Personalfragen.',
'Gut delegieren: Ziel und Ergebnis klar beschreiben, Termin nennen, Rahmen und Befugnisse festlegen, ansprechbar bleiben, Rückmeldung vereinbaren, Ergebnis würdigen.',
'Führungsstile: autoritär (der Meister entscheidet allein), kooperativ (er bezieht die Mitarbeiter ein), Laissez-faire (kaum Führung).',
'Situatives Führen: Der Stil richtet sich nach Können und Wollen des Mitarbeiters: anweisen, überzeugen, beteiligen, delegieren.',
'In Notlagen wie Unfall oder Brand ist kurzes, klares Anweisen richtig, auch für sonst kooperative Führungskräfte.'],
mcq:[['Was gehört zur Delegation zwingend dazu?','Aufgabe, Befugnis und Verantwortung','Nur die Aufgabe','Aufgabe und Prämie','Verantwortung ohne Befugnis','Ohne Befugnis kann der Mitarbeiter die Verantwortung nicht tragen.'],
['Ein neuer Kollege ist motiviert, kennt die Maschine aber noch nicht. Welcher Stil passt?','Anweisen: genau erklären und eng begleiten','Delegieren: ihn allein machen lassen','Beteiligen: ihn mitentscheiden lassen','Gar nicht führen','Hohe Motivation, wenig Können: Er braucht klare Anleitung.'],
['Welche Aufgabe delegierst Du nicht?','Das Kritikgespräch mit einem Mitarbeiter','Die Prüfung der Erstteile','Die Bestellung von Verschleißteilen','Den Entwurf des Wartungsplans','Kritik und Beurteilung sind Führungsaufgaben.'],
['Ein Mitarbeiter hat die delegierte Aufgabe gut erledigt. Was tust Du?','Ergebnis würdigen und Rückmeldung geben','Nichts sagen, das ist selbstverständlich','Die Aufgabe wieder selbst übernehmen','Nur die kleinen Fehler ansprechen','Anerkennung stärkt die Bereitschaft für die nächste Aufgabe.']]});

PK('fp','Konflikte im Team',{intro:'Wo Menschen zusammenarbeiten, gibt es Reibung. Früh erkannt, lässt sich ein Konflikt meist im Gespräch lösen. Bleibt er liegen, wächst er und kostet Leistung, Gesundheit und gute Leute.',
pts:['Konfliktarten: Sachkonflikt (Ziele, Wege), Beziehungskonflikt (Abneigung, Vertrauen), Verteilungskonflikt (Schichten, Urlaub, Maschinen), Rollenkonflikt (widersprüchliche Erwartungen).',
'Warnsignale: Gerüchte, Rückzug, spitze Bemerkungen, mehr Fehler, Fehlzeiten, Grüppchenbildung.',
'Eskalation vereinfacht in drei Stufen (nach Glasl): Beide können noch gewinnen, einer soll verlieren, beide verlieren. Je höher die Stufe, desto eher braucht es Hilfe von außen.',
'Konfliktgespräch: Einzelgespräche zur Vorbereitung, gemeinsames Gespräch mit Regeln, beide Sichtweisen schildern lassen, Interessen statt Positionen herausarbeiten, Lösungen sammeln, verbindlich vereinbaren, nachhalten.',
'Der Meister moderiert neutral. Er urteilt nicht vorschnell und stellt keine Seite bloß.',
'Gibt es keine Einigung, entscheidet der Meister als Vorgesetzter. Bei schweren Fällen Betriebsrat oder Personalabteilung einbeziehen.'],
mcq:[['Zwei Mitarbeiter streiten, wer die neue Maschine bedienen darf. Welche Konfliktart?','Verteilungskonflikt','Rollenkonflikt','Beziehungskonflikt','Zielkonflikt der Geschäftsleitung','Es geht um die Verteilung eines knappen Gutes.'],
['Womit beginnst Du, wenn sich zwei Kollegen seit Wochen meiden?','Mit Einzelgesprächen, um beide Sichtweisen zu hören','Mit einer Abmahnung für beide','Mit einer Teamsitzung, in der alle ihre Meinung sagen','Abwarten, bis es sich legt','Einzelgespräche bereiten das gemeinsame Gespräch vor.'],
['Was heißt „Interessen statt Positionen“?','Hinter der Forderung das eigentliche Bedürfnis suchen','Die Position des Meisters durchsetzen','Nur über Zahlen reden','Den Konflikt vertagen','Wer „Ich will Frühschicht“ sagt, braucht vielleicht nur verlässliche Zeiten für die Kinderbetreuung.'],
['Ein Konflikt ist so weit eskaliert, dass beide nur noch dem anderen schaden wollen. Was ist richtig?','Hilfe von außen holen, z. B. Personalabteilung oder Mediation','Ein kurzes Gespräch wie bei kleinen Konflikten moderieren','Beide in dieselbe Schicht setzen','Nichts tun','Auf hoher Stufe reicht die Moderation durch den Vorgesetzten oft nicht mehr.']]});

PK('fp','Motivation & Anerkennung',{intro:'Warum strengt sich jemand an? Geld allein erklärt es nicht. Wer weiß, was Mitarbeiter antreibt und was sie bremst, kann als Meister viel bewegen, oft ohne zusätzliches Budget.',
pts:['Intrinsische Motivation kommt aus der Aufgabe selbst (Interesse, Können zeigen). Extrinsische kommt von außen (Lohn, Prämie, Lob, Druck).',
'Bedürfnispyramide nach Maslow: Grundbedürfnisse, Sicherheit, soziale Bedürfnisse, Anerkennung, Selbstverwirklichung. Unerfüllte untere Stufen haben Vorrang.',
'Zwei-Faktoren-Theorie nach Herzberg: Hygienefaktoren (Lohn, Arbeitsbedingungen, Sicherheit, Verhältnis zum Vorgesetzten) verhindern Unzufriedenheit. Motivatoren (Erfolg, Anerkennung, Verantwortung, die Arbeit selbst, Entwicklung) schaffen Zufriedenheit.',
'Anerkennung wirkt, wenn sie zeitnah, konkret und ehrlich ist: Was genau war gut, und was hat es gebracht?',
'Was Du als Meister beeinflussen kannst: Ziele und Sinn erklären, Verantwortung übertragen, Aufgaben anreichern (Job Enrichment) oder wechseln (Job Rotation), beteiligen, Hindernisse beseitigen, fair verteilen.',
'Demotivierend wirken unklare Ziele, ständiges Eingreifen, ungerechte Verteilung, Kritik vor anderen und fehlende Rückmeldung.'],
mcq:[['Nach Herzberg ist der Lohn …','ein Hygienefaktor: Stimmt er nicht, entsteht Unzufriedenheit','ein Motivator, der dauerhaft anspornt','unwichtig','nur für Auszubildende wichtig','Mehr Lohn beseitigt Unzufriedenheit, motiviert aber meist nicht dauerhaft.'],
['Welche Anerkennung wirkt am besten?','„Deine neue Rüstfolge hat heute 20 Minuten gespart, danke.“','„Gut gemacht, alle zusammen.“','Eine Mail zum Jahresende','Gar keine, Arbeit ist Arbeit','Konkret, zeitnah und mit der Wirkung beschrieben.'],
['Ein erfahrener Facharbeiter wirkt gelangweilt. Was passt?','Job Enrichment: mehr Verantwortung, z. B. neue Kollegen einarbeiten','Mehr Kontrolle','Kürzere Pausen','Eine Abmahnung','Anspruchsvollere Aufgaben sind ein Motivator.'],
['Was ist intrinsische Motivation?','Antrieb aus der Tätigkeit selbst','Antrieb durch eine Prämie','Antrieb durch Angst vor Kündigung','Antrieb durch Druck der Kollegen','Intrinsisch heißt: von innen heraus.']]});

/* ---------- Rechenaufgaben der neuen Themen (Zufallswerte, Einheiten in jedem Schritt) ---------- */
const MI=(f,t)=>D[f].modules.findIndex(x=>x.t===t);
{const m=MI('org','Zuschlagskalkulation & BAB');
C.push({f:'org',m,name:'Zuschlagssatz aus dem BAB',gen:r=>{const FL=r.step(120,400,20)*1000,z=r.step(120,260,5),G=FL*z/100;
 return{q:'Im BAB stehen für die Kostenstelle Fertigung '+nz(G,0)+' € Gemeinkosten. Der Fertigungslohn beträgt '+nz(FL,0)+' €. Wie hoch ist der Fertigungsgemeinkostenzuschlag?',a:z,u:'%',d:0,tol:0.002,
 sol:['FGK-Zuschlag = [[FGK||Fertigungslohn]] · 100 %','FGK-Zuschlag = [['+nz(G,0)+' €||'+nz(FL,0)+' €]] · 100 % = '+nz(z,0)+' %']}}});
C.push({f:'org',m,name:'Selbstkosten und Barverkaufspreis',gen:r=>{const MEK=r.step(40,160,5),mg=r.p([8,10,12,15]),FL=r.step(60,180,10),fg=r.step(120,220,10),vv=r.p([12,15,18,20]),g=r.p([5,8,10,12]);
 const MGK=MEK*mg/100,MK=MEK+MGK,FGK=FL*fg/100,FK=FL+FGK,HK=MK+FK,VV=HK*vv/100,SK=HK+VV,G=SK*g/100,P=SK+G;
 return{q:'Kalkuliere einen Auftrag: Fertigungsmaterial '+nz(MEK,2)+' €, MGK '+mg+' %, Fertigungslohn '+nz(FL,2)+' €, FGK '+fg+' %, Verwaltungs- und Vertriebsgemeinkosten zusammen '+vv+' %, Gewinn '+g+' %. Wie hoch ist der Barverkaufspreis?',a:P,u:'€',d:2,tol:0.003,
 sol:['MGK = '+mg+' % · '+nz(MEK,2)+' € = '+nz(MGK,2)+' €, MK = '+nz(MEK,2)+' € + '+nz(MGK,2)+' € = '+nz(MK,2)+' €','FGK = '+fg+' % · '+nz(FL,2)+' € = '+nz(FGK,2)+' €, FK = '+nz(FL,2)+' € + '+nz(FGK,2)+' € = '+nz(FK,2)+' €','HK = MK + FK = '+nz(MK,2)+' € + '+nz(FK,2)+' € = '+nz(HK,2)+' €',
  'VwVtGK = '+vv+' % · '+nz(HK,2)+' € = '+nz(VV,2)+' €, SK = '+nz(HK,2)+' € + '+nz(VV,2)+' € = '+nz(SK,2)+' €','Gewinn = '+g+' % · '+nz(SK,2)+' € = '+nz(G,2)+' €, Barverkaufspreis = '+nz(SK,2)+' € + '+nz(G,2)+' € = '+nz(P,2)+' €']}}});
C.push({f:'org',m,name:'Fertigungskosten mit Maschinenstundensatz',gen:r=>{const ms=r.step(30,90,2),t=r.step(12,60,3),lo=r.p([36,38,40,42,45]),rf=r.step(80,160,10),M=ms*t/60,FL=lo*t/60,R=FL*rf/100,FK=M+FL+R;
 return{q:'Ein Teil läuft '+t+' min auf einem Bearbeitungszentrum (Maschinenstundensatz '+nz(ms,2)+' €/h). Der Bediener kostet '+nz(lo,2)+' €/h, die Restfertigungsgemeinkosten betragen '+rf+' % auf den Fertigungslohn. Wie hoch sind die Fertigungskosten?',a:FK,u:'€',d:2,tol:0.003,
 sol:['t = '+t+' min = [['+t+' min||60 min/h]] = '+nz(t/60,2)+' h','Maschinenkosten = '+nz(ms,2)+' €/h · '+nz(t/60,2)+' h = '+nz(M,2)+' €','Fertigungslohn = '+nz(lo,2)+' €/h · '+nz(t/60,2)+' h = '+nz(FL,2)+' €','Restfertigungsgemeinkosten = '+nz(FL,2)+' € · '+rf+' % = '+nz(R,2)+' €','FK = '+nz(M,2)+' € + '+nz(FL,2)+' € + '+nz(R,2)+' € = '+nz(FK,2)+' €']}}});}
{const m=MI('org','Amortisation & Rentabilität');
C.push({f:'org',m,name:'Amortisationszeit',gen:r=>{const I=r.step(60,300,10)*1000,n=r.p([5,6,8,10]),G=r.step(5,40,1)*1000,A=I/n,R=G+A,t=I/R;
 return{q:'Eine neue Maschine kostet '+nz(I,0)+' € und wird in '+n+' Jahren linear abgeschrieben. Sie bringt pro Jahr eine Kostenersparnis von '+nz(G,0)+' € (Abschreibung schon eingerechnet). Nach wie vielen Jahren hat sie sich amortisiert?',a:t,u:'Jahre',d:2,tol:0.005,
 sol:['Abschreibung = [['+nz(I,0)+' €||'+n+' Jahre]] = '+nz(A,2)+' €/Jahr','Rückfluss = '+nz(G,0)+' €/Jahr + '+nz(A,2)+' €/Jahr = '+nz(R,2)+' €/Jahr','t = [['+nz(I,0)+' €||'+nz(R,2)+' €/Jahr]] = '+nz(t,2)+' Jahre']}}});
C.push({f:'org',m,name:'Rentabilität einer Investition',gen:r=>{const I=r.step(80,400,20)*1000,G=r.step(6,60,1)*1000,R=G/(I/2)*100;
 return{q:'Für eine Investition von '+nz(I,0)+' € (ohne Restwert) rechnet der Betrieb mit einer jährlichen Kostenersparnis von '+nz(G,0)+' €. Wie hoch ist die Rentabilität?',a:R,u:'%',d:1,tol:0.005,
 sol:['durchschnittlicher Kapitaleinsatz = [['+nz(I,0)+' €||2]] = '+nz(I/2,0)+' €','Rentabilität = [['+nz(G,0)+' €||'+nz(I/2,0)+' €]] · 100 % = '+nz(R,1)+' %']}}});}
{const m=MI('org','Deckungsbeitrag & Gewinnschwelle');
C.push({f:'org',m,name:'Gewinnschwelle',gen:r=>{const kv=r.step(12,60,1),db=r.step(4,30,1),p=kv+db,x=r.step(20,120,5)*100,Kf=x*db;
 return{q:'Ein Produkt wird für '+nz(p,2)+' € je Stück verkauft. Die variablen Kosten betragen '+nz(kv,2)+' € je Stück, die Fixkosten '+nz(Kf,0)+' € pro Jahr. Ab welcher Menge arbeitet der Betrieb mit Gewinn?',a:x,u:'Stück',d:0,tol:0,
 sol:['db = p − k_v = '+nz(p,2)+' €/Stück − '+nz(kv,2)+' €/Stück = '+nz(db,2)+' €/Stück','x_BE = [[K_f||db]] = [['+nz(Kf,0)+' €||'+nz(db,2)+' €/Stück]] = '+nz(x,0)+' Stück']}}});
C.push({f:'org',m,name:'Zusatzauftrag bewerten',gen:r=>{const kv=r.step(10,40,1),pz=kv+r.p([-2,1,2,3,4,5]),x=r.step(5,40,5)*100,E=(pz-kv)*x;
 return{q:'Ein Kunde fragt '+nz(x,0)+' Stück zu je '+nz(pz,2)+' € an. Die variablen Kosten betragen '+nz(kv,2)+' € je Stück, Kapazität ist frei, die Fixkosten bleiben gleich. Um wie viel ändert sich das Betriebsergebnis, wenn Du annimmst (negativ = Verlust)?',a:E,u:'€',d:2,tol:.005,
 sol:['db = '+nz(pz,2)+' €/Stück − '+nz(kv,2)+' €/Stück = '+nz(pz-kv,2)+' €/Stück','Ergebnisänderung = '+nz(pz-kv,2)+' €/Stück · '+nz(x,0)+' Stück = '+nz(E,2)+' €',E>=0?'Annehmen: Der Auftrag verbessert das Ergebnis.':'Ablehnen: Der Preis liegt unter den variablen Kosten.']}}});}
{const m=MI('org','Plankosten & Abweichungen');
C.push({f:'org',m,name:'Verbrauchsabweichung',gen:r=>{const Bp=r.p([800,1000,1200,1600]),Kf=r.step(20,60,5)*1000,kv=r.step(20,60,5),Bi=Math.round(Bp*r.p([.7,.8,.85,.9,1.1])),Ist=Math.round((Kf+kv*Bi)*r.p([.94,.97,1.03,1.05,1.08])/100)*100,S=Kf+kv*Bi,V=Ist-S;
 return{q:'Kostenstelle Dreherei: Planbeschäftigung '+Bp+' h, fixe Plankosten '+nz(Kf,0)+' €, variable Plankosten '+nz(kv*Bp,0)+' €. Ist: '+Bi+' h und '+nz(Ist,0)+' € Kosten. Wie hoch ist die Verbrauchsabweichung (positiv = Mehrverbrauch)?',a:V,u:'€',d:0,tol:.005,
 sol:['variabler Satz = [['+nz(kv*Bp,0)+' €||'+Bp+' h]] = '+nz(kv,2)+' €/h','Sollkosten = '+nz(Kf,0)+' € + '+nz(kv,2)+' €/h · '+Bi+' h = '+nz(S,0)+' €','Verbrauchsabweichung = '+nz(Ist,0)+' € − '+nz(S,0)+' € = '+nz(V,0)+' €']}}});
C.push({f:'org',m,name:'Beschäftigungsabweichung',gen:r=>{const Bp=r.p([800,1000,1200]),Kf=r.step(20,60,5)*1000,kv=r.step(20,50,5),Bi=Math.round(Bp*r.p([.6,.7,.75,.8,.9])),Kp=Kf+kv*Bp,S=Kf+kv*Bi,vs=Kp/Bp,Vr=vs*Bi,B=S-Vr;
 return{q:'Plankosten '+nz(Kp,0)+' € bei '+Bp+' h, davon fix '+nz(Kf,0)+' €. Tatsächlich wurden nur '+Bi+' h gearbeitet. Wie hoch ist die Beschäftigungsabweichung?',a:B,u:'€',d:0,tol:0.002,
 sol:['Verrechnungssatz = [['+nz(Kp,0)+' €||'+Bp+' h]] = '+nz(vs,2)+' €/h','verrechnete Plankosten = '+nz(vs,2)+' €/h · '+Bi+' h = '+nz(Vr,0)+' €','Sollkosten = '+nz(Kf,0)+' € + '+nz(kv,2)+' €/h · '+Bi+' h = '+nz(S,0)+' €','Beschäftigungsabweichung = '+nz(S,0)+' € − '+nz(Vr,0)+' € = '+nz(B,0)+' €']}}});}
{const m=MI('tec','Instandhaltung & Wartung');
C.push({f:'tec',m,name:'MTBF, MTTR und Verfügbarkeit',gen:r=>{const n=r.i(4,20),Tb=r.step(1200,4000,100),Tr=r.step(8,80,2),mtbf=Tb/n,mttr=Tr/n,V=mtbf/(mtbf+mttr)*100;
 return{q:'Eine Fräsmaschine lief im Halbjahr '+nz(Tb,0)+' h und fiel dabei '+n+'-mal aus. Die Reparaturen dauerten zusammen '+Tr+' h. Wie hoch ist die technische Verfügbarkeit?',a:V,u:'%',d:2,tol:0.0005,
 sol:['MTBF = [['+nz(Tb,0)+' h||'+n+']] = '+nz(mtbf,1)+' h','MTTR = [['+Tr+' h||'+n+']] = '+nz(mttr,2)+' h','V = [['+nz(mtbf,1)+' h||'+nz(mtbf,1)+' h + '+nz(mttr,2)+' h]] · 100 % = '+nz(V,2)+' %']}}});
C.push({f:'tec',m,name:'Gesamtanlageneffektivität (OEE)',gen:r=>{const V=r.step(80,98,1),Lg=r.step(80,99,1),Q=r.step(90,99.5,0.5),O=V*Lg*Q/1e4;
 return{q:'Für eine Linie gelten: Verfügbarkeit '+V+' %, Leistungsgrad '+Lg+' %, Qualitätsrate '+nz(Q,1)+' %. Wie hoch ist die OEE?',a:O,u:'%',d:1,tol:0.002,
 sol:['OEE = V · L · Q','OEE = '+nz(V/100,2)+' · '+nz(Lg/100,2)+' · '+nz(Q/100,3)+' = '+nz(O/100,3),'OEE = '+nz(O,1)+' %']}}});}
{const m=MI('tec','Zustandsüberwachung & Schadensanalyse');
C.push({f:'tec',m,name:'Restlaufzeit aus dem Trend',gen:r=>{const g=r.p([4.5,7.1,11.2]),a=r.step(5,40,1)/100,v0=Math.round((g-a*r.step(4,30,1))*10)/10,t=(g-v0)/a;
 return{q:'Die Schwinggeschwindigkeit an einem Spindellager steigt gleichmäßig um '+nz(a,2)+' mm/s je Woche. Heute wurden '+nz(v0,1)+' mm/s gemessen, der Grenzwert liegt bei '+nz(g,1)+' mm/s. In wie vielen Wochen ist der Grenzwert erreicht?',a:t,u:'Wochen',d:1,tol:0.01,
 sol:['t_Rest = [[Grenzwert − aktueller Wert||Anstieg je Woche]]','t_Rest = [['+nz(g,1)+' mm/s − '+nz(v0,1)+' mm/s||'+nz(a,2)+' mm/s je Woche]] = '+nz(t,1)+' Wochen']}}});}
{const m=MI('tec','Zerspanung: Fräsen & Schleifen');
C.push({f:'tec',m,name:'Planfräsen: Hauptnutzungszeit',gen:r=>{const d=r.p([50,63,80,100,125]),z=r.p([4,5,6,8]),fz=r.p([0.08,0.1,0.12,0.15,0.2]),vc=r.step(120,260,10),l=r.step(200,800,50),n=vc*1000/(Math.PI*d),vf=fz*z*n,L=l+d+4,t=L/vf;
 return{q:'Eine Platte von '+l+' mm Länge wird mit einem Messerkopf d = '+d+' mm (z = '+z+') in einem Schnitt plangefräst. v_c = '+vc+' m/min, f_z = '+nt(fz)+' mm, An- und Überlauf zusammen 4 mm. Wie lange dauert der Schnitt?',a:t,u:'min',d:2,tol:0.01,
 sol:['n = [['+vc+' m/min · 1000 mm/m||π · '+d+' mm]] = '+nz(n,0)+' 1/min','v_f = f_z · z · n = '+nt(fz)+' mm · '+z+' · '+nz(n,0)+' 1/min = '+nz(vf,0)+' mm/min','L = '+l+' mm + '+d+' mm + 4 mm = '+L+' mm','t_h = [['+L+' mm||'+nz(vf,0)+' mm/min]] = '+nz(t,2)+' min']}}});
C.push({f:'tec',m,name:'Schleifscheibe: zulässige Drehzahl',gen:r=>{const d=r.p([150,175,200,250,300,350,400]),vz=r.p([35,40,50,63]),n=vz*60000/(Math.PI*d);
 return{q:'Auf einer Schleifscheibe mit d = '+d+' mm steht als Höchstgeschwindigkeit '+vz+' m/s. Welche Drehzahl darf die Spindel höchstens haben?',a:Math.floor(n),u:'1/min',d:0,tol:0.003,
 sol:['n = [[v_c||π · d]]','n = [['+vz+' m/s · 1000 mm/m · 60 s/min||π · '+d+' mm]] = '+nz(n,0)+' 1/min','Die Spindel darf höchstens '+nz(Math.floor(n),0)+' 1/min drehen.']}}});}
{const m=MI('tec','Pneumatik & Vakuumtechnik');
C.push({f:'tec',m,name:'Kraft eines Pneumatikzylinders',gen:r=>{const D=r.p([25,32,40,50,63,80,100]),p=r.step(4,8,0.5),eta=r.p([0.85,0.9,0.95]),A=Math.PI*(D/10)**2/4,F=p*10*A*eta;
 return{q:'Ein Pneumatikzylinder mit D = '+D+' mm wird mit '+nt(p,1)+' bar Überdruck betrieben. Wirkungsgrad η = '+nt(eta)+'. Welche Kraft gibt er beim Ausfahren ab?',a:F,u:'N',d:0,tol:0.005,
 sol:['A = [[π · D²||4]] = [[π · ('+nt(D/10,1)+' cm)²||4]] = '+nz(A,2)+' cm²','p_e = '+nt(p,1)+' bar = '+nz(p*10,0)+' N/cm²','F = p_e · A · η = '+nz(p*10,0)+' N/cm² · '+nz(A,2)+' cm² · '+nt(eta)+' = '+nz(F,0)+' N']}}});
C.push({f:'tec',m,name:'Luftverbrauch eines Zylinders',gen:r=>{const D=r.p([32,40,50,63]),s=r.step(50,300,25),p=r.p([5,6,7]),n=r.step(6,30,2),A=Math.PI*(D/10)**2/4,V=A*s/10*(p+1)/1000,Q=V*n;
 return{q:'Ein einfachwirkender Zylinder (D = '+D+' mm, Hub '+s+' mm) arbeitet mit '+p+' bar Überdruck und macht '+n+' Hübe pro Minute. Wie viel angesaugte Luft verbraucht er pro Minute?',a:Q,u:'l/min',d:2,tol:0.005,
 sol:['A = [[π · ('+nt(D/10,1)+' cm)²||4]] = '+nz(A,2)+' cm²','V_Hub = A · s = '+nz(A,2)+' cm² · '+nt(s/10,1)+' cm = '+nz(A*s/10,1)+' cm³','V = '+nz(A*s/10,1)+' cm³ · [['+p+' bar + 1 bar||1 bar]] = '+nz(V*1000,0)+' cm³ = '+nz(V,3)+' l','Q = '+nz(V,3)+' l · '+n+' 1/min = '+nz(Q,2)+' l/min']}}});
C.push({f:'tec',m,name:'Kosten einer Leckage',gen:r=>{const q=r.step(100,800,50),h=r.p([4000,6000,8760]),pr=r.p([0.02,0.025,0.03]),Vh=q*60/1000,K=Vh*h*pr;
 return{q:'Im Druckluftnetz gehen durch Leckagen '+q+' l/min verloren. Das Netz steht '+nz(h,0)+' h im Jahr unter Druck, 1 m³ Druckluft kostet '+nz(pr,3)+' €. Wie hoch sind die Leckagekosten pro Jahr?',a:K,u:'€',d:2,tol:0.003,
 sol:['Leckage = '+q+' l/min · 60 min/h = '+nz(q*60,0)+' l/h = '+nz(Vh,1)+' m³/h','Kosten = '+nz(Vh,1)+' m³/h · '+nz(h,0)+' h · '+nz(pr,3)+' €/m³ = '+nz(K,2)+' €']}}});}
{const m=MI('tec','Antriebe & Getriebe');
C.push({f:'tec',m,name:'Abtriebsdrehzahl und -moment',gen:r=>{const P=r.p([2.2,3,4,5.5,7.5,11]),n1=r.p([1450,1440,960,2900]),i=r.p([5,8,10,12.5,16,20,25]),eta=r.p([0.9,0.92,0.94,0.96]),M1=9550*P/n1,n2=n1/i,M2=M1*i*eta;
 return{q:'Ein Motor mit '+nt(P,1)+' kW und '+n1+' 1/min treibt über ein Getriebe mit i = '+nt(i,1)+' (η = '+nt(eta)+') eine Welle an. Welches Drehmoment steht an der Abtriebswelle zur Verfügung?',a:M2,u:'N·m',d:1,tol:0.005,
 sol:['M_an = [[9550 · P||n]] = [[9550 · '+nt(P,1)+' kW||'+n1+' 1/min]] = '+nz(M1,2)+' N·m','n_ab = [[n_an||i]] = [['+n1+' 1/min||'+nt(i,1)+']] = '+nz(n2,1)+' 1/min','M_ab = M_an · i · η = '+nz(M1,2)+' N·m · '+nt(i,1)+' · '+nt(eta)+' = '+nz(M2,1)+' N·m']}}});
C.push({f:'tec',m,name:'Riementrieb',gen:r=>{const d1=r.p([80,90,100,112,125,140]),d2=r.p([180,200,224,250,280,315]),n1=r.p([1450,2900,960]),n2=n1*d1/d2;
 return{q:'Ein Motor mit '+n1+' 1/min treibt über einen Riementrieb an: treibende Scheibe d_1 = '+d1+' mm, getriebene Scheibe d_2 = '+d2+' mm. Welche Drehzahl hat die getriebene Welle (Schlupf vernachlässigt)?',a:n2,u:'1/min',d:0,tol:0.003,
 sol:['i = [[d_2||d_1]] = [['+d2+' mm||'+d1+' mm]] = '+nz(d2/d1,2),'n_2 = [[n_1||i]] = [['+n1+' 1/min||'+nz(d2/d1,2)+']] = '+nz(n2,0)+' 1/min']}}});
C.push({f:'tec',m,name:'Nötige Motorleistung',gen:r=>{const Pab=r.step(2,12,0.5),e1=r.p([0.95,0.96,0.97,0.98]),e2=r.p([0.9,0.94,0.96]),e3=r.p([0.95,0.97,0.98]),eg=e1*e2*e3,P=Pab/eg;
 return{q:'Ein Förderband braucht an der Antriebstrommel '+nt(Pab,1)+' kW. Dazwischen liegen Kupplung (η = '+nt(e1)+'), Getriebe (η = '+nt(e2)+') und Kettentrieb (η = '+nt(e3)+'). Welche Leistung muss der Motor mindestens abgeben?',a:P,u:'kW',d:2,tol:0.005,
 sol:['η_ges = '+nt(e1)+' · '+nt(e2)+' · '+nt(e3)+' = '+nz(eg,3),'P_Motor = [[P_ab||η_ges]] = [['+nt(Pab,1)+' kW||'+nz(eg,3)+']] = '+nz(P,2)+' kW']}}});}

/* ---------- Fachgespräch: weitere Fragen zu F1 ---------- */
ORAL.push(['fp','Ein Mitarbeiter schafft eine delegierte Aufgabe nicht. Wie reagierst Du?','Ursache im Gespräch klären (Können, Wollen, Rahmen, Befugnisse), nachsteuern statt die Aufgabe sofort zurückzunehmen, Unterstützung anbieten, Zwischenziel vereinbaren, eigene Auswahl und Anleitung kritisch prüfen.'],
['fp','Ein sonst engagierter Mitarbeiter wirkt seit Wochen lustlos. Was tust Du?','Beobachtungen sammeln, ein ruhiges Vier-Augen-Gespräch anbieten, offen nachfragen statt zu unterstellen, private Gründe respektieren, Hindernisse in der Arbeit beseitigen, Aufgaben oder Verantwortung anpassen, Folgetermin vereinbaren.'],
['fp','Wann ist ein autoritärer Führungsstil richtig?','In Notlagen und bei Gefahr, wenn schnell und eindeutig gehandelt werden muss, oder bei neuen Mitarbeitern ohne Erfahrung für klare Anweisungen. Danach wieder einbeziehen und erklären.']);
/* Mustermodule aus Vorschau 1: je eine vierte Check-Frage */
D.org.modules.find(x=>x.t==='Maschinenstundensatz').mcq.push(['Fixe Maschinenkosten 48 000 € pro Jahr, Energie 3 € je Stunde, 1600 Laufstunden. Wie hoch ist der Maschinenstundensatz?','33,00 €/h','30,00 €/h','30,19 €/h','51,00 €/h','48 000 € ÷ 1600 h = 30,00 €/h, dazu 3,00 €/h Energie: 33,00 €/h.']);
D.org.modules.find(x=>x.t==='Kostenvergleich & kritische Menge').mcq.push(['Fremdbezug kostet 12 € je Stück. Selbst gefertigt: 40 000 € fix pro Jahr und 7 € je Stück. Ab welcher Menge lohnt sich die Eigenfertigung?','ab 8000 Stück','ab 3333 Stück','ab 5714 Stück','ab 2105 Stück','x = 40 000 € ÷ (12 €/Stück − 7 €/Stück) = 8000 Stück.']);
