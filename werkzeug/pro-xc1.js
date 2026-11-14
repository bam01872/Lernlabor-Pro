
/* ===== Pakete C1 und C2 (Chemie): Vermuten, Kurz erklärt, Skizze, Regler mit Auftrag ===== */
if(FR==='ch'){const TI=t=>L(240,28,t,'middle',16,'var(--ink)',700),P=(d,c='var(--ink)',w=2.4,da='',fl='none')=>`<path d="${d}" stroke="${c}" stroke-width="${w}" fill="${fl}" stroke-linejoin="round"${da?` stroke-dasharray="${da}"`:''}/>`,MX=(c,p)=>`color-mix(in srgb,${CC(c)} ${p}%,var(--card))`;

/* ---------- Wärme & Energiebilanz: Gegenstrom-Wärmeübertrager ---------- */
const wtBild=(t1,t2,k1,k2,ti)=>{let s=TI(ti||'Wärmeübertrager im Gegenstrom');
 s+=RC(150,84,220,92,MX('b',14),'var(--ink)',12,1.8)+RC(150,116,220,28,MX('r',26),CC('r'),0,1.4);
 s+=AW(30,130,148,130,CC('r'),3)+AW(372,130,450,130,CC('r'),3)+L(30,118,'Produkt '+nt(t1)+' °C','start',14,CC('r'),700)+L(450,118,nt(t2)+' °C','end',14,CC('r'),700);
 s+=AW(330,216,330,178,CC('b'),3)+AW(190,84,190,46,CC('b'),3)+L(342,212,'Kühlwasser '+nt(k1)+' °C','start',14,CC('b'),700)+L(202,56,nt(k2)+' °C','start',14,CC('b'),700);
 s+=AW(320,160,200,160,CC('b'),2)+AW(200,100,320,100,CC('b'),2)+L(240,250,'Abgegebene Wärme des Produkts = aufgenommene Wärme des Kühlwassers','middle',12.5,'var(--mute)',500);return s};
X['Wärme & Energiebilanz']={
 v:['Du willst 1000 kg Wasser von 20 °C auf 100 °C erwärmen und dann vollständig verdampfen. Wofür brauchst Du mehr Wärme?',['Für das Erwärmen','Für das Verdampfen','Für beides gleich viel','Verdampfen braucht keine Wärme'],1,'Erwärmen: 1000 kg · 4,18 kJ/(kg · K) · 80 K = 334 MJ. Verdampfen: 1000 kg · 2257 kJ/kg = 2257 MJ, also fast das Siebenfache.'],
 ein:[S(13,'Wärme geht nicht verloren. Was das heiße Produkt abgibt, nimmt das Kühlwasser auf.',k=>wtBild(80,30,15,30)),
  S(13,'Für das Erwärmen ohne Phasenwechsel brauchst Du Masse, Wärmekapazität und Temperaturdifferenz.',k=>TITLE('Wärmemenge')+OP(ph(k,.05,.4),FORM(240,104,['Q = m · c · ΔT'],'middle',undefined,24))+OP(ph(k,.45,.85),FORM(240,184,['2000 kg · 4,18 ',{n:'kJ',d:'kg · K'},' · 60 K = 501 600 kJ'],'middle',undefined,17))),
  S(13,'Beim Verdampfen und Kondensieren wird sehr viel Wärme umgesetzt, ohne dass sich die Temperatur ändert.',BARS('Wärme für 1 kg Wasser',[['um 80 K erwärmen',334,'334 kJ','b'],['bei 100 °C verdampfen',2257,'2257 kJ','r']],{lx:190,max:2400})),
  S(13,'Ein Wärmeübertrager leistet weniger, wenn sich Beläge bilden. Das erkennst Du an den Temperaturen.',LIST('Anzeichen für Beläge',[['Austrittstemperatur wird nicht mehr erreicht','1'],['Dampf- oder Kühlwasserverbrauch steigt','2'],['Druckverlust nimmt zu','3']]))],
 skz:[[SKZ(k=>wtBild(80,30,15,30),'Skizze Wärmeübertrager'),'Produkt und Kühlwasser strömen gegeneinander. So bleibt über die ganze Länge ein Temperaturgefälle erhalten.']],
 sim:{t:'Kühlwasser für den Produktkühler',fix:'Produkt mit c = 2,5 [[kJ||kg · K]] wird auf 30 °C gekühlt. Kühlwasser tritt mit 15 °C ein, c = 4,18 [[kJ||kg · K]].',
  c:[{k:'mp',l:'Produktstrom',u:'kg/h',min:500,max:3000,st:100,v:2000},{k:'t1',l:'Eintritt Produkt',u:'°C',min:60,max:95,st:5,v:80},{k:'ta',l:'Austritt Kühlwasser',u:'°C',min:20,max:40,st:1,v:22}],
  calc:v=>{const Q=v.mp*2.5*(v.t1-30),mw=Q/(4.18*(v.ta-15));return{Q,kW:Q/3600,mw,m3:mw/1000}},
  rows:(v,r)=>[['Wärmestrom',nz(r.kW,0)+' kW'],['Kühlwasserbedarf',nz(r.m3,1)+' m³/h',r.m3<=4?'g':'r'],['Austritt Kühlwasser',v.ta+' °C',v.ta<=35?'g':'r']],
  svg:(v,r)=>wtBild(v.t1,30,15,v.ta,'Kühlwasserbedarf '+nz(r.m3,1)+' m³/h'),
  auf:{z:'Höchstens 4 m³/h Kühlwasser, Austritt höchstens 35 °C.',t:'Der Kühler soll mindestens 2000 kg/h Produkt von mindestens 80 °C auf 30 °C kühlen. Das Kühlwassernetz gibt höchstens 4 m³/h her, und das Wasser darf höchstens 35 °C warm zurücklaufen.',h:'Tipp: Je stärker sich das Kühlwasser erwärmen darf, desto weniger brauchst Du davon.',ok:(v,r)=>v.mp>=2000&&v.t1>=80&&r.m3<=4&&v.ta<=35}}};

/* ---------- Fördern: Kennlinien ---------- */
const pkBild=k=>{const c=CHT({xm:60,ym:60,xt:[0,20,40,60],yt:[20,40,60],xl:'Förderstrom in m³/h',yl:'Förderhöhe in m',Y1:66});let s=c.s+TI('Betriebspunkt der Kreiselpumpe');const pu=[],an=[];for(let x=0;x<=60;x+=4){pu.push([c.px(x),c.py(52-0.011*x*x)]);an.push([c.px(x),c.py(12+0.0115*x*x)])}
 s+=PL(pu,'var(--flow)',3.2)+PL(an,CC('y'),3)+L(c.px(6),c.py(52)-8,'Pumpe','start',13,'var(--flow)',700)+L(c.px(4),c.py(12)+18,'Anlage','start',13,'#a16207',700);
 const xb=Math.sqrt(40/0.0225),yb=52-0.011*xb*xb;s+=DOT(c.px(xb),c.py(yb),'var(--ok)',7)+L(c.px(xb)+14,c.py(yb)+5,'Betriebspunkt','start',13,'var(--ok)',700);return s};
const rohrBild=(V,d,v)=>{const ok=v>=1&&v<=2,c=ok?'var(--ok)':'var(--red)',h=Math.max(14,d*0.9);let s=TI('Strömung im Rohr DN '+d);
 s+=RC(40,110-h/2,400,h,MX('b',22),'var(--ink)',4,1.8);const n=Math.max(1,Math.min(6,Math.round(v*1.5)));for(let i=0;i<n;i++){const x=70+i*(340/n);s+=AW(x,110,x+Math.min(54,18+v*12),110,CC('b'),2.6)}
 s+=HB(40,196,400,20,v/5,c,'Geschwindigkeit','v = '+nz(v,2)+' m/s')+MK(40+400*1/5,196,20,'1 m/s')+MK(40+400*2/5,196,20,'2 m/s')+L(240,260,nt(V)+' m³/h','middle',14,'var(--mute)',600);return s};
X['Fördern: Pumpen & Rohrleitungen']={
 v:['Eine Kreiselpumpe prasselt, als würde sie Kies fördern, und bringt kaum noch Leistung. Was ist die wahrscheinlichste Ursache?',['Die Drehzahl ist zu niedrig.','Kavitation durch zu geringen Druck auf der Saugseite.','Die Druckleitung ist zu groß.','Das Medium ist zu kalt.'],1,'Am Saugstutzen fällt der Druck unter den Dampfdruck. Die Dampfblasen fallen im Laufrad zusammen und zerstören es.'],
 ein:[S(13,'Es gibt zwei Familien von Pumpen mit sehr verschiedenem Verhalten.',VS('Zwei Pumpenarten',{h:'Kreiselpumpe',c:'b',l:['große Mengen, gleichmäßig','Menge sinkt bei Gegendruck','vor dem Start füllen']},{h:'Verdrängerpumpe',c:'y',l:['hoher Druck, zähe Medien','Förderstrom fast konstant','braucht Überströmventil']})),
  S(14,'Die Kreiselpumpe läuft dort, wo sich ihre Kennlinie mit der Kennlinie der Anlage schneidet.',pkBild),
  S(13,'Aus Volumenstrom und Rohrquerschnitt folgt die Geschwindigkeit.',k=>TITLE('Geschwindigkeit im Rohr')+OP(ph(k,.05,.4),FORM(240,104,['v = ',{n:'V̇',d:'A'},' mit A = ',{n:'π · d²',d:'4'}],'middle'))+OP(ph(k,.45,.85),FORM(240,190,['v = ',{n:'0,00833 m³/s',d:'0,00503 m²'},' = 1,66 ',{n:'m',d:'s'}],'middle',undefined,18))),
  S(13,'Kavitation zerstört Pumpen. Du verhinderst sie auf der Saugseite.',LIST('Kavitation vermeiden',[['Zulaufhöhe erhöhen','1'],['Saugleitung kurz und weit','2'],['Saugseitig nie drosseln','3'],['Medium nicht nahe am Siedepunkt','4']]))],
 skz:[[SKZ(pkBild,'Skizze Pumpen- und Anlagenkennlinie'),'Drosselst Du auf der Druckseite, wird die Anlagenkennlinie steiler. Der Betriebspunkt wandert nach links zu kleinerem Förderstrom.']],
 sim:{t:'Rohrleitung auswählen',fix:'Wasserähnliche Flüssigkeit. Druckverlust für 100 m gerades Rohr mit der Rohrreibungszahl 0,03 als Näherung.',
  c:[{k:'V',l:'Förderstrom',u:'m³/h',min:5,max:80,st:5,v:30},{k:'d',l:'Nennweite DN',u:'mm',opts:[25,40,50,65,80,100,125],v:2}],
  calc:v=>{const A=Math.PI*v.d*v.d/4e6,w=v.V/3600/A,dp=0.03*(100/(v.d/1000))*500*w*w/1e5;return{A,w,dp}},
  rows:(v,r)=>[['Rohrquerschnitt',nz(r.A*1e4,1)+' cm²'],['Geschwindigkeit',nz(r.w,2)+' m/s',r.w>=1&&r.w<=2?'g':'r'],['Druckverlust je 100 m',nz(r.dp,2)+' bar'],['Förderstrom',v.V+' m³/h',v.V>=30?'g':'r']],
  svg:(v,r)=>rohrBild(v.V,v.d,r.w),
  auf:{z:'Mindestens 30 m³/h bei 1 bis 2 m/s fördern.',t:'Die neue Förderleitung soll mindestens 30 m³/h transportieren. Wähle die Nennweite so, dass die Geschwindigkeit zwischen 1 und 2 m/s liegt: schnell genug gegen Ablagerungen, langsam genug für kleinen Druckverlust.',h:'Tipp: Der Querschnitt wächst mit dem Quadrat des Durchmessers. Eine Stufe größer macht viel aus.',ok:(v,r)=>v.V>=30&&r.w>=1&&r.w<=2}}};

/* ---------- Mechanische Trennverfahren: Filtration ---------- */
const filBild=k=>{let s=TI('Kuchenfiltration');
 s+=P('M150 50V214H330V50','var(--ink)',2.4)+RC(152,60,176,70,MX('b',26),'none',0,0)+RC(152,130,176,34,MX('y',55),CC('y'),0,1.2)+P('M152 166H328','var(--ink)',3,'7 4')+RC(152,170,176,42,MX('b',10),'none',0,0);
 for(let i=0;i<14;i++)s+=`<circle cx="${F(166+(i*37)%150)}" cy="${F(72+(i*23)%50)}" r="3.4" fill="${CC('y')}"/>`;
 s+=L(142,98,'Suspension','end',14,'var(--ink)',700)+L(142,152,'Filterkuchen','end',14,'#a16207',700)+L(342,170,'Filtermittel','start',14,'var(--ink)',700)+L(342,198,'Filtrat','start',14,CC('b'),700);
 s+=AW(240,214,240,250,CC('b'),3)+AW(240,38,240,58,'var(--ink)',2.6)+L(352,98,'Druck treibt','start',13,'var(--mute)',500)+L(352,114,'die Flüssigkeit','start',13,'var(--mute)',500)+L(352,130,'durch den Kuchen','start',13,'var(--mute)',500);return s};
X['Mechanische Trennverfahren']={
 v:['Eine trübe Flüssigkeit mit sehr feinen Teilchen klärt sich im Absetzbehälter auch nach Stunden kaum. Was hilft am ehesten?',['Länger warten','Eine Zentrifuge einsetzen','Den Behälter kühlen','Stärker rühren'],1,'Feine Teilchen sinken unter Schwerkraft extrem langsam. Die Zentrifuge vervielfacht die treibende Kraft.'],
 ein:[S(13,'Welches Verfahren passt, hängt davon ab, was die Trennung antreibt.',CARDS('Was treibt die Trennung?',[['⬇️','Schwerkraft','Absetzen','b'],['🌀','Fliehkraft','Zentrifuge, Zyklon','g'],['🧽','Druck','Filtration','y'],['🔲','Maschenweite','Sieben','a']])),
  S(14,'Bei der Kuchenfiltration hält erst das Tuch, dann der wachsende Kuchen den Feststoff zurück.',filBild),
  S(13,'Die Schleuderziffer sagt, wie viel stärker die Fliehkraft ist als die Schwerkraft.',k=>TITLE('Schleuderziffer')+OP(ph(k,.05,.4),FORM(240,104,['z = ',{n:'r · ω²',d:'g'}],'middle'))+OP(ph(k,.45,.85),FORM(240,190,['z = ',{n:'0,4 m · (157 1/s)²',d:'9,81 m/s²'},' ≈ 1005'],'middle',undefined,18))),
  S(13,'Nach dem Filtrieren folgen immer dieselben Schritte.',FLOW('Zyklus einer Filterpresse',[['⬇️','Füllen','filtrieren','b'],['🚿','Waschen','Kuchen reinigen','g'],['💨','Entfeuchten','abpressen, ausblasen','y'],['📦','Austragen','Kuchen ab','a']]))],
 skz:[[SKZ(filBild,'Skizze Kuchenfiltration'),'Der Filterkuchen ist selbst die eigentliche Filterschicht. Je höher er wird, desto langsamer läuft das Filtrat.']]};

/* ---------- Thermische Trennverfahren: Kolonne ---------- */
const kolBild=(F0,xf,xd,xb,Dm)=>{const B=F0-Dm;let s=L(30,30,'Rektifikationskolonne','start',16,'var(--ink)',700);
 s+=RC(206,46,68,180,MX('b',12),'var(--ink)',26,1.8);for(let i=0;i<6;i++)s+=P(`M${i%2?212:228} ${72+i*26}H${i%2?252:268}`,'var(--mute)',1.6);
 s+=AW(120,136,204,136,'var(--ink)',2.8)+L(30,124,'Zulauf F','start',14,'var(--ink)',700)+L(30,142,nz(F0,0)+' kg/h','start',13,'var(--ink)',600)+L(30,163,nz(xf*100,0)+' % Leichtsieder','start',12.5,'var(--mute)',500);
 s+=P('M240 46V36H316','var(--ink)',2.2)+RC(316,24,54,26,MX('b',30),CC('b'),6,1.5)+L(343,42,'Kühler','middle',12,'var(--ink)',700)+P('M343 50V76H276','var(--ink)',2,'5 3')+L(310,92,'Rücklauf','middle',12,'var(--mute)',600)+AW(370,37,440,37,CC('g'),2.8);
 s+=L(450,62,'Destillat D','end',14,CC('g'),700)+L(450,80,nz(Dm,0)+' kg/h','end',13,'var(--ink)',600)+L(450,101,nz(xd*100,0)+' %','end',12.5,'var(--mute)',500);
 s+=P('M240 226V244','var(--ink)',2.2)+AW(240,244,340,244,CC('r'),2.8)+L(450,226,'Sumpf B','end',14,CC('r'),700)+L(450,244,nz(B,0)+' kg/h','end',13,'var(--ink)',600)+L(450,265,nz(xb*100,0)+' %','end',12.5,'var(--mute)',500);
 s+=RC(186,200,22,22,MX('r',40),CC('r'),4,1.4)+L(180,216,'Heizung','end',12,'var(--mute)',600);return s};
X['Thermische Trennverfahren']={
 v:['Das Kopfprodukt einer Kolonne ist nicht rein genug. Welche Änderung hilft, und was kostet sie?',['Weniger Rücklauf, das spart Energie.','Mehr Rücklauf, das kostet mehr Dampf und Kühlwasser.','Mehr Zulauf, das kostet nichts.','Kopfkühler abschalten.'],1,'Mehr Rücklauf verbessert die Trennung, weil mehr Flüssigkeit dem aufsteigenden Dampf entgegenläuft. Dafür muss mehr verdampft und kondensiert werden.'],
 ein:[S(13,'Destillation nutzt, dass der Dampf mehr vom leichter siedenden Stoff enthält als die Flüssigkeit.',VS('Wohin geht was?',{h:'Kopf',c:'g',l:['Leichtsieder','niedrige Temperatur','Kondensator, Rücklauf']},{h:'Sumpf',c:'r',l:['Schwersieder','hohe Temperatur','Verdampfer']})),
  S(14,'In der Kolonne begegnen sich aufsteigender Dampf und herablaufende Flüssigkeit auf vielen Böden.',k=>kolBild(1000,.4,.95,.05,389)),
  S(13,'Zwei Bilanzen genügen, um die Mengen auszurechnen: die Gesamtbilanz und die Bilanz des Leichtsieders.',k=>TITLE('Destillatmenge')+OP(ph(k,.05,.4),FORM(240,104,['D = F · ',{n:'x_F − x_B',d:'x_D − x_B'}],'middle'))+OP(ph(k,.45,.85),FORM(240,190,['D = 1000 ',{n:'kg',d:'h'},' · ',{n:'0,40 − 0,05',d:'0,95 − 0,05'},' = 389 ',{n:'kg',d:'h'}],'middle',undefined,18))),
  S(13,'Nicht jedes Gemisch wird destilliert. Es gibt für jede Aufgabe ein passendes Verfahren.',CARDS('Weitere Verfahren',[['🧪','Extraktion','nach Löslichkeit','b'],['🚿','Absorption','Gas auswaschen','g'],['⚫','Adsorption','an Aktivkohle binden','a'],['💎','Kristallisation','aus der Lösung','y']]))],
 skz:[[SKZ(k=>kolBild(1000,.4,.95,.05,389),'Skizze Kolonne mit Bilanz'),'Aus 1000 kg/h Zulauf mit 40 % Leichtsieder werden 389 kg/h Destillat mit 95 % und 611 kg/h Sumpfprodukt mit 5 %.']],
 sim:{t:'Kolonne bilanzieren',fix:'Zulauf 1000 kg/h. Gerechnet werden nur die Bilanzen. Ob die Kolonne die Reinheiten schafft, hängt von Bodenzahl und Rücklauf ab.',
  c:[{k:'xf',l:'Leichtsieder im Zulauf',u:'%',min:20,max:60,st:5,v:40},{k:'xd',l:'Reinheit Destillat',u:'%',min:85,max:99,st:1,v:90},{k:'xb',l:'Leichtsieder im Sumpf',u:'%',min:1,max:15,st:1,v:10}],
  calc:v=>{const Dm=1000*(v.xf-v.xb)/(v.xd-v.xb),aus=Dm*v.xd/(1000*v.xf)*100;return{Dm,B:1000-Dm,aus}},
  rows:(v,r)=>[['Destillat',nz(r.Dm,0)+' kg/h'],['Sumpfprodukt',nz(r.B,0)+' kg/h'],['Reinheit Destillat',v.xd+' %',v.xd>=95?'g':'r'],['Ausbeute an Leichtsieder',nz(r.aus,1)+' %',r.aus>=95?'g':'r']],
  svg:(v,r)=>kolBild(1000,v.xf/100,v.xd/100,v.xb/100,r.Dm),
  auf:{z:'Reinheit mindestens 95 % und Ausbeute mindestens 95 %.',t:'Der Kunde verlangt mindestens 95 % Reinheit im Destillat. Gleichzeitig sollen mindestens 95 % des Leichtsieders aus dem Zulauf im Destillat landen, damit wenig Wertstoff im Sumpf verloren geht.',h:'Tipp: Die Ausbeute hängt vor allem davon ab, wie viel Leichtsieder im Sumpf bleibt.',ok:(v,r)=>v.xd>=95&&r.aus>=95}}};

/* ---------- Anfahren, Betreiben & Abfahren ---------- */
const fahrBild=CYC('Lebenszyklus einer Kampagne',[['Vorbereiten','prüfen, inertisieren'],['Anfahren','Schritt für Schritt'],['Betreiben','überwachen, übergeben'],['Abfahren','leeren, spülen']],{w:150});
X['Anfahren, Betreiben & Abfahren']={
 v:['Ein Behälter mit Luft wird einmal mit Stickstoff von 1 bar auf 4 bar absolut aufgedrückt und wieder entspannt. Wie viel Sauerstoff ist danach noch drin?',['Keiner mehr','Etwa 5 %','Etwa 10 %','Unverändert 21 %'],1,'Beim Aufdrücken wird die Luft auf ein Viertel verdünnt: 20,9 % ÷ 4 = 5,2 %. Deshalb wiederholt man den Druckwechsel mehrmals.'],
 ein:[S(13,'Jede Kampagne durchläuft dieselben Phasen. Kritisch sind die Übergänge.',fahrBild),
  S(14,'Vor dem Anfahren gehst Du die Checkliste durch. Kein Punkt wird übersprungen.',LIST('Vor dem Anfahren',[['Freigaben zurück, Steckscheiben gezogen','1'],['Armaturenstellung geprüft','2'],['Dichtheit geprüft','3'],['Schutzeinrichtungen in Funktion','4'],['Anlage inertisiert','5']],{h:38})),
  S(13,'Beim Druckwechsel sinkt der Sauerstoffgehalt mit jedem Zyklus um denselben Faktor.',BARS('Sauerstoff bei Druckwechsel 1 bar auf 4 bar',[['Start',20.9,'20,9 %','r'],['nach 1 Zyklus',5.2,'5,2 %','y'],['nach 2 Zyklen',1.3,'1,3 %','g'],['nach 3 Zyklen',0.33,'0,3 %','g']],{lx:150,max:22})),
  S(13,'Die Schichtübergabe ist mündlich und schriftlich. Vier Dinge gehören immer hinein.',LIST('Schichtübergabe',[['Zustand der Anlage','ok'],['Störungen und Abweichungen','ok'],['Laufende Arbeiten, offene Freigaben','ok'],['Überbrückungen','!','mit Frist und Ersatzmaßnahme']]))],
 skz:[[SKZ(fahrBild,'Skizze Phasen einer Kampagne'),'An- und Abfahren sind die Phasen mit den meisten Handeingriffen. Hier zählen Fahrvorschrift und Checkliste besonders.']]};

/* ---------- Instandhaltung & Arbeitsfreigabe ---------- */
const afBild=k=>{let s=TI('Behälter sicher abtrennen und freimessen');
 s+=RC(180,70,130,140,MX('b',10),'var(--ink)',22,2)+L(245,146,'leer, gespült','middle',13,'var(--mute)',600)+P('M40 110H180','var(--ink)',6)+P('M310 110H450','var(--ink)',6);
 const VT=(x,c)=>P(`M${x-12} ${98}L${x+12} ${122}V${98}L${x-12} ${122}Z`,'var(--ink)',1.8,'',MX(c,50));
 s+=VT(80,'r')+L(80,90,'zu','middle',12.5,CC('r'),700)+RC(134,92,8,36,CC('r'),'var(--ink)',1,1.4)+L(138,84,'Steckscheibe','middle',12.5,CC('r'),700)+VT(410,'r')+L(410,90,'zu','middle',12.5,CC('r'),700)+RC(348,92,8,36,CC('r'),'var(--ink)',1,1.4)+L(352,84,'Steckscheibe','middle',12.5,CC('r'),700);
 s+=RC(214,40,62,30,'var(--card)','var(--ink)',6,1.6)+L(245,60,'Mannloch','middle',12,'var(--ink)',600)+BOX(40,176,116,56,'Freimessen','g',14,'O₂, Ex, Tox')+AW(156,196,196,180,CC('g'),2.4)+BOX(336,176,116,56,'Rührwerk','y',14,'freigeschaltet');
 s+=L(240,258,'Erst dann gibt der Betrieb die Arbeit schriftlich frei.','middle',13,'var(--mute)',500);return s};
X['Instandhaltung & Arbeitsfreigabe']={
 v:['Ein Schlosser soll in einen Rührbehälter einsteigen. Die Zulaufarmatur ist geschlossen. Reicht das als Absperrung?',['Ja, zu ist zu.','Nein, die Leitung wird zusätzlich mit einer Steckscheibe abgetrennt.','Ja, wenn ein Schild dranhängt.','Nein, aber ein zweiter Mann am Ventil genügt.'],1,'Armaturen können undicht sein oder versehentlich geöffnet werden. Sicher ist nur die körperliche Trennung, dazu das Freischalten des Rührwerks und das Freimessen.'],
 ein:[S(13,'Keine Arbeit an der Anlage ohne schriftliche Freigabe. Sie regelt, wer was wann unter welchen Bedingungen tut.',FLOW('Arbeitsfreigabe',[['📝','Anmelden','Arbeit beschreiben','b'],['🔒','Sichern','leeren, trennen, messen','y'],['✅','Freigeben','Betrieb unterschreibt','g'],['↩️','Rückgabe','abnehmen, schließen','a']])),
  S(14,'Der Behälter wird geleert, gespült, mit Steckscheiben abgetrennt und freigemessen. Das Rührwerk ist freigeschaltet.',afBild),
  S(13,'Für besondere Arbeiten gibt es zusätzliche Erlaubnisse.',CARDS('Zusätzliche Erlaubnisse',[['🕳️','Befahren','Freimessen, Sicherungsposten','b'],['🔥','Heißarbeit','Brandwache, Nachkontrolle','r'],['⛏️','Erdarbeiten','Leitungen im Boden','y']])),
  S(13,'Fremdfirmen kennen Deine Anlage nicht. Die Einweisung ist Deine Aufgabe.',LIST('Fremdfirmen einweisen',[['Gefahren der Anlage und der Stoffe','1'],['Arbeitsbereich und Verbote','2'],['Alarm, Fluchtwege, Sammelplatz','3'],['Ansprechpartner im Betrieb','4']]))],
 skz:[[SKZ(afBild,'Skizze Absperrung und Freimessen'),'Geschlossene Armaturen und Steckscheiben auf beiden Seiten, freigeschaltetes Rührwerk und Messung der Atmosphäre vor dem Einstieg.']]};

Object.assign(ERK,{
'Wärme & Energiebilanz':['Jede Wärmerechnung ist eine Bilanz: abgegeben gleich aufgenommen. Du musst nur wissen, ob sich die Temperatur ändert oder der Aggregatzustand.','Du nutzt die Bilanz zur Kontrolle: Passt der Dampfverbrauch nicht zur Rechnung, gibt es Verluste, Beläge oder einen defekten Kondensatableiter.',['Verdampfungswärme vergessen, wenn ein Stoff siedet oder kondensiert.','kJ und kW verwechselt: 1 kW sind 3600 kJ je Stunde.','Mit Temperaturen statt Temperaturdifferenzen gerechnet.','Die Wärmekapazität von Wasser für jedes Produkt angesetzt.']],
'Fördern: Pumpen & Rohrleitungen':['Eine Pumpe erzeugt keinen Druck auf Vorrat. Sie stellt sich auf den Punkt ein, an dem ihre Förderhöhe genau den Widerstand der Anlage deckt.','Bei Problemen prüfst Du zuerst die Saugseite: Füllstand im Vorlagebehälter, Sieb, Armaturenstellung, Temperatur des Mediums.',['m³/h nicht in m³/s umgerechnet.','Durchmesser in mm in die Flächenformel eingesetzt.','Den Wirkungsgrad multipliziert statt dividiert.','Verdrängerpumpe ohne Überströmventil gegen geschlossene Armatur gefahren.']],
'Mechanische Trennverfahren':['Mechanische Verfahren trennen Phasen, die schon nebeneinander vorliegen. Sie brauchen keine Wärme und sind deshalb der erste, billigste Schritt.','Wird das Filtrat trüb oder die Filtrationszeit länger, prüfst Du Filtertuch, Kuchenaufbau und ob sich die Teilchengröße aus der Vorstufe verändert hat.',['Drehzahl in 1/min in die Formel für ω eingesetzt statt in 1/s.','Durchmesser statt Radius verwendet.','Feststoffgehalt der Suspension und des Kuchens verwechselt.','Brennbare Stäube im Filter nicht als Explosionsgefahr erkannt.']],
'Thermische Trennverfahren':['Thermische Verfahren erzeugen eine zweite Phase durch Energie. Deshalb sind sie teuer, und der Rücklauf ist der Hebel zwischen Reinheit und Energiekosten.','An der Kolonne beobachtest Du Kopftemperatur, Sumpftemperatur und Druckverlust. Veränderungen zeigen Störungen lange vor der Analyse.',['Anteile in Prozent statt als Dezimalzahl in die Bilanz eingesetzt.','Zähler und Nenner in der Formel für D vertauscht.','Rücklauf und Destillat beim Rücklaufverhältnis verwechselt.','Mehr Heizleistung gegen Fluten eingesetzt.']],
'Anfahren, Betreiben & Abfahren':['Im Normalbetrieb hält die Automatik die Anlage stabil. Beim An- und Abfahren übernimmt der Mensch, deshalb braucht er klare Schritte.','Du sorgst dafür, dass Fahrvorschriften aktuell sind, Checklisten wirklich abgehakt werden und die Übergabe nicht zwischen Tür und Angel stattfindet.',['Überdruck statt Absolutdruck in die Formel für den Druckwechsel eingesetzt.','Nach einem Zyklus Inertisieren für ausreichend gehalten.','Schutzeinrichtungen beim Anfahren überbrückt, weil sie stören.','Offene Freigaben in der Schichtübergabe nicht erwähnt.']],
'Instandhaltung & Arbeitsfreigabe':['Die Arbeitsfreigabe ist eine Übergabe der Verantwortung: Der Betrieb macht die Anlage sicher, der Ausführende hält die Bedingungen ein.','Du gibst nur frei, was Du selbst geprüft hast oder was Dir zuverlässig bestätigt wurde. Bei Schichtwechsel wird die Freigabe neu bestätigt.',['Eine geschlossene Armatur als sichere Absperrung angesehen.','Freigemessen, aber die Messung nach einer Pause nicht wiederholt.','Die Feuererlaubnis ohne Nachkontrolle beendet.','Nach der Arbeit angefahren, obwohl noch Steckscheiben gesetzt waren.']]});
}
