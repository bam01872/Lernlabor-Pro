
/* ===== Bewegte Regler-Zeichnungen, Paket Metall (Version 11) =====
   Jede Zeichnung zeigt die Anlage selbst. svg(v,r) baut das Bild, tick(E,v,r,t,dt,st) bewegt nur Attribute benannter Teile (data-a). */
const A=(e,k,x)=>{if(e)e.setAttribute(k,x)},TXT=(e,s)=>{if(e&&e.textContent!==s)e.textContent=s},MXC=(a,b,c)=>`color-mix(in srgb,${a} ${b}%,${c||'var(--card)'})`;
const AMB='color-mix(in srgb,var(--amber) 62%,var(--ink))',TAU=2*Math.PI,CL=(x,a,b)=>Math.min(b,Math.max(a,x));
/* Drehender Zylinder von der Seite: N Mantellinien wandern über die Vorderseite */
const ROT=(x0,x1,cy,R,N,th)=>{let d='';for(let k=0;k<N;k++){const a=th+k*TAU/N;if(Math.cos(a)>.1)d+=`M${F(x0)} ${F(cy+R*Math.sin(a))}H${F(x1)}`}return d||'M0 0'};
const ROTV=(cx,R,y0,y1,N,th)=>{let d='';for(let k=0;k<N;k++){const a=th+k*TAU/N;if(Math.cos(a)>.1)d+=`M${F(cx+R*Math.sin(a))} ${F(y0)}V${F(y1)}`}return d||'M0 0'};
const RL=(n,w=1,o=.5)=>`<path data-a="${n}" d="M0 0" stroke="var(--ink)" stroke-width="${w}" opacity="${o}" fill="none"/>`;
const SIMX=(t,o)=>{if(X[t]&&X[t].sim)Object.assign(X[t].sim,o)};

/* ---------- Antriebe & Getriebe: Motor, zweistufiges Getriebe (aufgeschnitten), Seiltrommel mit Last ---------- */
{const ya=96,rs=7,W1=2*Math.PI*1.5;
SIMX('Antriebe & Getriebe',{fix:'Drehstrommotor 1450 1/min, Getriebe zweistufig mit η = 0,9. Gefordert: 50 bis 60 1/min an der Trommel und mindestens 1200 N·m. Die Zeichnung läuft in Zeitlupe (etwa 16-fach verlangsamt), das Getriebe ist aufgeschnitten gezeichnet.',
 svg:(v,r)=>{const R=rs*Math.sqrt(v.i),yb=ya+rs+R,ht=ya-R-9,hb=yb+R+9,ok=r.M2>=1200,nok=r.n2>=50&&r.n2<=60,sh=MXC('var(--mute)',55);
  let s=`<defs>${GR('gtw',STEEL,STEEL2,1)}${GR('gtm','#2f5f93','#8db7e0',1)}${GR('gtd','#a9781f','#f1d892',1)}</defs>`;
  /* Motor */
  s+=RC(12,ya-27,18,54,'#46505e','var(--ink)',4,1.6)+[-18,-9,0,9,18].map(d=>`<path d="M15 ${ya+d}h12" stroke="var(--card)" stroke-width="1.6" opacity=".7"/>`).join('');
  s+=RC(28,ya-32,74,64,'url(#gtm)','var(--ink)',5,1.8)+[-24,-16,-8,0,8,16,24].map(d=>`<path d="M32 ${ya+d}h64" stroke="var(--ink)" stroke-width="1" opacity=".35"/>`).join('');
  s+=RC(50,ya-42,28,11,'#46505e','var(--ink)',2,1.5)+RC(34,ya+32,14,7,'#46505e','var(--ink)',1,1.4)+RC(82,ya+32,14,7,'#46505e','var(--ink)',1,1.4)+RC(102,ya-22,5,44,'#46505e','var(--ink)',1,1.4);
  /* Wellen */
  s+=RC(107,ya-3.5,49,7,sh,'var(--ink)',0,1.3)+RC(111,ya-9,6,18,'var(--amber)','var(--ink)',1,1.3)+RC(118,ya-9,6,18,'var(--amber)','var(--ink)',1,1.3);
  /* Gehäuse */
  s+=RC(128,ht,78,hb-ht,MXC('var(--mute)',9),'var(--ink)',7,2.2);
  s+=RC(132,yb-3,70,6,sh,'var(--ink)',0,1.2)+RC(162,ya-3.5,66,7,sh,'var(--ink)',0,1.3);
  [[128,ya],[201,ya],[128,yb],[201,yb]].forEach(([x,y])=>s+=RC(x,y-6,5,12,'var(--ink)','none',1,0));
  /* Zahnräder von der Seite */
  const gw=(x,cy,rr)=>RC(x,cy-rr,16,2*rr,'url(#gtw)','var(--ink)',1.5,1.4);
  s+=gw(138,yb,R)+RL('g2')+gw(138,ya,rs)+RL('g1')+gw(164,ya,R)+RL('g4')+gw(164,yb,rs)+RL('g3');
  /* Trommel */
  s+=RC(218,ya-10,8,20,'#46505e','var(--ink)',1,1.4)+RC(316,ya-10,8,20,'#46505e','var(--ink)',1,1.4);
  s+=RC(230,ya-26,82,52,'url(#gtd)','var(--ink)',1,1.6);for(let x=236;x<308;x+=6)s+=`<path d="M${x} ${ya-26}l3 52" stroke="#6b4b12" stroke-width="1.1" opacity=".55"/>`;
  s+=RC(226,ya-32,5,64,'#8a6a1c','var(--ink)',1.5,1.4)+RC(311,ya-32,5,64,'#8a6a1c','var(--ink)',1.5,1.4)+RL('g5',1.2,.6);
  /* Seil und Last */
  s+=`<line data-a="rope" x1="271" x2="271" y1="${ya+22}" y2="214" stroke="#6b4b12" stroke-width="2.6"/>`;
  s+=`<g data-a="load"><path d="M271 214v6" stroke="var(--ink)" stroke-width="2.2"/><path d="M265 226a6 6 0 1 1 12 0" fill="none" stroke="var(--ink)" stroke-width="2.2"/>`+RC(244,226,54,30,'#5b6472','var(--ink)',3,1.6)+L(271,246,'Last','middle',14,'#fff',700)+'</g>';
  /* Beschriftung */
  s+=L(59,162,'Motor '+nt(v.P,1)+' kW','middle',15,'var(--ink)',700)+L(59,184,'1450 1/min','middle',15,'var(--red)',700)+L(59,206,nz(r.M1,1)+' N·m','middle',15,'var(--flow)',700);
  s+=L(167,hb+19,'i = '+nt(v.i,1),'middle',16,'var(--ink)',700);
  s+=L(400,76,'Trommel','middle',15,'var(--ink)',700)+L(400,98,nz(r.n2,1)+' 1/min','middle',15,nok?'var(--ok)':'var(--red)',700)+L(400,120,nz(r.M2,0)+' N·m','middle',15,ok?'var(--ok)':'var(--red)',700);
  s+=!ok?L(400,196,'Moment reicht nicht:','middle',14,'var(--red)',700)+L(400,215,'Die Last bleibt hängen.','middle',14,'var(--red)',700):nok?L(400,196,'Die Last wird','middle',14,'var(--ok)',700)+L(400,215,'richtig gehoben.','middle',14,'var(--ok)',700):L(400,196,'Die Last hebt,','middle',14,AMB,700)+L(400,215,r.n2>60?'aber zu schnell.':'aber zu langsam.','middle',14,AMB,700);
  return s},
 tick:(E,v,r,t,dt,st)=>{const q=Math.sqrt(v.i),R=rs*q,yb=ya+rs+R,ok=r.M2>=1200,w=ok?W1:0;st.a=(st.a||0)+w*dt;const a=st.a,N2=Math.round(TAU*R/5.5);
  A(E.g1,'d',ROT(138,154,ya,rs,8,a));A(E.g2,'d',ROT(138,154,yb,R,N2,-a/q));A(E.g3,'d',ROT(164,180,yb,rs,8,-a/q));A(E.g4,'d',ROT(164,180,ya,R,N2,a/v.i));A(E.g5,'d',ROT(226,231,ya,32,6,a/v.i)+ROT(311,316,ya,32,6,a/v.i));
  const H=60;st.h=ok?(st.h==null?24:st.h)+w/v.i*26*dt:0;const u=st.h%(H+16),y=-Math.min(u,H),op=!ok?1:u>H?1-(u-H)/16:Math.min(1,u/5);
  A(E.load,'transform','translate(0 '+F(y)+')');A(E.load,'opacity',F(op));A(E.rope,'y2',F(214+y));A(E.rope,'opacity',F(op))}})}

