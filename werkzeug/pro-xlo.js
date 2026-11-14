/* ===== Logistik: Vermuten, Kurz erklärt, Skizze, Regler mit Auftrag ===== */
if(FR==='lo'){const TI=XTI,MX=XMX,P=XP,FO=XFO;
/* ---------- Lieferkette ---------- */
const lkSk=k=>{let s=TI('Lieferkette: Ware nach rechts, Information nach links');
 [['Lieferant','b'],['Produktion','y'],['Lager','g'],['Kunde','a']].forEach((q,i)=>{s+=BOX(18+i*116,96,100,56,q[0],q[1],14);if(i<3)s+=AW(119+i*116,112,133+i*116,112,CC('b'),2.6)+AW(133+i*116,138,119+i*116,138,CC('y'),2.6)});
 s+=L(240,74,'Material und Ware','middle',13,CC('b'),700)+L(240,180,'Bedarf, Bestellung, Abruf','middle',13,'var(--ink)',700)+L(240,236,'Je besser die Information fließt, desto weniger Bestand ist nötig.','middle',13,'var(--mute)',500);return s};
X['Logistikstrategien & Lieferkette']={
 v:['Der Kunde bestellt in einer Woche 10 % mehr als sonst. Was kommt drei Stufen weiter hinten beim Rohstofflieferanten an?',['Genau 10 % mehr','Oft ein viel größerer Ausschlag','Gar nichts','10 % weniger'],1,'Jede Stufe schlägt Sicherheit auf und bestellt in größeren Losen. Die Schwankung schaukelt sich auf.'],
 ein:[S(14,'Durch die Lieferkette fließt Ware in die eine und Information in die andere Richtung.',lkSk),
  S(13,'Zwei Grundprinzipien steuern den Nachschub.',VS('Push oder Pull',{h:'Push',c:'y',l:['nach Plan auf Lager','hohe Bestände','träge bei Änderungen']},{h:'Pull',c:'g',l:['Verbrauch löst aus','niedrige Bestände','braucht stabile Abläufe']})),
  S(13,'Schwankungen werden entlang der Kette größer.',BARS('Peitscheneffekt',[['Kunde',10,'+10 %','g'],['Handel',18,'+18 %','y'],['Hersteller',30,'+30 %','y'],['Lieferant',48,'+48 %','r']],{lx:120,h:40,y0:60,note:'Beispielwerte'})),
  S(13,'Die Ziele der Logistik ziehen in verschiedene Richtungen.',CARDS('Zielkonflikt',[['🚚','Lieferservice','hoch','g'],['📦','Bestände','niedrig','b'],['💶','Kosten','niedrig','y']]))],
 skz:[[SKZ(lkSk,'Skizze Lieferkette'),'Jede Stufe ist Kunde der vorigen und Lieferant der nächsten.']]};

/* ---------- Bestand: Sägezahn ---------- */
const bsCalc=v=>{const mb=v.v*5+v.sb;let b=v.x+v.sb,ord=-1,pts=[[0,b]],fehl=0,sum=0,mn=b;for(let d=0;d<60;d++){if(d===ord){b+=v.x;pts.push([d,b]);ord=-1}if(ord<0&&b<=mb)ord=d+5+v.vz;b-=v.v;if(b<0){fehl++;b=0}pts.push([d+1,b]);if(b<mn)mn=b;sum+=b}return{mb,pts,fehl,bm:sum/60,mn}};
const bsBild=(v,r)=>{const c=CHT({X0:62,X1:452,Y0:218,Y1:66,xm:60,ym:2600,xt:[0,10,20,30,40,50,60],yt:[500,1000,1500,2000,2500],xl:'Tage',yl:'Bestand in Stück'});let s=c.s;
 if(v.sb>0)s+=RC(c.px(0),c.py(v.sb),c.px(60)-c.px(0),c.py(0)-c.py(v.sb),MX('y',22),'none',0,0);
 s+=LN(c,0,r.mb,60,r.mb,CC('b'),1.8,'6 4')+L(452,52,'gestrichelt: Meldebestand '+nz(r.mb,0),'end',12,CC('b'),700);
 s+=P(r.pts.map((p,i)=>(i?'L':'M')+F(c.px(p[0]))+' '+F(c.py(p[1]))).join(''),r.fehl?'var(--red)':CC('a'),2.8);
 if(r.fehl)s+=L(240,26,'Fehlbestand an '+r.fehl+' Tagen','middle',14,'var(--red)',800);else s+=L(240,26,'immer lieferfähig','middle',14,'var(--ok)',800);return s};
X['Beschaffung & Bestandsmanagement']={
 v:['Die Lieferzeit eines Artikels steigt von 5 auf 10 Tage. Der Meldebestand bleibt unverändert. Was passiert?',['Nichts','Der Bestand reicht nicht bis zur Lieferung','Der Bestand wird zu hoch','Die Bestellmenge sinkt'],1,'Der Meldebestand muss den Verbrauch der ganzen Wiederbeschaffungszeit decken.'],
 ein:[S(14,'Der Bestand läuft wie ein Sägezahn: Lieferung hoch, Verbrauch runter.',k=>bsBild({v:50,x:1000,sb:200,vz:0},bsCalc({v:50,x:1000,sb:200,vz:0}))),
  S(13,'Der Meldebestand sagt, wann bestellt werden muss.',k=>TITLE('Meldebestand')+OP(ph(k,.05,.4),TX(240,104,'Tagesverbrauch · Lieferzeit + Sicherheitsbestand',450,'ein3','middle'))+OP(ph(k,.45,.85),FO(240,186,['50 ',{n:'Stück',d:'Tag'},' · 5 Tage + 200 Stück = 450 Stück'],18))),
  S(13,'Nicht jeder Artikel verdient dieselbe Aufmerksamkeit.',VS('Wie genau steuern?',{h:'AX-Teile',c:'r',l:['hoher Wert','gleichmäßiger Verbrauch','bedarfsgenau, kleine Lose']},{h:'CZ-Teile',c:'m',l:['geringer Wert','unregelmäßig','einfach, mit Vorrat']})),
  S(13,'Ohne richtige Bestandsdaten hilft kein Verfahren.',LIST('Woher Differenzen kommen',[['Buchung vergessen oder doppelt','1'],['Falsche Mengeneinheit','2'],['Bruch und Schwund nicht gemeldet','3'],['Ware am falschen Platz','4']]))],
 skz:[[SKZ(k=>bsBild({v:50,x:1000,sb:200,vz:0},bsCalc({v:50,x:1000,sb:200,vz:0})),'Skizze Bestandsverlauf'),'Erreicht der Bestand die gestrichelte Linie, wird bestellt. Fünf Tage später kommt die Lieferung. Der gelbe Bereich ist der Sicherheitsbestand.']],
 sim:{t:'Bestand über 60 Tage',fix:'Wiederbeschaffungszeit 5 Tage. Bestellt wird, sobald der Meldebestand erreicht ist. Der Lieferverzug gilt für jede Lieferung.',
  c:[{k:'v',l:'Tagesverbrauch',u:'Stück',min:20,max:100,st:10,v:50},{k:'x',l:'Bestellmenge',u:'Stück',min:200,max:2000,st:100,v:1000},{k:'sb',l:'Sicherheitsbestand',u:'Stück',min:0,max:500,st:50,v:0},{k:'vz',l:'Lieferverzug',u:'Tage',min:0,max:5,st:1,v:0}],
  calc:bsCalc,
  rows:(v,r)=>[['Meldebestand',nz(r.mb,0)+' Stück'],['mittlerer Bestand',nz(r.bm,0)+' Stück',r.bm<=500?'g':''],['kleinster Bestand',nz(r.mn,0)+' Stück'],['Tage ohne Ware',String(r.fehl),r.fehl?'r':'g']],
  svg:(v,r)=>bsBild(v,r),
  auf:{z:'3 Tage Lieferverzug überstehen, mittlerer Bestand höchstens 500 Stück.',t:'Der Lieferant ist unzuverlässig: Rechne mit 3 Tagen Verzug. Die Fertigung darf trotzdem nie ohne Ware sein, und der mittlere Bestand soll höchstens 500 Stück betragen. Finde Bestellmenge und Sicherheitsbestand.',h:'Tipp: Stell zuerst 3 Tage Verzug ein. Der Sicherheitsbestand muss den Verbrauch dieser Tage decken, die Bestellmenge bestimmt die Höhe der Zacken.',ok:(v,r)=>v.vz>=3&&r.fehl===0&&r.bm<=500}}};

/* ---------- Distribution ---------- */
const dsSk=k=>{let s=TI('Zwei Netzstrukturen');const hub=(cx,cy,pts,lab,sub)=>{let q='';pts.forEach(([x,y])=>q+=P(`M${cx} ${cy}L${x} ${y}`,'var(--mute)',1.6)+`<circle cx="${x}" cy="${y}" r="6" fill="${CC('a')}"/>`);return q+RC(cx-16,cy-12,32,24,MX('b',40),'var(--ink)',4,1.6)+L(cx,230,lab,'middle',14,'var(--ink)',700)+L(cx,248,sub,'middle',12,'var(--mute)',500)};
 s+=hub(120,130,[[40,70],[70,190],[120,56],[200,80],[205,170],[150,200],[40,140]],'Zentrallager','wenig Bestand, lange Wege');
 s+=[[310,100],[410,100],[360,180]].map(([x,y],i)=>RC(x-13,y-10,26,20,MX('b',40),'var(--ink)',4,1.6)+[[x-36,y-26],[x+36,y-24],[x-30,y+28],[x+34,y+26]].map(([a,b])=>P(`M${x} ${y}L${a} ${b}`,'var(--mute)',1.6)+`<circle cx="${a}" cy="${b}" r="5" fill="${CC('a')}"/>`).join('')).join('')+L(360,230,'Regionallager','middle',14,'var(--ink)',700)+L(360,248,'kurze Wege, mehr Bestand','middle',12,'var(--mute)',500);return s};
X['Distribution & Standortwahl']={
 v:['Ein Unternehmen ersetzt vier Regionallager durch ein Zentrallager. Was geschieht mit dem gesamten Sicherheitsbestand?',['Er vervierfacht sich','Er sinkt','Er bleibt gleich','Er entfällt ganz'],1,'Schwankungen der Regionen gleichen sich zum Teil aus. Deshalb braucht ein Zentrallager weniger Sicherheitsbestand als vier einzelne Lager zusammen.'],
 ein:[S(14,'Zentral oder regional: Jede Struktur hat ihren Preis.',dsSk),
  S(13,'Im Umschlagpunkt wird sortiert, aber nicht gelagert.',FLOW('Cross-Docking',[['🚛','Eingang','mehrere Lieferanten'],['🔀','Sortieren','nach Empfänger'],['🚚','Ausgang','gebündelt']])),
  S(13,'Der Schwerpunkt ist ein rechnerischer Anhaltswert für den Standort.',k=>TITLE('Schwerpunkt')+OP(ph(k,.05,.4),FO(240,104,['x_S = ',{n:'Summe (Menge · x)',d:'Summe der Mengen'}],20))+OP(ph(k,.45,.85),FO(240,190,['x_S = ',{n:'200 t · 20 km + 300 t · 80 km',d:'500 t'},' = 56 km'],17))),
  S(13,'Danach zählen die übrigen Standortfaktoren.',LIST('Standortfaktoren',[['Verkehrsanbindung','1'],['Fläche, Kosten, Erweiterung','2'],['Arbeitskräfte','3'],['Auflagen und Nachbarschaft','4']]))],
 skz:[[SKZ(dsSk,'Skizze Zentrallager und Regionallager'),'Blau die Lager, rot die Kunden. Links ein Standort mit langen Wegen, rechts drei Standorte mit kurzen.']]};

/* ---------- Informationsfluss ---------- */
const ifSk=k=>{let s=TI('Vom Etikett zum Bestand');
 s+=RC(26,150,90,10,'#b08968','var(--ink)',2,1.2)+RC(34,84,74,66,MX('y',30),'var(--ink)',3,1.6)+RC(48,98,46,30,'var(--card)','var(--ink)',2,1.2)+[52,57,61,67,72,76,82,87].map(x=>P(`M${x} 102v22`,'var(--ink)',x%3?1.4:2.4)).join('')+L(71,178,'Palette mit Etikett','middle',12,'var(--mute)',600);
 s+=AW(120,116,150,116,'var(--ink)',2.4)+BOX(154,90,124,52,'Scan','b',14,'am Ort der Handlung')+AW(280,116,298,116,'var(--ink)',2.4)+BOX(300,60,150,48,'Lagerverwaltung','g',13,'Platz, Menge, Bewegung')+BOX(300,128,150,48,'Warenwirtschaft','y',13,'Auftrag, Wert');
 s+=AW(375,110,375,126,'var(--ink)',2)+AW(385,126,385,110,'var(--ink)',2)+L(240,226,'Jede Bewegung wird im Moment der Handlung gebucht.','middle',13,'var(--mute)',500);return s};
X['Informationsfluss: Lagerverwaltung, Barcode, RFID']={
 v:['Ein Staplerfahrer stellt eine Palette „kurz“ auf einen anderen Platz und bucht nicht um. Was ist die Folge?',['Keine, die Palette ist ja noch im Lager','Die Palette ist für das System verschwunden und wird gesucht','Der Bestand steigt','Die Inventur entfällt'],1,'Das System kennt nur gebuchte Plätze. Eine nicht gebuchte Bewegung erzeugt Suchzeit und Differenzen.'],
 ein:[S(14,'Jede Ladeeinheit trägt ihre Daten bei sich. Der Scan verbindet Ware und System.',ifSk),
  S(13,'Drei Techniken zur Identifikation.',CARDS('Identifikation',[['▮▯▮','Strichcode','billig, Sichtkontakt','b'],['🔳','2D-Code','viel Inhalt','g'],['📡','RFID','per Funk, im Pulk','y']])),
  S(13,'Die Inventur prüft, ob Buch und Wirklichkeit übereinstimmen.',VS('Inventurverfahren',{h:'Stichtag',c:'y',l:['alles an einem Tag','Betrieb steht','hoher Aufwand']},{h:'permanent',c:'g',l:['über das Jahr verteilt','Betrieb läuft','braucht genaue Buchung']})),
  S(13,'Ein neues System steht und fällt mit der Vorbereitung.',LIST('Einführung eines Systems',[['Stammdaten bereinigen','1'],['Abläufe festlegen und testen','2'],['Mitarbeiter schulen','3'],['Notfallverfahren für den Ausfall','4']]))],
 skz:[[SKZ(ifSk,'Skizze Informationsfluss'),'Der Scan meldet die Bewegung an die Lagerverwaltung. Sie tauscht Aufträge und Bestände mit der Warenwirtschaft aus.']]};

/* ---------- Wareneingang & Lagerstrategien ---------- */
const lsSk=k=>{let s=TI('Platzvergabe nach Zugriffshäufigkeit');
 for(let r=0;r<4;r++)for(let c=0;c<9;c++){const z=c<3?'r':c<6?'y':'m';s+=RC(70+c*40,56+r*36,34,24,MX(z,z=='m'?20:34),'var(--ink)',3,1)}
 s+=L(128,212,'A: Schnelldreher','middle',12.5,CC('r'),700)+L(248,212,'B','middle',12.5,'var(--ink)',700)+L(368,212,'C: Langsamdreher','middle',12.5,'var(--mute)',700);
 s+=RC(16,84,40,84,MX('g',22),CC('g'),6,1.6)+L(36,130,'Aus-','middle',11,'var(--ink)',700)+L(36,144,'gang','middle',11,'var(--ink)',700)+L(240,246,'Was oft gebraucht wird, steht vorn. Das spart die meisten Wege.','middle',13,'var(--mute)',500);return s};
X['Wareneingang & Lagerstrategien']={
 v:['Ein Lkw liefert 20 Paletten. Eine Palette ist sichtbar beschädigt, der Fahrer hat es eilig. Was tust Du?',['Annehmen und später reklamieren','Schaden auf dem Frachtpapier vermerken und vom Fahrer unterschreiben lassen','Die ganze Lieferung ablehnen','Die Palette heimlich zurückstellen'],1,'Der Vermerk bei der Annahme ist der Beweis, dass der Schaden schon beim Transport da war.'],
 ein:[S(13,'Der Wareneingang folgt einer festen Reihenfolge.',FLOW('Wareneingang',[['🚛','annehmen','Papiere'],['👀','prüfen','Zahl, Schäden'],['🖥️','buchen','scannen'],['📥','einlagern','Platz']])),
  S(13,'Zwei Arten, Plätze zu vergeben.',VS('Lagerplatzvergabe',{h:'Festplatz',c:'b',l:['jeder Artikel hat seinen Platz','übersichtlich','viel leerer Raum']},{h:'frei (chaotisch)',c:'g',l:['System vergibt den Platz','hohe Raumnutzung','nur mit Lagerverwaltung']})),
  S(14,'Schnelldreher gehören nach vorn.',lsSk),
  S(13,'Die Entnahmeregel richtet sich nach der Ware.',CARDS('Entnahmeregeln',[['1️⃣','FIFO','zuerst hinein, zuerst hinaus','b'],['📅','FEFO','zuerst ablaufend','y'],['🧱','LIFO','im Blocklager','m']]))],
 skz:[[SKZ(lsSk,'Skizze Platzvergabe im Regal'),'Rot die häufig gebrauchten Artikel nah am Ausgang, grau die selten gebrauchten hinten.']]};

/* ---------- Kommissionierung ---------- */
const KT=[12,6,3],KL=['Papierliste','Handscanner','Sprache oder Licht'];
const kmC=v=>{const tb=90/v.np,tw=v.w/1.2,tg=5,tt=KT[v.te],t=tb+tw+tg+tt;return{tb,tw,tg,tt,t,L:3600/t}};
const kmB=(v,r)=>{let s=TI('Zeit je Position');const X0=30,W=420,mx=90;
 s+=XSTK(X0,60,W,36,[[r.tb,'m','Basis'],[r.tw,'b','Weg'],[r.tg,'g','Greifen'],[r.tt,'y','Tot']],mx);
 const xz=X0+W*30/mx,ok=r.L>=120;s+=P(`M${F(xz)} 52V104`,ok?'var(--ok)':'var(--red)',2.6)+L(xz,120,'30 s','middle',12.5,ok?'var(--ok)':'var(--red)',800);[0,60,90].forEach(t=>s+=L(X0+W*t/mx,120,t+' s','middle',11.5,'var(--mute)',500));
 s+=L(X0,150,'Basis '+nz(r.tb,1)+' s','start',12.5,'var(--mute)',700)+L(X0+108,150,'Weg '+nz(r.tw,1)+' s','start',12.5,CC('b'),700)+L(X0+214,150,'Greifen '+nz(r.tg,0)+' s','start',12.5,CC('g'),700)+L(X0+326,150,'Tot '+nz(r.tt,0)+' s','start',12.5,'var(--ink)',700);
 s+=RC(X0,170,200,76,'var(--card)','var(--ink)',8,1.6)+L(X0+100,192,'Zeit je Position','middle',12,'var(--mute)',600)+L(X0+100,228,nz(r.t,1)+' s','middle',26,'var(--ink)',800);
 s+=RC(X0+220,170,200,76,MX(ok?'g':'r',16),CC(ok?'g':'r'),8,1.8)+L(X0+320,192,'Leistung','middle',12,'var(--mute)',600)+L(X0+320,228,nz(r.L,0)+' Pos./h','middle',26,'var(--ink)',800);return s};
const kmSk=k=>{let s=TI('Woraus die Kommissionierzeit besteht');
 s+=XSTK(30,70,420,40,[[30,'m','Basiszeit'],[25,'b','Wegzeit'],[5,'g',''],[12,'y','Totzeit']],72);
 s+=L(30,136,'Basiszeit: Auftrag holen, Behälter, Abgabe','start',12.5,'var(--mute)',600)+L(30,156,'Wegzeit: von Platz zu Platz','start',12.5,CC('b'),700)+L(30,176,'Greifzeit: entnehmen und ablegen','start',12.5,CC('g'),700)+L(30,196,'Totzeit: suchen, lesen, zählen, quittieren','start',12.5,'var(--ink)',600);
 s+=L(240,244,'Beispiel: 3 Positionen je Auftrag, 30 m Weg, Papierliste','middle',12.5,'var(--mute)',500);return s};
X['Kommissionierung']={
 v:['Ein Kommissionierer braucht 72 s je Position. Davon entfallen 25 s auf den Weg und 5 s auf das Greifen. Wo setzt Du zuerst an?',['Beim Greifen: schneller zugreifen','Bei Weg, Basis- und Totzeit','Bei den Pausen','Nirgends, das ist normal'],1,'Das Greifen ist der kleinste Anteil. Die großen Blöcke sind Wege, Auftragswechsel und Suchen.'],
 ein:[S(14,'Die Zeit je Position hat vier Anteile.',kmSk),
  S(13,'Zwei Grundprinzipien.',VS('Wer bewegt sich?',{h:'Mann zur Ware',c:'b',l:['Mitarbeiter geht zum Platz','flexibel, günstig','viel Wegzeit']},{h:'Ware zum Mann',c:'y',l:['Ware kommt zum Platz','hohe Leistung','hohe Investition']})),
  S(13,'Mehrere Aufträge auf einem Rundgang sparen Wege.',CARDS('Organisation',[['1️⃣','auftragsweise','einfach, viele Wege','m'],['🧺','serienweise','sammeln, dann verteilen','g'],['🗺️','zonenweise','jeder in seinem Bereich','b']])),
  S(13,'Beleglose Führung senkt Totzeit und Fehler.',BARS('Totzeit je Position',[['Papierliste',12,'12 s','r'],['Handscanner',6,'6 s','y'],['Sprache, Licht',3,'3 s','g']],{lx:140,h:46,y0:70,note:'Beispielwerte'}))],
 skz:[[SKZ(kmSk,'Skizze Anteile der Kommissionierzeit'),'Die Balkenlänge entspricht der Zeit. Greifen ist der kleinste Anteil.']],
 sim:{t:'Kommissionierleistung steigern',fix:'Basiszeit 90 s je Auftrag, Gehen mit 1,2 m/s, Greifzeit 5 s je Position. Totzeit: Papierliste 12 s, Handscanner 6 s, Sprache oder Licht 3 s (Beispielwerte, ohne Verteilzeit).',
  c:[{k:'np',l:'Positionen je Rundgang',u:'',min:1,max:12,st:1,v:3},{k:'w',l:'Weg je Position',u:'m',min:5,max:40,st:5,v:30},{k:'te',l:'Führung',u:'',opts:[0,1,2],v:0,lab:KL}],
  calc:kmC,
  rows:(v,r)=>[['Zeit je Position',nz(r.t,1)+' s'],['Leistung',nz(r.L,0)+' Pos./h',r.L>=120?'g':'r'],['Anteil Wegzeit',nz(r.tw/r.t*100,0)+' %']],
  svg:(v,r)=>kmB(v,r),
  auf:{z:'Mindestens 120 Positionen je Stunde.',t:'Bisher schafft ein Mitarbeiter 50 Positionen je Stunde. Das Ziel sind mindestens 120. Finde eine Kombination aus kürzeren Wegen, gesammelten Aufträgen und Führung, die das erreicht.',h:'Tipp: 120 Positionen je Stunde heißt 30 s je Position. Sieh nach, welcher Balken am längsten ist.',ok:(v,r)=>r.L>=120}}};

/* ---------- Stapler: Traglast ---------- */
const SH=[3,4.5,6],SF=[1,.9,.75];
const stC=v=>{const q=2500*(450+500)/(450+v.c)*SF[v.h];return{q,au:v.m/q,M:v.m*9.81*(450+v.c)/1000}};
const stB=(v,r,an)=>{const over=r.au>1,hy=[126,96,66][v.h],lw=v.c*2*.05,lh=20+v.m/3000*30;let g='';
 /* Stapler: Körper, Gegengewicht, Dach, Räder, Mast, Gabel */
 g+=RC(60,150,130,50,MX('y',55),'var(--ink)',8,2)+RC(46,158,26,42,'var(--mute)','var(--ink)',6,1.6)+P('M84 150V96H168V150','var(--ink)',3)+RC(110,128,30,22,MX('m',30),'var(--ink)',3,1.2);
 g+=`<circle cx="84" cy="204" r="16" fill="var(--ink)"/><circle cx="84" cy="204" r="6" fill="var(--card)"/><circle cx="176" cy="204" r="19" fill="var(--ink)"/><circle cx="176" cy="204" r="7" fill="var(--card)"/>`;
 g+=RC(196,50,9,160,'var(--mute)','var(--ink)',2,1.4)+(an?'<g data-a="lf">':'')+P(`M205 ${hy+lh}H${205+Math.max(90,lw+6)}`,'var(--ink)',5)+P(`M205 ${hy-10}V${hy+lh}`,'var(--ink)',5);
 g+=RC(208,hy,lw,lh,MX(over?'r':'b',40),'var(--ink)',3,1.8)+DOT(208+lw/2,hy+lh/2,'var(--ink)',4)+L(208+lw/2,hy-8,nz(v.m,0)+' kg','middle',13,'var(--ink)',800);
 g+=P(`M208 ${hy+lh+14}H${F(208+lw/2)}`,'var(--ink)',1.4)+P(`M208 ${hy+lh+9}v10M${F(208+lw/2)} ${hy+lh+9}v10`,'var(--ink)',1.4)+L(F(208+lw/2+7),hy+lh+18,v.c+' mm','start',11.5,'var(--ink)',700)+(an?'</g>':'');
 let s=`<g${an?' data-a="tp"':''}${over?' transform="rotate(5 176 222)"':''}>${g}</g>`+P('M20 223H330','var(--ink)',2)+P('M176 223v14','var(--red)',2.2)+L(176,250,'Kippkante','middle',11.5,'var(--red)',700);
 s+=RC(346,46,122,62,'var(--card)','var(--ink)',8,1.6)+L(407,66,'zulässig','middle',12,'var(--mute)',600)+L(407,96,nz(r.q,0)+' kg','middle',21,'var(--ink)',800);
 s+=RC(346,118,122,62,MX(over?'r':r.au>=.8?'g':'y',16),CC(over?'r':r.au>=.8?'g':'y'),8,1.8)+L(407,138,'Auslastung','middle',12,'var(--mute)',600)+L(407,168,nz(r.au*100,0)+' %','middle',21,'var(--ink)',800);
 s+=L(407,202,'Hubhöhe '+nz(SH[v.h],1)+' m','middle',12.5,'var(--ink)',700)+(over?L(407,226,'kippt!','middle',17,'var(--red)',800):'');return s};
X['Flurförderzeuge & Fördertechnik']={
 v:['Ein Stapler mit 2500 kg Tragfähigkeit soll eine 2000 kg schwere, sehr lange Kiste heben. Ist das in Ordnung?',['Ja, 2000 kg sind weniger als 2500 kg','Nur wenn der Lastschwerpunkt nicht weiter vorn liegt als im Traglastdiagramm','Ja, wenn langsam gefahren wird','Nein, nie'],1,'Die Tragfähigkeit gilt für einen bestimmten Lastschwerpunktabstand. Liegt der Schwerpunkt weiter vorn, sinkt die zulässige Last.'],
 ein:[S(14,'Der Stapler ist eine Waage. Die Vorderachse ist die Kippkante.',k=>stB({m:1200,c:500,h:0},stC({m:1200,c:500,h:0}))),
  S(13,'Was zählt, ist das Lastmoment: Gewichtskraft mal Abstand.',k=>TITLE('Lastmoment um die Vorderachse')+OP(ph(k,.05,.4),FO(240,104,['M = F_G · Abstand'],22))+OP(ph(k,.45,.85),TX(240,186,'doppelter Abstand, halbe Last',440,'ein3','middle'))),
  S(13,'Wer fahren darf, ist klar geregelt.',LIST('Fahrer',[['Mindestens 18 Jahre, geeignet','1'],['Ausgebildet, mit Prüfung','2'],['Schriftlich beauftragt','3'],['Jährlich unterwiesen','4']])),
  S(13,'Vor jeder Schicht prüft der Fahrer sein Gerät.',CARDS('Tägliche Prüfung',[['🛑','Bremsen','Lenkung','r'],['⛓️','Gabel','Ketten, Mast','y'],['💧','Hydraulik','Leckagen','b'],['📯','Hupe','Licht','g']]))],
 skz:[[SKZ(k=>stB({m:1200,c:500,h:0},stC({m:1200,c:500,h:0})),'Skizze Stapler mit Last'),'Das Gegengewicht hinten hält die Last vorn. Der Abstand des Lastschwerpunkts vom Gabelrücken entscheidet mit über die zulässige Last.']],
 sim:{t:'Was darf der Stapler heben?',fix:'Beispiel-Stapler: 2500 kg bei 500 mm Lastschwerpunktabstand bis 3 m Hubhöhe, Abstand Vorderachse bis Gabelrücken 450 mm. Abschläge: 10 % bei 4,5 m, 25 % bei 6 m. Maßgeblich ist immer das Traglastdiagramm am Gerät.',
  c:[{k:'m',l:'Last',u:'kg',min:400,max:3000,st:100,v:1200},{k:'c',l:'Lastschwerpunktabstand',u:'mm',min:400,max:1200,st:50,v:500},{k:'h',l:'Hubhöhe',u:'',opts:[0,1,2],v:0,lab:['3 m','4,5 m','6 m']}],
  calc:stC,
  rows:(v,r)=>[['zulässige Last',nz(r.q,0)+' kg'],['Auslastung',nz(r.au*100,0)+' %',r.au>1?'r':'g'],['Lastmoment',nz(r.M/1000,1)+' kNm']],
  svg:(v,r)=>stB(v,r),svgA:(v,r)=>stB(v,r,1),
  auf:{z:'Lange Kiste ab 1500 kg sicher heben, Stapler zu 80 bis 100 % nutzen.',t:'Eine lange Kiste mit mindestens 1500 kg hat ihren Schwerpunkt mindestens 800 mm vor dem Gabelrücken. Finde Einstellungen, bei denen der Stapler sie sicher hebt und zu 80 bis 100 % ausgelastet ist.',h:'Tipp: Stell Last und Abstand ein und sieh, was die Hubhöhe noch zulässt.',ok:(v,r)=>v.m>=1500&&v.c>=800&&r.au<=1&&r.au>=.8}}};

/* ---------- Ladeeinheiten: Kartons auf der Europalette ---------- */
const PK=[[600,400],[300,400],[300,200],[400,200]],PKL=['600 × 400 mm','400 × 300 mm','300 × 200 mm','400 × 200 mm'];
const plC=v=>{const k=PK[v.kt],nl=960000/(k[0]*k[1]),lh=Math.floor(1656/v.h),lg=Math.floor(800/(nl*v.g)),lag=Math.max(0,Math.min(lh,lg));return{nl,lh,lg,lag,n:nl*lag,gw:nl*lag*v.g,H:144+lag*v.h,gr:lg<lh?'Gewicht':'Höhe'}};
const plB=(v,r)=>{const k=PK[v.kt],sc=.14;let s=L(104,24,'von oben','middle',13,'var(--ink)',700)+L(340,24,'von der Seite','middle',13,'var(--ink)',700);
 const X0=20,Y0=40;s+=RC(X0,Y0,1200*sc,800*sc,MX('y',18),'var(--ink)',2,2);
 for(let i=0;i<1200/k[0];i++)for(let j=0;j<800/k[1];j++)s+=RC(X0+i*k[0]*sc+1.5,Y0+j*k[1]*sc+1.5,k[0]*sc-3,k[1]*sc-3,MX('b',34),'var(--ink)',2,1);
 s+=L(104,Y0+800*sc+20,r.nl+' Kartons je Lage','middle',12.5,'var(--ink)',700);
 const sx=236,by=238,sv=.105,pw=1200*.17;s+=RC(sx,by-144*sv,pw,144*sv,'#b08968','var(--ink)',2,1.4);
 for(let l=0;l<r.lag;l++)s+=RC(sx+2,by-144*sv-(l+1)*v.h*sv,pw-4,v.h*sv-1,MX('b',34),'var(--ink)',2,1);
 const ym=by-1800*sv;s+=P(`M${sx-8} ${F(ym)}H${sx+pw+8}`,'var(--red)',1.6,'5 4')+L(sx+pw+12,ym+4,'1800','start',11,'var(--red)',700);
 s+=L(sx+pw/2,258,r.lag+' Lagen, '+nz(r.H,0)+' mm hoch','middle',12.5,'var(--ink)',700);
 s+=L(104,196,r.n+' Kartons','middle',20,'var(--ink)',800)+L(104,218,nz(r.gw,0)+' kg Ladung','middle',13,'var(--mute)',700)+L(104,238,'begrenzt durch: '+r.gr,'middle',12,r.gr=='Gewicht'?CC('y'):'var(--mute)',700);return s};
X['Ladeeinheiten & Verpackung']={
 v:['Ein Karton misst 500 mm · 350 mm. Passt er gut auf die Europalette (1200 mm · 800 mm)?',['Ja, jede Größe passt','Nein, es bleiben Lücken oder es gibt Überstand','Nur hochkant','Nur auf der Industriepalette'],1,'500 und 350 gehen nicht glatt in 1200 und 800 auf. Modulmaße wie 600 · 400 oder 400 · 300 nutzen die Fläche ganz.'],
 ein:[S(14,'Kartons im Modulmaß füllen die Palette ohne Lücke.',k=>plB({kt:0,h:200,g:8},plC({kt:0,h:200,g:8}))),
  S(13,'Eine stabile Ladeeinheit entsteht durch Stapeln im Verbund und Sichern.',LIST('Stabil stapeln',[['Schweres nach unten','1'],['Im Verbund, wie eine Mauer','2'],['Kein Überstand','3'],['Folie oder Umreifung','4']])),
  S(13,'Der Lkw ist nach Stellplätzen oder nach Gewicht voll.',BARS('Sattelzug: was zuerst erreicht ist',[['Stellplätze',33,'33 Europaletten','b'],['Nutzlast',24,'rund 24 t','y']],{lx:120,h:50,y0:80,max:50,note:'schwere Ware: Gewicht begrenzt, leichte: Platz'})),
  S(13,'Eine Verpackung hat vier Aufgaben.',CARDS('Aufgaben der Verpackung',[['🛡️','schützen','Stoß, Druck, Feuchte','b'],['📦','bündeln','lagern, stapeln','g'],['🏷️','informieren','Zeichen, Daten','y'],['♻️','verwertbar','Rücknahme','m']]))],
 skz:[[SKZ(k=>plB({kt:1,h:200,g:8},plC({kt:1,h:200,g:8})),'Skizze Palette von oben und von der Seite'),'Links die Aufteilung einer Lage, rechts die gestapelten Lagen. Die rote Linie ist die zulässige Höhe.']],
 sim:{t:'Europalette packen',fix:'Europalette 1200 mm · 800 mm, 144 mm hoch. Ladeeinheit höchstens 1800 mm hoch, Ladung höchstens 800 kg (Beispielgrenzen).',
  c:[{k:'kt',l:'Kartongrundfläche',u:'',opts:[0,1,2,3],v:0,lab:PKL},{k:'h',l:'Kartonhöhe',u:'mm',min:100,max:400,st:50,v:200},{k:'g',l:'Gewicht je Karton',u:'kg',min:2,max:20,st:1,v:8}],
  calc:plC,
  rows:(v,r)=>[['Kartons je Lage',String(r.nl)],['Lagen',String(r.lag)],['Kartons je Palette',String(r.n),r.n>=60?'g':''],['Ladung',nz(r.gw,0)+' kg'],['begrenzt durch',r.gr]],
  svg:(v,r)=>plB(v,r),
  auf:{z:'Mindestens 60 Kartons auf eine Palette.',t:'Der Kunde möchte mindestens 60 Kartons je Palette, damit er weniger Paletten bewegen muss. Höhe und Gewicht der Ladeeinheit dürfen die Grenzen nicht überschreiten. Finde passende Kartons.',h:'Tipp: Kleinere Grundfläche bringt mehr Kartons je Lage. Achte darauf, ob Höhe oder Gewicht begrenzt.',ok:(v,r)=>r.n>=60}}};

/* ---------- Transport & Tour ---------- */
const trSk=k=>{let s=TI('Eine Tour planen');const st=[[80,190],[150,90],[250,60],[350,100],[400,180],[290,200]];
 s+=P('M'+st.map(p=>p.join(' ')).join('L')+'Z',CC('b'),2.6,'')+st.map((p,i)=>i?`<circle cx="${p[0]}" cy="${p[1]}" r="12" fill="${CC('a')}"/>`+L(p[0],p[1]+5,i,'middle',13,'var(--card)',800):RC(p[0]-18,p[1]-13,36,26,MX('g',40),'var(--ink)',5,1.8)+L(p[0],p[1]+5,'Lager','middle',11,'var(--ink)',700)).join('');
 s+=L(240,146,'kurze Strecke, Zeitfenster,','middle',12.5,'var(--mute)',600)+L(240,164,'volle Auslastung','middle',12.5,'var(--mute)',600)+L(240,246,'Beladen wird in umgekehrter Reihenfolge: Stopp 5 zuerst.','middle',13,'var(--mute)',500);return s};
X['Transport & Tourenplanung']={
 v:['Ein Fahrer ist 4,5 Stunden ohne Pause gefahren. Der nächste Kunde ist nur noch 20 Minuten entfernt. Darf er weiterfahren?',['Ja, das kurze Stück geht noch','Nein, jetzt ist die Pause von 45 Minuten fällig','Ja, wenn er langsamer fährt','Nur mit Beifahrer'],1,'Nach spätestens 4,5 Stunden Lenkzeit ist die Pause einzulegen. Die Tour muss so geplant sein, dass das passt.'],
 ein:[S(14,'Eine gute Tour ist kurz, hält Zeitfenster ein und lastet das Fahrzeug aus.',trSk),
  S(13,'Jeder Verkehrsträger hat seine Stärke.',CARDS('Verkehrsträger',[['🚚','Lkw','flexibel, Tür zu Tür','b'],['🚆','Bahn','große Mengen, weit','g'],['🚢','Schiff','Massengut, Übersee','y'],['✈️','Flugzeug','schnell, teuer','r']])),
  S(13,'Die Lenkzeiten setzen der Planung Grenzen.',LIST('Lenkzeiten (Grundwerte)',[['Nach 4,5 h: 45 min Pause','1'],['Täglich höchstens 9 h, zweimal 10 h','2'],['Je Woche höchstens 56 h','3'],['In zwei Wochen höchstens 90 h','4']])),
  S(13,'Schäden müssen sofort festgehalten werden.',VS('Schaden bei der Ablieferung',{h:'sichtbar',c:'r',l:['sofort vermerken','Fahrer unterschreibt','Fotos machen']},{h:'verdeckt',c:'y',l:['kurze Frist','schriftlich anzeigen','Verpackung aufheben']}))],
 skz:[[SKZ(trSk,'Skizze Tour mit fünf Stopps'),'Die Stopps liegen so, dass sich die Strecke nicht kreuzt. Ware für den letzten Stopp steht vorn an der Stirnwand.']]};

/* ---------- Ladungssicherung ---------- */
const LM=[.2,.3,.4,.6],LML=['0,2 (Metall, nass)','0,3 (Holz auf Platte)','0,4 (trocken, sauber)','0,6 (rutschhemmende Matte)'];
const lsC=v=>{const mu=LM[v.mu],FG=v.m*9.81,Fb=.8*FG,FR=mu*FG,FZ=v.n*1.5*4000*Math.sin(v.al*Math.PI/180)*mu;return{mu,FG,Fb,FR,FZ,ok:FR+FZ>=Fb,nn:Math.max(0,Math.ceil((Fb-FR)/(1.5*4000*Math.sin(v.al*Math.PI/180)*mu)-1e-9))}};
const lsB=(v,r,an)=>{const bw=70+v.m/5000*70,bh=46+v.m/5000*30,dx=r.ok||an?0:26,bx=160+dx,by=150-bh;let s='';
 /* Ladefläche mit Stirnwand, Fahrtrichtung nach rechts */
 s+=RC(40,150,300,10,'var(--mute)','var(--ink)',2,1.4)+RC(334,96,8,54,'var(--mute)','var(--ink)',2,1.4)+`<circle cx="90" cy="174" r="13" fill="var(--ink)"/><circle cx="126" cy="174" r="13" fill="var(--ink)"/><circle cx="290" cy="174" r="13" fill="var(--ink)"/>`;
 if(LM[v.mu]>=.6)s+=RC(150,146,bw+50,4,'var(--ink)','none',1,0);
 if(an)s+='<path data-a="rd" d="M20 189H460" stroke="var(--mute)" stroke-width="2" stroke-dasharray="14 12"/><g data-a="ld">';
 s+=RC(bx,by,bw,bh,MX(r.ok?'b':'r',38),'var(--ink)',3,2)+L(bx+bw/2,by-8,nz(v.m,0)+' kg','middle',13,'var(--ink)',800);
 for(let i=0;i<v.n;i++){const x=bx+bw*(i+.5)/v.n;s+=P(`M${F(x)} 150V${by-2}`,CC('y'),3)}
 s+=(an?'<g data-a="ar">':'')+AW(bx+bw+4,by+bh/2,bx+bw+4+Math.min(44,16+r.Fb/900),by+bh/2,'var(--red)',3.4)+(an?'</g></g>':'');
 s+=L(40,36,'Fahrtrichtung →','start',12,'var(--mute)',600)+(r.ok?'':L(40,60,'Ladung rutscht!','start',16,'var(--red)',800));
 /* Zurrwinkel von hinten */
 const cx=396,cy=120,a=v.al*Math.PI/180;s+=L(cx,64,'von hinten','middle',12,'var(--mute)',600)+RC(cx-22,cy-30,44,30,MX('b',38),'var(--ink)',2,1.6)+P(`M${cx-50} ${cy}H${cx+50}`,'var(--ink)',2)+P(`M${cx+22} ${cy-30}L${F(cx+22+30/Math.tan(Math.max(a,.3)))} ${cy}`,CC('y'),3)+P(`M${cx-22} ${cy-30}H${cx+22}`,CC('y'),3)+P(`M${cx-22} ${cy-30}L${F(cx-22-30/Math.tan(Math.max(a,.3)))} ${cy}`,CC('y'),3)+L(cx,cy+18,'α = '+v.al+'°','middle',12.5,'var(--ink)',700);
 /* Kräftevergleich */
 const X0=40,W=400,mx=Math.max(r.Fb,r.FR+r.FZ)*1.08;s+=L(X0,206,'schiebt nach vorn','start',11.5,'var(--red)',700)+XSTK(X0+110,196,W-110,14,[[r.Fb,'r','']],mx)+L(X0,230,'hält','start',11.5,'var(--ok)',700)+XSTK(X0+110,220,W-110,14,[[r.FR,'g',''],[r.FZ,'y','']],mx);
 s+=L(240,256,'Reibung '+nz(r.FR/1000,1)+' kN + Gurte '+nz(r.FZ/1000,1)+' kN gegen '+nz(r.Fb/1000,1)+' kN','middle',12.5,r.ok?'var(--ok)':'var(--red)',700);return s};
X['Ladungssicherung']={
 v:['Eine Kiste mit 1000 kg steht ungesichert auf der sauberen Ladefläche (μ = 0,3). Der Fahrer bremst voll. Bleibt sie stehen?',['Ja, sie ist schwer genug','Nein, die Reibung hält nur einen Teil der Kraft','Ja, bei trockener Straße','Das hängt nur vom Fahrer ab'],1,'Nach vorn drängt das 0,8-Fache der Gewichtskraft, die Reibung hält nur das 0,3-Fache. Schwere Ladung rutscht genauso wie leichte.'],
 ein:[S(13,'Beim Bremsen, Anfahren und in Kurven wirken Massenkräfte auf die Ladung.',BARS('Anteil der Gewichtskraft',[['nach vorn',.8,'0,8','r'],['zur Seite',.5,'0,5','y'],['nach hinten',.5,'0,5','y']],{lx:130,h:46,y0:70,max:1.2})),
  S(14,'Reibung hält einen Teil. Den Rest muss die Sicherung aufbringen.',k=>lsB({m:2000,mu:1,n:2,al:60},lsC({m:2000,mu:1,n:2,al:60}))),
  S(13,'Es gibt zwei Wege, die Ladung zu halten.',VS('Sicherungsarten',{h:'Formschluss',c:'g',l:['an Stirnwand, lückenlos','Sperrbalken, Keile','hält direkt']},{h:'Kraftschluss',c:'y',l:['niederzurren','presst auf die Fläche','erhöht die Reibung']})),
  S(13,'Die Sicherungskraft folgt aus Gewicht und Reibung.',k=>TITLE('Sicherungskraft nach vorn')+OP(ph(k,.05,.4),FO(240,104,['F_S = (0,8 − μ) · F_G'],22))+OP(ph(k,.45,.85),FO(240,190,['F_S = (0,8 − 0,3) · 19 620 N = 9810 N'],18)))],
 skz:[[SKZ(k=>lsB({m:2000,mu:3,n:2,al:75},lsC({m:2000,mu:3,n:2,al:75})),'Skizze Ladung auf der Ladefläche'),'Gelb die Zurrgurte, rot die Kraft beim Bremsen. Unten der Vergleich: Reibung (grün) und Gurte (gelb) müssen zusammen mindestens so groß sein wie die rote Kraft.']],
 sim:{t:'Hält die Ladung bei der Vollbremsung?',fix:'Niederzurren mit Gurten, Vorspannkraft 400 daN je Gurt. Vereinfachte Rechnung nur für die Richtung nach vorn. Maßgeblich sind VDI 2700 und DIN EN 12195-1 (Stand prüfen).',
  c:[{k:'m',l:'Masse der Ladung',u:'kg',min:500,max:5000,st:250,v:2000},{k:'mu',l:'Gleitreibbeiwert',u:'',opts:[0,1,2,3],v:1,lab:LML},{k:'n',l:'Zurrgurte',u:'',min:0,max:8,st:1,v:2},{k:'al',l:'Zurrwinkel',u:'°',min:30,max:90,st:15,v:60}],
  calc:lsC,
  rows:(v,r)=>[['Kraft nach vorn',nz(r.Fb/1000,1)+' kN'],['Reibung hält',nz(r.FR/1000,1)+' kN'],['Gurte halten',nz(r.FZ/1000,1)+' kN'],['Ergebnis',r.ok?'gesichert':'rutscht',r.ok?'g':'r'],['nötige Gurte',String(r.nn)]],
  svg:(v,r)=>lsB(v,r),svgA:(v,r)=>lsB(v,r,1),
  auf:{z:'Mindestens 2000 kg mit höchstens 4 Gurten sichern.',t:'Eine Maschine mit mindestens 2000 kg soll mit höchstens 4 Gurten niedergezurrt werden. Finde heraus, was Du außer den Gurten verändern musst, damit die Ladung hält.',h:'Tipp: Sieh Dir an, wie sich der Reibbeiwert auf beide grünen und gelben Balken auswirkt.',ok:(v,r)=>v.m>=2000&&v.n<=4&&r.ok}}};

/* ---------- Kennzahlen ---------- */
const kzSk=k=>{let s=TI('Kennzahlentafel im Bereich');const t=[['Leistung','128 Pos./h','Ziel 120','g'],['Fehlerquote','0,42 %','Ziel 0,30 %','r'],['Termintreue','97,5 %','Ziel 98 %','y']];
 t.forEach((q,i)=>{const x=24+i*148;s+=RC(x,56,136,112,MX(q[3],14),CC(q[3]),10,1.8)+L(x+68,80,q[0],'middle',13,'var(--mute)',700)+L(x+68,120,q[1],'middle',21,'var(--ink)',800)+L(x+68,150,q[2],'middle',12.5,'var(--mute)',600)});
 s+=L(240,200,'Abweichung → Ursache → Maßnahme → wer bis wann','middle',13.5,'var(--ink)',700)+L(240,240,'Leistung und Qualität stehen immer nebeneinander.','middle',13,'var(--mute)',500);return s};
X['Prozessdaten & Logistikkennzahlen']={
 v:['Die Kommissionierleistung steigt in einem Monat um 15 %. Zugleich verdoppelt sich die Fehlerquote. Ist das ein Erfolg?',['Ja, die Leistung zählt','Nein, beide Zahlen müssen zusammen bewertet werden','Ja, Fehler sind unvermeidbar','Das lässt sich nicht sagen'],1,'Jeder Fehler verursacht Reklamation, Nachlieferung und Retoure. Das kann den Gewinn aus der Leistung auffressen.'],
 ein:[S(14,'Wenige Kennzahlen, sichtbar im Bereich und täglich besprochen.',kzSk),
  S(13,'Drei Gruppen von Kennzahlen.',CARDS('Was gemessen wird',[['⚡','Leistung','Positionen, Sendungen','b'],['🎯','Qualität','Fehler, Schäden','r'],['⏱️','Service','Termin, Durchlaufzeit','g']])),
  S(13,'Produktivität setzt Leistung und Einsatz ins Verhältnis.',k=>TITLE('Produktivität')+OP(ph(k,.05,.4),FO(240,104,[{n:'Leistungsmenge',d:'eingesetzte Stunden'}],20))+OP(ph(k,.45,.85),FO(240,190,[{n:'640 Sendungen',d:'64 h'},' = 10 ',{n:'Sendungen',d:'h'}],18))),
  S(13,'Eine Zahl braucht einen Vergleich.',LIST('Womit vergleichen?',[['Mit dem Zielwert','1'],['Mit dem Vormonat','2'],['Zwischen Schichten und Bereichen','3']]))],
 skz:[[SKZ(kzSk,'Skizze Kennzahlentafel'),'Grün heißt Ziel erreicht, Gelb knapp verfehlt, Rot deutlich verfehlt. Zu jeder roten Zahl gehört eine Maßnahme.']]};

/* ---------- Incoterms ---------- */
const icSk=k=>{let s=TI('Wo geht die Gefahr auf den Käufer über?');const st=['Werk','Frachtführer','Hafen','Schiff','Zielhafen','Käufer'],x=i=>40+i*80;
 s+=P(`M${x(0)} 84H${x(5)}`,'var(--ink)',2.4);st.forEach((t,i)=>s+=DOT(x(i),84,'var(--ink)',5)+L(x(i),68,t,'middle',11.5,'var(--ink)',700));
 [['EXW',0,'b'],['FCA',1,'b'],['FOB',3,'y'],['DAP',5,'g'],['DDP',5,'g']].forEach((q,i)=>{const y=112+i*26;s+=RC(x(0),y,Math.max(8,x(q[1])-x(0)),16,MX('r',40),'none',3,0)+RC(x(q[1]),y,x(5)-x(q[1])+(q[1]==5?0:0),16,MX('b',26),'none',3,0)+L(x(0)-6,y+12,q[0],'end',12,'var(--ink)',800)});
 s+=L(240,256,'rot: Gefahr beim Verkäufer · blau: Gefahr beim Käufer','middle',12.5,'var(--mute)',600);return s};
X['Incoterms & Zollabwicklung']={
 v:['Vereinbart ist „EXW Regensburg“. Beim Verladen durch den Abholer fällt eine Kiste vom Stapler des Abholers. Wer trägt den Schaden?',['Der Verkäufer','Der Käufer','Beide je zur Hälfte','Die Zollverwaltung'],1,'Bei „ab Werk“ geht die Gefahr über, sobald die Ware zur Abholung bereitgestellt ist. Das Verladen ist Sache des Käufers.'],
 ein:[S(13,'Eine Lieferklausel regelt drei Dinge und drei Dinge nicht.',VS('Incoterms',{h:'regeln',c:'g',l:['Kosten','Gefahrübergang','Pflichten bei Transport, Zoll']},{h:'regeln nicht',c:'r',l:['Eigentum','Preis','Zahlung']})),
  S(14,'Je weiter rechts die Klausel, desto länger trägt der Verkäufer die Gefahr.',icSk),
  S(13,'Zur Ausfuhr gehören feste Unterlagen.',LIST('Ausfuhr',[['Handelsrechnung und Packliste','1'],['Warennummer aus dem Zolltarif','2'],['Elektronische Ausfuhranmeldung','3'],['Genehmigung, falls nötig','4']])),
  S(13,'Bei der Einfuhr werden Zoll und Einfuhrumsatzsteuer berechnet.',k=>TITLE('Zoll')+OP(ph(k,.05,.4),FO(240,104,['Zoll = Zollwert · Zollsatz'],21))+OP(ph(k,.45,.85),FO(240,190,['12 600 € · 0,035 = 441 €'],20)))],
 skz:[[SKZ(icSk,'Skizze Gefahrübergang bei fünf Klauseln'),'Bei EXW trägt der Käufer die Gefahr vom Werk an, bei DAP und DDP erst am Bestimmungsort. FOB gilt nur für den Schiffstransport.']]};

/* ---------- Gefahrgut ---------- */
const ggSk=k=>{let s=TI('Kennzeichnung von Gefahrgut');const dm=(cx,cy,c,t1,t2)=>`<path d="M${cx} ${cy-36}L${cx+36} ${cy}L${cx} ${cy+36}L${cx-36} ${cy}Z" fill="${c}" stroke="var(--ink)" stroke-width="2"/>`+L(cx,cy+4,t1,'middle',15,'var(--ink)',800)+L(cx,cy+56,t2,'middle',11.5,'var(--mute)',600);
 s+=dm(70,100,XMX('r',60),'3','entzündbar flüssig')+dm(180,100,XMX('y',60),'5.1','brandfördernd')+dm(290,100,'var(--card)','8','ätzend');
 s+=RC(360,72,96,56,'#f28c28','var(--ink)',3,2.2)+P('M360 100H456','var(--ink)',2)+L(408,94,'33','middle',17,'#111',800)+L(408,122,'1203','middle',17,'#111',800)+L(408,156,'Warntafel','middle',11.5,'var(--mute)',600);
 s+=L(240,204,'oben: Gefahrnummer · unten: UN-Nummer des Stoffs','middle',12.5,'var(--ink)',600)+L(240,244,'Gefahrzettel am Versandstück, Warntafel am Fahrzeug','middle',13,'var(--mute)',500);return s};
X['Gefahrgut & Gefahrstofflager']={
 v:['Im Lager sollen Fässer mit entzündbarer Flüssigkeit neben Säcken mit brandförderndem Stoff stehen. Ist das zulässig?',['Ja, wenn beide beschriftet sind','Nein, solche Stoffe werden getrennt gelagert','Ja, wenn das Lager gelüftet ist','Nur über das Wochenende'],1,'Brandfördernde Stoffe verstärken einen Brand erheblich. Die Zusammenlagerungsregeln der TRGS 510 verlangen hier Trennung.'],
 ein:[S(14,'Gefahrgut erkennt man an Gefahrzettel und Warntafel.',ggSk),
  S(13,'Derselbe Stoff, zwei Rechtsgebiete.',VS('Lagern oder befördern',{h:'im Lager',c:'b',l:['Gefahrstoffrecht','TRGS 510, Lagerklassen','Auffangwanne, Lüftung']},{h:'auf der Straße',c:'y',l:['Gefahrgutrecht (ADR)','Klasse, UN-Nummer','Papiere, Ausrüstung']})),
  S(13,'Zur Beförderung gehören feste Dinge.',LIST('Was mitfährt',[['Beförderungspapier','1'],['Schriftliche Weisungen','2'],['Feuerlöscher, Warnausrüstung','3'],['Schulungsnachweis des Fahrers','4']])),
  S(13,'Für kleine Mengen gibt es Erleichterungen, aber keinen Freibrief.',k=>TITLE('1000-Punkte-Regel')+OP(ph(k,.05,.4),FO(240,104,['Punkte = Menge · Faktor'],22))+OP(ph(k,.45,.85),FO(240,190,['100 · 3 + 300 · 1 = 600 Punkte'],20)))],
 skz:[[SKZ(ggSk,'Skizze Gefahrzettel und Warntafel'),'Die Raute steht auf dem Versandstück, die orangefarbene Tafel am Fahrzeug. Beispiel 33/1203: leicht entzündbare Flüssigkeit, Benzin.']]};

/* ---------- Wertstrom ---------- */
const wsSk=k=>{let s=TI('Wertstrom eines Auftrags');const st=['Eingang','Kommissio-','Packen','Verladen'],bz=[2,12,4,2],lz=[45,120,90,180];
 st.forEach((t,i)=>{const x=14+i*112;s+=RC(x,60,76,48,XMX('b',22),CC('b'),6,1.6)+L(x+38,82,t,'middle',12,'var(--ink)',700)+(i==1?L(x+38,96,'nieren','middle',12,'var(--ink)',700):'')+L(x+38,124,bz[i]+' min','middle',12,CC('g'),800);
  s+=`<path d="M${x+84} 108L${x+96} 84L${x+108} 108Z" fill="${XMX('y',50)}" stroke="var(--ink)" stroke-width="1.4"/>`+L(x+96,124,lz[i]+' min','middle',11.5,CC('r'),700)});
 s+=XSTK(24,150,432,22,[[20,'g',''],[435,'r','Liegezeit 435 min']],455)+L(24,192,'Bearbeitung 20 min','start',12.5,CC('g'),700)+L(456,192,'Durchlaufzeit 455 min','end',12.5,'var(--ink)',700)+L(240,236,'Flussgrad: nur rund 4 % der Zeit wird am Auftrag gearbeitet.','middle',13,'var(--mute)',500);return s};
X['Prozesse verbessern: Wertstrom & Lean']={
 v:['Ein Auftrag ist 7,5 Stunden im Lager unterwegs. Wie lange wird in dieser Zeit tatsächlich an ihm gearbeitet?',['Fast die ganze Zeit','Etwa die Hälfte','Oft nur wenige Minuten','Gar nicht'],2,'In den meisten Lagern liegt ein Auftrag die längste Zeit: vor dem Start, zwischen den Schritten, vor der Verladung.'],
 ein:[S(14,'Der Wertstrom zeigt Bearbeitung und Liegezeit nebeneinander.',wsSk),
  S(13,'Verschwendung hat viele Gesichter.',CARDS('Verschwendung im Lager',[['🚶','Wege','suchen, laufen','b'],['⏳','Warten','auf Stapler, Papiere','y'],['📦','Bestände','zu viel, zu früh','m'],['❌','Fehler','Nacharbeit','r']])),
  S(13,'Ordnung ist die Grundlage jeder Verbesserung.',LIST('5S',[['Aussortieren','1'],['Ordnen: fester Platz für alles','2'],['Sauber halten','3'],['Standard setzen und einhalten','4']])),
  S(13,'Verbessert wird in kleinen Schritten im Kreis.',CYC('Verbesserungskreis',[['planen'],['ausprobieren'],['prüfen'],['Standard']]))],
 skz:[[SKZ(wsSk,'Skizze Wertstrom'),'Blau die Arbeitsschritte mit ihrer Bearbeitungszeit, gelb die Wartebestände dazwischen mit ihrer Liegezeit.']]};

Object.assign(ERK,{
'Logistikstrategien & Lieferkette':['Logistik verbindet Lieferanten, Betrieb und Kunden. Die Strategie entscheidet, ob nach Plan oder nach Verbrauch gesteuert wird und wie viel Bestand das kostet.','Du kennst die kritischen Artikel und Lieferanten Deines Bereichs, sorgst für verlässliche Bedarfsmeldungen und hast für Störungen einen Plan.',['Jede Stufe schlägt eigene Sicherheiten auf','Just-in-time ohne Notfallplan','Fremdvergabe ohne klare Schnittstellen und Kennzahlen','Lieferservice, Bestand und Kosten einzeln optimieren']],
'Beschaffung & Bestandsmanagement':['Der Bestand läuft als Sägezahn. Meldebestand und Sicherheitsbestand sorgen dafür, dass die Ware bis zur nächsten Lieferung reicht.','Du prüfst Meldebestände, wenn sich Verbrauch oder Lieferzeit ändern, steuerst teure, regelmäßige Teile genau und achtest auf richtige Buchungen.',['Meldebestand bei längerer Lieferzeit nicht anpassen','Sicherheitsbestand als normalen Vorrat verbrauchen','Alle Artikel mit demselben Verfahren steuern','Bestandsdifferenzen hinnehmen statt Ursachen suchen']],
'Distribution & Standortwahl':['Zentrale Strukturen sparen Bestand, dezentrale sparen Wege. Umschlag ohne Lagerung beschleunigt den Fluss. Der Schwerpunkt ist ein rechnerischer Anhaltswert.','Du kennst die Laufzeiten und Kosten Deiner Versandwege, bündelst Sendungen und stimmst Zeitfenster mit Kunden und Dienstleistern ab.',['Schwerpunkt als endgültigen Standort nehmen','Kleine Sendungen direkt fahren','Cross-Docking ohne abgestimmte Ankunftszeiten','Rückführung von Ladehilfsmitteln vergessen']],
'Informationsfluss: Lagerverwaltung, Barcode, RFID':['Jede Ladeeinheit hat einen Datensatz. Gebucht wird im Moment der Handlung, sonst stimmen Platz und Bestand nicht.','Du achtest auf Scandisziplin, saubere Stammdaten und geschulte Mitarbeiter und hast ein Verfahren für den Systemausfall.',['Bewegungen nachträglich vom Zettel buchen','Ware ohne Umbuchung umstellen','Stammdaten ungeprüft übernehmen','Neues System ohne Test und Schulung starten']],
'Wareneingang & Lagerstrategien':['Im Wareneingang werden Menge, Zustand und Papiere geprüft und Schäden sofort vermerkt. Plätze werden nach Zugriffshäufigkeit vergeben, entnommen wird nach fester Regel.','Du sorgst für eine vollständige Eingangsprüfung, auch unter Zeitdruck, und überprüfst die Platzvergabe regelmäßig mit den Zugriffsdaten.',['Beschädigte Ware ohne Vermerk annehmen','Mängel zu spät rügen','Schnelldreher hinten und oben lagern','Ablaufdaten bei der Entnahme nicht beachten']],
'Kommissionierung':['Die Zeit je Position besteht aus Basis-, Weg-, Greif- und Totzeit. Wege und Totzeit sind die größten Hebel, das Greifen der kleinste.','Du misst die Anteile in Deinem Bereich, ordnest die Plätze nach Zugriffshäufigkeit, fasst Aufträge zusammen und hältst Leistung und Fehlerquote gemeinsam im Blick.',['Nur auf Positionen je Stunde schauen','Schnelldreher weit weg lagern','Mitarbeiter zum schnelleren Greifen antreiben','Fehlerursachen nicht auswerten']],
'Flurförderzeuge & Fördertechnik':['Der Stapler steht im Gleichgewicht um die Vorderachse. Lastschwerpunkt und Hubhöhe bestimmen die zulässige Last. Fahren darf nur, wer ausgebildet und schriftlich beauftragt ist.','Du erteilst Fahraufträge schriftlich, unterweist jährlich, achtest auf die tägliche Prüfung und trennst Fahr- und Gehwege.',['Nur das Gewicht prüfen, nicht den Lastschwerpunkt','Mit angehobener Last fahren','Fahrer ohne schriftlichen Auftrag einsetzen','Mängel am Gerät nicht melden']],
'Ladeeinheiten & Verpackung':['Modulmaße nutzen die Palette ohne Lücke. Höhe, Gewicht und Stabilität begrenzen die Ladeeinheit, Stellplätze und Nutzlast den Lkw.','Du legst Packmuster fest, sorgst für sichere Ladeeinheiten und führst Ladehilfsmittel sauber im Konto.',['Kartons mit Überstand stapeln','Schweres auf Leichtes','Nur Stellplätze, nicht das Gewicht rechnen','Palettentausch nicht buchen']],
'Transport & Tourenplanung':['Der Verkehrsträger richtet sich nach Menge, Strecke und Zeit. Touren halten Zeitfenster und Lenkzeiten ein. Der Frachtführer haftet begrenzt, Schäden werden sofort vermerkt.','Du planst Touren mit Reserve für Pausen, verlädst in umgekehrter Entladefolge und sorgst dafür, dass Schäden bei der Annahme dokumentiert werden.',['Tour ohne Pausen planen','Beladen in Entladereihenfolge statt umgekehrt','Schäden erst Tage später melden','Auslastung nur nach Stellplätzen beurteilen']],
'Ladungssicherung':['Beim Bremsen drängt die Ladung mit dem 0,8-Fachen ihrer Gewichtskraft nach vorn. Reibung hält einen Teil, den Rest sichern Formschluss oder Zurrmittel. Höhere Reibung wirkt doppelt.','Du stellst Zurrmittel und rutschhemmende Matten bereit, unterweist die Verlader und kontrollierst Fahrzeuge vor der Abfahrt stichprobenartig.',['Schwere Ladung für rutschfest halten','Flache Zurrwinkel beim Niederzurren','Beschädigte Gurte weiterverwenden','Lücken zur Stirnwand offen lassen']],
'Prozessdaten & Logistikkennzahlen':['Kennzahlen verdichten Daten zu Aussagen. Sie brauchen eine klare Definition, einen Zielwert und einen Vergleich. Leistung und Qualität gehören zusammen.','Du wählst wenige Kennzahlen für Deinen Bereich, zeigst sie an der Tafel und besprichst Abweichungen täglich mit Ursache, Maßnahme und Verantwortlichem.',['Zu viele Kennzahlen auf einmal','Leistung ohne Qualität bewerten','Zahlen sammeln, aber nicht besprechen','Kennzahlen ohne Zielwert']],
'Incoterms & Zollabwicklung':['Lieferklauseln regeln Kosten, Gefahrübergang und Pflichten, aber nicht Eigentum und Zahlung. Zur Ausfuhr und Einfuhr gehören vollständige, zur Ware passende Papiere.','Du weißt, welche Klausel für eine Sendung gilt und was Dein Versand dafür leisten muss, und lässt Papiere vor der Verladung mit der Ware abgleichen.',['Klausel ohne Ort und Fassung vereinbaren','Kostenübergang mit Gefahrübergang gleichsetzen','Schiffsklauseln für Lkw-Transport verwenden','Abweichende Mengen oder Gewichte in den Papieren']],
'Gefahrgut & Gefahrstofflager':['Im Lager gilt das Gefahrstoffrecht mit Lagerklassen und Zusammenlagerungsregeln, auf der Straße das Gefahrgutrecht mit Klassen, UN-Nummern, Kennzeichnung und Papieren.','Du lässt nur unterwiesene Mitarbeiter mit Gefahrgut umgehen, prüfst Kennzeichnung und Papiere vor der Verladung und arbeitest eng mit dem Gefahrgutbeauftragten zusammen.',['Unverträgliche Stoffe zusammen lagern','Erleichterungen als Freibrief verstehen','Beschädigte oder falsch gekennzeichnete Versandstücke verladen','Mit veralteten Vorschriften arbeiten']],
'Prozesse verbessern: Wertstrom & Lean':['Wertschöpfend ist, wofür der Kunde zahlt. Der Wertstrom macht Liegezeiten sichtbar, 5S schafft Ordnung, verbessert wird in kleinen Schritten im Kreis.','Du nimmst mit Deiner Mannschaft einen Ablauf auf, misst vorher und nachher und machst bewährte Lösungen zum Standard.',['Nur die Bearbeitung beschleunigen, Liegezeiten übersehen','Verbesserungen nicht messen','Lösungen nicht zum Standard machen','Mitarbeiter nicht einbeziehen']]});
}
