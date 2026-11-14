/* ===== Lernlabor Pro, Paket M1: Mechatronik. Eigene Texte und Aufgaben, Zahlen sind Beispielwerte.
   Gliederung nach den Qualifikationsschwerpunkten Systemintegration, Technische Applikation, Kundenunterstützung und Service.
   Angaben zu Normen und Rechtsvorschriften sind eine Lernhilfe; maßgeblich ist der aktuelle Stand der Vorschriften. ===== */
if(FR==='mt'){
TM({t:'Mechatronische Systeme & Schnittstellen',intro:'Eine mechatronische Anlage ist mehr als die Summe aus Mechanik, Elektrik und Software. Du zerlegst sie in Teilsysteme, kennst die Schnittstellen dazwischen und weißt, warum die meisten Probleme genau dort entstehen.',
pts:['Ein mechatronisches System besteht aus Grundsystem (Mechanik), Sensoren, Informationsverarbeitung (Steuerung) und Aktoren. Energie-, Stoff- und Signalfluss verbinden die Teile.',
'Schnittstellen sind mechanisch (Flansch, Passung, Kupplung), elektrisch (Spannung, Stecker, Schirmung), pneumatisch oder hydraulisch (Druck, Anschluss) und informationstechnisch (Bus, Protokoll, Datenformat).',
'Das V-Modell ordnet die Entwicklung: Anforderungen, Systementwurf, Entwurf in den Fachdisziplinen, dann Integration und Test auf jeder Stufe gegen die Anforderung.',
'Lastenheft: was der Kunde will. Pflichtenheft: wie der Lieferant es umsetzt. Schnittstellen gehören mit Zahlen hinein: Taktzeit, Medien, Signale, Bauraum, Verfügbarkeit.',
'Zur Dokumentation gehören Stromlaufplan, Pneumatik- und Hydraulikplan, Aufstellplan und bei verfahrenstechnischen Anlagen das R&I-Fließbild mit Messstellen und Armaturen.',
'Bei verketteten Stationen bestimmt die langsamste Station den Takt. Die Verfügbarkeit der Kette ist das Produkt der Einzelverfügbarkeiten, wenn kein Puffer dazwischen liegt.',
'Integration in Stufen: erst jedes Teilsystem einzeln prüfen, dann zusammenschalten. Wer alles gleichzeitig in Betrieb nimmt, sucht Fehler an allen Stellen zugleich.'],
fo:['Verfügbarkeit einer Kette: A_ges = A_1 · A_2 · A_3 · …','Ausbringung je Stunde = [[3600 s/h||Taktzeit]] · Verfügbarkeit'],
mcq:[['Was beschreibt das Pflichtenheft?','Wie der Lieferant die Anforderungen umsetzt','Was der Kunde sich wünscht','Den Kaufpreis','Die Wartungsintervalle','Das Lastenheft kommt vom Kunden, das Pflichtenheft antwortet darauf.'],
['Vier Stationen ohne Puffer haben je 95 % Verfügbarkeit. Wie verfügbar ist die Kette etwa?','81 %','95 %','99 %','76 %','0,95 · 0,95 · 0,95 · 0,95 = 0,81. Jede Station kann die Kette stoppen.'],
['Wo entstehen bei der Integration die meisten Probleme?','An den Schnittstellen zwischen den Teilsystemen','In der Lackierung','Im Fundament','In der Betriebsanleitung','Dort treffen verschiedene Fachleute, Lieferanten und Annahmen aufeinander.'],
['Welcher Plan zeigt Messstellen, Armaturen und Rohrleitungen einer Anlage?','Das R&I-Fließbild','Der Klemmenplan','Der Netzplan','Das Pflichtenheft','R&I steht für Rohrleitung und Instrumentierung.']]});
{const m=MI('tec','Mechatronische Systeme & Schnittstellen');
C.push({f:'tec',m,name:'Verfügbarkeit einer verketteten Linie',gen:r=>{const n=r.p([3,4,5]),A=[...Array(n)].map(()=>r.p([94,95,96,97,98,99])),g=A.reduce((s,x)=>s*x/100,1)*100;
 return{q:'Eine Linie besteht aus '+n+' Stationen ohne Puffer. Ihre Verfügbarkeiten betragen '+A.join(' %, ')+' %. Wie verfügbar ist die ganze Linie?',a:g,u:'%',d:1,tol:.15,
 sol:['A_ges = A_1 · A_2 · …','A_ges = '+A.map(x=>nz(x/100,2)).join(' · ')+' = '+nz(g/100,3)+' = '+nz(g,1)+' %']}}});
C.push({f:'tec',m,name:'Ausbringung der Linie',gen:r=>{const t=r.p([12,15,18,20,24,30]),A=r.p([80,85,88,90,92]),n=3600/t*A/100;
 return{q:'Die langsamste Station hat eine Taktzeit von '+t+' s. Die Linie ist zu '+A+' % verfügbar. Wie viele Teile liefert sie je Stunde?',a:n,u:'Stück/h',d:0,tol:1,
 sol:['Ausbringung = [[3600 s/h||Taktzeit]] · Verfügbarkeit','= [[3600 s/h||'+t+' s]] · '+nz(A/100,2)+' = '+nz(n,0)+' Stück/h']}}});
C.push({f:'tec',m,name:'Netzteil für die 24-V-Versorgung',gen:r=>{const a=r.step(8,20,2),ia=r.p([0.05,0.08,0.1]),b=r.step(4,12,1),ib=r.p([0.3,0.4,0.5]),c=r.p([1.5,2,2.5]),I=a*ia+b*ib+c,Ir=I*1.25;
 return{q:'An einer Station hängen '+a+' Sensoren mit je '+nz(ia,2)+' A, '+b+' Ventilspulen mit je '+nz(ib,1)+' A und eine Steuerung mit '+nz(c,1)+' A. Welchen Strom muss das 24-V-Netzteil mit 25 % Reserve liefern?',a:Ir,u:'A',d:1,tol:.06,
 sol:['I = '+a+' · '+nz(ia,2)+' A + '+b+' · '+nz(ib,1)+' A + '+nz(c,1)+' A = '+nz(I,2)+' A','mit Reserve: '+nz(I,2)+' A · 1,25 = '+nz(Ir,1)+' A']}}});}

TM({t:'Positionierantriebe & Servotechnik',intro:'Wo eine Achse genau und schnell an eine Stelle fahren soll, arbeitet ein geregelter Antrieb. Du verstehst den Aufbau einer Positionierachse, liest ein Fahrprofil und rechnest Geschwindigkeit, Auflösung und Drehmoment.',
pts:['Eine Positionierachse besteht aus Servomotor mit Geber, Servoregler, Mechanik (Kugelgewindetrieb, Zahnriemen oder Zahnstange) und Führung. Der Geber meldet Lage und Drehzahl zurück.',
'Der Servoregler regelt in drei Schleifen: innen den Strom (Drehmoment), darüber die Drehzahl, außen die Lage. Die innere Schleife ist immer die schnellste.',
'Ein Fahrprofil hat drei Abschnitte: beschleunigen, konstant fahren, bremsen. Über der Zeit ergibt die Geschwindigkeit ein Trapez. Ist der Weg kurz, wird daraus ein Dreieck: Die Achse erreicht ihre Höchstgeschwindigkeit nicht.',
'Kugelgewindetrieb: Je Umdrehung fährt der Schlitten um die Steigung weiter. Große Steigung heißt schnell, kleine Steigung heißt hohe Kraft und feine Auflösung.',
'Vor dem Positionieren muss die Achse ihren Nullpunkt kennen. Inkrementalgeber brauchen eine Referenzfahrt, Absolutwertgeber kennen die Lage sofort nach dem Einschalten.',
'Der Schleppfehler ist der Abstand zwischen Soll- und Istlage während der Fahrt. Wächst er über den Grenzwert, schaltet der Regler ab. Ursachen: Schwergängigkeit, zu hohe Beschleunigung, falsche Reglereinstellung.',
'Frequenzumrichter mit Asynchronmotor reichen für einfache Drehzahlaufgaben. Servoantriebe sind für hohe Dynamik und genaues Positionieren gebaut. Sicherheitsfunktionen wie sicher abgeschaltetes Moment (STO) sind im Antrieb integriert.'],
fo:['Vorschubgeschwindigkeit: v = n · p (Drehzahl mal Steigung)','Auflösung = [[Steigung||Schritte je Umdrehung]]','Beschleunigungsweg: s = [[v²||2 · a]]','Drehmoment an der Spindel: M = [[F · p||2 · π · η]]'],
mcq:[['Welche Regelschleife eines Servoantriebs ist die innerste und schnellste?','Die Stromregelung','Die Lageregelung','Die Drehzahlregelung','Die Temperaturregelung','Strom bedeutet Drehmoment. Darauf bauen Drehzahl- und Lageregelung auf.'],
['Eine Achse fährt nur 20 mm weit. Das Geschwindigkeitsprofil wird zum Dreieck. Was bedeutet das?','Sie erreicht die eingestellte Höchstgeschwindigkeit nicht','Sie fährt rückwärts','Der Geber ist defekt','Sie bremst nicht','Der Weg ist zu kurz: Mitten im Beschleunigen muss schon gebremst werden.'],
['Wozu dient die Referenzfahrt?','Die Achse findet ihren Nullpunkt','Der Motor wird warm gefahren','Die Spindel wird geschmiert','Das Programm wird gesichert','Ein Inkrementalgeber zählt nur Schritte und kennt nach dem Einschalten die Lage nicht.'],
['Der Regler meldet „Schleppfehler“. Was prüfst Du zuerst?','Ob die Mechanik schwergängig ist oder etwas klemmt','Die Farbe des Motors','Die Uhrzeit der Steuerung','Den Netzwerkswitch','Die Achse kommt dem Sollwert nicht hinterher. Meist liegt es an Mechanik oder zu hoher Dynamik.']]});
{const m=MI('tec','Positionierantriebe & Servotechnik');
C.push({f:'tec',m,name:'Vorschubgeschwindigkeit am Kugelgewindetrieb',gen:r=>{const n=r.p([600,900,1200,1500,2400,3000]),p=r.p([5,10,16,20]),v=n*p/1000;
 return{q:'Ein Servomotor dreht mit '+n+' 1/min und treibt direkt eine Spindel mit '+p+' mm Steigung. Wie schnell fährt der Schlitten in m/min?',a:v,u:'m/min',d:1,tol:.05,
 sol:['v = n · p','v = '+n+' [[1||min]] · '+p+' mm = '+nz(n*p,0)+' [[mm||min]] = '+nz(v,1)+' [[m||min]]']}}});
C.push({f:'tec',m,name:'Auflösung der Achse',gen:r=>{const p=r.p([5,10,20]),z=r.p([1000,2000,4000,5000,10000]),a=p/z*1000;
 return{q:'Die Spindel hat '+p+' mm Steigung. Der Geber liefert '+z+' Schritte je Umdrehung. Welchem Weg entspricht ein Schritt in µm?',a,u:'µm',d:1,tol:.05,
 sol:['Auflösung = [[Steigung||Schritte je Umdrehung]]','= [['+p+' mm||'+z+']] = '+nz(p/z,4)+' mm = '+nz(a,1)+' µm']}}});
C.push({f:'tec',m,name:'Beschleunigungsweg',gen:r=>{const v=r.p([0.5,0.8,1,1.2,1.5,2]),a=r.p([2,4,5,8,10]),s=v*v/(2*a)*1000,t=v/a;
 return{q:'Eine Achse beschleunigt mit '+a+' m/s² auf '+nz(v,1)+' m/s. Wie lang ist der Beschleunigungsweg in mm?',a:s,u:'mm',d:0,tol:1,
 sol:['s = [[v²||2 · a]]','s = [[('+nz(v,1)+' m/s)²||2 · '+a+' m/s²]] = '+nz(s/1000,4)+' m = '+nz(s,0)+' mm','Dauer: t = [[v||a]] = [['+nz(v,1)+' m/s||'+a+' m/s²]] = '+nz(t,2)+' s']}}});
C.push({f:'tec',m,name:'Drehmoment an der Spindel',gen:r=>{const Fv=r.p([800,1200,1500,2000,3000,4000]),p=r.p([5,10,20]),e=r.p([0.85,0.9]),M=Fv*p/1000/(2*Math.PI*e);
 return{q:'Ein Kugelgewindetrieb mit '+p+' mm Steigung und einem Wirkungsgrad von '+nz(e,2)+' soll '+Fv+' N Vorschubkraft aufbringen. Welches Drehmoment braucht die Spindel?',a:M,u:'Nm',d:2,tol:.03,
 sol:['M = [[F · p||2 · π · η]]','M = [['+Fv+' N · '+nz(p/1000,3)+' m||2 · π · '+nz(e,2)+']] = '+nz(M,2)+' Nm']}}});}

TM({t:'Maschinensicherheit: Risikobeurteilung & CE',intro:'Wer eine Maschine baut, umbaut oder verkettet, muss ihre Sicherheit nachweisen. Du kennst den Weg von der Risikobeurteilung bis zur CE-Kennzeichnung und weißt, wann ein Umbau im Betrieb neue Pflichten auslöst.',
pts:['Der Hersteller beurteilt die Risiken seiner Maschine über alle Lebensphasen: Transport, Aufbau, Einrichten, Betrieb, Reinigung, Störungssuche, Instandhaltung, Abbau.',
'Risikobeurteilung in Schritten: Grenzen der Maschine festlegen, Gefährdungen ermitteln, Risiko einschätzen (Schwere und Wahrscheinlichkeit), Risiko bewerten, Maßnahmen festlegen, erneut bewerten.',
'Drei-Stufen-Verfahren bei den Maßnahmen: erst sichere Konstruktion, dann technische Schutzmaßnahmen (trennende Schutzeinrichtung, Lichtgitter, Zweihandschaltung), zuletzt Benutzerinformation über Restrisiken.',
'Am Ende stehen technische Unterlagen, Betriebsanleitung, EU-Konformitätserklärung und CE-Kennzeichnung. Eine unvollständige Maschine bekommt Einbauerklärung und Montageanleitung, aber kein CE-Zeichen.',
'Wer mehrere Maschinen zu einer Gesamtheit verkettet, kann selbst zum Hersteller werden. Dasselbe gilt bei einer wesentlichen Veränderung: wenn durch den Umbau neue oder höhere Risiken entstehen, die die vorhandenen Schutzmaßnahmen nicht abdecken.',
'Für die elektrische Ausrüstung von Maschinen gilt DIN EN 60204-1 (VDE 0113-1): Netztrenneinrichtung, Schutzleitersystem, Not-Halt, Leiterfarben, Prüfungen vor der Übergabe.',
'Rechtsstand: Bis 19. Januar 2027 gilt die Maschinenrichtlinie 2006/42/EG, ab 20. Januar 2027 die EU-Maschinenverordnung 2023/1230. Neu sind unter anderem digitale Betriebsanleitungen, Anforderungen an Software und Schutz gegen Manipulation sowie der Begriff der wesentlichen Veränderung im Gesetzestext. Bitte den aktuellen Stand prüfen.',
'Der Betreiber bleibt verantwortlich für die sichere Verwendung: Gefährdungsbeurteilung nach Betriebssicherheitsverordnung, Prüfungen, Unterweisung.'],
fo:['Risiko = Schwere des Schadens · Wahrscheinlichkeit des Eintritts'],
mcq:[['Welche Maßnahme steht im Drei-Stufen-Verfahren an erster Stelle?','Sichere Konstruktion: die Gefahr gar nicht erst entstehen lassen','Warnschild anbringen','Persönliche Schutzausrüstung','Unterweisung','Erst was sich konstruktiv nicht lösen lässt, wird durch Schutzeinrichtungen abgesichert.'],
['Dein Betrieb verkettet zwei gekaufte Maschinen mit einem eigenen Handhabungsgerät und gemeinsamer Steuerung. Was kann daraus folgen?','Der Betrieb wird Hersteller der Gesamtmaschine und muss die Konformität bewerten','Nichts, beide Maschinen haben ja CE','Nur die Betriebsanleitungen werden zusammengeheftet','Die Berufsgenossenschaft übernimmt die Bewertung','An den Schnittstellen entstehen neue Gefährdungen, die keiner der Einzelhersteller betrachtet hat.'],
['Was erhält eine unvollständige Maschine, zum Beispiel ein Roboter ohne Greifer und Schutzzaun?','Einbauerklärung und Montageanleitung','CE-Zeichen und Konformitätserklärung','Ein Prüfsiegel der Berufsgenossenschaft','Gar keine Unterlagen','Erst die fertige Gesamtmaschine wird bewertet und gekennzeichnet.'],
['Wann ist ein Umbau eine wesentliche Veränderung?','Wenn neue oder höhere Risiken entstehen, die die vorhandenen Schutzmaßnahmen nicht abdecken','Immer, wenn ein Teil getauscht wird','Nur wenn die Maschine lackiert wird','Nie, solange der Hersteller noch existiert','Ein gleichwertiger Ersatz ist keine wesentliche Veränderung. Entscheidend ist die Risikobetrachtung des Umbaus.']]});
{const m=MI('tec','Maschinensicherheit: Risikobeurteilung & CE');
C.push({f:'tec',m,name:'Sicherheitsabstand zur Gefahrstelle',gen:r=>{const t1=r.p([20,30,40]),t2=r.p([80,120,150,200,260]),d=r.p([14,20,30]),T=(t1+t2)/1000,Cz=8*(d-14),S=2000*T+Cz;
 return{q:'Ein Lichtvorhang mit '+d+' mm Auflösung sichert eine Presse. Die Schutzeinrichtung reagiert in '+t1+' ms, die Maschine steht nach weiteren '+t2+' ms. Berechne den Mindestabstand mit K = 2000 mm/s und C = 8 · (d − 14 mm).',a:S,u:'mm',d:0,tol:1,
 sol:['T = '+t1+' ms + '+t2+' ms = '+(t1+t2)+' ms = '+nz(T,2)+' s','C = 8 · ('+d+' mm − 14 mm) = '+Cz+' mm','S = K · T + C = 2000 [[mm||s]] · '+nz(T,2)+' s + '+Cz+' mm = '+nz(S,0)+' mm']}}});
C.push({f:'tec',m,name:'Zulässige Nachlaufzeit',gen:r=>{const S=r.p([300,400,500,600]),t1=r.p([20,30,40]),T=S/2000*1000,t2=T-t1;
 return{q:'Ein Lichtvorhang mit 14 mm Auflösung (C = 0 mm) lässt sich nur '+S+' mm vor der Gefahrstelle anbringen. Er reagiert in '+t1+' ms. Wie lange darf die Maschine höchstens nachlaufen (K = 2000 mm/s)?',a:t2,u:'ms',d:0,tol:1,
 sol:['T = [[S||K]] = [['+S+' mm||2000 mm/s]] = '+nz(S/2000,3)+' s = '+nz(T,0)+' ms','Nachlaufzeit = '+nz(T,0)+' ms − '+t1+' ms = '+nz(t2,0)+' ms']}}});}

TM({t:'Systematische Fehlersuche & Diagnose',intro:'Eine Anlage steht, und alle schauen auf Dich. Du grenzt den Fehler mit System ein, statt Teile auf Verdacht zu tauschen, nutzt die Diagnose der Steuerung und sorgst dafür, dass derselbe Fehler nicht wiederkommt.',
pts:['Vor dem ersten Handgriff: Anlage sichern, Bediener befragen (Was ist passiert? Was war vorher? Was wurde verändert?), Meldungen und Störspeicher lesen.',
'Den Signalweg verfolgen: Sensor, Leitung, Eingang, Programm, Ausgang, Leitung, Aktor, Mechanik. An der SPS zeigen Leuchtdioden und Diagnose sofort, bis wohin das Signal kommt.',
'Halbierungsmethode: In der Mitte der Kette messen. Ist das Signal dort in Ordnung, liegt der Fehler dahinter, sonst davor. So ist der Fehler nach wenigen Schritten eingegrenzt.',
'Bei einer Schrittkette zeigt die Diagnose den aktiven Schritt und die fehlende Weiterschaltbedingung. Meist fehlt die Rückmeldung eines Sensors, nicht ein Ausgang.',
'Häufige Ursachen zuerst prüfen: Sensor verstellt oder verschmutzt, Stecker locker, Kabelbruch an bewegten Stellen, Druckluft fehlt, Sicherung ausgelöst, mechanisch verklemmt.',
'Immer nur eine Sache ändern und die Wirkung prüfen. Getauschte Teile, die nicht die Ursache waren, kommen zurück. Überbrücken von Sicherheitseinrichtungen ist keine Fehlersuche.',
'Sporadische Fehler brauchen Aufzeichnung: Trend, Störstatistik, Zeitstempel. Zusammenhänge mit Temperatur, Schicht, Produkt oder Vibration suchen.',
'Nach der Reparatur: Funktion und Sicherheit prüfen, Ursache und Maßnahme dokumentieren, Wiederholfehler auswerten und dauerhaft abstellen.'],
fo:['Verfügbarkeit: A = [[MTBF||MTBF + MTTR]]','Halbierungsmethode: Mit n Messungen lassen sich bis zu 2^{n} Abschnitte unterscheiden.'],
mcq:[['Eine Schrittkette bleibt in Schritt 4 stehen. Was prüfst Du zuerst?','Welche Weiterschaltbedingung fehlt','Ob die SPS getauscht werden muss','Die Netzspannung der Halle','Das Programm neu laden','Die Diagnose zeigt den Schritt und die fehlende Bedingung, meist eine Sensorrückmeldung.'],
['An einer Kette mit 16 Abschnitten suchst Du eine Unterbrechung mit der Halbierungsmethode. Wie viele Messungen brauchst Du höchstens?','4','8','16','2','Jede Messung halbiert den Bereich: 16, 8, 4, 2, 1.'],
['Der Eingang an der SPS leuchtet, der Zylinder fährt trotzdem nicht aus. Wo suchst Du weiter?','Auf der Ausgangsseite: Ausgang, Ventil, Druckluft, Mechanik','Am Sensor','Am Netzteil der Sensoren','Gar nicht, die SPS ist defekt','Das Signal kommt an. Der Fehler liegt weiter hinten im Signalweg.'],
['Warum tauschst Du Teile nicht auf Verdacht?','Es kostet Zeit und Geld und verdeckt die wirkliche Ursache','Weil Ersatzteile verboten sind','Weil der Hersteller das nicht erlaubt','Weil neue Teile schlechter sind','Verschwindet der Fehler zufällig, weiß niemand, warum, und er kommt wieder.']]});
{const m=MI('tec','Systematische Fehlersuche & Diagnose');
C.push({f:'tec',m,name:'Verfügbarkeit aus MTBF und MTTR',gen:r=>{const b=r.p([60,80,120,150,200,300]),t=r.p([1.5,2,3,4,5,6]),A=b/(b+t)*100;
 return{q:'Eine Station läuft im Mittel '+b+' h zwischen zwei Ausfällen (MTBF). Eine Reparatur dauert im Mittel '+nz(t,1)+' h (MTTR). Wie hoch ist die Verfügbarkeit?',a:A,u:'%',d:1,tol:.06,
 sol:['A = [[MTBF||MTBF + MTTR]]','A = [['+b+' h||'+b+' h + '+nz(t,1)+' h]] = '+nz(A/100,4)+' = '+nz(A,1)+' %']}}});
C.push({f:'tec',m,name:'Mittlere Reparaturdauer',gen:r=>{const n=r.p([4,5,6,8]),T=[...Array(n)].map(()=>r.p([20,30,35,45,50,60,75,90,120])),su=T.reduce((a,b)=>a+b,0),mt=su/n;
 return{q:'Im letzten Monat gab es '+n+' Störungen mit folgenden Reparaturzeiten in Minuten: '+T.join(', ')+'. Wie groß ist die mittlere Reparaturdauer?',a:mt,u:'min',d:1,tol:.06,
 sol:['Summe = '+T.join(' min + ')+' min = '+su+' min','MTTR = [['+su+' min||'+n+']] = '+nz(mt,1)+' min']}}});
C.push({f:'tec',m,name:'Stillstandskosten einer Störung',gen:r=>{const t=r.p([25,40,45,60,90]),k=r.p([180,240,300,450,600]),K=t/60*k;
 return{q:'Eine Störung legt die Linie '+t+' min still. Eine Stunde Stillstand kostet '+k+' €. Was kostet die Störung?',a:K,u:'€',d:0,tol:1,
 sol:['Kosten = Dauer · Stillstandskosten je Stunde','= [['+t+' min||60 min/h]] · '+k+' €/h = '+nz(K,0)+' €']}}});}

TM({t:'Service & Kundenunterstützung',intro:'Nach der Übergabe beginnt die längste Phase im Leben einer Anlage. Du organisierst Inbetriebnahme, Einweisung und Service beim Kunden so, dass Störungen schnell behoben werden und der Kunde wiederkommt.',
pts:['Zur Übergabe gehören Abnahmeprotokoll, vollständige Dokumentation, Einweisung der Bediener und der Instandhaltung sowie eine Liste der offenen Punkte mit Termin und Verantwortlichem.',
'Schulung nach Zielgruppe: Bediener lernen Bedienen und einfache Störungen, Einrichter das Umrüsten, Instandhalter Diagnose und Wartung. Üben an der Anlage wirkt mehr als Folien.',
'Serviceformen: Hotline, Fernwartung über gesicherten Zugang, Einsatz vor Ort, Wartungsvertrag mit festen Intervallen. Reaktionszeiten werden vertraglich vereinbart.',
'Fernwartung braucht Regeln: Zugang nur nach Freigabe durch den Kunden, verschlüsselt und protokolliert. Vor Ort muss jemand die Anlage beobachten, wenn von fern etwas bewegt wird.',
'Eine Störungsmeldung gut aufnehmen: Anlage, Meldungstext, was genau passiert, seit wann, was wurde verändert, was wurde schon versucht. Fotos und Störspeicher sparen den ersten Einsatz.',
'Gewährleistung ist die gesetzliche Haftung für Mängel bei Übergabe, Garantie eine freiwillige Zusage. Verschleißteile und Fehlbedienung sind meist ausgenommen. Im Zweifel klärt das der Vertrieb, nicht der Monteur vor Ort.',
'Jeder Einsatz endet mit einem Servicebericht: Ursache, Maßnahme, Material, Zeit, Unterschrift des Kunden. Wiederholte Fehler gehen als Rückmeldung an Konstruktion und Fertigung.',
'Beim Kunden gelten dessen Regeln: Anmeldung, Sicherheitsunterweisung, Freigabe der Arbeit, Abmeldung. Der Monteur vertritt dort den ganzen Betrieb.'],
fo:['Einsatzkosten = Fahrtzeit · Stundensatz + Arbeitszeit · Stundensatz + Fahrtkosten + Material'],
mcq:[['Was gehört zwingend zu einer Fernwartung?','Freigabe durch den Kunden und ein gesicherter, protokollierter Zugang','Ein dauerhaft offener Zugang ohne Passwort','Dass niemand an der Anlage steht','Ein Zugang über private Geräte','Wer von fern eingreift, braucht jemanden vor Ort und eine nachvollziehbare Verbindung.'],
['Was unterscheidet Garantie und Gewährleistung?','Gewährleistung ist gesetzlich, Garantie eine freiwillige Zusage','Es gibt keinen Unterschied','Garantie ist gesetzlich, Gewährleistung freiwillig','Beides gilt nur für Software','Die Garantie kann über die gesetzliche Haftung hinausgehen und eigene Bedingungen haben.'],
['Ein Kunde meldet „Anlage geht nicht“. Wie reagierst Du am Telefon?','Gezielt nachfragen: Meldung, Zeitpunkt, Veränderungen, bisherige Versuche','Sofort einen Monteur losschicken','Auf die Betriebsanleitung verweisen','Ein Ersatzteil auf Verdacht versenden','Eine gute Störungsaufnahme entscheidet, ob Telefon, Fernwartung oder Einsatz nötig sind.'],
['Was steht im Servicebericht?','Ursache, Maßnahme, Material, Zeit und die Unterschrift des Kunden','Nur die Fahrtzeit','Die Meinung des Monteurs über den Kunden','Nichts, wenn die Anlage wieder läuft','Der Bericht ist Abrechnungsgrundlage und Wissensspeicher zugleich.']]});
{const m=MI('tec','Service & Kundenunterstützung');
C.push({f:'tec',m,name:'Kosten eines Serviceeinsatzes',gen:r=>{const km=r.p([60,90,120,180,240]),tf=km*2/60,ta=r.p([2,3,4,5,6]),S=r.p([85,95,110]),kk=r.p([0.5,0.6,0.7]),ma=r.p([120,250,380,460]),K=(tf+ta)*S+km*2*kk+ma;
 return{q:'Ein Monteur fährt '+km+' km zum Kunden (einfach, im Mittel 60 km/h). Er arbeitet '+ta+' h vor Ort. Stundensatz '+S+' €, auch für die Fahrzeit. Fahrtkosten '+nz(kk,2)+' € je km, Material '+ma+' €. Was kostet der Einsatz?',a:K,u:'€',d:0,tol:1,
 sol:['Fahrzeit = [[2 · '+km+' km||60 km/h]] = '+nz(tf,1)+' h','Lohn = ('+nz(tf,1)+' h + '+ta+' h) · '+S+' €/h = '+nz((tf+ta)*S,0)+' €','Fahrtkosten = 2 · '+km+' km · '+nz(kk,2)+' €/km = '+nz(km*2*kk,0)+' €','Summe = '+nz((tf+ta)*S,0)+' € + '+nz(km*2*kk,0)+' € + '+ma+' € = '+nz(K,0)+' €']}}});
C.push({f:'tec',m,name:'Fernwartung oder Einsatz vor Ort',gen:r=>{const n=r.p([12,18,24,30]),q=r.p([40,50,60]),ke=r.p([650,800,950]),kf=r.p([90,120,150]),E=n*q/100*(ke-kf);
 return{q:'Im Jahr fallen '+n+' Serviceeinsätze an, jeder kostet im Mittel '+ke+' €. Mit Fernwartung lassen sich '+q+' % der Fälle für je '+kf+' € lösen. Wie viel wird im Jahr gespart?',a:E,u:'€',d:0,tol:1,
 sol:['Fälle per Fernwartung = '+n+' · '+nz(q/100,2)+' = '+nz(n*q/100,1),'Ersparnis je Fall = '+ke+' € − '+kf+' € = '+(ke-kf)+' €','Ersparnis im Jahr = '+nz(n*q/100,1)+' · '+(ke-kf)+' € = '+nz(E,0)+' €']}}});}

/* Ergänzungen in den gemeinsamen Themen aus Sicht der Mechatronik */
{const add=(t,p)=>{const i=MI('tec',t);if(i>=0)D.tec.modules[i].pts.push(p)};
add('Bussysteme & industrielle Netzwerke','IO-Link verbindet einzelne Sensoren und Aktoren Punkt zu Punkt mit einem Master und überträgt neben dem Schaltsignal auch Parameter und Diagnose. CAN und CANopen sind in Antrieben, mobilen Maschinen und Teilsystemen verbreitet. Beim Gerätetausch übernimmt der Master die Parameter, wenn das so eingerichtet ist.');
add('SPS: Aufbau & Programmierung','In der Mechatronik gehört zur Steuerung fast immer eine Schrittkette mit Betriebsarten: Automatik, Einrichten, Grundstellungsfahrt. Für die Fehlersuche zählt, dass Schritte und Weiterschaltbedingungen an der Bedienstation sichtbar sind.');
add('Sensoren & Aktoren','Aktoren in mechatronischen Anlagen sind meist Pneumatikzylinder mit Ventilinsel, Elektrozylinder und Servoachsen. Endlagen werden mit Zylinderschaltern abgefragt, deren Einstellung nach jedem Zylindertausch zu prüfen ist.');
add('Inbetriebnahme & Abnahme','Rechtsstand: Ab 20. Januar 2027 gilt die EU-Maschinenverordnung 2023/1230 anstelle der Maschinenrichtlinie 2006/42/EG. Für Abnahmen nach diesem Datum bitte den aktuellen Stand prüfen.');}
}