/* ---------- Hydraulik: Der Kolben fährt mit der eingestellten Geschwindigkeit aus, die Last 40 kN bleibt stehen, wenn die Kraft nicht reicht ---------- */
{const yb=250,yt=124,Y0=222,ST=62,RD=112,cx=300;
SIMX('Hydraulik: Zylinder & Pumpe',{
 svg:(v,r)=>{const hw=16+v.D*.22,rw=Math.max(7,hw*.42),ok=r.Fk>=40,va=Math.min(46,10+r.vv*400);
  let s=TANK(28,208,96,44)+`<path d="M76 222V188" stroke="var(--ink)" stroke-width="2.2"/>`;
  s+=`<rect data-a="oil" x="${F(cx-hw)}" y="${Y0+14}" width="${F(2*hw)}" height="${yb-Y0-14}" style="${HF}"/>`;
  s+=FLO(`M76 152V112H196V240H${F(cx-hw)}`,ok?v.Q:0)+PUMP(76,170);
  s+=`<path d="M${F(cx-rw-3)} ${yt}H${F(cx-hw)}V${yb}H${F(cx+hw)}V${yt}H${F(cx+rw+3)}" ${HW}/>`;
  s+=`<g data-a="kol"><rect x="${F(cx-rw)}" y="${Y0-RD}" width="${F(2*rw)}" height="${RD}" fill="${MXC('var(--mute)',55)}" stroke="var(--ink)" stroke-width="2"/><rect x="${F(cx-hw+3)}" y="${Y0}" width="${F(2*hw-6)}" height="14" fill="var(--mute)" stroke="var(--ink)" stroke-width="2"/>`+RC(cx-37,Y0-RD-30,74,30,'var(--amber)','var(--ink)',3,2)+L(cx,Y0-RD-9,'40 kN','middle',15,'#111827',700)+'</g>';
  s+=`<path d="M150 106V98" stroke="var(--ink)" stroke-width="2"/>`+MANO(150,85,Math.PI*(1.1-v.p/200));
  const Lf=Math.min(80,18+24*Math.log10(1+r.Fk));s+=KPF(396,170,Lf)+L(470,198,'F = '+nz(r.Fk,1)+' kN','end',17,ok?'var(--flow)':'var(--red)',700);
  s+=`<path d="M240 190V${F(190-va)}" stroke="var(--ok)" stroke-width="3"/><polygon points="240,${F(182-va)} 234,${F(192-va)} 246,${F(192-va)}" fill="var(--ok)"/>`;
  s+=L(132,90,v.p+' bar','end',16,'var(--ink)',700)+L(88,136,'Q = '+v.Q+' l/min','start',15,'var(--ink)',600)+L(232,264,'D = '+v.D+' mm','end',15,'var(--ink)',600)+L(470,262,'P = '+nz(r.P,2)+' kW','end',18,r.P>4?'var(--red)':'var(--ink)',700);
  s+=(ok?L(28,28,'Die Last wird gehoben.','start',14,'var(--ok)',700):L(28,28,'Kraft reicht nicht: Die Last bleibt stehen.','start',14,'var(--red)',700))+L(28,56,'v = '+nz(r.vv,3)+' m/s','start',16,'var(--ok)',700);return s},
 tick:(E,v,r,t,dt,st)=>{const ok=r.Fk>=40,sp=CL(r.vv*300,4,220);let dy=0;
  if(ok){if(st.p==null){st.p=.4*ST;st.ph=0}
   if(st.ph===0){st.p+=sp*dt;if(st.p>=ST){st.p=ST;st.ph=1;st.w=.7}}else if(st.ph===1){st.w-=dt;if(st.w<=0)st.ph=2}else if(st.ph===2){st.p-=80*dt;if(st.p<=0){st.p=0;st.ph=3;st.w=.5}}else{st.w-=dt;if(st.w<=0)st.ph=0}
   dy=-st.p}else{st.p=null}
  A(E.kol,'transform','translate(0 '+F(dy)+')');A(E.oil,'y',F(Y0+14+dy));A(E.oil,'height',F(yb-Y0-14-dy))}})}

