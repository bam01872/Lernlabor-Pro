/* ===== Lernlabor Pro, Pakete E3 und E4: Elektrotechnik, Automatisierungs- & Informationstechnik. Eigene Texte und Aufgaben.
   Zahlenwerte aus Normen (Sicherheitsabstand, Reduktionsfaktoren) sind Beispielwerte. ===== */
/* Diese Themen nutzt Mechatronik mit (gemeinsamer Kern) */
if(FR==='el'||FR==='mt'){
TM({t:'Schaltpläne & Schaltungstechnik',intro:'Der Stromlaufplan ist die gemeinsame Sprache von Planung, Montage und Instandhaltung. Du liest ihn sicher, erkennst die Grundschaltungen und weißt, warum ein Stopp-Taster immer ein Öffner ist.',
pts:['Der Stromlaufplan in aufgelöster Darstellung trennt Hauptstromkreis (Energie zum Motor) und Steuerstromkreis (Befehle und Verriegelungen). Kontakte und Spule eines Schützes stehen an verschiedenen Stellen, gehören aber über die Kennzeichnung zusammen.',
'Kennbuchstaben nach Aufgabe: Q schaltet Energie (Schütz, Leistungsschalter), F schützt (Sicherung, Motorschutz), S ist ein Handbefehl (Taster), K verarbeitet Signale (Hilfsschütz, Relais), B ist ein Sensor, M ein Motor, P meldet (Leuchte).',
'Selbsthaltung: Ein Schließer des Schützes liegt parallel zum Ein-Taster. Nach dem Loslassen hält sich das Schütz selbst, bis der Stopp-Taster öffnet.',
'Stopp, Not-Halt und Grenztaster sind Öffner. Bricht ein Draht, wirkt das wie ein Stopp. Diese Drahtbruchsicherheit ist ein Grundprinzip.',
'Verriegelung: Bei der Wendeschaltung sperren sich die beiden Schütze gegenseitig über Öffner, damit nie beide zugleich anziehen. Sonst gäbe es einen Kurzschluss zwischen zwei Außenleitern.',
'Zu jeder Anlage gehören aktuelle Unterlagen: Stromlaufplan, Klemmenplan, Stückliste, Aufbauplan. Änderungen werden sofort nachgetragen (Revisionsstand).'],
mcq:[['Warum ist der Stopp-Taster als Öffner ausgeführt?','Bei Drahtbruch schaltet die Anlage ab','Öffner sind billiger','Öffner schalten schneller','Schließer gibt es nicht für 24 V','Der sichere Zustand ist der stromlose Zustand.'],
['Was bewirkt der Schließer des Schützes parallel zum Ein-Taster?','Selbsthaltung','Verriegelung','Drehrichtungsumkehr','Überlastschutz','Der Kontakt überbrückt den Taster, sobald das Schütz angezogen hat.'],
['Welcher Kennbuchstabe steht für ein Hauptschütz?','Q','S','B','P','Q kennzeichnet Betriebsmittel, die Energie schalten.'],
['Wozu dient die Verriegelung in der Wendeschaltung?','Sie verhindert, dass beide Schütze gleichzeitig anziehen','Sie hält das Schütz nach dem Start','Sie begrenzt den Anlaufstrom','Sie misst den Motorstrom','Ohne Verriegelung könnten zwei Außenleiter kurzgeschlossen werden.']]});

TM({t:'SPS: Aufbau & Programmierung',intro:'Die speicherprogrammierbare Steuerung ersetzt Schützschaltungen durch ein Programm. Du verstehst, wie sie arbeitet, welche Sprachen es gibt und wie Du eine Programmänderung sicher in die Anlage bringst.',
pts:['Aufbau: Stromversorgung, Zentraleinheit (CPU), Eingangs- und Ausgangsbaugruppen, Kommunikationsschnittstellen. Dezentrale Baugruppen sitzen an der Maschine und hängen am Bus.',
'Die SPS arbeitet zyklisch: Eingänge einlesen, Programm bearbeiten, Ausgänge ausgeben, und wieder von vorn. Ein Signal, das kürzer ist als ein Zyklus, kann verloren gehen.',
'Programmiersprachen nach IEC 61131-3: Kontaktplan (KOP), Funktionsbausteinsprache (FBS/FUP), Strukturierter Text (ST), Ablaufsprache (AS) für Schrittketten.',
'Grundbausteine: UND, ODER, NICHT, Speicher (Setzen und Rücksetzen), Zeiten (Einschaltverzögerung TON, Ausschaltverzögerung TOF), Zähler, Vergleicher.',
'Auch an der SPS bleibt der Stopp-Taster ein Öffner. Im Programm wird er deshalb auf Signal 1 abgefragt.',
'Programmänderung sicher einspielen: Stand sichern, Änderung dokumentieren, außerhalb der Produktion laden, alle Betriebsarten und Sicherheitsfunktionen testen, neuen Stand ablegen.'],
fo:['Ungünstigste Reaktionszeit (Näherung): t_R = t_Ein + 2 · t_Zyklus + t_Aus.'],
mcq:[['In welcher Reihenfolge arbeitet die SPS?','Eingänge lesen, Programm bearbeiten, Ausgänge ausgeben','Ausgänge ausgeben, Eingänge lesen, Programm bearbeiten','Programm bearbeiten, dann einmalig Eingänge lesen','Alles gleichzeitig','Dieser Ablauf wiederholt sich ständig. Seine Dauer ist die Zykluszeit.'],
['Welche Sprache eignet sich besonders für Schrittketten?','Ablaufsprache (AS)','Kontaktplan','Anweisungsliste','Keine','Schritte und Weiterschaltbedingungen bilden den Ablauf direkt ab.'],
['Ein Signal ist kürzer als die Zykluszeit. Was kann passieren?','Die SPS erkennt es nicht','Die SPS geht in Stopp','Der Ausgang bleibt dauerhaft gesetzt','Das Programm wird gelöscht','Schnelle Signale brauchen schnelle Eingänge oder Alarme.'],
['Was gehört vor jede Programmänderung?','Den aktuellen Stand sichern','Die Anlage erden','Den Motor abklemmen','Die Batterie tauschen','Nur mit der Sicherung kommst Du bei Problemen zum alten Stand zurück.']]});

TM({t:'Sensoren & Aktoren',intro:'Sensoren sind die Sinne der Anlage, Aktoren ihre Muskeln. Du wählst den passenden Sensor für Werkstoff und Umgebung und rechnest Messsignale in die echte Größe um.',
pts:['Induktive Näherungsschalter erkennen Metall, kapazitive fast alle Stoffe, auch Flüssigkeiten hinter einer Kunststoffwand. Optische Sensoren (Lichtschranke, Lichttaster) haben große Reichweite, Ultraschallsensoren sind unempfindlich gegen Farbe und Staub.',
'Der Nennschaltabstand eines induktiven Sensors gilt für Stahl. Bei anderen Metallen ist er kleiner, als Beispielwerte etwa Edelstahl 0,7, Messing 0,5, Aluminium 0,4.',
'Analoge Sensoren liefern einen Wert, meist als Stromsignal 4 bis 20 mA. Weil 4 mA der kleinste gültige Wert sind, erkennt die Steuerung einen Drahtbruch (0 mA) sofort.',
'Der Pt100 misst Temperatur über seinen Widerstand: 100 Ω bei 0 °C, je Grad rund 0,385 Ω mehr.',
'Schaltende Sensoren gibt es als PNP (schaltet Plus, in Europa üblich) und NPN, jeweils als Schließer oder Öffner.',
'Aktoren setzen Signale in Wirkung um: Schütz, Magnetventil, Stellventil, Motor mit Umrichter. Induktive Lasten brauchen eine Schutzbeschaltung, zum Beispiel eine Freilaufdiode.'],
fo:['Realer Schaltabstand: s = s_n · Reduktionsfaktor.',
'Messwert aus dem Stromsignal: x = x_min + [[I − 4 mA||16 mA]] · (x_max − x_min).',
'Pt100: R = 100 Ω · (1 + 0,00385 · ϑ) mit ϑ in °C.'],
mcq:[['Welcher Sensor erkennt den Füllstand von Granulat durch eine Kunststoffwand?','Kapazitiver Sensor','Induktiver Sensor','Pt100','Reedkontakt','Kapazitive Sensoren reagieren auf fast alle Stoffe.'],
['Ein Drucksensor liefert 0 mA. Was schließt Du daraus?','Drahtbruch oder Sensor defekt','Der Druck ist null','Der Druck ist maximal','Alles in Ordnung','Bei 4 bis 20 mA wäre null Druck 4 mA. 0 mA ist kein gültiger Wert.'],
['Ein induktiver Sensor mit s_n = 8 mm soll Aluminium erkennen (Faktor 0,4). Wie groß ist der Schaltabstand?','3,2 mm','8 mm','20 mm','0,4 mm','8 mm · 0,4 = 3,2 mm.'],
['Welchen Widerstand hat ein Pt100 bei 0 °C?','100 Ω','0 Ω','138,5 Ω','385 Ω','Daher der Name: Platin, 100 Ω bei 0 °C.']]});

TM({t:'Regelungstechnik',intro:'Eine Steuerung gibt vor, eine Regelung prüft nach und korrigiert. Du kennst den Regelkreis mit seinen Größen, die Wirkung von P-, I- und D-Anteil und weißt, woran Du einen schlecht eingestellten Regler erkennst.',
pts:['Steuern: offener Wirkungsweg, Störungen werden nicht ausgeglichen. Regeln: geschlossener Kreis, die Regelgröße wird gemessen, mit dem Sollwert verglichen und nachgeführt.',
'Größen im Regelkreis: Führungsgröße w (Sollwert), Regelgröße x (Istwert), Regeldifferenz e, Stellgröße y, Störgröße z.',
'P-Regler: reagiert sofort und proportional. Bei Strecken mit Ausgleich bleibt eine Regelabweichung.',
'I-Anteil: verändert die Stellgröße so lange, bis die Abweichung null ist. Zu viel I-Anteil führt zum Überschwingen.',
'D-Anteil: reagiert auf die Änderungsgeschwindigkeit und bremst früh. Bei verrauschten Signalen macht er die Regelung unruhig.',
'Totzeit macht eine Strecke schwer regelbar: Der Regler sieht die Wirkung seiner Stellgröße verspätet. Abhilfe: Sensor näher an den Eingriff, Regler vorsichtiger einstellen.',
'Der Zweipunktregler kennt nur Ein und Aus. Die Regelgröße pendelt innerhalb der Schaltdifferenz, zum Beispiel bei Heizung oder Druckluftkompressor.'],
fo:['Regeldifferenz: e = w − x.',
'P-Regler: y = K_P · e.',
'Bleibende Regelabweichung bei P-Regler und Strecke mit Ausgleich: e_∞ = [[w||1 + K_P · K_S]] (ohne Störung, Betrag der Sollwertänderung w).'],
mcq:[['Was unterscheidet Regeln von Steuern?','Der Istwert wird gemessen und zurückgeführt','Es wird ein Rechner verwendet','Es gibt keine Störgrößen','Die Stellgröße ist immer analog','Die Rückführung schließt den Kreis und gleicht Störungen aus.'],
['Welcher Regleranteil beseitigt die bleibende Regelabweichung?','I-Anteil','P-Anteil','D-Anteil','Keiner','Der I-Anteil summiert die Abweichung auf, bis sie null ist.'],
['Eine Temperaturregelung schwingt dauerhaft um den Sollwert. Was ist ein sinnvoller erster Schritt?','Verstärkung K_P verringern','Verstärkung K_P erhöhen','Sollwert erhöhen','Sensor ausbauen','Zu hohe Verstärkung, vor allem bei Totzeit, lässt den Kreis schwingen.'],
['Wie verhält sich die Regelgröße beim Zweipunktregler?','Sie pendelt zwischen zwei Schaltpunkten','Sie bleibt genau auf dem Sollwert','Sie steigt stetig an','Sie ist immer null','Die Breite des Pendelns heißt Schaltdifferenz oder Hysterese.']]});

TM({t:'Bussysteme & industrielle Netzwerke',intro:'Statt jeden Sensor einzeln zu verdrahten, hängen Feldgeräte heute an einem Bus oder am Netzwerk. Du kennst die Ebenen der Automatisierung, die gängigen Systeme und die typischen Fehler bei Aufbau und Adressierung.',
pts:['Ebenen der Automatisierung: Feldebene (Sensoren, Aktoren), Steuerungsebene (SPS), Leitebene (Bedienen und Beobachten), Betriebsleitebene (Auftrags- und Produktionsplanung). Nach oben werden die Datenmengen größer, die Zeitanforderungen lockerer.',
'Feldbusse mit Linienaufbau, zum Beispiel PROFIBUS, brauchen an beiden Enden einen Abschlusswiderstand. Fehlt er, gibt es Reflexionen und sporadische Ausfälle.',
'Industrial Ethernet, zum Beispiel PROFINET, wird über Switches meist im Stern oder Ring aufgebaut. Eine Kupferstrecke ist bis 100 m lang, darüber Lichtwellenleiter.',
'AS-Interface verbindet einfache Sensoren und Aktoren über ein zweiadriges Kabel für Daten und Energie. IO-Link ist eine Punkt-zu-Punkt-Verbindung, die Parameter und Diagnose bis zum Sensor bringt.',
'Jeder Teilnehmer braucht eine eindeutige Adresse. Doppelte Adressen und vertauschte Gerätenamen sind die häufigsten Inbetriebnahmefehler.',
'Ring mit Redundanz: Fällt eine Strecke aus, läuft die Kommunikation über den anderen Weg weiter.'],
fo:['Nutzbare Adressen in einem IP-Netz: 2ⁿ − 2 mit n als Zahl der Hostbits. Beispiel: Maske 255.255.255.0 hat 8 Hostbits, also 254 Adressen.',
'Übertragungszeit = [[Datenmenge||Datenrate]]. Achtung: 1 Byte = 8 Bit.'],
mcq:[['Was fehlt vermutlich, wenn ein Linienbus sporadisch ausfällt?','Ein Abschlusswiderstand am Ende','Ein größerer Motor','Ein RCD','Eine zweite SPS','Ohne Abschluss werden Signale am Leitungsende reflektiert.'],
['Wie lang darf eine Kupferstrecke bei Industrial Ethernet höchstens sein?','100 m','10 m','500 m','2 km','Für größere Strecken nimmt man Lichtwellenleiter oder setzt Switches dazwischen.'],
['Welche Ebene liegt direkt über der Feldebene?','Steuerungsebene','Betriebsleitebene','Leitebene','Unternehmensebene','Die SPS sammelt die Feldsignale und steuert die Aktoren.'],
['Wie viele Geräte passen in ein Netz mit der Maske 255.255.255.0?','254','256','255','1024','Zwei der 256 Adressen sind für Netz und Broadcast reserviert.']]});

TM({t:'Funktionale Sicherheit von Steuerungen',intro:'Wenn eine Steuerung Menschen schützt, reicht „funktioniert meistens“ nicht. Du leitest aus dem Risiko ab, wie zuverlässig eine Sicherheitsfunktion sein muss, und erkennst, ob Aufbau und Abstand der Schutzeinrichtung passen.',
pts:['Am Anfang steht die Risikobeurteilung des Herstellers. Reihenfolge der Maßnahmen: sichere Konstruktion, technische Schutzmaßnahmen, Hinweise und Unterweisung.',
'Für jede Sicherheitsfunktion wird der erforderliche Performance Level bestimmt, von PL a (geringes Risiko) bis PL e (hohes Risiko). Maßgeblich sind Schwere der Verletzung, Häufigkeit des Aufenthalts und Möglichkeit, der Gefahr auszuweichen.',
'Hohe Performance Level brauchen zwei Kanäle: zwei Kontakte am Not-Halt, zwei Schütze in Reihe, überwacht von einem Sicherheitsschaltgerät oder einer Sicherheits-SPS. Ein einzelner Fehler darf die Schutzfunktion nicht aufheben.',
'Not-Halt: Stopp-Kategorie 0 trennt die Energie sofort, Stopp-Kategorie 1 setzt den Antrieb erst gesteuert still und trennt dann. Der Not-Halt ist eine ergänzende Maßnahme und ersetzt keine Schutzeinrichtung.',
'Ein Lichtvorhang braucht Abstand zur Gefahrstelle. In der Zeit vom Unterbrechen bis zum Stillstand darf die Hand die Gefahrstelle nicht erreichen.',
'Schutzeinrichtungen werden nach Montage und Änderung validiert und regelmäßig geprüft. Manipulation ist kein Kavaliersdelikt: Du suchst die Ursache (meist umständliche Bedienung) und stellst sie ab.'],
fo:['Mindestabstand eines Lichtvorhangs: S = K · T + C mit K als Annäherungsgeschwindigkeit, T als gesamter Nachlaufzeit und C als Zuschlag.',
'Beispielwerte: K = 2000 [[mm||s]] für die Hand, C = 8 · (d − 14 mm) mit d als Auflösung des Lichtvorhangs.'],
mcq:[['Wovon hängt der erforderliche Performance Level ab?','Von Schwere, Häufigkeit und Vermeidbarkeit der Gefährdung','Vom Preis der Steuerung','Von der Netzspannung','Von der Zykluszeit der SPS','Je höher das Risiko, desto zuverlässiger muss die Sicherheitsfunktion sein.'],
['Warum hat ein Not-Halt-Taster zwei Öffnerkontakte?','Damit ein einzelner Fehler die Funktion nicht aufhebt','Damit er doppelt so schnell schaltet','Für zwei verschiedene Spannungen','Aus Kostengründen','Zweikanaligkeit mit Überwachung erkennt auch verschweißte Kontakte.'],
['Was unterscheidet Stopp-Kategorie 1 von Kategorie 0?','Der Antrieb wird erst gesteuert stillgesetzt, dann getrennt','Die Energie bleibt dauerhaft anliegen','Es gibt keinen Unterschied','Kategorie 1 gilt nur für Pneumatik','Das ist sinnvoll, wenn ein geregeltes Bremsen schneller ist als Austrudeln.'],
['An einer Presse ist der Schutztürschalter überbrückt. Was tust Du als Meister?','Anlage stillsetzen, Zustand herstellen, Ursache klären und unterweisen','Bis zur nächsten Wartung weiterlaufen lassen','Den Schalter ganz ausbauen','Nur ein Schild aufhängen','Manipulation hat fast immer einen Grund im Arbeitsablauf. Der muss beseitigt werden.']]});

TM({t:'IT-Sicherheit & Datensicherung in der Produktion',intro:'Vernetzte Anlagen sind angreifbar, und ein verlorenes SPS-Programm kann Tage kosten. Du sorgst mit einfachen, festen Regeln dafür, dass die Produktion verfügbar bleibt und nach einem Ausfall schnell wieder läuft.',
pts:['Schutzziele: Verfügbarkeit, Integrität (Daten und Programme sind unverändert) und Vertraulichkeit. In der Produktion steht die Verfügbarkeit an erster Stelle.',
'Netze trennen: Büro- und Produktionsnetz sind durch eine Firewall getrennt, innerhalb der Produktion gibt es Zonen. Nur nötige Verbindungen sind freigegeben.',
'Fernwartung läuft nur über einen freigegebenen, protokollierten Zugang, der bei Bedarf geöffnet und danach wieder geschlossen wird.',
'Typische Einfallstore: fremde USB-Sticks, Service-Notebooks, Standardpasswörter, ungepflegte Altsysteme. Dagegen helfen Benutzerrollen, eigene Passwörter und geplante Updates im Wartungsfenster.',
'Datensicherung nach der 3-2-1-Regel: drei Kopien, auf zwei verschiedenen Medien, eine davon außer Haus oder getrennt vom Netz.',
'Gesichert werden auch SPS-Programme, Umrichter-Parameter, Rezepte und Roboterprogramme, jeweils nach jeder Änderung. Eine Sicherung zählt erst, wenn die Wiederherstellung getestet ist.',
'Für den Ernstfall gibt es einen Notfallplan: Wer entscheidet, wen rufe ich an, wo liegen Sicherungen und Ersatzgeräte?'],
mcq:[['Welches Schutzziel steht in der Produktion an erster Stelle?','Verfügbarkeit','Vertraulichkeit','Anonymität','Schnelligkeit','Eine stehende Anlage kostet sofort Geld. Integrität und Vertraulichkeit bleiben trotzdem wichtig.'],
['Was sagt die 3-2-1-Regel?','Drei Kopien, zwei Medien, eine außer Haus','Drei Passwörter, zwei Nutzer, ein Rechner','Drei Tage, zwei Wochen, ein Monat','Drei Firewalls, zwei Netze, ein Server','So übersteht die Sicherung auch Brand, Diebstahl oder Verschlüsselung.'],
['Ein Servicetechniker will seinen USB-Stick an die Anlage stecken. Was ist richtig?','Nur nach Prüfung des Sticks oder über einen freigegebenen Datenweg','Immer erlaubt, er ist ja vom Hersteller','Nur nachts erlaubt','Nur an der SPS, nicht am Bedienpanel','Wechseldatenträger sind ein häufiger Weg für Schadsoftware.'],
['Wann ist eine Datensicherung wirklich brauchbar?','Wenn die Wiederherstellung getestet wurde','Wenn die Datei groß genug ist','Wenn sie auf demselben Rechner liegt','Wenn sie älter als ein Jahr ist','Erst der Test zeigt, ob Stand und Vollständigkeit stimmen.']]});

{const tec='tec';
{const m=MI(tec,'SPS: Aufbau & Programmierung');
C.push({f:tec,m,name:'Ungünstigste Reaktionszeit',gen:r=>{const te=r.p([3,5,10]),tz=r.step(5,40,5),ta=r.p([1,5,10]),t=te+2*tz+ta;
 return{q:'Eine SPS hat '+tz+' ms Zykluszeit. Die Eingangsverzögerung beträgt '+te+' ms, die Ausgangsverzögerung '+ta+' ms. Wie groß ist die Reaktionszeit im ungünstigsten Fall?',a:t,u:'ms',d:0,tol:0,
 sol:['t_R = t_Ein + 2 · t_Zyklus + t_Aus','t_R = '+te+' ms + 2 · '+tz+' ms + '+ta+' ms = '+t+' ms','Im ungünstigsten Fall ändert sich das Signal kurz nach dem Einlesen und wird erst im nächsten Zyklus bearbeitet.']}}});}
{const m=MI(tec,'Sensoren & Aktoren');
C.push({f:tec,m,name:'Messwert aus 4 bis 20 mA',gen:r=>{const xm=r.p([6,10,16,25]),I=r.step(5,19,0.5),x=(I-4)/16*xm;
 return{q:'Ein Drucksensor hat den Messbereich 0 bis '+xm+' bar und liefert 4 bis 20 mA. Gemessen werden '+nz(I,1)+' mA. Wie groß ist der Druck?',a:x,u:'bar',d:2,tol:0.01,
 sol:['x = x_min + [[I − 4 mA||16 mA]] · (x_max − x_min)','x = 0 bar + [['+nz(I,1)+' mA − 4 mA||16 mA]] · '+xm+' bar = '+nz(x,2)+' bar']}}});
C.push({f:tec,m,name:'Temperatur am Pt100',gen:r=>{const th=r.step(20,300,10),R=100*(1+0.00385*th);
 return{q:'An einem Pt100 misst Du '+nz(R,1)+' Ω. Welche Temperatur hat der Fühler?',a:th,u:'°C',d:0,tol:0.02,
 sol:['R = 100 Ω · (1 + 0,00385 · ϑ), umgestellt: ϑ = [[R − 100 Ω||0,385 Ω/°C]]','ϑ = [['+nz(R,1)+' Ω − 100 Ω||0,385 Ω/°C]] = '+th+' °C']}}});
C.push({f:tec,m,name:'Schaltabstand bei anderem Werkstoff',gen:r=>{const sn=r.p([2,4,8,15]),w=r.p([['Edelstahl',0.7],['Messing',0.5],['Aluminium',0.4]]),s=sn*w[1];
 return{q:'Ein induktiver Sensor hat den Nennschaltabstand '+sn+' mm. Er soll ein Teil aus '+w[0]+' erkennen (Reduktionsfaktor '+nt(w[1])+'). Wie groß ist der Schaltabstand?',a:s,u:'mm',d:1,tol:0.01,
 sol:['s = s_n · Reduktionsfaktor','s = '+sn+' mm · '+nt(w[1])+' = '+nz(s,1)+' mm','Der Sensor muss näher an das Teil als bei Stahl.']}}});}
{const m=MI(tec,'Regelungstechnik');
C.push({f:tec,m,name:'Bleibende Regelabweichung',gen:r=>{const w=r.step(20,80,10),kp=r.p([1,2,4,5,9]),ks=r.p([0.5,1,2]),e=w/(1+kp*ks);
 return{q:'Ein P-Regler mit K_P = '+kp+' regelt eine Strecke mit Ausgleich (K_S = '+nt(ks)+'). Der Sollwert wird um '+w+' K erhöht. Wie groß ist die bleibende Regelabweichung?',a:e,u:'K',d:1,tol:0.02,
 sol:['e_∞ = [[w||1 + K_P · K_S]]','e_∞ = [['+w+' K||1 + '+kp+' · '+nt(ks)+']] = '+nz(e,1)+' K','Erst ein I-Anteil bringt die Abweichung auf null.']}}});
C.push({f:tec,m,name:'Stellgröße des P-Reglers',gen:r=>{const w=r.step(40,90,5),x=w-r.step(2,12,1),kp=r.p([2,3,4,5]),y=kp*(w-x);
 return{q:'Sollwert '+w+' °C, Istwert '+x+' °C. Der P-Regler hat K_P = '+kp+' % je K. Welche Stellgröße gibt er aus?',a:y,u:'%',d:0,tol:0,
 sol:['e = w − x = '+w+' °C − '+x+' °C = '+(w-x)+' K','y = K_P · e = '+kp+' %/K · '+(w-x)+' K = '+y+' %']}}});}
{const m=MI(tec,'Bussysteme & industrielle Netzwerke');
C.push({f:tec,m,name:'Nutzbare Adressen',gen:r=>{const n=r.i(3,10),N=Math.pow(2,n)-2;
 return{q:'Ein Produktionsnetz hat '+n+' Hostbits. Wie viele Geräte können höchstens eine Adresse bekommen?',a:N,u:'Adressen',d:0,tol:0,
 sol:['Adressen = 2ⁿ − 2','Adressen = 2^'+n+' − 2 = '+Math.pow(2,n)+' − 2 = '+N,'Zwei Adressen sind für das Netz selbst und den Broadcast reserviert.']}}});
C.push({f:tec,m,name:'Übertragungszeit einer Sicherung',gen:r=>{const D=r.step(200,1200,100),v=r.p([10,100]),t=D*8/v;
 return{q:'Eine Sicherungsdatei mit '+D+' MB soll über eine Verbindung mit '+v+' Mbit/s übertragen werden. Wie lange dauert das mindestens?',a:t,u:'s',d:0,tol:0.01,
 sol:['Datenmenge in Bit: '+D+' MB · 8 = '+nz(D*8,0)+' Mbit','t = [[Datenmenge||Datenrate]] = [['+nz(D*8,0)+' Mbit||'+v+' Mbit/s]] = '+nz(t,0)+' s'+(t>=120?' (rund '+nz(t/60,0)+' min)':'')]}}});}
{const m=MI(tec,'Funktionale Sicherheit von Steuerungen');
C.push({f:tec,m,name:'Mindestabstand des Lichtvorhangs',gen:r=>{const T=r.step(80,300,10),d=r.p([14,20,30]),Cz=8*(d-14),S=2000*T/1000+Cz;
 return{q:'Eine Presse braucht vom Unterbrechen des Lichtvorhangs bis zum Stillstand '+T+' ms. Der Lichtvorhang hat '+d+' mm Auflösung. Rechne mit K = 2000 mm/s und C = 8 · (d − 14 mm). Wie groß ist der Mindestabstand?',a:S,u:'mm',d:0,tol:0.005,
 sol:['C = 8 · ('+d+' mm − 14 mm) = '+Cz+' mm','S = K · T + C = 2000 mm/s · '+nt(T/1000)+' s + '+Cz+' mm = '+nz(S,0)+' mm','Ist dafür kein Platz, muss die Nachlaufzeit kürzer werden, zum Beispiel durch eine bessere Bremse.']}}});}
}
}
