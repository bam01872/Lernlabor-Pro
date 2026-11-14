
/* ===== Pakete E3 und E4 (Elektrotechnik): Vermuten, Kurz erklärt, Skizze, Regler mit Auftrag ===== */
if(FR==='el'){const TI=t=>L(240,28,t,'middle',16,'var(--ink)',700),P=(d,c='var(--ink)',w=2.4,da='')=>`<path d="${d}" stroke="${c}" stroke-width="${w}" fill="none" stroke-linejoin="round"${da?` stroke-dasharray="${da}"`:''}/>`;

/* ---------- Schaltpläne: Selbsthaltung ---------- */
const KT=(x,y,oe,c='var(--ink)')=>P(`M${x} ${y}V${y+8}M${x-11} ${y+10}L${x} ${y+30}V${y+38}`+(oe?`M${x} ${y+8}H${x-9}`:''),c,2.6);
const shBild=k=>{const g=CC('g');let s=TI('Selbsthaltung mit Stopp als Öffner');
 s+=P('M70 46H410')+L(62,51,'L+','end',14,'var(--ink)',700)+P('M70 244H410')+L(62,249,'M','end',14,'var(--ink)',700);
 s+=P('M190 46V58')+KT(190,58,1)+L(176,82,'S0 Stopp','end',14,'var(--ink)',700)+P('M190 96V112M190 112H290V118M190 112V118');
 s+=KT(190,118,0)+L(176,142,'S1 Start','end',14,'var(--ink)',700)+KT(290,118,0,g)+L(302,142,'K1 hält','start',14,g,700);
 s+=P('M190 156V170M290 156V170H190M190 170V186')+RC(166,186,48,30,'var(--card)','var(--ink)',3,2)+L(190,206,'K1','middle',14,'var(--ink)',700)+P('M190 216V244')+L(226,206,'Schützspule','start',13,'var(--mute)',500);
 return s};
X['Schaltpläne & Schaltungstechnik']={
 v:['An einer Schützsteuerung bricht der Draht zum Stopp-Taster. Was soll passieren?',['Die Anlage läuft weiter, bis jemand es merkt.','Die Anlage schaltet ab.','Die Anlage startet von selbst.','Nichts, der Draht ist nur zur Reserve.'],1,'Deshalb ist der Stopp ein Öffner: Ein unterbrochener Stromkreis wirkt wie ein Druck auf den Stopp-Taster.'],
 ein:[S(13,'Der Stromlaufplan trennt den Weg der Energie vom Weg der Befehle.',VS('Zwei Stromkreise',{h:'Hauptstromkreis',c:'r',l:['400 V zum Motor','Sicherung, Schütz, Motorschutz','große Querschnitte']},{h:'Steuerstromkreis',c:'b',l:['meist 24 V','Taster, Kontakte, Spulen','Verriegelung und Meldung']})),
  S(14,'Die Selbsthaltung merkt sich den Startbefehl: Ein Kontakt des Schützes überbrückt den Start-Taster.',shBild),
  S(13,'Kennbuchstaben sagen, welche Aufgabe ein Betriebsmittel hat.',CARDS('Kennbuchstaben',[['⚡','Q','schaltet Energie','r'],['🛡️','F','schützt','y'],['👆','S','Handbefehl','b'],['🔁','K','verarbeitet Signale','a'],['📡','B','Sensor','g'],['⚙️','M','Motor','b']],{cols:3})),
  S(13,'Bei der Wendeschaltung sperren sich die Schütze gegenseitig. So ziehen nie beide zugleich an.',LIST('Verriegelung',[['Öffner von Q2 vor der Spule von Q1','1'],['Öffner von Q1 vor der Spule von Q2','2'],['Zusätzlich über die Taster verriegeln','3','doppelte Sicherheit']]))],
 skz:[[SKZ(shBild,'Skizze Selbsthaltung'),'Der grüne Kontakt K1 liegt parallel zum Start-Taster S1. Der Stopp-Taster S0 liegt als Öffner davor und unterbricht alles.']]};

/* ---------- SPS ---------- */
const spsZyk=CYC('Zyklus der SPS',[['Eingänge lesen','Abbild der Eingänge'],['Programm','Schritt für Schritt'],['Ausgänge setzen','Abbild der Ausgänge']],{r:78});
X['SPS: Aufbau & Programmierung']={
 v:['Ein Lichttaster meldet ein Teil nur 2 ms lang. Die SPS hat 20 ms Zykluszeit. Was passiert?',['Die SPS erkennt jedes Teil sicher.','Die SPS kann Teile übersehen.','Die SPS geht in Störung.','Die SPS zählt jedes Teil doppelt.'],1,'Die Eingänge werden nur einmal je Zyklus gelesen. Ein kürzeres Signal kann dazwischen kommen und wieder weg sein.'],
 ein:[S(13,'Die SPS besteht aus wenigen Baugruppen, die auf einer Schiene sitzen oder dezentral an der Maschine.',FLOW('Aufbau',[['🔌','Netzteil','24 V','y'],['🧠','CPU','Programm','b'],['📥','Eingänge','Taster, Sensoren','g'],['📤','Ausgänge','Schütze, Ventile','r']])),
  S(13,'Sie arbeitet ihr Programm immer wieder von vorn ab. Ein Durchlauf heißt Zyklus.',spsZyk),
  S(13,'Für das Programm gibt es genormte Sprachen. Welche Du nimmst, hängt von der Aufgabe ab.',CARDS('Sprachen',[['🪜','KOP','sieht aus wie ein Stromlaufplan','b'],['🧩','FUP','Bausteine für Logik','g'],['📝','ST','Text für Berechnungen','y'],['👣','AS','Schrittketten','a']])),
  S(14,'Eine Programmänderung bringst Du in festen Schritten in die Anlage.',LIST('Sicher ändern',[['Aktuellen Stand sichern','1'],['Änderung dokumentieren','2'],['Außerhalb der Produktion laden','3'],['Alle Betriebsarten testen','4'],['Neuen Stand ablegen','5']],{h:38}))],
 skz:[[SKZ(spsZyk,'Skizze SPS-Zyklus'),'Die Zykluszeit liegt meist bei wenigen Millisekunden. Die ungünstigste Reaktionszeit ist etwa doppelt so lang wie ein Zyklus, dazu kommen die Verzögerungen von Eingang und Ausgang.']]};

/* ---------- Sensoren: Kennlinie 4 bis 20 mA ---------- */
const kl420=(I,ti)=>{const c=CHT({xm:10,ym:20,xt:[0,2.5,5,7.5,10],xf:t=>nt(t),yt:[4,8,12,16,20],xl:'Druck in bar',yl:'Strom in mA',Y1:66});let s=c.s+TI(ti||'Kennlinie 4 bis 20 mA');const x=(I-4)/16*10;
 s+=LN(c,0,4,10,20,'var(--flow)',3.2)+LN(c,0,4,10,4,'var(--mute)',1.4,'5 4')+L(c.X1,c.py(4)+16,'4 mA: Messbereichsanfang','end',13,'var(--mute)',600);
 s+=LN(c,x,0,x,I,'var(--ok)',1.8,'4 3')+LN(c,0,I,x,I,'var(--ok)',1.8,'4 3')+DOT(c.px(x),c.py(I),'var(--ok)')+L(c.px(x)-10,c.py(I)-10,nz(I,0)+' mA sind '+nt(x)+' bar','end',14,'var(--ok)',700);return s};
X['Sensoren & Aktoren']={
 v:['Warum beginnt das Stromsignal eines Sensors bei 4 mA und nicht bei 0 mA?',['Weil 0 mA zu ungenau wären.','Damit ein Drahtbruch erkannt wird.','Weil die SPS keine Null lesen kann.','Um Strom zu sparen.'],1,'Fließen 0 mA, ist die Leitung unterbrochen oder der Sensor defekt. Der kleinste Messwert liefert noch 4 mA.'],
 ein:[S(13,'Welcher Sensor passt, hängt vom Stoff und von der Umgebung ab.',CARDS('Näherungssensoren',[['🧲','Induktiv','nur Metall','b'],['🫙','Kapazitiv','fast alle Stoffe','g'],['🔦','Optisch','große Reichweite','y'],['🔊','Ultraschall','unempfindlich gegen Staub','a']])),
  S(13,'Der Nennschaltabstand gilt für Stahl. Andere Metalle erkennt der induktive Sensor erst näher.',BARS('Schaltabstand bei s_n = 8 mm (Beispielwerte)',[['Stahl',8,'8 mm','g'],['Edelstahl',5.6,'5,6 mm','b'],['Messing',4,'4 mm','y'],['Aluminium',3.2,'3,2 mm','r']],{lx:130,max:9})),
  S(14,'Analoge Sensoren geben den Messwert als Strom aus. Aus dem Strom rechnest Du den Messwert zurück.',k=>kl420(12)),
  S(13,'Aktoren setzen die Befehle der Steuerung um.',FLOW('Vom Signal zur Wirkung',[['📤','Ausgang','24 V','b'],['🔁','Schütz, Ventil','verstärkt','y'],['⚙️','Motor, Zylinder','bewegt','g']]))],
 skz:[[SKZ(k=>kl420(12),'Skizze Kennlinie'),'Messbereich 0 bis 10 bar. 12 mA liegen genau in der Mitte des Signalbereichs, also sind es 5 bar.']]};

/* ---------- Regelungstechnik ---------- */
const rkBild2=k=>{let s=TI('Regelkreis');const B=(x,w,t,c,t2)=>BOX(x,86,w,48,t,c,14,t2);
 s+=AW(20,110,78,110)+L(40,100,'w','middle',15,'var(--ink)',700)+`<circle cx="92" cy="110" r="14" fill="var(--card)" stroke="var(--ink)" stroke-width="1.8"/>`+L(92,115,'+','middle',14,'var(--ink)',700)+L(104,140,'−','middle',16,'var(--ink)',700);
 s+=AW(106,110,138,110)+L(122,100,'e','middle',15,'var(--ink)',700)+B(138,90,'Regler','b')+AW(228,110,272,110)+L(250,100,'y','middle',15,'var(--ink)',700)+B(272,100,'Strecke','y')+AW(372,110,456,110)+L(440,100,'x','middle',15,'var(--ink)',700);
 s+=AW(322,44,322,84,CC('r'))+L(332,56,'z Störung','start',13,CC('r'),700);
 s+=P('M410 110V200H300')+`<circle cx="410" cy="110" r="3.5" fill="var(--ink)"/>`+BOX(210,180,90,40,'Messen','g',14)+P('M210 200H92')+AW(92,200,92,126);
 s+=L(240,254,'e = w − x: Der Regler arbeitet mit der Abweichung.','middle',14,'var(--mute)',500);return s};
const rgSim=(Kp,Ki)=>{const dt=0.5,T=15,n=240,w=60,x0=20;let x=x0,I=0,buf=Array(8).fill(0),mx=x0;const xs=[];for(let i=0;i<n;i++){const e=w-x;I+=Ki*e*dt;const y=Math.max(0,Math.min(100,Kp*e+I));buf.push(y);const u=buf.shift();x+=dt*((x0+0.8*u)-x)/T;mx=Math.max(mx,x);xs.push(x)}
 return{xs,e:w-x,os:Math.max(0,(mx-w)/(w-x0)*100),osc:Math.abs(xs[n-1]-xs[n-20])}};
const rgBild=(r,ti)=>{const c=CHT({xm:120,ym:90,xt:[0,30,60,90,120],yt:[20,40,60,80],xl:'Zeit in s',yl:'Temperatur in °C',Y1:66});let s=c.s+(ti?TI(ti):'');
 s+=LN(c,0,60,120,60,'var(--ok)',2,'7 5')+L(c.X1,c.py(60)-7,'Sollwert 60 °C','end',13,'var(--ok)',700)+PL(r.xs.filter((_,i)=>i%2===0).map((x,i)=>[c.px(i),c.py(x)]),'var(--flow)',3);return s};
X['Regelungstechnik']={
 v:['Ein Ofen wird nur mit einem P-Regler geregelt. Der Sollwert ist 200 °C. Was zeigt das Thermometer nach langer Zeit?',['Genau 200 °C','Etwas weniger als 200 °C','Deutlich mehr als 200 °C','Es schwankt immer um 50 °C'],1,'Der P-Regler braucht eine Abweichung, um überhaupt eine Stellgröße auszugeben. Erst der I-Anteil beseitigt sie.'],
 ein:[S(13,'Steuern und Regeln unterscheiden sich in einem Punkt: Wird das Ergebnis gemessen und zurückgeführt?',VS('Steuern oder Regeln?',{h:'Steuern',c:'y',l:['offener Wirkungsweg','Störung bleibt unbemerkt','Beispiel: Zeitschaltuhr']},{h:'Regeln',c:'g',l:['geschlossener Kreis','Störung wird ausgeglichen','Beispiel: Thermostat']})),
  S(14,'Im Regelkreis vergleicht der Regler Sollwert und Istwert und verstellt die Stellgröße.',rkBild2),
  S(13,'Jeder Regleranteil hat eine eigene Aufgabe.',CARDS('P, I und D',[['⚡','P','schnell, aber es bleibt eine Abweichung','b'],['🎯','I','beseitigt die Abweichung','g'],['🛑','D','bremst früh','y']])),
  S(14,'Mit P-Regler allein bleibt die Temperatur unter dem Sollwert. Mit etwas I-Anteil erreicht sie ihn.',k=>rgBild(rgSim(2,k<.5?0:.1),k<.5?'Nur P-Anteil':'P- und I-Anteil'))],
 skz:[[SKZ(rkBild2,'Skizze Regelkreis'),'w Führungsgröße (Sollwert), x Regelgröße (Istwert), e Regeldifferenz, y Stellgröße, z Störgröße.']],
 sim:{t:'Temperaturregler einstellen',fix:'Heizstrecke mit Verzögerung und 4 s Totzeit, Start bei 20 °C, Sollwert 60 °C. Die Kurve ist ein vereinfachtes Rechenmodell.',
  c:[{k:'kp',l:'Verstärkung K_P',u:'',min:0.5,max:8,st:0.5,v:2},{k:'ki',l:'I-Anteil',u:'',min:0,max:0.3,st:0.05,v:0}],
  calc:v=>rgSim(v.kp,v.ki),
  rows:(v,r)=>[['Abweichung nach 120 s',nz(Math.abs(r.e),1)+' K',Math.abs(r.e)<=0.5?'g':'r'],['Überschwingen',nz(r.os,0)+' %',r.os<=10?'g':'r'],['Verhalten',r.osc>1?'schwingt':'ruhig',r.osc>1?'r':'g']],
  svg:(v,r)=>rgBild(r,''),
  auf:{z:'Sollwert auf 0,5 K genau erreichen, höchstens 10 % Überschwingen.',t:'Stelle den Regler so ein, dass die Temperatur nach 120 s höchstens 0,5 K vom Sollwert abweicht, höchstens 10 % überschwingt und nicht dauerhaft schwingt.',h:'Tipp: Ohne I-Anteil bleibt immer eine Abweichung. Zu viel I-Anteil oder zu viel Verstärkung lässt die Temperatur überschwingen.',ok:(v,r)=>Math.abs(r.e)<=0.5&&r.os<=10&&r.osc<=1}}};

/* ---------- Bussysteme: Ebenen ---------- */
const pyrBild=k=>{const E=[['Betriebsleitebene','Aufträge planen','a'],['Leitebene','bedienen, beobachten','b'],['Steuerungsebene','SPS','g'],['Feldebene','Sensoren, Aktoren','y']];let s=TI('Ebenen der Automatisierung');
 E.forEach((e,i)=>{const y=44+i*50,w1=130+i*90,w2=w1+90;s+=`<path d="M${240-w1/2} ${y}H${240+w1/2}L${240+w2/2} ${y+44}H${240-w2/2}Z" fill="color-mix(in srgb,${CC(e[2])} 20%,var(--card))" stroke="${CC(e[2])}" stroke-width="1.6"/>`+L(240,y+20,e[0],'middle',14,'var(--ink)',700)+L(240,y+37,e[1],'middle',12.5,'var(--mute)',500)});
 s+=L(240,262,'nach unten: schneller, kleinere Datenmengen','middle',13,'var(--mute)',500);return s};
X['Bussysteme & industrielle Netzwerke']={
 v:['Ein PROFIBUS-Strang fällt nur gelegentlich aus, meist wenn ein großer Antrieb anläuft. Was prüfst Du zuerst?',['Die Farbe der Leitung','Abschlusswiderstände, Schirmung und Steckverbindungen','Das SPS-Programm','Die Netzfrequenz'],1,'Sporadische Busfehler haben fast immer physikalische Ursachen: fehlender Abschluss, schlechter Schirm, lose Stecker, Leitung neben Motorkabeln.'],
 ein:[S(13,'Die Automatisierung ist in Ebenen gegliedert. Jede Ebene hat ihre Aufgabe und ihr Netz.',pyrBild),
  S(13,'An der Maschine verbinden Feldbusse und Industrial Ethernet die Geräte mit der Steuerung.',CARDS('Gängige Systeme',[['🟣','PROFIBUS','Linie mit Abschluss','a'],['🟢','PROFINET','Ethernet mit Switches','g'],['🟡','AS-Interface','einfache Sensoren','y'],['🔵','IO-Link','bis in den Sensor','b']])),
  S(13,'Der Aufbau bestimmt, was bei einem Leitungsbruch passiert.',CARDS('Topologien',[['➖','Linie','einfach, Abschluss nötig','y'],['✳️','Stern','ein Ausfall bleibt begrenzt','b'],['⭕','Ring','läuft bei einem Bruch weiter','g']])),
  S(13,'Bei der Inbetriebnahme gehst Du immer dieselben Punkte durch.',LIST('Inbetriebnahme eines Netzes',[['Leitung, Schirm und Abschluss prüfen','1'],['Adressen und Gerätenamen vergeben','2','keine doppelt'],['Diagnose auslesen','3'],['Plan und Adressliste ablegen','4']]))],
 skz:[[SKZ(pyrBild,'Skizze Automatisierungspyramide'),'Unten zählt Geschwindigkeit in Millisekunden, oben zählen große Datenmengen. Dazwischen vermittelt die Steuerung.']]};

/* ---------- Funktionale Sicherheit ---------- */
const nhBild=k=>{let s=TI('Not-Halt in zwei Kanälen');
 s+=BOX(20,80,96,70,'Not-Halt','r',14,'zwei Öffner')+BOX(176,80,128,70,'Sicherheits-','y',14,'schaltgerät')+BOX(364,60,96,44,'Schütz Q1','b',14)+BOX(364,128,96,44,'Schütz Q2','b',14);
 s+=AW(116,100,174,100,CC('r'))+AW(116,130,174,130,CC('r'))+L(146,92,'Kanal 1','middle',12,'var(--mute)',600)+L(146,146,'Kanal 2','middle',12,'var(--mute)',600)+AW(304,100,362,84)+AW(304,130,362,148);
 s+=P('M412 104V128','var(--ink)',2.6)+P('M412 172V200','var(--ink)',2.6)+`<circle cx="412" cy="218" r="18" fill="var(--card)" stroke="var(--ink)" stroke-width="1.8"/>`+L(412,223,'M','middle',15,'var(--ink)',700)+L(422,121,'in Reihe','start',12.5,'var(--mute)',500);
 s+=P('M364 82H330V204H240V152','var(--ok)',1.8,'5 4')+L(24,228,'Rückführkreis: erkennt verschweißte Kontakte','start',12.5,'var(--ok)',600)+L(240,256,'Ein einzelner Fehler hebt die Schutzfunktion nicht auf.','middle',14,'var(--mute)',500);return s};
X['Funktionale Sicherheit von Steuerungen']={
 v:['An einer Presse soll ein Lichtvorhang die Hände schützen. Die Presse steht erst 200 ms nach dem Unterbrechen still. Was folgt daraus?',['Der Lichtvorhang darf direkt an der Gefahrstelle sitzen.','Der Lichtvorhang braucht einen Mindestabstand zur Gefahrstelle.','Ein Lichtvorhang ist dann verboten.','Die Nachlaufzeit spielt keine Rolle.'],1,'In 200 ms legt eine Hand etwa 40 cm zurück. So weit muss der Lichtvorhang mindestens entfernt sein, plus Zuschlag.'],
 ein:[S(13,'Am Anfang steht das Risiko. Drei Fragen führen zum erforderlichen Performance Level.',LIST('Wie hoch ist das Risiko?',[['Wie schwer kann die Verletzung sein?','S'],['Wie oft und wie lange ist jemand dort?','F'],['Kann man der Gefahr ausweichen?','P']])),
  S(13,'Je höher das Risiko, desto zuverlässiger muss die Sicherheitsfunktion sein.',BARS('Performance Level',[['PL a',1,'geringes Risiko','g'],['PL b',2,'','g'],['PL c',3,'','y'],['PL d',4,'','y'],['PL e',5,'hohes Risiko','r']],{lx:90,max:5.4})),
  S(14,'Hohe Anforderungen erfüllt nur ein zweikanaliger Aufbau mit Überwachung.',nhBild),
  S(13,'Der Abstand des Lichtvorhangs folgt aus der Nachlaufzeit.',k=>TITLE('Mindestabstand')+OP(ph(k,.05,.4),FORM(240,104,['S = K · T + C'],'middle',undefined,24))+OP(ph(k,.45,.85),FORM(240,184,['S = 2000 ',{n:'mm',d:'s'},' · 0,2 s + 0 mm = 400 mm'],'middle',undefined,18)))],
 skz:[[SKZ(nhBild,'Skizze zweikanaliger Not-Halt'),'Zwei Kontakte, zwei Schütze in Reihe und ein Rückführkreis. Verschweißt ein Schütz, trennt das zweite, und das Schaltgerät gibt keinen Neustart frei.']]};

/* ---------- IT-Sicherheit ---------- */
const itBild=k=>{let s=TI('Netze trennen, Daten sichern');
 s+=BOX(16,60,120,84,'Büronetz','b',15,'E-Mail, Internet')+RC(152,52,30,100,`color-mix(in srgb,${CC('r')} 30%,var(--card))`,CC('r'),4,1.8)+`<text x="167" y="106" text-anchor="middle" transform="rotate(-90 167 106)" style="font-size:13px;font-weight:700;fill:var(--ink)">Firewall</text>`;
 s+=RC(198,52,266,100,'var(--card)','var(--ink)',8,1.6)+L(331,72,'Produktionsnetz','middle',14,'var(--ink)',700)+BOX(210,84,116,56,'Zone Linie 1','g',13,'SPS, Panel')+BOX(336,84,116,56,'Zone Linie 2','g',13,'SPS, Roboter');
 s+=AW(136,102,152,102)+AW(182,102,198,102);
 s+=BOX(40,186,120,56,'Kopie 1','y',14,'im Betrieb')+BOX(180,186,120,56,'Kopie 2','y',14,'anderes Medium')+BOX(320,186,120,56,'Kopie 3','y',14,'außer Haus')+L(240,262,'3 Kopien, 2 Medien, 1 außer Haus','middle',13,'var(--mute)',600);return s};
X['IT-Sicherheit & Datensicherung in der Produktion']={
 v:['Nach einem Defekt wird eine SPS getauscht. Das letzte gesicherte Programm ist zwei Jahre alt. Was ist das größte Problem?',['Die neue SPS ist zu schnell.','Alle Änderungen der letzten zwei Jahre fehlen.','Das Programm passt nicht in den Speicher.','Die Garantie erlischt.'],1,'Optimierungen, neue Typen und Fehlerbehebungen sind verloren. Deshalb wird nach jeder Änderung gesichert.'],
 ein:[S(13,'IT-Sicherheit hat drei Ziele. In der Produktion zählt zuerst, dass die Anlage läuft.',STAIRS('Schutzziele',[['Verfügbarkeit','Anlage läuft'],['Integrität','Programme unverändert'],['Vertraulichkeit','Rezepte geschützt']])),
  S(14,'Büro- und Produktionsnetz sind getrennt. Dazwischen lässt die Firewall nur durch, was nötig ist.',itBild),
  S(13,'Die meisten Vorfälle beginnen mit einfachen Dingen.',CARDS('Einfallstore',[['💾','USB-Stick','fremd, ungeprüft','r'],['💻','Service-Notebook','hängt direkt am Netz','y'],['🔑','Standardpasswort','nie geändert','r'],['🕰️','Altsystem','ohne Updates','y']])),
  S(13,'Gesichert wird nach jeder Änderung, und die Wiederherstellung wird geübt.',LIST('Was gehört in die Sicherung?',[['SPS- und Roboterprogramme','ok'],['Parameter von Umrichtern und Reglern','ok'],['Rezepte und Bedienbilder','ok'],['Wiederherstellung testen','!','erst dann zählt die Sicherung']]))],
 skz:[[SKZ(itBild,'Skizze Netztrennung und Sicherung'),'Oben: getrennte Netze mit Zonen. Unten: die 3-2-1-Regel für die Datensicherung.']]};

Object.assign(ERK,{
'Schaltpläne & Schaltungstechnik':['Schütze schalten mit kleiner Leistung große Leistung. Die Logik entsteht durch Reihen- und Parallelschaltung von Kontakten.','Bei der Fehlersuche gehst Du mit Plan und Messgerät den Strompfad entlang. Ein Plan, der nicht zum Schrank passt, kostet Stunden.',['Stopp-Taster als Schließer gezeichnet.','Selbsthaltekontakt in Reihe statt parallel zum Start-Taster gelegt.','Verriegelung bei der Wendeschaltung vergessen.','Änderungen im Schrank gemacht, aber nicht im Plan nachgetragen.']],
'SPS: Aufbau & Programmierung':['Die SPS sieht die Welt nur einmal je Zyklus. Alles, was dazwischen passiert, bemerkt sie nicht.','Du programmierst nicht unbedingt selbst, aber Du verantwortest, dass Änderungen gesichert, getestet und dokumentiert sind.',['Stopp-Taster im Programm auf Signal 0 abgefragt, obwohl er als Öffner 1 liefert.','Programm im laufenden Betrieb geändert, ohne den Stand zu sichern.','Zu kurze Signale über normale Eingänge erfasst.','Sicherheitsfunktionen in der normalen SPS statt in sicherer Technik gelöst.']],
'Sensoren & Aktoren':['Ein Sensor ist nur so gut wie seine Auswahl für Stoff, Abstand und Umgebung. Das analoge Signal ist eine Gerade zwischen zwei Punkten.','Bei Störungen prüfst Du zuerst Montageabstand, Verschmutzung und Leitung, erst dann die Steuerung.',['Den Messbereich bei 0 mA statt bei 4 mA beginnen lassen.','Durch 20 mA statt durch die Spanne von 16 mA geteilt.','Den Nennschaltabstand ungeprüft für Aluminium oder Edelstahl angenommen.','PNP und NPN verwechselt.']],
'Regelungstechnik':['Der Regler kennt nur die Abweichung. Wie gut er arbeitet, hängt davon ab, wie träge die Strecke ist und wie spät er die Wirkung sieht.','Du stellst Regler selten selbst ein, aber Du erkennst am Kurvenverlauf, was nicht stimmt: bleibende Abweichung, Überschwingen oder Dauerschwingung.',['Steuern und Regeln verwechselt.','Vorzeichen der Regeldifferenz vertauscht: e = w − x.','Vom P-Regler erwartet, dass er den Sollwert genau erreicht.','Schwingen mit mehr Verstärkung beheben wollen.']],
'Bussysteme & industrielle Netzwerke':['Ein Bus ersetzt viele Einzeladern durch eine Leitung mit Adressen. Damit werden Aufbau und Adressierung zu den wichtigsten Fehlerquellen.','Du hältst Netzplan und Adressliste aktuell. Bei Erweiterungen prüfst Du Leitungslängen, freie Adressen und die Auslastung.',['Abschlusswiderstand vergessen oder in der Mitte der Linie eingeschaltet.','Adressen doppelt vergeben.','Bit und Byte bei der Datenrate verwechselt.','Busleitung zusammen mit Motorleitungen verlegt.']],
'Funktionale Sicherheit von Steuerungen':['Sicherheit entsteht aus drei Dingen: der richtigen Anforderung aus dem Risiko, einem Aufbau, der Fehler verkraftet, und der Prüfung, dass es wirklich funktioniert.','Als Meister sorgst Du dafür, dass Schutzeinrichtungen wirksam bleiben. Du duldest keine Überbrückung und suchst die Ursache im Ablauf.',['Den Not-Halt als Ersatz für Schutzeinrichtungen angesehen.','Die Nachlaufzeit in ms statt in s eingesetzt.','Zwei Kanäle aufgebaut, aber nicht überwacht.','Nach einer Änderung nicht neu validiert.']],
'IT-Sicherheit & Datensicherung in der Produktion':['Schutz entsteht durch einfache, feste Regeln, die jeder einhält, nicht durch eine einzelne teure Technik.','Du legst fest, wer nach einer Änderung sichert, wo die Sicherung liegt und wer im Notfall entscheidet. Und Du lässt die Wiederherstellung üben.',['Sicherung nur auf dem Rechner abgelegt, der selbst ausfallen kann.','Fernwartungszugang dauerhaft offen gelassen.','Sicherung nie zurückgespielt und im Ernstfall unbrauchbar.','Ein gemeinsames Passwort für alle Benutzer.']]});
}