/* ---------- Sauggreifer: Der Greifer hebt das Blech vom Stapel. Reicht die Haltekraft nicht, fällt es ab ---------- */
SIMX('Pneumatik & Vakuumtechnik',{
 svg:(v,r)=>{const n=v.n,cw=10+v.D*.5,x0=70,x1=330,z=r.Fh>=r.Fn?2:r.Fh>=25*(9.81+5)?1:0,sh=MXC('var(--mute)',55),bl=MXC('var(--mute)',35);let s='';
  [164,172,180].forEach(y=>s+=RC(30,y,340,7,bl,'var(--ink)',0,1.3));s+=RC(22,188,356,9,'#b98a52','var(--ink)',1,1.4)+[40,186,332].map(x=>RC(x,197,28,9,'#b98a52','var(--ink)',1,1.4)).join('');
  s+='<g data-a="bl">'+RC(30,150,340,12,bl,'var(--ink)',0,1.8)+'</g>';
  s+=`<g data-a="gr"><rect x="192" y="50" width="16" height="36" fill="${sh}" stroke="var(--ink)" stroke-width="2"/><rect x="${x0-14}" y="86" width="${x1-x0+28}" height="14" rx="3" fill="${sh}" stroke="var(--ink)" stroke-width="2"/>`;
  for(let i=0;i<n;i++){const c=n>1?x0+(x1-x0)*i/(n-1):(x0+x1)/2,h=cw/2;s+=`<rect x="${F(c-3)}" y="100" width="6" height="18" fill="var(--ink)"/><path d="M${F(c-5)} 118H${F(c+5)}L${F(c+h*.75)} 128L${F(c+h*.5)} 135L${F(c+h)} 150H${F(c-h)}L${F(c-h*.5)} 135L${F(c-h*.75)} 128Z" fill="${MXC('var(--flow)',34)}" stroke="var(--ink)" stroke-width="1.8" stroke-linejoin="round"/>`}
  s+='</g>';
  const sc=x=>Math.min(66,14+x/14),a=sc(r.Fh),b=sc(r.Fn);
  s+=KPF(424,140,a,true)+L(470,140-a-10,'F = '+nz(r.Fh,0)+' N','end',16,'var(--flow)',700)+KPF(424,156,b,false,'var(--red)')+L(470,156+b+22,nz(r.Fn,0)+' N nötig','end',16,'var(--red)',700);
  s+=L(28,26,['Das Blech fällt ab.','Hält nur knapp.','Hält sicher.'][z],'start',15,[`var(--red)`,AMB,'var(--ok)'][z],700);
  s+=L(40,228,'Δp = '+nz(v.dp,2)+' bar','start',16,'var(--ink)',700)+L(40,250,v.n+' × D = '+v.D+' mm','start',16,'var(--ink)',700)+L(214,228,'Blech 25 kg','start',15,'var(--ink)',600)+(v.dp>.6?L(214,250,'⚠ Unterdruck zu hoch','start',15,'var(--red)',700):'');return s},
 tick:(E,v,r,t,dt,st)=>{const z=r.Fh>=r.Fn?2:r.Fh>=25*(9.81+5)?1:0,T=4.4,u=(t+1.4)%T,e=x=>x*x*(3-2*x),H=40;
  const g=u<.6?0:u<1.8?e((u-.6)/1.2):u<2.6?1:u<3.6?1-e((u-2.6)/1):0;let b=g,rot=0;
  if(z===0){const tf=.6+1.2*.42,g0=e(.42);if(u>=tf&&u<3.6){const f=u-tf;b=Math.max(0,g0-f*f*7);if(b===0&&f<.9)b=Math.max(0,.05*Math.sin((f-Math.sqrt(g0/7))*18))}if(u>=3.6)b=0}
  else if(z===1&&g>0)rot=1.1*Math.sin(t*9)*g;
  A(E.gr,'transform','translate(0 '+F(-H*g)+')');A(E.bl,'transform','translate(0 '+F(-H*b)+') rotate('+F(rot)+' 200 156)')}});

/* ---------- Instandhaltung: Maschine mit Signalsäule und mitlaufendem Laufzeitband ---------- */
{const PX=1.4,BX=30,BW=420,XJ=330;
SIMX('Instandhaltung & Wartung',{fix:'4000 Betriebsstunden pro Jahr, ein Stillstand kostet 600 € je Stunde (entgangener Deckungsbeitrag). Im Bild fallen die Störungen regelmäßig an, in Wirklichkeit streuen sie um den Mittelwert. Eine Sekunde im Bild entspricht 24 Betriebsstunden.',
 svg:(v,r)=>{const P=(v.b+v.r)*PX,n=Math.ceil(BW/P)+2,rw=Math.max(2,v.r*PX),dk='#46505e';
  let s=`<defs><clipPath id="ihc"><rect x="${BX}" y="198" width="${BW}" height="24" rx="5"/></clipPath>${GR('ihs','#5b6472','#aab3c0',0)}</defs>`;
  /* Maschine */
  s+=RC(26,156,196,8,dk,'var(--ink)',2,1.4)+RC(30,54,188,102,MXC('var(--mute)',20),'var(--ink)',8,2);
  s+=RC(44,66,108,78,MXC('var(--flow)',10),'var(--ink)',5,1.6)+RC(87,66,22,30,'url(#ihs)','var(--ink)',1,1.3)+RC(94,96,8,14,'#d4a017','var(--ink)',1,1.1)+RL('tl',1,.6);
  s+=RC(74,116,48,12,'#b8c2cf','var(--ink)',1,1.3)+RC(58,128,80,8,dk,'var(--ink)',1,1.2);
  s+=`<g data-a="sp">`+[[84,112,-7,-5],[112,112,7,-6],[80,108,-9,-1],[116,107,9,-2]].map(([x,y,a,b])=>`<path d="M${x} ${y}l${a} ${b}" stroke="#d97706" stroke-width="2" stroke-linecap="round"/>`).join('')+'</g>';
  s+=`<g data-a="wr" opacity="0"><circle cx="98" cy="105" r="26" fill="var(--card)" stroke="var(--red)" stroke-width="2.4"/><path d="M86 117l17-17" stroke="var(--red)" stroke-width="5.5" stroke-linecap="round"/><path d="M112 88a8 8 0 1 0 3 9l-6 1l-3-4l2-5z" fill="var(--red)"/></g>`;
  s+=RC(162,66,44,58,MXC('var(--mute)',38),'var(--ink)',4,1.5)+`<rect data-a="scr" x="167" y="71" width="34" height="22" rx="2" fill="#16a34a" stroke="var(--ink)" stroke-width="1.2"/>`+[172,184,196].map(x=>`<circle cx="${x}" cy="104" r="3.2" fill="${dk}"/>`).join('')+`<circle cx="184" cy="115" r="4" fill="var(--red)" stroke="var(--ink)" stroke-width="1"/>`;
  s+=RC(181,44,6,10,dk,'none',0,0)+`<rect data-a="lr" x="177" y="14" width="14" height="10" rx="2" fill="${MXC('var(--red)',22)}" stroke="var(--ink)" stroke-width="1.3"/><rect x="177" y="24" width="14" height="10" fill="${MXC('var(--amber)',22)}" stroke="var(--ink)" stroke-width="1.3"/><rect data-a="lg" x="177" y="34" width="14" height="10" rx="2" fill="#16a34a" stroke="var(--ink)" stroke-width="1.3"/>`;
  /* Kennzahlen */
  s+=L(250,74,'Verfügbarkeit','start',15,'var(--ink)',600)+L(250,104,nz(r.V*100,1)+' %','start',26,r.V>=.98?'var(--ok)':'var(--red)',800)+L(250,134,'Stillstand im Jahr','start',15,'var(--ink)',600)+L(250,158,nz(r.h,0)+' h, '+nz(r.K,0)+' €','start',18,r.K<=20000?'var(--ok)':'var(--red)',700);
  /* Laufzeitband */
  s+=L(BX,190,'Laufzeitband','start',14,'var(--ink)',700)+RC(BX,198,BW,24,'var(--card)','var(--line)',5,1.2)+`<g clip-path="url(#ihc)"><g data-a="band">`;
  for(let k=-1;k<n;k++){const x=BX+k*P;s+=`<rect x="${F(x)}" y="198" width="${F(v.b*PX)}" height="24" fill="${MXC('var(--ok)',52)}"/><rect x="${F(x+v.b*PX)}" y="198" width="${F(P-v.b*PX)}" height="24" fill="${MXC('var(--ok)',52)}"/><rect x="${F(x+P-rw)}" y="198" width="${F(rw)}" height="24" fill="var(--red)"/>`}
  s+=`</g></g><rect x="${BX}" y="198" width="${BW}" height="24" rx="5" fill="none" stroke="var(--ink)" stroke-width="1.3"/><path d="M${XJ} 192v36" stroke="var(--ink)" stroke-width="2.4"/>`+L(XJ,246,'jetzt','middle',14,'var(--ink)',700);
  s+=RC(BX,236,12,12,MXC('var(--ok)',52),'var(--ink)',2,1)+L(BX+18,247,'läuft','start',14,'var(--ink)',500)+RC(BX+70,236,12,12,'var(--red)','var(--ink)',2,1)+L(BX+88,247,'Reparatur','start',14,'var(--ink)',500);return s},
 tick:(E,v,r,t,dt,st)=>{const P=(v.b+v.r)*PX,rw=Math.max(2,v.r*PX),off=(t*24*PX)%P,ph=((XJ-BX+off)%P),dn=ph>=P-rw;st.hold=dn?.3:Math.max(0,(st.hold||0)-dt);const d=dn||st.hold>0;
  A(E.band,'transform','translate('+F(-off)+' 0)');A(E.lg,'fill',d?MXC('#16a34a',20):'#16a34a');A(E.lr,'fill',d?'var(--red)':MXC('var(--red)',22));A(E.scr,'fill',d?'var(--red)':'#16a34a');A(E.wr,'opacity',d?1:0);A(E.sp,'opacity',d?0:(Math.sin(t*23)>0?1:.35));
  if(!d)st.a=(st.a||0)+dt*14;A(E.tl,'d',ROTV(98,4,97,109,3,st.a||0))}})}

