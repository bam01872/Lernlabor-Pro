
/* ===== Vorschau 3, Pakete O2 und T4: Vermuten, Kurz erklärt, Skizze, Regler mit Auftrag ===== */
const PL=(pts,col,w=3,da='')=>`<path d="M${pts.map(p=>F(p[0])+' '+F(p[1])).join('L')}" stroke="${col}" stroke-width="${w}" fill="none" stroke-linejoin="round"${da?` stroke-dasharray="${da}"`:''}/>`;
const HB=(x,y,w,h,fr,col,lab,val)=>L(x,y-7,lab,'start',15,'var(--ink)',600)+RC(x,y,w,h,'var(--card)','var(--line)',6,1.2)+RC(x,y,Math.max(2,w*Math.min(1,Math.max(0,fr))),h,col,'none',6,0)+L(x+w,y-7,val,'end',16,'var(--ink)',700);
const MK=(x,y,h,t)=>`<path d="M${F(x)} ${F(y-5)}v${h+10}" stroke="var(--ink)" stroke-width="2"/>`+L(x,y+h+20,t,'middle',13,'var(--ink)',700);
const BOX=(x,y,w,h,t,c='b',fs=14,t2)=>RC(x,y,w,h,`color-mix(in srgb,${CC(c)} 16%,var(--card))`,CC(c),7,1.5)+L(x+w/2,y+h/2+(t2?-4:5),t,'middle',fs,'var(--ink)',700)+(t2?L(x+w/2,y+h/2+15,t2,'middle',12.5,'var(--mute)',500):'');

/* ---------- O2: Kapazitäts- und Terminplanung ---------- */
const kapBild=(B,K,ti)=>{const x0=150,W=290,mx=Math.max(120,B,K)*1.05,X=h=>x0+W*h/mx,ok=B<=K;let s=ti?L(240,30,ti,'middle',16,'var(--ink)',700):'';
 s+=L(x0-10,92,'Bestand','end',15,'var(--ink)',600)+RC(x0,70,X(K)-x0,34,`color-mix(in srgb,${CC('b')} 55%,var(--card))`,'var(--ink)',4,1)+L(X(K)+6,92,nz(K,0)+' h','start',15,'var(--ink)',700);
 s+=L(x0-10,152,'Bedarf','end',15,'var(--ink)',600)+RC(x0,130,X(Math.min(B,K))-x0,34,`color-mix(in srgb,${CC('g')} 55%,var(--card))`,'var(--ink)',4,1)+(B>K?RC(X(K),130,X(B)-X(K),34,`color-mix(in srgb,${CC('r')} 60%,var(--card))`,'var(--ink)',4,1):'')+L(X(B)+6,152,nz(B,0)+' h','start',15,ok?'var(--ink)':'var(--red)',700);
 s+=`<path d="M${F(X(K))} 58V180" stroke="var(--ink)" stroke-width="1.6" stroke-dasharray="5 4"/>`+L(240,214,'Auslastung '+nz(B/K*100,0)+' %','middle',20,ok?(B/K>=.8?'var(--ok)':'var(--ink)'):'var(--red)',800)+L(240,238,ok?(B/K>.95?'machbar, aber ohne Reserve':'machbar'):'Überlast: '+nz(B-K,0)+' h fehlen','middle',14,'var(--mute)',500);return s};
const npBild=k=>{const N=(x,y,n,d,cr)=>RC(x,y,84,46,cr?`color-mix(in srgb,${CC('r')} 16%,var(--card))`:'var(--card)',cr?CC('r'):'var(--ink)',6,cr?2:1.3)+L(x+42,y+20,n,'middle',14,'var(--ink)',700)+L(x+42,y+38,d,'middle',13,'var(--mute)',500);
 return L(240,26,'Netzplan mit kritischem Weg','middle',16,'var(--ink)',700)+N(20,104,'A Rohteil','3 Tage',1)+N(140,48,'B Drehen','4 Tage',1)+N(140,160,'C Spannen','2 Tage',0)+N(260,104,'D Fräsen','5 Tage',1)+N(380,104,'E Prüfen','1 Tag',1)
 +AW(104,118,140,82,CC('r'),2.4)+AW(104,136,140,176,'var(--ink)',1.6)+AW(224,82,260,116,CC('r'),2.4)+AW(224,176,260,140,'var(--ink)',1.6)+AW(344,127,380,127,CC('r'),2.4)
 +L(240,236,'kritischer Weg A, B, D, E: 13 Tage','middle',15,CC('r'),700)+L(240,256,'C hat 2 Tage Puffer','middle',14,'var(--mute)',500)};
