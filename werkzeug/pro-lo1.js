/* ===== Lernlabor Pro, Paket L1: Logistik (Geprüfter Logistikmeister). Eigene Texte und Aufgaben, Zahlen sind Beispielwerte.
   Gliederung nach den Qualifikationsschwerpunkten Logistikkonzepte, Leistungserstellung, Prozesssteuerung und -optimierung.
   Angaben zu Normen, Zoll-, Transport- und Gefahrgutrecht sind eine Lernhilfe und keine Rechtsberatung; maßgeblich ist der aktuelle Stand der Vorschriften. ===== */
if(FR==='lo'){
const LT=(t,f)=>{const m=MI('tec',t);f(m,o=>C.push(Object.assign({f:'tec',m},o)))};

TM({t:'Logistikstrategien & Lieferkette',intro:'Logistik heißt: das Richtige zur richtigen Zeit am richtigen Ort, in richtiger Menge und Qualität, zu richtigen Kosten. Du kennst die Strategien, mit denen eine Lieferkette gesteuert wird, und ihre Risiken.',
pts:['Die Lieferkette reicht vom Lieferanten des Lieferanten bis zum Kunden des Kunden. Beschaffungs-, Produktions-, Distributions- und Entsorgungslogistik greifen ineinander.',
'Push: Es wird nach Plan auf Lager gefertigt und geliefert. Pull: Der Verbrauch löst den Nachschub aus, zum Beispiel mit Kanban. Pull senkt Bestände, braucht aber stabile Prozesse.',
'Just-in-time liefert genau zum Bedarfszeitpunkt, Just-in-sequence zusätzlich in der Reihenfolge der Montage. Beides verlagert Bestand und Risiko auf Transport und Lieferanten.',
'Peitscheneffekt: Kleine Schwankungen beim Kunden schaukeln sich entlang der Kette auf, weil jede Stufe Sicherheiten aufschlägt. Abhilfe: Bedarfsdaten teilen, kleine Lose, kurze Lieferzeiten.',
'Eigenleistung oder Fremdvergabe: Lager, Transport oder ganze Abläufe können an Logistikdienstleister gehen. Entscheidend sind Kosten, Auslastung, Wissen, Abhängigkeit und Schnittstellen.',
'Risiken der Lieferkette: Ausfall eines Lieferanten, Transportstörung, Qualitätsproblem. Vorsorge: zweite Bezugsquelle, Sicherheitsbestand für kritische Teile, Notfallplan.',
'Ziele stehen im Konflikt: hoher Lieferservice, niedrige Bestände, niedrige Kosten. Die Strategie legt fest, was für welche Artikel Vorrang hat.'],
fo:['Lieferbereitschaftsgrad = [[sofort bediente Anforderungen||alle Anforderungen]]','Liefertreue = [[termingerechte Lieferungen||alle Lieferungen]]'],
mcq:[['Was löst beim Pull-Prinzip den Nachschub aus?','Der tatsächliche Verbrauch','Der Jahresplan','Der Lieferant','Die Buchhaltung','Erst wenn etwas entnommen wurde, wird nachgeliefert.'],
['Was beschreibt der Peitscheneffekt?','Bestellschwankungen werden entlang der Lieferkette immer größer','Lkw fahren zu schnell','Preise steigen jedes Jahr','Lager werden immer kleiner','Jede Stufe bestellt etwas mehr „zur Sicherheit“.'],
['Welches Risiko steigt bei Just-in-time?','Ein Transportausfall führt schnell zum Bandstillstand','Das Lager wird zu voll','Die Ware veraltet','Die Kapitalbindung steigt','Ohne Puffer schlägt jede Störung sofort durch.'],
['Was spricht für die Vergabe an einen Logistikdienstleister?','Schwankende Mengen lassen sich besser auffangen, feste Kosten werden variabel','Man behält alles selbst in der Hand','Schnittstellen entfallen','Die Abhängigkeit sinkt','Der Dienstleister bündelt Mengen mehrerer Kunden.']]});
LT('Logistikstrategien & Lieferkette',(m,A)=>{
A({name:'Lieferbereitschaftsgrad',gen:r=>{const n=r.p([400,500,800,1200,1500]),f=r.p([12,18,24,30,45]),g=(n-f)/n*100;
 return{q:'Von '+n+' Anforderungen konnten '+f+' nicht sofort aus dem Lager bedient werden. Wie hoch ist der Lieferbereitschaftsgrad?',a:g,u:'%',d:1,tol:.005,
 sol:['sofort bedient = '+n+' − '+f+' = '+(n-f),'Lieferbereitschaftsgrad = [['+(n-f)+'||'+n+']] = '+nz(g/100,3)+' = '+nz(g,1)+' %']}}});
A({name:'Liefertreue eines Lieferanten',gen:r=>{const n=r.p([40,60,80,120]),v=r.p([3,5,6,9]),g=(n-v)/n*100;
 return{q:'Ein Lieferant hat im Quartal '+n+' Lieferungen geschickt, '+v+' davon verspätet. Wie hoch ist die Liefertreue?',a:g,u:'%',d:1,tol:.005,
 sol:['Liefertreue = [[termingerechte Lieferungen||alle Lieferungen]]','= [['+(n-v)+'||'+n+']] = '+nz(g,1)+' %']}}});});

TM({t:'Beschaffung & Bestandsmanagement',intro:'Zu viel Bestand bindet Kapital, zu wenig legt die Fertigung still. Du rechnest Meldebestand, Reichweite und Sicherheitsbestand und liest den Bestandsverlauf wie eine Fieberkurve.',
pts:['Der Bestand verläuft wie ein Sägezahn: Mit jeder Lieferung springt er hoch, durch den Verbrauch sinkt er gleichmäßig ab.',
'Meldebestand: Bei diesem Bestand wird bestellt. Er deckt den Verbrauch während der Wiederbeschaffungszeit und enthält den Sicherheitsbestand.',
'Der Sicherheitsbestand fängt Lieferverzug, Mehrverbrauch und Fehlmengen auf. Er wird im Normalfall nicht angegriffen und bindet dauerhaft Kapital.',
'Bestellverfahren: Beim Bestellpunktverfahren wird bei Erreichen des Meldebestands bestellt, beim Bestellrhythmusverfahren in festen Abständen bis zu einem Höchstbestand.',
'ABC-Analyse ordnet nach Wert, XYZ-Analyse nach Regelmäßigkeit des Verbrauchs. AX-Teile werden eng und bedarfsgenau gesteuert, CZ-Teile mit einfachen Verfahren.',
'Reichweite sagt, wie lange der Bestand beim heutigen Verbrauch reicht. Lange Reichweiten bei teuren Teilen sind ein Warnsignal, ebenso Artikel ohne Bewegung.',
'Bestandsdaten müssen stimmen. Inventurdifferenzen entstehen durch Buchungsfehler, falsche Mengeneinheiten, Schwund und Bruch. Ohne richtige Bestände hilft kein Verfahren.'],
fo:['Meldebestand = Tagesverbrauch · Wiederbeschaffungszeit + Sicherheitsbestand','Reichweite = [[Bestand||Tagesverbrauch]]','mittlerer Bestand = [[Bestellmenge||2]] + Sicherheitsbestand'],
mcq:[['Wozu dient der Sicherheitsbestand?','Er fängt Lieferverzug und Mehrverbrauch auf','Er wird als Erstes verbraucht','Er ersetzt die Inventur','Er senkt die Kapitalbindung','Im Normalfall bleibt er unberührt.'],
['Der Meldebestand ist erreicht. Was geschieht?','Es wird bestellt','Das Lager wird gesperrt','Der Sicherheitsbestand wird aufgelöst','Die Inventur beginnt','Der verbleibende Bestand reicht bis zur Lieferung.'],
['Welche Teile steuerst Du am genauesten?','AX-Teile: hoher Wert, regelmäßiger Verbrauch','CZ-Teile','Alle gleich','Teile ohne Verbrauch','Hier lohnt sich der Aufwand, und der Bedarf ist gut vorhersagbar.'],
['Die Wiederbeschaffungszeit verdoppelt sich. Was muss angepasst werden?','Der Meldebestand steigt','Die Bestellmenge halbiert sich','Der Sicherheitsbestand entfällt','Nichts','Während der längeren Lieferzeit wird mehr verbraucht.']]});
LT('Beschaffung & Bestandsmanagement',(m,A)=>{
A({name:'Meldebestand',gen:r=>{const v=r.p([20,40,50,80,120]),t=r.p([3,5,6,8,10]),sb=v*r.p([2,3,4]),mb=v*t+sb;
 return{q:'Von einem Artikel werden täglich '+v+' Stück verbraucht. Die Wiederbeschaffungszeit beträgt '+t+' Tage, der Sicherheitsbestand '+sb+' Stück. Wie hoch ist der Meldebestand?',a:mb,u:'Stück',d:0,tol:0,
 sol:['Meldebestand = Tagesverbrauch · Wiederbeschaffungszeit + Sicherheitsbestand','= '+v+' [[Stück||Tag]] · '+t+' Tage + '+sb+' Stück = '+mb+' Stück']}}});
A({name:'Reichweite des Bestands',gen:r=>{const b=r.p([600,900,1200,2400,3600]),v=r.p([30,40,60,80,120]),R=b/v;
 return{q:'Im Lager liegen '+b+' Stück. Der Tagesverbrauch beträgt '+v+' Stück. Wie viele Tage reicht der Bestand?',a:R,u:'Tage',d:1,tol:.01,
 sol:['Reichweite = [[Bestand||Tagesverbrauch]]','= [['+b+' Stück||'+v+' Stück/Tag]] = '+nz(R,1)+' Tage']}}});
A({name:'Mittlerer Bestand',gen:r=>{const x=r.p([400,600,800,1000,2000]),sb=r.p([100,150,200,300]),bm=x/2+sb;
 return{q:'Bestellt werden jeweils '+x+' Stück, der Sicherheitsbestand beträgt '+sb+' Stück. Wie hoch ist der mittlere Bestand bei gleichmäßigem Verbrauch?',a:bm,u:'Stück',d:0,tol:0,
 sol:['mittlerer Bestand = [[Bestellmenge||2]] + Sicherheitsbestand','= [['+x+' Stück||2]] + '+sb+' Stück = '+bm+' Stück']}}});});

TM({t:'Distribution & Standortwahl',intro:'Wie kommt die Ware zum Kunden, und von wo aus? Du vergleichst zentrale und dezentrale Strukturen, kennst den Umschlag ohne Lagerung und findest rechnerisch einen günstigen Standort.',
pts:['Zentrallager: ein Standort, niedrige Bestände, lange Wege zum Kunden. Regionallager: mehrere Standorte, kurze Wege, höhere Bestände und Kosten. Viele Netze kombinieren beides.',
'Cross-Docking: Ware wird im Umschlagpunkt angenommen, sortiert und ohne Einlagerung weiterverladen. Das spart Lagerzeit, verlangt aber genaue Abstimmung der Ankunftszeiten.',
'Nabe-Speiche-Netz: Sendungen werden in einem zentralen Umschlagpunkt gebündelt und von dort verteilt. Stückgutnetze arbeiten so.',
'Standortfaktoren: Nähe zu Kunden und Lieferanten, Verkehrsanbindung, Flächen und Kosten, Arbeitskräfte, Auflagen, Erweiterungsmöglichkeit.',
'Die Schwerpunktmethode sucht den Ort, an dem die Transportleistung (Menge mal Entfernung) am kleinsten wird. Das Ergebnis ist ein Anhaltswert, der mit den übrigen Faktoren abgeglichen wird.',
'Direktbelieferung lohnt bei vollen Ladungen. Kleine Sendungen laufen günstiger über Sammelverkehre mit Umschlag.',
'Zur Distribution gehört die letzte Meile: Zustellfenster, Avis, Rücknahme von Ladehilfsmitteln und Retouren.'],
fo:['Schwerpunkt: x_S = [[Σ (Menge · x)||Σ Menge]], y_S entsprechend','Transportleistung = Menge · Entfernung (in t · km)'],
mcq:[['Was kennzeichnet Cross-Docking?','Umschlag ohne Einlagerung','Lagerung im Hochregal','Lieferung nur per Bahn','Verzicht auf Sortierung','Die Ware verlässt den Umschlagpunkt meist am selben Tag.'],
['Was spricht für ein Zentrallager?','Niedrigere Gesamtbestände','Kürzeste Wege zu jedem Kunden','Geringste Transportkosten in jedem Fall','Keine Abhängigkeit von einem Standort','Sicherheitsbestände müssen nur einmal vorgehalten werden.'],
['Was liefert die Schwerpunktmethode?','Einen rechnerisch günstigen Standort als Anhaltswert','Den endgültigen Standort','Die Grundstückspreise','Die Zahl der Mitarbeiter','Fläche, Anbindung und Kosten müssen zusätzlich bewertet werden.'],
['Wann lohnt die Direktbelieferung?','Bei vollen Ladungen an einen Empfänger','Bei einzelnen Paketen','Bei jeder Sendung','Nur im Ausland','Der Umweg über den Umschlag kostet Zeit und Handhabung.']]});
LT('Distribution & Standortwahl',(m,A)=>{
A({name:'Standort mit der Schwerpunktmethode',gen:r=>{const K=[[r.p([10,20,30]),r.p([20,40,60])],[r.p([60,80,100]),r.p([10,30,50])],[r.p([40,50,70]),r.p([80,100,120])]],M=[r.p([100,200,300]),r.p([100,200,400]),r.p([100,300,500])],sm=M[0]+M[1]+M[2],sx=K.reduce((s,k,i)=>s+k[0]*M[i],0),xs=sx/sm;
 return{q:'Drei Kunden liegen bei x = '+K.map(k=>k[0]).join(' km, ')+' km und nehmen '+M.join(' t, ')+' t im Jahr ab. Berechne die x-Koordinate des Schwerpunkts.',a:xs,u:'km',d:1,tol:.01,
 sol:['x_S = [[Σ (Menge · x)||Σ Menge]]','x_S = [['+M.map((q,i)=>q+' t · '+K[i][0]+' km').join(' + ')+'||'+M.join(' t + ')+' t]]','x_S = [['+nz(sx,0)+' t · km||'+sm+' t]] = '+nz(xs,1)+' km']}}});
A({name:'Transportleistung',gen:r=>{const m=r.p([8,12,18,24]),s=r.p([120,250,380,460,600]),n=r.p([40,60,100,150]),L=m*s*n;
 return{q:'Im Jahr fahren '+n+' Lkw mit je '+m+' t über '+s+' km. Wie groß ist die Transportleistung?',a:L,u:'t · km',d:0,tol:.005,
 sol:['Transportleistung = Fahrten · Menge · Entfernung','= '+n+' · '+m+' t · '+s+' km = '+nz(L,0)+' t · km']}}});});

TM({t:'Informationsfluss: Lagerverwaltung, Barcode, RFID',intro:'Jede Palette hat einen Datenzwilling. Stimmt er nicht mit der Wirklichkeit überein, steht die Ware zwar im Regal, ist aber nicht zu finden. Du kennst die Bausteine des Informationsflusses im Lager.',
pts:['Das Lagerverwaltungssystem führt Bestände platzgenau, vergibt Lagerplätze, erzeugt Transport- und Kommissionieraufträge und dokumentiert jede Bewegung.',
'Identifikation: Strichcode (eindimensional), 2D-Code (mehr Inhalt auf kleiner Fläche) und RFID (Funk, ohne Sichtkontakt, mehrere Einheiten gleichzeitig). Metall und Flüssigkeit können RFID stören.',
'Die Nummer der Versandeinheit kennzeichnet jede Palette oder jedes Paket weltweit eindeutig. Zusammen mit dem elektronischen Lieferavis kann der Empfänger die Ware durch einen Scan vereinnahmen.',
'Schnittstellen: Das Warenwirtschaftssystem führt Aufträge und Bestandswerte, das Lagerverwaltungssystem die Plätze und Bewegungen. Unterschiedliche Stammdaten (Mengeneinheit, Gewicht, Maße) sind eine häufige Fehlerquelle.',
'Buchen in Echtzeit: Jede Bewegung wird am Ort und im Moment der Handlung gescannt. Nachträgliches Buchen von Zetteln erzeugt Differenzen.',
'Inventur: Stichtagsinventur zum Bilanzstichtag, permanente Inventur über das Jahr verteilt, Stichprobeninventur mit anerkanntem Verfahren. Voraussetzung für die beiden letzten ist eine zuverlässige Bestandsführung.',
'Bei der Einführung eines neuen Systems entscheiden saubere Stammdaten, geschulte Mitarbeiter, ein Testbetrieb und ein Notfallverfahren für den Ausfall.'],
fo:['Bestandsgenauigkeit = [[Lagerplätze ohne Abweichung||geprüfte Lagerplätze]]'],
mcq:[['Was kann RFID, was der Strichcode nicht kann?','Ohne Sichtkontakt und mehrere Einheiten zugleich lesen','Farbe erkennen','Gewicht messen','Ohne Lesegerät arbeiten','Der Transponder antwortet per Funk.'],
['Wo wird die Bewegung einer Palette gebucht?','Am Ort und im Moment der Handlung, per Scan','Am Schichtende im Büro','Einmal pro Woche','Gar nicht, das System weiß es','Nur so stimmen Platz und Bestand zu jeder Zeit.'],
['Was ist die Voraussetzung für die permanente Inventur?','Eine zuverlässige, bewegungsgenaue Bestandsführung','Ein leeres Lager','Zwei Wochen Betriebsruhe','Ein Hochregallager','Jeder Bestand wird einmal im Jahr körperlich aufgenommen, verteilt über das Jahr.'],
['Welche Fehlerquelle ist bei Systemschnittstellen typisch?','Abweichende Stammdaten wie Mengeneinheit oder Gewicht','Zu schnelle Rechner','Zu viele Scanner','Zu gute Schulung','Wenn ein System in Stück und das andere in Karton rechnet, stimmen Bestände nie.']]});
LT('Informationsfluss: Lagerverwaltung, Barcode, RFID',(m,A)=>{
A({name:'Bestandsgenauigkeit',gen:r=>{const n=r.p([200,250,400,500,800]),f=r.p([4,6,9,12,15]),g=(n-f)/n*100;
 return{q:'Bei einer Stichprobe wurden '+n+' Lagerplätze gezählt. An '+f+' Plätzen wich die Menge vom System ab. Wie hoch ist die Bestandsgenauigkeit?',a:g,u:'%',d:1,tol:.005,
 sol:['Bestandsgenauigkeit = [[Plätze ohne Abweichung||geprüfte Plätze]]','= [['+(n-f)+'||'+n+']] = '+nz(g,1)+' %']}}});
A({name:'Zeitgewinn durch Scannen',gen:r=>{const n=r.p([300,450,600,900]),a=r.p([45,60,75]),b=r.p([10,15,20]),t=n*(a-b)/3600;
 return{q:'Im Wareneingang werden täglich '+n+' Paletten vereinnahmt. Das Erfassen von Hand dauert '+a+' s je Palette, mit Scan und Lieferavis '+b+' s. Wie viele Stunden werden täglich gespart?',a:t,u:'h',d:1,tol:.01,
 sol:['Ersparnis je Palette = '+a+' s − '+b+' s = '+(a-b)+' s','Ersparnis je Tag = '+n+' · '+(a-b)+' s = '+n*(a-b)+' s = [['+n*(a-b)+' s||3600 s/h]] = '+nz(t,1)+' h']}}});});

TM({t:'Wareneingang & Lagerstrategien',intro:'Im Wareneingang entscheidet sich, ob Menge, Qualität und Daten stimmen. Danach kommt die Frage: Wohin damit? Du kennst Prüfpflichten, Lagerarten und die Regeln, nach denen Plätze vergeben werden.',
pts:['Wareneingang in Schritten: Anlieferung annehmen, Lieferschein mit Bestellung vergleichen, äußerlich auf Schäden und Zahl der Packstücke prüfen, Schäden auf dem Frachtpapier vermerken und vom Fahrer bestätigen lassen, buchen, einlagern.',
'Unter Kaufleuten muss die Ware unverzüglich untersucht und ein Mangel unverzüglich gerügt werden. Wer das versäumt, verliert in der Regel seine Rechte aus dem Mangel.',
'Festplatzlagerung: Jeder Artikel hat seinen Platz. Übersichtlich, aber viel leerer Raum. Freie (chaotische) Lagerung: Das System vergibt den nächsten passenden Platz. Hohe Raumnutzung, aber ohne System ist nichts zu finden.',
'Entnahmeregeln: zuerst eingelagert, zuerst entnommen (FIFO) als Regelfall. Bei Mindesthaltbarkeit: was zuerst abläuft, geht zuerst hinaus (FEFO). Zuletzt eingelagert, zuerst entnommen (LIFO) ergibt sich bei Blocklagerung von selbst.',
'Lagerarten: Blocklager am Boden (billig, kein Einzelzugriff), Palettenregal (Zugriff auf jede Palette), Durchlaufregal (FIFO eingebaut), Fachbodenregal für Kleinteile, Hochregallager mit Regalbediengerät.',
'Platzvergabe nach Zugriffshäufigkeit: Schnelldreher nah an die Kommissionierung und in Griffhöhe, Langsamdreher nach hinten und oben. Schwere Ware nach unten.',
'Kennzahlen des Lagers: Flächen- und Raumnutzungsgrad, Auslastung der Plätze, Durchsatz je Tag.'],
fo:['Auslastung = [[belegte Plätze||vorhandene Plätze]]','Raumnutzungsgrad = [[Lagergutvolumen||Raumvolumen]]'],
mcq:[['Ein Karton ist sichtbar eingedrückt. Was tust Du bei der Annahme?','Schaden auf dem Frachtpapier vermerken und vom Fahrer gegenzeichnen lassen','Stillschweigend annehmen','Die Ware wegwerfen','Erst nach einer Woche melden','Ohne Vermerk ist später kaum zu beweisen, dass der Schaden beim Transport entstand.'],
['Welchen Vorteil hat die freie Lagerplatzvergabe?','Hohe Ausnutzung der Lagerplätze','Jeder findet die Ware ohne System','Kein Scanner nötig','Weniger Buchungen','Jeder freie Platz kann für jeden passenden Artikel genutzt werden.'],
['Welche Entnahmeregel gilt für Ware mit Mindesthaltbarkeit?','Was zuerst abläuft, geht zuerst hinaus','Was zuletzt kam, geht zuerst hinaus','Beliebig','Nach Farbe sortiert','Das Ablaufdatum entscheidet, nicht das Eingangsdatum.'],
['Wohin gehören Schnelldreher?','In Griffhöhe und nah an den Kommissionierbereich','Ganz nach oben','In das hinterste Regal','In das Sperrlager','Kurze Wege für häufige Zugriffe sparen die meiste Zeit.']]});
LT('Wareneingang & Lagerstrategien',(m,A)=>{
A({name:'Auslastung des Lagers',gen:r=>{const n=r.p([1200,2400,3600,5000]),b=Math.round(n*r.p([0.72,0.78,0.85,0.91,0.94])),a=b/n*100;
 return{q:'Ein Palettenregal hat '+n+' Plätze. Belegt sind '+b+'. Wie hoch ist die Auslastung?',a,u:'%',d:1,tol:.005,
 sol:['Auslastung = [[belegte Plätze||vorhandene Plätze]]','= [['+b+'||'+n+']] = '+nz(a,1)+' %']}}});
A({name:'Stellplätze im Blocklager',gen:r=>{const l=r.p([12,18,24]),b=r.p([8,10,12]),h=r.p([2,3,4]),nl=Math.floor(l/1.3),nb=Math.floor(b/0.9),n=nl*nb*h;
 return{q:'Eine Blocklagerfläche ist '+l+' m lang und '+b+' m breit. Europaletten stehen längs und brauchen mit Abstand 1,3 m in der Länge und 0,9 m in der Breite. Gestapelt wird '+h+'-fach. Wie viele Paletten passen?',a:n,u:'Paletten',d:0,tol:0,
 sol:['in der Länge: [['+l+' m||1,3 m]] = '+nz(l/1.3,2)+', also '+nl+' Paletten','in der Breite: [['+b+' m||0,9 m]] = '+nz(b/0.9,2)+', also '+nb+' Paletten','gesamt = '+nl+' · '+nb+' · '+h+' = '+n+' Paletten']}}});});

TM({t:'Kommissionierung',intro:'Kommissionieren ist die teuerste Tätigkeit im Lager, weil sie die meiste Handarbeit braucht. Du zerlegst die Kommissionierzeit in ihre Anteile und weißt, an welcher Schraube Du drehen musst.',
pts:['Mann zur Ware: Der Kommissionierer geht oder fährt zum Lagerplatz. Geringe Investition, flexibel, aber viel Wegzeit. Ware zum Mann: Die Ware kommt automatisch an den Arbeitsplatz. Hohe Leistung, hohe Investition.',
'Die Kommissionierzeit besteht aus Basiszeit (Auftrag holen, Behälter, Abgabe), Wegzeit, Greifzeit, Totzeit (suchen, lesen, zählen, quittieren) und Verteilzeit.',
'Die Wegzeit ist meist der größte Anteil. Sie sinkt durch Platzvergabe nach Zugriffshäufigkeit, gute Wegführung und das Zusammenfassen von Aufträgen.',
'Auftragsweise: Ein Auftrag nach dem anderen. Serienweise: Mehrere Aufträge werden gesammelt und artikelweise entnommen, danach verteilt. Zonenweise: Jeder Bereich arbeitet seinen Teil ab, parallel oder nacheinander.',
'Beleglos arbeiten senkt die Totzeit: Handscanner, Sprachführung, Lichtanzeige am Fach, Datenbrille. Das System bestätigt jeden Griff und senkt die Fehlerquote.',
'Fehlerarten: falscher Artikel, falsche Menge, Auslassung, Beschädigung. Jeder Fehler kostet ein Vielfaches des Griffs: Reklamation, Nachlieferung, Retoure.',
'Ergonomie zählt: Greifen zwischen Knie- und Schulterhöhe, schwere Artikel in Hüfthöhe, wenig Bücken und Strecken. Das hält Leistung und Gesundheit.'],
fo:['Kommissionierzeit je Position = [[Basiszeit||Positionen je Auftrag]] + Wegzeit + Greifzeit + Totzeit','Leistung = [[3600 s/h||Zeit je Position]]','Fehlerquote = [[fehlerhafte Positionen||alle Positionen]]'],
mcq:[['Welcher Zeitanteil ist bei Mann zur Ware meist der größte?','Die Wegzeit','Die Greifzeit','Die Basiszeit','Die Pausen','Deshalb setzen die meisten Verbesserungen an den Wegen an.'],
['Was senkt die Totzeit am stärksten?','Beleglose Führung mit Scanner, Sprache oder Licht','Schnelleres Gehen','Größere Behälter','Längere Schichten','Suchen, Lesen und Abhaken entfallen oder werden kürzer.'],
['Was ist serienweises Kommissionieren?','Mehrere Aufträge werden gesammelt, artikelweise entnommen und danach verteilt','Jeder Auftrag einzeln','Nur volle Paletten entnehmen','Kommissionieren nach Alphabet','Der Weg wird für mehrere Aufträge nur einmal gegangen.'],
['Wohin gehören schwere Schnelldreher?','In Hüfthöhe nah am Hauptweg','Ganz nach oben','Auf den Boden im hintersten Gang','In das Außenlager','Kurzer Weg und gute Griffhöhe schonen Zeit und Rücken.']]});
LT('Kommissionierung',(m,A)=>{
A({name:'Kommissionierleistung',gen:r=>{const tb=r.p([60,90,120]),n=r.p([4,5,6,8,10]),tw=r.p([12,15,20,25]),tg=r.p([4,5,6]),tt=r.p([3,6,10,12]),t=tb/n+tw+tg+tt,L=3600/t;
 return{q:'Je Auftrag fallen '+tb+' s Basiszeit an, ein Auftrag hat '+n+' Positionen. Je Position: Wegzeit '+tw+' s, Greifzeit '+tg+' s, Totzeit '+tt+' s. Wie viele Positionen schafft ein Kommissionierer je Stunde (ohne Verteilzeit)?',a:L,u:'Pos./h',d:0,tol:.005,
 sol:['Zeit je Position = [['+tb+' s||'+n+']] + '+tw+' s + '+tg+' s + '+tt+' s = '+nz(t,1)+' s','Leistung = [[3600 s/h||'+nz(t,1)+' s]] = '+nz(L,0)+' Positionen je Stunde']}}});
A({name:'Personalbedarf in der Kommissionierung',gen:r=>{const p=r.p([4800,6000,7200,9600,12000]),L=r.p([100,120,150]),h=r.p([7,7.5]),n=p/(L*h);
 return{q:'An einem Tag sind '+p+' Positionen zu kommissionieren. Ein Mitarbeiter schafft '+L+' Positionen je Stunde und arbeitet '+nz(h,1)+' h produktiv. Wie viele Mitarbeiter werden gebraucht (aufrunden)?',a:Math.ceil(n-1e-9),u:'Mitarbeiter',d:0,tol:0,
 sol:['Leistung je Mitarbeiter = '+L+' [[Pos.||h]] · '+nz(h,1)+' h = '+nz(L*h,0)+' Positionen','Bedarf = [['+p+'||'+nz(L*h,0)+']] = '+nz(n,2)+', aufgerundet '+Math.ceil(n-1e-9)+' Mitarbeiter']}}});
A({name:'Fehlerquote',gen:r=>{const p=r.p([20000,40000,50000,80000]),f=r.p([40,60,90,120,200]),q=f/p*100;
 return{q:'Im Monat wurden '+nz(p,0)+' Positionen kommissioniert, '+f+' davon fehlerhaft. Wie hoch ist die Fehlerquote?',a:q,u:'%',d:3,tol:.01,
 sol:['Fehlerquote = [[fehlerhafte Positionen||alle Positionen]]','= [['+f+'||'+nz(p,0)+']] = '+nz(q/100,5)+' = '+nz(q,3)+' %']}}});});

TM({t:'Flurförderzeuge & Fördertechnik',intro:'Stapler, Hubwagen und Förderbänder bewegen die Ware. Du liest ein Traglastdiagramm, weißt, warum ein Stapler kippt, und kennst die Regeln für Fahrer und Fahrzeug.',
pts:['Unstetigförderer arbeiten im Einzelspiel: Gabelstapler, Schubmaststapler, Hubwagen, Regalbediengerät, Kran. Stetigförderer laufen durchgehend: Rollenbahn, Gurtförderer, Kettenförderer.',
'Der Stapler ist eine Waage: Die Vorderachse ist die Kippkante, das Gegengewicht hält die Last. Je weiter der Lastschwerpunkt vor der Achse liegt, desto kleiner ist die zulässige Last.',
'Das Traglastdiagramm nennt die zulässige Last für Lastschwerpunktabstand und Hubhöhe. Die Nenntragfähigkeit gilt nur bis zum Nennabstand (oft 500 mm) und bis zur Nennhubhöhe.',
'Anbaugeräte wie Klammern oder Seitenschieber wiegen selbst und schieben den Schwerpunkt nach vorn. Dafür gilt ein eigenes Traglastschild.',
'Fahren mit abgesenkter, zurückgeneigter Last. Kurven langsam, Gefälle mit Last bergseitig, nie mit angehobener Last fahren oder wenden. Bei verdeckter Sicht rückwärts fahren oder einweisen lassen.',
'Fahrer müssen mindestens 18 Jahre alt, geeignet, ausgebildet (theoretisch und praktisch mit Prüfung) und vom Unternehmer schriftlich beauftragt sein. Dazu kommen die Einweisung am Gerät und die jährliche Unterweisung.',
'Vor jeder Schicht prüft der Fahrer sein Gerät: Bremsen, Lenkung, Gabel, Ketten, Hydraulik, Warneinrichtungen. Mängel werden gemeldet, bei Gefahr bleibt das Gerät stehen. Mindestens jährlich prüft eine befähigte Person.',
'Antriebe: Elektro für Hallen (keine Abgase, Batterie laden oder wechseln), Verbrenner für außen. Batterieladeplätze brauchen Lüftung und Abstand zu Zündquellen.'],
fo:['Lastmoment: M = F_G · Abstand zur Kippachse','zulässige Last (Näherung): Q_2 = Q_1 · [[x + c_1||x + c_2]] mit x als Abstand Vorderachse bis Gabelrücken und c als Lastschwerpunktabstand'],
mcq:[['Eine lange Kiste hat ihren Schwerpunkt 800 mm vor dem Gabelrücken statt 500 mm. Was gilt?','Die zulässige Last ist kleiner als die Nenntragfähigkeit','Die zulässige Last steigt','Nichts ändert sich','Der Stapler darf dann schneller fahren','Das Lastmoment um die Vorderachse wächst mit dem Abstand.'],
['Wer darf einen Stapler fahren?','Wer geeignet, ausgebildet und schriftlich beauftragt ist','Jeder mit Pkw-Führerschein','Jeder ab 16 Jahren','Wer es sich zutraut','Die schriftliche Beauftragung durch den Unternehmer gehört dazu.'],
['Wie fährst Du mit Last ein Gefälle hinunter?','Rückwärts, die Last zeigt bergauf','Vorwärts, die Last zeigt talwärts','Quer zum Hang','Mit angehobener Last','So kann die Last nicht von der Gabel rutschen und der Stapler nicht nach vorn kippen.'],
['Welches Fördermittel ist ein Stetigförderer?','Die Rollenbahn','Der Gabelstapler','Der Hallenkran','Das Regalbediengerät','Stetigförderer transportieren fortlaufend auf festem Weg.']]});
LT('Flurförderzeuge & Fördertechnik',(m,A)=>{
A({name:'Zulässige Last bei größerem Lastschwerpunktabstand',gen:r=>{const Q=r.p([1600,2000,2500,3000]),x=r.p([400,450,500]),c2=r.p([600,700,800,900,1000]),Q2=Q*(x+500)/(x+c2);
 return{q:'Ein Stapler trägt '+Q+' kg bei 500 mm Lastschwerpunktabstand. Der Abstand von der Vorderachse zum Gabelrücken beträgt '+x+' mm. Welche Last ist bei '+c2+' mm Lastschwerpunktabstand etwa zulässig?',a:Q2,u:'kg',d:0,tol:.005,
 sol:['Das Lastmoment um die Vorderachse bleibt gleich: Q_1 · (x + c_1) = Q_2 · (x + c_2)','Q_2 = '+Q+' kg · [['+x+' mm + 500 mm||'+x+' mm + '+c2+' mm]] = '+Q+' kg · [['+(x+500)+' mm||'+(x+c2)+' mm]] = '+nz(Q2,0)+' kg','Maßgeblich ist immer das Traglastdiagramm am Gerät.']}}});
A({name:'Paletten je Stunde mit dem Stapler',gen:r=>{const s=r.p([30,40,60,80]),v=r.p([2,2.5,3]),tf=r.p([40,50,60]),t=2*s/v+tf,n=3600/t;
 return{q:'Ein Stapler fährt je Palette '+s+' m hin und '+s+' m zurück, im Mittel mit '+nz(v,1)+' m/s. Aufnehmen und Absetzen dauern zusammen '+tf+' s. Wie viele Paletten schafft er je Stunde?',a:n,u:'Paletten/h',d:0,tol:.005,
 sol:['Fahrzeit = [[2 · '+s+' m||'+nz(v,1)+' m/s]] = '+nz(2*s/v,1)+' s','Spielzeit = '+nz(2*s/v,1)+' s + '+tf+' s = '+nz(t,1)+' s','Leistung = [[3600 s/h||'+nz(t,1)+' s]] = '+nz(n,0)+' Paletten je Stunde']}}});
A({name:'Durchsatz einer Rollenbahn',gen:r=>{const v=r.p([0.2,0.3,0.4,0.5]),a=r.p([0.8,1.0,1.2,1.5]),n=v/a*3600;
 return{q:'Auf einer Rollenbahn laufen Behälter mit '+nz(v,1)+' m/s. Der Abstand von Behälter zu Behälter beträgt '+nz(a,1)+' m. Wie viele Behälter kommen je Stunde an?',a:n,u:'Behälter/h',d:0,tol:.005,
 sol:['Durchsatz = [[Geschwindigkeit||Abstand]]','= [['+nz(v,1)+' m/s||'+nz(a,1)+' m]] · 3600 [[s||h]] = '+nz(n,0)+' Behälter je Stunde']}}});});

TM({t:'Ladeeinheiten & Verpackung',intro:'Die Palette ist das Maß der Logistik. Du bildest stabile Ladeeinheiten, rechnest Kartons je Palette und Paletten je Lkw und weißt, was eine Verpackung leisten muss.',
pts:['Ladeeinheiten fassen Ware so zusammen, dass sie mit einem Griff bewegt wird. Die Europalette misst 1200 mm · 800 mm, die Industriepalette 1200 mm · 1000 mm. Gitterboxen und Kleinladungsträger sind darauf abgestimmt.',
'Modulmaße: Kartons, deren Maße in das Palettenmaß passen (zum Beispiel 600 mm · 400 mm), nutzen die Fläche ohne Überstand und ohne Lücken.',
'Stabil stapeln: schwere Ware nach unten, Verbundstapelung wie beim Mauern, kein Überstand, Höhe und Gewicht begrenzen. Sichern mit Stretchfolie, Umreifung oder Zwischenlagen.',
'Eine Verpackung schützt, macht lager- und transportfähig, informiert (Kennzeichnung, Handhabungszeichen) und trägt Identdaten. Sie muss zur Belastung passen: Druck beim Stapeln, Stöße, Feuchte.',
'Lkw: Ein Sattelauflieger mit 13,6 m Ladelänge fasst 33 bis 34 Europaletten am Boden. Begrenzt wird durch Stellplätze, Nutzlast und Achslast, je nachdem, was zuerst erreicht ist.',
'Container: 20 Fuß fasst etwa 11 Europaletten, 40 Fuß etwa 24. Für Übersee gelten besondere Anforderungen an Holzverpackung (Behandlung und Kennzeichnung).',
'Mehrweg-Ladehilfsmittel werden getauscht oder über ein Konto geführt. Ohne saubere Buchung entstehen Schulden, die niemand erklären kann.',
'Verpackungsrecht: Hersteller und Vertreiber haben Rücknahme- und Verwertungspflichten. Transportverpackungen werden getrennt gesammelt.'],
fo:['Kartons je Lage = [[Palettenfläche||Kartonfläche]] (bei Modulmaßen)','Lagen = [[nutzbare Höhe − Palettenhöhe||Kartonhöhe]], abgerundet','Lademeter = [[Länge · Breite||2,4 m]]'],
mcq:[['Welche Grundfläche hat die Europalette?','1200 mm · 800 mm','1000 mm · 1000 mm','1200 mm · 1200 mm','800 mm · 600 mm','Darauf sind Regale, Lkw und Behälter abgestimmt.'],
['Was begrenzt die Beladung eines Lkw?','Stellplätze, Nutzlast oder Achslast, je nachdem, was zuerst erreicht ist','Nur die Zahl der Stellplätze','Nur die Höhe','Die Farbe der Paletten','Bei schwerer Ware ist die Nutzlast lange vor dem letzten Stellplatz erreicht.'],
['Warum wird im Verbund gestapelt?','Die Lagen verzahnen sich und der Stapel wird stabil','Es sieht schöner aus','Es passen mehr Kartons auf die Palette','Die Folie entfällt','Wie beim Mauern überdeckt jede Lage die Fugen der unteren.'],
['Ein Karton misst 600 mm · 400 mm. Wie viele passen in eine Lage auf die Europalette?','4','2','6','8','0,96 m² ÷ 0,24 m² = 4, ohne Überstand.']]});
LT('Ladeeinheiten & Verpackung',(m,A)=>{
A({name:'Kartons auf der Europalette',gen:r=>{const k=r.p([[600,400],[400,300],[300,200],[400,200]]),h=r.p([200,250,300,400]),H=r.p([1200,1500,1800]),nl=960000/(k[0]*k[1]),lg=Math.floor((H-144)/h),n=nl*lg;
 return{q:'Kartons mit '+k[0]+' mm · '+k[1]+' mm Grundfläche und '+h+' mm Höhe kommen auf eine Europalette (1200 mm · 800 mm, 144 mm hoch). Die Ladeeinheit darf '+H+' mm hoch sein. Wie viele Kartons passen?',a:n,u:'Kartons',d:0,tol:0,
 sol:['je Lage: [[1200 mm · 800 mm||'+k[0]+' mm · '+k[1]+' mm]] = '+nl+' Kartons','Lagen: [['+H+' mm − 144 mm||'+h+' mm]] = '+nz((H-144)/h,2)+', also '+lg+' Lagen','gesamt = '+nl+' · '+lg+' = '+n+' Kartons']}}});
A({name:'Lademeter einer Sendung',gen:r=>{const n=r.p([4,6,8,10,12,16]),lm=n*1.2*.8/2.4;
 return{q:'Eine Sendung besteht aus '+n+' nicht stapelbaren Europaletten (1,2 m · 0,8 m). Wie viele Lademeter belegt sie auf einem 2,4 m breiten Lkw?',a:lm,u:'m',d:1,tol:.01,
 sol:['Lademeter je Palette = [[1,2 m · 0,8 m||2,4 m]] = 0,4 m','Sendung = '+n+' · 0,4 m = '+nz(lm,1)+' m']}}});
A({name:'Nutzlast oder Stellplätze',gen:r=>{const g=r.p([450,600,750,900]),N=24000,n=Math.min(33,Math.floor(N/g));
 return{q:'Ein Sattelzug hat 33 Stellplätze für Europaletten und 24 000 kg Nutzlast. Eine Palette wiegt '+g+' kg. Wie viele Paletten dürfen geladen werden?',a:n,u:'Paletten',d:0,tol:0,
 sol:['nach Gewicht: [[24 000 kg||'+g+' kg]] = '+nz(N/g,1)+', also '+Math.floor(N/g)+' Paletten','nach Stellplätzen: 33 Paletten','Es gilt der kleinere Wert: '+n+' Paletten']}}});});

TM({t:'Transport & Tourenplanung',intro:'Welcher Verkehrsträger, welche Tour, welcher Preis? Du wählst das passende Transportmittel, planst eine Tour innerhalb der Lenkzeiten und kennst die Grundzüge von Frachtvertrag und Haftung.',
pts:['Verkehrsträger im Vergleich: Lkw flexibel von Tür zu Tür, Bahn für große Mengen über weite Strecken, Binnenschiff für Massengut, Seeschiff für Übersee, Flugzeug schnell und teuer. Kombinierter Verkehr verbindet sie mit genormten Ladeeinheiten.',
'Tourenplanung: Stopps so reihen, dass Strecke und Zeit klein bleiben, Zeitfenster der Kunden eingehalten und Fahrzeuge gut ausgelastet sind. Beladen wird in umgekehrter Reihenfolge der Entladung.',
'Lenk- und Ruhezeiten (Grundwerte): täglich höchstens 9 Stunden lenken, zweimal je Woche 10 Stunden. Spätestens nach 4,5 Stunden 45 Minuten Pause. Je Woche höchstens 56 Stunden, in zwei Wochen höchstens 90 Stunden. Bitte den aktuellen Stand prüfen.',
'Frachtkosten hängen von Entfernung, Gewicht, Volumen (Lademeter, Sperrigkeit), Laufzeit und Zuschlägen ab. Bei leichter, sperriger Ware wird nach Volumen abgerechnet.',
'Der Frachtvertrag ist im Handelsgesetzbuch geregelt. Der Frachtführer haftet für Verlust und Beschädigung zwischen Übernahme und Ablieferung, in der Höhe begrenzt nach Gewicht. Im grenzüberschreitenden Straßenverkehr gilt das Übereinkommen CMR.',
'Der Frachtbrief beweist Abschluss und Inhalt des Vertrags und die Übernahme der Ware. Äußerlich erkennbare Schäden werden bei der Ablieferung vermerkt, verdeckte Schäden innerhalb der kurzen Frist danach schriftlich angezeigt.',
'Der Absender ist für beförderungssichere Verladung verantwortlich, der Fahrer für die Betriebssicherheit des Fahrzeugs. Wer verlädt, muss also Ladungssicherung können.',
'Kennzahlen im Transport: Auslastung nach Gewicht und Stellplätzen, Leerkilometeranteil, Kosten je Sendung, Termintreue, Schadenquote.'],
fo:['Fahrzeit = [[Strecke||Durchschnittsgeschwindigkeit]]','Tourdauer = Fahrzeit + Standzeiten + Pausen','Auslastung = [[geladene Menge||Kapazität]]'],
mcq:[['Wer ist nach dem Gesetz grundsätzlich für die beförderungssichere Verladung verantwortlich?','Der Absender','Der Empfänger','Die Polizei','Niemand','Der Fahrer achtet zusätzlich auf die Betriebssicherheit des Fahrzeugs.'],
['Nach wie vielen Stunden Lenkzeit ist spätestens eine Pause von 45 Minuten nötig?','Nach 4,5 Stunden','Nach 6 Stunden','Nach 9 Stunden','Nach 2 Stunden','Die Pause kann in 15 und 30 Minuten geteilt werden.'],
['In welcher Reihenfolge wird ein Tourenfahrzeug beladen?','Die letzte Entladestelle zuerst','Die erste Entladestelle zuerst','Nach Gewicht','Beliebig','So steht die Ware für den ersten Kunden an der Tür.'],
['Welches Regelwerk gilt für den Frachtvertrag im grenzüberschreitenden Straßengüterverkehr?','Das Übereinkommen CMR','Die Straßenverkehrsordnung','Das Arbeitszeitgesetz','Die Incoterms','Es regelt unter anderem Frachtbrief und Haftung.']]});
LT('Transport & Tourenplanung',(m,A)=>{
A({name:'Dauer einer Tour',gen:r=>{const s=r.p([180,240,300,360]),v=r.p([50,60]),n=r.p([4,6,8]),ts=r.p([15,20,30]),tf=s/v,p=tf>4.5?0.75:0,T=tf+n*ts/60+p;
 return{q:'Eine Tour ist '+s+' km lang (im Mittel '+v+' km/h) und hat '+n+' Stopps zu je '+ts+' min. Nach spätestens 4,5 h Lenkzeit sind 45 min Pause einzuplanen. Wie lange dauert die Tour?',a:T,u:'h',d:2,tol:.02,
 sol:['Fahrzeit = [['+s+' km||'+v+' km/h]] = '+nz(tf,2)+' h','Standzeit = '+n+' · '+ts+' min = '+n*ts+' min = '+nz(n*ts/60,2)+' h','Pause: '+(p?'Lenkzeit über 4,5 h, also 0,75 h':'Lenkzeit höchstens 4,5 h, keine Pflichtpause'),'Tourdauer = '+nz(tf,2)+' h + '+nz(n*ts/60,2)+' h + '+nz(p,2)+' h = '+nz(T,2)+' h']}}});
A({name:'Auslastung des Fahrzeugs',gen:r=>{const g=r.p([9500,12000,15600,18000,21000]),sp=r.p([18,22,26,30]),ag=g/24000*100,as=sp/33*100;
 return{q:'Ein Sattelzug (24 000 kg Nutzlast, 33 Stellplätze) lädt '+nz(g,0)+' kg auf '+sp+' Stellplätzen. Wie hoch ist die Auslastung nach Stellplätzen?',a:as,u:'%',d:1,tol:.005,
 sol:['Auslastung nach Stellplätzen = [['+sp+'||33]] = '+nz(as,1)+' %','zum Vergleich nach Gewicht: [['+nz(g,0)+' kg||24 000 kg]] = '+nz(ag,1)+' %']}}});
A({name:'Frachtkosten je 100 kg',gen:r=>{const K=r.p([380,460,540,720,950]),g=r.p([1200,2400,3600,6000,8000]),k=K/g*100;
 return{q:'Eine Teilladung mit '+g+' kg kostet '+K+' € Fracht. Wie hoch sind die Frachtkosten je 100 kg?',a:k,u:'€',d:2,tol:.01,
 sol:['Kosten je 100 kg = [[Fracht||Gewicht]] · 100 kg','= [['+K+' €||'+g+' kg]] · 100 kg = '+nz(k,2)+' €']}}});});

TM({t:'Ladungssicherung',intro:'Beim Bremsen will die Ladung weiter geradeaus. Ob sie bleibt, wo sie ist, entscheiden Reibung und Sicherung. Du rechnest die nötigen Kräfte und wählst die passende Sicherungsart.',
pts:['Im Fahrbetrieb wirken Trägheitskräfte auf die Ladung: nach vorn bis zum 0,8-Fachen ihrer Gewichtskraft (Vollbremsung), zur Seite und nach hinten bis zum 0,5-Fachen.',
'Die Reibung zwischen Ladung und Ladefläche hält einen Teil davon: Reibkraft = Gleitreibbeiwert mal Gewichtskraft. Was fehlt, muss die Sicherung aufbringen.',
'Rutschhemmende Matten heben den Reibbeiwert deutlich an, zum Beispiel von 0,3 auf 0,6. Das ist oft die wirksamste Einzelmaßnahme. Die Ladefläche muss besenrein sein.',
'Formschluss: Die Ladung liegt lückenlos an Stirnwand, Bordwänden oder aneinander an oder wird durch Sperrbalken und Keile gehalten. Lücken werden mit Füllmaterial geschlossen.',
'Kraftschluss durch Niederzurren: Gurte pressen die Ladung auf die Ladefläche und erhöhen die Reibkraft. Entscheidend sind die Vorspannkraft der Ratsche (auf dem Etikett) und der Zurrwinkel.',
'Direktzurren: Zurrmittel halten die Ladung unmittelbar in Richtung der Kraft, als Schräg- oder Diagonalzurren. Hier zählt die zulässige Zugkraft des Zurrmittels.',
'Zurrgurte vor jedem Einsatz prüfen: Einschnitte, beschädigte Nähte, fehlendes Etikett, verformte Haken. Beschädigte Gurte sind ablegereif. Kantenschoner schützen Gurt und Ladung.',
'Verantwortlich sind Verlader, Fahrer und Fahrzeughalter gemeinsam, jeder für seinen Teil. Die Berechnung folgt den anerkannten Regeln (VDI 2700, DIN EN 12195-1). Bitte den aktuellen Stand prüfen.'],
fo:['Massenkraft nach vorn: F = 0,8 · F_G','Reibkraft: F_R = μ · F_G','Sicherungskraft: F_S = (0,8 − μ) · F_G','Niederzurren (vereinfacht): Zahl der Gurte = [[(0,8 − μ) · F_G||μ · 1,5 · Vorspannkraft · sin α]]'],
mcq:[['Mit welcher Kraft drängt die Ladung bei einer Vollbremsung nach vorn?','Mit dem 0,8-Fachen ihrer Gewichtskraft','Mit dem 0,1-Fachen','Mit dem 2-Fachen','Gar nicht','Zur Seite und nach hinten wird mit dem 0,5-Fachen gerechnet.'],
['Was bewirkt eine rutschhemmende Matte?','Sie erhöht den Reibbeiwert, sodass weniger Sicherungskraft nötig ist','Sie ersetzt jede Sicherung','Sie macht die Ladung leichter','Sie erhöht die Nutzlast','Mehr Reibung heißt: Die Ladefläche hält mehr von der Massenkraft.'],
['Worauf kommt es beim Niederzurren an?','Auf die Vorspannkraft und einen steilen Zurrwinkel','Auf die Farbe des Gurts','Auf die Länge des Gurts','Auf die Reißfestigkeit allein','Der Gurt muss die Ladung nach unten pressen. Flache Winkel bringen wenig.'],
['Ein Zurrgurt hat einen Einschnitt an der Kante. Was tust Du?','Aussondern, er ist ablegereif','Weiterverwenden, wenn es eilt','Verknoten','Mit Klebeband flicken','Ein beschädigter Gurt hält die angegebene Kraft nicht mehr.']]});
LT('Ladungssicherung',(m,A)=>{
A({name:'Sicherungskraft nach vorn',gen:r=>{const ms=r.p([800,1200,2000,3500,5000]),mu=r.p([0.2,0.3,0.4,0.6]),FG=ms*9.81,FS=(0.8-mu)*FG;
 return{q:'Eine Maschine mit '+ms+' kg steht auf der Ladefläche, der Gleitreibbeiwert beträgt '+nz(mu,1)+'. Welche Kraft muss die Sicherung nach vorn aufnehmen (g = 9,81 m/s²)?',a:FS,u:'N',d:0,tol:.005,
 sol:['F_G = m · g = '+ms+' kg · 9,81 [[m||s²]] = '+nz(FG,0)+' N','F_S = (0,8 − μ) · F_G = (0,8 − '+nz(mu,1)+') · '+nz(FG,0)+' N = '+nz(FS,0)+' N']}}});
A({name:'Zahl der Zurrgurte beim Niederzurren',gen:r=>{const ms=r.p([600,1000,1500,2000,3000]),mu=r.p([0.3,0.4,0.6]),ST=r.p([300,400,500]),al=r.p([60,75,90]),FG=ms*9.81,n=(0.8-mu)*FG/(mu*1.5*ST*10*Math.sin(al*Math.PI/180)),N0=Math.ceil(n-1e-9),N=Math.max(2,N0);
 return{q:'Eine Kiste mit '+ms+' kg wird niedergezurrt. Gleitreibbeiwert '+nz(mu,1)+', Vorspannkraft je Gurt '+ST+' daN, Zurrwinkel '+al+'°. Wie viele Gurte setzt Du ein? Rechne mit der vereinfachten Formel, runde auf und nimm mindestens 2 Gurte (g = 9,81 m/s²).',a:N,u:'Gurte',d:0,tol:0,
 sol:['F_G = '+ms+' kg · 9,81 [[m||s²]] = '+nz(FG,0)+' N','n = [[(0,8 − μ) · F_G||μ · 1,5 · Vorspannkraft · sin α]]','n = [[(0,8 − '+nz(mu,1)+') · '+nz(FG,0)+' N||'+nz(mu,1)+' · 1,5 · '+ST*10+' N · '+nz(Math.sin(al*Math.PI/180),3)+']] = '+nz(n,2)+', aufgerundet '+N0+(N0>1?' Gurte':' Gurt'),N0<2?'Mindestens 2 Gurte je frei stehendem Ladegut, also 2 Gurte.':'Also '+N+' Gurte.','Die Formel ist eine Faustformel aus der älteren Praxis (Übertragungsfaktor 1,5). Verbindlich rechnet man nach DIN EN 12195-1.']}}});
A({name:'Reibkraft mit und ohne Matte',gen:r=>{const ms=r.p([500,800,1200,2000]),FG=ms*9.81,d=(0.6-0.3)*FG;
 return{q:'Eine Palette mit '+ms+' kg steht auf einer Siebdruckplatte (μ = 0,3). Mit rutschhemmender Matte beträgt μ = 0,6. Um wie viel steigt die Reibkraft (g = 9,81 m/s²)?',a:d,u:'N',d:0,tol:.005,
 sol:['F_G = '+ms+' kg · 9,81 [[m||s²]] = '+nz(FG,0)+' N','ohne Matte: F_R = 0,3 · '+nz(FG,0)+' N = '+nz(.3*FG,0)+' N','mit Matte: F_R = 0,6 · '+nz(FG,0)+' N = '+nz(.6*FG,0)+' N','Unterschied = '+nz(d,0)+' N']}}});});

TM({t:'Prozessdaten & Logistikkennzahlen',intro:'Was nicht gemessen wird, lässt sich nicht steuern. Du wählst wenige, aussagekräftige Kennzahlen für Deinen Bereich, liest sie richtig und leitest Maßnahmen ab.',
pts:['Kennzahlen verdichten viele Einzeldaten zu einer Aussage. Gute Kennzahlen sind eindeutig definiert, beeinflussbar und werden regelmäßig mit einem Zielwert verglichen.',
'Leistung: Wareneingänge, Einlagerungen, Positionen und Sendungen je Tag oder je Mitarbeiterstunde. Qualität: Fehlerquote, Schadenquote, Bestandsgenauigkeit. Service: Termintreue, Lieferbereitschaft, Durchlaufzeit.',
'Durchlaufzeit im Lager: vom Auftragseingang bis zur Übergabe an den Transport. Sie besteht zum größten Teil aus Liege- und Wartezeiten, nicht aus Bearbeitung.',
'Eine Zahl allein sagt wenig. Erst der Vergleich macht sie lesbar: mit dem Ziel, mit dem Vormonat, zwischen Schichten oder Standorten.',
'Kennzahlen können sich widersprechen: Wer nur auf Positionen je Stunde schaut, bekommt mehr Fehler. Deshalb gehören Leistung und Qualität immer zusammen auf die Tafel.',
'Daten kommen aus dem Lagerverwaltungssystem, aus Scans und Zeitstempeln. Auswertung nach Häufigkeit zeigt, wo die größten Verluste liegen.',
'Kennzahlen gehören an den Ort des Geschehens: Tafel im Bereich, kurze tägliche Besprechung, Abweichung, Ursache, Maßnahme, Verantwortlicher.'],
fo:['Produktivität = [[Leistungsmenge||eingesetzte Stunden]]','Termintreue = [[pünktliche Sendungen||alle Sendungen]]','Schadenquote = [[beschädigte Sendungen||alle Sendungen]]'],
mcq:[['Was macht eine Kennzahl erst aussagekräftig?','Der Vergleich mit Ziel, Vorperiode oder anderen Bereichen','Möglichst viele Nachkommastellen','Dass nur der Meister sie kennt','Eine schöne Grafik','Ohne Vergleich bleibt offen, ob der Wert gut oder schlecht ist.'],
['Die Leistung je Stunde steigt, die Fehlerquote auch. Wie bewertest Du das?','Kritisch: Leistung und Qualität müssen zusammen betrachtet werden','Sehr gut, Hauptsache schnell','Gleichgültig','Die Fehler sind Sache der Qualitätssicherung','Jeder Fehler kostet ein Vielfaches des gewonnenen Griffs.'],
['Woraus besteht die Durchlaufzeit überwiegend?','Aus Liege- und Wartezeiten','Aus Greifzeit','Aus Fahrzeit des Lkw','Aus Pausen','Hier liegt meist das größte Potenzial.'],
['Wo werden Kennzahlen am wirksamsten besprochen?','Täglich kurz an der Tafel im Bereich','Einmal im Jahr im Geschäftsbericht','Nur im Büro des Lagerleiters','Gar nicht, sie sprechen für sich','Nah am Geschehen folgen auf Abweichungen sofort Maßnahmen.']]});
LT('Prozessdaten & Logistikkennzahlen',(m,A)=>{
A({name:'Produktivität im Warenausgang',gen:r=>{const s=r.p([420,560,640,780,900]),h=r.p([56,64,72,80]),p=s/h;
 return{q:'In einer Schicht wurden '+s+' Sendungen verladen. Eingesetzt waren zusammen '+h+' Mitarbeiterstunden. Wie hoch ist die Produktivität?',a:p,u:'Sendungen/h',d:1,tol:.01,
 sol:['Produktivität = [[Leistungsmenge||eingesetzte Stunden]]','= [['+s+' Sendungen||'+h+' h]] = '+nz(p,1)+' Sendungen je Stunde']}}});
A({name:'Termintreue',gen:r=>{const n=r.p([800,1200,1500,2500]),v=r.p([24,36,45,60,75]),t=(n-v)/n*100;
 return{q:'Von '+n+' Sendungen im Monat kamen '+v+' zu spät an. Wie hoch ist die Termintreue?',a:t,u:'%',d:1,tol:.005,
 sol:['Termintreue = [[pünktliche Sendungen||alle Sendungen]]','= [['+(n-v)+'||'+n+']] = '+nz(t,1)+' %']}}});
A({name:'Schadenkosten im Jahr',gen:r=>{const n=r.p([12000,20000,30000,45000]),q=r.p([0.4,0.6,0.8,1.2]),k=r.p([120,180,250,320]),K=n*q/100*k;
 return{q:'Im Jahr gehen '+nz(n,0)+' Sendungen hinaus. Die Schadenquote beträgt '+nz(q,1)+' %, ein Schaden kostet im Mittel '+k+' €. Was kosten die Schäden im Jahr?',a:K,u:'€',d:0,tol:.005,
 sol:['beschädigte Sendungen = '+nz(n,0)+' · '+nz(q/100,3)+' = '+nz(n*q/100,0),'Kosten = '+nz(n*q/100,0)+' · '+k+' € = '+nz(K,0)+' €']}}});});

TM({t:'Incoterms & Zollabwicklung',intro:'Wer zahlt die Fracht, wer trägt das Risiko, wer macht die Zollpapiere? Du liest eine Lieferklausel richtig und kennst die Grundzüge von Ausfuhr und Einfuhr.',
pts:['Incoterms sind Lieferklauseln der Internationalen Handelskammer. Sie regeln zwischen Verkäufer und Käufer drei Dinge: wer welche Kosten trägt, wo die Gefahr übergeht und wer welche Pflichten bei Transport und Zoll hat.',
'Sie regeln nicht den Eigentumsübergang, nicht den Preis und nicht die Zahlung. Sie gelten nur, wenn sie im Kaufvertrag vereinbart sind, mit Ort und Fassung (zum Beispiel „FCA Regensburg, Incoterms 2020“).',
'Klauseln für alle Transportarten: EXW (ab Werk), FCA (frei Frachtführer), CPT und CIP (Fracht bezahlt, CIP mit Versicherung), DAP (geliefert benannter Ort), DPU (geliefert und entladen), DDP (geliefert verzollt).',
'Klauseln nur für See- und Binnenschiff: FAS (frei Längsseite Schiff), FOB (frei an Bord), CFR (Kosten und Fracht), CIF (Kosten, Versicherung, Fracht).',
'Bei den C-Klauseln fallen Kosten- und Gefahrübergang auseinander: Der Verkäufer zahlt die Fracht bis zum Bestimmungsort, die Gefahr geht aber schon bei Übergabe an den ersten Frachtführer oder an Bord über.',
'Ausfuhr aus der Europäischen Union: elektronische Ausfuhranmeldung, Warennummer aus dem Zolltarif, Handelsrechnung, Packliste. Je nach Ware und Land sind Genehmigungen nötig (Exportkontrolle).',
'Einfuhr: Zollanmeldung, Zollwert, Zoll nach Warennummer und Ursprung, dazu Einfuhrumsatzsteuer. Ursprungsnachweise können den Zoll senken. Innerhalb des Binnenmarkts gibt es keine Zollabfertigung.',
'Für den Meister zählt: Papiere müssen zur Ware passen, in Menge, Gewicht, Bezeichnung und Kennzeichnung. Eine falsche Angabe hält die ganze Sendung auf. Bitte den aktuellen Stand der Vorschriften prüfen.'],
fo:['Zollwert (vereinfacht) = Warenwert + Kosten bis zur Grenze der Europäischen Union','Zoll = Zollwert · Zollsatz','Einfuhrumsatzsteuer = (Zollwert + Zoll + Kosten bis zum Bestimmungsort) · Steuersatz'],
mcq:[['Was regeln die Incoterms nicht?','Den Eigentumsübergang','Den Gefahrübergang','Die Verteilung der Transportkosten','Die Pflichten bei der Zollabwicklung','Eigentum, Preis und Zahlung stehen im Kaufvertrag.'],
['Bei welcher Klausel hat der Verkäufer die wenigsten Pflichten?','EXW (ab Werk)','DDP (geliefert verzollt)','CIF','DAP','Der Käufer holt die Ware ab und trägt ab dann alle Kosten und Risiken.'],
['Vereinbart ist CPT Chicago. Wann geht die Gefahr auf den Käufer über?','Bei Übergabe an den ersten Frachtführer','Bei Ankunft in Chicago','Bei Bezahlung','Bei der Zollabfertigung in den USA','Kosten und Gefahr gehen bei den C-Klauseln an verschiedenen Orten über.'],
['Welche Klausel passt nicht zum Lkw-Transport?','FOB','FCA','DAP','CPT','FOB gilt nur für See- und Binnenschifftransport.']]});
LT('Incoterms & Zollabwicklung',(m,A)=>{
A({name:'Zoll bei der Einfuhr',gen:r=>{const w=r.p([8000,12000,20000,35000]),f=r.p([600,900,1200,1800]),z=r.p([2.7,3.5,4.5,6.5]),zw=w+f,Z=zw*z/100;
 return{q:'Eine Sendung aus einem Drittland hat einen Warenwert von '+nz(w,0)+' €. Die Kosten bis zur Grenze der Europäischen Union betragen '+f+' €. Der Zollsatz beträgt '+nz(z,1)+' %. Wie hoch ist der Zoll?',a:Z,u:'€',d:2,tol:.01,
 sol:['Zollwert = '+nz(w,0)+' € + '+f+' € = '+nz(zw,0)+' €','Zoll = '+nz(zw,0)+' € · '+nz(z/100,3)+' = '+nz(Z,2)+' €']}}});
A({name:'Einfuhrumsatzsteuer',gen:r=>{const zw=r.p([10000,15000,24000,40000]),z=r.p([3,4,5]),k=r.p([300,450,600]),Z=zw*z/100,E=(zw+Z+k)*.19;
 return{q:'Zollwert '+nz(zw,0)+' €, Zollsatz '+z+' %, Kosten von der Grenze bis zum Bestimmungsort '+k+' €. Berechne die Einfuhrumsatzsteuer bei 19 %.',a:E,u:'€',d:2,tol:.01,
 sol:['Zoll = '+nz(zw,0)+' € · '+nz(z/100,2)+' = '+nz(Z,2)+' €','Bemessungsgrundlage = '+nz(zw,0)+' € + '+nz(Z,2)+' € + '+k+' € = '+nz(zw+Z+k,2)+' €','Einfuhrumsatzsteuer = '+nz(zw+Z+k,2)+' € · 0,19 = '+nz(E,2)+' €']}}});});

TM({t:'Gefahrgut & Gefahrstofflager',intro:'Derselbe Stoff heißt im Lager Gefahrstoff und auf der Straße Gefahrgut, mit jeweils eigenen Regeln. Du kennst Klassen, Kennzeichnung und Papiere und weißt, was zusammen gelagert werden darf.',
pts:['Gefahrgut wird nach dem Übereinkommen ADR auf der Straße befördert. Es teilt Stoffe in neun Klassen ein, von explosiven Stoffen (Klasse 1) über entzündbare Flüssigkeiten (Klasse 3) und ätzende Stoffe (Klasse 8) bis zu verschiedenen gefährlichen Stoffen (Klasse 9).',
'Jeder Stoff hat eine UN-Nummer und eine Verpackungsgruppe (I hohe, II mittlere, III geringe Gefahr). Daraus folgen zugelassene Verpackung, Gefahrzettel und Mengen.',
'Kennzeichnung: Versandstücke tragen Gefahrzettel und UN-Nummer. Fahrzeuge führen orangefarbene Warntafeln, Tankfahrzeuge mit Gefahrnummer und UN-Nummer.',
'Papiere und Ausrüstung: Beförderungspapier, schriftliche Weisungen für den Notfall, Feuerlöscher, Warnausrüstung. Der Fahrer braucht je nach Menge eine besondere Schulungsbescheinigung.',
'Erleichterungen gibt es für kleine Mengen: begrenzte Mengen in kleinen Verpackungen und die Freistellung je Beförderungseinheit nach Punkten („1000-Punkte-Regel“). Auch dann bleiben Pflichten bestehen.',
'Betriebe, die Gefahrgut versenden, verpacken, verladen oder befördern, bestellen in der Regel einen Gefahrgutbeauftragten. Alle Beteiligten werden für ihre Aufgabe unterwiesen.',
'Im Lager gilt das Gefahrstoffrecht. Die Technische Regel TRGS 510 ordnet Stoffe Lagerklassen zu und legt fest, was zusammen, getrennt oder gar nicht zusammen gelagert werden darf. Dazu kommen Auffangwannen, Lüftung, Brandschutz und Mengengrenzen.',
'Das ADR wird alle zwei Jahre neu gefasst, die Ausgabe 2027 gilt ab 1. Januar 2027 mit Übergangsfrist. Bitte immer die aktuelle Fassung und die betrieblichen Festlegungen prüfen.'],
fo:['Punkte nach der 1000-Punkte-Regel = Menge · Faktor der Beförderungskategorie; Summe höchstens 1000','Auffangvolumen (Richtwert): mindestens der Inhalt des größten Gebindes und mindestens 10 % der Gesamtmenge'],
mcq:[['Was gibt die Verpackungsgruppe I an?','Hohe Gefahr','Geringe Gefahr','Kleine Verpackung','Erste Lieferung','I steht für hohe, II für mittlere, III für geringe Gefahr.'],
['Woran erkennt man von außen ein Fahrzeug mit Gefahrgut?','An den orangefarbenen Warntafeln','An der Farbe der Plane','Am Kennzeichen','Gar nicht','Bei Tankfahrzeugen tragen die Tafeln Gefahrnummer und UN-Nummer.'],
['Welche Regel bestimmt, was im Lager zusammen stehen darf?','Die TRGS 510 mit ihren Lagerklassen','Die Straßenverkehrsordnung','Die Incoterms','Das Handelsgesetzbuch','Zum Beispiel werden brandfördernde und entzündbare Stoffe getrennt.'],
['Eine Sendung fällt unter die Freistellung nach Punkten. Was gilt?','Es gelten Erleichterungen, aber nicht alle Pflichten entfallen','Sie ist kein Gefahrgut mehr','Es ist gar nichts zu beachten','Sie darf nur nachts fahren','Verpackung, Kennzeichnung der Versandstücke und Beförderungspapier bleiben zum Beispiel nötig.']]});
LT('Gefahrgut & Gefahrstofflager',(m,A)=>{
A({name:'Punkte nach der 1000-Punkte-Regel',gen:r=>{const a=r.p([40,60,100,150]),b=r.p([100,200,300,400]),P=a*3+b*1;
 return{q:'Geladen sind '+a+' l eines Stoffs der Beförderungskategorie 2 (Faktor 3) und '+b+' l eines Stoffs der Beförderungskategorie 3 (Faktor 1). Wie viele Punkte ergibt das?',a:P,u:'Punkte',d:0,tol:0,
 sol:['Punkte = Menge · Faktor','= '+a+' · 3 + '+b+' · 1 = '+a*3+' + '+b+' = '+P+' Punkte',P<=1000?'Die Grenze von 1000 Punkten ist eingehalten.':'Die Grenze von 1000 Punkten ist überschritten: Es gelten die vollen Vorschriften.']}}});
A({name:'Auffangvolumen',gen:r=>{const n=r.p([8,12,20,30]),v=r.p([200,1000]),G=n*v,A2=Math.max(v,G*.1);
 return{q:'In einem Regal lagern '+n+' Gebinde zu je '+v+' l einer wassergefährdenden Flüssigkeit. Richtwert: Die Auffangwanne fasst mindestens den Inhalt des größten Gebindes und mindestens 10 % der Gesamtmenge. Welches Volumen braucht sie?',a:A2,u:'l',d:0,tol:0,
 sol:['Gesamtmenge = '+n+' · '+v+' l = '+nz(G,0)+' l','10 % davon = '+nz(G*.1,0)+' l','größtes Gebinde = '+v+' l','Es gilt der größere Wert: '+nz(A2,0)+' l']}}});});

TM({t:'Prozesse verbessern: Wertstrom & Lean',intro:'Die meiste Zeit liegt Ware herum. Du machst den Weg eines Auftrags sichtbar, erkennst Verschwendung und verbesserst mit Deiner Mannschaft in kleinen, messbaren Schritten.',
pts:['Wertschöpfend ist nur, wofür der Kunde zahlt: richtige Ware, vollständig, unbeschädigt, pünktlich. Alles andere ist Verschwendung oder nötige Unterstützung.',
'Sieben Arten der Verschwendung im Lager: unnötige Wege, Transporte, Bestände, Wartezeiten, Überarbeitung (doppeltes Zählen, Umpacken), Überproduktion (zu früh kommissionieren), Fehler.',
'Der Wertstrom zeigt alle Schritte eines Auftrags mit Bearbeitungszeit, Liegezeit und Bestand dazwischen. Das Verhältnis von Bearbeitungszeit zu Durchlaufzeit ist oft nur wenige Prozent.',
'Das Wegediagramm zeichnet die tatsächlichen Laufwege in den Hallenplan. Kreuzungen und lange Schleifen fallen sofort auf.',
'5S schafft die Grundlage: aussortieren, ordnen, sauber halten, Standards setzen, Disziplin halten. Im Lager heißt das: feste, gekennzeichnete Plätze für alles, auch für Leergut und Hilfsmittel.',
'Verbessert wird im Kreis: planen, ausprobieren, prüfen, zum Standard machen. Kleine Schritte mit Messung vorher und nachher wirken dauerhafter als der große Umbau.',
'Die Mitarbeiter kennen die Hindernisse am besten. Tägliche Kurzbesprechung, Ideentafel und schnelle Rückmeldung halten die Verbesserung am Leben.'],
fo:['Flussgrad = [[Bearbeitungszeit||Durchlaufzeit]]','Durchlaufzeit = Σ Bearbeitungszeiten + Σ Liegezeiten'],
mcq:[['Was ist im Lager wertschöpfend?','Die richtige Ware vollständig und pünktlich bereitzustellen','Ware dreimal umzulagern','Bestände doppelt zu zählen','Auf den Stapler zu warten','Dafür zahlt der Kunde. Alles andere wird verringert.'],
['Was zeigt ein Wegediagramm?','Die tatsächlichen Laufwege im Hallenplan','Den Urlaubsplan','Die Bestandshöhe','Die Frachtkosten','Lange Schleifen und Kreuzungen werden sichtbar.'],
['Ein Auftrag hat 20 min Bearbeitungszeit und 8 h Durchlaufzeit. Was sagt das?','Die meiste Zeit liegt der Auftrag','Die Mitarbeiter arbeiten zu langsam','Die Bearbeitung ist zu kurz','Alles ist in Ordnung','Verbesserung setzt an den Liegezeiten zwischen den Schritten an.'],
['Was ist der letzte Schritt im Verbesserungskreis?','Die bewährte Lösung zum Standard machen','Die nächste Idee beginnen','Den Verursacher suchen','Die Messung löschen','Ohne Standard rutscht der Ablauf zurück.']]});
LT('Prozesse verbessern: Wertstrom & Lean',(m,A)=>{
A({name:'Flussgrad eines Auftrags',gen:r=>{const tb=r.p([15,20,25,30,45]),dl=r.p([4,6,8,12,24]),f=tb/(dl*60)*100;
 return{q:'Ein Auftrag wird insgesamt '+tb+' min bearbeitet. Vom Eingang bis zur Verladung vergehen '+dl+' h. Wie hoch ist der Flussgrad?',a:f,u:'%',d:1,tol:.005,
 sol:['Durchlaufzeit = '+dl+' h = '+dl*60+' min','Flussgrad = [[Bearbeitungszeit||Durchlaufzeit]] = [['+tb+' min||'+dl*60+' min]] = '+nz(f,1)+' %']}}});
A({name:'Eingesparte Wegzeit',gen:r=>{const w=r.p([18,24,30,36]),e=r.p([20,25,30,40]),n=r.p([120,150,200]),v=1.2,t=w*e/100/v*n*8/3600;
 return{q:'Ein Kommissionierer legt je Position im Mittel '+w+' m zurück (1,2 m/s) und schafft '+n+' Positionen je Stunde. Durch neue Platzvergabe sinkt der Weg um '+e+' %. Wie viele Stunden Wegzeit spart das in einer 8-Stunden-Schicht?',a:t,u:'h',d:2,tol:.02,
 sol:['eingesparter Weg je Position = '+w+' m · '+nz(e/100,2)+' = '+nz(w*e/100,1)+' m','eingesparte Zeit je Position = [['+nz(w*e/100,1)+' m||1,2 m/s]] = '+nz(w*e/100/v,1)+' s','je Schicht: [['+nz(w*e/100,1)+' m · '+n+' · 8||1,2 m/s]] = '+nz(w*e/100/v*n*8,0)+' s = '+nz(t,2)+' h']}}});});
}
