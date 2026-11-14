/* ===== Lernlabor Pro, Pakete E1 und E2: Elektrotechnik, Infrastruktursysteme & Betriebstechnik. Eigene Texte und Aufgaben.
   Normwerte (Abschaltzeiten, Prüffristen, Spannungsfall) sind Richt- und Beispielwerte. Maßgeblich sind die aktuellen Normen und die Gefährdungsbeurteilung. ===== */
if(FR==='el'){
TM({t:'Netzformen & Energieversorgung',intro:'Bevor Du eine Halle anschließt, musst Du wissen, wie das Netz aufgebaut ist: Wo ist der Sternpunkt geerdet, wie kommt der Schutzleiter zum Gerät, und wie viel Leistung brauchst Du gleichzeitig? Daraus folgen Schutzmaßnahme, Zuleitung und Anschlussleistung.',
pts:['TN-S-System: Neutralleiter (N) und Schutzleiter (PE) sind getrennt verlegt. Das ist der Normalfall in neuen Anlagen und Voraussetzung für störungsarme Datentechnik.',
'TN-C-System: Ein gemeinsamer PEN-Leiter übernimmt beide Aufgaben. Er darf nicht geschaltet werden und ist nur bei großen Querschnitten zulässig.',
'TT-System: Die Anlage hat einen eigenen Erder. Der Fehlerstrom ist klein, deshalb übernimmt der Fehlerstrom-Schutzschalter (RCD) die Abschaltung.',
'IT-System: Kein aktiver Leiter ist direkt geerdet. Der erste Fehler schaltet nicht ab, sondern wird vom Isolationswächter gemeldet. Einsatz dort, wo ein Stillstand gefährlich oder teuer ist.',
'Nicht alle Verbraucher laufen gleichzeitig mit voller Last. Der Gleichzeitigkeitsfaktor macht aus der installierten Leistung die Leistung, für die Du Zuleitung und Transformator auslegst.',
'Versorgung sichern: USV für Steuerung und Rechner (Sekunden bis Minuten), Netzersatzanlage für längere Ausfälle, Lastmanagement gegen teure Leistungsspitzen.'],
fo:['Drehstromnetz: U = √3 · U_Str, zum Beispiel 400 V = 1,73 · 230 V.',
'Wirkleistung: P = √3 · U · I · cos φ. Scheinleistung: S = √3 · U · I.',
'Strom aus der Leistung: I = [[P||√3 · U · cos φ]].',
'Gleichzeitig benötigte Leistung: P_max = g · P_inst mit dem Gleichzeitigkeitsfaktor g.'],
mcq:[['Woran erkennst Du ein TN-S-System?','N und PE sind getrennt geführt','Es gibt nur einen PEN-Leiter','Die Anlage hat keinen Schutzleiter','Der Sternpunkt ist nicht geerdet','T: Sternpunkt geerdet, N: Körper am Schutzleiter des Netzes, S: separat geführte Leiter.'],
['Was passiert im IT-System beim ersten Körperschluss?','Der Isolationswächter meldet den Fehler, die Anlage läuft weiter','Die Sicherung löst sofort aus','Der RCD schaltet in 0,2 s ab','Die Spannung bricht zusammen','Es fließt kaum Fehlerstrom. Der Fehler muss aber zügig gesucht werden, weil der zweite Fehler abschaltet.'],
['Eine Halle hat 200 kW installierte Leistung und g = 0,6. Für welche Leistung legst Du die Zuleitung aus?','120 kW','200 kW','333 kW','80 kW','P_max = 0,6 · 200 kW = 120 kW.'],
['Wozu dient ein Lastmanagement?','Es begrenzt Leistungsspitzen und senkt den Leistungspreis','Es erhöht die Netzspannung','Es ersetzt den Schutzleiter','Es verbessert den Wirkungsgrad der Motoren','Abgerechnet wird meist die höchste Viertelstundenleistung. Wer Spitzen kappt, spart.']]});

TM({t:'Schutzmaßnahmen & Prüfung elektrischer Anlagen',intro:'Eine Anlage darf erst in Betrieb gehen, wenn der Schutz gegen elektrischen Schlag nachgewiesen ist. Du kennst die drei Schutzebenen, die Reihenfolge der Erstprüfung und rechnest nach, ob die Sicherung im Fehlerfall schnell genug abschaltet.',
pts:['Drei Schutzebenen: Basisschutz (Isolierung, Gehäuse), Fehlerschutz (automatische Abschaltung über den Schutzleiter), Zusatzschutz (RCD mit höchstens 30 mA).',
'Die fünf Sicherheitsregeln vor jeder Arbeit: Freischalten, gegen Wiedereinschalten sichern, Spannungsfreiheit feststellen, Erden und Kurzschließen, benachbarte spannungsführende Teile abdecken.',
'Erstprüfung in fester Reihenfolge: Besichtigen, Erproben, Messen. Erst danach wird die Anlage übergeben.',
'Gemessen wird: Durchgängigkeit des Schutzleiters, Isolationswiderstand, Schleifenimpedanz, Auslösung des RCD, Drehfeld.',
'Abschaltzeiten als Richtwerte im TN-System bei 230 V: 0,4 s in Endstromkreisen mit Steckdosen bis 63 A und mit fest angeschlossenen Verbrauchern bis 32 A, 5 s in Verteilungsstromkreisen und den übrigen Endstromkreisen. Maßgeblich ist die aktuelle Norm.',
'Ohne Prüfprotokoll gilt die Prüfung als nicht gemacht. Das Protokoll nennt Messwerte, Messgerät, Prüfer und Datum.'],
fo:['Abschaltbedingung: Z_S ≤ [[U_0||I_a]] mit U_0 = 230 V und I_a als Strom, der das Schutzorgan in der geforderten Zeit auslöst.',
'Leitungsschutzschalter lösen sicher unverzögert aus bei: Typ B I_a = 5 · I_n, Typ C I_a = 10 · I_n.',
'Kurzschlussstrom aus der Messung: I_k = [[U_0||Z_S]].',
'Erdungswiderstand im TT-System: R_A ≤ [[50 V||I_ΔN]].'],
mcq:[['In welcher Reihenfolge läuft die Erstprüfung?','Besichtigen, Erproben, Messen','Messen, Besichtigen, Erproben','Erproben, Messen, Besichtigen','Einschalten, Messen, Protokoll','Erst schauen, dann Funktionen erproben, dann messen.'],
['Ein Stromkreis ist mit B16 abgesichert. Welcher Strom muss im Fehlerfall mindestens fließen?','80 A','16 A','160 A','30 mA','Typ B löst bei 5 · I_n sicher unverzögert aus: 5 · 16 A = 80 A.'],
['Die gemessene Schleifenimpedanz ist zu hoch. Was bedeutet das?','Im Fehlerfall fließt zu wenig Strom, die Sicherung löst zu spät aus','Die Leitung wird im Normalbetrieb zu heiß','Der RCD löst ständig aus','Die Spannung ist zu hoch','Ein hoher Widerstand begrenzt den Fehlerstrom. Abhilfe: größerer Querschnitt, kürzere Leitung, anderes Schutzorgan oder RCD.'],
['Wofür ist ein RCD mit 30 mA vorgesehen?','Als Zusatzschutz für Personen','Als Schutz vor Überlast','Als Schutz vor Kurzschluss','Als Ersatz für den Schutzleiter','Er schaltet bei kleinen Fehlerströmen ab, schützt aber nicht vor Überlast oder Kurzschluss.']]});

TM({t:'Leitungen bemessen & Spannungsfall',intro:'Eine Leitung muss drei Dinge schaffen: Sie darf nicht zu heiß werden, am Ende muss genug Spannung ankommen, und im Fehlerfall muss die Sicherung auslösen. Du gehst diese Prüfungen der Reihe nach durch.',
pts:['Schritt 1: Betriebsstrom I_b aus der Leistung berechnen.',
'Schritt 2: Schutzorgan wählen. Sein Nennstrom I_n liegt zwischen Betriebsstrom und Belastbarkeit der Leitung.',
'Schritt 3: Belastbarkeit I_z aus der Tabelle. Sie hängt von Querschnitt, Verlegeart, Umgebungstemperatur und Häufung ab. Mehrere Leitungen nebeneinander wärmen sich gegenseitig.',
'Schritt 4: Spannungsfall prüfen. Als Richtwert gelten oft 3 % vom Zähler bis zum Verbraucher. Bei langen Leitungen bestimmt der Spannungsfall den Querschnitt, nicht die Erwärmung.',
'Schritt 5: Abschaltbedingung prüfen, siehe Thema Schutzmaßnahmen.',
'Leitfähigkeit als Rechenwert: Kupfer κ = 56 [[m||Ω · mm²]], Aluminium κ = 35 [[m||Ω · mm²]].'],
fo:['Bemessungsregel: I_b ≤ I_n ≤ I_z.',
'Spannungsfall bei Wechselstrom: ΔU = [[2 · l · I · cos φ||κ · A]].',
'Spannungsfall bei Drehstrom: ΔU = [[√3 · l · I · cos φ||κ · A]].',
'In Prozent: Δu = [[ΔU||U_n]] · 100 %.',
'Mindestquerschnitt bei Drehstrom: A = [[√3 · l · I · cos φ||κ · ΔU]].'],
mcq:[['Welche Bedingung muss bei der Bemessung gelten?','I_b ≤ I_n ≤ I_z','I_z ≤ I_n ≤ I_b','I_n ≤ I_b ≤ I_z','I_b ≤ I_z ≤ I_n','Die Sicherung trägt den Betriebsstrom und schützt die Leitung, bevor diese überlastet wird.'],
['Du verdoppelst die Leitungslänge. Wie ändert sich der Spannungsfall?','Er verdoppelt sich','Er bleibt gleich','Er halbiert sich','Er vervierfacht sich','Der Spannungsfall wächst im gleichen Verhältnis wie die Länge.'],
['Warum sinkt die Belastbarkeit, wenn viele Leitungen im selben Kanal liegen?','Sie erwärmen sich gegenseitig und geben die Wärme schlechter ab','Der Spannungsfall steigt','Die Isolierung wird dünner','Der Kurzschlussstrom steigt','Dafür gibt es Häufungsfaktoren kleiner als 1.'],
['Am Ende einer 90 m langen Leitung fallen 6 % Spannung ab. Was hilft am besten?','Größerer Querschnitt','Größere Sicherung','Kleinerer RCD','Höhere Verlegetemperatur','Der Spannungsfall ist umgekehrt proportional zum Querschnitt.']]});

TM({t:'Kurzschluss, Selektivität & Netzschutz',intro:'Bei einem Fehler soll nur der betroffene Stromkreis abschalten, nicht die ganze Halle. Dafür stimmst Du die Schutzorgane aufeinander ab und prüfst, ob sie den größten Kurzschlussstrom beherrschen.',
pts:['Überlast: Der Strom liegt etwas über dem Nennstrom, die Leitung erwärmt sich langsam. Kurzschluss: Der Strom ist ein Vielfaches, abgeschaltet wird in Millisekunden.',
'Schmelzsicherung (gG): hohes Schaltvermögen, einfach, muss nach dem Auslösen getauscht werden. Leitungsschutzschalter: wieder einschaltbar, Typ B für Leitungen, C für Motoren und Lampengruppen, D für hohe Einschaltströme.',
'Leistungsschalter haben einstellbare Auslöser für Überlast und Kurzschluss. Motorschutzschalter werden auf den Motornennstrom eingestellt.',
'Selektivität: Es löst nur das Schutzorgan aus, das dem Fehler am nächsten liegt. Als Faustwert bei Schmelzsicherungen gleicher Bauart gilt ein Nennstromverhältnis von mindestens 1,6 zu 1.',
'Das Schaltvermögen jedes Schutzorgans muss mindestens so groß sein wie der größte Kurzschlussstrom an seinem Einbauort.',
'Der größte Kurzschlussstrom tritt direkt am Transformator auf, der kleinste am Ende der längsten Leitung. Den größten brauchst Du für das Schaltvermögen, den kleinsten für die Abschaltbedingung.'],
fo:['Bemessungsstrom des Transformators: I_n = [[S_n||√3 · U_n]].',
'Größter Kurzschlussstrom am Transformator (Näherung): I_k = [[I_n||u_k]] mit der Kurzschlussspannung u_k als Dezimalzahl.',
'Kleinster Kurzschlussstrom am Leitungsende: I_k = [[U_0||Z_S]].'],
mcq:[['Was bedeutet Selektivität?','Nur das Schutzorgan vor der Fehlerstelle löst aus','Alle Sicherungen lösen gleichzeitig aus','Die Hauptsicherung löst zuerst aus','Der RCD löst immer vor der Sicherung aus','So bleibt der Rest der Anlage in Betrieb.'],
['Vor einer 25-A-Schmelzsicherung sitzt eine 35-A-Sicherung gleicher Bauart. Ist das selektiv?','Nein, das Verhältnis 1,4 ist kleiner als 1,6','Ja, 35 A ist größer als 25 A','Ja, bei Schmelzsicherungen immer','Das hängt nur von der Leitungslänge ab','Mit 40 A wäre das Verhältnis 1,6 erreicht.'],
['Wo tritt der größte Kurzschlussstrom auf?','Direkt am Transformator','Am Ende der längsten Leitung','In der Mitte der Leitung','An der Steckdose','Dort ist die Impedanz am kleinsten.'],
['Ein Leitungsschutzschalter hat 6 kA Schaltvermögen. Am Einbauort sind 10 kA möglich. Was tust Du?','Schutzorgan mit höherem Schaltvermögen oder eine Vorsicherung als Backup vorsehen','Nichts, 6 kA reichen immer','Einen größeren Nennstrom wählen','Den Querschnitt verkleinern','Sonst kann der Schalter den Kurzschluss nicht sicher trennen.']]});

TM({t:'Transformator & Blindleistungskompensation',intro:'Der Transformator bringt die Mittelspannung auf 400 V, die Kompensation hält ihn von unnötigem Blindstrom frei. Beides entscheidet darüber, wie viel Wirkleistung Deine Anlage wirklich übertragen kann und was auf der Stromrechnung steht.',
pts:['Der Transformator überträgt Scheinleistung. Je schlechter der cos φ, desto weniger Wirkleistung passt durch denselben Transformator.',
'Verluste: Eisenverluste fallen immer an, sobald der Transformator am Netz liegt. Kupferverluste steigen mit dem Quadrat des Stroms.',
'Motoren, Transformatoren und Drosseln brauchen induktive Blindleistung. Sie pendelt zwischen Netz und Verbraucher und belastet Leitungen und Transformator, ohne Arbeit zu verrichten.',
'Kondensatoren liefern die Blindleistung vor Ort. Arten: Einzelkompensation am Motor, Gruppenkompensation, Zentralkompensation mit Regler an der Hauptverteilung.',
'Viele Versorger berechnen Blindarbeit, wenn der mittlere cos φ unter etwa 0,9 liegt. Ziel ist meist 0,95 bis 0,98 induktiv. Überkompensation (kapazitiv) ist zu vermeiden.',
'Bei vielen Umrichtern im Netz wird die Anlage verdrosselt, damit Oberschwingungen die Kondensatoren nicht überlasten.'],
fo:['Übersetzung: ü = [[U_1||U_2]] = [[N_1||N_2]].',
'Leistungsdreieck: S² = P² + Q², cos φ = [[P||S]], Q = P · tan φ.',
'Nötige Kondensatorleistung: Q_C = P · (tan φ_1 − tan φ_2).',
'Strom: I = [[P||√3 · U · cos φ]]. Besserer cos φ, kleinerer Strom bei gleicher Wirkleistung.'],
mcq:[['Was bewirkt eine Kompensationsanlage?','Sie senkt den Blindstrom in Zuleitung und Transformator','Sie senkt die Wirkleistung der Motoren','Sie erhöht die Netzspannung auf 440 V','Sie ersetzt die Sicherungen','Die Blindleistung wird vor Ort vom Kondensator geliefert statt aus dem Netz.'],
['Eine Anlage nimmt 100 kW bei cos φ = 0,7 auf. Wie groß ist die Scheinleistung?','Etwa 143 kVA','70 kVA','100 kVA','170 kVA','S = 100 kW ÷ 0,7 = 143 kVA.'],
['Welche Verluste hat ein Transformator im Leerlauf?','Eisenverluste','Kupferverluste','Keine','Reibungsverluste','Der Kern wird ständig ummagnetisiert, auch ohne Last.'],
['Warum soll nicht überkompensiert werden?','Kapazitive Blindleistung belastet das Netz ebenfalls und kann die Spannung anheben','Die Kondensatoren werden dann kalt','Die Motoren drehen rückwärts','Der Zähler bleibt stehen','Ziel ist ein cos φ knapp unter 1 auf der induktiven Seite.']]});

TM({t:'Elektrische Antriebe & Frequenzumrichter',intro:'Der Drehstrom-Asynchronmotor treibt Pumpen, Lüfter und Bänder an. Du liest sein Typenschild, wählst das Anlassverfahren und rechnest aus, was ein Frequenzumrichter bei Pumpen und Lüftern an Energie spart.',
pts:['Das Drehfeld läuft mit der Synchrondrehzahl um. Der Läufer bleibt etwas zurück, dieser Schlupf ist nötig, damit ein Drehmoment entsteht.',
'Typenschild: Bemessungsleistung an der Welle, Spannung und Schaltung (Stern oder Dreieck), Strom, cos φ, Drehzahl, Effizienzklasse (IE2, IE3, IE4).',
'Direktanlauf: einfach, aber mit dem fünf- bis achtfachen Nennstrom. Stern-Dreieck-Anlauf: Strom und Moment sinken auf ein Drittel. Sanftanlauf: Spannung wird hochgefahren.',
'Der Frequenzumrichter verändert Frequenz und Spannung gemeinsam. Die Drehzahl ist stufenlos einstellbar, der Anlauf weich, der Anlaufstrom klein.',
'Bei Pumpen und Lüftern ohne Gegendruck sinkt die Leistung etwa mit der dritten Potenz der Drehzahl. 80 % Drehzahl brauchen dann nur etwa die Hälfte der Leistung. Muss die Anlage einen festen Druck halten, ist die Ersparnis deutlich kleiner.',
'Umrichter erzeugen Störungen. Deshalb: geschirmte Motorleitung, Schirm beidseitig großflächig auflegen, Netzfilter, Leitungen getrennt von Signalleitungen verlegen.'],
fo:['Synchrondrehzahl: n_s = [[f · 60||p]] mit p als Polpaarzahl, n_s in [[1||min]].',
'Schlupf: s = [[n_s − n||n_s]] · 100 %.',
'Aufgenommene Leistung: P_zu = √3 · U · I · cos φ. Wirkungsgrad: η = [[P_ab||P_zu]].',
'Drehmoment: M = [[9550 · P||n]] mit P in kW, n in [[1||min]] und M in Nm.',
'Pumpen und Lüfter: P_2 = P_1 · ([[n_2||n_1]])³.'],
mcq:[['Ein vierpoliger Motor (p = 2) läuft am 50-Hz-Netz. Wie groß ist die Synchrondrehzahl?','1500 1/min','3000 1/min','1000 1/min','750 1/min','n_s = 50 · 60 ÷ 2 = 1500 1/min.'],
['Was ändert sich beim Stern-Dreieck-Anlauf?','Anlaufstrom und Anlaufmoment sinken auf ein Drittel','Die Drehzahl wird stufenlos geregelt','Der Wirkungsgrad steigt auf 100 %','Die Drehrichtung kehrt sich um','Das geringe Anlaufmoment reicht nur für leichten Anlauf.'],
['Ein Lüfter läuft mit 80 % Drehzahl. Wie viel Leistung braucht er etwa?','Rund 51 %','80 %','64 %','20 %','0,8³ = 0,512.'],
['Warum wird die Motorleitung am Umrichter geschirmt?','Um Störungen durch die schnell schaltende Ausgangsspannung zu begrenzen','Damit der Motor schneller dreht','Um den Spannungsfall zu senken','Weil der Schutzleiter sonst fehlt','Der Schirm muss an beiden Enden großflächig aufliegen.']]});

TM({t:'Instandhaltung elektrischer Anlagen',intro:'Elektrische Anlagen altern unauffällig: Klemmen lockern sich, Isolierungen verspröden, Schutzleiter brechen. Du planst die wiederkehrenden Prüfungen, legst Fristen fest und sorgst dafür, dass nur befähigte Personen an der Anlage arbeiten.',
pts:['Elektrische Anlagen und Betriebsmittel werden vor der ersten Inbetriebnahme, nach Änderung oder Instandsetzung und wiederkehrend geprüft. Die Fristen legt der Unternehmer in der Gefährdungsbeurteilung fest.',
'Richtwerte: ortsfeste Anlagen alle vier Jahre, ortsveränderliche Betriebsmittel je nach Einsatz alle sechs Monate bis zwei Jahre, auf Baustellen häufiger.',
'Die Fehlerquote ist ein Anhaltswert: Liegt sie unter 2 %, kann die Frist verlängert werden, liegt sie darüber, sollte sie verkürzt werden. Die Frist legt der Unternehmer in der Gefährdungsbeurteilung fest.',
'Wer darf was: Die Elektrofachkraft arbeitet selbstständig. Die elektrotechnisch unterwiesene Person arbeitet nach Unterweisung unter Leitung und Aufsicht. Laien bedienen nur.',
'Thermografie findet lockere Klemmen und überlastete Abgänge im laufenden Betrieb, bevor etwas ausfällt.',
'Gearbeitet wird freigeschaltet nach den fünf Sicherheitsregeln. Arbeiten unter Spannung sind die Ausnahme und brauchen Ausbildung, Anweisung und Schutzausrüstung.'],
fo:['Fehlerquote = [[fehlerhafte Betriebsmittel||geprüfte Betriebsmittel]] · 100 %.',
'Verfügbarkeit = [[MTBF||MTBF + MTTR]] · 100 % mit MTBF als mittlerer Zeit zwischen zwei Ausfällen und MTTR als mittlerer Reparaturzeit.'],
mcq:[['Wer legt die Prüffristen für elektrische Betriebsmittel fest?','Der Unternehmer auf Grundlage der Gefährdungsbeurteilung','Der Hersteller des Prüfgeräts','Der Energieversorger','Jeder Mitarbeiter für sein Gerät','Die bekannten Fristen sind Richtwerte. Verantwortlich ist der Unternehmer.'],
['Von 400 geprüften Geräten waren 12 fehlerhaft. Was folgt daraus?','Fehlerquote 3 %, die Frist sollte verkürzt werden','Fehlerquote 3 %, die Frist kann verlängert werden','Fehlerquote 0,3 %, alles in Ordnung','Fehlerquote 12 %, alle Geräte stilllegen','12 ÷ 400 = 3 %. Das liegt über dem Richtwert von 2 %.'],
['Was darf eine elektrotechnisch unterwiesene Person?','Festgelegte Arbeiten nach Unterweisung unter Leitung und Aufsicht einer Elektrofachkraft','Jede Arbeit an der Anlage selbstständig','Nur Geräte bedienen','Anlagen planen und abnehmen','Sie kennt die Gefahren ihrer Tätigkeit, beurteilt die Arbeit aber nicht selbst.'],
['Was findest Du mit einer Thermografie des Schaltschranks?','Lockere Klemmen und überlastete Abgänge','Einen unterbrochenen Schutzleiter','Den Isolationswiderstand','Die Schleifenimpedanz','Übergangswiderstände werden warm und sind im Wärmebild sichtbar.']]});

{const tec='tec',q3=Math.sqrt(3);
{const m=MI(tec,'Netzformen & Energieversorgung');
C.push({f:tec,m,name:'Strom aus der Drehstromleistung',gen:r=>{const P=r.step(10,90,5),cp=r.p([0.8,0.85,0.9]),I=P*1000/(q3*400*cp);
 return{q:'Eine Maschine nimmt am 400-V-Drehstromnetz '+P+' kW bei cos φ = '+nt(cp)+' auf. Wie groß ist der Strom in der Zuleitung?',a:I,u:'A',d:1,tol:0.01,
 sol:['I = [[P||√3 · U · cos φ]]','I = [['+nz(P*1000,0)+' W||1,732 · 400 V · '+nt(cp)+']] = '+nz(I,1)+' A']}}});
C.push({f:tec,m,name:'Gleichzeitig benötigte Leistung',gen:r=>{const Pi=r.step(120,480,20),g=r.p([0.5,0.6,0.7,0.8]),P=Pi*g;
 return{q:'In einer Halle sind '+Pi+' kW installiert. Der Gleichzeitigkeitsfaktor beträgt '+nt(g)+'. Für welche Leistung legst Du die Einspeisung aus?',a:P,u:'kW',d:0,tol:0.005,
 sol:['P_max = g · P_inst','P_max = '+nt(g)+' · '+Pi+' kW = '+nz(P,0)+' kW']}}});}
{const m=MI(tec,'Schutzmaßnahmen & Prüfung elektrischer Anlagen');
C.push({f:tec,m,name:'Zulässige Schleifenimpedanz',gen:r=>{const In=r.p([10,16,20,25,32]),ty=r.p(['B','C']),k=ty==='B'?5:10,Ia=k*In,Z=230/Ia;
 return{q:'Ein Endstromkreis ist mit einem Leitungsschutzschalter '+ty+In+' abgesichert (U_0 = 230 V). Wie groß darf die Schleifenimpedanz höchstens sein?',a:Z,u:'Ω',d:2,tol:0.01,
 sol:['I_a = '+k+' · I_n = '+k+' · '+In+' A = '+Ia+' A','Z_S ≤ [[U_0||I_a]] = [[230 V||'+Ia+' A]] = '+nz(Z,2)+' Ω']}}});
C.push({f:tec,m,name:'Kurzschlussstrom aus der Messung',gen:r=>{const Z=r.step(0.4,2.4,0.1),In=r.p([16,20]),Ik=230/Z,ok=Ik>=5*In;
 return{q:'Du misst an einer Steckdose eine Schleifenimpedanz von '+nz(Z,1)+' Ω (U_0 = 230 V). Wie groß ist der Kurzschlussstrom?',a:Ik,u:'A',d:0,tol:0.01,
 sol:['I_k = [[U_0||Z_S]] = [[230 V||'+nz(Z,1)+' Ω]] = '+nz(Ik,0)+' A','Vergleich mit einem B'+In+' (I_a = '+5*In+' A): '+(ok?'Der Strom reicht, die Abschaltbedingung ist erfüllt.':'Der Strom reicht nicht. Der Stromkreis braucht einen größeren Querschnitt, eine kürzere Leitung oder einen RCD als Fehlerschutz.')]}}});
C.push({f:tec,m,name:'Erdungswiderstand im TT-System',gen:r=>{const Id=r.p([30,100,300,500]),R=50/(Id/1000);
 return{q:'In einem TT-System schützt ein RCD mit I_ΔN = '+Id+' mA. Wie groß darf der Erdungswiderstand höchstens sein, damit die Berührungsspannung 50 V nicht übersteigt?',a:R,u:'Ω',d:0,tol:0.01,
 sol:['R_A ≤ [[50 V||I_ΔN]] = [[50 V||'+nt(Id/1000)+' A]] = '+nz(R,0)+' Ω']}}});}
{const m=MI(tec,'Leitungen bemessen & Spannungsfall');
C.push({f:tec,m,name:'Spannungsfall bei Drehstrom',gen:r=>{const l=r.step(30,120,10),I=r.step(20,60,5),A=r.p([6,10,16,25]),cp=r.p([0.8,0.85,0.9]),dU=q3*l*I*cp/(56*A),du=dU/400*100;
 return{q:'Eine Drehstromleitung aus Kupfer ist '+l+' m lang und hat '+A+' mm² Querschnitt. Sie führt '+I+' A bei cos φ = '+nt(cp)+' (U_n = 400 V, κ = 56 m/(Ω · mm²)). Wie groß ist der Spannungsfall in Prozent?',a:du,u:'%',d:2,tol:0.02,
 sol:['ΔU = [[√3 · l · I · cos φ||κ · A]]','ΔU = [[1,732 · '+l+' m · '+I+' A · '+nt(cp)+'||56 m/(Ω · mm²) · '+A+' mm²]] = '+nz(dU,2)+' V','Δu = [['+nz(dU,2)+' V||400 V]] · 100 % = '+nz(du,2)+' %',du<=3?'Der Richtwert von 3 % ist eingehalten.':'Der Richtwert von 3 % ist überschritten. Wähle den nächstgrößeren Querschnitt.']}}});
C.push({f:tec,m,name:'Mindestquerschnitt',gen:r=>{const l=r.step(40,150,10),I=r.step(16,50,2),cp=0.9,dU=12,A=q3*l*I*cp/(56*dU),N=[1.5,2.5,4,6,10,16,25,35,50,70].find(x=>x>=A);
 return{q:'Eine Drehstromleitung aus Kupfer ist '+l+' m lang und führt '+I+' A bei cos φ = 0,9. Der Spannungsfall darf höchstens 12 V betragen (3 % von 400 V). Welchen Querschnitt brauchst Du rechnerisch mindestens?',a:A,u:'mm²',d:1,tol:0.02,
 sol:['A = [[√3 · l · I · cos φ||κ · ΔU]]','A = [[1,732 · '+l+' m · '+I+' A · 0,9||56 m/(Ω · mm²) · 12 V]] = '+nz(A,1)+' mm²','Gewählt wird der nächstgrößere Normquerschnitt: '+nt(N)+' mm². Danach prüfst Du noch Belastbarkeit und Abschaltbedingung.']}}});}
{const m=MI(tec,'Kurzschluss, Selektivität & Netzschutz');
C.push({f:tec,m,name:'Kurzschlussstrom am Transformator',gen:r=>{const S=r.p([250,400,630,800,1000]),uk=r.p([4,6]),In=S*1000/(q3*400),Ik=In/(uk/100)/1000;
 return{q:'Ein Transformator hat '+S+' kVA Bemessungsleistung, 400 V Unterspannung und u_k = '+uk+' %. Wie groß ist näherungsweise der Kurzschlussstrom an seinen Klemmen?',a:Ik,u:'kA',d:1,tol:0.02,
 sol:['I_n = [[S_n||√3 · U_n]] = [['+nz(S*1000,0)+' VA||1,732 · 400 V]] = '+nz(In,0)+' A','I_k = [[I_n||u_k]] = [['+nz(In,0)+' A||'+nt(uk/100)+']] = '+nz(Ik*1000,0)+' A = '+nz(Ik,1)+' kA','Alle Schutzorgane in der Hauptverteilung brauchen mindestens dieses Schaltvermögen.']}}});}
{const m=MI(tec,'Transformator & Blindleistungskompensation');
C.push({f:tec,m,name:'Kondensatorleistung',gen:r=>{const P=r.step(60,300,20),c1=r.p([0.65,0.7,0.75,0.8]),c2=r.p([0.95,0.98]),t1=Math.tan(Math.acos(c1)),t2=Math.tan(Math.acos(c2)),Q=P*(t1-t2);
 return{q:'Ein Betrieb nimmt '+P+' kW bei cos φ_1 = '+nt(c1)+' auf. Der Leistungsfaktor soll auf cos φ_2 = '+nt(c2)+' verbessert werden. Welche Kondensatorleistung ist nötig?',a:Q,u:'kvar',d:0,tol:0.02,
 sol:['tan φ_1 = '+nz(t1,3)+' und tan φ_2 = '+nz(t2,3)+' (aus cos φ mit dem Taschenrechner)','Q_C = P · (tan φ_1 − tan φ_2)','Q_C = '+P+' kW · ('+nz(t1,3)+' − '+nz(t2,3)+') = '+nz(Q,0)+' kvar']}}});
C.push({f:tec,m,name:'Strom vor und nach der Kompensation',gen:r=>{const P=r.step(80,240,20),c1=r.p([0.7,0.75,0.8]),I1=P*1000/(q3*400*c1),I2=P*1000/(q3*400*0.95),d=(1-I2/I1)*100;
 return{q:'Eine Anlage nimmt am 400-V-Netz '+P+' kW auf. Durch die Kompensation steigt der cos φ von '+nt(c1)+' auf 0,95. Um wie viel Prozent sinkt der Strom in der Zuleitung?',a:d,u:'%',d:1,tol:0.02,
 sol:['I_1 = [['+nz(P*1000,0)+' W||1,732 · 400 V · '+nt(c1)+']] = '+nz(I1,1)+' A','I_2 = [['+nz(P*1000,0)+' W||1,732 · 400 V · 0,95]] = '+nz(I2,1)+' A','Abnahme = (1 − [['+nz(I2,1)+' A||'+nz(I1,1)+' A]]) · 100 % = '+nz(d,1)+' %','Kürzer: Abnahme = (1 − [['+nt(c1)+'||0,95]]) · 100 % = '+nz(d,1)+' %']}}});}
{const m=MI(tec,'Elektrische Antriebe & Frequenzumrichter');
C.push({f:tec,m,name:'Synchrondrehzahl und Schlupf',gen:r=>{const p=r.p([1,2,3]),ns=3000/p,s0=r.step(2,5,0.5),n=Math.round(ns*(1-s0/100)/5)*5,s=(ns-n)/ns*100;
 return{q:'Ein Motor mit der Polpaarzahl p = '+p+' läuft am 50-Hz-Netz mit '+n+' 1/min. Wie groß ist der Schlupf?',a:s,u:'%',d:1,tol:0.02,
 sol:['n_s = [[f · 60||p]] = [[50 · 60||'+p+']] 1/min = '+ns+' 1/min','s = [[n_s − n||n_s]] · 100 % = [['+ns+' 1/min − '+n+' 1/min||'+ns+' 1/min]] · 100 % = '+nz(s,1)+' %']}}});
C.push({f:tec,m,name:'Drehmoment an der Welle',gen:r=>{const P=r.p([4,5.5,7.5,11,15,22]),n=r.p([960,1450,1460,2900]),M=9550*P/n;
 return{q:'Ein Motor gibt '+nt(P)+' kW bei '+n+' 1/min ab. Wie groß ist das Drehmoment an der Welle?',a:M,u:'Nm',d:1,tol:0.01,
 sol:['M = [[9550 · P||n]] mit P in kW und n in 1/min','M = [[9550 · '+nt(P)+'||'+n+']] Nm = '+nz(M,1)+' Nm']}}});
C.push({f:tec,m,name:'Lüfter mit Frequenzumrichter',gen:r=>{const P1=r.p([7.5,11,15,22,30]),x=r.p([60,70,80,90]),P2=P1*Math.pow(x/100,3);
 return{q:'Ein Lüfter nimmt bei voller Drehzahl '+nt(P1)+' kW auf. Mit dem Frequenzumrichter läuft er nur noch mit '+x+' % der Drehzahl. Welche Leistung nimmt er dann etwa auf?',a:P2,u:'kW',d:1,tol:0.02,
 sol:['P_2 = P_1 · ([[n_2||n_1]])³','P_2 = '+nt(P1)+' kW · '+nt(x/100)+'³ = '+nt(P1)+' kW · '+nz(Math.pow(x/100,3),3)+' = '+nz(P2,1)+' kW','Das gilt näherungsweise für einen Lüfter, der keinen festen Druck halten muss.']}}});}
{const m=MI(tec,'Instandhaltung elektrischer Anlagen');
C.push({f:tec,m,name:'Fehlerquote bei der Geräteprüfung',gen:r=>{const N=r.step(150,900,50),k=r.i(1,Math.round(N*0.05)),q=k/N*100;
 return{q:'Bei der Wiederholungsprüfung waren von '+N+' ortsveränderlichen Geräten '+k+' fehlerhaft. Wie groß ist die Fehlerquote?',a:q,u:'%',d:1,tol:0.02,
 sol:['Fehlerquote = [['+k+'||'+N+']] · 100 % = '+nz(q,1)+' %',q<2?'Die Quote liegt unter 2 %. Die Prüffrist kann verlängert werden.':'Die Quote liegt nicht unter 2 %. Die Prüffrist bleibt oder wird verkürzt, die Ursachen werden gesucht.']}}});
C.push({f:tec,m,name:'Verfügbarkeit einer Schaltanlage',gen:r=>{const mb=r.step(400,2000,100),mt=r.step(2,12,1),V=mb/(mb+mt)*100;
 return{q:'Eine Anlage läuft im Mittel '+mb+' h zwischen zwei Ausfällen. Eine Reparatur dauert im Mittel '+mt+' h. Wie groß ist die Verfügbarkeit?',a:V,u:'%',d:2,tol:0.001,
 sol:['Verfügbarkeit = [[MTBF||MTBF + MTTR]] · 100 %','Verfügbarkeit = [['+mb+' h||'+mb+' h + '+mt+' h]] · 100 % = '+nz(V,2)+' %']}}});}
}
}