X['Kapazitäts- und Terminplanung']={
 v:['Eine Maschine ist diese Woche zu 110 % ausgelastet. Was bedeutet das?',['Sie läuft 10 % schneller als sonst.','Der Plan ist ohne Ausgleich nicht zu schaffen.','Sie hat 10 % Reserve.','Der Nutzungsgrad ist zu niedrig angesetzt.'],1,'Der Bedarf ist größer als der Bestand. Ohne Überstunden, Zusatzschicht, Verschieben oder Fremdvergabe reißt ein Termin.'],
 ein:[S(12,'Der Kapazitätsbestand sagt, wie viele Stunden eine Maschine in der Woche wirklich leisten kann.',k=>TITLE('Kapazitätsbestand')+OP(ph(k,.05,.4),TX(240,104,'Tage · Schichten · Stunden · Nutzungsgrad',450,'ein3','middle'))+OP(ph(k,.45,.85),FORM(240,180,['5 · 2 · 8 h · 0,85 = 68 h'],'middle',undefined,22))),
  S(12,'Der Kapazitätsbedarf ist die Zeit, die Deine Aufträge brauchen: Rüsten plus Stückzahl mal Zeit je Einheit.',k=>TITLE('Kapazitätsbedarf')+OP(ph(k,.05,.4),TX(240,104,'Rüstzeit + Stückzahl · Zeit je Einheit',450,'ein3','middle'))+OP(ph(k,.45,.85),FORM(240,180,['2 h + 900 · 4 min = 62 h'],'middle',undefined,22))),
  S(13,'Beides stellst Du gegenüber. Liegt der Bedarf über dem Bestand, gleichst Du aus.',LIST('Überlast ausgleichen',[['Überstunden, Zusatzschicht','1','Bestand erhöhen'],['Auftrag verschieben, Los teilen','2','Bedarf verlagern'],['Fremdvergabe','3','Bedarf abgeben']])),
  S(13,'Im Netzplan zeigt der kritische Weg, welche Vorgänge keinen Puffer haben. Dort darf nichts liegen bleiben.',npBild)],
 skz:[[SKZ(npBild,'Skizze Netzplan'),'Der längste Weg durch den Netzplan bestimmt die Projektdauer. Vorgang C kann zwei Tage später beginnen, ohne dass sich der Endtermin verschiebt.']],
 sim:{t:'Wochenplanung am Bearbeitungszentrum',fix:'5 Arbeitstage, 8 h je Schicht, Nutzungsgrad 85 %, Rüstzeit 2 h',
  c:[{k:'m',l:'Stückzahl',u:'Stück',min:300,max:1500,st:50,v:900},{k:'te',l:'Zeit je Einheit',u:'min',min:2,max:6,st:.5,v:4},{k:'S',l:'Schichten',u:'',opts:[1,2,3],v:0}],
  calc:v=>{const K=5*8*v.S*.85,B=2+v.m*v.te/60;return{K,B,A:B/K*100}},
  rows:(v,r)=>[['Kapazitätsbestand',nz(r.K,0)+' h'],['Kapazitätsbedarf',nz(r.B,1)+' h'],['Auslastung',nz(r.A,1)+' %',r.A>=80&&r.A<=95?'g':'r'],['Stückzahl',nz(v.m,0)+' Stück',v.m>=900?'g':'r']],
  svg:(v,r)=>kapBild(r.B,r.K,'Bedarf und Bestand in der Woche'),
  auf:{z:'Mindestens 900 Stück bei 80 bis 95 % Auslastung.',t:'Der Kunde braucht in dieser Woche mindestens 900 Stück. Plane so, dass die Auslastung zwischen 80 % und 95 % liegt: hoch genug, damit sich die Schicht lohnt, mit Reserve für Störungen.',h:'Tipp: Eine zweite Schicht verdoppelt den Bestand. Eine kürzere Zeit je Einheit (bessere Vorrichtung, anderes Werkzeug) senkt den Bedarf.',ok:(v,r)=>v.m>=900&&r.A>=80&&r.A<=95}}};

/* ---------- O2: Reihenfolgeplanung ---------- */
const ganttRf=k=>{const x0=80,sc=21,row=(y,n,seq,mid)=>{let x=x0,s=L(x0-10,y+20,n,'end',15,'var(--ink)',700);seq.forEach(([t,h,c])=>{s+=RC(x,y,h*sc,30,`color-mix(in srgb,${CC(c)} 50%,var(--card))`,'var(--ink)',3,1)+L(x+h*sc/2,y+20,t,'middle',14,'var(--ink)',700);x+=h*sc});return s+L(x0+15*sc+6,y+20,'∅ '+mid,'start',15,'var(--ink)',700)};
 let s=L(240,28,'Drei Aufträge, zwei Reihenfolgen','middle',16,'var(--ink)',700)+row(62,'FIFO',[['A 8 h',8,'r'],['B 2 h',2,'g'],['C 5 h',5,'b']],'11 h')+row(132,'KOZ',[['B 2 h',2,'g'],['C 5 h',5,'b'],['A 8 h',8,'r']],'8 h');
 for(let h=0;h<=15;h+=5)s+=`<path d="M${x0+h*sc} 176v8" stroke="var(--ink)" stroke-width="1.4"/>`+L(x0+h*sc,202,h+' h','middle',13,'var(--mute)',500);
 return s+`<path d="M${x0} 176H${x0+15*sc}" stroke="var(--ink)" stroke-width="1.4"/>`+L(240,238,'Kurze Aufträge zuerst: Im Mittel sind alle früher fertig.','middle',14,'var(--mute)',500)};
X['Reihenfolgeplanung']={
 v:['Vor der Maschine warten drei Aufträge mit 8 h, 2 h und 5 h. In welcher Reihenfolge sind sie im Mittel am schnellsten fertig?',['In der Reihenfolge des Eingangs','Der längste zuerst','Der kürzeste zuerst','Die Reihenfolge ist egal'],2,'Kurze Aufträge halten die anderen nur kurz auf. Die Gesamtzeit bleibt 15 h, aber die mittlere Durchlaufzeit sinkt von 11 h auf 8 h.'],
 ein:[S(12,'Wer zuerst kommt, legt eine Prioritätsregel fest. Jede Regel verfolgt ein anderes Ziel.',CARDS('Prioritätsregeln',[['📥','FIFO','nach Eingang','b'],['⚡','KOZ','kürzeste Zeit zuerst','g'],['📅','Liefertermin','dringendster zuerst','r'],['⏳','Schlupfzeit','kleinster Puffer zuerst','y']],{cols:2})),
  S(14,'Mit der kürzesten Operationszeit zuerst sinkt die mittlere Durchlaufzeit. Lange Aufträge warten dafür länger.',ganttRf),
  S(13,'Die Schlupfzeit zeigt, wie viel Luft ein Auftrag noch hat. Wenig Schlupf heißt: zuerst einplanen.',k=>TITLE('Schlupfzeit')+OP(ph(k,.05,.4),TX(240,100,'Zeit bis zum Termin − Restbearbeitung',450,'ein3','middle'))+OP(ph(k,.45,.85),FORM(240,176,['12 h − 10 h = 2 h Schlupf'],'middle',undefined,22))),
  S(12,'Ähnliche Teile hintereinander sparen Rüstzeit. Achte darauf, dass kein dringender Auftrag dadurch zu spät kommt.',VS('Rüstoptimiert fertigen',{h:'Vorteil',c:'g',l:['weniger Rüstzeit','mehr Kapazität','weniger Anlaufteile']},{h:'Risiko',c:'r',l:['Termine rutschen','höhere Bestände','Eilaufträge stören']}))],
 skz:[[SKZ(ganttRf,'Skizze Reihenfolge'),'Dieselben drei Aufträge: nach Eingang sind sie nach 8 h, 10 h und 15 h fertig, nach der KOZ-Regel nach 2 h, 7 h und 15 h.']]};

