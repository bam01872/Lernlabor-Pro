/* ===== Lernlabor Pro, Pakete C3 und C4: Chemie, Chemische Prozesse & Verfahren, Prozessleittechnik. Eigene Texte und Aufgaben.
   Stoffwerte, Grenzwerte und Kennbuchstaben sind Rechen- und Beispielwerte. Maßgeblich sind Sicherheitsdatenblatt, Betriebsanweisung und die aktuelle Norm. ===== */
if(FR==='ch'){
TM({t:'Stöchiometrie & Stoffbilanz',intro:'Die Reaktionsgleichung sagt, in welchem Verhältnis Stoffe reagieren. Mit Stoffmenge und molarer Masse machst Du daraus Kilogramm für den Ansatz und prüfst mit der Massenbilanz, ob am Ende nichts fehlt.',
pts:['Die Reaktionsgleichung gibt das Verhältnis der Stoffmengen an, nicht der Massen. Über die molare Masse rechnest Du in Kilogramm um.',
'Massenbilanz: Was in die Anlage hineingeht, kommt als Produkt, Nebenprodukt, Abfall oder Abluft wieder heraus oder bleibt als Bestand drin. Eine Bilanzlücke ist ein Hinweis auf Messfehler oder Verluste.',
'Meist wird ein Einsatzstoff im Überschuss gefahren. Der andere begrenzt, wie viel Produkt höchstens entstehen kann.',
'Gehaltsangaben: Massenanteil w in Prozent, Stoffmengenkonzentration c in [[mol||l]]. Technische Einsatzstoffe sind selten 100-prozentig, der Gehalt gehört in jede Ansatzrechnung.',
'Beim Verdünnen und Mischen bleibt die Masse des gelösten Stoffs erhalten. Säure wird immer ins Wasser gegeben, nie umgekehrt, weil die Mischung heiß wird.'],
fo:['Stoffmenge: n = [[m||M]] mit der molaren Masse M in [[g||mol]] oder [[kg||kmol]].',
'Massenverhältnis aus der Gleichung a A + b B: [[m_B||m_A]] = [[b · M_B||a · M_A]].',
'Massenanteil: w = [[m_gelöst||m_Lösung]] · 100 %.',
'Mischungsgleichung: m_1 · w_1 + m_2 · w_2 = (m_1 + m_2) · w_M.',
'Technischer Einsatzstoff: m_technisch = [[m_rein||w]].'],
mcq:[['Was gibt die Reaktionsgleichung direkt an?','Das Verhältnis der Stoffmengen','Das Verhältnis der Massen','Die Reaktionsgeschwindigkeit','Den Preis der Einsatzstoffe','Erst mit den molaren Massen wird daraus ein Massenverhältnis.'],
['Ein Ansatz braucht 80 kg reine Natronlauge. Geliefert wird 50-prozentige Lauge. Wie viel wiegst Du ein?','160 kg','40 kg','80 kg','130 kg','80 kg ÷ 0,5 = 160 kg.'],
['Was begrenzt die höchste mögliche Produktmenge?','Der Einsatzstoff, der zuerst verbraucht ist','Der Einsatzstoff im Überschuss','Das Lösemittel','Die Rührerdrehzahl','Vom Überschuss bleibt ein Rest übrig.'],
['Wie verdünnst Du konzentrierte Schwefelsäure richtig?','Säure langsam ins Wasser geben','Wasser schnell in die Säure geben','Beides gleichzeitig in den Behälter kippen','Egal, Hauptsache rühren','Die Mischung wird heiß. Gibt man Wasser in Säure, kann es schlagartig verdampfen und spritzen.']]});

TM({t:'Reaktionstechnik: Umsatz & Ausbeute',intro:'Wie viel vom Einsatzstoff reagiert, und wie viel davon wird wirklich zum gewünschten Produkt? Mit Umsatz, Selektivität und Ausbeute beurteilst Du eine Charge und erkennst, an welcher Schraube Du drehen musst.',
pts:['Umsatz: Welcher Anteil des Einsatzstoffs hat reagiert? Selektivität: Welcher Anteil davon wurde zum gewünschten Produkt? Ausbeute: beides zusammen.',
'Temperatur beschleunigt Reaktionen stark. Als Faustregel verdoppelt bis verdreifacht sich die Geschwindigkeit je 10 K. Das gilt auch für unerwünschte Nebenreaktionen.',
'Exotherme Reaktionen geben Wärme ab. Fällt die Kühlung aus, steigt die Temperatur, die Reaktion wird schneller und liefert noch mehr Wärme: Die Reaktion kann durchgehen.',
'Schutz vor dem Durchgehen: Einsatzstoff dosieren statt alles vorlegen, Dosierung an Temperatur und Rührer verriegeln, Notkühlung, Reaktionsstopper, Druckentlastung.',
'Reaktortypen: Rührkessel im Chargenbetrieb (flexibel), kontinuierlicher Rührkessel (gleichmäßige Qualität), Rohrreaktor (hoher Umsatz, gute Wärmeabfuhr).',
'Katalysatoren beschleunigen die Reaktion, ohne verbraucht zu werden. Sie verändern nicht die Lage des Gleichgewichts.'],
fo:['Umsatz: U = [[n_0 − n||n_0]] · 100 %.',
'Selektivität: S = [[zum Produkt umgesetzte Stoffmenge||insgesamt umgesetzte Stoffmenge]] · 100 %.',
'Ausbeute: A = U · S (als Dezimalzahlen multiplizieren).',
'Mittlere Verweilzeit im kontinuierlichen Reaktor: τ = [[V_R||V̇]].'],
mcq:[['Umsatz 90 %, Selektivität 80 %. Wie groß ist die Ausbeute?','72 %','170 %','85 %','10 %','A = 0,9 · 0,8 = 0,72.'],
['Bei einer exothermen Reaktion fällt der Rührer aus. Was ist die größte Gefahr?','Nicht umgesetzter Einsatzstoff sammelt sich an und reagiert später schlagartig','Das Produkt wird zu kalt','Der Katalysator wird verbraucht','Die Ausbeute steigt zu stark','Deshalb wird die Dosierung mit dem Rührer verriegelt.'],
['Was bewirkt ein Katalysator?','Er beschleunigt die Reaktion','Er verschiebt das Gleichgewicht zum Produkt','Er wird als Einsatzstoff verbraucht','Er senkt die Temperatur','Das Gleichgewicht stellt sich schneller ein, seine Lage bleibt gleich.'],
['Warum wird bei stark exothermen Reaktionen ein Einsatzstoff langsam dosiert?','Damit nur so viel Wärme entsteht, wie die Kühlung abführen kann','Damit die Pumpe geschont wird','Weil die Waage sonst nicht nachkommt','Um Lösemittel zu sparen','Die Dosiergeschwindigkeit bestimmt die Wärmeleistung der Reaktion.']]});

TM({t:'Prozesskontrolle & Analytik',intro:'Ob eine Charge gut ist, entscheidet nicht das Gefühl, sondern die Analyse gegen die Spezifikation. Du organisierst Probenahme und Inprozesskontrolle und entscheidest bei Abweichungen, was mit dem Produkt geschieht.',
pts:['Inprozesskontrollen prüfen während der Herstellung, ob der Prozess im Soll läuft: pH-Wert, Dichte, Temperatur, Umsatz. So lässt sich noch eingreifen, bevor die Charge fertig ist.',
'Die Probe muss für die ganze Charge stehen: festgelegte Stelle, vorher spülen, sauberes Gefäß, sofort beschriften (Produkt, Charge, Datum, Uhrzeit, Name). Ein Rückstellmuster wird aufbewahrt.',
'Online-Messungen (pH, Leitfähigkeit, Dichte) liefern laufend Werte, Laboranalysen (Titration, Chromatografie, Wasserbestimmung) sind genauer, brauchen aber Zeit.',
'Die Spezifikation legt für jedes Merkmal Grenzen fest. Liegt ein Wert außerhalb, wird die Charge gesperrt. Dann: Messung prüfen, Ursache suchen, über Nacharbeit, Verschnitt oder Entsorgung entscheiden.',
'Messgeräte werden regelmäßig kalibriert, pH-Sonden mit Pufferlösungen. Ein falscher Messwert ist schlimmer als keiner.',
'Dokumentiert wird sofort, lesbar und vollständig. Was nicht dokumentiert ist, gilt als nicht gemacht.'],
fo:['Titration (einwertige Säure und Base): c_1 · V_1 = c_2 · V_2.',
'pH-Wert: pH = −lg c(H⁺) mit c in [[mol||l]]. Eine Einheit weniger bedeutet zehnfache Säurekonzentration.'],
mcq:[['Wozu dient ein Rückstellmuster?','Bei Reklamationen kann die Charge nachgeprüft werden','Es ersetzt die Analyse','Es wird dem Kunden mitgegeben','Es dient als Reserve für die nächste Charge','Es wird für eine festgelegte Zeit beschriftet aufbewahrt.'],
['Ein Analysenwert liegt knapp außerhalb der Spezifikation. Was tust Du zuerst?','Charge sperren und die Messung überprüfen lassen','Charge freigeben, es ist ja nur knapp','Den Wert im Protokoll anpassen','Die Spezifikation ändern','Erst wenn der Wert bestätigt ist, wird über Nacharbeit oder Verschnitt entschieden.'],
['Der pH-Wert sinkt von 5 auf 3. Wie ändert sich die Säurekonzentration?','Sie wird hundertmal so groß','Sie verdoppelt sich','Sie sinkt auf ein Hundertstel','Sie steigt um 40 %','Jede pH-Einheit ist ein Faktor 10.'],
['Womit wird eine pH-Sonde kalibriert?','Mit Pufferlösungen bekannter pH-Werte','Mit destilliertem Wasser','Mit dem Produkt selbst','Gar nicht, sie ist wartungsfrei','Meist mit zwei Puffern, die den Messbereich einschließen.']]});

TM({t:'Stoffe bewerten & Explosionsschutz',intro:'Bevor ein Stoff in die Anlage kommt, musst Du wissen, was er anrichten kann. Du liest die Kenngrößen aus dem Sicherheitsdatenblatt und leitest ab, wie eine explosionsfähige Atmosphäre verhindert wird.',
pts:['Das Sicherheitsdatenblatt hat 16 Abschnitte. Für den Betrieb besonders wichtig: Gefahren (2), Erste Hilfe (4), Handhabung und Lagerung (7), Schutzausrüstung (8), physikalische Daten (9), Stabilität (10).',
'Flammpunkt: niedrigste Temperatur, bei der sich über der Flüssigkeit ein entzündbares Dampf-Luft-Gemisch bildet. Zündtemperatur: Temperatur einer heißen Oberfläche, an der sich das Gemisch von selbst entzündet.',
'Explosionsgrenzen: Nur zwischen unterer (UEG) und oberer Explosionsgrenze (OEG) ist das Gemisch zündfähig. Darunter ist es zu mager, darüber zu fett.',
'Eine Explosion braucht drei Dinge zugleich: brennbaren Stoff in feiner Verteilung, Sauerstoff, Zündquelle. Fehlt eines, passiert nichts.',
'Rangfolge im Explosionsschutz: erstens explosionsfähige Atmosphäre vermeiden (geschlossene Anlage, Inertisieren, Lüften), zweitens Zündquellen vermeiden (geeignete Geräte, Erden), drittens Auswirkungen begrenzen (druckfeste Bauweise, Druckentlastung).',
'Zonen beschreiben, wie oft explosionsfähige Atmosphäre auftritt: Zone 0 ständig oder häufig, Zone 1 gelegentlich, Zone 2 selten und kurz. Für Stäube entsprechend 20, 21, 22.',
'Elektrostatische Aufladung ist eine häufig übersehene Zündquelle. Deshalb: leitfähige Behälter und Schläuche, alles erden, beim Umfüllen Potenzialausgleich herstellen.'],
mcq:[['Was sagt der Flammpunkt aus?','Ab dieser Temperatur bildet die Flüssigkeit zündfähige Dämpfe','Bei dieser Temperatur entzündet sich der Stoff von selbst','Bei dieser Temperatur siedet der Stoff','Bei dieser Temperatur erstarrt der Stoff','Zur Zündung braucht es dann noch eine Zündquelle.'],
['Welche Maßnahme steht im Explosionsschutz an erster Stelle?','Explosionsfähige Atmosphäre vermeiden','Zündquellen vermeiden','Druckentlastung einbauen','Warnschilder aufhängen','Erst wenn das nicht sicher gelingt, kommen Zündquellen und Auswirkungen an die Reihe.'],
['In welcher Zone ist ständig oder häufig mit explosionsfähiger Atmosphäre zu rechnen?','Zone 0','Zone 1','Zone 2','Zone 22','Zum Beispiel das Innere eines Lösemitteltanks.'],
['Warum wird ein Fass beim Umfüllen geerdet?','Um elektrostatische Aufladung abzuleiten','Damit es nicht umfällt','Um den Füllstand zu messen','Um das Lösemittel zu kühlen','Strömende Flüssigkeiten laden sich auf. Ein Funke kann die Dämpfe zünden.']]});

TM({t:'R&I-Fließbilder lesen',intro:'Das Rohrleitungs- und Instrumentenfließbild ist der Stadtplan der Anlage. Du findest darin jede Armatur und jede Messstelle und liest an den Kennbuchstaben ab, was gemessen wird und was die Messung auslöst.',
pts:['Drei Stufen: Das Grundfließbild zeigt die Verfahrensschritte als Kästen, das Verfahrensfließbild die Apparate mit Stoffströmen, das R&I-Fließbild zusätzlich alle Rohrleitungen, Armaturen und Messstellen.',
'Eine Messstelle wird als Kreis oder Langrund gezeichnet. Der erste Buchstabe nennt die Messgröße: T Temperatur, P Druck, F Durchfluss, L Füllstand, Q Qualität (zum Beispiel pH).',
'Die Folgebuchstaben nennen die Verarbeitung: I Anzeige, R Aufzeichnung, C Regelung, A Alarm, S Schaltung, Z Schutzfunktion. Dazu H für oberen und L für unteren Grenzwert.',
'Beispiele: TIC ist eine Temperaturregelung mit Anzeige. LAH meldet einen hohen Füllstand. Ältere Pläne verwenden zum Teil andere Schreibweisen, deshalb immer die Legende lesen.',
'Ein Strich im Kreis bedeutet: Bedienung und Anzeige in der Leitwarte. Ohne Strich: Anzeige vor Ort.',
'Bei Stellventilen ist die Sicherheitsstellung eingetragen: Was macht das Ventil, wenn die Hilfsenergie ausfällt? Ein Kühlwasserventil öffnet, ein Dampfventil schließt.'],
mcq:[['Was bedeutet die Messstelle FIC?','Durchfluss mit Anzeige und Regelung','Füllstand mit Alarm','Temperatur mit Aufzeichnung','Druck mit Schaltung','F Durchfluss, I Anzeige, C Regelung.'],
['Welches Fließbild zeigt alle Armaturen und Messstellen?','R&I-Fließbild','Grundfließbild','Verfahrensfließbild','Lageplan','Es ist die Grundlage für Bau, Betrieb und Instandhaltung.'],
['Welche Sicherheitsstellung hat ein Dampfventil an einem Reaktor sinnvollerweise?','Bei Energieausfall geschlossen','Bei Energieausfall offen','Es bleibt, wie es gerade steht','Das ist beliebig','Ohne Hilfsenergie soll keine Wärme mehr in den Reaktor kommen.'],
['Woran erkennst Du, dass eine Messung in der Leitwarte angezeigt wird?','Am waagerechten Strich im Symbol','Am Buchstaben L','An der roten Farbe','Am Quadrat um die Armatur','Ohne Strich ist es eine Anzeige vor Ort.']]});

TM({t:'Messtechnik: Druck, Temperatur, Durchfluss, Füllstand',intro:'Was nicht gemessen wird, kann nicht geführt werden. Du kennst die Messprinzipien für die vier wichtigsten Größen, wählst das passende Gerät für das Medium und erkennst unplausible Messwerte.',
pts:['Druck: Überdruck ist auf den Luftdruck bezogen, Absolutdruck auf das Vakuum. Der Differenzdruck zeigt zum Beispiel, wie stark ein Filter zugesetzt ist.',
'Temperatur: Widerstandsthermometer (Pt100) sind genau, Thermoelemente halten hohe Temperaturen aus. Das Schutzrohr macht die Messung träger.',
'Durchfluss: Die Blende misst über den Druckabfall, das magnetisch-induktive Gerät braucht eine leitfähige Flüssigkeit, das Coriolis-Gerät misst direkt die Masse und zusätzlich die Dichte.',
'Füllstand: hydrostatisch über den Bodendruck, Radar berührungslos von oben, Schwinggabel als Grenzschalter für die Überfüllsicherung.',
'Messwerte werden meist als 4 bis 20 mA übertragen. 0 mA bedeutet Drahtbruch.',
'Plausibilität prüfen: Passt der Füllstand zur dosierten Menge? Passen Druck und Temperatur zum Siedeverhalten? Zwei unabhängige Messungen, die sich widersprechen, sind ein Warnsignal.'],
fo:['Absolutdruck: p_abs = p_ü + p_amb.',
'Hydrostatischer Druck: p = ρ · g · h, umgestellt: h = [[p||ρ · g]]. Hinweis: 1 mbar = 100 Pa.',
'Blende: Der Durchfluss wächst mit der Wurzel des Druckabfalls: [[V̇_2||V̇_1]] = √[[Δp_2||Δp_1]].'],
mcq:[['Welches Durchflussmessgerät misst direkt die Masse?','Coriolis-Messgerät','Blende','Magnetisch-induktives Gerät','Schwebekörper','Es ist unabhängig von Dichte und Temperatur und deshalb für Dosierungen beliebt.'],
['Ein magnetisch-induktives Gerät soll ein reines Lösemittel messen und zeigt nichts an. Warum?','Das Medium ist nicht leitfähig','Das Rohr ist zu groß','Die Temperatur ist zu niedrig','Das Gerät ist zu genau','Das Messprinzip braucht eine Mindestleitfähigkeit.'],
['Ein Manometer zeigt 2 bar Überdruck. Wie groß ist der Absolutdruck etwa?','3 bar','2 bar','1 bar','0 bar','p_abs = 2 bar + 1 bar Luftdruck.'],
['Die hydrostatische Füllstandmessung zeigt nach einem Produktwechsel falsch an. Was ist die wahrscheinliche Ursache?','Die Dichte des neuen Produkts ist anders','Der Tank ist größer geworden','Der Luftdruck hat sich verdoppelt','Das Kabel ist zu lang','Der Bodendruck hängt von Höhe und Dichte ab. Die Dichte muss im Messumformer stimmen.']]});

TM({t:'Regelungstechnik im Prozess',intro:'In einer Chemieanlage laufen Dutzende Regelkreise gleichzeitig. Du kennst den Aufbau des Regelkreises, die typischen Regelungen für Durchfluss, Füllstand und Temperatur und verstehst, warum manche Aufgaben zwei Regler brauchen.',
pts:['Regelkreis: Der Regler vergleicht Sollwert (w) und Istwert (x) und verstellt über die Stellgröße (y) das Ventil. Störgrößen (z) sind zum Beispiel schwankender Vordruck oder wechselnde Zulauftemperatur.',
'P-Anteil reagiert sofort, lässt aber eine Abweichung. Der I-Anteil beseitigt sie. Der D-Anteil hilft bei trägen Temperaturstrecken und stört bei unruhigen Signalen.',
'Durchfluss- und Druckregelungen sind schnell. Temperaturregelungen sind träge und haben Totzeit. pH-Regelungen sind schwierig, weil die Kennlinie nahe am Neutralpunkt sehr steil ist.',
'Kaskadenregelung: Ein Führungsregler (Reaktortemperatur) gibt einem schnellen Folgeregler (Manteltemperatur) den Sollwert vor. Störungen im Heizkreis werden abgefangen, bevor der Reaktor sie merkt.',
'Verhältnisregelung: Ein Strom wird im festen Verhältnis zu einem anderen dosiert, zum Beispiel Lauge zu Säure.',
'Split-Range: Ein Regler bedient zwei Ventile, zum Beispiel Heizen und Kühlen an einem Reaktor.',
'In Hand gefahrene Regler sind ein Warnsignal. Du klärst, warum der Regler in Automatik nicht zufriedenstellend läuft.'],
fo:['Regeldifferenz: e = w − x. P-Regler: y = K_P · e.',
'Verhältnisregelung: V̇_B = k · V̇_A.',
'Durchfluss durch ein Stellventil (Wasser): V̇ = K_v · √[[Δp||1 bar]] mit K_v in [[m³||h]].'],
mcq:[['Wozu dient eine Kaskadenregelung?','Störungen im inneren Kreis werden schnell ausgeregelt','Sie spart ein Ventil','Sie ersetzt die Messung','Sie macht den Regler langsamer','Der innere Kreis ist schneller als der äußere und hält ihm den Rücken frei.'],
['Welche Regelung ist typischerweise am trägsten?','Temperaturregelung','Durchflussregelung','Druckregelung in Gasleitungen','Drehzahlregelung','Wärme muss erst durch Wände und Produkt wandern.'],
['Lauge soll immer im Verhältnis 0,4 zur Säure dosiert werden. Die Säure läuft mit 500 kg/h. Wie viel Lauge?','200 kg/h','1250 kg/h','900 kg/h','100 kg/h','0,4 · 500 kg/h = 200 kg/h.'],
['Ein Regler steht seit Wochen auf Hand. Was bedeutet das?','Die Regelung funktioniert in Automatik nicht zufriedenstellend, die Ursache muss geklärt werden','Das ist der Normalfall','Der Regler ist dann genauer','Es spart Energie','Mögliche Ursachen: falsche Einstellung, klemmendes Ventil, gestörte Messung.']]});

TM({t:'Prozessleitsystem & Schutzeinrichtungen',intro:'Das Prozessleitsystem ist das Fenster zur Anlage, die Schutzeinrichtungen sind ihr Sicherheitsnetz. Du kennst die Ebenen, die eine Störung aufhalten, und sorgst dafür, dass Alarme ernst genommen und Verriegelungen nicht überbrückt werden.',
pts:['Das Prozessleitsystem (PLS) erfasst Messwerte, regelt, steuert Abläufe und Rezepte, zeigt Fließbilder, meldet Alarme und archiviert Trends. Bedient wird aus der Leitwarte.',
'Schutzebenen bauen aufeinander auf: erstens die Regelung hält den Prozess im Soll, zweitens ein Alarm fordert den Bediener zum Eingreifen auf, drittens die PLT-Schutzeinrichtung schaltet selbsttätig ab, viertens Sicherheitsventil oder Berstscheibe entlasten, fünftens Auffangräume begrenzen den Schaden.',
'PLT-Schutzeinrichtungen arbeiten unabhängig vom Leitsystem mit eigenen Sensoren und Aktoren. Ihre geforderte Zuverlässigkeit wird als SIL 1 bis SIL 4 angegeben.',
'Jeder Alarm braucht eine festgelegte Handlung. Zu viele Alarme (Alarmflut) führen dazu, dass wichtige Meldungen untergehen. Daueralarme werden beseitigt, nicht weggedrückt.',
'Verriegelungen und Schutzeinrichtungen werden nur mit schriftlicher Freigabe, befristet und mit Ersatzmaßnahme überbrückt. Jede Überbrückung steht im Schichtbuch.',
'Schutzeinrichtungen, Sicherheitsventile und Überfüllsicherungen werden wiederkehrend geprüft und dokumentiert.'],
mcq:[['Was unterscheidet eine PLT-Schutzeinrichtung von einer normalen Regelung?','Sie arbeitet unabhängig und bringt die Anlage selbsttätig in den sicheren Zustand','Sie ist billiger','Sie wird vom Bediener ausgelöst','Sie zeichnet nur Daten auf','Sie greift erst ein, wenn Regelung und Bediener die Störung nicht aufgehalten haben.'],
['In der Leitwarte stehen dauerhaft 40 Alarme an. Was ist das Problem?','Wichtige neue Alarme gehen in der Menge unter','Das Leitsystem wird langsamer','Der Stromverbrauch steigt','Es gibt keines','Ziel ist: Jeder Alarm ist selten, wichtig und mit einer Handlung verbunden.'],
['Unter welchen Bedingungen darf eine Schutzeinrichtung überbrückt werden?','Mit schriftlicher Freigabe, befristet und mit Ersatzmaßnahme','Wenn sie häufig auslöst','Wenn die Schicht es eilig hat','Nie dokumentiert','Die Überbrückung wird ins Schichtbuch eingetragen und übergeben.'],
['Welche Schutzebene wirkt rein mechanisch?','Sicherheitsventil oder Berstscheibe','Die Regelung','Der Alarm','Das Rezept','Sie braucht keine Hilfsenergie und ist die letzte Ebene vor der Rückhaltung.']]});

{const tec='tec';
{const m=MI(tec,'Stöchiometrie & Stoffbilanz');
C.push({f:tec,m,name:'Neutralisation: Natronlauge für Salzsäure',gen:r=>{const mh=r.step(50,400,25),wn=r.p([20,32,50]),mn=mh*40/36.5,mt=mn/(wn/100);
 return{q:'In einem Abwasserbehälter sind '+mh+' kg Chlorwasserstoff (HCl, M = 36,5 g/mol) gelöst. Sie werden mit Natronlauge (NaOH, M = 40 g/mol) neutralisiert: HCl + NaOH → NaCl + H₂O. Wie viel '+wn+'-prozentige Natronlauge brauchst Du?',a:mt,u:'kg',d:0,tol:0.01,
 sol:['Stoffmengen 1 zu 1, also [[m_NaOH||m_HCl]] = [[40||36,5]]','m_NaOH = '+mh+' kg · [[40||36,5]] = '+nz(mn,1)+' kg reines NaOH','m_Lauge = [['+nz(mn,1)+' kg||'+nt(wn/100)+']] = '+nz(mt,0)+' kg']}}});
C.push({f:tec,m,name:'Lösung verdünnen',gen:r=>{const w1=r.p([50,60,96]),w2=r.p([10,15,20,25]),m2=r.step(500,3000,250),m1=m2*w2/w1,mw=m2-m1;
 return{q:'Du brauchst '+m2+' kg einer '+w2+'-prozentigen Lösung. Vorhanden ist '+w1+'-prozentige Ware. Wie viel Wasser legst Du vor?',a:mw,u:'kg',d:0,tol:0.01,
 sol:['Der gelöste Stoff bleibt erhalten: m_1 · w_1 = m_2 · w_2','m_1 = [['+m2+' kg · '+nt(w2/100)+'||'+nt(w1/100)+']] = '+nz(m1,0)+' kg konzentrierte Ware','Wasser = '+m2+' kg − '+nz(m1,0)+' kg = '+nz(mw,0)+' kg']}}});
C.push({f:tec,m,name:'Stoffmenge',gen:r=>{const s=r.p([['Natriumhydroxid (NaOH)',40],['Schwefelsäure (H₂SO₄)',98],['Ethanol (C₂H₆O)',46],['Calciumcarbonat (CaCO₃)',100]]),ms=r.step(100,900,50),n=ms/s[1];
 return{q:'Wie groß ist die Stoffmenge von '+ms+' kg '+s[0]+' mit M = '+s[1]+' kg/kmol?',a:n,u:'kmol',d:2,tol:0.01,
 sol:['n = [[m||M]] = [['+ms+' kg||'+s[1]+' kg/kmol]] = '+nz(n,2)+' kmol']}}});}
{const m=MI(tec,'Reaktionstechnik: Umsatz & Ausbeute');
C.push({f:tec,m,name:'Ausbeute aus Umsatz und Selektivität',gen:r=>{const U=r.step(70,98,2),S=r.step(75,97,2),A=U*S/100;
 return{q:'Eine Charge erreicht '+U+' % Umsatz bei '+S+' % Selektivität. Wie groß ist die Ausbeute?',a:A,u:'%',d:1,tol:0.005,
 sol:['A = U · S','A = '+nt(U/100)+' · '+nt(S/100)+' = '+nz(A/100,3)+' = '+nz(A,1)+' %']}}});
C.push({f:tec,m,name:'Produktmasse einer Charge',gen:r=>{const me=r.step(400,2000,100),Me=r.p([60,78,94,106]),Mp=r.p([102,123,138,151]),A=r.step(70,95,5),mp=me/Me*Mp*A/100;
 return{q:'Es werden '+me+' kg Einsatzstoff (M = '+Me+' kg/kmol) vorgelegt. Aus 1 kmol entsteht 1 kmol Produkt (M = '+Mp+' kg/kmol). Die Ausbeute beträgt '+A+' %. Wie viel Produkt erhältst Du?',a:mp,u:'kg',d:0,tol:0.01,
 sol:['n = [['+me+' kg||'+Me+' kg/kmol]] = '+nz(me/Me,2)+' kmol Einsatzstoff','Theoretisch: '+nz(me/Me,2)+' kmol · '+Mp+' kg/kmol = '+nz(me/Me*Mp,0)+' kg','Mit Ausbeute: '+nz(me/Me*Mp,0)+' kg · '+nt(A/100)+' = '+nz(mp,0)+' kg']}}});
C.push({f:tec,m,name:'Verweilzeit',gen:r=>{const V=r.p([2,4,6.3,10]),Vp=r.step(1,8,0.5),t=V/Vp*60;
 return{q:'Ein kontinuierlicher Rührkessel hat '+nt(V)+' m³ Reaktionsvolumen und wird mit '+nt(Vp)+' m³/h durchströmt. Wie groß ist die mittlere Verweilzeit?',a:t,u:'min',d:0,tol:0.01,
 sol:['τ = [[V_R||V̇]] = [['+nt(V)+' m³||'+nt(Vp)+' m³/h]] = '+nz(V/Vp,2)+' h','τ = '+nz(V/Vp,2)+' h · 60 min/h = '+nz(t,0)+' min']}}});}
{const m=MI(tec,'Prozesskontrolle & Analytik');
C.push({f:tec,m,name:'Titration',gen:r=>{const V1=r.p([10,20,25]),c2=r.p([0.1,0.5,1]),V2=r.step(8,24,0.5),c1=c2*V2/V1;
 return{q:'Eine Probe von '+V1+' ml Salzsäure wird mit Natronlauge der Konzentration '+nt(c2)+' mol/l titriert. Der Verbrauch beträgt '+nz(V2,1)+' ml. Welche Konzentration hat die Säure?',a:c1,u:'mol/l',d:3,tol:0.01,
 sol:['c_1 · V_1 = c_2 · V_2, umgestellt: c_1 = [[c_2 · V_2||V_1]]','c_1 = [['+nt(c2)+' mol/l · '+nz(V2,1)+' ml||'+V1+' ml]] = '+nz(c1,3)+' mol/l']}}});
C.push({f:tec,m,name:'pH-Wert einer starken Säure',gen:r=>{const e=r.i(1,5),c=Math.pow(10,-e);
 return{q:'Eine starke einwertige Säure hat die Konzentration c(H⁺) = '+nt(c,5)+' mol/l. Welchen pH-Wert hat die Lösung?',a:e,u:'',d:0,tol:0,
 sol:['pH = −lg c(H⁺) = −lg('+nt(c,5)+') = '+e]}}});}
{const m=MI(tec,'Messtechnik: Druck, Temperatur, Durchfluss, Füllstand');
C.push({f:tec,m,name:'Füllstand aus dem Bodendruck',gen:r=>{const rho=r.p([800,900,1000,1100,1200]),h=r.step(1,6,0.5),p=rho*9.81*h/100;
 return{q:'Am Boden eines offenen Tanks misst die Sonde '+nz(p,0)+' mbar Überdruck. Die Flüssigkeit hat die Dichte '+rho+' kg/m³. Wie hoch steht sie?',a:h,u:'m',d:2,tol:0.02,
 sol:['p = '+nz(p,0)+' mbar · 100 Pa/mbar = '+nz(p*100,0)+' Pa','h = [[p||ρ · g]] = [['+nz(p*100,0)+' Pa||'+rho+' kg/m³ · 9,81 m/s²]] = '+nz(h,2)+' m']}}});
C.push({f:tec,m,name:'Durchfluss an der Blende',gen:r=>{const V1=r.step(10,40,5),dp1=r.p([100,160,250]),f=r.p([0.25,0.5,2,4]),dp2=dp1*f,V2=V1*Math.sqrt(f);
 return{q:'An einer Messblende gehören zu '+V1+' m³/h genau '+dp1+' mbar Druckabfall. Jetzt werden '+nt(dp2)+' mbar gemessen. Wie groß ist der Durchfluss?',a:V2,u:'m³/h',d:1,tol:0.01,
 sol:['[[V̇_2||V̇_1]] = √[[Δp_2||Δp_1]]','V̇_2 = '+V1+' m³/h · √[['+nt(dp2)+' mbar||'+dp1+' mbar]] = '+V1+' m³/h · '+nz(Math.sqrt(f),3)+' = '+nz(V2,1)+' m³/h']}}});}
{const m=MI(tec,'Regelungstechnik im Prozess');
C.push({f:tec,m,name:'Verhältnisregelung',gen:r=>{const VA=r.step(200,1500,50),k=r.p([0.15,0.25,0.4,0.6,1.2]),VB=VA*k;
 return{q:'Strom A läuft mit '+VA+' kg/h. Strom B wird im Verhältnis k = '+nt(k)+' dazu dosiert. Welchen Sollwert bekommt der Durchflussregler für B?',a:VB,u:'kg/h',d:0,tol:0.005,
 sol:['ṁ_B = k · ṁ_A = '+nt(k)+' · '+VA+' kg/h = '+nz(VB,0)+' kg/h']}}});
C.push({f:tec,m,name:'Durchfluss durch ein Stellventil',gen:r=>{const kv=r.p([4,6.3,10,16,25]),dp=r.p([0.25,1,2.25,4]),V=kv*Math.sqrt(dp);
 return{q:'Ein voll geöffnetes Stellventil hat K_v = '+nt(kv)+' m³/h. Über dem Ventil fallen '+nt(dp)+' bar ab (Wasser). Wie groß ist der Durchfluss?',a:V,u:'m³/h',d:1,tol:0.01,
 sol:['V̇ = K_v · √[[Δp||1 bar]]','V̇ = '+nt(kv)+' m³/h · √'+nt(dp)+' = '+nt(kv)+' m³/h · '+nt(Math.sqrt(dp))+' = '+nz(V,1)+' m³/h']}}});}
}
}
