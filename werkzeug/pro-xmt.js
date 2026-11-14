/* ===== Gemeinsame Zeichenhelfer für die Pakete Mechatronik, Logistik und A2 ===== */
const XTI=t=>L(240,26,t,'middle',16,'var(--ink)',700),XMX=(c,p)=>`color-mix(in srgb,${CC(c)} ${p}%,var(--card))`,
 XP=(d,c='var(--ink)',w=2.2,da='',fl='none')=>`<path d="${d}" stroke="${c}" stroke-width="${w}" fill="${fl}" stroke-linejoin="round" stroke-linecap="round"${da?` stroke-dasharray="${da}"`:''}/>`,
 XFO=(x,y,parts,fs=19)=>FORM(x,y,parts,'middle',undefined,fs),
 /* gestapelter Querbalken: parts = [[Wert, Farbkürzel, Text]], mx = Skalenende */
 XSTK=(x,y,w,h,parts,mx)=>{let s='',cx=x;parts.forEach(([v,c,t])=>{const ww=Math.max(0,w*v/mx);if(ww<=0)return;s+=RC(cx,y,ww,h,XMX(c,50),'var(--card)',0,1.5);if(t&&ww>TW(t,11.5)+8)s+=L(cx+ww/2,y+h/2+4,t,'middle',11.5,'var(--ink)',700);cx+=ww});return s+RC(x,y,w,h,'none','var(--ink)',3,1.4)},
 /* Kreis-Symbol mit Text */
 XCI=(x,y,r,t,c='b',fs=12)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${XMX(c,22)}" stroke="${CC(c)}" stroke-width="1.8"/>`+L(x,y+fs*.35,t,'middle',fs,'var(--ink)',700);