/* ---------- O2: Material ---------- */
const sgBild=k=>{const c=CHT({xm:30,ym:1000,xt:[0,10,20,30],yt:[250,500,750,1000],xl:'Tage',yl:'Bestand in Stück'});let s=c.s,p=[];
 for(let i=0;i<3;i++){p.push([c.px(i*10),c.py(900)],[c.px(i*10+10),c.py(200)])}s+=PL(p,'var(--flow)',3)+LN(c,0,480,30,480,'var(--amber)',2.4,'7 5')+L(c.X1,c.py(480)-7,'Meldebestand','end',14,'#a16207',700)+LN(c,0,200,30,200,'var(--red)',2.4,'3 4')+L(c.X1,c.py(200)+17,'Sicherheitsbestand','end',14,'var(--red)',700);
 return s+DOT(c.px(6),c.py(480),'var(--amber)')+L(c.px(6)+8,c.py(480)-10,'bestellen','start',13,'var(--ink)',700)+DOT(c.px(10),c.py(200),'var(--ok)')+L(c.px(10)+8,c.py(900)+4,'Lieferung','start',13,'var(--ink)',700)};
X['Material: ABC, XYZ, Bestellmenge, Kanban']={
 v:['Du bestellst ein Teil künftig nur noch halb so oft, dafür jeweils die doppelte Menge. Was passiert mit den Kosten?',['Bestell- und Lagerkosten sinken.','Die Bestellkosten sinken, die Lagerkosten steigen.','Beide steigen.','Es ändert sich nichts.'],1,'Weniger Bestellvorgänge sparen Bestellkosten. Dafür liegt im Mittel doppelt so viel Ware im Lager und bindet Geld.'],
 ein:[S(13,'Die ABC-Analyse ordnet die Teile nach ihrem Wert. Wenige A-Teile machen den größten Teil des Verbrauchswertes aus.',BARS('Anteil am Verbrauchswert (Beispiel)',[['A-Teile',78,'78 %','r'],['B-Teile',16,'16 %','y'],['C-Teile',6,'6 %','g']],{lx:120,max:100,note:'Bei den A-Teilen lohnt sich genaue Planung am meisten.'})),
  S(13,'Der Meldebestand deckt den Verbrauch während der Beschaffung und hält den Sicherheitsbestand zurück.',sgBild),
  S(13,'Bei der optimalen Bestellmenge ist die Summe aus Bestellkosten und Lagerkosten am kleinsten.',VS('Zwei Kosten ziehen gegeneinander',{h:'kleine Bestellmenge',c:'b',l:['viele Bestellungen','hohe Bestellkosten','wenig Lagerkosten']},{h:'große Bestellmenge',c:'y',l:['wenige Bestellungen','wenig Bestellkosten','hohe Lagerkosten']},{note:'Das Minimum liegt dort, wo beide gleich groß sind.'})),
  S(12,'Bei Kanban holt die Fertigung nur nach, was verbraucht wurde. Der leere Behälter ist der Bestellauftrag.',FLOW('Kanban-Kreis',[['📦','Behälter leer','Karte geht zurück','r'],['🏭','Nachfertigen','genau ein Behälter','b'],['🚚','Liefern','an den Verbrauchsort','g']],{y:70,h:128}))],
 skz:[[SKZ(sgBild,'Skizze Lagerbestand'),'Der Bestand sinkt gleichmäßig. Beim Meldebestand wird bestellt, die Lieferung trifft ein, wenn der Sicherheitsbestand erreicht ist.']],
 sim:{t:'Bestellmenge für ein Normteil',fix:'Jahresbedarf 6000 Stück, Einstandspreis 8 € je Stück, Lagerkostensatz 20 %',
  c:[{k:'x',l:'Bestellmenge',u:'Stück',min:100,max:2000,st:50,v:200},{k:'kb',l:'Kosten je Bestellung',u:'€',min:30,max:90,st:10,v:60}],
  calc:v=>{const n=6000/v.x,BK=n*v.kb,LK=v.x/2*8*.2,G=BK+LK,xo=Math.sqrt(200*6000*v.kb/(8*20));return{n,BK,LK,G,xo}},
  rows:(v,r)=>[['Bestellungen im Jahr',nz(r.n,1),r.n<=10?'g':'r'],['Bestellkosten',nz(r.BK,0)+' €'],['Lagerkosten',nz(r.LK,0)+' €'],['Gesamtkosten',nz(r.G,0)+' €',r.G<=1100?'g':'r']],
  svg:(v,r)=>{const c=CHT({xm:2000,ym:2400,xt:[0,500,1000,1500,2000],yt:[600,1200,1800,2400],xl:'Bestellmenge in Stück',yl:'Kosten in € pro Jahr'});let s=c.s,a=[],b=[],g=[];
   for(let x=100;x<=2000;x+=25){const BK=6000/x*v.kb,LK=x*.8;a.push([c.px(x),c.py(BK)]);b.push([c.px(x),c.py(LK)]);g.push([c.px(x),c.py(BK+LK)])}
   s+=PL(a,CC('b'),2.2)+PL(b,'var(--amber)',2.2)+PL(g,'var(--ink)',3)+LN(c,0,1100,2000,1100,'var(--ok)',1.8,'6 4')+L(c.X1,c.py(1100)+15,'Ziel 1100 €','end',13,'var(--ok)',700);
   s+=`<path d="M${F(c.px(v.x))} ${c.Y0}V${F(c.py(r.G))}" stroke="var(--ink)" stroke-width="1.4" stroke-dasharray="4 3"/>`+DOT(c.px(v.x),c.py(r.G),r.G<=1100&&r.n<=10?'var(--ok)':'var(--red)',7);
   return s+L(c.px(1990),c.py(1650)-30,'Lager','end',13,'#a16207',700)+L(c.px(1990),c.py(6000/2000*v.kb)-8,'Bestellen','end',13,CC('b'),700)+L(c.px(1500),c.py(6000/1500*v.kb+1200)-9,'Summe','end',13,'var(--ink)',700)},
  auf:{z:'Höchstens 1100 € Gesamtkosten und höchstens 10 Bestellungen im Jahr.',t:'Der Einkauf will höchstens 10 Bestellungen im Jahr auslösen, das Controlling höchstens 1100 € für Bestellen und Lagern zahlen. Finde eine Bestellmenge, die beides erfüllt.',h:'Tipp: Suche die Stelle, an der die Summenkurve am tiefsten liegt. Dort sind Bestellkosten und Lagerkosten etwa gleich groß.',ok:(v,r)=>r.G<=1100&&r.n<=10}}};