/* ---------- Zustandsüberwachung: Wälzlager mit Sensor, die Schwingung wächst Woche für Woche bis zum Wechsel ---------- */
{const X0=250,X1=404,Y0=196,Y1=46,px=x=>X0+(X1-X0)*x/26,py=y=>Y0-(Y0-Y1)*CL(y,0,10)/10,cx=112,cy=108,NEU=1.2;
const val=(v,wk)=>wk<v.w?Math.min(10,3.2+v.a*wk):NEU;
SIMX('Zustandsüberwachung & Schadensanalyse',{
 svg:(v,r)=>{const c=CHT({X0,X1,Y0,Y1,xm:26,ym:10,xt:[0,10,20],yt:[2,4,6,8,10],yf:t=>t,xl:'Wochen ab heute',yl:'Schwingung in mm/s'}),tA=r.tA,ok=v.w<=tA&&v.w>=tA-3,late=v.w>tA,t10=(10-3.2)/v.a;let s=c.s;
  s+=`<rect x="${F(px(Math.max(0,tA-3)))}" y="${Y1}" width="${F(Math.max(0,px(Math.min(26,tA))-px(Math.max(0,tA-3))))}" height="${Y0-Y1}" fill="${MXC('var(--ok)',16,'transparent')}"/>`;
  s+=LN(c,0,4.5,26,4.5,'var(--amber)',2,'6 4')+L(X1+6,py(4.5)+5,'Warnung','start',13,AMB,700)+LN(c,0,7.1,26,7.1,'var(--red)',2,'6 4')+L(X1+6,py(7.1)+5,'Alarm','start',13,'var(--red)',700);
  const pts=[[0,3.2]];if(t10<v.w)pts.push([t10,10]);pts.push([v.w,val(v,v.w-1e-6)],[v.w,NEU],[26,NEU]);
  s+=`<path d="M${pts.map(q=>F(px(q[0]))+' '+F(py(q[1]))).join('L')}" fill="none" stroke="var(--acc)" stroke-width="3" stroke-linejoin="round"/>`;
  s+=`<path d="M${F(px(v.w))} ${Y1}V${Y0}" stroke="${ok?'var(--ok)':late?'var(--red)':'var(--ink)'}" stroke-width="2" stroke-dasharray="4 3"/>`;
  s+=`<circle data-a="cur" cx="${X0}" cy="${F(py(3.2))}" r="6" fill="var(--acc)" stroke="var(--card)" stroke-width="2"/>`;
  /* Lagerbock mit Wälzlager */
  const hs=MXC('var(--mute)',34);s+=`<path d="M40 186L62 140H162L184 186Z" fill="${hs}" stroke="var(--ink)" stroke-width="2" stroke-linejoin="round"/><circle cx="${cx}" cy="${cy}" r="66" fill="${hs}" stroke="var(--ink)" stroke-width="2"/>`;
  s+=RC(102,30,20,13,'#46505e','var(--ink)',2,1.4)+`<path d="M102 36q-30-12 -44 4" fill="none" stroke="var(--ink)" stroke-width="1.6"/>`+L(22,52,'Sensor','start',13,'var(--ink)',600);
  s+=`<g data-a="wav">`+[7,12,17].map(q=>`<path d="M${112-q} 25a${q} ${q} 0 0 1 ${2*q} 0" fill="none" stroke="var(--acc)" stroke-width="1.8"/>`).join('')+'</g>';
  s+=`<g data-a="sh"><circle cx="${cx}" cy="${cy}" r="54" fill="#cfd6e0" stroke="var(--ink)" stroke-width="1.8"/><circle cx="${cx}" cy="${cy}" r="45" fill="${MXC('var(--mute)',14)}" stroke="var(--ink)" stroke-width="1.2"/>`;
  s+=`<ellipse data-a="dmg" cx="${cx}" cy="${cy+45.5}" rx="11" ry="3.4" fill="#9a3412" opacity="0"/>`;
  s+=`<g data-a="balls">`;for(let i=0;i<8;i++){const a=i*TAU/8;s+=`<circle cx="${F(cx+35.5*Math.cos(a))}" cy="${F(cy+35.5*Math.sin(a))}" r="8.6" fill="#e9edf3" stroke="var(--ink)" stroke-width="1.4"/>`}s+='</g>';
  s+=`<g data-a="inn"><circle cx="${cx}" cy="${cy}" r="26" fill="#cfd6e0" stroke="var(--ink)" stroke-width="1.8"/><circle cx="${cx}" cy="${cy}" r="17" fill="#8a96a6" stroke="var(--ink)" stroke-width="1.6"/><rect x="${cx-3.5}" y="${cy-19}" width="7" height="9" fill="#46505e"/></g></g>`;
  s+=`<text data-a="wk" x="${cx}" y="214" text-anchor="middle" style="font-size:16px;font-weight:700;fill:var(--ink)">Woche 0</text>`+L(cx,236,'Wechsel in Woche '+v.w,'middle',15,ok?'var(--ok)':late?'var(--red)':'var(--ink)',700);
  s+=`<text data-a="stt" x="${cx}" y="258" text-anchor="middle" style="font-size:14px;font-weight:700;fill:var(--ink)">Lager läuft ruhig</text>`;return s},
 tick:(E,v,r,t,dt,st)=>{const u=CL(((t+3.2)%11.5)/9.5,0,1),wk=26*u,y=val(v,wk),am=y*.42,neu=wk>=v.w;
  A(E.cur,'cx',F(px(wk)));A(E.cur,'cy',F(py(y)));A(E.sh,'transform','translate('+F(am*Math.sin(t*47))+' '+F(am*Math.sin(t*61+1))+')');
  st.a=(st.a||0)+dt*200;A(E.inn,'transform','rotate('+F(st.a%360)+' '+cx+' '+cy+')');A(E.balls,'transform','rotate('+F((st.a*.42)%360)+' '+cx+' '+cy+')');
  A(E.dmg,'opacity',neu?0:F(CL((y-3.2)/3.9,0,1)));A(E.wav,'opacity',F(CL(y/8,.12,1)));TXT(E.wk,'Woche '+Math.floor(wk));
  const z=neu?0:y>=7.1?3:y>=4.5?2:1,tx=['Neues Lager läuft ruhig','Lager läuft noch ruhig','Warnwert überschritten','Alarm: Schaden droht'][z];if(E.stt&&E.stt.textContent!==tx){E.stt.textContent=tx;E.stt.style.fill=['var(--ok)','var(--ink)',AMB,'var(--red)'][z]}}})}