/* ===== Elektrotechnik und Mechatronik: zwei zusätzliche Regler in gemeinsamen Themen ===== */
if(FR==='el'||FR==='mt'){const TI=XTI,MX=XMX,P=XP;
/* ---------- Analogsignal 4 bis 20 mA ---------- */
const anBild=(I,MB)=>{const c=CHT({X0:60,X1:300,Y0:222,Y1:50,xm:22,ym:25,xt:[0,4,8,12,16,20],yt:[5,10,15,20,25],xl:'Strom in mA',yl:'Druck in bar'});let s=c.s;
 s+=RC(c.px(0),50,c.px(3.6)-c.px(0),172,MX('r',16),'none',0,0)+RC(c.px(21),50,c.px(22)-c.px(21),172,MX('r',16),'none',0,0);
 s+=LN(c,4,0,20,MB,CC('a'),3.2)+LN(c,4,0,4,25,'var(--mute)',1.2,'4 4')+LN(c,20,0,20,25,'var(--mute)',1.2,'4 4');
 const st=I<3.6?0:I>21?2:1,p=Math.max(0,Math.min(MB,(I-4)/16*MB));
 if(st==1)s+=LN(c,I,0,I,p,'var(--ok)',1.6,'5 4')+LN(c,0,p,I,p,'var(--ok)',1.6,'5 4')+DOT(c.px(I),c.py(p),'var(--ok)',7);else s+=DOT(c.px(I),c.py(0),'var(--red)',7);
 s+=L(c.px(1.8),66,'Fehler','middle',11,'var(--red)',700);
 /* rechts: Sensor mit Anzeige */
 s+=RC(332,52,128,74,'var(--card)','var(--ink)',8,2)+L(396,74,'Stromschleife','middle',12,'var(--mute)',600)+L(396,106,nz(I,1)+' mA','middle',22,'var(--ink)',800);
 s+=RC(332,140,128,84,MX(st==1?'g':'r',16),CC(st==1?'g':'r'),8,2)+L(396,162,st==1?'Druck':'Störung','middle',12,'var(--mute)',600)+(st==1?L(396,196,nz(p,2)+' bar','middle',22,'var(--ink)',800):L(396,190,st==0?'Drahtbruch':'Kurzschluss','middle',17,'var(--red)',800)+L(396,210,st==0?'unter 3,6 mA':'über 21 mA','middle',12,'var(--red)',600));
 s+=L(396,246,'Messbereich 0 bis '+MB+' bar','middle',12,'var(--mute)',600);return s};
X['Sensoren & Aktoren'].sim={t:'Druck aus dem Stromsignal lesen',fix:'Drucksensor mit Stromausgang: 4 mA am Anfang, 20 mA am Ende des Messbereichs. Unter 3,6 mA meldet die Steuerung Drahtbruch, über 21 mA Kurzschluss (Beispielgrenzen).',
 c:[{k:'I',l:'Strom in der Schleife',u:'mA',min:0,max:22,st:.4,v:4},{k:'MB',l:'Messbereichsende',u:'bar',opts:[6,10,16,25],v:1}],
 calc:v=>{const st=v.I<3.6?0:v.I>21?2:1;return{st,p:Math.max(0,Math.min(v.MB,(v.I-4)/16*v.MB))}},
 rows:(v,r)=>[['Signal',r.st==1?'gültig':r.st==0?'Drahtbruch':'Kurzschluss',r.st==1?'g':'r'],['Anteil am Messbereich',r.st==1?nz(Math.max(0,Math.min(1,(v.I-4)/16))*100,1)+' %':'–'],['Druck',r.st==1?nz(r.p,2)+' bar':'–']],
 svg:(v,r)=>anBild(v.I,v.MB),
 auf:{z:'Messbereich 10 bar: Strom für 5,5 bis 6,5 bar finden.',t:'Der Sensor hat den Messbereich 0 bis 10 bar. Im Kessel sollen etwa 6 bar herrschen. Stelle den Strom ein, den der Sensor dann liefert (Druck zwischen 5,5 und 6,5 bar).',h:'Tipp: Von den 16 mA Spanne entfallen bei 6 bar genau 60 %. Dazu kommen die 4 mA vom Nullpunkt.',ok:(v,r)=>v.MB===10&&r.st==1&&r.p>=5.5&&r.p<=6.5}};
/* ---------- Erforderlicher Performance Level: Risikograph ---------- */
const PLR=['a','b','b','c','c','d','d','e'],PLK=['b','c','d','d','e'],PLN='abcde';
const plBild=(S,Fq,Pm,K)=>{const idx=S*4+Fq*2+Pm,req=PLR[idx],got=PLK[K],ok=PLN.indexOf(got)>=PLN.indexOf(req);let s='';
 ['Schwere','Häufigkeit','Vermeiden','nötig'].forEach((t,i)=>s+=L([92,172,252,322][i],20,t,'middle',12,'var(--mute)',700));
 const st=[30,140],sy=[88,192],fy=[58,118,162,222],py=[43,73,103,133,147,177,207,237],ply={a:43,b:88,c:140,d:192,e:237};
 const seg=(x1,y1,x2,y2,on)=>P(`M${x1} ${y1}L${x2} ${y2}`,on?CC('a'):'var(--line)',on?3.4:1.6);
 [0,1].forEach(i=>{s+=seg(st[0],st[1],110,sy[i],i==S);[0,1].forEach(j=>{const f=i*2+j;s+=seg(110,sy[i],190,fy[f],i==S&&j==Fq);[0,1].forEach(k=>{const p=f*2+k,on=p==idx;s+=seg(190,fy[f],270,py[p],on)+seg(270,py[p],308,ply[PLR[p]],on)})})});
 s+=DOT(st[0],st[1],'var(--ink)',5)+L(72,sy[S]+(S?22:-12),S?'schwer':'leicht','middle',12,CC('a'),700)+L(150,fy[S*2+Fq]+(Fq?20:-10),Fq?'häufig':'selten','middle',12,CC('a'),700)+L(232,py[idx]+(Pm?18:-8),Pm?'kaum':'möglich','middle',12,CC('a'),700);
 PLN.split('').forEach(c=>{const on=c==req;s+=`<circle cx="322" cy="${ply[c]}" r="13" fill="${on?CC('a'):'var(--card)'}" stroke="${on?CC('a'):'var(--line)'}" stroke-width="1.8"/>`+L(322,ply[c]+5,c,'middle',14,on?'var(--card)':'var(--mute)',800)});
 s+=RC(352,44,116,66,'var(--card)','var(--ink)',8,1.6)+L(410,64,'erforderlich','middle',12,'var(--mute)',600)+L(410,96,'PL '+req,'middle',24,'var(--ink)',800);
 s+=RC(352,122,116,66,'var(--card)','var(--ink)',8,1.6)+L(410,142,'Aufbau erreicht','middle',12,'var(--mute)',600)+L(410,174,'PL '+got,'middle',24,'var(--ink)',800);
 s+=RC(352,200,116,44,MX(ok?'g':'r',18),CC(ok?'g':'r'),8,1.8)+L(410,227,ok?(got==req?'passt genau':'reicht'):'reicht nicht','middle',14,ok?'var(--ok)':'var(--red)',800);return s};
X['Funktionale Sicherheit von Steuerungen'].sim={t:'Welcher Performance Level ist nötig?',fix:'Risikograph nach DIN EN ISO 13849-1. Die Zuordnung „Aufbau erreicht“ ist für die Übung vereinfacht und setzt hochwertige Bauteile voraus. Der Nachweis erfolgt in der Praxis rechnerisch. Bitte den aktuellen Stand der Norm prüfen.',
 c:[{k:'S',l:'Schwere der Verletzung',u:'',opts:[0,1],v:0,lab:['leicht, heilbar','schwer, bleibend']},{k:'F',l:'Aufenthalt im Gefahrenbereich',u:'',opts:[0,1],v:0,lab:['selten, kurz','häufig, lang']},{k:'P',l:'Gefahr vermeiden',u:'',opts:[0,1],v:0,lab:['möglich','kaum möglich']},
  {k:'K',l:'Aufbau der Sicherheitsfunktion',u:'',opts:[0,1,2,3,4],v:0,lab:['einkanalig, einfach','einkanalig, bewährt','einkanalig mit Test','zweikanalig','zweikanalig, überwacht']}],
 calc:v=>{const req=PLR[v.S*4+v.F*2+v.P],got=PLK[v.K];return{req,got,d:PLN.indexOf(got)-PLN.indexOf(req)}},
 rows:(v,r)=>[['erforderlich','PL '+r.req],['Aufbau erreicht','PL '+r.got,r.d>=0?'g':'r'],['Bewertung',r.d<0?'reicht nicht':r.d==0?'passt genau':'mehr als nötig',r.d<0?'r':'g']],
 svg:(v,r)=>plBild(v.S,v.F,v.P,v.K),
 auf:{z:'Schwere Verletzung möglich: Aufbau, der genau passt.',t:'An einer Roboterzelle ist eine schwere Verletzung möglich. Schätze Häufigkeit und Vermeidbarkeit ein und wähle einen Aufbau, der den erforderlichen Performance Level genau erreicht, also weder zu wenig noch mehr als nötig.',h:'Tipp: Folge der farbigen Linie bis zum Buchstaben. Dann verstelle den Aufbau, bis „passt genau“ erscheint.',ok:(v,r)=>v.S===1&&r.d===0}};
}