/* ---------- O2: Zeitwirtschaft ---------- */
const zwBild=k=>L(240,26,'Gliederung der Auftragszeit','middle',16,'var(--ink)',700)+BOX(170,40,140,36,'Auftragszeit T','a',15)+BOX(40,104,150,36,'Rüstzeit t_r','b')+BOX(290,104,150,36,'Ausführungszeit t_a','g')+BOX(290,164,150,34,'m · t_e','g',14)
 +BOX(204,218,84,46,'t_g','y',14,'Grundzeit')+BOX(296,218,84,46,'t_er','y',14,'Erholung')+BOX(388,218,84,46,'t_v','y',14,'Verteilzeit')
 +PL([[240,76],[240,90],[115,90],[115,104]],'var(--ink)',1.5)+PL([[240,90],[365,90],[365,104]],'var(--ink)',1.5)+PL([[365,140],[365,164]],'var(--ink)',1.5)+PL([[365,198],[365,208],[246,208],[246,218]],'var(--ink)',1.5)+PL([[338,208],[338,218]],'var(--ink)',1.5)+PL([[365,208],[430,208],[430,218]],'var(--ink)',1.5)
 +L(115,160,'einmal je Auftrag','middle',13,'var(--mute)',500);
X['Zeitwirtschaft: Auftragszeit & Zeitgrad']={
 v:['Für einen Auftrag sind 400 min vorgegeben. Der Mitarbeiter braucht 320 min. Wie hoch ist der Zeitgrad?',['80 %','100 %','125 %','180 %'],2,'Zeitgrad = Vorgabezeit ÷ Istzeit = 400 min ÷ 320 min = 125 %. Über 100 % heißt: schneller als die Vorgabe.'],
 ein:[S(13,'Die Auftragszeit besteht aus der Rüstzeit, die einmal anfällt, und der Ausführungszeit für alle Teile.',k=>TITLE('Auftragszeit')+OP(ph(k,.05,.4),FORM(240,104,['T = t_r + m · t_e'],'middle',undefined,24))+OP(ph(k,.45,.85),FORM(240,180,['T = 30 min + 50 · 4 min = 230 min'],'middle',undefined,20))),
  S(13,'Die Zeit je Einheit enthält neben der Grundzeit auch Zuschläge für Erholung und für Verteilzeiten.',BARS('Zeit je Einheit',[['Grundzeit t_g',5,'5,00 min','b'],['Erholung 4 %',.2,'0,20 min','g'],['Verteilzeit 10 %',.5,'0,50 min','y'],['t_e',5.7,'5,70 min','a']],{lx:200,max:6.5})),
  S(13,'Bei der Zeitaufnahme beurteilst Du den Leistungsgrad. Daraus wird die Normalzeit.',k=>TITLE('Von der Istzeit zur Normalzeit')+OP(ph(k,.05,.4),TX(240,104,'Normalzeit = Istzeit · Leistungsgrad',450,'ein3','middle'))+OP(ph(k,.45,.85),FORM(240,180,['2 min · 1,10 = 2,2 min'],'middle',undefined,22))),
  S(12,'Der Zeitgrad vergleicht die Vorgabe mit der gebrauchten Zeit.',k=>TITLE('Zeitgrad')+OP(ph(k,.05,.4),FORM(240,108,['Zeitgrad = ',{n:'Vorgabezeit',d:'Istzeit'},' · 100 %'],'middle'))+OP(ph(k,.45,.85),FORM(240,194,['= ',{n:'400 min',d:'320 min'},' · 100 % = 125 %'],'middle')))],
 skz:[[SKZ(zwBild,'Skizze Auftragszeit'),'Die Rüstzeit gliedert sich genauso in Grundzeit, Erholungszeit und Verteilzeit.']],
 sim:{t:'Auftragszeit für 100 Gehäuse',fix:'Auftragsmenge 100 Stück, eine Schicht hat 480 min',
  c:[{k:'tr',l:'Rüstzeit',u:'min',min:15,max:60,st:5,v:45},{k:'tg',l:'Grundzeit je Stück',u:'min',min:3,max:5,st:.1,v:4.2},{k:'z',l:'Zuschlag Erholung und Verteilzeit',u:'%',min:10,max:20,st:1,v:15}],
  calc:v=>{const te=v.tg*(1+v.z/100),ta=100*te,T=v.tr+ta;return{te,ta,T}},
  rows:(v,r)=>[['Zeit je Einheit',nz(r.te,2)+' min'],['Ausführungszeit',nz(r.ta,0)+' min'],['Auftragszeit',nz(r.T,0)+' min',r.T<=480?'g':'r'],['Reserve in der Schicht',nz(480-r.T,0)+' min',r.T<=480?'g':'r']],
  svg:(v,r)=>{const x0=40,W=400,sc=W/600,ok=r.T<=480,g=100*v.tg,zu=r.ta-g;let s=L(240,34,'Passt der Auftrag in eine Schicht?','middle',16,'var(--ink)',700);
   s+=RC(x0,90,v.tr*sc,46,`color-mix(in srgb,${CC('b')} 55%,var(--card))`,'var(--ink)',3,1)+RC(x0+v.tr*sc,90,g*sc,46,`color-mix(in srgb,${CC('g')} 55%,var(--card))`,'var(--ink)',3,1)+RC(x0+(v.tr+g)*sc,90,zu*sc,46,`color-mix(in srgb,${CC('y')} 60%,var(--card))`,'var(--ink)',3,1);
   s+=`<path d="M${F(x0+480*sc)} 70V160" stroke="${ok?'var(--ok)':'var(--red)'}" stroke-width="2.4" stroke-dasharray="6 4"/>`+L(x0+480*sc,62,'Schichtende 480 min','middle',14,ok?'var(--ok)':'var(--red)',700);
   s+=L(x0+(v.tr+g/2)*sc,118,'100 · Grundzeit','middle',14,'var(--ink)',700)+L(x0,180,'Rüsten','start',13,CC('b'),700)+L(x0+150,180,'Grundzeit','start',13,CC('g'),700)+L(x0+290,180,'Zuschläge','start',13,'#a16207',700);
   return s+L(240,228,'T = '+nz(r.T,0)+' min','middle',22,ok?'var(--ok)':'var(--red)',800)},
  auf:{z:'Bring die Auftragszeit auf höchstens 480 min.',t:'Der Auftrag über 100 Gehäuse soll in einer Schicht fertig werden. Prüfe, wo Du ansetzt: schneller rüsten (Rüstwagen, voreingestellte Werkzeuge), kürzere Grundzeit (bessere Vorrichtung) oder weniger Verteilzeit (Material liegt bereit).',h:'Tipp: Die Grundzeit wirkt hundertfach, die Rüstzeit nur einmal.',ok:(v,r)=>r.T<=480}}};