/* ---------- Drehen: Das Werkstück dreht sich, der Meißel fährt mit dem Vorschub entlang und nimmt den Span ab ---------- */
{const cy=122,XR=392,XL=176;
SIMX('Zerspanung: Drehen',{
 svg:(v,r)=>{const r1=22+v.d*.12,ap=Math.max(3,v.ap*3.2),r2=r1-ap,yb=cy-r1-10,tp=yb-34,cw=1.8+v.f*6;
  let s=`<defs>${GR('dsw',STEEL,STEEL2,1)}${GR('dsc','#5b6472','#aab3c0',1)}</defs>`;
  s+=RC(26,cy-74,54,148,'url(#dsc)','var(--ink)',6,1.4)+RC(62,cy-r1-16,22,14,'#6b7480','var(--ink)',2,1.2)+RC(62,cy+r1+2,22,14,'#6b7480','var(--ink)',2,1.2);
  s+=`<rect data-a="raw" x="80" y="${F(cy-r1)}" width="${XR-80}" height="${F(2*r1)}" fill="url(#dsw)" stroke="var(--ink)" stroke-width="1.4"/>`+RL('ro1',1.2,.28);
  s+=`<rect data-a="fin" x="${XR}" y="${F(cy-r2)}" width="${400-XR}" height="${F(2*r2)}" fill="url(#dsw)" stroke="var(--ink)" stroke-width="1.4"/>`+RL('ro2',1.2,.28);
  s+=`<ellipse data-a="end" cx="400" cy="${cy}" rx="9" ry="${F(r2)}" fill="${STEEL2}" stroke="var(--ink)" stroke-width="1.4"/><path d="M80 ${cy}H412" stroke="var(--mute)" stroke-width="1" stroke-dasharray="10 4 2 4"/>`;
  s+=`<g data-a="tool"><path d="M${XR+2} ${F(yb)}H${XR+40}V${F(tp)}H${XR+2}Z" fill="#3a4250" stroke="var(--ink)" stroke-width="1.4"/><path d="M${XR} ${F(cy-r2)}L${XR+30} ${F(cy-r2-7)}L${XR+34} ${F(yb)}L${XR+2} ${F(yb)}Z" fill="#d4a017" stroke="var(--ink)" stroke-width="1.3"/>`;
  s+=`<path data-a="chip" d="M${XR-1} ${F(cy-r1-1)}c-3 -14 -22 -22 -30 -10c-5 9 6 16 13 9" fill="none" stroke="#b7791f" stroke-width="${F(cw)}" stroke-linecap="round"/></g>`;
  const p=Math.min(1.25,r.Pz/11000),bw=300*p/1.25;s+=L(30,222,'Antriebsleistung','start',16,'var(--ink)',600)+RC(30,232,300,20,'var(--card)','var(--line)',6,1.2)+RC(30,232,bw,20,r.Pz>11000?'var(--red)':r.Pz>=8800?'var(--ok)':'var(--amber)','none',6,0);
  s+=`<path d="M${F(30+300/1.25)} 226v32" stroke="var(--ink)" stroke-width="2"/>`+L(30+300/1.25+6,222,'Motor 11 kW','start',14,'var(--ink)',500)+L(340,249,nz(r.Pz/1000,1)+' kW','start',19,r.Pz>11000?'var(--red)':'var(--ink)',700);
  s+=L(30,30,'n = '+nz(r.n,0)+' 1/min','start',17,'var(--ink)',600);return s},
 tick:(E,v,r,t,dt,st)=>{const r1=22+v.d*.12,ap=Math.max(3,v.ap*3.2),r2=r1-ap,sp=CL(v.f*r.n/7,5,110);
  if(st.x==null){st.x=300;st.ph=0}st.a=(st.a||0)+CL(r.n/600,.25,3.5)*TAU*dt;let up=0;
  if(st.ph===0){st.x-=sp*dt;if(st.x<=XL){st.x=XL;st.ph=1;st.w=0}}else{st.w+=dt;up=st.w<.25?st.w/.25:st.w<1?1:1-(st.w-1)/.25;if(st.w>=1.25){st.ph=0;st.x=XR;up=0}}
  const xt=st.ph===0?st.x:XL+(XR-XL)*CL((st.w-.25)/.75,0,1),xs=st.ph===0?st.x:XL;
  A(E.raw,'width',F(xs-80));A(E.fin,'x',F(xs));A(E.fin,'width',F(400-xs));A(E.ro1,'d',ROT(81,xs-1,cy,r1-1,6,st.a));A(E.ro2,'d',xs<398?ROT(xs+1,399,cy,r2-1,6,st.a):'M0 0');
  A(E.tool,'transform','translate('+F(xt-XR)+' '+F(-16*up)+')');A(E.chip,'opacity',st.ph===0?1:0);A(E.chip,'transform','rotate('+F(9*Math.sin(t*13))+' '+XR+' '+F(cy-r1)+')')}})}