/* ===== Mechatronik: Vermuten, Kurz erklärt, Skizze, Regler mit Auftrag ===== */
if(FR==='mt'){const TI=XTI,MX=XMX,P=XP,FO=XFO;
/* ---------- Mechatronisches System ---------- */
const msSk=k=>{let s=TI('Aufbau eines mechatronischen Systems');
 s+=BOX(160,50,160,46,'Steuerung','a',14,'verarbeitet Signale')+BOX(30,118,130,46,'Sensoren','b',14,'messen')+BOX(320,118,130,46,'Aktoren','y',14,'bewegen')+BOX(140,190,200,48,'Grundsystem','g',14,'Mechanik, Prozess');
 s+=AW(95,116,158,76,'var(--ink)',2.4)+AW(322,76,385,116,'var(--ink)',2.4)+AW(385,166,342,206,'var(--ink)',2.4)+AW(138,206,95,166,'var(--ink)',2.4);
 s+=L(96,92,'Signale','middle',12,'var(--mute)',600)+L(386,92,'Befehle','middle',12,'var(--mute)',600)+L(456,184,'Kraft,','end',12,'var(--mute)',600)+L(456,200,'Bewegung','end',12,'var(--mute)',600)+L(24,192,'Messgrößen','start',12,'var(--mute)',600)+L(240,260,'Der Kreis schließt sich über die Mechanik.','middle',12.5,'var(--mute)',500);return s};
X['Mechatronische Systeme & Schnittstellen']={
 v:['Drei Stationen einer Linie laufen einzeln getestet einwandfrei. Zusammengeschaltet steht die Linie ständig. Wo suchst Du zuerst?',['In der Mechanik der ersten Station','An den Schnittstellen zwischen den Stationen','Beim Lieferanten der Schrauben','In der Hallenbeleuchtung'],1,'Einzeln getestet heißt: Die Teilsysteme funktionieren. Die Fehler stecken in Übergabe, Signalaustausch und Takt.'],
 ein:[S(14,'Ein mechatronisches System hat vier Teile, die einen Kreis bilden.',msSk),
  S(13,'An jeder Verbindung gibt es eine Schnittstelle, die genau beschrieben sein muss.',CARDS('Vier Arten von Schnittstellen',[['🔩','mechanisch','Flansch, Passung','b'],['🔌','elektrisch','Spannung, Stecker','y'],['💨','fluidisch','Druck, Anschluss','g'],['💬','Daten','Bus, Protokoll','a']])),
  S(13,'Ohne Puffer kann jede Station die Kette stoppen.',k=>TITLE('Verfügbarkeit der Kette')+OP(ph(k,.05,.4),FO(240,104,['A_ges = A_1 · A_2 · A_3'],22))+OP(ph(k,.45,.85),FO(240,190,['0,95 · 0,95 · 0,95 · 0,95 = 0,81'],20))),
  S(13,'In Betrieb genommen wird in Stufen, nicht alles auf einmal.',FLOW('Integration in Stufen',[['🧩','Teilsystem','einzeln'],['🔗','Schnittstelle','prüfen'],['🏭','Gesamt','anlage'],['📋','Abnahme','Protokoll']]))],
 skz:[[SKZ(msSk,'Skizze mechatronisches System'),'Sensoren melden den Zustand, die Steuerung entscheidet, Aktoren greifen ein. Die Mechanik verbindet Wirkung und Messung.']]};

/* ---------- Positionierachse: Fahrprofil ---------- */
const posCalc=v=>{const s=v.s/1000,sa=v.vm*v.vm/(2*v.a);let vp=v.vm,t,tr;if(2*sa>=s){vp=Math.sqrt(s*v.a);t=2*vp/v.a;tr=1}else{t=2*v.vm/v.a+(s-2*sa)/v.vm;tr=0}return{t,vp,tr,ta:vp/v.a}};
const posX=(v,r,t)=>{const a=v.a,vp=r.vp,ta=r.ta,s=v.s/1000;if(t<=ta)return .5*a*t*t;if(t<=r.t-ta)return .5*a*ta*ta+vp*(t-ta);const q=Math.max(0,r.t-t);return s-.5*a*q*q};
const posBild=(v,r,still)=>{let s='';const xa=60,xw=330,sx=x=>xa+x/.6*xw;
 /* oben: Achse */
 s+=RC(20,44,34,34,'#9ca3af','var(--ink)',4,1.6)+L(37,36,'Motor','middle',11,'var(--mute)',600)+RC(54,57,xw+56,8,MX('m',40),'var(--ink)',2,1.2)+RC(xa-6,84,xw+62,6,'var(--mute)','none',2,0);
 for(let i=0;i<=6;i++)s+=P(`M${F(sx(i*.1)+25)} 90v6`,'var(--mute)',1.2)+L(sx(i*.1)+25,108,i*100,'middle',10.5,'var(--mute)',500);
 s+=L(sx(.6)+62,108,'mm','start',10.5,'var(--mute)',500);
 const N=24,vals=[];for(let i=0;i<=N;i++)vals.push(F(sx(posX(v,r,r.t*i/N))));for(let i=0;i<8;i++)vals.push(vals[N]);
 const D=Math.max(1.6,r.t*3)*(N+8)/N;
 s+=P(`M${F(sx(v.s/1000)+25)} 40V84`,'var(--ok)',1.8,'4 3')+L(sx(v.s/1000)+25,34,'Ziel','middle',11,'var(--ok)',700);
 s+=`<rect x="${still?vals[N]:vals[0]}" y="46" width="50" height="30" rx="4" fill="${MX('a',55)}" stroke="var(--ink)" stroke-width="1.8">`+(still?'':`<animate attributeName="x" values="${vals.join(';')}" dur="${F(D)}s" repeatCount="indefinite"/>`)+`</rect>`;
 /* unten: v-t-Diagramm */
 const tm=[.5,1,2,4].find(x=>x>=r.t)||4,c=CHT({X0:70,X1:440,Y0:220,Y1:138,xm:tm,ym:2,xt:[0,tm/2,tm],xf:t=>nz(t,2),yt:[1,2],xl:'Zeit in s',yl:'v in m/s'});s+=c.s;
 const pts=[[0,0],[r.ta,r.vp],[r.t-r.ta,r.vp],[r.t,0]].map(([a,b])=>F(c.px(a))+','+F(c.py(b))).join(' ');
 s+=`<polygon points="${pts}" fill="${MX('a',18)}" stroke="${CC('a')}" stroke-width="3" stroke-linejoin="round"/>`+L(c.px(r.t/2),c.py(r.vp)-7,r.tr?'Dreieck: '+nz(r.vp,2)+' m/s':'Trapez','middle',12,CC('a'),700);
 s+=LN(c,r.t,0,r.t,2,'var(--mute)',1.2,'4 4')+L(Math.min(c.px(r.t)+5,400),150,nz(r.t,2)+' s','start',13,'var(--ink)',800);return s};
const posSk=k=>posBild({s:300,vm:1,a:5},posCalc({s:300,vm:1,a:5}),1);
X['Positionierantriebe & Servotechnik']={
 v:['Eine Achse soll 40 mm weit fahren. Du verdoppelst die eingestellte Höchstgeschwindigkeit. Die Fahrzeit ändert sich nicht. Warum?',['Der Motor ist zu schwach','Der Weg ist so kurz, dass die Achse die Höchstgeschwindigkeit gar nicht erreicht','Der Geber ist falsch eingestellt','Die Spindel rutscht'],1,'Bei kurzen Wegen besteht die Fahrt nur aus Beschleunigen und Bremsen. Dann hilft nur mehr Beschleunigung.'],
 ein:[S(13,'Eine Positionierachse hat vier Bausteine.',CARDS('Aufbau der Achse',[['⚙️','Servomotor','mit Geber','b'],['🎛️','Servoregler','Strom, Drehzahl, Lage','a'],['🔩','Spindel','Steigung','y'],['📏','Führung','Schlitten','g']])),
  S(14,'Das Fahrprofil zeigt die Geschwindigkeit über der Zeit: beschleunigen, fahren, bremsen.',posSk),
  S(13,'Die Spindel übersetzt Drehung in Weg.',k=>TITLE('Geschwindigkeit')+OP(ph(k,.05,.4),FO(240,104,['v = n · p'],24))+OP(ph(k,.45,.85),FO(240,190,['v = 3000 ',{n:'1',d:'min'},' · 10 mm = 30 ',{n:'m',d:'min'}],19))),
  S(13,'Ist der Weg kurz, wird aus dem Trapez ein Dreieck.',VS('Zwei Profile',{h:'Trapez',c:'b',l:['langer Weg','Höchstgeschwindigkeit erreicht','schneller: v erhöhen']},{h:'Dreieck',c:'y',l:['kurzer Weg','nur beschleunigen, bremsen','schneller: a erhöhen']}))],
 skz:[[SKZ(posSk,'Skizze Positionierachse mit Fahrprofil'),'Oben die Achse mit Motor, Spindel und Schlitten, unten das Fahrprofil. Die Fläche unter der Kurve ist der Weg.']],
 sim:{t:'Achse schnell und schonend positionieren',fix:'Linearachse mit Kugelgewindetrieb, Beschleunigen und Bremsen gleich stark. Der Schlitten im Bild fährt verlangsamt.',
  c:[{k:'s',l:'Weg',u:'mm',min:20,max:600,st:20,v:300},{k:'vm',l:'Höchstgeschwindigkeit',u:'m/s',min:.2,max:2,st:.1,v:1},{k:'a',l:'Beschleunigung',u:'m/s²',min:2,max:20,st:1,v:5}],
  calc:posCalc,
  rows:(v,r)=>[['Fahrzeit',nz(r.t,2)+' s',r.t<=.4?'g':''],['erreichte Geschwindigkeit',nz(r.vp,2)+' m/s'],['Profil',r.tr?'Dreieck':'Trapez'],['Beschleunigungszeit',nz(r.ta,2)+' s']],
  svg:(v,r)=>posBild(v,r),
  auf:{z:'300 mm in höchstens 0,40 s, Beschleunigung höchstens 10 m/s².',t:'Der Takt verlangt, dass die Achse 300 mm in höchstens 0,40 s fährt. Die Mechanik verträgt auf Dauer höchstens 10 m/s². Finde eine Einstellung.',h:'Tipp: Stell zuerst den Weg ein. Probiere dann, was mehr bringt: Geschwindigkeit oder Beschleunigung.',ok:(v,r)=>v.s===300&&r.t<=.4005&&v.a<=10}}};

/* ---------- Maschinensicherheit ---------- */
const rbSk=k=>{let s=TI('Drei Stufen zur sicheren Maschine');
 s+=BOX(30,56,150,56,'1 Konstruktion','g',14,'Gefahr vermeiden')+BOX(165,120,150,56,'2 Schutztechnik','y',14,'Zaun, Lichtgitter')+BOX(300,184,150,56,'3 Information','r',14,'Restrisiko nennen');
 s+=AW(182,96,236,118,'var(--ink)',2.4)+AW(317,160,371,182,'var(--ink)',2.4)+L(36,150,'Erst wenn eine Stufe','start',12.5,'var(--mute)',500)+L(36,168,'ausgeschöpft ist,','start',12.5,'var(--mute)',500)+L(36,186,'folgt die nächste.','start',12.5,'var(--mute)',500);
 s+=L(456,96,'wirkt am','end',12.5,'var(--mute)',500)+L(456,114,'stärksten','end',12.5,'var(--ok)',700);return s};
X['Maschinensicherheit: Risikobeurteilung & CE']={
 v:['Zwei Maschinen mit CE-Zeichen werden im Betrieb mit einem Förderband und gemeinsamer Steuerung zu einer Linie verbunden. Ist damit alles erledigt?',['Ja, CE plus CE ergibt CE','Nein, die Gesamtheit muss neu beurteilt werden','Ja, wenn ein Warnschild hängt','Nein, die Maschinen müssen zurück zum Hersteller'],1,'An den Übergaben entstehen neue Gefährdungen. Wer die Maschinen zur Gesamtheit verbindet, kann dafür als Hersteller verantwortlich sein.'],
 ein:[S(13,'Die Risikobeurteilung läuft im Kreis, bis das Restrisiko vertretbar ist.',CYC('Risikobeurteilung',[['Grenzen festlegen'],['Gefährdungen finden'],['Risiko einschätzen'],['Maßnahmen'],['erneut bewerten']])),
  S(14,'Maßnahmen haben eine feste Rangfolge.',rbSk),
  S(13,'Am Ende steht der Nachweis.',LIST('Was zur CE-Kennzeichnung gehört',[['Risikobeurteilung und technische Unterlagen','1'],['Betriebsanleitung','2'],['EU-Konformitätserklärung','3'],['CE-Zeichen an der Maschine','4']])),
  S(13,'Auch ein Umbau im eigenen Betrieb kann Herstellerpflichten auslösen.',VS('Umbau bewerten',{h:'unkritisch',c:'g',l:['gleichwertiger Ersatz','Risiko bleibt gleich','Schutz reicht weiter']},{h:'wesentliche Veränderung',c:'r',l:['neue Gefährdung','höheres Risiko','Schutz reicht nicht mehr']}))],
 skz:[[SKZ(rbSk,'Skizze Drei-Stufen-Verfahren'),'Was sich konstruktiv lösen lässt, braucht keine Schutzeinrichtung. Hinweise und Unterweisung sind die schwächste Stufe.']]};

/* ---------- Fehlersuche: Signalkette mit Messstelle ---------- */
const FSN=['Sensor B1','Eingang E0.0','Ausgang A0.0','Ventil Y1','Druck','Zylinder','Eingang E0.1'],FSU=['LED am Sensor','an der SPS','an der SPS','schaltet hörbar','am Zylinder','fährt aus','Sensor B2'];
const FSF=[1,3,4,5,6],FSV=['noch keiner','Leitung von B1','Ventilspule Y1','Druckluft fehlt','Zylinder klemmt','Sensor B2 verstellt'];
const fsBild=(fall,ms,vd)=>{const fp=fall<0?99:FSF[fall],ok1=ms<fp;let s=TI(fall<0?'Signalweg einer Station':'Störfall '+(fall+1)+': Der Zylinder meldet „ausgefahren“ nicht');
 FSN.forEach((n,i)=>{const col=i%4,row=Math.floor(i/4),x=16+col*116,y=52+row*82,sel=i==ms,on=fall<0||(sel&&ok1);
  s+=RC(x,y,100,58,sel||fall<0?MX(on?'g':'r',18):'var(--card)',sel||fall<0?CC(on?'g':'r'):'var(--line)',8,sel?2.6:1.5)+L(x+50,y+22,n,'middle',12.5,'var(--ink)',700)+L(x+50,y+38,FSU[i],'middle',10.5,'var(--mute)',500);
  if(sel&&fall>=0)s+=L(x+50,y+53,ok1?'Signal 1':'Signal 0','middle',11.5,ok1?'var(--ok)':'var(--red)',800);
  if(i<6){if(col<3)s+=AW(x+101,y+29,x+115,y+29,'var(--ink)',2);else s+=P(`M${x+50} ${y+59}V${y+70}H66V${y+81}`,'var(--ink)',2)+AW(66,y+76,66,y+81,'var(--ink)',2)}});
 if(fall>=0){const hit=vd>0&&vd-1===fall;s+=L(364,160,'Messstelle '+(ms+1)+' von 7','start',12,'var(--mute)',600);
  s+=RC(16,216,448,40,vd==0?'var(--card)':MX(hit?'g':'r',16),vd==0?'var(--line)':CC(hit?'g':'r'),8,1.6)+L(240,241,vd==0?'Verfolge das Signal, dann stelle Deinen Verdacht ein.':'Verdacht „'+FSV[vd]+'“: '+(hit?'richtig':'passt nicht zu den Signalen'),'middle',13,'var(--ink)',700)}
 else s+=L(240,240,'Vom Sensor über die Steuerung zum Zylinder und zurück','middle',13,'var(--mute)',500);return s};
X['Systematische Fehlersuche & Diagnose']={
 v:['Eine Kette hat acht Glieder, eines ist unterbrochen. Wie findest Du es mit den wenigsten Messungen?',['Vorne anfangen und jedes Glied prüfen','In der Mitte messen und die fehlerhafte Hälfte weiter teilen','Hinten anfangen','Alle Teile tauschen'],1,'Jede Messung in der Mitte halbiert den Suchbereich. Bei acht Gliedern reichen drei Messungen.'],
 ein:[S(13,'Vor dem ersten Handgriff steht das Fragen und Lesen.',LIST('Zuerst',[['Anlage sichern','1'],['Bediener fragen: Was war vorher?','2'],['Meldungen und Störspeicher lesen','3'],['Erst dann messen','4']])),
  S(14,'Jedes Signal hat einen Weg. Irgendwo auf diesem Weg geht es verloren.',k=>fsBild(-1,0,0)),
  S(13,'Mit der Halbierungsmethode bist Du schnell am Ziel.',BARS('Messungen bis zum Fehler',[['8 Abschnitte',3,'3 Messungen','g'],['16 Abschnitte',4,'4 Messungen','g'],['64 Abschnitte',6,'6 Messungen','g']],{lx:150,h:46,y0:70,max:9,note:'statt im Mittel der halben Kette'})),
  S(13,'Nach der Reparatur ist die Arbeit nicht zu Ende.',FLOW('Danach',[['🧪','Funktion','prüfen'],['🛡️','Sicherheit','prüfen'],['📝','Ursache','notieren'],['🔁','Wiederholung','abstellen']]))],
 skz:[[SKZ(k=>fsBild(-1,0,0),'Skizze Signalweg'),'Sensor B1 meldet das Teil, die SPS setzt den Ausgang, das Ventil schaltet, der Zylinder fährt aus, Sensor B2 meldet die Endlage zurück.']],
 sim:{t:'Fehler im Signalweg finden',fix:'Station mit Zylinder: Teil liegt an, die Schrittkette wartet auf die Meldung „Zylinder ausgefahren“. In jedem Störfall steckt genau ein Fehler.',
  c:[{k:'fa',l:'Störfall',u:'',opts:[0,1,2,3,4],v:0,lab:['Fall 1','Fall 2','Fall 3','Fall 4','Fall 5']},{k:'ms',l:'Messstelle',u:'',opts:[0,1,2,3,4,5,6],v:0,lab:FSN},{k:'vd',l:'Dein Verdacht',u:'',opts:[0,1,2,3,4,5],v:0,lab:FSV}],
  calc:v=>({fp:FSF[v.fa],sig:v.ms<FSF[v.fa]?1:0,hit:v.vd>0&&v.vd-1===v.fa}),
  rows:(v,r)=>[['Messstelle',FSN[v.ms]],['Signal dort',r.sig?'1 (vorhanden)':'0 (fehlt)',r.sig?'g':'r'],['Verdacht',v.vd==0?'noch keiner':r.hit?'richtig':'passt nicht',v.vd==0?'':r.hit?'g':'r']],
  svg:(v,r)=>fsBild(v.fa,v.ms,v.vd),
  auf:{z:'In einem Störfall die Ursache finden.',t:'Wähle einen Störfall. Miss an verschiedenen Stellen, ob das Signal ankommt, und grenze den Fehler ein. Stelle dann Deinen Verdacht ein. Versuche, mit höchstens drei Messungen auszukommen.',h:'Tipp: Fang in der Mitte an. Kommt das Signal dort an, liegt der Fehler dahinter.',ok:(v,r)=>r.hit}}};

/* ---------- Service ---------- */
const svSk=k=>{let s=TI('Vom Anruf bis zum Servicebericht');
 const st=[['Meldung','aufnehmen','b'],['Hotline','Fernwartung','g'],['Einsatz','vor Ort','y'],['Bericht','Rückmeldung','a']];st.forEach((q,i)=>{s+=BOX(18+i*116,84,100,60,q[0],q[2],14,q[1]);if(i<3)s+=AW(119+i*116,114,133+i*116,114,'var(--ink)',2.2)});
 s+=L(184,172,'löst viele Fälle','middle',12,'var(--ok)',700)+L(184,188,'ohne Anfahrt','middle',12,'var(--ok)',700)+L(416,172,'Wissen für','middle',12,'var(--mute)',600)+L(416,188,'Konstruktion','middle',12,'var(--mute)',600);
 s+=L(240,240,'Eine genaue Meldung spart oft den ersten Einsatz.','middle',13,'var(--mute)',500);return s};
X['Service & Kundenunterstützung']={
 v:['Ein Kunde ruft an: „Die Anlage steht.“ Der Monteur könnte in drei Stunden dort sein. Was ist der beste erste Schritt?',['Sofort losfahren','Gezielt nachfragen und Störspeicher oder Fotos schicken lassen','Ein Angebot für eine neue Anlage schicken','Auf den nächsten Wartungstermin verweisen'],1,'Mit Meldungstext, Zeitpunkt und Vorgeschichte lässt sich vieles am Telefon oder per Fernwartung lösen. Und der Monteur nimmt sonst das richtige Teil mit.'],
 ein:[S(14,'Ein Servicefall läuft in festen Stufen ab.',svSk),
  S(13,'Die Übergabe entscheidet, wie oft der Kunde später anruft.',LIST('Zur Übergabe gehören',[['Abnahmeprotokoll und offene Punkte','1'],['Vollständige Dokumentation','2'],['Einweisung von Bedienung und Instandhaltung','3'],['Ansprechpartner und Reaktionszeiten','4']])),
  S(13,'Fernwartung spart Zeit, braucht aber klare Regeln.',VS('Fernwartung',{h:'Vorteile',c:'g',l:['schnelle Hilfe','keine Anfahrt','Fachmann sofort dabei']},{h:'Regeln',c:'y',l:['Freigabe durch den Kunden','gesicherte Verbindung','jemand steht an der Anlage']})),
  S(13,'Beim Kunden vertritt der Monteur den ganzen Betrieb.',CARDS('Auftreten beim Kunden',[['🪪','anmelden','Regeln des Kunden','b'],['🦺','sicher arbeiten','Freigabe einholen','y'],['🧹','sauber übergeben','Bericht, Unterschrift','g']]))],
 skz:[[SKZ(svSk,'Skizze Ablauf eines Servicefalls'),'Jede Stufe filtert: Was die Hotline löst, braucht keine Fernwartung, was die Fernwartung löst, keinen Einsatz.']]};

Object.assign(ERK,{'Mechatronische Systeme & Schnittstellen':['Mechanik, Elektrik und Software bilden einen Kreis aus Messen, Entscheiden und Bewegen. Die Teile passen nur zusammen, wenn ihre Schnittstellen mit Zahlen beschrieben sind.','Du achtest bei Beschaffung und Umbau auf Lasten- und Pflichtenheft, lässt Teilsysteme einzeln prüfen und planst Zeit für die Integration ein. Bei Störungen an einer Linie denkst Du zuerst an die Übergaben.',['Schnittstellen nur mündlich absprechen','Alle Stationen gleichzeitig in Betrieb nehmen','Verfügbarkeit der Kette mit dem Mittelwert rechnen','Dokumentation nach dem Umbau nicht nachführen']],
'Positionierantriebe & Servotechnik':['Ein Servoantrieb regelt Strom, Drehzahl und Lage. Das Fahrprofil aus Beschleunigen, Fahren und Bremsen bestimmt die Fahrzeit. Bei kurzen Wegen zählt die Beschleunigung, bei langen die Geschwindigkeit.','Du erkennst am Fahrprofil, wo Taktzeit zu holen ist, und kennst die Grenzen der Mechanik. Schleppfehler und Referenzprobleme kannst Du einordnen, bevor der Hersteller anreist.',['Höchstgeschwindigkeit erhöhen, obwohl die Achse sie nie erreicht','Beschleunigung ohne Blick auf die Mechanik hochdrehen','Nach Gebertausch die Referenz nicht neu setzen','Schleppfehler durch größere Grenzwerte „beheben“']],
'Maschinensicherheit: Risikobeurteilung & CE':['Der Hersteller weist die Sicherheit über Risikobeurteilung, Schutzmaßnahmen in fester Rangfolge und Unterlagen nach. Verketten und wesentliche Veränderungen können den Betrieb selbst zum Hersteller machen.','Du lässt vor jedem Umbau prüfen, ob neue Risiken entstehen, dokumentierst die Bewertung und ziehst bei Bedarf die Fachkraft für Arbeitssicherheit hinzu. Ab 20. Januar 2027 gilt dafür die Maschinenverordnung (Stand prüfen).',['Verkettete Maschinen ohne neue Beurteilung betreiben','Schutzeinrichtung durch ein Warnschild ersetzen','Umbau nicht dokumentieren','Betreiberpflichten mit Herstellerpflichten verwechseln']],
'Systematische Fehlersuche & Diagnose':['Jede Störung unterbricht einen Signal- oder Energieweg. Wer den Weg kennt und in der Mitte misst, findet die Stelle mit wenigen Schritten.','Du gibst Deiner Mannschaft ein festes Vorgehen: fragen, lesen, messen, eine Sache ändern, dokumentieren. Wiederholfehler wertest Du aus und stellst die Ursache ab.',['Teile auf Verdacht tauschen','Mehrere Dinge gleichzeitig ändern','Sicherheitseinrichtungen zur Fehlersuche überbrücken','Ursache nicht dokumentieren']],
'Service & Kundenunterstützung':['Guter Service beginnt bei der Übergabe und lebt von genauer Störungsaufnahme, klaren Reaktionszeiten und sauberen Berichten.','Du bereitest Einsätze vor, klärst Zuständigkeiten bei Gewährleistung mit dem Vertrieb und nutzt Serviceberichte als Rückmeldung für Konstruktion und Fertigung.',['Ohne Störungsaufnahme losfahren','Fernwartung ohne Freigabe und ohne Person an der Anlage','Zusagen zur Kostenübernahme vor Ort machen','Keinen Servicebericht schreiben']]});
}