/* ---------- T4: Montageplanung & Fügen ---------- */
const vgBild=k=>{const N=(x,y,n,t)=>`<circle cx="${x}" cy="${y}" r="24" fill="color-mix(in srgb,${CC('b')} 14%,var(--card))" stroke="${CC('b')}" stroke-width="1.6"/>`+L(x,y+1,n,'middle',15,'var(--ink)',700)+L(x,y+15,t,'middle',11.5,'var(--mute)',500);
 return L(240,26,'Vorranggraph einer Montage','middle',16,'var(--ink)',700)+N(50,130,'1','Gehäuse')+N(160,76,'2','Lager')+N(160,184,'3','Dichtung')+N(270,76,'4','Welle')+N(360,130,'5','Deckel')+N(440,130,'6','Prüfen')
 +AW(72,119,138,87)+AW(72,141,138,173)+AW(184,76,246,76)+AW(291,88,340,117)+AW(183,177,338,138)+AW(384,130,416,130)+L(240,244,'Der Deckel kommt erst, wenn Welle und Dichtung sitzen.','middle',14,'var(--mute)',500)};
X['Montageplanung & Fügen']={
 v:['Eine Montagelinie soll in 450 min genau 150 Geräte liefern. Wie viel Zeit hat jede Station je Gerät?',['1,5 min','3 min','4,5 min','20 min'],1,'Taktzeit = 450 min ÷ 150 Stück = 3 min. In diesem Takt wandert das Gerät von Station zu Station.'],
 ein:[S(13,'Der Vorranggraph zeigt, was vor was montiert werden muss. Daraus entsteht die Reihenfolge.',vgBild),
  S(13,'Die Taktzeit gibt vor, wie lange jede Station für ein Gerät Zeit hat.',k=>TITLE('Taktzeit')+OP(ph(k,.05,.4),FORM(240,108,['Taktzeit = ',{n:'verfügbare Zeit',d:'Stückzahl'}],'middle'))+OP(ph(k,.45,.85),FORM(240,194,['= ',{n:'450 min',d:'150 Stück'},' = 3 min'],'middle'))),
  S(13,'Die Summe der Montagezeiten geteilt durch die Taktzeit ergibt die Zahl der Stationen. Es wird aufgerundet.',k=>TITLE('Stationen')+OP(ph(k,.05,.4),FORM(240,108,['Stationen = ',{n:'Summe der Montagezeiten',d:'Taktzeit'}],'middle'))+OP(ph(k,.45,.85),FORM(240,194,['= ',{n:'20 min',d:'3 min'},' = 6,67, also 7'],'middle'))),
  S(12,'Beim Fügen entscheidest Du zuerst: Muss die Verbindung später wieder gelöst werden?',VS('Fügeverfahren',{h:'lösbar',c:'g',l:['Schrauben','Stifte, Bolzen','Passfeder']},{h:'unlösbar',c:'r',l:['Schweißen, Löten','Kleben','Nieten, Pressen']}))],
 skz:[[SKZ(vgBild,'Skizze Vorranggraph'),'Schritte ohne Pfeil zwischen sich (hier 2 und 3) können gleichzeitig oder in beliebiger Reihenfolge laufen.']],
 sim:{t:'Montagelinie auslegen',fix:'450 min Arbeitszeit je Schicht',
  c:[{k:'x',l:'Geräte je Schicht',u:'Stück',min:100,max:400,st:10,v:240},{k:'S',l:'Summe der Montagezeiten',u:'min',min:8,max:30,st:1,v:18}],
  calc:v=>{const tk=450/v.x,n=Math.ceil(v.S/tk-1e-9),bw=v.S/(n*tk)*100;return{tk,n,bw}},
  rows:(v,r)=>[['Taktzeit',nz(r.tk,2)+' min'],['Stationen',String(r.n),r.n<=8?'g':'r'],['Bandwirkungsgrad',nz(r.bw,1)+' %',r.bw>=90?'g':'r'],['Geräte je Schicht',String(v.x),v.x>=250?'g':'r']],
  svg:(v,r)=>{const n=r.n,per=Math.min(n,10),w=Math.min(40,400/per-6),x0=240-(per*(w+6)-6)/2,fill=v.S/n/r.tk;let s=L(240,30,'Stationen der Linie (Takt '+nz(r.tk,2)+' min)','middle',16,'var(--ink)',700);
   for(let i=0;i<n;i++){const row=Math.floor(i/10),x=x0+(i%10)*(w+6),y=56+row*84,c=i<8?'g':'r';s+=RC(x,y,w,64,'var(--card)',CC(c),5,1.5)+RC(x+2,y+2+60*(1-fill),w-4,60*fill,`color-mix(in srgb,${CC(c)} 50%,var(--card))`,'none',3,0)+L(x+w/2,y+58,String(i+1),'middle',13,'var(--ink)',700)}
   return s+L(240,n>10?246:176,'Füllung der Kästen: Anteil der Taktzeit, der genutzt wird','middle',13,'var(--mute)',500)+(n>10?'':L(240,222,nz(r.bw,1)+' % Bandwirkungsgrad','middle',21,r.bw>=90?'var(--ok)':'var(--red)',800))},
  auf:{z:'Mindestens 250 Geräte mit höchstens 8 Stationen und mindestens 90 % Bandwirkungsgrad.',t:'Die Halle bietet Platz für höchstens 8 Stationen. Gefordert sind mindestens 250 Geräte je Schicht. Der Bandwirkungsgrad soll bei mindestens 90 % liegen, damit keine Station viel Leerlauf hat.',h:'Tipp: Kürzere Montagezeiten erreichst Du durch vormontierte Baugruppen und montagegerechte Konstruktion.',ok:(v,r)=>v.x>=250&&r.n<=8&&r.bw>=90}}};

