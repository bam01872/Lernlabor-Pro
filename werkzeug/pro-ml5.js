/* ===== Lernlabor Pro: Mustermodule mit Vermuten, Kurz erklärt, Skizze und Reglern mit Auftrag (wie im Lernlabor) ===== */
(()=>{const {F,ph,T,RC,OP,POP,ARp,OK,NO,TW,TX,TITLE,STG,CC,LIST,CARDS,BARS,FLOW,VS,CYC,SKZ:SKZ0}=ML5.H,X=ML5.X;
/* Tiefgestellte Indizes (v_c, k_v) auch in Karten, Listen und Balken der Erklärszenen */
const SB=s=>String(s).replace(/>([^<]*_[^<]*)</g,(q,t)=>'>'+SUBS(t)+'<');
const S=(d,t,f)=>({d,t,f:k=>SB(f(k))}),SKZ=(f,l)=>SKZ0(k=>SB(f(k)),l);
/* Formel in einer Zeile mit echtem Bruchstrich und tiefgestellten Indizes (a_p → a mit tiefem p) */
const SUBS=s=>String(s).replace(/([A-Za-zητσβμφρϑλ])_([A-Za-z0-9äöüß]+)/g,'$1<tspan baseline-shift="sub" style="font-size:.7em">$2</tspan>');
const RAW=s=>String(s).replace(/_/g,'');
const FORM=(x,y,parts,a='start',c='einf',fs=19)=>{const W=parts.map(p=>typeof p==='string'?TW(RAW(p),fs):Math.max(TW(RAW(p.n),fs),TW(RAW(p.d),fs))+12),tot=W.reduce((s,w)=>s+w,0);let cx=a==='middle'?x-tot/2:x,s='',st='white-space:pre;font-size:'+fs+'px';
 parts.forEach((p,i)=>{if(typeof p==='string')s+=T(cx,y,SUBS(p),c,'start',st);else{const m=cx+W[i]/2;s+=T(m,y-9,SUBS(p.n),c,'middle','font-size:'+fs+'px')+`<path d="M${F(cx+1)} ${F(y-3)}h${F(W[i]-2)}" stroke="var(--ink)" stroke-width="1.6"/>`+T(m,y+17,SUBS(p.d),c,'middle','font-size:'+fs+'px')}cx+=W[i]});return s};
const AW=(x1,y1,x2,y2,c='var(--ink)',w=2.2)=>{const a=Math.atan2(y2-y1,x2-x1),L=10,bx=x2-L*Math.cos(a),by=y2-L*Math.sin(a),px=Math.sin(a)*5,py=-Math.cos(a)*5;
 return `<path d="M${F(x1)} ${F(y1)}L${F(bx)} ${F(by)}" stroke="${c}" stroke-width="${w}" fill="none"/><path d="M${F(x2)} ${F(y2)}L${F(bx+px)} ${F(by+py)}L${F(bx-px)} ${F(by-py)}Z" fill="${c}"/>`};
const L=(x,y,s,a='start',fs=16,c='var(--ink)',wt=600)=>`<text x="${F(x)}" y="${F(y)}" text-anchor="${a}" style="font-size:${fs}px;font-weight:${wt};fill:${c}">${s}</text>`;
const SUB=s=>String(s).replace(/_([A-Za-z0-9äöüß]+)/g,'<tspan baseline-shift="sub" style="font-size:.72em">$1</tspan>');
const GR=(id,c1,c2,v)=>`<linearGradient id="${id}" x1="0" y1="0" x2="${v?0:1}" y2="${v?1:0}"><stop offset="0" stop-color="${c1}"/><stop offset=".45" stop-color="${c2}"/><stop offset="1" stop-color="${c1}"/></linearGradient>`;
const STEEL='#8a96a6',STEEL2='#e3e8ef';

/* ---------- Zeichnungen ---------- */
/* Drehen: Futter, Werkstück (links Rohmaß, rechts schon gedreht), Werkzeug sitzt mit der Schneidenecke immer auf dem Fertigdurchmesser (geht mit d und a_p mit) */
function drehen(o){const id=o.id||'dr',r1=o.r1||44,ap=o.ap||10,r2=r1-ap,cy=o.cy||138,xt=o.xt||250,hl=o.hl||52;
 let s=`<defs>${GR(id+'w',STEEL,STEEL2,1)}${GR(id+'c','#5b6472','#aab3c0',1)}</defs>`;
 s+=RC(26,cy-74,54,148,`url(#${id}c)`,'var(--ink)',6,1.4)+RC(62,cy-r1-16,22,14,'#6b7480','var(--ink)',2,1.2)+RC(62,cy+r1+2,22,14,'#6b7480','var(--ink)',2,1.2);
 s+=`<rect x="80" y="${F(cy-r1)}" width="${F(xt-80)}" height="${F(2*r1)}" fill="url(#${id}w)" stroke="var(--ink)" stroke-width="1.4"/>`;
 s+=`<rect x="${F(xt)}" y="${F(cy-r2)}" width="${F(400-xt)}" height="${F(2*r2)}" fill="url(#${id}w)" stroke="var(--ink)" stroke-width="1.4"/>`;
 s+=`<ellipse cx="400" cy="${F(cy)}" rx="9" ry="${F(r2)}" fill="${STEEL2}" stroke="var(--ink)" stroke-width="1.4"/>`;
 s+=`<path d="M80 ${F(cy)}H412" stroke="var(--mute)" stroke-width="1" stroke-dasharray="10 4 2 4"/>`;
 /* Wendeplatte: Ecke genau an der Stufe (x = xt, Radius r2), Hauptschneide an der Stufe hoch, Nebenschneide mit Freiwinkel über der fertigen Fläche */
 const yb=cy-r1-10,tp=yb-hl;
 s+=`<path d="M${F(xt+2)} ${F(yb)}L${F(xt+40)} ${F(yb)}L${F(xt+40)} ${F(tp)}L${F(xt+2)} ${F(tp)}Z" fill="#3a4250" stroke="var(--ink)" stroke-width="1.4"/>`;
 s+=`<path d="M${F(xt)} ${F(cy-r2)}L${F(xt+30)} ${F(cy-r2-7)}L${F(xt+34)} ${F(yb)}L${F(xt+2)} ${F(yb)}Z" fill="#d4a017" stroke="var(--ink)" stroke-width="1.3"/>`;
 s+=`<path d="M${F(xt-1)} ${F(cy-r1-1)}c-3 -14 -22 -22 -30 -10c-5 9 6 16 13 9" fill="none" stroke="#b7791f" stroke-width="3" stroke-linecap="round"/>`;
 return s}
const drSkizze=k=>{let s=drehen({id:'dsk'});
 s+=AW(372,62,312,62,'var(--flow)')+L(380,68,'f','start',18,'var(--flow)');
 s+=`<path d="M412 104a14 34 0 0 1 0 68" fill="none" stroke="var(--red)" stroke-width="2.4"/>`+AW(414,166,405,175,'var(--red)')+L(430,140,SUB('v_c'),'start',17,'var(--red)');
 s+=`<path d="M160 94V182" stroke="var(--ink)" stroke-width="1.2"/>`+AW(160,138,160,95,'var(--ink)',1.2)+AW(160,138,160,181,'var(--ink)',1.2)+L(150,142,'d','end',17);
 s+=`<path d="M300 94H372M300 104H372" stroke="var(--ink)" stroke-width="1" stroke-dasharray="3 3"/>`+AW(366,80,366,93,'var(--ink)',1.2)+AW(366,118,366,105,'var(--ink)',1.2)+L(376,116,SUB('a_p'),'start',17);
 s+=L(240,250,'Drehen: Werkstück dreht, Werkzeug fährt entlang','middle',15,'var(--mute)',400);return s};

/* Hydraulik im Lernlabor-Stil (flach): Wände als dicke Linien, Öl blau durchscheinend, Kolben grau, Last gelb, Kraftpfeile blau */
const HF='fill:var(--flow);opacity:.35',HW='fill="none" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round"';
const PIPE=d=>`<path d="${d}" fill="none" stroke="var(--ink)" stroke-width="12" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="var(--card)" stroke-width="7" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="var(--flow)" stroke-opacity=".35" stroke-width="7" stroke-linejoin="round"/>`;
const FLO=(d,Q)=>PIPE(d)+`<path d="${d}" fill="none" stroke="var(--flow)" stroke-width="3" stroke-dasharray="6 10">${Q>0?`<animate attributeName="stroke-dashoffset" from="16" to="0" dur="${F(Math.max(.25,6/Q))}s" repeatCount="indefinite"/>`:''}</path>`;
const KPF=(x,y,L,up=true,c='var(--flow)')=>{const t=up?y-L:y+L,d=up?1:-1;return `<line x1="${F(x)}" x2="${F(x)}" y1="${F(y)}" y2="${F(t+d*12)}" stroke="${c}" stroke-width="6"/><polygon points="${F(x)},${F(t)} ${F(x-9)},${F(t+d*15)} ${F(x+9)},${F(t+d*15)}" fill="${c}"/>`};
const PUMP=(x,y)=>`<circle cx="${x}" cy="${y}" r="18" fill="var(--card)" stroke="var(--ink)" stroke-width="2.2"/><path d="M${x} ${y-16}l-8 13h16z" fill="var(--ink)"/>`;
const MANO=(x,y,a)=>`<circle cx="${x}" cy="${y}" r="13" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M${x} ${y}l${F(9*Math.cos(a))} ${F(-9*Math.sin(a))}" stroke="var(--red)" stroke-width="2.2"/>`;
const TANK=(x,y,w,h)=>`<rect x="${x}" y="${y+h*.35}" width="${w}" height="${F(h*.65)}" style="${HF}"/><path d="M${x} ${y}V${y+h}H${x+w}V${y}" ${HW}/>`;
/* Hubzylinder senkrecht: Pumpe links, Öl unter dem Kolben, Last oben */
function hubzyl(o){const D=o.D||63,hw=16+D*.22,rw=Math.max(7,hw*.42),cx=o.cx||300,yt=96,yb=246,yp=150,Q=o.Q||0;
 let s=TANK(28,208,96,44)+`<path d="M76 222V188" stroke="var(--ink)" stroke-width="2.2"/>`;
 s+=`<rect x="${F(cx-hw)}" y="${yp+14}" width="${F(2*hw)}" height="${yb-yp-14}" style="${HF}"/>`;
 s+=FLO(`M76 152V112H196V232H${F(cx-hw)}`,Q)+PUMP(76,170);
 s+=`<path d="M${F(cx-rw-3)} ${yt}H${F(cx-hw)}V${yb}H${F(cx+hw)}V${yt}H${F(cx+rw+3)}" ${HW}/>`;
 s+=`<rect x="${F(cx-hw+3)}" y="${yp}" width="${F(2*hw-6)}" height="14" fill="var(--mute)" stroke="var(--ink)" stroke-width="2"/>`;
 s+=`<rect x="${F(cx-rw)}" y="66" width="${F(2*rw)}" height="${yp-66}" fill="color-mix(in srgb,var(--mute) 55%,var(--card))" stroke="var(--ink)" stroke-width="2"/>`;
 const q=o.q||36;s+=`<rect x="${F(cx-q*.8)}" y="${F(66-q)}" width="${F(q*1.6)}" height="${F(q)}" rx="3" fill="var(--amber)" stroke="var(--ink)" stroke-width="2"/>`;
 s+=`<path d="M150 106V98" stroke="var(--ink)" stroke-width="2"/>`+MANO(150,85,o.ma==null?Math.PI*.6:o.ma);
 return s}
const hySkizze=k=>{const cy=104,x0=96,x1=330,R=40,xp=200,rr=15;
 let s=`<rect x="${x0}" y="${cy-R}" width="${xp-x0}" height="${2*R}" style="${HF}"/><rect x="${xp+14}" y="${cy-R}" width="${x1-xp-14}" height="${2*R}" style="fill:var(--flow);opacity:.15"/>`;
 s+=`<path d="M${x1} ${cy-rr-3}V${cy-R}H${x0}V${cy+R}H${x1}V${cy+rr+3}" ${HW}/>`;
 s+=`<rect x="${xp}" y="${cy-R+3}" width="14" height="${2*R-6}" fill="var(--mute)" stroke="var(--ink)" stroke-width="2"/><rect x="${xp+14}" y="${cy-rr}" width="${400-xp-14}" height="${2*rr}" fill="color-mix(in srgb,var(--mute) 55%,var(--card))" stroke="var(--ink)" stroke-width="2"/>`;
 s+=`<rect x="400" y="${cy-26}" width="40" height="52" rx="3" fill="var(--amber)" stroke="var(--ink)" stroke-width="2"/>`+`<line x1="444" x2="458" y1="${cy}" y2="${cy}" stroke="var(--flow)" stroke-width="6"/><polygon points="472,${cy} 457,${cy-9} 457,${cy+9}" fill="var(--flow)"/>`;
 s+=L(420,cy-38,'F, v','middle',17,'var(--flow)',700)+L(148,cy+6,'A','middle',20,'var(--ink)',700)+L(148,cy+28,'Kolbenfläche','middle',13,'var(--ink)',600);
 s+=`<path d="M300 ${cy-R+6}L346 ${cy-R-22}" stroke="var(--ink)" stroke-width="1.2"/>`+L(350,cy-R-24,SUB('Ringfläche A_R'),'start',14,'var(--ink)',600);
 s+=TANK(70,222,90,36)+`<path d="M115 234V216" stroke="var(--ink)" stroke-width="2.2"/>`+FLO(`M115 182V${cy+R}`,8)+PUMP(115,198);
 s+=`<path d="M121 164H160" stroke="var(--ink)" stroke-width="2"/>`+MANO(173,164,Math.PI*.55)+L(192,170,'p','start',18,'var(--ink)',700);
 s+=L(250,214,'Q: Volumenstrom der Pumpe','start',15,'var(--ink)',600)+`<path d="M246 209H130" stroke="var(--mute)" stroke-width="1" stroke-dasharray="3 3"/>`;
 return s};

/* Maschinenstundensatz: Jahreskosten als Säule, geteilt durch Laufstunden */
const MSSK=[['Abschreibung',30000,'a'],['Zinsen',7200,'b'],['Raum',3600,'m'],['Energie',4200,'y'],['Instandhaltung',6000,'g']];
const msSkizze=k=>{const tot=51000,H=200,x=36,w=56;let y=244,s='';
 MSSK.forEach(r=>{const h=r[1]/tot*H;y-=h;s+=RC(x,y,w,h,`color-mix(in srgb,${CC(r[2])} 55%,var(--card))`,'var(--ink)',0,1)+L(x+w+10,y+h/2+5,r[0]+': '+nz(r[1],0)+' €','start',14,'var(--ink)',500)});
 s+=L(x+w/2,34,'pro Jahr','middle',15,'var(--mute)',600);
 s+=RC(268,96,204,92,'color-mix(in srgb,var(--acc) 12%,var(--card))','var(--acc)',12,2)+L(370,122,'Stundensatz','middle',15,'var(--mute)',600)+FORM(278,160,[{n:'51 000 €',d:'1600 h'},' = 31,88 €/h'],'start','einf',17);
 return s+L(x+w/2,262,'Summe 51 000 €','middle',14,'var(--ink)',700)};

/* Kostenvergleich: zwei Geraden */
function kvChart(o){const X0=60,X1=440,Y0=232,Y1=40,xm=o.xm,ym=o.ym,px=x=>X0+(X1-X0)*x/xm,py=y=>Y0-(Y0-Y1)*y/ym,A=o.A,B=o.B;
 let s=`<path d="M${X0} ${Y1-8}V${Y0}H${X1+10}" stroke="var(--ink)" stroke-width="1.6" fill="none"/>`+L(X1+6,Y0+22,'Menge x','end',13,'var(--mute)',500)+L(X0-6,Y1-14,'Kosten','start',13,'var(--mute)',500);
 const xk=(B[0]-A[0])/(A[1]-B[1]);
 if(o.shade&&xk>0&&xk<xm)s+=`<rect x="${X0}" y="${Y1}" width="${F(px(xk)-X0)}" height="${Y0-Y1}" fill="color-mix(in srgb,var(--red) 7%,transparent)"/><rect x="${F(px(xk))}" y="${Y1}" width="${F(X1-px(xk))}" height="${Y0-Y1}" fill="color-mix(in srgb,var(--flow) 7%,transparent)"/>`;
 const ln=(P,c)=>`<path d="M${X0} ${F(py(P[0]))}L${X1} ${F(py(P[0]+P[1]*xm))}" stroke="${c}" stroke-width="3" fill="none"/>`;
 s+=ln(A,'var(--red)')+ln(B,'var(--flow)');
 if(xk>0&&xk<xm){const yk=A[0]+A[1]*xk;s+=`<path d="M${F(px(xk))} ${F(py(yk))}V${Y0}" stroke="var(--ink)" stroke-dasharray="4 4" stroke-width="1.3"/><circle cx="${F(px(xk))}" cy="${F(py(yk))}" r="6" fill="var(--ink)"/>`;
  if(o.lab)s+=L(px(xk),Y0+20,SUB('x_krit'),'middle',15)}
 return {s,px,py,xk}}
const kvSkizze=k=>{const c=kvChart({xm:10000,ym:120000,A:[12000,8.5],B:[36000,4.5],shade:1,lab:1});
 return c.s+L(74,60,'A günstiger','start',15,'var(--red)')+L(436,56,'B günstiger','end',15,'var(--flow)')+L(436,184,'A: wenig fix, hohe Stückkosten','end',14,'var(--red)',600)+L(436,208,'B: viel fix, kleine Stückkosten','end',14,'var(--flow)',600)};

/* Gespräch: vier Schritte */
const gsSkizze=FLOW('',[['👋','Anlass','und Fakten','a'],['👂','Zuhören','offene Fragen','b'],['🤝','Lösung','gemeinsam','y'],['📅','Abschluss','Folgetermin','g']],{y:56,h:132,note:'Vorher: Ziel, Fakten, ruhiger Raum. Nachher: kurz notieren.'});

/* ---------- Mustermodule: Vermuten, Kurz erklärt, Skizze, Regler ---------- */
X['Zerspanung: Drehen']={
 v:['Du verdoppelst die Schnittgeschwindigkeit, Vorschub und Schnitttiefe bleiben gleich. Was passiert mit der nötigen Antriebsleistung?',
  ['Sie bleibt gleich.','Sie verdoppelt sich.','Sie vervierfacht sich.','Sie halbiert sich.'],1,
  'Die Schnittkraft bleibt (vereinfacht) gleich, sie wirkt aber doppelt so schnell. Leistung ist Kraft mal Geschwindigkeit, also doppelt so groß.'],
 ein:[S(12,'Beim Drehen dreht sich das Werkstück, das Werkzeug fährt entlang. Drei Schnittwerte stellst Du ein: Schnittgeschwindigkeit, Vorschub und Schnitttiefe.',
   CARDS('Drei Schnittwerte',[['🌀','v_c','in m/min','r'],['➡️','f','in mm je Umdrehung','b'],['⬇️','a_p','Schnitttiefe in mm','y']])),
  S(13,'Schnitttiefe mal Vorschub ergibt den Spanungsquerschnitt. Mal der spezifischen Schnittkraft aus dem Tabellenbuch ergibt das die Schnittkraft.',
   k=>TITLE('Vom Span zur Kraft')+OP(ph(k,.05,.3),FORM(240,104,['A = a_p · f = 3 mm · 0,3 mm = 0,9 mm²'],'middle'))+OP(ph(k,.35,.6),FORM(240,164,['F_c = A · k_c = 0,9 mm² · 2100 N/mm² = 1890 N'],'middle',undefined,17))+OP(ph(k,.65,.9),TX(240,226,'k_c steht im Tabellenbuch und hängt vom Werkstoff ab',440,'ein2','middle'))),
  S(13,'Kraft mal Geschwindigkeit ist Leistung. Die Schnittgeschwindigkeit rechnest Du dafür von Meter pro Minute in Meter pro Sekunde um.',
   k=>TITLE('Schnittleistung')+OP(ph(k,.05,.35),FORM(240,110,['v_c = ',{n:'180 m/min',d:'60 s/min'},' = 3 m/s'],'middle'))+OP(ph(k,.4,.75),FORM(240,190,['P_c = F_c · v_c = 1890 N · 3 m/s = 5670 W'],'middle'))),
  S(13,'Motor und Getriebe haben Verluste. Teile durch den Wirkungsgrad. Das Ergebnis muss unter der Motorleistung der Maschine bleiben.',
   BARS('Reicht die Maschine?',[['P_c',9.2,'9,2 kW','a'],['P_zu = P_c ÷ 0,8',11.5,'11,5 kW','r'],['Motor',11,'11 kW','g']],{max:12,lx:170,note:'Hier zu viel: Schnitttiefe oder Vorschub senken'}))],
 skz:[[SKZ(drSkizze,'Skizze Drehen'),'Links das Rohmaß, rechts schon gedreht. Die Schnitttiefe a_p ist der Unterschied der Radien.']],
 sim:{t:'Schnittwerte einstellen',fix:'Werkstoff C45 mit k_c = 2100 N/mm² (vereinfacht), Wirkungsgrad 0,8, Motorleistung 11 kW',
  c:[{k:'d',l:'Durchmesser d',u:'mm',min:40,max:200,st:10,v:80},{k:'vc',l:'Schnittgeschwindigkeit v_c',u:'m/min',min:100,max:300,st:10,v:180},{k:'ap',l:'Schnitttiefe a_p',u:'mm',min:.5,max:5,st:.5,v:2},{k:'f',l:'Vorschub f',u:'mm',min:.1,max:.5,st:.05,v:.25}],
  calc:v=>{const n=v.vc*1000/(Math.PI*v.d),A=v.ap*v.f,Fc=A*2100,Pc=Fc*v.vc/60,Pz=Pc/.8;return{n,A,Fc,Pc,Pz}},
  rows:(v,r)=>[['Drehzahl n',nz(r.n,0)+' 1/min'],['A = a_p · f',nt(r.A)+' mm²'],['Schnittkraft F_c',nz(r.Fc,0)+' N'],['Schnittleistung P_c',nz(r.Pc/1000,2)+' kW'],['Antriebsleistung P_zu',nz(r.Pz/1000,2)+' kW',r.Pz>11000?'r':r.Pz>=8800?'g':'']],
  svg:(v,r)=>{const r1=22+v.d*.12,ap=Math.max(3,v.ap*3.2);let s=drehen({id:'dsi',r1,ap,cy:122,xt:230,hl:34});
   const p=Math.min(1.25,r.Pz/11000),bw=300*p/1.25;s+=L(30,220,'Antriebsleistung','start',17,'var(--ink)',600)+RC(30,232,300,20,'var(--card)','var(--line)',6,1.2)+RC(30,232,bw,20,r.Pz>11000?'var(--red)':r.Pz>=8800?'var(--ok)':'var(--amber)','none',6,0);
   s+=`<path d="M${F(30+300/1.25)} 226v32" stroke="var(--ink)" stroke-width="2"/>`+L(30+300/1.25+6,220,'Motor 11 kW','start',15,'var(--ink)',500)+L(340,249,nz(r.Pz/1000,1)+' kW','start',19,'var(--ink)',700);
   s+=L(470,36,'n = '+nz(r.n,0)+' 1/min','end',18,'var(--ink)',600);return s},
  auf:{z:'Lastet die Maschine zu 80 bis 100 % aus.',t:'Schruppen soll schnell gehen, die Maschine darf aber nicht überlastet werden. Stelle die Schnittwerte so ein, dass die Antriebsleistung zwischen 8,8 kW und 11 kW liegt.',h:'Tipp: Schnitttiefe und Vorschub wirken beide linear auf die Leistung, der Durchmesser ändert nur die Drehzahl.',ok:(v,r)=>r.Pz>=8800&&r.Pz<=11000}}};

X['Hydraulik: Zylinder & Pumpe']={
 v:['Du baust einen Zylinder mit doppeltem Kolbendurchmesser ein. Druck und Volumenstrom der Pumpe bleiben gleich. Was passiert?',
  ['Kraft doppelt, Geschwindigkeit halb','Kraft viermal so groß, Geschwindigkeit ein Viertel','Kraft viermal so groß, Geschwindigkeit gleich','Kraft und Geschwindigkeit bleiben gleich'],1,
  'Die Kolbenfläche wächst mit dem Quadrat des Durchmessers, also mal 4. Die Kraft p · A wird viermal so groß, die Geschwindigkeit Q ÷ A nur ein Viertel.'],
 ein:[S(12,'Öl lässt sich kaum zusammendrücken. Der Druck wirkt auf jede Fläche gleich stark, also auch auf den Kolben. Kraft ist Druck mal Fläche.',
   k=>TITLE('Druck mal Fläche')+OP(ph(k,.05,.3),FORM(240,100,['F = p · A'],'middle'))+OP(ph(k,.35,.65),FORM(240,164,['A = ',{n:'π · D²',d:'4'}],'middle'))+OP(ph(k,.7,.92),TX(240,236,'1 bar = 10 N/cm²',300,'ein3','middle'))),
  S(13,'Doppelter Durchmesser heißt vierfache Fläche. Bei gleichem Druck wird die Kraft viermal so groß.',
   BARS('Durchmesser verdoppeln',[['D = 50 mm',19.63,'A = 19,63 cm²','a'],['D = 100 mm',78.54,'A = 78,54 cm²','y']],{lx:130,h:56,y0:76,note:'Bei 100 bar: 19,6 kN gegen 78,5 kN'})),
  S(13,'Die Pumpe liefert einen Volumenstrom. Je größer die Kolbenfläche, desto langsamer fährt der Kolben aus.',
   k=>TITLE('Geschwindigkeit')+OP(ph(k,.05,.35),FORM(240,104,['v = ',{n:'Q',d:'A'}],'middle'))+OP(ph(k,.4,.8),FORM(240,190,['v = ',{n:'20 000 cm³/min',d:'50,27 cm²'},' = 398 cm/min'],'middle',undefined,18))),
  S(13,'Kraft mal Geschwindigkeit ist die Leistung. Ein großer Kolben bringt viel Kraft, aber wenig Tempo. Mehr von beidem kostet mehr Pumpenleistung.',
   k=>TITLE('Leistung')+OP(ph(k,.05,.35),FORM(240,104,['P = F · v = p · Q'],'middle'))+OP(ph(k,.4,.75),FORM(240,180,['P_zu = ',{n:'p · Q',d:'η'}],'middle'))+OP(ph(k,.8,.95),TX(240,248,'Kein Zylinder schafft mehr als die Pumpe liefert',440,'ein2','middle')))],
 skz:[[SKZ(hySkizze,'Skizze Hydraulikzylinder'),'Beim Ausfahren wirkt der Druck auf die volle Kolbenfläche, beim Einfahren nur auf die Ringfläche.']],
 sim:{t:'Hubzylinder auslegen',fix:'Wirkungsgrad der Pumpe 0,85, Verluste im Zylinder vernachlässigt',
  c:[{k:'p',l:'Druck p',u:'bar',min:20,max:200,st:5,v:80},{k:'D',l:'Kolbendurchmesser D',u:'mm',opts:[32,40,50,63,80,100,125],v:3},{k:'Q',l:'Volumenstrom Q',u:'l/min',min:4,max:60,st:1,v:12}],
  calc:v=>{const A=Math.PI*(v.D/10)**2/4,Fk=v.p*10*A/1000,vv=v.Q*1000/A/100/60,P=v.p*1e5*v.Q/60000/.85/1000;return{A,Fk,vv,P}},
  rows:(v,r)=>[['Kolbenfläche A',nz(r.A,2)+' cm²'],['Kraft F',nz(r.Fk,1)+' kN',r.Fk>=40?'g':''],['Geschwindigkeit v',nz(r.vv,3)+' m/s',r.vv>=.05?'g':''],['Antriebsleistung',nz(r.P,2)+' kW',r.P>4?'r':'g']],
  svg:(v,r)=>{const q=Math.min(44,22+9*Math.log10(1+r.Fk));let s=hubzyl({D:v.D,Q:v.Q,q,ma:Math.PI*(1.1-v.p/200)});
   const Lf=Math.min(96,18+26*Math.log10(1+r.Fk));s+=KPF(380,150,Lf)+L(470,178,'F = '+nz(r.Fk,1)+' kN','end',17,'var(--flow)',700);
   s+=`<path d="M250 140V${F(140-Math.min(46,10+r.vv*400))}" stroke="var(--ok)" stroke-width="3"/><polygon points="250,${F(140-Math.min(46,10+r.vv*400)-8)} 244,${F(140-Math.min(46,10+r.vv*400)+2)} 256,${F(140-Math.min(46,10+r.vv*400)+2)}" fill="var(--ok)"/>`+L(240,64,'v = '+nz(r.vv,3)+' m/s','end',16,'var(--ok)',700);
   s+=L(132,90,v.p+' bar','end',16,'var(--ink)',700)+L(88,136,'Q = '+v.Q+' l/min','start',15,'var(--ink)',600)+L(300,268,'D = '+v.D+' mm','middle',15,'var(--ink)',600)+L(470,262,'P = '+nz(r.P,2)+' kW','end',18,r.P>4?'var(--red)':'var(--ink)',700);return s},
  auf:{z:'Hebe 40 kN mit mindestens 0,05 m/s, Pumpe höchstens 4 kW.',t:'Ein Hubtisch soll eine Last von 40 kN mit mindestens 0,05 m/s anheben. Der vorhandene Motor hat 4 kW. Finde Druck, Zylinder und Volumenstrom, die das schaffen.',h:'Tipp: Kraft mal Geschwindigkeit sind hier mindestens 2 kW. Mit dem Wirkungsgrad bleibt wenig Luft nach oben.',ok:(v,r)=>r.Fk>=40&&r.vv>=.05&&r.P<=4}}};

X['Maschinenstundensatz']={
 v:['Eine Maschine läuft statt 1600 Stunden nur noch 800 Stunden im Jahr. Was passiert mit dem Maschinenstundensatz?',
  ['Er halbiert sich.','Er bleibt gleich.','Er steigt knapp auf das Doppelte.','Er steigt auf das Vierfache.'],2,
  'Abschreibung, Zinsen, Raum und Instandhaltung fallen auch an, wenn die Maschine steht. Sie verteilen sich auf halb so viele Stunden. Nur die Energie je Stunde bleibt gleich, deshalb knapp das Doppelte.'],
 ein:[S(12,'Eine Maschine kostet Geld, auch wenn sie steht: Abschreibung, Zinsen, Raum und Instandhaltung. Energie fällt dagegen nur an, wenn sie läuft.',
   VS('Fest oder je Stunde?',{h:'fest pro Jahr',c:'a',l:['Abschreibung','Zinsen','Raumkosten','Instandhaltung']},{h:'je Laufstunde',c:'y',l:['Energie','Werkzeuge (falls getrennt)']})),
  S(13,'Die Abschreibung verteilt den Kaufpreis auf die Nutzungsjahre. Für die Zinsen zählt nur der halbe Kaufpreis, weil im Mittel nur die Hälfte gebunden ist.',
   k=>TITLE('Abschreibung und Zinsen')+OP(ph(k,.05,.4),FORM(240,110,['Abschreibung = ',{n:'240 000 €',d:'8 Jahre'},' = 30 000 €'],'middle'))+OP(ph(k,.45,.85),FORM(240,196,['Zinsen = ',{n:'240 000 €',d:'2'},' · 6 % = 7200 €'],'middle'))),
  S(13,'Alle Kosten eines Jahres, geteilt durch die Laufstunden, ergeben den Maschinenstundensatz.',
   k=>TITLE('Stundensatz')+OP(ph(k,.05,.35),TX(240,92,'30 000 € + 7200 € + 3600 € + 4200 € + 6000 € = 51 000 €',450,'ein3','middle'))+OP(ph(k,.4,.8),FORM(240,170,['Stundensatz = ',{n:'51 000 €',d:'1600 h'},' = 31,88 €/h'],'middle'))),
  S(13,'Läuft die Maschine nur halb so lange, verteilen sich die festen Kosten auf weniger Stunden. Der Stundensatz steigt knapp auf das Doppelte.',
   BARS('Laufzeit halbiert',[['1600 h',31.88,'31,88 €/h','a'],['800 h',61.13,'61,13 €/h','r']],{lx:110,h:56,y0:76,note:'Auslastung ist der stärkste Hebel'}))],
 skz:[[SKZ(msSkizze,'Skizze Maschinenstundensatz'),'Beispiel: Bearbeitungszentrum für 240 000 €, 8 Jahre, 6 % Zins, 1600 Laufstunden.']],
 sim:{t:'Stundensatz einer Maschine',fix:'Zins 6 %, Raumkosten 4800 €/Jahr, Instandhaltung 3 % des Anschaffungswerts, Energie 3,00 € je Laufstunde',
  c:[{k:'AW',l:'Anschaffungswert',u:'€',min:100000,max:400000,st:20000,v:240000},{k:'n',l:'Nutzungsdauer',u:'Jahre',min:5,max:12,st:1,v:8},{k:'L',l:'Laufzeit',u:'h/Jahr',min:600,max:3600,st:100,v:1600}],
  calc:v=>{const ab=v.AW/v.n,zi=v.AW/2*.06,ra=4800,ih=v.AW*.03,fx=ab+zi+ra+ih,m=fx/v.L+3;return{ab,zi,ra,ih,fx,m}},
  rows:(v,r)=>[['Abschreibung',nz(r.ab,0)+' €/Jahr'],['Zinsen',nz(r.zi,0)+' €/Jahr'],['Raum und Instandhaltung',nz(r.ra+r.ih,0)+' €/Jahr'],['Feste Kosten',nz(r.fx,0)+' €/Jahr'],['Maschinenstundensatz',nz(r.m,2)+' €/h',r.m>=35&&r.m<=40?'g':'']],
  svg:(v,r)=>{const X0=60,X1=440,Y0=220,Y1=40,lx=L0=>X0+(X1-X0)*(L0-500)/3500,ym=120,py=y=>Y0-(Y0-Y1)*Math.min(y,ym)/ym;
   let s=`<path d="M${X0} ${Y1-6}V${Y0}H${X1+8}" stroke="var(--ink)" stroke-width="1.5" fill="none"/>`+L(X1,Y0+40,'Laufzeit in h/Jahr','end',14,'var(--mute)',500)+L(X0-4,Y1-12,'€/h','start',13,'var(--mute)',500);
   [1000,2000,3000,4000].forEach(t=>s+=L(lx(t),Y0+20,nz(t,0),'middle',15,'var(--mute)',500));[40,80,120].forEach(t=>s+=`<path d="M${X0} ${F(py(t))}H${X1}" stroke="var(--line)" stroke-width="1"/>`+L(X0-6,py(t)+5,t,'end',15,'var(--mute)',500));
   s+=`<rect x="${X0}" y="${F(py(40))}" width="${X1-X0}" height="${F(py(35)-py(40))}" fill="color-mix(in srgb,var(--ok) 18%,transparent)"/>`;
   let d='';for(let L0=500;L0<=4000;L0+=50){d+=(d?'L':'M')+F(lx(L0))+' '+F(py(r.fx/L0+3))}s+=`<path d="${d}" fill="none" stroke="var(--acc)" stroke-width="3"/>`;
   s+=`<circle cx="${F(lx(v.L))}" cy="${F(py(r.m))}" r="7" fill="var(--ink)"/>`+L(lx(v.L)+(v.L>2600?-12:12),py(r.m)-12,nz(r.m,2)+' €/h',v.L>2600?'end':'start',19,'var(--ink)',700);return s},
  auf:{z:'Bringe den Stundensatz auf 35 bis 40 €/h.',t:'Der Kunde zahlt höchstens 40 € je Maschinenstunde, unter 35 € bleibt die Maschine unter ihren Möglichkeiten. Finde Einstellungen, bei denen der Maschinenstundensatz zwischen 35 und 40 €/h liegt.',h:'Tipp: Die Laufzeit verschiebt Dich auf der Kurve, Kaufpreis und Nutzungsdauer verschieben die ganze Kurve.',ok:(v,r)=>r.m>=35&&r.m<=40}}};

X['Kostenvergleich & kritische Menge']={
 v:['Maschine A hat geringe Fixkosten, aber hohe Kosten je Stück. Maschine B hat hohe Fixkosten, aber niedrige Kosten je Stück. Welche ist bei sehr großen Mengen günstiger?',
  ['Maschine A','Maschine B','Beide sind immer gleich teuer','Das hängt nur vom Verkaufspreis ab'],1,
  'Mit jeder Mengeneinheit holt B auf, weil die Stückkosten kleiner sind. Ab der kritischen Menge ist B günstiger.'],
 ein:[S(12,'Jedes Verfahren hat feste Kosten im Jahr und Kosten, die mit jedem Stück wachsen.',
   k=>TITLE('Kosten eines Verfahrens')+OP(ph(k,.05,.35),FORM(240,110,['K = K_f + k_v · x'],'middle'))+OP(ph(k,.4,.85),TX(240,180,'fest pro Jahr + Stückkosten · Menge',440,'ein2','middle'))),
  S(13,'Im Diagramm sind das zwei Geraden. Wo sie sich schneiden, liegt die kritische Menge.',
   k=>{const c=kvChart({xm:10000,ym:100000,A:[12000,8.5],B:[36000,4.5],lab:1});return OP(ph(k,.05,.5),c.s)+OP(ph(k,.55,.9),L(c.px(6000)+12,c.py(63000)-6,'gleich teuer','start',15))}),
  S(13,'Setz beide Kosten gleich und stell nach x um.',
   k=>TITLE('Kritische Menge')+OP(ph(k,.05,.4),FORM(240,110,['x_krit = ',{n:'K_fB − K_fA',d:'k_vA − k_vB'}],'middle'))+OP(ph(k,.45,.85),FORM(240,196,['x_krit = ',{n:'24 000 €',d:'4 €/Stück'},' = 6000 Stück'],'middle'))),
  S(13,'Darunter gewinnt das Verfahren mit wenig Fixkosten, darüber das mit kleinen Stückkosten. Danach prüfst Du Qualität, Termine und Auslastung.',
   VS('Entscheiden',{h:'unter 6000 Stück',c:'r',l:['Verfahren A','wenig fest gebunden']},{h:'über 6000 Stück',c:'b',l:['Verfahren B','kleine Stückkosten']},{note:'Dann: Qualität, Termine, Auslastung'}))],
 skz:[[SKZ(kvSkizze,'Skizze Kostenvergleich'),'Links vom Schnittpunkt ist A günstiger, rechts davon B.']],
 sim:{t:'Zwei Fräsverfahren vergleichen',fix:'Verfahren A: 12 000 € fix, 8,50 € je Stück. Verfahren B: 4,50 € je Stück, Fixkosten einstellbar',
  c:[{k:'x',l:'Menge x',u:'Stück/Jahr',min:0,max:12000,st:250,v:2000},{k:'kf',l:'Fixkosten B',u:'€/Jahr',min:20000,max:60000,st:2000,v:36000}],
  calc:v=>{const KA=12000+8.5*v.x,KB=v.kf+4.5*v.x,xk=(v.kf-12000)/4;return{KA,KB,xk}},
  rows:(v,r)=>[['Kosten A',nz(r.KA,0)+' €'],['Kosten B',nz(r.KB,0)+' €'],['Günstiger',Math.abs(r.KA-r.KB)<1?'beide gleich':r.KA<r.KB?'A um '+nz(r.KB-r.KA,0)+' €':'B um '+nz(r.KA-r.KB,0)+' €',Math.abs(r.KA-r.KB)<=.01*r.KA?'g':'']],
  svg:(v,r)=>{const c=kvChart({xm:12000,ym:130000,A:[12000,8.5],B:[v.kf,4.5],shade:1});let s=c.s;
   s+=`<path d="M${F(c.px(v.x))} 40V232" stroke="var(--acc)" stroke-width="2.4"/>`+`<circle cx="${F(c.px(v.x))}" cy="${F(c.py(r.KA))}" r="5" fill="var(--red)"/><circle cx="${F(c.px(v.x))}" cy="${F(c.py(r.KB))}" r="5" fill="var(--flow)"/>`;
   s+=L(c.px(v.x)+(v.x>8000?-8:8),254,nz(v.x,0)+' Stück',v.x>8000?'end':'start',17,'var(--acc)',700)+L(470,58,'A','end',19,'var(--red)')+L(470,84,'B','end',19,'var(--flow)');return s},
  auf:{z:'Stelle genau die kritische Menge ein.',t:'Die Geschäftsleitung will wissen, ab welcher Menge sich Verfahren B lohnt. Stelle die Menge so ein, dass beide Verfahren gleich teuer sind (höchstens 1 % Unterschied).',h:'Tipp: Ändere zuerst die Fixkosten von B. Dann wandert der Schnittpunkt.',ok:(v,r)=>v.x>0&&Math.abs(r.KA-r.KB)<=.01*r.KA}}};

X['Mitarbeitergespräche führen']={
 v:['Ein sonst zuverlässiger Mitarbeiter macht seit zwei Wochen auffällig viele Fehler. Wann und wie sprichst Du ihn an?',
  ['Erst, wenn sich die Fehler weiter häufen.','Bald, unter vier Augen, mit konkreten Beispielen.','In der nächsten Teamrunde vor allen.','Gar nicht, er merkt es selbst.'],1,
  'Je früher, desto kleiner das Problem. Unter vier Augen und mit Beispielen kann er die Lage erklären, ohne das Gesicht zu verlieren.'],
 ein:[S(12,'Ein gutes Gespräch beginnt vor dem Termin: Ziel klären, Fakten sammeln, einen ruhigen Raum wählen.',
   CARDS('Vorbereiten',[['🎯','Ziel','Was soll am Ende stehen?','a'],['📋','Fakten','Daten und Beispiele','b'],['🚪','Rahmen','unter vier Augen','y']])),
  S(14,'Im Gespräch gehst Du in Schritten vor: Anlass und Fakten nennen, zuhören, gemeinsam eine Lösung finden, verbindlich abschließen.',
   FLOW('Ablauf',[['👋','Anlass','und Fakten','a'],['👂','Zuhören','offene Fragen','b'],['🤝','Lösung','gemeinsam','y'],['📅','Abschluss','Folgetermin','g']],{y:64,h:132})),
  S(13,'Beschreibe Verhalten, nicht die Person. Ich-Botschaften öffnen das Gespräch, Du-Botschaften schließen es.',
   VS('So oder so?',{h:'Ich-Botschaft',c:'g',m:'ok',l:['„Mir ist aufgefallen …“','„Ich brauche …“']},{h:'Du-Botschaft',c:'r',m:'no',l:['„Du bist immer …“','„Du machst nie …“']})),
  S(12,'Am Ende fasst Du zusammen, was vereinbart ist, und legst einen Folgetermin fest. So wirkt das Gespräch nach.',
   LIST('Abschluss',[['Ergebnis zusammenfassen','ok'],['Wer macht was bis wann?','ok'],['Folgetermin festlegen','ok'],['Kurz notieren','ok']]))],
 skz:[[SKZ(gsSkizze,'Skizze Gesprächsablauf'),'Vier Schritte, die in jedes Mitarbeitergespräch gehören.']]};

/* ---------- Bruchstrich in Merkbox und Lösungsweg: [[Zähler||Nenner]] ---------- */
const FRX=s=>String(s).replace(/\[\[(.+?)\|\|(.+?)\]\]/g,'<span class="fr"><span>$1</span><span>$2</span></span>').replace(/([A-Za-zητσβμφρϑλ])_([A-Za-z0-9äöüßΔ]+)/g,'$1<sub>$2</sub>').replace(/((?:[^\s<>(]+(?:<sub>[^<]*<\/sub>)? = )?√?)(<span class="fr">.*?<\/span><\/span>[.,;]?)/g,'<span style="display:inline-block;max-width:100%">$1$2</span>');
const fixFR=root=>root.querySelectorAll('#mbx li, .nsl li, .nsl details p, .ibc p, .sol div, .eh li, .q > p, .opt, .fb, .simfx, .skc').forEach(e=>{if(/\[\[|_[A-Za-z0-9äöüß]/.test(e.textContent)&&!e.dataset.fr){e.dataset.fr=1;e.innerHTML=FRX(e.innerHTML)}});
new MutationObserver(()=>fixFR(document)).observe(document.getElementById('view'),{childList:true,subtree:true});

/* ---------- Regler mit Auftrag ---------- */
const RFK='lernlabor-pro-rf',AK='lernlabor-pro-auf';
const lsG=k=>{try{return JSON.parse(localStorage.getItem(k)||'{}')||{}}catch(e){return {}}},lsS=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const FAVK='lernlabor-pro-fav'+FRS,NOTK='lernlabor-pro-notiz'+FRS;
const favs=()=>{const a=lsG(FAVK);return Array.isArray(a)?a:[]};
function simPanel(key,Sm,hk){hk=hk||{};const p=el('<h2>Werte einstellen</h2><p class="sub simn">'+esc(Sm.t)+'</p>','panel psim');p.id='sim';
 const v={},ctl=[];Sm.c.forEach(c=>v[c.k]=c.opts?c.opts[c.v]:c.v);
 const g=el('','simg'),sv=el('','simsv'),cs=el('','simc');
 const done=()=>!!lsG(AK)[key];
 const au=el('<button type="button" class="aufk" aria-expanded="false"><span class="aufh"><b>🎯 Auftrag</b><span class="aufd"></span><span class="aufa">▾ Aufklappen</span></span><span class="aufz">Ziel: '+FRX(esc(Sm.auf.z))+'</span></button><div class="aufb" hidden><p>'+FRX(esc(Sm.auf.t))+'</p><p class="sub">'+FRX(esc(Sm.auf.h))+'</p></div><p class="aufr" aria-live="polite"></p>','auf');
 au.querySelector('.aufk').onclick=e=>{const b=au.querySelector('.aufb');b.hidden=!b.hidden;e.currentTarget.setAttribute('aria-expanded',!b.hidden);au.querySelector('.aufa').textContent=b.hidden?'▾ Aufklappen':'▴ Zuklappen'};
 cs.append(au);
 /* Auswahlregler: opts mit Beschriftungen in lab (Text statt Zahl) */
 Sm.c.forEach(c=>{const dg=(String(c.st||1).split('.')[1]||'').length,fm=x=>c.lab?c.lab[c.opts.indexOf(x)]:c.opts?nt(x,2):nz(x,dg);
  const w=el('<div class="rg2"><label class="rgl" for="rg-'+c.k+'">'+FRX(esc(c.l))+'</label><input id="rg-'+c.k+'" type="range" min="'+(c.opts?0:c.min)+'" max="'+(c.opts?c.opts.length-1:c.max)+'" step="'+(c.opts?1:c.st)+'" value="'+c.v+'">'+(c.opts?'<b class="rgv"></b>':'<input class="rgn" type="text" inputmode="decimal" autocomplete="off" aria-label="'+esc(c.l)+' als Zahl">')+'<span class="rgu">'+esc(c.u||'')+'</span><p class="rgh" hidden></p></div>','').firstChild;
  const i=w.querySelector('input[type=range]'),n=w.querySelector('.rgn'),o=w.querySelector('.rgv'),h=w.querySelector('.rgh');
  const show=()=>{if(n)n.value=fm(v[c.k]);if(o)o.textContent=fm(v[c.k]);h.hidden=true;i.style.setProperty('--p',((+i.value-+i.min)/((+i.max-+i.min)||1)*100)+'%')};
  i.oninput=()=>{v[c.k]=c.opts?c.opts[+i.value]:+i.value;show();up()};
  if(n){const take=x=>{x=Math.min(c.max,Math.max(c.min,x));x=Math.round((x-c.min)/c.st)*c.st+c.min;x=+x.toFixed(6);v[c.k]=x;i.value=x;show();up()};
   n.onchange=()=>{const t=n.value.trim().replace(/\s/g,'');h.hidden=true;h.innerHTML='';
    if(/^\d{1,3}\.\d{3}$/.test(t)){const a=parseFloat(t),b=+t.replace('.','');h.hidden=false;h.textContent='Meinst Du ';[[a,nz(a,3)],[b,nz(b,0)]].forEach((q,k)=>{const bb=document.createElement('button');bb.type='button';bb.className='rghb';bb.textContent=q[1];bb.onclick=()=>take(q[0]);h.append(bb,k?' ?':' oder ')});return}
    const x=parseFloat(t.replace(',','.'));if(isNaN(x)){show();return}take(x);if(x<c.min||x>c.max){h.hidden=false;h.textContent='Möglich sind '+fm(c.min)+' bis '+fm(c.max)+(c.u?' '+c.u:'')+'.'}};
   n.onfocus=()=>n.select()}
  ctl.push({c,i,show});show();cs.append(w)});
 const bt=el('<button type="button" class="btn ubb">✏️ Üben</button><button type="button" class="btn sec fvb" aria-pressed="false"></button><details class="more"><summary>⋯ Mehr</summary><div class="mm"><button type="button" data-a="w">↺ Werte zurücksetzen</button><button type="button" data-a="a">Auftrag zurücksetzen</button></div></details>','simb');
 const fv=bt.querySelector('.fvb'),fs=()=>{const on=favs().includes(key);fv.innerHTML=(on?'★':'☆')+' Favorit';fv.setAttribute('aria-pressed',on);fv.title=on?'Aus den Favoriten entfernen':'Zu den Favoriten'};
 fv.onclick=()=>{let a=favs();a=a.includes(key)?a.filter(x=>x!==key):a.concat(key);lsS(FAVK,a);fs()};fs();
 bt.querySelector('.ubb').onclick=()=>hk.ueben&&hk.ueben();
 bt.querySelector('[data-a=w]').onclick=()=>{ctl.forEach(x=>{v[x.c.k]=x.c.opts?x.c.opts[x.c.v]:x.c.v;x.i.value=x.c.v;x.show()});bt.querySelector('.more').open=false;up()};
 bt.querySelector('[data-a=a]').onclick=()=>{const A=lsG(AK);delete A[key];lsS(AK,A);const o=lsG(RFK);if(o[key]){delete o[key].r;lsS(RFK,o)}bt.querySelector('.more').open=false;paintRF(key);up(true)};
 const tb=el('','simk');cs.append(bt,tb);
 g.append(sv,cs);p.append(g);p._fix=Sm.fix;
 function up(quiet){const r=Sm.calc(v);sv.innerHTML='<svg viewBox="0 0 480 270" class="mlsk" role="img" aria-label="'+esc(Sm.t)+'">'+Sm.svg(v,r)+'</svg>';
  const R=Sm.rows(v,r);tb.innerHTML=R.map(x=>'<div class="kc'+(x[2]?' t'+x[2]:'')+'"><b>'+esc(x[1])+'</b><span>'+FRX(esc(x[0]))+'</span></div>').join('');
  p._all=()=>'<table>'+Sm.c.map(c=>'<tr><td>'+FRX(esc(c.l))+'</td><td>'+esc((c.lab?c.lab[c.opts.indexOf(v[c.k])]:c.opts?nt(v[c.k],2):nz(v[c.k],(String(c.st||1).split('.')[1]||'').length))+(c.u?' '+c.u:''))+'</td></tr>').join('')+R.map(x=>'<tr'+(x[2]?' class="t'+x[2]+'"':'')+'><td>'+FRX(esc(x[0]))+'</td><td>'+esc(x[1])+'</td></tr>').join('')+'</table>';
  hk.all&&hk.all(p._all());
  const ok=Sm.auf.ok(v,r);if(ok&&!done()&&!quiet){const A=lsG(AK);A[key]=1;lsS(AK,A);au.classList.add('aufflash');const o=lsG(RFK);o[key]=o[key]||{};o[key].r=1;lsS(RFK,o);paintRF(key)}
  au.classList.toggle('aufok',done());au.querySelector('.aufd').textContent=done()?'✓ geschafft':'';au.querySelector('.aufr').innerHTML=ok?'✅ Geschafft. Diese Einstellung erfüllt den Auftrag.':''}
 up();return p}
function paintRF(key){const o=lsG(RFK)[key]||{},bs=[...document.querySelectorAll('#rfs button')];let cur=bs.find(b=>!o[b.dataset.s]);bs.forEach(b=>{b.classList.toggle('ok',!!o[b.dataset.s]);b.classList.toggle('on',b===cur)})}

/* ---------- Themenseite erweitern: Regler nach der Skizze, Hinweis für geplante Themen ---------- */
const fach0=fach;
fach=function(f){fach0(f);const m=modSel[f],mod=D[f].modules[m],Q=X[mod.t]||{},key=f+':'+m,v=$('#view');
 /* Einleitung wie im Lernlabor: Blocksatz, am Handy zwei Zeilen mit „…“, Tippen oder mehr/weniger klappt auf */
 {const ds=v.querySelector('.tdesc'),mr=v.querySelector('.tmore');if(ds&&mr){const dt=document.createElement('span');dt.className='tdots';dt.setAttribute('aria-hidden','true');ds.after(dt);
  const lab=()=>{const c=ds.classList.contains('cl');mr.textContent=c?'mehr ▾':'weniger ▴';mr.setAttribute('aria-expanded',String(!c))};
  const chk=()=>{const c=ds.classList.contains('cl'),ov=c&&ds.scrollHeight>ds.clientHeight+2;ds.classList.toggle('ov',ov);mr.hidden=c?!ov:false;lab()};
  mr.onclick=()=>{ds.classList.toggle('cl');chk()};ds.onclick=()=>{if(innerWidth<900){ds.classList.toggle('cl');chk()}};ds.title='Tippen zum Ein- und Ausklappen';requestAnimationFrame(chk)}}
 if(mod.wip){const ub=$('#ueb');if(ub)ub.remove();const mb=$('#mbx h2');if(mb)mb.textContent='🗺️ Geplant';
  const b=el('<p><b>🚧 Dieses Thema ist geplant</b> (Arbeitspaket '+esc(mod.wip)+'). In '+esc(D[f].name)+' schon fertig:</p><div class="wipl"></div>','panel wip');
  D[f].modules.forEach((x,i)=>{if(!x.wip){const c=el('<button type="button" class="chip">'+esc(x.t)+'</button>','');c.firstChild.onclick=()=>{modSel[f]=i;go(f);scrollTo(0,0)};b.querySelector('.wipl').append(c.firstChild)}});
  const rf=$('#rfs');if(rf)rf.remove();const ds=v.querySelector('.tmore');(ds||v.firstChild).after(b)}
 let simP=null,allBox=null,openUeb=()=>{};if(Q.sim){const p=simP=simPanel(key,Q.sim,{ueben:()=>openUeb(),all:h=>{if(allBox)allBox.innerHTML=h}}),ub=$('#ueb');ub?ub.before(p):v.append(p);
  const rf=$('#rfs');if(rf){const bs=[...rf.querySelectorAll('button')],ia=bs.findIndex(b=>b.dataset.s==='u')-1;const nb=el('<button type="button" data-s="r"><span class="n"><b></b></span><span class="t">Ausprobieren</span></button>','').firstChild;
   nb.onclick=()=>p.scrollIntoView({behavior:'smooth',block:'start'});(ia>=0?bs[ia]:bs[bs.length-1]).after(nb);rf.querySelectorAll('button').forEach((b,i)=>b.querySelector('.n b').textContent=i+1)}
  paintRF(key)}
 /* Thema wechseln wie im Lernlabor: zwei Wischleisten (Gebiete, Themen) statt einer langen Liste */
 {const mn=v.querySelector('.thm'),G=GRP[f],ms=D[f].modules;if(mn&&G){let gs=Math.max(0,G.findIndex(g=>g[1].includes(m)));
  mn.classList.add('wls');const W=(k,l)=>'<div class="wlw"><button type="button" class="wla l" aria-label="zurück" tabindex="-1">‹</button><div class="wl" data-k="'+k+'" role="group" aria-label="'+l+'"></div><button type="button" class="wla r" aria-label="weiter" tabindex="-1">›</button></div>';
  mn.innerHTML=W('g','Gebiet wählen')+W('t','Thema wählen');
  const bg=mn.querySelector('[data-k=g]'),bt=mn.querySelector('[data-k=t]');
  const arr=w=>{const l=w.querySelector('.wl'),mx=l.scrollWidth-l.clientWidth;w.classList.toggle('ml',l.scrollLeft>4);w.classList.toggle('mr',l.scrollLeft<mx-4)};
  const mid=l=>{const c=l.querySelector('[aria-pressed=true],[aria-current=true]')||l.firstChild;if(c)l.scrollLeft=c.offsetLeft-(l.clientWidth-c.offsetWidth)/2;arr(l.parentNode)};
  const topics=()=>{bt.innerHTML=G[gs][1].map(j=>'<button type="button" data-i="'+j+'" aria-current="'+(j===m)+'">'+esc(ms[j].t)+'</button>').join('');
   bt.querySelectorAll('button').forEach(b=>b.onclick=()=>{modSel[f]=+b.dataset.i;go(f);scrollTo(0,0)});bt.scrollLeft=0;mid(bt)};
  bg.innerHTML=G.map((g,i)=>'<button type="button" data-g="'+i+'" aria-pressed="'+(i===gs)+'">'+esc(g[0])+'</button>').join('');
  bg.querySelectorAll('button').forEach(b=>b.onclick=()=>{gs=+b.dataset.g;bg.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));topics()});
  mn.querySelectorAll('.wlw').forEach(w=>{const l=w.querySelector('.wl');l.addEventListener('scroll',()=>arr(w),{passive:true});
   w.querySelector('.wla.l').onclick=()=>l.scrollBy({left:-l.clientWidth*.7,behavior:'smooth'});w.querySelector('.wla.r').onclick=()=>l.scrollBy({left:l.clientWidth*.7,behavior:'smooth'})});
  topics();const op=()=>{const t=v.querySelector('#thd .thw');if(t)t.textContent='Thema wechseln '+(mn.hidden?'▾':'▴');if(!mn.hidden)requestAnimationFrame(()=>{mid(bg);mid(bt)})};
  v.querySelectorAll('#thd .crb,#thd .thw').forEach(b=>b.addEventListener('click',op));
  document.onkeydown=e=>{if(e.key==='Escape'&&mn.isConnected&&!mn.hidden){const t=v.querySelector('#thd .crb');t&&t.click()}}}}
 /* Üben steht am Schluss der Themenseite und ist eingeklappt */
 {const ub=$('#ueb');if(ub&&!mod.wip){v.append(ub);const h=ub.querySelector('h2'),nq=mod.mcq.length,nc=C.filter(x=>x.f===f&&x.m===m).length;
  const bd=document.createElement('div');bd.className='uebb';while(h.nextSibling)bd.append(h.nextSibling);bd.hidden=true;
  const bt=document.createElement('button');bt.type='button';bt.className='uebk';bt.setAttribute('aria-expanded','false');
  bt.innerHTML='<span class="uebt">✏️ Üben</span><span class="uebz">'+nq+' Check-Fragen'+(nc?' · '+nc+' Rechenaufgabe'+(nc>1?'n':''):'')+'</span><span class="ueba" aria-hidden="true">▾</span>';
  const set=o=>{bd.hidden=!o;bt.setAttribute('aria-expanded',String(o));bt.querySelector('.ueba').textContent=o?'▴':'▾'};
  bt.onclick=()=>set(bd.hidden);h.replaceWith(bt);ub.append(bd);
  const rb=v.querySelector('#rfs [data-s=u]');if(rb)rb.addEventListener('click',()=>set(true));
  openUeb=()=>{set(true);ub.scrollIntoView({behavior:'smooth',block:'start'})}}}
 /* Schrittleiste wie im Lernlabor: ohne „Merken“, vier Schritte in einer Zeile */
 {const rf=$('#rfs');if(rf){const mb=rf.querySelector('[data-s=m]');if(mb)mb.remove();rf.querySelectorAll('button').forEach((b,i)=>b.querySelector('.n b').textContent=i+1);paintRF(key)}}
 /* Nachschlagen wie im Lernlabor: alles eingeklappt, dazu „Alle Werte“ und „Meine Notiz“ */
 if(!mod.wip){const E=ERK[mod.t],GL=mod.fo||mod.pts.filter(x=>x.includes('=')),WI=mod.fo?mod.pts:mod.pts.filter(x=>!GL.includes(x)),ul=a=>'<ul>'+a.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>';
  const mb=$('#mbx'),gr=mb&&mb.closest('.grid');if(mb){const sd=mb.parentNode;mb.remove();if(sd.classList.contains('side')&&!sd.childNodes.length){sd.remove();if(gr)gr.style.gridTemplateColumns='minmax(0,1fr)'}}
  let ns=v.querySelector('.nsl');if(!ns){ns=el('','panel nsl');v.append(ns)}
  const D1=(sm,h)=>'<details><summary>'+sm+'</summary>'+h+'</details>';
  ns.innerHTML='<h2>Nachschlagen</h2>'+(simP&&simP._fix?D1('📏 Rechenweg und Hintergrund','<p>'+esc(simP._fix)+'</p>'):'')+(simP?D1('🗃️ Alle Werte','<div class="allw"></div>'):'')+(WI.length?D1('📌 Wichtiges','<div class="wib">'+ul(WI)+'</div>'):'')+(GL.length?D1('📜 Grundgleichungen',ul(GL)):'')+(E?D1('💡 Verstehen und typische Fehler','<p>'+esc(E[0])+'</p>'+(E[1]?'<p><b>🏭 Im Betrieb:</b> '+esc(E[1])+'</p>':'')+(E[2]?'<p><b>Typische Fehler:</b></p>'+ul(E[2]):'')):'')+D1('📝 Meine Notiz','<textarea class="ntz" rows="4" aria-label="Meine Notiz zu diesem Thema" placeholder="Deine Notiz zu diesem Thema. Sie bleibt auf Deinem Gerät."></textarea><p class="sub ntzs" aria-live="polite"></p>');
  {const rb=KI.readBtn(mod.t+'. '+mod.pts.join(' '),'w'),wb=ns.querySelector('.wib');if(rb&&wb)wb.append(rb)}
  allBox=ns.querySelector('.allw');if(allBox&&simP)allBox.innerHTML=simP._all();
  const ta=ns.querySelector('.ntz'),nst=ns.querySelector('.ntzs'),N=lsG(NOTK);ta.value=N[key]||'';if(ta.value){const sm=ta.closest('details').querySelector('summary');sm.insertAdjacentHTML('beforeend','<span class="ntzm">vorhanden</span>')}
  let tm=0;ta.oninput=()=>{clearTimeout(tm);tm=setTimeout(()=>{const o=lsG(NOTK);if(ta.value.trim())o[key]=ta.value;else delete o[key];lsS(NOTK,o);nst.textContent='Gespeichert auf diesem Gerät.'},400)};
  const ub=$('#ueb');if(ub)v.append(ub)}};
const home0=home;
home=function(v){home0(v);v.querySelectorAll('.rstand,.warn').forEach(x=>x.remove());[...v.querySelectorAll(':scope>.panel')].forEach(p=>{if(p.textContent.includes('Abkürzungen'))p.remove()});
 const hh=v.querySelector('.hh');if(hh)hh.textContent='Handlungsbereiche';v.querySelectorAll('.nxt small').forEach(x=>{if(x.textContent==='(alle Fächer)')x.textContent='(alle Bereiche)'});
 const fd=FRD[FR],hc=['#2f6fd0','#c27a12','#c2457b'];
 const a=el('<h2>🧭 So ist die Hauptqualifikation aufgebaut</h2><div class="hqa">'+fd.hq.map((h,i)=>'<div style="--c:'+hc[i]+'"><b>'+esc(h[0])+'</b><small>'+esc(h[1])+'</small></div>').join('')+'</div><p class="sub" style="margin-top:8px">Rechnen allein reicht nicht: In jeder Aufgabe leitest Du aus dem Ergebnis eine Entscheidung ab und begründest sie.'+(fd.hqn?' '+esc(fd.hqn):'')+'</p>','panel');
 const sw=el('<h2><span aria-hidden="true">🎓</span> Deine Fachrichtung</h2><div class="seg frs" role="group" aria-label="Fachrichtung wählen">'+Object.keys(FRN).map(k=>'<button type="button" data-k="'+k+'" aria-pressed="'+(k===FR)+'" title="'+FRN[k]+'">'+FRD[k].em+' '+FRK[k]+'</button>').join('')+'</div><p class="sub">Technik (bei Chemie Produktion, bei Logistik Logistikprozesse) und die Aufgaben „Im Betrieb“ wechseln mit der Fachrichtung. Organisation sowie Führung und Personal sind gemeinsam. Dein Lernstand wird je Fachrichtung getrennt gemerkt.</p>','panel frp');
 sw.querySelectorAll('button').forEach(b=>b.onclick=()=>{if(b.dataset.k!==FR)frSet(b.dataset.k)});v.prepend(sw);
 const ib=el('<button type="button" class="lk" data-k="betrieb">🏭 Im Betrieb <small>(fünf mehrstufige Aufgaben)</small></button>','').firstChild;ib.onclick=()=>{go('betrieb');scrollTo(0,0)};{const l=v.querySelector('.nxt .lk');if(l)l.before(ib)}
 const nx=v.querySelector('.nxt');nx?nx.after(a):v.prepend(a)};
/* ---------- Im Betrieb: mehrstufige Aufgaben über Technik, Organisation und Führung ---------- */
window.betrieb=function(v){const bn={tec:TKZ,org:'Organisation',fp:'Führung'};
 v.append(el('<h2>🏭 Im Betrieb</h2><p class="sub">Fünf Lagen aus dem Alltag eines Meisters in der Fachrichtung '+FRN[FR]+'. Jede Aufgabe hat mehrere Schritte und verbindet Technik, Organisation und Führung, so wie die Situationsaufgaben in der Prüfung. Du schreibst Deine Lösung und hakst sie mit dem Erwartungshorizont ab.</p>','panel'));
 const st=(load().c)||{};
 CASES.forEach((c,i)=>{if(!c.ib)return;const d=st[c.f+':'+c.t],n={};c.tasks.forEach(t=>n[t.b]=(n[t.b]||0)+1);
  const p=el('<h3>'+esc(c.t)+'</h3><p>'+esc(c.kz)+'</p><div class="ibm">'+['tec','org','fp'].filter(b=>n[b]).map(b=>'<span class="tag" style="background:'+D[b].col+'">'+bn[b]+' '+n[b]+'</span>').join('')+'<span class="sub">'+c.tasks.length+' Schritte · '+c.tasks.reduce((a,t)=>a+t.p,0)+' Punkte'+(d?' · zuletzt '+Math.round(d.g/d.m*100)+' %':'')+'</span></div><button type="button" class="btn">Aufgabe öffnen →</button>','panel ibc');
  p.querySelector('.btn').onclick=()=>{fIdx=i;go('fall');scrollTo(0,0)};v.append(p)})};
{const b=document.querySelector('#hdr .bs');if(b)b.textContent='Hauptqualifikation '+FRN[FR]+' · Verstehen. Anwenden. Bestehen.'}
/* Favoriten auf der Startseite */
{const hF=home;home=function(v){hF(v);const a=favs().map(k=>{const q=k.split(':'),m=D[q[0]]&&D[q[0]].modules[+q[1]];return m?[q[0],+q[1],m.t]:null}).filter(Boolean);if(!a.length)return;
 const p=el('<h2><span aria-hidden="true">⭐</span> Deine Favoriten</h2><div class="favl"></div>','panel favp');a.forEach(x=>{const b=document.createElement('button');b.type='button';b.className='chip';b.textContent=x[2];b.onclick=()=>{modSel[x[0]]=x[1];go(x[0]);scrollTo(0,0)};p.querySelector('.favl').append(b)});
 const nx=v.querySelector('.nxt');nx?nx.after(p):v.prepend(p)}}
/* Fußzeile wie im Lernlabor: Impressum, Datenschutz, Hinweise */
{const vf=document.querySelector('.ftr');if(vf){const OW='Dr. rer. nat. Markus Baum',ML=['baum.ma91','yahoo.de'].join('@'),AD='Am alten Schlachthof 2<br>93053 Regensburg';
 const ft=document.createElement('footer');ft.id='ft';ft.className='ftr';
 ft.innerHTML='<nav class="ftl" aria-label="Impressum und Datenschutz"><button type="button" data-ft="Impressum">Impressum</button><span aria-hidden="true">·</span><button type="button" data-ft="Datenschutz">Datenschutz</button><span aria-hidden="true">·</span><button type="button" data-ft="Hinweise">Hinweise</button></nav><p class="ftk">🔒 Dein Lernstand bleibt auf Deinem Gerät · keine Konten · kein Tracking</p><p class="ft-c">© 2026 '+OW+' · Version 8 · Weitergabe nur mit Erlaubnis</p>'
 +'<details><summary>Hinweise</summary><p>Alle Aufgaben sind eigene Aufgaben und keine IHK-Prüfungsaufgaben. Ich prüfe die Inhalte sorgfältig, Fehler sind trotzdem möglich. Normwerte, Grenzwerte und Fristen sind Beispiel- und Richtwerte zum Üben, maßgeblich sind die aktuellen Normen, Gesetze, Tabellenbücher und die Angaben Deiner IHK. Lernlabor Pro ersetzt keinen Lehrgang und garantiert keinen Prüfungserfolg.</p></details>'
 +'<details><summary>Impressum</summary><p>Angaben gemäß § 5 DDG</p><p>'+OW+'<br>'+AD+'</p><p>E-Mail: '+ML+'</p><p>Lernlabor Pro ist ein privates Lernangebot. Es steht in keiner Verbindung zur IHK oder zum DIHK.</p><p><b>Urheberrecht:</b> Aufgaben, Texte, Grafiken und Programm von Lernlabor Pro sind urheberrechtlich geschützt. Du darfst sie für Dein eigenes Lernen nutzen. Kopieren, Weitergeben oder Veröffentlichen, auch in Teilen, ist nur mit meiner schriftlichen Erlaubnis gestattet.</p></details>'
 +'<details><summary>Datenschutz</summary><p>Verantwortlich: '+OW+', '+AD.replace('<br>',', ')+', '+ML+'</p><p><b>Dein Lernstand:</b> Lernlabor Pro speichert Deinen Lernstand, Deine Favoriten und Deine Notizen nur in Deinem Browser auf Deinem Gerät. Sie werden nicht automatisch an mich oder andere übertragen. Du kannst sie unter „Ich“ exportieren oder löschen.</p><p><b>Hosting:</b> Die Seite liegt bei GitHub Pages (GitHub Inc., USA). Beim Aufruf verarbeitet GitHub technisch nötige Zugriffsdaten, zum Beispiel Deine IP-Adresse, um die Seite auszuliefern und vor Angriffen zu schützen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren Bereitstellung). Die Übermittlung in die USA stützt sich auf das EU-US Data Privacy Framework.</p><p>Keine Cookies, kein Tracking, keine KI durch diese Seite.</p><p><b>Deine Rechte:</b> Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Beschwerde bei einer Datenschutz-Aufsichtsbehörde (in Bayern für Private: Bayerisches Landesamt für Datenschutzaufsicht).</p></details>';
 vf.replaceWith(ft);ft.querySelectorAll('.ftl button').forEach(b=>b.onclick=()=>{let t=null;ft.querySelectorAll(':scope>details').forEach(d=>{const m=d.querySelector('summary').textContent.trim()===b.dataset.ft;d.open=m&&!d.open;if(d.open)t=d});if(t)t.scrollIntoView({behavior:'smooth',block:'nearest'})})}}
/* Einheiten mit echtem Bruchstrich (m/s wird zu m über s), nur im Text, nicht in Zeichnungen und Eingabefeldern */
{const NU=['m³','m²','cm³','cm²','mm²','mm','cm','km','µm','m','kg','mg','g','t','ml','l','kJ','MJ','J','kWh','MWh','Wh','kW','MW','W','kN','Nm','N','€','ct','kmol','mol','Stück','Teile','U','kvar','K','mbar','bar','A','h','min','s','1'],
 DE=['m³','m²','cm²','mm²','mm','cm','m','kmol','mol','kg','g','t','ml','l','s²','s','min','h','a','d','K','kWh','MWh','kW','Stück','Jahr','Tag','Woche','Monat','Schicht','Teil','Zahn','U'],
 W='A-Za-zÄÖÜäöüßµΩ0-9_',rq=x=>x.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),
 RE=new RegExp('(^|[^'+W+'/€²³])('+NU.map(rq).join('|')+')/('+DE.map(rq).join('|')+'|\\([^()/]{1,16}\\))(?![/²³'+W+'])','g'),
 SKIP=/^(svg|input|textarea|select|option|script|style|code)$/i;
 const walk=root=>{if(!root)return;const tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>{if(n.nodeValue.indexOf('/')<0)return NodeFilter.FILTER_REJECT;for(let e=n.parentNode;e&&e!==root.parentNode;e=e.parentNode){if(e.nodeType===1&&(SKIP.test(e.nodeName)||e.classList.contains('fru')||e.isContentEditable))return NodeFilter.FILTER_REJECT}return NodeFilter.FILTER_ACCEPT}}),L=[];
  while(tw.nextNode())L.push(tw.currentNode);
  L.forEach(n=>{const t=n.nodeValue;RE.lastIndex=0;if(!RE.test(t))return;RE.lastIndex=0;const fr=document.createDocumentFragment();let last=0,m;
   while((m=RE.exec(t))){const st=m.index+m[1].length;fr.append(t.slice(last,st));const sp=document.createElement('span');sp.className='fr fru';const a=document.createElement('span'),b=document.createElement('span');a.textContent=m[2];b.textContent=m[3].replace(/^\((.*)\)$/,'$1');sp.append(a,b);sp.setAttribute('aria-label',m[2]+' pro '+b.textContent);fr.append(sp);last=m.index+m[0].length}
   fr.append(t.slice(last));n.parentNode.replaceChild(fr,n)})};
 /* dasselbe in Zeichnungen: Zähler und Nenner als kleine Zeilen übereinander, Bruchstrich als Linie */
 const NS='http://www.w3.org/2000/svg',svgFr=root=>{root.querySelectorAll('svg text').forEach(t=>{if(t.children.length||t.hasAttribute('data-fru'))return;const s=t.textContent;if(s.indexOf('/')<0)return;RE.lastIndex=0;if(!RE.test(s))return;RE.lastIndex=0;
   const seg=[];let last=0,m;while((m=RE.exec(s))){const st=m.index+m[1].length;seg.push(s.slice(last,st),[m[2],m[3].replace(/^\((.*)\)$/,'$1')]);last=m.index+m[0].length}seg.push(s.slice(last));
   const cs=getComputedStyle(t),fs=parseFloat(cs.fontSize)||12,sm=fs*.74,x0=parseFloat(t.getAttribute('x'))||0,y0=parseFloat(t.getAttribute('y'))||0,an=cs.textAnchor||t.getAttribute('text-anchor')||'start';
   const meas=(str,size)=>{if(!str)return 0;t.textContent='';const p=document.createElementNS(NS,'tspan');p.textContent=str;if(size)p.setAttribute('font-size',size);p.setAttribute('xml:space','preserve');p.style.whiteSpace='pre';t.append(p);let w=0;try{w=p.getComputedTextLength()}catch(e){}return w};
   const sp=meas('a b')-meas('ab'),parts=seg.map(g=>typeof g==='string'?{s:g,w:meas(g)+((/\s$/.test(g)?sp:0))+((/^\s/.test(g)?sp:0))}:{n:g[0],d:g[1],wn:meas(g[0],sm),wd:meas(g[1],sm)});
   let W=0;parts.forEach(p=>{if(p.n){p.w=Math.max(p.wn,p.wd)+fs*.24}W+=p.w});
   let x=an==='middle'?x0-W/2:an==='end'?x0-W:x0;t.textContent='';t.setAttribute('data-fru','1');t.setAttribute('text-anchor','start');t.style.textAnchor='start';
   const mk=(str,xx,yy,size)=>{const p=document.createElementNS(NS,'tspan');const um=/^(.*?[A-Za-zητσβμ])_([A-Za-z0-9]+)(.*)$/.exec(str);if(um){p.append(um[1]);const u=document.createElementNS(NS,'tspan');u.setAttribute('baseline-shift','sub');u.setAttribute('font-size','.7em');u.textContent=um[2];p.append(u,um[3])}else p.textContent=str;p.setAttribute('x',xx.toFixed(2));p.setAttribute('y',yy.toFixed(2));if(size)p.setAttribute('font-size',size.toFixed(2));p.style.whiteSpace='pre';t.append(p)};
   const g=t.parentNode;parts.forEach(p=>{if(p.n){const c=x+p.w/2;mk(p.n,c-p.wn/2,y0-fs*.42,sm);mk(p.d,c-p.wd/2,y0+fs*.36,sm);
     const l=document.createElementNS(NS,'line');l.setAttribute('x1',(x+fs*.06).toFixed(2));l.setAttribute('x2',(x+p.w-fs*.06).toFixed(2));l.setAttribute('y1',(y0-fs*.3).toFixed(2));l.setAttribute('y2',(y0-fs*.3).toFixed(2));l.setAttribute('stroke',cs.fill&&cs.fill!=='none'?cs.fill:'currentColor');l.setAttribute('stroke-width',Math.max(.8,fs*.075).toFixed(2));if(t.hasAttribute('transform'))l.setAttribute('transform',t.getAttribute('transform'));l.setAttribute('class','frl');g.insertBefore(l,t.nextSibling)}
    else if(p.s){mk(p.s.replace(/^\s+/,''),x+(/^\s/.test(p.s)?sp:0),y0)}x+=p.w})})};
 const vw=document.getElementById('view');let q=0;const run=()=>{q=0;walk(vw);svgFr(vw)};
 new MutationObserver(()=>{if(!q)q=requestAnimationFrame(run)}).observe(vw,{childList:true,subtree:true,characterData:true});window.frUnits=walk}
go(tab);
})();