/* ---------- Fräsen: Der Messerkopf dreht, die Platte fährt mit der Vorschubgeschwindigkeit darunter durch ---------- */
{const cx=230,yt=160,ap=8,PL=300,w=74;
SIMX('Zerspanung: Fräsen & Schleifen',{fix:'Messerkopf d = 80 mm, Platte 800 mm lang, Vorschubweg L = 884 mm. Herstellerwerte: f_z bis 0,15 mm, v_c bis 220 m/min. a_p = 3 mm, a_e = 60 mm. Im Bild dauert eine Minute Fräszeit etwa vier Sekunden.',
 svg:(v,r)=>{let s=`<defs>${GR('fsw',STEEL,STEEL2,1)}${GR('fss','#5b6472','#aab3c0',0)}</defs>`;
  s+=`<rect data-a="pa" x="40" y="${yt}" width="10" height="62" fill="url(#fsw)" stroke="var(--ink)" stroke-width="1.4"/><rect data-a="pb" x="${cx}" y="${yt-ap}" width="10" height="${62+ap}" fill="url(#fsw)" stroke="var(--ink)" stroke-width="1.4"/>`;
  s+=RC(-6,yt+62,492,16,MXC('var(--mute)',45),'var(--ink)',0,1.4);
  s+=`<rect x="${cx-16}" y="40" width="32" height="${yt-ap-74}" fill="url(#fss)" stroke="var(--ink)" stroke-width="1.4"/>`+RL('sp',1.1,.3)+`<rect x="${cx-w/2}" y="${yt-ap-34}" width="${w}" height="34" rx="4" fill="#3a4250" stroke="var(--ink)" stroke-width="1.4"/>`;
  s+=`<path data-a="ins" d="M0 0" fill="#d4a017" stroke="var(--ink)" stroke-width="1.1" stroke-linejoin="round"/><g data-a="chp">`+[[-44,-4,-12,-9],[-50,2,-13,-3],[-40,-10,-9,-12]].map(([x,y,a,b])=>`<path d="M${cx+x} ${yt-ap+y}l${a} ${b}" stroke="#b7791f" stroke-width="2.2" stroke-linecap="round"/>`).join('')+'</g>';
  s+=AW(150,256,90,256,'var(--flow)')+L(158,261,'v_f = '+nz(r.vf,0)+' mm/min','start',15,'var(--flow)',700);
  s+=L(470,66,'n = '+nz(r.n,0)+' 1/min','end',16,'var(--ink)',700)+L(30,40,'z = '+v.z+' Zähne','start',15,'var(--ink)',600);
  const tb=Math.min(3,r.th),x0=320,W=150;s+=L(x0,96,'Zeit je Platte','start',14,'var(--ink)',600)+RC(x0,104,W,16,'var(--card)','var(--line)',5,1.2)+RC(x0,104,W*tb/3,16,r.th<=1?'var(--ok)':'var(--amber)','none',5,0)+`<path d="M${x0+W/3} 100v24" stroke="var(--ink)" stroke-width="2"/>`+L(x0+W/3,138,'1 min','middle',13,'var(--ink)',700)+L(470,96,nz(r.th,2)+' min','end',15,'var(--ink)',700);
  if(!(v.fz<=.15&&v.vc<=220))s+=L(30,64,'⚠ über Herstellerwert','start',15,'var(--red)',700);return s},
 tick:(E,v,r,t,dt,st)=>{const sp=CL(r.vf/12,8,95);if(st.x==null)st.x=cx-110;st.x-=sp*dt;if(st.x+PL<cx-w/2-14)st.x=cx+w/2+14;const x=st.x,xe=x+PL,m=CL(cx,x,xe);
  A(E.pa,'x',F(x));A(E.pa,'width',F(Math.max(0,m-x)));A(E.pa,'opacity',m-x>.5?1:0);A(E.pb,'x',F(m));A(E.pb,'width',F(Math.max(0,xe-m)));A(E.pb,'opacity',xe-m>.5?1:0);
  st.a=(st.a||0)+CL(r.n/500,.5,3)*TAU*dt;let d='';for(let k=0;k<v.z;k++){const a=st.a+k*TAU/v.z,c=Math.cos(a);if(c>.12){const q=cx+(w/2-7)*Math.sin(a),h=6.5*c,y=yt-ap-2;d+=`M${F(q-h)} ${y}H${F(q+h)}L${F(q+h*.55)} ${y+ap+2}H${F(q-h*.55)}Z`}}A(E.ins,'d',d||'M0 0');
  A(E.sp,'d',ROTV(cx,15,41,yt-ap-35,5,st.a));const cut=x<cx+w/2&&xe>cx-w/2;A(E.chp,'opacity',cut?(Math.sin(t*31)>0?1:.4):0);A(E.chp,'transform','translate('+F(2*Math.sin(t*40))+' '+F(1.5*Math.cos(t*33))+')')}})}

/* ---------- Scherschneiden: Der Stempel fährt herunter. Reicht die Kraft, fällt der Butzen aus, sonst bleibt der Stempel stehen ---------- */
{const cx=200,y0=114;
SIMX('Umformen, Trennen & additive Fertigung',{
 svg:(v,r)=>{const ok=r.F<=320,t=v.s*4.5,sw=40+v.l*.2,h=sw/2,k=[270,360,420,520,700].indexOf(v.Rm),bc=MXC(CC('b'),30+k*9),dk='#46505e',dc=MXC('var(--ink)',26);
  let s=`<defs>${GR('stg','#8b95a1','#d5dbe2')}</defs>`+L(200,26,ok?'Presse reicht: Das Teil wird ausgeschnitten.':'Presse überlastet: Der Stempel bleibt stehen.','middle',14,ok?'var(--ok)':'var(--red)',700);
  s+=RC(36,36,16,150,dk,'var(--ink)',2,1.4)+RC(348,36,16,150,dk,'var(--ink)',2,1.4)+RC(30,186,340,10,dk,'var(--ink)',2,1.4);
  s+=`<g data-a="ram">`+RC(60,40,280,22,'url(#stg)','var(--ink)',3,1.5)+RC(cx-h,62,sw,38,'url(#stg)','var(--ink)',2,1.5)+(sw>=74?L(cx,86,'Stempel','middle',13,'#111827',700):'')+'</g>';
  s+=RC(60,y0,cx-h-60,t,bc,'var(--ink)',1,1.4)+RC(cx+h,y0,340-cx-h,t,bc,'var(--ink)',1,1.4)+`<g data-a="slug">`+RC(cx-h,y0,sw,t,bc,'var(--ink)',1,1.4)+'</g>';
  s+=`<path d="M${F(cx-h)} ${y0}v${F(t)}M${F(cx+h)} ${y0}v${F(t)}" stroke="var(--red)" stroke-width="2.6"/>`;
  s+=RC(60,y0+t,cx-h-62,26,dc,'var(--ink)',2,1.4)+RC(cx+h+2,y0+t,338-cx-h,26,dc,'var(--ink)',2,1.4)+L(66,y0-7,'Blech','start',13,'var(--ink)',700)+(cx-h-62>=106?L(66,y0+t+18,'Schneidplatte','start',12.5,'var(--ink)',700):'');
  s+=`<path d="M384 ${y0}v${F(t)}M379 ${y0}h10M379 ${F(y0+t)}h10" stroke="var(--ink)" stroke-width="1.6" fill="none"/>`+L(396,y0+t/2+5,'s = '+nt(v.s,1)+' mm','start',14,'var(--ink)',700);
  return s+HB(60,226,360,16,r.F/600,ok?'var(--ok)':'var(--red)','Schneidkraft',nz(r.F,0)+' kN')+MK(60+360*320/600,226,16,'320 kN')},
 tick:(E,v,r,t,dt,st)=>{const ok=r.F<=320,th=v.s*4.5,T=2.8,u=(t+.9)%T/T,e=x=>x*x*(3-2*x),D=ok?14+th+6:14.5,g=u<.2?0:u<.5?e((u-.2)/.3):u<.62?1:u<.9?1-e((u-.62)/.28):0;
  const y=D*g+(!ok&&g>.98?.8*Math.sin(t*70):0);A(E.ram,'transform','translate(0 '+F(y)+')');
  let sy=0,op=1;if(ok){if(u>=.2&&u<.62)sy=Math.max(0,D*g-14);else if(u>=.62){const f=(u-.62)*T;sy=th+6+f*f*160;op=CL(1-(u-.62)/.2,0,1)}}A(E.slug,'transform','translate(0 '+F(sy)+')');A(E.slug,'opacity',F(u<.08?u/.08:op))}})}