/* ---------- T4: Inbetriebnahme & Abnahme ---------- */
const ibBild=STAIRS('Schritt für Schritt zur Abnahme',[['Sichtprüfung','Anschlüsse'],['Schutz','Not-Halt'],['Leerlauf','Funktionen'],['Probelauf','unter Last'],['Abnahme','Protokoll']],{lo:'ohne Werkstück',up:'mit Abnahmeteilen',top:100});
X['Inbetriebnahme & Abnahme']={
 v:['Die neue Maschine ist aufgestellt und angeschlossen. Was prüfst Du, bevor zum ersten Mal ein Werkstück gespannt wird?',['Die Taktzeit','Die Maßhaltigkeit der Teile','Schutzeinrichtungen und Not-Halt','Die Stückkosten'],2,'Erst wenn Schutztüren, Verriegelungen und Not-Halt sicher wirken, läuft die Maschine unter Last.'],
 ein:[S(12,'Vor dem ersten Einschalten prüfst Du Aufstellung, Anschlüsse und Unterlagen.',LIST('Vor dem Einschalten',[['Aufstellung und Ausrichtung','ok'],['Strom, Luft, Hydraulik, Kühlschmierstoff','ok'],['Transportsicherungen entfernt','ok'],['Betriebsanleitung, Konformitätserklärung','ok']])),
  S(13,'Dann steigerst Du Schritt für Schritt: erst Sicherheit, dann Funktion, dann Leistung.',ibBild),
  S(13,'Bei der Abnahme vergleichst Du die Maschine mit dem, was bestellt wurde.',CARDS('Abnahme: was wird nachgewiesen?',[['📐','Genauigkeit','Abnahmeteile messen','b'],['⏱️','Leistung','Taktzeit, Stückzahl','g'],['🛡️','Sicherheit','Schutzeinrichtungen','r'],['📄','Unterlagen','vollständig','y']],{cols:2})),
  S(12,'Das Protokoll hält Ergebnisse und offene Punkte fest. Erst danach gehst Du in die Produktion.',FLOW('Nach der Abnahme',[['📝','Protokoll','Mängel mit Termin','y'],['👷','Unterweisung','Betriebsanweisung','b'],['🔧','Wartungsplan','an Instandhaltung','g']],{y:70,h:128}))],
 skz:[[SKZ(ibBild,'Skizze Inbetriebnahme'),'Jede Stufe setzt voraus, dass die vorige ohne Befund abgeschlossen ist.']]};

