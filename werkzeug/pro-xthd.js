

/* ===== Chemie, Gebiet Thermodynamik: Vermuten, Kurz erklärt, Skizze, Regler mit Auftrag ===== */
/* Hochzahlen: ^{…} in Texten wird hochgestellt (nicht in Zeichnungen) */
{const sup=root=>{const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),a=[];let n;while((n=w.nextNode()))if(n.nodeValue.includes('^{')&&!n.parentNode.closest('svg,textarea,input'))a.push(n);
 a.forEach(n=>{const f=document.createDocumentFragment();n.nodeValue.split(/\^\{([^}]*)\}/).forEach((t,i)=>{if(i%2){const s=document.createElement('sup');s.textContent=t;f.append(s)}else if(t)f.append(t)});n.replaceWith(f)})};
 const vw=document.getElementById('view');if(vw){new MutationObserver(()=>sup(vw)).observe(vw,{childList:true,subtree:true,characterData:true});sup(vw)}}
if(FR==='ch'){const TI=t=>L(240,26,t,'middle',16,'var(--ink)',700),MX=(c,p)=>`color-mix(in srgb,${CC(c)} ${p}%,var(--card))`,
 FO=(x,y,parts,fs=19)=>{const W=parts.map(p=>typeof p==='string'?TW(RAW(p),fs):Math.max(TW(RAW(p.n),fs),TW(RAW(p.d),fs))+12),tot=W.reduce((a,w)=>a+w,0);let cx=x-tot/2,s='';const st='white-space:pre;font-size:'+fs+'px';
  parts.forEach((p,i)=>{if(typeof p==='string')s+=T(cx,y,SUBS(p),'einf','start',st);else{const m=cx+W[i]/2;s+=T(m,y-14,SUBS(p.n),'einf','middle','font-size:'+fs+'px')+`<path d="M${F(cx+1)} ${F(y-5)}h${F(W[i]-2)}" stroke="var(--ink)" stroke-width="1.6"/>`+T(m,y+16,SUBS(p.d),'einf','middle','font-size:'+fs+'px')}cx+=W[i]});return s},
 LI=(x1,y1,x2,y2,c='var(--ink)',w=2,da='')=>`<path d="M${F(x1)} ${F(y1)}L${F(x2)} ${F(y2)}" stroke="${c}" stroke-width="${w}" fill="none" stroke-linecap="round"${da?` stroke-dasharray="${da}"`:''}/>`;

/* ---------- Gasgesetze: liegender Druckbehälter mit Manometer und Thermometer ---------- */
const kesselBild=(pe,t,ti)=>{const w=Math.min(1,Math.max(0,(t-0)/80)),hot=Math.round(8+w*34),zu=pe>11;let s=TI(ti||'Abgesperrter Druckbehälter');
 s+=`<defs><linearGradient id="kg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${MX('r',hot+16)}"/><stop offset=".5" stop-color="${MX('r',hot)}"/><stop offset="1" stop-color="${MX('r',hot+22)}"/></linearGradient></defs>`;
 s+=`<path d="M92 114H300A24 50 0 0 1 300 214H92A24 50 0 0 1 92 114Z" fill="url(#kg1)" stroke="var(--ink)" stroke-width="2.4"/><path d="M300 114A24 50 0 0 0 300 214" fill="none" stroke="var(--ink)" stroke-width="1.4" opacity=".55"/>`;
 s+=`<path d="M112 216l-10 26h30l-8-26M270 216l-8 26h30l-10-26" fill="var(--mute)" stroke="var(--ink)" stroke-width="1.6"/>`+LI(60,243,340,243,'var(--ink)',2);
 /* Teilchen: Pfeile werden mit der Temperatur länger */
 const P=[[112,146,1,.4],[150,188,-.6,-.8],[186,138,.9,.5],[222,184,-1,.2],[258,150,.3,1],[286,186,-.8,-.6],[136,170,.7,-.7],[240,128,-.4,.9]],pl=7+w*17;
 P.forEach(q=>{const n=Math.hypot(q[2],q[3]);s+=`<circle cx="${q[0]}" cy="${q[1]}" r="4.2" fill="var(--flow)"/>`+LI(q[0],q[1],q[0]+q[2]/n*pl,q[1]+q[3]/n*pl,'var(--flow)',2)});
 /* Manometer */
 const a=Math.PI*(1.15-1.3*Math.min(1,pe/16)),mx=196,my=74;
 s+=LI(mx,100,mx,114,'var(--ink)',5)+`<circle cx="${mx}" cy="${my}" r="26" fill="var(--card)" stroke="${zu?'var(--red)':'var(--ink)'}" stroke-width="${zu?3.4:2.4}"/>`;
 for(let i=0;i<=8;i++){const b=Math.PI*(1.15-1.3*i/8);s+=LI(mx+21*Math.cos(b),my-21*Math.sin(b),mx+25*Math.cos(b),my-25*Math.sin(b),'var(--ink)',1.4)}
 {const b=Math.PI*(1.15-1.3*11/16);s+=LI(mx+17*Math.cos(b),my-17*Math.sin(b),mx+25*Math.cos(b),my-25*Math.sin(b),'var(--red)',3)}
 s+=LI(mx,my,mx+19*Math.cos(a),my-19*Math.sin(a),'var(--red)',2.6)+`<circle cx="${mx}" cy="${my}" r="3" fill="var(--ink)"/>`;
 s+=L(232,66,'Überdruck','start',13,'var(--mute)',500)+L(232,86,nz(pe,1)+' bar','start',17,zu?'var(--red)':'var(--ink)',700);
 /* Sicherheitsventil */
 s+=LI(120,104,120,114,'var(--ink)',5)+`<path d="M110 104h20l-6-16h-8z" fill="var(--amber)" stroke="var(--ink)" stroke-width="1.6"/>`+L(120,76,zu?'bläst ab':'','middle',13,'var(--red)',700)+(zu?LI(113,84,107,70,'var(--red)',2)+LI(127,84,133,70,'var(--red)',2):'');
 /* Thermometer */
 const ty=206-110*w;s+=RC(398,84,14,126,'var(--card)','var(--ink)',7,2)+`<circle cx="405" cy="216" r="13" fill="var(--red)" stroke="var(--ink)" stroke-width="2"/>`+`<rect x="401.5" y="${F(ty)}" width="7" height="${F(210-ty)}" fill="var(--red)"/>`;
 s+=L(405,66,'Temperatur','middle',13,'var(--mute)',500)+L(405,254,nz(t,0)+' °C','middle',17,'var(--ink)',700);return s};
X['Gasgesetze']={
 v:['Ein abgesperrter Stickstoffbehälter zeigt morgens bei 20 °C genau 10 bar Überdruck. Mittags hat er 40 °C. Was zeigt das Manometer dann?',['Weiter 10 bar','Etwa 10,8 bar','20 bar','Etwa 13 bar'],1,'Absolut sind es 11 bar · 313 K : 293 K = 11,75 bar, also 10,75 bar Überdruck. Mit Grad Celsius gerechnet käme fälschlich das Doppelte heraus.'],
 ein:[S(13,'Drei Größen beschreiben ein eingeschlossenes Gas. Ändert sich eine, ändern sich die anderen mit.',CARDS('Zustand eines Gases',[['🧭','Druck p','absolut, in bar','b'],['📦','Volumen V','in l oder m³','y'],['🌡️','Temperatur T','in Kelvin','r']])),
  S(14,'Wird der Behälter wärmer, prallen die Teilchen heftiger gegen die Wand. Der Druck steigt.',k=>{const t=20+50*ph(k,.15,.85);return kesselBild(11*(t+273)/293-1,t,'Der Behälter wird warm')}),
  S(13,'Gerechnet wird mit absolutem Druck und mit Kelvin.',k=>TITLE('Gleiches Volumen')+OP(ph(k,.05,.4),FO(240,104,['p_2 = p_1 · ',{n:'T_2',d:'T_1'}],24))+OP(ph(k,.45,.85),FO(240,186,['11 bar · ',{n:'343 K',d:'293 K'},' = 12,9 bar'],19))),
  S(13,'Drei Schritte schützen vor den häufigsten Fehlern.',LIST('So rechnest Du sicher',[['Überdruck + 1 bar = absoluter Druck','1'],['Grad Celsius + 273 = Kelvin','2'],['Am Ende zurück in Überdruck rechnen','3']]))],
 skz:[[SKZ(k=>kesselBild(8,20),'Skizze Druckbehälter mit Manometer und Thermometer'),'Das Manometer zeigt den Überdruck gegenüber der Umgebung. Die rote Marke ist der zulässige Betriebsdruck, darüber öffnet das Sicherheitsventil.']],
 sim:{t:'Stickstoffbehälter in der Sommerhitze',fix:'Abgesperrter Behälter, gefüllt bei 20 °C. Zulässiger Betriebsdruck: 11 bar Überdruck.',
  c:[{k:'pf',l:'Fülldruck bei 20 °C',u:'bar',min:6,max:11,st:0.5,v:10},{k:'t',l:'Temperatur',u:'°C',min:0,max:80,st:5,v:20}],
  calc:v=>{const pa=(v.pf+1)*(v.t+273)/293;return{pa,pe:pa-1}},
  rows:(v,r)=>[['Überdruck im Behälter',nz(r.pe,2)+' bar',r.pe<=11?'g':'r'],['Absoluter Druck',nz(r.pa,2)+' bar'],['Temperatur',(v.t+273)+' K']],
  svg:(v,r)=>kesselBild(r.pe,v.t),
  auf:{z:'Bei 60 °C höchstens 11 bar, Fülldruck mindestens 8 bar.',t:'Der Behälter steht im Sommer unter dem Hallendach und wird bis zu 60 °C warm. Wähle den Fülldruck (mindestens 8 bar, sonst reicht der Vorrat nicht) so, dass der Druck auch bei 60 °C nicht über 11 bar steigt.',h:'Tipp: Stelle zuerst die Temperatur auf 60 °C und senke dann den Fülldruck.',ok:(v,r)=>v.t>=60&&r.pe<=11&&v.pf>=8}}};

/* ---------- Erster Hauptsatz: Zylinder mit Kolben ---------- */
const zylBild=k=>{const yp=128-34*k;let s=TI('Wärme rein, Arbeit raus');
 s+=RC(182,yp+12,116,206-yp-12,MX('r',14+22*k),'none',0,0)+`<path d="M180 62V208H300V62" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round"/>`;
 s+=RC(183,yp,114,12,'var(--mute)','var(--ink)',2,1.8)+RC(232,yp-44,16,44,MX('m',55),'var(--ink)',0,1.6)+RC(212,yp-66,56,22,'var(--amber)','var(--ink)',3,1.8);
 s+=L(240,176,'innere Energie U','middle',13.5,'var(--ink)',600)+L(240,194,'steigt','middle',13.5,'var(--ink)',600);
 s+=AW(96,164,176,164,CC('r'),4)+L(136,150,'Wärme Q','middle',15,CC('r'),700);
 s+=AW(328,yp-18,328,yp-62,'var(--flow)',4)+L(342,yp-34,'Arbeit W','start',15,'var(--flow)',700);
 for(let i=0;i<3;i++){const x=214+i*26;s+=`<path d="M${x} 244c-9 -11 2 -14 0 -26c9 9 9 17 0 26z" fill="var(--amber)" stroke="${CC('r')}" stroke-width="1.4"/>`}
 s+=LI(196,246,284,246,'var(--ink)',3);return s};
X['Erster Hauptsatz']={
 v:['Stickstoff strömt aus einer Druckleitung durch eine kleine Turbine und treibt sie an. Was passiert mit seiner Temperatur?',['Sie steigt','Sie sinkt','Sie bleibt gleich','Sie schwankt ohne Regel'],1,'Das Gas leistet Arbeit. Die Energie dafür kommt aus seiner inneren Energie, es kühlt ab.'],
 ein:[S(14,'Energie verschwindet nicht. Was als Wärme hineingeht, bleibt im Gas oder kommt als Arbeit wieder heraus.',k=>zylBild(ph(k,.15,.85))),
  S(13,'Der erste Hauptsatz ist eine Bilanz, wie ein Kontoauszug für Energie.',k=>TITLE('Erster Hauptsatz')+OP(ph(k,.05,.4),FO(240,104,['Q = ΔU + W_ab'],24))+OP(ph(k,.45,.85),FO(240,180,['50 kJ = 30 kJ + 20 kJ'],20))),
  S(13,'Verdichten macht ein Gas heiß, Entspannen kühlt es ab.',VS('Arbeit ändert die Temperatur',{h:'Verdichten',c:'r',l:['Arbeit wird zugeführt','innere Energie steigt','Gas wird heiß']},{h:'Entspannen',c:'b',l:['Gas gibt Arbeit ab','innere Energie sinkt','Gas kühlt ab']})),
  S(13,'Auch bei Reaktionen stimmt die Bilanz: Wärme muss abgeführt oder zugeführt werden.',CARDS('Wärme bei Reaktionen',[['🔥','Exotherm','Wärme wird frei: kühlen','r'],['❄️','Endotherm','Wärme wird gebraucht: heizen','b']]))],
 skz:[[SKZ(k=>zylBild(.6),'Skizze Zylinder mit Kolben'),'Die zugeführte Wärme erwärmt das Gas und hebt den Kolben mit der Last. Beides zusammen ergibt genau die zugeführte Energie.']]};

/* ---------- Zustandsänderungen: p-V-Diagramm ---------- */
const pvBild=(e,n,ti)=>{const c=CHT({xm:10,ym:20,xt:[2,4,6,8,10],yt:[5,10,15,20],xl:'Volumen in l',yl:'Druck in bar (absolut)',Y1:62,X1:440});let s=c.s+TI(ti||'Verdichten im p-V-Diagramm');
 const iso=[],ku=[],V2=10/e;for(let V=10;V>=0.5-1e-9;V-=0.25)iso.push([c.px(V),c.py(10/V)]);
 for(let i=0;i<=40;i++){const V=10-(10-V2)*i/40;ku.push([c.px(V),c.py(Math.pow(10/V,n))])}
 s+=`<path d="M${ku.map(p=>F(p[0])+' '+F(p[1])).join('L')}L${F(c.px(V2))} ${F(c.py(0))}L${F(c.px(10))} ${F(c.py(0))}Z" fill="${MX('r',20)}"/>`;
 s+=PL(iso,'var(--mute)',2,'6 5')+PL(ku,CC('r'),3.4);
 const p2=Math.pow(e,n);s+=DOT(c.px(10),c.py(1),'var(--ink)',6)+L(c.px(10)-2,c.py(1)-12,'1','end',15,'var(--ink)',700)+DOT(c.px(V2),c.py(p2),CC('r'),7)+L(c.px(V2)-10,c.py(Math.min(p2,20))-10,'2','end',15,CC('r'),700);
 s+=LI(300,74,328,74,'var(--mute)',2,'6 5')+L(334,79,'gleiche Temperatur','start',13,'var(--mute)',600)+LI(300,94,328,94,CC('r'),3.4)+L(334,99,'Dein Verdichter','start',13,CC('r'),700)+RC(300,108,28,13,MX('r',20),'none',2,0)+L(334,119,'Arbeit','start',13,'var(--ink)',600);return s};
X['Zustandsänderungen']={
 v:['Ein Kolbenverdichter saugt Luft mit 20 °C an und verdichtet sie schnell und ohne Kühlung auf ein Sechstel des Volumens. Wie heiß wird die Luft etwa?',['Etwa 40 °C','Etwa 120 °C','Über 300 °C','Sie bleibt bei 20 °C'],2,'Ohne Wärmeabfuhr steckt die ganze Verdichtungsarbeit in der Luft: rund 330 °C. Deshalb werden Verdichter gekühlt.'],
 ein:[S(13,'Vier Fälle. Der Name sagt, was gleich bleibt.',CARDS('Was bleibt gleich?',[['📦','Isochor','Volumen','y'],['⚖️','Isobar','Druck','b'],['🌡️','Isotherm','Temperatur','g'],['🧥','Adiabat','keine Wärme rein oder raus','r']],{cols:2})),
  S(14,'Beim schnellen Verdichten ohne Kühlung steigt der Druck steiler als bei gleicher Temperatur.',k=>pvBild(1.2+4.8*ph(k,.1,.85),1.4)),
  S(13,'Je schlechter die Kühlung, desto heißer wird das Gas.',BARS('Endtemperatur nach Verdichten auf ein Sechstel',[['gut gekühlt',20,'20 °C','g'],['teils gekühlt',146,'146 °C','y'],['ungekühlt',327,'327 °C','r']],{lx:150})),
  S(13,'Für hohe Drücke verdichtet man in Stufen und kühlt dazwischen.',FLOW('Zweistufig verdichten',[['1️⃣','Stufe 1','verdichten','r'],['❄️','Zwischenkühler','abkühlen','b'],['2️⃣','Stufe 2','verdichten','r']],{note:'weniger Arbeit, niedrigere Temperatur'}))],
 skz:[[SKZ(k=>pvBild(6,1.4),'Skizze p-V-Diagramm'),'Von Punkt 1 nach Punkt 2 wird das Gas zusammengedrückt. Die gestrichelte Kurve gilt für gleiche Temperatur, die farbige Fläche ist die Arbeit.']],
 sim:{t:'Stickstoff verdichten',fix:'Ansaugzustand: 1 bar absolut, 20 °C. Exponent 1: ideal gekühlt (isotherm). Exponent 1,4: ungekühlt (adiabat). Reale Verdichter liegen dazwischen.',
  c:[{k:'e',l:'Verdichtungsverhältnis',u:'',min:2,max:8,st:0.5,v:4},{k:'n',l:'Exponent (Kühlung)',u:'',opts:[1,1.2,1.4],v:2}],
  calc:v=>{const p2=Math.pow(v.e,v.n),T2=293*Math.pow(v.e,v.n-1);return{p2,t2:T2-273}},
  rows:(v,r)=>[['Enddruck (absolut)',nz(r.p2,1)+' bar',r.p2>=7?'g':'r'],['Endtemperatur',nz(r.t2,0)+' °C',r.t2<=200?'g':'r'],['Endvolumen von 10 l',nz(10/v.e,2)+' l']],
  svg:(v,r)=>pvBild(v.e,v.n,'Enddruck '+nz(r.p2,1)+' bar, '+nz(r.t2,0)+' °C'),
  auf:{z:'Mindestens 7 bar absolut, höchstens 200 °C.',t:'Der Verdichter soll in einer Stufe mindestens 7 bar absolut liefern. Damit Dichtungen und Schmieröl nicht leiden, darf das Gas am Ende höchstens 200 °C heiß sein.',h:'Tipp: Ohne Kühlung schaffst Du den Druck nur mit zu hoher Temperatur. Probiere einen kleineren Exponenten.',ok:(v,r)=>r.p2>=7&&r.t2<=200}}};

/* ---------- Wärmeleitung & Dämmung: Wandquerschnitt ---------- */
const wandBild=(d,to,ti,q,tt)=>{const w=40+d*.5,x0=150,x1=x0+w,Y=t=>214-100*Math.min(1,Math.max(0,(t-20)/580)),heiss=to>50;let s=TI(tt||'Gedämmte Behälterwand');
 s+=RC(24,56,x0-24,170,MX('r',10+ti/600*26),'none',0,0)+RC(x1,56,456-x1,170,MX('b',7),'none',0,0);
 s+=RC(x0,56,w,170,MX('y',34),'var(--ink)',0,1.6);for(let y=70;y<220;y+=14)s+=`<path d="M${x0+4} ${y}q${F(w/8)} -6 ${F(w/4-2)} 0t${F(w/4-2)} 0t${F(w/4-2)} 0t${F(w/4-2)} 0" fill="none" stroke="var(--mute)" stroke-width="1" opacity=".7"/>`;
 s+=RC(x0-7,56,7,170,'var(--mute)','var(--ink)',0,1.4)+RC(x1,56,4,170,MX('m',60),'var(--ink)',0,1.2);
 s+=LI(x0,Y(ti),x1,Y(to),CC('r'),3.4)+LI(40,Y(ti),x0,Y(ti),CC('r'),3.4)+LI(x1,Y(to),x1+36,Y(20)-2,CC('r'),3.4)+LI(x1+36,Y(20)-2,440,Y(20)-2,CC('r'),3.4);
 const na=Math.max(1,Math.min(5,Math.round(q/250)+1));for(let i=0;i<na;i++){const y=160+(i-(na-1)/2)*18;s+=AW(x1+10,y,x1+10+Math.min(58,18+q/30),y,CC('y'),3)}
 s+=L(34,76,'innen','start',13,'var(--mute)',500)+L(34,96,nz(ti,0)+' °C','start',17,CC('r'),700);
 s+=L(446,76,'Oberfläche','end',13,'var(--mute)',500)+L(446,96,nz(to,0)+' °C','end',17,heiss?'var(--red)':'var(--ok)',700);
 s+=LI(x0,238,x1,238,'var(--ink)',1.4)+LI(x0,232,x0,244,'var(--ink)',1.4)+LI(x1,232,x1,244,'var(--ink)',1.4)+L((x0+x1)/2,258,'Dämmung '+nz(d,0)+' mm','middle',14,'var(--ink)',600);return s};
const wandR=(d,lam,ti)=>{const R=d/1000/lam+0.1,q=(ti-20)/R;return{q,to:20+q/10}};
X['Wärmeleitung & Dämmung']={
 v:['Die Dämmung einer Dampfleitung ist an einer beschädigten Stelle vom Regen durchnässt. Was passiert dort?',['Nichts, Dämmung bleibt Dämmung','Der Wärmeverlust steigt deutlich','Der Wärmeverlust sinkt, weil Wasser kühlt','Die Leitung friert ein'],1,'Dämmstoffe wirken durch eingeschlossene ruhende Luft. Wasser leitet die Wärme rund zwanzigmal besser. Außerdem rostet das Rohr unter der nassen Dämmung.'],
 ein:[S(13,'Stoffe leiten Wärme sehr unterschiedlich gut.',BARS('Wärmeleitfähigkeit λ in W/(m · K)',[['Kupfer',380,'380','r'],['Stahl',50,'50','y'],['Beton',2,'2','m'],['Mineralwolle',0.04,'0,04','g']],{lx:140})),
  S(14,'Je dicker die Dämmung, desto weniger Wärme geht durch und desto kühler bleibt die Oberfläche.',k=>{const d=20+180*ph(k,.1,.85),r=wandR(d,.04,400);return wandBild(d,r.to,400,r.q)}),
  S(13,'Der Wärmestrom wächst mit Fläche und Temperaturdifferenz und sinkt mit der Dicke.',k=>TITLE('Wärmestrom durch die Dämmung')+OP(ph(k,.05,.4),FO(240,104,['Q̇ = ',{n:'λ · A · ΔT',d:'d'}],24))+OP(ph(k,.45,.85),FO(240,190,[{n:'0,04 W/(m · K) · 1 m² · 300 K',d:'0,1 m'},' = 120 W'],17))),
  S(13,'Dämmung wirkt nur, wenn sie trocken und lückenlos ist.',LIST('Dämmung im Betrieb',[['Trocken halten: Nasse Dämmung wirkt nicht','1'],['Lücken an Flanschen und Armaturen schließen','2'],['Heiße Oberflächen abdecken oder absperren','3']]))],
 skz:[[SKZ(k=>{const r=wandR(100,.04,400);return wandBild(100,r.to,400,r.q)},'Skizze gedämmte Wand mit Temperaturverlauf'),'Die rote Linie zeigt die Temperatur: innen heiß, in der Dämmung fällt sie stark ab, außen bleibt nur ein kleiner Rest über der Umgebung.']],
 sim:{t:'Behälterwand dämmen',fix:'Ebene Wand, Umgebung 20 °C, Wärmeübergang außen 10 [[W||m² · K]]. Dauerbetrieb mit 8760 h im Jahr, Wärme kostet 0,08 € je kWh. Richtwerte für λ: 0,04 Mineralwolle, 0,1 Calciumsilikat, 0,8 Mauerwerk.',
  c:[{k:'d',l:'Dicke der Dämmung',u:'mm',min:20,max:300,st:10,v:30},{k:'l',l:'Wärmeleitfähigkeit λ',u:'W/(m · K)',opts:[0.04,0.1,0.8],v:1},{k:'ti',l:'Temperatur innen',u:'°C',min:100,max:600,st:50,v:300}],
  calc:v=>{const r=wandR(v.d,v.l,v.ti);return{q:r.q,to:r.to,ko:r.q/1000*8760*0.08}},
  rows:(v,r)=>[['Oberflächentemperatur',nz(r.to,0)+' °C',r.to<=50?'g':'r'],['Wärmeverlust je m²',nz(r.q,0)+' W'],['Kosten je m² im Jahr',nz(r.ko,0)+' €']],
  svg:(v,r)=>wandBild(v.d,r.to,v.ti,r.q),
  auf:{z:'Bei 400 °C innen höchstens 50 °C an der Oberfläche.',t:'Ein Behälter wird mit mindestens 400 °C betrieben. Mitarbeiter gehen direkt daran vorbei, deshalb soll die Oberfläche höchstens 50 °C warm werden. Finde eine Dämmung, die das schafft.',h:'Tipp: Ein Dämmstoff mit kleinem λ braucht viel weniger Dicke.',ok:(v,r)=>v.ti>=400&&r.to<=50}}};

/* ---------- Konvektion & Strahlung: Thermografie ---------- */
const camR=(t,eo,ek)=>{const T4=Math.pow(t+273,4),U4=Math.pow(293,4),W=eo*T4+(1-eo)*U4;return Math.pow((W-(1-ek)*U4)/ek,.25)-273};
const camBild=(t,eo,ek,ta,tt)=>{const ok=Math.abs(ta-t)<=2,fc=ok?'var(--ok)':'var(--red)';let s=TI(tt||'Messen mit der Wärmebildkamera');
 /* Rohr mit Flansch */
 s+=`<defs><linearGradient id="cg1" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${MX('m',70)}"/><stop offset=".4" stop-color="${MX('m',18)}"/><stop offset="1" stop-color="${MX('m',62)}"/></linearGradient></defs>`;
 s+=RC(372,52,44,172,'url(#cg1)','var(--ink)',0,1.8)+RC(356,116,76,16,'url(#cg1)','var(--ink)',3,1.8)+RC(356,136,76,16,'url(#cg1)','var(--ink)',3,1.8);
 s+=L(394,244,'tatsächlich '+nz(t,0)+' °C','middle',14,'var(--ink)',700)+L(394,262,'Oberfläche ε = '+nt(eo,2),'middle',13,'var(--mute)',600);
 /* Strahlung: mehr Wellen bei größerem Emissionsgrad */
 const nw=Math.max(1,Math.round(eo*5));for(let i=0;i<nw;i++){const y=134+(i-(nw-1)/2)*17;s+=`<path d="M350 ${F(y)}q-9 -8 -18 0t-18 0t-18 0t-18 0t-18 0t-18 0t-18 0" fill="none" stroke="${CC('r')}" stroke-width="2.4"/><path d="M216 ${F(y)}l10 -6v12z" fill="${CC('r')}"/>`}
 /* Kamera */
 s+=RC(118,160,30,50,MX('m',45),'var(--ink)',6,1.8)+RC(96,104,92,62,MX('m',45),'var(--ink)',8,1.8)+RC(188,118,20,34,MX('m',75),'var(--ink)',3,1.6)+RC(112,92,34,12,MX('m',75),'var(--ink)',3,1.4)+`<circle cx="120" cy="122" r="5" fill="${CC('r')}"/>`;
 s+=RC(24,44,150,48,'var(--card)',fc,10,2.6)+L(36,63,'Anzeige','start',13,'var(--mute)',500)+L(36,84,nz(ta,0)+' °C','start',20,fc,700)+L(164,84,'ε = '+nt(ek,2),'end',13,'var(--mute)',600);
 s+=L(24,232,ok?'Anzeige stimmt':'Anzeige '+nz(Math.abs(ta-t),0)+' K zu '+(ta<t?'niedrig':'hoch'),'start',14,fc,700);return s};
X['Konvektion & Strahlung']={
 v:['Du misst mit der Wärmebildkamera zwei gleich heiße Rohre: eines schwarz lackiert, eines aus blankem Edelstahl. Die Kamera ist für Lack eingestellt. Was zeigt sie?',['Beide Rohre gleich warm','Das blanke Rohr scheint viel kälter','Das blanke Rohr scheint viel heißer','Das lackierte Rohr scheint kälter'],1,'Blankes Metall strahlt wenig und spiegelt die kühle Umgebung. Die Kamera zeigt dort zu niedrig an.'],
 ein:[S(13,'Wärme hat drei Wege.',CARDS('Drei Wege der Wärme',[['🧱','Leitung','im Stoff','y'],['💨','Konvektion','mit strömendem Stoff','b'],['☀️','Strahlung','ohne Stoff','r']])),
  S(13,'Bewegte Luft nimmt mehr Wärme mit als ruhende, Wasser noch viel mehr.',BARS('Wärmeübergang α in W/(m² · K), Richtwerte',[['ruhende Luft',8,'5 bis 10','m'],['Luft mit Lüfter',60,'20 bis 100','b'],['strömendes Wasser',1000,'über 1000','g']],{lx:170})),
  S(15,'Die Kamera rechnet Strahlung in Temperatur um. Stimmt der eingestellte Emissionsgrad nicht, stimmt die Anzeige nicht.',k=>{const ek=k<.55?.95:.3;return camBild(100,.3,ek,camR(100,.3,ek))}),
  S(13,'Mit vier Regeln misst Du zuverlässig.',LIST('Thermografie richtig einsetzen',[['Emissionsgrad passend einstellen','1'],['Blanke Stellen mit mattem Lack oder Band versehen','2'],['Spiegelungen vermeiden','3'],['Mit Kontaktthermometer vergleichen','4']]))],
 skz:[[SKZ(k=>camBild(100,.95,.95,100),'Skizze Wärmebildkamera vor einem Rohr'),'Die Kamera fängt die Wärmestrahlung der Oberfläche auf. Wie stark eine Fläche strahlt, hängt von ihrer Temperatur und von ihrem Emissionsgrad ab.']],
 sim:{t:'Wärmebildkamera einstellen',fix:'Umgebung 20 °C. Vereinfacht: Die Kamera sieht die Strahlung der Oberfläche und die gespiegelte Umgebung. Richtwerte für ε: blankes Metall 0,1 bis 0,3, oxidiertes Metall 0,6, Lack 0,95.',
  c:[{k:'t',l:'Tatsächliche Temperatur',u:'°C',min:40,max:150,st:5,v:80},{k:'eo',l:'Emissionsgrad der Oberfläche',u:'',opts:[0.1,0.3,0.6,0.95],v:1},{k:'ek',l:'Emissionsgrad in der Kamera',u:'',opts:[0.1,0.3,0.6,0.95],v:3}],
  calc:v=>{const ta=camR(v.t,v.eo,v.ek);return{ta,ab:ta-v.t}},
  rows:(v,r)=>[['Anzeige der Kamera',nz(r.ta,0)+' °C',Math.abs(r.ab)<=2?'g':'r'],['Abweichung',nz(r.ab,0)+' K'],['Tatsächliche Temperatur',v.t+' °C']],
  svg:(v,r)=>camBild(v.t,v.eo,v.ek,r.ta),
  auf:{z:'Blanker Flansch (ε = 0,3), mindestens 100 °C: Anzeige höchstens 2 K daneben.',t:'Ein blanker Edelstahlflansch mit dem Emissionsgrad 0,3 ist mindestens 100 °C heiß. Stelle die Kamera so ein, dass ihre Anzeige höchstens 2 K von der tatsächlichen Temperatur abweicht.',h:'Tipp: Die Kamera muss denselben Emissionsgrad kennen, den die Oberfläche hat.',ok:(v,r)=>v.eo===0.3&&v.t>=100&&Math.abs(r.ab)<=2}}};

/* ---------- Kreisprozesse: Energiefluss ---------- */
const sanBild=(to,tu,e,tt)=>{const B=84,hw=B*e,ha=B-hw;let s=TI(tt||'Energiefluss einer Wärmekraftmaschine');
 s+=RC(20,84,96,108,MX('r',30),CC('r'),10,2)+L(68,128,'heiße Seite','middle',13,'var(--ink)',600)+L(68,152,nz(to,0)+' °C','middle',17,CC('r'),700);
 s+=RC(116,96,150,B,MX('r',45),'none',0,0)+RC(322,96,96,hw,MX('g',55),'none',0,0)+`<path d="M418 ${F(96-8)}L446 ${F(96+hw/2)}L418 ${F(96+hw+8)}Z" fill="${MX('g',55)}"/>`;
 s+=RC(322-ha,180,ha,26,MX('b',45),'none',0,0);
 s+=RC(262,84,64,108,'var(--card)','var(--ink)',10,2.2)+L(294,134,'Ma-','middle',14,'var(--ink)',700)+L(294,152,'schine','middle',14,'var(--ink)',700);
 s+=RC(218,206,152,44,MX('b',22),'var(--flow)',10,2)+L(294,225,'kalte Seite','middle',13,'var(--ink)',600)+L(294,243,nz(tu,0)+' °C','middle',15,'var(--flow)',700);
 s+=L(190,86,'Wärme 100 %','middle',14,CC('r'),700)+L(380,86,'Arbeit '+nz(e*100,0)+' %','middle',14,'var(--ok)',700)+L(208,233,'Abwärme '+nz(100-e*100,0)+' %','end',14,'var(--flow)',700);return s};
X['Kreisprozesse & Wirkungsgrad']={
 v:['Ein Dampfkraftwerk gibt mehr als die Hälfte der Brennstoffwärme über den Kühlturm ab. Ist das ein Konstruktionsfehler?',['Ja, gute Technik käme ohne Abwärme aus','Nein, ohne Abwärme an eine kalte Seite läuft kein Kreisprozess','Ja, der Kühlturm ist zu groß gebaut','Nein, die Wärme wird im Kühlturm gespeichert'],1,'Zweiter Hauptsatz: Wärme lässt sich nie vollständig in Arbeit umwandeln. Die Obergrenze setzt der Carnot-Wirkungsgrad.'],
 ein:[S(13,'Im Kreisprozess durchläuft der Arbeitsstoff immer wieder dieselben Schritte.',FLOW('Kreisprozess im Dampfkraftwerk',[['💧','Pumpe','Druck erhöhen','b'],['🔥','Kessel','verdampfen','r'],['🌀','Turbine','Arbeit abgeben','g'],['❄️','Kondensator','Abwärme abgeben','b']])),
  S(14,'Die zugeführte Wärme teilt sich auf: ein Teil wird Arbeit, der Rest geht als Abwärme zur kalten Seite.',k=>sanBild(550,30,.15+.3*ph(k,.15,.85))),
  S(13,'Die Obergrenze hängt nur von den beiden Temperaturen in Kelvin ab.',k=>TITLE('Carnot-Wirkungsgrad')+OP(ph(k,.05,.4),FO(240,104,['η_C = 1 − ',{n:'T_u',d:'T_o'}],24))+OP(ph(k,.45,.85),FO(240,190,['1 − ',{n:'303 K',d:'823 K'},' = 0,63'],20))),
  S(13,'Reale Maschinen bleiben deutlich unter der Obergrenze.',BARS('Wirkungsgrade, grobe Richtwerte',[['Ottomotor',35,'35 %','y'],['Dieselmotor',40,'40 %','y'],['Dampfkraftwerk',45,'45 %','b'],['Gas und Dampf',60,'60 %','g']],{max:100,lx:160}))],
 skz:[[SKZ(k=>sanBild(550,30,.4),'Skizze Energiefluss'),'Die Breite der Bänder zeigt die Energie: Von der zugeführten Wärme wird ein Teil zu Arbeit, der Rest fließt als Abwärme zur kalten Seite.']],
 sim:{t:'Wärmekraftmaschine auslegen',fix:'Der Gütegrad sagt, welchen Anteil der Carnot-Obergrenze die reale Maschine erreicht.',
  c:[{k:'to',l:'Obere Temperatur',u:'°C',min:200,max:1200,st:50,v:400},{k:'tu',l:'Untere Temperatur',u:'°C',min:20,max:120,st:10,v:40},{k:'g',l:'Gütegrad',u:'',opts:[0.5,0.6,0.7],v:1}],
  calc:v=>{const ec=1-(v.tu+273)/(v.to+273);return{ec,e:ec*v.g}},
  rows:(v,r)=>[['Realer Wirkungsgrad',nz(r.e*100,1)+' %',r.e>=.4?'g':'r'],['Carnot-Obergrenze',nz(r.ec*100,1)+' %'],['Abwärme',nz(100-r.e*100,1)+' %']],
  svg:(v,r)=>sanBild(v.to,v.tu,r.e),
  auf:{z:'Mindestens 40 % Wirkungsgrad, höchstens 900 °C.',t:'Die Maschine soll mindestens 40 % der zugeführten Wärme in Arbeit umwandeln. Der Werkstoff hält auf der heißen Seite höchstens 900 °C aus.',h:'Tipp: Hilfreich sind eine heißere obere und eine kühlere untere Seite.',ok:(v,r)=>r.e>=.4&&v.to<=900}}};

/* ---------- Kältemaschine & Wärmepumpe: Kältekreis ---------- */
const kkBild=(tu,to,cop,Q,P)=>{const R=CC('r'),B='var(--flow)';let s='';
 s+=`<path d="M330 78H396V122" fill="none" stroke="${R}" stroke-width="5"/><path d="M150 78H84V132" fill="none" stroke="${R}" stroke-width="5"/><path d="M84 160V206H150" fill="none" stroke="${B}" stroke-width="5"/><path d="M330 206H396V166" fill="none" stroke="${B}" stroke-width="5"/>`;
 s+=RC(150,60,180,36,MX('r',30),R,8,2)+L(240,84,'Verflüssiger '+nz(to,0)+' °C','middle',14,'var(--ink)',700);
 s+=RC(150,188,180,36,MX('b',26),B,8,2)+L(240,212,'Verdampfer '+nz(tu,0)+' °C','middle',14,'var(--ink)',700);
 s+=`<circle cx="396" cy="144" r="22" fill="var(--card)" stroke="var(--ink)" stroke-width="2.4"/><path d="M382 158L390 128M410 158L402 128" stroke="var(--ink)" stroke-width="2" fill="none"/>`+L(366,149,'Verdichter','end',13,'var(--ink)',600);
 s+=`<path d="M72 132H96L72 160H96Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2.2" stroke-linejoin="round"/>`+L(62,150,'Ventil','end',13,'var(--ink)',600);
 s+=`<path d="M366 72l12 6-12 6zM120 84l-12-6 12-6zM78 184l6 12 6-12zM402 182l-6-12-6 12z" fill="var(--ink)"/>`;
 s+=AW(240,58,240,30,R,5)+L(254,44,'Heizwärme '+nz(Q,0)+' kW','start',14,R,700);
 s+=AW(240,258,240,228,B,5)+L(254,252,'aus der Quelle '+nz(Q-P,1)+' kW','start',14,B,700);
 s+=AW(466,144,422,144,'#a16207',5)+L(470,126,'Strom','end',13,'#a16207',700)+L(470,172,nz(P,1)+' kW','end',14,'#a16207',700);
 s+=L(226,128,'Leistungszahl','middle',13,'var(--mute)',500)+L(226,152,nz(cop,1),'middle',22,'var(--ink)',700);return s};
const kkR=(tu,to)=>{const cop=Math.min(8,.5*(to+273)/Math.max(5,to-tu));return{cop,P:40/cop}};
X['Kältemaschine & Wärmepumpe']={
 v:['Eine Wärmepumpe liefert 4 kW Wärme und braucht dafür 1 kW Strom. Widerspricht das der Energieerhaltung?',['Ja, das kann nicht stimmen','Nein, 3 kW stammen aus der Umgebung','Nein, Strom enthält viermal so viel Energie','Ja, aber es funktioniert trotzdem'],1,'Die Wärmepumpe erzeugt die Wärme nicht, sie pumpt sie von der kalten auf die warme Seite. Die Bilanz stimmt: 1 kW + 3 kW = 4 kW.'],
 ein:[S(15,'Das Kältemittel läuft im Kreis: Es nimmt unten Wärme auf, wird verdichtet und gibt die Wärme oben wieder ab.',k=>{const r=kkR(5,45);return OP(ph(k,.05,.5),kkBild(5,45,r.cop,40,r.P))}),
  S(13,'Derselbe Kreis, zwei Namen. Es kommt darauf an, welche Seite Du nutzt.',VS('Gleicher Kreis, anderer Nutzen',{h:'Kältemaschine',c:'b',l:['Nutzen: Wärme aufnehmen','Kaltwasser, Sole','Abwärme muss weg']},{h:'Wärmepumpe',c:'r',l:['Nutzen: Wärme abgeben','Heizung, Warmwasser','Quelle: Luft, Wasser, Abwärme']})),
  S(13,'Die Leistungszahl vergleicht Nutzen und Aufwand.',k=>TITLE('Leistungszahl der Wärmepumpe')+OP(ph(k,.05,.4),FO(240,104,['Leistungszahl = ',{n:'Heizwärme',d:'Strom'}],22))+OP(ph(k,.45,.85),FO(240,190,[{n:'40 kW',d:'10 kW'},' = 4'],20))),
  S(13,'Je wärmer die Quelle, desto weniger Strom braucht die Wärmepumpe.',BARS('Leistungszahl bei 45 °C Vorlauf',[['Quelle −5 °C',3.2,'3,2','b'],['Quelle 10 °C',4.5,'4,5','y'],['Quelle 25 °C',8,'8,0','g']],{lx:150}))],
 skz:[[SKZ(k=>{const r=kkR(5,45);return kkBild(5,45,r.cop,40,r.P)},'Skizze Kältekreis'),'Im Verdampfer nimmt das Kältemittel Wärme auf, der Verdichter hebt Druck und Temperatur, im Verflüssiger gibt es die Wärme ab, das Ventil entspannt es wieder.']],
 sim:{t:'Wärmepumpe für das Produktlager',fix:'Heizleistung 40 kW. Die reale Leistungszahl ist mit der Hälfte des idealen Werts gerechnet.',
  c:[{k:'tu',l:'Temperatur der Wärmequelle',u:'°C',min:-10,max:30,st:5,v:0},{k:'to',l:'Vorlauftemperatur',u:'°C',min:35,max:80,st:5,v:60}],
  calc:v=>kkR(v.tu,v.to),
  rows:(v,r)=>[['Strombedarf',nz(r.P,1)+' kW',r.P<=10?'g':'r'],['Leistungszahl',nz(r.cop,1)],['Aus der Quelle',nz(40-r.P,1)+' kW']],
  svg:(v,r)=>kkBild(v.tu,v.to,r.cop,40,r.P),
  auf:{z:'40 kW Heizwärme mit höchstens 10 kW Strom.',t:'Das Produktlager braucht 40 kW Heizwärme. Der Stromanschluss gibt für die Wärmepumpe höchstens 10 kW her. Wähle Wärmequelle und Vorlauftemperatur so, dass es reicht.',h:'Tipp: Abwärme aus dem Kühlwasser ist eine warme Quelle. Eine niedrige Vorlauftemperatur hilft ebenfalls.',ok:(v,r)=>r.P<=10}}};

Object.assign(ERK,{
'Gasgesetze':['Ein eingeschlossenes Gas hat drei Stellgrößen: Druck, Volumen, Temperatur. Hältst Du eine fest, hängen die beiden anderen direkt aneinander.','Du nutzt die Gasgesetze, um Fülldrücke festzulegen, Gasvorräte abzuschätzen und zu beurteilen, ob ein Behälter bei Hitze sicher bleibt.',['Mit Überdruck statt mit absolutem Druck gerechnet.','Mit Grad Celsius statt mit Kelvin gerechnet.','Am Ende vergessen, den absoluten Druck wieder in Überdruck umzurechnen.','Zähler und Nenner beim Temperaturverhältnis vertauscht.']],
'Erster Hauptsatz':['Der erste Hauptsatz ist eine Energiebilanz. Wärme und Arbeit sind zwei Wege, auf denen Energie in ein Gas hinein- oder herauskommt.','Mit der Bilanz erklärst Du, warum Verdichter gekühlt werden, warum Gase beim Entspannen kalt werden und warum eine exotherme Reaktion Kühlung braucht.',['Zugeführte und abgegebene Arbeit verwechselt.','bar und Liter nicht in Pa und m³ umgerechnet.','Wärme und Temperatur gleichgesetzt.','Angenommen, dass Energie beim Entspannen verloren geht.']],
'Zustandsänderungen':['Der Weg entscheidet: Derselbe Enddruck lässt sich kühl und mit wenig Arbeit oder heiß und mit viel Arbeit erreichen.','Am Verdichter achtest Du auf Kühlwasser, Zwischenkühler und Endtemperatur. Steigt die Temperatur, stimmt etwas mit der Kühlung oder den Ventilen nicht.',['Isotherm gerechnet, obwohl schnell und ohne Kühlung verdichtet wird.','Verdichtungsverhältnis und Druckverhältnis verwechselt.','Die Temperatur in Grad Celsius in die Formel eingesetzt.','Isochor und isobar verwechselt.']],
'Wärmeleitung & Dämmung':['Wärme fließt immer vom Warmen zum Kalten. Dämmung stoppt sie nicht, sie bremst sie nur.','Du beurteilst Dämmschäden nach Energieverlust und nach Gefahr: nasse oder fehlende Dämmung melden, heiße Oberflächen sichern.',['Dicke in mm statt in m eingesetzt.','Temperaturen statt der Temperaturdifferenz eingesetzt.','W und kWh verwechselt: Erst Leistung mal Zeit ergibt Energie.','Großes λ für gute Dämmung gehalten.']],
'Konvektion & Strahlung':['Strömung trägt Wärme mit, Strahlung braucht gar keinen Stoff. In der Praxis wirken meist alle drei Wege zusammen.','Bei der Thermografie vergleichst Du gleiche Bauteile unter gleichen Bedingungen. Auffällig ist, was deutlich wärmer ist als sein Nachbar.',['Emissionsgrad der Kamera nicht an die Oberfläche angepasst.','An blankem Metall gemessen und der Anzeige geglaubt.','Spiegelung einer Wärmequelle für eine heiße Stelle gehalten.','Bei der Strahlung mit Grad Celsius statt Kelvin gerechnet.']],
'Kreisprozesse & Wirkungsgrad':['Arbeit aus Wärme gibt es nur, wenn Wärme von heiß nach kalt fließen kann. Der Temperaturabstand bestimmt, wie viel Arbeit höchstens möglich ist.','Abwärme ist kein Abfall: Wo sie auf brauchbarer Temperatur anfällt, prüfst Du, ob sie zum Heizen oder Vorwärmen genutzt werden kann.',['Grad Celsius statt Kelvin in die Carnot-Formel eingesetzt.','Obere und untere Temperatur vertauscht.','Carnot-Wirkungsgrad für den realen Wirkungsgrad gehalten.','Abwärme und zugeführte Wärme verwechselt.']],
'Kältemaschine & Wärmepumpe':['Wärme fließt nicht von selbst von kalt nach warm. Mit Antriebsarbeit lässt sie sich aber dorthin pumpen.','Du erkennst Störungen an den Betriebswerten: Verflüssiger verschmutzt, Kühlwasser zu warm oder zu wenig Kältemittel senken die Leistung und treiben den Stromverbrauch hoch.',['Leistungszahl der Kältemaschine und der Wärmepumpe verwechselt.','Die Antriebsleistung bei der Wärme am Verflüssiger vergessen.','Bei der idealen Leistungszahl mit Grad Celsius im Zähler gerechnet.','Leistungszahl für einen Wirkungsgrad gehalten und Werte über 1 für falsch erklärt.']]});
}