/* ---------- Verzinken im Zeitraffer: Die Zinkschicht wird Jahr für Jahr abgetragen, danach rostet der Stahl ---------- */
{const YS=152,BX=30,BW=420,YM=60;
SIMX('Oberflächen & Korrosionsschutz',{
 svg:(v,r)=>{const ok=r.t>=25,H=Math.max(3,v.d*.28),k=[.5,1,2,4].indexOf(v.a),nd=[0,3,6,10][k],ic='var(--mute)';
  let s=`<defs>${GR('zng','#a9b4bf','#e6ebf0')}</defs>`+L(BX,28,'Schnitt durch die Oberfläche, stark vergrößert','start',13.5,'var(--mute)',500);
  s+=RC(BX,36,BW,YS-36,MXC('var(--flow)',k?7:3),'none',0,0);
  /* Umgebung */
  if(k===0)s+=`<path d="M40 70L84 46L128 70V92H40Z" fill="none" stroke="${ic}" stroke-width="2.4" stroke-linejoin="round"/><path d="M70 92V76h28v16" fill="none" stroke="${ic}" stroke-width="2.4"/>`;
  if(k===1)s+=`<path d="M40 92q30-30 70 0" fill="${MXC('var(--ok)',35)}" stroke="${ic}" stroke-width="2"/><path d="M118 92V70" stroke="${ic}" stroke-width="3"/><circle cx="118" cy="62" r="13" fill="${MXC('var(--ok)',45)}" stroke="${ic}" stroke-width="2"/>`;
  if(k===2)s+=[[40,60,22],[66,48,26],[96,66,20]].map(([x,y,w])=>RC(x,y,w,92-y,MXC('var(--mute)',30),ic,1,2)).join('');
  if(k===3)s+=RC(44,62,40,30,MXC('var(--mute)',30),ic,1,2)+RC(88,44,12,48,MXC('var(--mute)',30),ic,1,2)+`<path d="M94 40q8-10 20-4q10-8 18 2" fill="none" stroke="${ic}" stroke-width="2.4" stroke-linecap="round"/><path d="M40 98q8-7 16 0t16 0t16 0t16 0t16 0" fill="none" stroke="var(--flow)" stroke-width="2.4"/>`;
  s+=L(140,60,['Innenraum','Landluft','Stadtluft','Industrie, Küste'][k],'start',14,'var(--ink)',700);
  for(let i=0;i<nd;i++)s+=`<path data-a="p${i}" d="M0 0l-2.4 8" stroke="var(--flow)" stroke-width="2.2" stroke-linecap="round"/>`;
  /* Stahl, Rost, Zink */
  s+=RC(BX,YS,BW,48,'#6b7280','var(--ink)',2,1.4)+L(240,YS+30,'Stahl','middle',14,'#fff',700);
  s+=`<g data-a="rs" opacity="0">`+[50,96,150,205,262,318,372,420].map((x,i)=>`<ellipse cx="${x}" cy="${YS+3+i%2*2}" rx="${15+i%3*6}" ry="${5+i%2*2}" fill="#b45309"/>`).join('')+L(36,YS-8,'Rost','start',14,'#b45309',700)+'</g>';
  s+=`<rect data-a="zn" x="${BX}" y="${F(YS-H)}" width="${BW}" height="${F(H)}" fill="url(#zng)" stroke="var(--ink)" stroke-width="1.2"/>`+L(446,YS-H-8,'Zink neu: '+v.d+' µm','end',14,'var(--ink)',700);
  /* Zeitleiste */
  s+=L(BX,221,'Schutzdauer','start',14,'var(--ink)',600)+L(BX+BW,221,nz(r.t,0)+' Jahre','end',15,ok?'var(--ok)':'var(--red)',700)+RC(BX,228,BW,14,'var(--card)','var(--line)',5,1.2)+RC(BX,228,Math.max(2,BW*Math.min(1,r.t/YM)),14,ok?'var(--ok)':'var(--amber)','none',5,0)+MK(BX+BW*25/YM,228,14,'25 Jahre');
  s+=`<path data-a="yr" d="M${BX} 224v22" stroke="var(--acc)" stroke-width="3"/><text data-a="jt" x="250" y="221" text-anchor="middle" style="font-size:14px;font-weight:700;fill:var(--acc)">Jahr 0</text>`;return s},
 tick:(E,v,r,t,dt,st)=>{const H=Math.max(3,v.d*.28),u=(t+2)%11,yr=YM*CL(u/9,0,1),h=H*Math.max(0,1-yr/r.t),k=[.5,1,2,4].indexOf(v.a),nd=[0,3,6,10][k];
  A(E.zn,'y',F(YS-h));A(E.zn,'height',F(h));A(E.zn,'opacity',h>.3?1:0);A(E.rs,'opacity',F(CL((yr-r.t)/8,0,1)));A(E.yr,'transform','translate('+F(BW*yr/YM)+' 0)');TXT(E.jt,'Jahr '+Math.floor(yr));
  const top=66,sp=YS-h-top-8;for(let i=0;i<nd;i++){const f=(t*.9+i*.37)%1;A(E['p'+i],'transform','translate('+F(150+((i*53)%170))+' '+F(top+sp*f)+')');A(E['p'+i],'opacity',F(f>.85?(1-f)/.15:1))}}})}

/* ---------- Montagelinie: Die Geräte rücken im Takt weiter, der Balken je Station zeigt die genutzte Taktzeit ---------- */
{const X0=30,BY=150;
SIMX('Montageplanung & Fügen',{fix:'450 min Arbeitszeit je Schicht. Im Bild dauert ein Takt so viele Sekunden, wie er in Wirklichkeit Minuten hat. Gezeichnet sind höchstens zwölf Stationen.',
 svg:(v,r)=>{const n=r.n,m=Math.min(n,12),p=Math.min(52,420/Math.max(m,8)),dk='#46505e';
  let s=`<defs><clipPath id="mlc"><rect x="22" y="120" width="440" height="34"/></clipPath></defs>`+L(X0,30,'Takt '+nz(r.tk,2)+' min, '+n+(n===1?' Station':' Stationen')+(n>m?' (12 gezeichnet)':''),'start',16,'var(--ink)',700);
  if(n>8)s+=`<path d="M${F(X0+8*p)} 44V196" stroke="var(--red)" stroke-width="2" stroke-dasharray="6 4"/>`+L(X0+8*p-6,60,'Hallenende','end',13,'var(--red)',700);
  s+=RC(16,BY,448,9,dk,'var(--ink)',3,1.3);for(let x=24;x<460;x+=14)s+=`<circle cx="${x}" cy="${BY+4.5}" r="2" fill="var(--card)"/>`;
  s+=RC(22,BY+9,6,30,dk,'none',0,0)+RC(452,BY+9,6,30,dk,'none',0,0);
  for(let i=0;i<m;i++){const x=X0+i*p,c=x+p/2,col=i<8?'var(--ok)':'var(--red)';
   s+=`<g data-a="w${i}"><circle cx="${F(c)}" cy="86" r="7.5" fill="${MXC(col,45)}" stroke="var(--ink)" stroke-width="1.5"/><path d="M${F(c-10)} 122v-14a10 10 0 0 1 20 0v14" fill="${MXC(col,45)}" stroke="var(--ink)" stroke-width="1.5"/></g>`;
   s+=RC(x+4,BY+16,p-8,11,'var(--card)',col,3,1.4)+`<rect data-a="b${i}" x="${F(x+5.5)}" y="${BY+17.5}" width="0" height="8" rx="2" fill="${col}"/>`+L(c,BY+44,String(i+1),'middle',13,'var(--ink)',700)}
  
  s+=`<g clip-path="url(#mlc)"><g data-a="pr">`;for(let i=-1;i<m;i++){const c=X0+i*p+p/2,q=Math.max(0,(i+1)/m);s+=RC(c-9,BY-17,18,17,MXC('var(--flow)',18+q*55),'var(--ink)',2,1.4)}s+='</g></g>';
  return s+L(240,228,nz(r.bw,1)+' % Bandwirkungsgrad','middle',20,r.bw>=90?'var(--ok)':'var(--red)',800)+L(240,254,'Balken: genutzter Anteil der Taktzeit','middle',13,'var(--mute)',500)},
 tick:(E,v,r,t,dt,st)=>{const n=r.n,m=Math.min(n,12),p=Math.min(52,420/Math.max(m,8)),Tc=CL(r.tk,1.1,4.5),u=(t%Tc)/Tc,f=v.S/(n*r.tk),w=u/.8,e=x=>x*x*(3-2*x);
  A(E.pr,'transform','translate('+F(u>.8?p*e((u-.8)/.2):0)+' 0)');for(let i=0;i<m;i++){A(E['b'+i],'width',F((p-11)*Math.min(w,f)));A(E['w'+i],'opacity',w<f?1:.4)}}})}