/* ---------- T4: FMEA ---------- */
const fmBild=(B,A,E,ti)=>{const R=B*A*E,col=R>125?'var(--red)':R>100?'var(--amber)':'var(--ok)',bar=(y,n,v,c)=>L(60,y+19,n,'start',15,'var(--ink)',600)+[...Array(10)].map((_,i)=>RC(190+i*22,y,18,26,i<v?`color-mix(in srgb,${CC(c)} 65%,var(--card))`:'var(--card)','var(--line)',3,1)).join('')+L(424,y+20,String(v),'middle',17,'var(--ink)',800);
 return L(240,28,ti,'middle',16,'var(--ink)',700)+bar(50,'Bedeutung B',B,'r')+bar(92,'Auftreten A',A,'y')+bar(134,'Entdeckung E',E,'b')+L(240,206,'RPZ = '+B+' · '+A+' · '+E+' = '+R,'middle',24,col,800)+L(240,236,R>125?'hohes Risiko: Maßnahmen nötig':R>100?'noch zu hoch':'Risiko deutlich gesenkt','middle',14,'var(--mute)',500)};
X['FMEA: Risiken bewerten']={
 v:['An einer Station wird eine Kamera eingebaut, die jedes fehlerhafte Teil erkennt. Welche Bewertung der FMEA verbessert sich?',['Die Bedeutung B','Das Auftreten A','Die Entdeckung E','Alle drei'],2,'Die Kamera findet den Fehler, bevor er zum Kunden geht. Der Fehler entsteht aber genauso oft, und seine Folge wäre dieselbe.'],
 ein:[S(13,'Die FMEA fragt im Team: Was kann schiefgehen, was wären die Folgen, und woran liegt es?',FLOW('Vom Fehler zur Maßnahme',[['⚠️','Fehler','was kann passieren?','r'],['🔍','Folge, Ursache','warum, wie schlimm?','y'],['🔢','Bewertung','B, A, E','b'],['🛠️','Maßnahme','wer, bis wann?','g']],{y:66,h:132})),
  S(13,'Drei Bewertungen von 1 bis 10. Bei der Entdeckung ist die 10 schlecht: Der Fehler bleibt unbemerkt.',CARDS('Drei Bewertungen',[['💥','Bedeutung B','Wie schwer ist die Folge?','r'],['🔁','Auftreten A','Wie oft tritt die Ursache auf?','y'],['👁️','Entdeckung E','Wird der Fehler gefunden?','b']])),
  S(12,'Das Produkt der drei Zahlen ist die Risikoprioritätszahl. Sie ordnet die Risiken.',k=>TITLE('Risikoprioritätszahl')+OP(ph(k,.05,.4),FORM(240,104,['RPZ = B · A · E'],'middle',undefined,24))+OP(ph(k,.45,.85),FORM(240,180,['RPZ = 8 · 6 · 7 = 336'],'middle',undefined,22))),
  S(13,'Zuerst die Ursache vermeiden, dann die Entdeckung verbessern. Danach bewertest Du neu.',k=>fmBild(8,2,3,'Nach den Maßnahmen'))],
 skz:[[SKZ(k=>fmBild(8,6,7,'Beispiel: Schraube nicht angezogen'),'Skizze FMEA-Bewertung'),'Vor den Maßnahmen. Die Bedeutung bleibt auch danach bei 8, weil die Folge des Fehlers dieselbe ist.']],
 sim:{t:'Risiko senken: Schraube am Lagerschild',fix:'Bedeutung B = 8 (Ausfall beim Kunden), sie ändert sich nur durch eine andere Konstruktion',
  c:[{k:'A',l:'Auftreten A',u:'',min:1,max:10,st:1,v:6},{k:'E',l:'Entdeckung E',u:'',min:1,max:10,st:1,v:7}],
  calc:v=>({R:8*v.A*v.E}),
  rows:(v,r)=>[['Bedeutung B','8'],['Auftreten A',String(v.A)],['Entdeckung E',String(v.E)],['RPZ',String(r.R),r.R<=100?'g':'r']],
  svg:(v,r)=>fmBild(8,v.A,v.E,'Bewertung der Fehlerursache'),
  auf:{z:'Senke die RPZ auf höchstens 100.',t:'Die Schraube am Lagerschild wird gelegentlich nicht richtig angezogen. Lege Maßnahmen fest: Ein gesteuerter Schrauber senkt das Auftreten, eine Überwachung der Schraubkurve verbessert die Entdeckung. Bringe die RPZ auf höchstens 100.',h:'Tipp: Vermeiden ist besser als Entdecken. Senke zuerst A.',ok:(v,r)=>r.R<=100}}};

/* ---------- T4: Automatisierung & Robotik ---------- */
const rzBild=k=>{let s=L(240,24,'Roboterzelle von oben','middle',16,'var(--ink)',700);
 s+=`<rect x="70" y="44" width="340" height="176" fill="none" stroke="var(--ink)" stroke-width="2.2" stroke-dasharray="9 5" rx="4"/>`+`<circle cx="240" cy="132" r="72" fill="color-mix(in srgb,${CC('y')} 12%,transparent)" stroke="${CC('y')}" stroke-width="1.3" stroke-dasharray="4 4"/>`;
 s+=`<circle cx="240" cy="132" r="15" fill="var(--amber)" stroke="var(--ink)" stroke-width="1.5"/><path d="M240 132L286 100L312 116" stroke="var(--ink)" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/><rect x="306" y="108" width="14" height="16" fill="var(--ink)" rx="2"/>`;
 s+=BOX(96,62,70,34,'Zuführung','b',12.5)+BOX(318,150,76,40,'Maschine','g',13)+BOX(96,170,70,34,'Palette','b',12.5);
 s+=`<path d="M70 110V156" stroke="var(--card)" stroke-width="5"/><path d="M70 110V156" stroke="${CC('r')}" stroke-width="3" stroke-dasharray="3 4"/>`+L(62,138,'Lichtvorhang','end',12.5,CC('r'),700).replace('<text','<text transform="rotate(-90 58 134)"').replace('text-anchor="end"','text-anchor="middle"');
 s+=`<path d="M210 220H270" stroke="var(--card)" stroke-width="5"/><path d="M210 220L262 238" stroke="var(--ink)" stroke-width="2.4"/>`+L(240,258,'Tür mit Verriegelung','middle',13,'var(--ink)',700)+L(404,38,'Schutzzaun','end',13,'var(--ink)',700)+L(240,64,'Arbeitsraum','middle',12.5,'#a16207',700);return s};
X['Automatisierung & Robotik']={
 v:['Eine Roboterzelle läuft technisch mit 30 s Taktzeit, steht aber 10 % der Zeit wegen Störungen. Wie wirkt sich das auf die Ausbringung aus?',['Gar nicht, die Taktzeit zählt.','Sie sinkt um 10 %.','Sie sinkt um 30 %.','Sie steigt, weil der Roboter sich erholt.'],1,'Ausbringung = Betriebszeit ÷ Taktzeit · Verfügbarkeit. Mit 90 % Verfügbarkeit bleiben 90 % der möglichen Teile.'],
 ein:[S(12,'Eine Roboterzelle ist mehr als der Roboter: Greifer, Zuführung, Steuerung und Schutz gehören dazu.',CARDS('Bausteine einer Zelle',[['🦾','Roboter','Traglast, Reichweite','a'],['✋','Greifer','zählt zur Traglast','b'],['📦','Zuführung','Teile lagerichtig','g'],['🛡️','Schutz','Zaun, Lichtvorhang','r']],{cols:2})),
  S(13,'Im Automatikbetrieb darf niemand in den Arbeitsraum. Zaun, verriegelte Tür und Lichtvorhang sichern das.',rzBild),
  S(13,'Die Ausbringung hängt an Taktzeit und Verfügbarkeit.',k=>TITLE('Ausbringung je Schicht')+OP(ph(k,.05,.4),FORM(240,108,['Teile = ',{n:'Betriebszeit',d:'Taktzeit'},' · Verfügbarkeit'],'middle'))+OP(ph(k,.45,.85),FORM(240,194,['= ',{n:'27 000 s',d:'30 s'},' · 0,9 = 810'],'middle'))),
  S(12,'Kollaborierende Roboter arbeiten ohne Zaun. Sicher ist das nur mit begrenzter Kraft und eigener Risikobeurteilung.',VS('Mit oder ohne Zaun?',{h:'Industrieroboter',c:'b',l:['schnell, hohe Last','Schutzzaun nötig','große Stückzahlen']},{h:'Cobot',c:'g',l:['langsam, kleine Last','neben dem Menschen','Greifer mitbeurteilen']}))],
 skz:[[SKZ(rzBild,'Skizze Roboterzelle'),'Öffnet jemand die Tür oder greift durch den Lichtvorhang, stoppt der Roboter. Eingerichtet wird nur mit Zustimmtaster und reduzierter Geschwindigkeit.']],
 sim:{t:'Ausbringung einer Roboterzelle',fix:'7,5 h Betriebszeit je Schicht',
  c:[{k:'t',l:'Taktzeit',u:'s',min:20,max:60,st:2,v:48},{k:'V',l:'Verfügbarkeit',u:'%',min:80,max:98,st:1,v:85},{k:'S',l:'Schichten',u:'',opts:[1,2,3],v:0}],
  calc:v=>{const n=v.S*27000/v.t*v.V/100;return{n,max:v.S*27000/v.t}},
  rows:(v,r)=>[['Takte je Tag',nz(r.max,0)],['Teile je Tag',nz(Math.floor(r.n),0),r.n>=1200?'g':'r'],['Verlust durch Stillstand',nz(r.max-r.n,0)+' Teile'],['Schichten',String(v.S),v.S<=2?'g':'r']],
  svg:(v,r)=>{const x0=40,W=400,mx=4200;let s=L(240,30,'Teile je Tag','middle',16,'var(--ink)',700);
   s+=HB(x0,76,W,30,r.max/mx,`color-mix(in srgb,${CC('b')} 55%,var(--card))`,'möglich bei 100 % Verfügbarkeit',nz(r.max,0))+HB(x0,150,W,30,r.n/mx,r.n>=1200?'var(--ok)':'var(--amber)','tatsächlich',nz(Math.floor(r.n),0))+MK(x0+W*1200/mx,150,30,'Ziel 1200');
   return s+L(240,240,v.S+(v.S===1?' Schicht':' Schichten')+', Takt '+v.t+' s, Verfügbarkeit '+v.V+' %','middle',14,'var(--mute)',500)},
  auf:{z:'Mindestens 1200 Teile je Tag mit höchstens zwei Schichten.',t:'Der Kunde ruft täglich 1200 Teile ab. Eine dritte Schicht will die Geschäftsleitung vermeiden. Zeige, mit welcher Taktzeit und Verfügbarkeit zwei Schichten reichen.',h:'Tipp: Eine kürzere Taktzeit kostet meist Geld (schnellerer Greifer, zweite Spannstelle). Verfügbarkeit gewinnst Du durch Wartung und schnelle Störungsbeseitigung.',ok:(v,r)=>r.n>=1200&&v.S<=2}}};