/* ---------- Roboterzelle: Der Roboter setzt im Takt Teile um, bei einer Störung steht er ---------- */
{const SX=236,SY=150,L1=74,L2=66,P1=[122,158],P2=[352,158],OR='#e8791c';
const ik=(x,y)=>{const dx=x-SX,dy=y-SY,d=Math.min(L1+L2-1,Math.hypot(dx,dy)),a=Math.atan2(dy,dx),b=Math.acos((L1*L1+d*d-L2*L2)/(2*L1*d)),p=[SX+L1*Math.cos(a+b),SY+L1*Math.sin(a+b)],q=[SX+L1*Math.cos(a-b),SY+L1*Math.sin(a-b)];return p[1]<q[1]?p:q};
SIMX('Automatisierung & Robotik',{fix:'7,5 h Betriebszeit je Schicht. Im Bild läuft ein Takt etwa 13-mal schneller ab. Störungen sind im Bild gleichmäßig verteilt.',
 svg:(v,r)=>{const dk='#46505e',ok=r.n>=1200,bx=(a,x,y)=>`<rect data-a="${a}" x="${x-10}" y="${y}" width="20" height="14" rx="2" fill="${MXC('var(--flow)',55)}" stroke="var(--ink)" stroke-width="1.4"/>`;
  let s=L(30,28,'Takt '+v.t+' s','start',15,'var(--ink)',700)+L(30,50,'Verfügbarkeit '+v.V+' %','start',15,'var(--ink)',700);
  /* Bänder */
  [[20,150],[322,470]].forEach(([a,b])=>{s+=RC(a,172,b-a,9,dk,'var(--ink)',3,1.3);for(let x=a+8;x<b-4;x+=14)s+=`<circle cx="${x}" cy="176.5" r="2" fill="var(--card)"/>`;s+=RC(a+10,181,6,22,dk,'none',0,0)+RC(b-16,181,6,22,dk,'none',0,0)});
  s+=`<path d="M10 203H470" stroke="var(--ink)" stroke-width="1.6"/>`+bx('pi',0,158)+bx('po',0,158);
  /* Roboter */
  s+=`<path d="M${SX-30} 203l8-26h44l8 26z" fill="${dk}" stroke="var(--ink)" stroke-width="1.6" stroke-linejoin="round"/>`+RC(SX-13,SY+4,26,24,dk,'var(--ink)',3,1.6);
  const ln=(a,w,c)=>`<line data-a="${a}" x1="0" y1="0" x2="0" y2="0" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
  s+=ln('a1o',21,'var(--ink)')+ln('a1',17,OR)+ln('a2o',17,'var(--ink)')+ln('a2',13,OR)+`<circle cx="${SX}" cy="${SY}" r="9" fill="${dk}" stroke="var(--ink)" stroke-width="1.6"/><circle data-a="el" r="7" fill="${dk}" stroke="var(--ink)" stroke-width="1.6"/>`;
  s+=`<g data-a="gp"><path d="M0 -4v10M-11 6h22M-11 6v9M11 6v9" fill="none" stroke="var(--ink)" stroke-width="3.2" stroke-linecap="round"/>`+`<rect data-a="pc" x="-10" y="15" width="20" height="14" rx="2" fill="${MXC('var(--flow)',55)}" stroke="var(--ink)" stroke-width="1.4"/></g>`;
  /* Signalsäule */
  s+=RC(451,84,5,88,dk,'none',0,0)+`<rect data-a="lr" x="446" y="62" width="15" height="11" rx="2" fill="${MXC('var(--red)',22)}" stroke="var(--ink)" stroke-width="1.3"/><rect data-a="lg" x="446" y="73" width="15" height="11" rx="2" fill="#16a34a" stroke="var(--ink)" stroke-width="1.3"/>`+`<text data-a="stt" x="438" y="78" text-anchor="end" style="font-size:14px;font-weight:700;fill:var(--red)" opacity="0">Störung</text>`;
  /* Schichten und Ergebnis */
  ['Früh','Spät','Nacht'].forEach((n,i)=>{const on=i<v.S;s+=RC(30+i*70,224,64,26,on?MXC('var(--acc)',30):'var(--card)',on?'var(--acc)':'var(--line)',5,1.5)+L(62+i*70,242,n,'middle',14,on?'var(--ink)':'var(--mute)',on?700:500)});
  s+=L(470,236,nz(Math.floor(r.n),0)+' Teile je Tag','end',18,ok?'var(--ok)':'var(--red)',800)+L(470,258,'Ziel: 1200 Teile','end',14,'var(--mute)',500);return s},
 tick:(E,v,r,t,dt,st)=>{const Tc=v.t/13,K=6,Dn=(100-v.V)/v.V*K*Tc,per=K*Tc+Dn,q=t%per,dn=q>=K*Tc,u=dn?.3:(q%Tc)/Tc,e=x=>x*x*(3-2*x);
  let g,carry=false;if(u<.1){g=0}else if(u<.5){g=e((u-.1)/.4);carry=true}else if(u<.6){g=1}else g=1-e((u-.6)/.4);
  const x=P1[0]+(P2[0]-P1[0])*g,y=P1[1]-15-62*Math.sin(Math.PI*g),[ex,ey]=ik(x,y-6);
  [['a1o',SX,SY,ex,ey],['a1',SX,SY,ex,ey],['a2o',ex,ey,x,y-6],['a2',ex,ey,x,y-6]].forEach(([k,a,b,c,d])=>{const l=E[k];if(l){l.setAttribute('x1',F(a));l.setAttribute('y1',F(b));l.setAttribute('x2',F(c));l.setAttribute('y2',F(d))}});
  A(E.el,'cx',F(ex));A(E.el,'cy',F(ey));A(E.gp,'transform','translate('+F(x)+' '+F(y)+')');A(E.pc,'opacity',carry?1:0);
  A(E.pi,'transform','translate('+F(u<.1?P1[0]:P1[0]-96+96*Math.min(1,(u-.1)/.7))+' 0)');A(E.pi,'opacity',u<.1&&!dn?1:u<.1?1:1);
  A(E.po,'transform','translate('+F(u>=.5?P2[0]+150*Math.max(0,(u-.6)/.4):P2[0])+' 0)');A(E.po,'opacity',u>=.5&&!dn?1:0);
  A(E.lr,'fill',dn?'var(--red)':MXC('var(--red)',22));A(E.lg,'fill',dn?MXC('#16a34a',20):'#16a34a');A(E.stt,'opacity',dn?1:0)}})}
