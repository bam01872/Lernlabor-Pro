/* ===== Kunststoff & Kautschuk: Vermuten, Kurz erklärt, Skizze, Regler mit Auftrag ===== */
if(FR==='ku'){const TI=t=>L(240,26,t,'middle',16,'var(--ink)',700),MX=(c,p)=>`color-mix(in srgb,${CC(c)} ${p}%,var(--card))`,
 P=(d,c='var(--ink)',w=2.2,da='',fl='none')=>`<path d="${d}" stroke="${c}" stroke-width="${w}" fill="${fl}" stroke-linejoin="round" stroke-linecap="round"${da?` stroke-dasharray="${da}"`:''}/>`,
 FO=(x,y,parts,fs=19)=>FORM(x,y,parts,'middle',undefined,fs);

/* ---------- Ketten und Netze: aus dem Lernlabor übernommen, ergänzt um einen amorphen Thermoplast (PC) ---------- */
/* Geometrie wie im Lernlabor (Koordinaten 640 × 400), Typ 4 neu: amorphe Knäuel ohne Äste und ohne geordnete Bereiche */
const KUN=(()=>{const R=((x)=>()=>(x=(x*16807)%2147483647)/2147483647)(11),K=[],X0=114,X1=306,Y0=94,Y1=306,PI=Math.PI;
 const clamp=p=>[Math.max(X0,Math.min(X1,p[0])),Math.max(Y0,Math.min(Y1,p[1]))];
 const walk=(x,y,n,st,cu)=>{let a=R()*6.3,w=0;const p=[];for(let i=0;i<n;i++){w=.75*w+(R()-.5)*cu*.6;a+=w;
  if(x<X0+14||x>X1-14||y<Y0+14||y>Y1-14){const g=Math.atan2(200-y,210-x),d=Math.atan2(Math.sin(g-a),Math.cos(g-a));a+=.35*d}
  x+=st*Math.cos(a);y+=st*Math.sin(a);[x,y]=clamp([x,y]);p.push([x,y])}return p};
 const tie=(A,B,n,w)=>{const ph=R()*6.3,d=[B[0]-A[0],B[1]-A[1]],L=Math.hypot(...d)||1,u=[-d[1]/L,d[0]/L],p=[];for(let i=1;i<n;i++){const f=i/n,o=w*Math.sin(PI*f)*Math.sin(f*5+ph);p.push(clamp([A[0]+d[0]*f+u[0]*o,A[1]+d[1]*f+u[1]*o]))}return p};
 const lam=(cx,cy,an,w,n,sp)=>{const p=[],c=Math.cos(an),s=Math.sin(an),T=(x,y)=>[cx+x*c-y*s,cy+x*s+y*c];
  for(let k=0;k<n;k++){const y=(k-(n-1)/2)*sp,dir=k%2?-1:1;for(let x=-w/2;x<=w/2+.1;x+=8)p.push(T(dir*x,y));if(k<n-1)for(let j=1;j<4;j++){const g=PI*j/4;p.push(T(dir*(w/2+sp/2*Math.sin(g)),y+sp/2-sp/2*Math.cos(g)))}}
  return{p,box:[cx,cy,an,w+10,(n-1)*sp+12]}};
 for(let ty=0;ty<5;ty++){const C=[],BR=[],BX=[],HL=[],AS=[];
  if(ty==0){const L=[lam(176,150,-.08,84,9,5.5),lam(256,206,.42,70,8,5.5),lam(168,262,.12,78,8,5.5)];L.forEach(l=>BX.push(l.box));
   const a=L[0].p,b=L[1].p,c=L[2].p;
   C.push([...tie([118,196],a[0],6,10),...a,...tie(a[a.length-1],b[0],7,16),...b,...tie(b[b.length-1],[300,296],6,12)]);
   C.push([...tie([118,300],c[0],5,10),...c,...tie(c[c.length-1],[302,250],6,14)]);
   for(let k=0;k<7;k++)C.push(walk(X0+R()*(X1-X0),Y0+R()*(Y1-Y0),18,9,1.1));HL.push(0)}
  else if(ty==1){for(let k=0;k<9;k++){const p=walk(X0+R()*(X1-X0),Y0+R()*(Y1-Y0),24,9,.8),pc=C.length;C.push(p);
    for(let i=2;i<p.length-2;i+=3+Math.floor(R()*3)){const d=[p[i+1][0]-p[i-1][0],p[i+1][1]-p[i-1][1]],l=Math.hypot(...d)||1,sg=R()<.5?1:-1,u=[-d[1]/l*sg,d[0]/l*sg],q=[p[i]];for(let j=1;j<4;j++)q.push(clamp([p[i][0]+u[0]*7*j+d[0]/l*3*j,p[i][1]+u[1]*7*j+d[1]/l*3*j]));C.push(q);AS.push(C.length-1);if(!pc)HL.push(C.length-1)}}
   HL.push(0)}
  else if(ty==4){for(let k=0;k<10;k++)C.push(walk(X0+R()*(X1-X0),Y0+R()*(Y1-Y0),26,8.5,1.5));HL.push(0)}
  else{const nC=ty==2?12:16,st=ty==2?7:8,cu=ty==2?1.6:1.1,gc=4,gr=nC/gc;for(let k=0;k<nC;k++)C.push(walk(X0+((k%gc)+.2+.6*R())*(X1-X0)/gc,Y0+(Math.floor(k/gc)+.2+.6*R())*(Y1-Y0)/gr,ty==2?30:24,st,cu));HL.push(0);
   const need=ty==2?10:52,dmin=ty==2?42:17,cand=[];
   for(let a=0;a<C.length;a++)for(let b=a+1;b<C.length;b++)for(let i=1;i<C[a].length-1;i++)for(let j=1;j<C[b].length-1;j++){const d=Math.hypot(C[a][i][0]-C[b][j][0],C[a][i][1]-C[b][j][1]);if(d<(ty==2?22:20)&&d>4)cand.push([a,i,b,j,R()])}
   cand.sort((x,y)=>x[4]-y[4]);for(const [a,i,b,j] of cand){if(BR.length>=need)break;if(!BR.some(q=>Math.hypot(C[q[0]][q[1]][0]-C[a][i][0],C[q[0]][q[1]][1]-C[a][i][1])<dmin))BR.push([a,i,b,j])}}
  const OF=C.map(p=>{let ox=0,oy=0;return p.map(()=>{ox+=(R()-.5)*9;oy+=(R()-.5)*9;ox*=.9;oy*=.9;return[ox,oy]})});
  const MW=ty==0?C.map(p=>walk(p[0][0],p[0][1],p.length,6.5,1.2)):null;
  K.push({C,BR,BX,HL,AS,OF,MW})}return K})();
/* Auswahl: Name, Erweichen, Fließen, Zersetzen, Beispiele, Art, Verarbeitungsfenster (Beispielwerte), Geometrie, Farbe */
const KUM=[['PE-HD',80,130,310,'Rohre, Flaschenkästen, Kanister','teilkristalliner Thermoplast, lineare Ketten',[200,280],0,'#0e7490'],
 ['PE-LD',60,110,310,'Folien, Tüten, Kabelmantel','teilkristalliner Thermoplast, verzweigte Ketten',[180,240],1,'#0369a1'],
 ['PC',145,230,400,'Schutzscheiben, Gehäuse, Leuchtenabdeckungen','amorpher Thermoplast',[280,320],4,'#b45309'],
 ['Elastomer (EPDM)',0,0,200,'Dichtungen, Schläuche, Fensterprofile','weitmaschig vernetzt',null,2,'#15803d'],
 ['Duroplast (Phenolharz)',0,0,260,'Schaltergehäuse, Griffe, Bremsbeläge','engmaschig vernetzt',null,3,'#6d28d9']];
const KCV=[[[20,.85],[80,.85],[125,.3],[135,.02]],[[20,.65],[60,.65],[105,.15],[112,.02]],[[20,.8],[140,.78],[160,.12],[230,.02]],[[20,.25],[200,.25]],[[20,.95],[260,.95]]];
const kuZ=(sel,T,z)=>{const [nm,Te,Tm,Tz,use,art,vf]=KUM[sel],tp=sel<3,zer=T>=Tz,melt=tp&&T>=Tm&&!zer,soft=tp&&T>=Te&&!melt&&!zer,bruch=sel==4&&z>5&&!zer;
 const zs=zer?'zersetzt (verkohlt)':melt?'schmelzflüssig':soft?(sel==2?'gummiartig weich, warm formbar':'erweicht, warm formbar'):tp?(sel==2?'hart, glasartig':'fest, zäh'):sel==3?'gummielastisch':'hart, spröde',
  rest=zer?'–':z==0?'kein Zug':bruch?'Bruch':sel==3?'geht ganz zurück':sel==4?'geht zurück':melt?'fließt weg':soft?'bleibt (umgeformt)':z>30?'bleibt teilweise':'geht fast zurück';
 return{nm,Te,Tm,Tz,use,art,vf,tp,zer,melt,soft,bruch,zs,rest}};
const kuBild=(sel,T,z)=>{const s0=KUM[sel],K=KUN[s0[7]],col=s0[8],q=kuZ(sel,T,z),{tp,zer,melt,soft,bruch}=q,Z=z/100,cxk=210,cyk=200,t=.8;
 const dis=melt||zer&&tp?1:soft?.35*(T-q.Te)/(q.Tm-q.Te):0,ord=Math.max(0,1-dis*2.6);
 const lamF=1+Math.min(.5,sel==4?Math.min(Z,.05):Z*(sel==3?.5:soft||melt?.6:.3)),amp=.3+1.4*(T-20)/300+(melt?1.6:0),dark=zer?Math.min(1,(T-q.Tz)/30+.4):0;
 const aff=([x,y])=>{x=cxk+(x-cxk)*lamF;y=cyk+(y-cyk)/Math.sqrt(lamF);if(bruch)x+=x>cxk?14:-14;return[x,y]};
 const tf=(p,c,i)=>{const o=K.OF[c][i];if(K.MW){const m=K.MW[c][i];p=[p[0]+(m[0]-p[0])*dis,p[1]+(m[1]-p[1])*dis]}let x=p[0]+(K.MW?.6:2.6)*dis*o[0]+amp*Math.sin(t*3.1+i*1.9+c*2.3),y=p[1]+(K.MW?.6:2.6)*dis*o[1]+amp*Math.cos(t*2.7+i*1.3+c*1.1);
  if(melt){x+=6*Math.sin(t*.5+c*1.7);y+=5*Math.cos(t*.4+c*2.1)}return aff([x,y])};
 const mix=c=>dark?`color-mix(in srgb,${c} ${Math.round(100-80*dark)}%,#1c1917)`:c,ccol=mix(col),hcol=mix(`color-mix(in srgb,${col} 55%,var(--ink))`);
 let h='';const xl=cxk-100*lamF-26,xr=cxk+100*lamF+6;
 h+=RC(xl,82,20,236,'#9ca3af','var(--ink)',3,1.5)+RC(xr,82,20,236,'#9ca3af','var(--ink)',3,1.5);
 if(Z>0){const Fp=10+18*Z;h+=`<path d="M${F(xl-4)} 200H${F(xl-4-Fp)}M${F(xl-4-Fp+10)} 192L${F(xl-4-Fp)} 200L${F(xl-4-Fp+10)} 208M${F(xr+24)} 200H${F(xr+24+Fp)}M${F(xr+24+Fp-10)} 192L${F(xr+24+Fp)} 200L${F(xr+24+Fp-10)} 208" fill="none" stroke="var(--red)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`}
 if(ord>.02)K.BX.forEach(([bx,by,an,w,hh],k)=>{const c=Math.cos(an),sn=Math.sin(an),qq=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([a,b])=>aff([bx+a*w/2*c-b*hh/2*sn,by+a*w/2*sn+b*hh/2*c]));
  h+=`<path d="M${qq.map(p=>F(p[0])+' '+F(p[1])).join('L')}Z" fill="${col}" fill-opacity="${(.07*ord).toFixed(3)}" stroke="${col}" stroke-dasharray="5 4" stroke-width="1.4" opacity="${ord.toFixed(2)}"/>`});
 const spl=g=>{const f=p=>F(p[0])+' '+F(p[1]),n=g.length;let d='M'+f(g[0]);for(let i=0;i<n-1;i++){const a=g[Math.max(0,i-1)],b=g[i],c=g[i+1],e=g[Math.min(n-1,i+2)];d+='C'+f([b[0]+(c[0]-a[0])/6,b[1]+(c[1]-a[1])/6])+' '+f([c[0]-(e[0]-b[0])/6,c[1]-(e[1]-b[1])/6])+' '+f(c)}return d};
 const line=(g,w,c)=>{const d=spl(g);return`<path d="${d}" fill="none" stroke="var(--card)" stroke-width="${w+2.6}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`};
 let top='';
 K.C.forEach((pts,c)=>{const qp=pts.map((p,i)=>tf(p,c,i)),hl=K.HL.includes(c),br=K.AS.includes(c);let segs=[qp];
  if(zer||bruch){segs=[];let cur=[];qp.forEach((p,i)=>{cur.push(p);const cut=zer?(i%6==5&&dark>.3):(bruch&&i<qp.length-1&&(qp[i][0]-cxk)*(qp[i+1][0]-cxk)<0);if(cut){segs.push(cur);cur=[]}});segs.push(cur)}
  segs.filter(g=>g.length>1).forEach(g=>{const s2=line(g,hl?3.4:br?2:2.4,hl?hcol:ccol);if(hl)top+=s2;else h+=s2})});
 h+=top;
 K.BR.forEach(([a,i,b,j])=>{const p=tf(K.C[a][i],a,i),r=tf(K.C[b][j],b,j);if(bruch&&(p[0]-cxk)*(r[0]-cxk)<0)return;h+=`<path d="M${F(p[0])} ${F(p[1])}L${F(r[0])} ${F(r[1])}" stroke="var(--card)" stroke-width="4.4" stroke-linecap="round"/><path d="M${F(p[0])} ${F(p[1])}L${F(r[0])} ${F(r[1])}" stroke="var(--red)" stroke-width="2.2" stroke-linecap="round"/><circle cx="${F(p[0])}" cy="${F(p[1])}" r="3" fill="var(--red)"/><circle cx="${F(r[0])}" cy="${F(r[1])}" r="3" fill="var(--red)"/>`});
 let s=`<g transform="translate(-2,26) scale(.68)">${h}</g>`;
 s+=L(150,24,s0[0],'start',17,'var(--ink)',800)+L(150,44,q.art,'start',12.5,'var(--mute)',600);
 if(bruch)s+=L(150,74,'Bruch!','middle',18,'var(--red)',800);
 if(ord>.02&&sel==0)s+=L(150,264,'gestrichelt: geordnete Bereiche','middle',11.5,col,700);
 if(K.BR.length)s+=L(150,264,'rot: Brücken zwischen den Ketten','middle',11.5,'var(--red)',700);
 /* rechts: Steifigkeit über der Temperatur, schematisch, mit Verarbeitungsfenster */
 const x0=352,x1=468,y0=104,y1=190,X=v=>x0+(v-20)/300*(x1-x0),Y=k=>y1-k*(y1-y0);
 s+=L(x0-4,76,'Steifigkeit','start',13,'var(--ink)',700)+L(x0-4,90,'(schematisch)','start',11,'var(--mute)',500);
 if(q.vf)s+=RC(X(q.vf[0]),y0-4,X(Math.min(320,q.vf[1]))-X(q.vf[0]),y1-y0+4,MX('g',22),'none',0,0)+L((X(q.vf[0])+X(Math.min(320,q.vf[1])))/2,y0+12,'Verarb.','middle',10,CC('g'),700);
 s+=`<path d="M${x0} ${y0-8}V${y1}H${x1+4}" fill="none" stroke="var(--ink)" stroke-width="1.4"/>`+[20,170,320].map(v=>L(X(v),y1+15,v,'middle',11,'var(--mute)',500)).join('')+L((x0+x1)/2,y1+30,'Temperatur in °C','middle',11,'var(--mute)',500);
 KCV.forEach((c,k)=>{const on=k==sel,d=c.map(([a,b])=>F(X(a))+','+F(Y(b))).join(' ');s+=`<polyline points="${d}" fill="none" stroke="${KUM[k][8]}" stroke-width="${on?3.4:1.6}" opacity="${on?1:.3}"/>`});
 const c=KCV[sel];let kk=0;if(T<=c[c.length-1][0]){for(let i=1;i<c.length;i++)if(T<=c[i][0]){const [a,b]=c[i-1],[a2,b2]=c[i];kk=b+(b2-b)*(T-a)/(a2-a);break}}
 s+=`<path d="M${F(X(T))} ${y0-6}V${y1}" stroke="var(--red)" stroke-dasharray="4 4"/>`+(T<=c[c.length-1][0]?`<circle cx="${F(X(T))}" cy="${F(Y(kk))}" r="5.5" fill="var(--red)" stroke="var(--ink)" stroke-width="1.6"/>`:'');
 s+=L(x0-4,240,'Zustand:','start',12,'var(--mute)',600)+L(x0-4,257,q.zs.length>20?q.zs.slice(0,q.zs.indexOf(',')):q.zs,'start',13,'var(--ink)',800);
 return s};
/* kleine Skizze: drei Grundtypen nebeneinander */
const kuDrei=k=>{let s=TI('Drei Grundtypen');const box=(x,ti,su,c,f)=>RC(x,48,140,170,MX(c,8),CC(c),10,1.6)+L(x+70,236,ti,'middle',14,'var(--ink)',800)+L(x+70,254,su,'middle',12,'var(--mute)',600)+f(x);
 const ch=(x,y,n,a,c)=>{let d=`M${x} ${y}`;for(let i=1;i<=n;i++)d+=`l12 ${i%2?-a:a}`;return P(d,c,2.4)};
 s+=box(16,'Thermoplast','lose Ketten','b',x=>[64,92,120,148,176].map((y,i)=>ch(x+12+(i%2)*6,y,9,7,CC('b'))).join(''));
 s+=box(170,'Elastomer','wenige Brücken','g',x=>[70,110,150,190].map(y=>ch(x+12,y,9,8,CC('g'))).join('')+[[x+48,70,110],[x+96,110,150],[x+60,150,190]].map(([a,b,c2])=>P(`M${a} ${b}V${c2}`,'var(--red)',2.6)).join(''));
 s+=box(324,'Duroplast','dichtes Netz','a',x=>[64,96,128,160,192].map(y=>ch(x+12,y,9,6,CC('a'))).join('')+[...Array(12)].map((_,i)=>{const a=x+24+(i%4)*28,b=64+Math.floor(i/4)*32;return P(`M${a} ${b}V${b+32}`,'var(--red)',2.4)}).join(''));
 return s};
X['Kunststoffe: Aufbau & Einteilung']={
 v:['Ein Rohr aus PE-HD und eine Schaltergehäuse-Kappe aus Phenolharz kommen beide in einen Ofen mit 200 °C. Was passiert?',['Beide schmelzen.','Das PE-Rohr schmilzt, die Kappe bleibt formstabil.','Die Kappe schmilzt, das Rohr nicht.','Keines von beiden verändert sich.'],1,'PE-HD ist ein Thermoplast und schmilzt bei etwa 130 °C. Phenolharz ist ein Duroplast: Das dichte Netz hält, bis der Werkstoff sich bei noch höheren Temperaturen zersetzt.'],
 ein:[S(13,'Kunststoffe bestehen aus sehr langen Molekülketten. Wie die Ketten zusammenhalten, bestimmt das Verhalten.',kuDrei),
  S(14,'Erwärmst Du einen Thermoplast, lösen sich die Ketten voneinander. Erst wird er weich, dann fließt er.',k=>kuBild(0,20+130*ph(k,.1,.9),0)),
  S(13,'Thermoplaste gibt es in zwei Arten.',VS('Amorph oder teilkristallin?',{h:'amorph',c:'y',l:['PS, PC, PMMA, ABS','oft glasklar','erweicht ab T_g']},{h:'teilkristallin',c:'b',l:['PE, PP, PA, POM','trüb','schmilzt bei T_m']})),
  S(13,'Vernetzte Kunststoffe schmelzen nicht. Beim Überhitzen zersetzen sie sich.',CARDS('Merkmale',[['🔥','Thermoplast','schmelzbar, schweißbar','b'],['🫧','Elastomer','dehnbar, federt zurück','g'],['🧱','Duroplast','hart, formstabil','a']]))],
 skz:[[SKZ(kuDrei,'Skizze drei Grundtypen'),'Thermoplaste haben nur lose Ketten. Elastomere haben wenige Brücken (rot) zwischen den Ketten, Duroplaste ein dichtes Netz.']],
 sim:{t:'Ketten und Netze unter Wärme und Zug',fix:'Zustände und Temperaturen sind vereinfachte Beispielwerte. Die Steifigkeitskurve ist schematisch, das grüne Feld zeigt den üblichen Bereich der Massetemperatur. Maßgeblich ist das Datenblatt des Werkstoffs.',
  c:[{k:'ty',l:'Kunststoff',u:'',opts:[0,1,2,3,4],lab:KUM.map(x=>x[0]),v:0},{k:'T',l:'Temperatur',u:'°C',min:20,max:320,st:5,v:20},{k:'z',l:'Zug',u:'%',min:0,max:100,st:5,v:0}],
  calc:v=>kuZ(v.ty,v.T,v.z),
  rows:(v,r)=>[['Zustand',r.zs,r.zer?'r':''],['nach dem Entlasten',r.rest],['schmelzbar',r.tp?'ja':'nein'],['Massetemperatur (Beispiel)',r.vf?r.vf[0]+' bis '+r.vf[1]+' °C':'nicht schmelzbar']],
  svg:(v,r)=>kuBild(v.ty,v.T,v.z),
  auf:{z:'PE-HD warm formbar, aber noch nicht flüssig.',t:'Ein Rohr aus PE-HD soll im Werk gebogen werden. Dafür muss es weich sein, darf aber noch nicht schmelzen. Finde den passenden Temperaturbereich.',h:'Tipp: Wähle PE-HD und erhöhe die Temperatur in kleinen Schritten. Achte auf die gestrichelten Bereiche.',ok:(v,r)=>v.ty===0&&r.soft}}};

/* ---------- Kennwerte: Zugstab und Spannungs-Dehnungs-Kurve ---------- */
const kwBild=k=>{let s=TI('Zugversuch an Kunststoffen');
 s+=RC(30,112,22,46,'#9ca3af','var(--ink)',3,1.4)+RC(190,112,22,46,'#9ca3af','var(--ink)',3,1.4)+P('M52 122H80Q92 128 104 128H140Q152 128 164 122H190V148H164Q152 142 140 142H104Q92 142 80 148H52Z','var(--ink)',1.8,'',MX('b',30));
 s+=AW(30,135,8,135,'var(--red)',3)+AW(212,135,234,135,'var(--red)',3)+L(122,104,'Zugstab','middle',13,'var(--mute)',600);
 const c=CHT({X0:280,X1:458,Y0:220,Y1:60,xm:30,ym:60,xt:[0,10,20,30],yt:[20,40,60],xl:'Dehnung in %',yl:'σ in N/mm²'});s+=c.s;
 const pp=[[0,0],[3,32],[6,42],[9,44],[12,40],[20,38],[28,39]].map(([x,y])=>F(c.px(x))+','+F(c.py(y))).join(' ');
 s+=`<polyline points="${pp}" fill="none" stroke="${CC('b')}" stroke-width="3"/>`+DOT(c.px(9),c.py(44),CC('r'),5)+L(c.px(9)+6,c.py(44)-10,'Streckgrenze','start',12,CC('r'),700);
 s+=L(c.px(28),c.py(39)-12,'Bruch','end',12,'var(--mute)',600)+L(c.px(4.5),c.py(12),'Anstieg: E-Modul','start',11,'var(--mute)',600);return s};
X['Kennwerte & Werkstoffprüfung']={
 v:['Ein Datenblatt nennt für ein PA 6 „trocken“ eine Streckspannung von 80 N/mm², „konditioniert“ von 45 N/mm². Welcher Wert gilt für ein Teil, das ein Jahr in der Halle gelegen hat?',['Eher 80 N/mm²','Eher 45 N/mm²','Der Mittelwert','Keiner, Kunststoffe altern nicht'],1,'Polyamid nimmt aus der Luft Feuchte auf. Nach einiger Zeit verhält es sich wie „konditioniert“: zäher, aber weniger fest.'],
 ein:[S(13,'Die wichtigsten Kennwerte stehen auf jedem Datenblatt.',CARDS('Kennwerte',[['📏','Zugversuch','σ, ε, E-Modul','b'],['🫗','MFR','Fließfähigkeit','y'],['👆','Shore','Härte','g'],['🔨','Kerbschlag','Zähigkeit','r']],{cols:2})),
  S(14,'Im Zugversuch wird der Stab gedehnt und die Kraft gemessen. Daraus entsteht die Kurve.',kwBild),
  S(13,'Den MFR bestimmst Du selbst: Schmelze aus der Düse abschneiden und wiegen.',k=>TITLE('Schmelze-Massefließrate')+OP(ph(k,.05,.4),FO(240,108,['MFR = ',{n:'m · 600 s',d:'t'}],22))+OP(ph(k,.45,.85),FO(240,192,['MFR = ',{n:'0,8 g · 600 s',d:'30 s'},' = 16 g/10 min'],18))),
  S(13,'Kunststoffe reagieren stark auf ihre Umgebung.',LIST('Worauf Du achten musst',[['Temperatur: warm weicher, kalt spröder','1'],['Zeit: unter Dauerlast kriechen sie','2'],['Feuchte: PA wird zäher und weicher','3']]))],
 skz:[[SKZ(kwBild,'Skizze Zugversuch'),'Typische Kurve eines zähen Thermoplasts: Nach der Streckgrenze schnürt der Stab ein, die Spannung fällt etwas und bleibt bis zum Bruch fast gleich.']]};

/* ---------- Rheologie: Fließkurve einer PP-Schmelze ---------- */
const rhEta=(T,g)=>1000*Math.exp(-.03*(T-240))/Math.pow(1+g/50,.65);
const rhG=s=>100*Math.pow(100,s/100);
const rhBild=(T,sp)=>{const g=rhG(sp),eta=rhEta(T,g),lx=v=>Math.log10(v);let s='';
 const X0=74,X1=272,Y0=226,Y1=46,px=v=>X0+(X1-X0)*(lx(v)-2)/2,py=v=>Y0-(Y0-Y1)*(lx(v)-1)/3;
 [10,100,1000,10000].forEach(v=>s+=`<path d="M${X0} ${F(py(v))}H${X1}" stroke="var(--line)"/>`+L(X0-6,py(v)+4,nz(v,0),'end',11.5,'var(--mute)',500));
 [100,1000,10000].forEach(v=>s+=L(px(v),Y0+16,nz(v,0),v===100?'start':'middle',11.5,'var(--mute)',500));
 s+=`<path d="M${X0} ${Y1-6}V${Y0}H${X1+6}" fill="none" stroke="var(--ink)" stroke-width="1.4"/>`+L(X0-2,Y1-12,'η in Pa · s','start',12,'var(--mute)',600)+L(X1+4,Y0+32,'Schergeschwindigkeit in 1/s','end',12,'var(--mute)',600);
 s+=`<path d="M${X0} ${F(py(60))}H${X1}" stroke="var(--ok)" stroke-width="1.6" stroke-dasharray="6 4"/>`+L(X0+4,py(60)+14,'Teil wird voll','start',11.5,'var(--ok)',700);
 [200,240,280].forEach(t=>{let d='';for(let e=2;e<=4.001;e+=.05){const v=Math.pow(10,e);d+=(d?'L':'M')+F(px(v))+' '+F(py(Math.max(10,rhEta(t,v))))}s+=P(d,'var(--mute)',1.4,'',)+L(px(10000)+4,Math.min(Y0-5,py(Math.max(10,rhEta(t,10000)))+4),t+' °C','start',11,'var(--mute)',600)});
 {let d='';for(let e=2;e<=4.001;e+=.05){const v=Math.pow(10,e);d+=(d?'L':'M')+F(px(v))+' '+F(py(Math.max(10,rhEta(T,v))))}s+=P(d,CC('a'),3.2)}
 s+=DOT(px(g),py(Math.max(10,eta)),eta<=60?'var(--ok)':'var(--red)',7);
 /* rechts: Kavität füllt sich je nach Viskosität */
 const fill=Math.min(1,60/eta*1.02),ok=eta<=60;s+=L(392,40,'Deckel','middle',13,'var(--ink)',700);
 s+=RC(334,62,116,150,'var(--card)','var(--ink)',6,2)+RC(334,62+150*(1-fill),116,150*fill,MX(ok?'g':'y',45),'none',0,0)+RC(334,62,116,150,'none','var(--ink)',6,2);
 s+=P('M392 212V232','var(--ink)',6)+L(392,252,'Anschnitt','middle',11.5,'var(--mute)',600)+L(392,56,ok?'voll':'nicht voll','middle',12.5,ok?'var(--ok)':'var(--red)',800);
 if(sp>95)s+=L(392,140,'Scherwärme!','middle',14,'var(--red)',800);return s};
const rhSk=k=>{let s=TI('Scherung im Spalt');s+=RC(70,70,340,10,'var(--mute)','var(--ink)',2,1.4)+RC(70,190,340,10,'var(--mute)','var(--ink)',2,1.4)+RC(70,80,340,110,MX('y',22),'none',0,0);
 [96,118,140,162,184].forEach((y,i)=>{const v=12+[0,22,30,22,0][i]*2.6;s+=AW(150,y-4,150+v,y-4,CC('a'),2.4)});
 s+=L(240,228,'Schnell bewegte Schichten gleiten aneinander vorbei','middle',13,'var(--ink)',600)+L(240,248,'Mitte schnell, Wand langsam: das ist Scherung','middle',12,'var(--mute)',500)+L(420,140,'Wand','start',12,'var(--mute)',600);return s};
X['Rheologie: Fließverhalten der Schmelze']={
 v:['Ein dünnes Teil wird nicht voll. Ein Kollege will die Einspritzgeschwindigkeit senken, „damit die Schmelze besser nachkommt“. Was passiert?',['Das Teil füllt besser.','Das Teil füllt eher schlechter.','Nichts ändert sich.','Das Werkzeug öffnet.'],1,'Kunststoffschmelzen sind strukturviskos: Bei langsamer Bewegung sind sie zäher. Außerdem kühlt die Schmelze auf dem längeren Weg mehr ab.'],
 ein:[S(13,'Zwischen den Werkzeugwänden wird die Schmelze geschert: In der Mitte fließt sie schnell, an der Wand fast gar nicht.',rhSk),
  S(14,'Je stärker die Scherung, desto dünnflüssiger wird die Schmelze.',k=>rhBild(240,20+70*ph(k,.1,.9))),
  S(13,'Wärmer hilft auch, aber nicht unbegrenzt.',VS('Zwei Stellschrauben',{h:'schneller einspritzen',c:'a',l:['Viskosität sinkt','Scherwärme steigt','Gefahr: Brandstellen']},{h:'wärmer verarbeiten',c:'r',l:['Viskosität sinkt','Kühlzeit steigt','Gefahr: Zersetzung']})),
  S(13,'Ob ein Teil voll wird, schätzt Du mit dem Fließweg-Wanddicken-Verhältnis ab.',k=>TITLE('Fließweg zu Wanddicke')+OP(ph(k,.05,.4),FO(240,108,['i = ',{n:'Fließweg',d:'Wanddicke'}],22))+OP(ph(k,.45,.85),FO(240,192,['i = ',{n:'200 mm',d:'1 mm'},' = 200'],20)))],
 skz:[[SKZ(rhSk,'Skizze Scherung'),'Die Pfeile zeigen die Geschwindigkeit der Schichten. Der Unterschied von Schicht zu Schicht ist die Scherung.']],
 sim:{t:'Dünnwandigen Deckel aus PP füllen',fix:'PP, Beispielwerte: Viskosität 1000 Pa · s bei 240 °C und kleiner Scherung, je 10 K wärmer etwa 26 % dünnflüssiger. Der Deckel wird voll, wenn die Viskosität im Anschnitt höchstens 60 Pa · s beträgt. Über 95 % Einspritzgeschwindigkeit droht Scherwärme.',
  c:[{k:'T',l:'Massetemperatur',u:'°C',min:200,max:280,st:10,v:220},{k:'sp',l:'Einspritzgeschwindigkeit',u:'%',min:10,max:100,st:5,v:40}],
  calc:v=>{const g=rhG(v.sp);return{g,eta:rhEta(v.T,g)}},
  rows:(v,r)=>[['Schergeschwindigkeit',nz(r.g,0)+' 1/s'],['Viskosität',nz(r.eta,0)+' Pa · s',r.eta<=60?'g':'r'],['Teil',r.eta<=60?'wird voll':'wird nicht voll',r.eta<=60?'g':'r'],['Scherwärme',v.sp>95?'zu hoch':'in Ordnung',v.sp>95?'r':'g']],
  svg:(v,r)=>rhBild(v.T,v.sp),
  auf:{z:'Deckel voll bei höchstens 240 °C, ohne Scherwärme.',t:'Damit die Kühlzeit kurz bleibt, soll die Massetemperatur höchstens 240 °C betragen. Stelle die Einspritzgeschwindigkeit so ein, dass der Deckel trotzdem voll wird, aber keine Scherwärme entsteht.',h:'Tipp: Senke zuerst die Temperatur auf 240 °C und erhöhe dann die Geschwindigkeit.',ok:(v,r)=>v.T<=240&&r.eta<=60&&v.sp<=95}}};

/* ---------- Temperieren: Werkzeughälfte mit Kühlkanälen ---------- */
const tpBild=(P1,dT,Q)=>{const hot=Math.min(1,dT/8);let s=TI('Werkzeughälfte mit Kühlkreis');
 s+=RC(110,54,260,170,'#c4ccd6','var(--ink)',6,2)+P('M170 100H310V178H170Z','var(--ink)',2,'',MX('r',30))+L(240,144,'Formteil','middle',13,'var(--ink)',700);
 const ys=[82,200];s+=FLO('M40 82H430',Q)+FLO('M430 82V200H40',Q);
 [82,200].forEach(y=>[150,240,330].forEach(x=>s+=`<circle cx="${x}" cy="${y}" r="9" fill="none" stroke="var(--ink)" stroke-width="2"/>`));
 [[200,100,200,90],[280,100,280,90],[200,178,200,190],[280,178,280,190]].forEach(([a,b,c,d])=>s+=AW(a,b,c,d,CC('r'),2.4));
 s+=L(36,72,'Vorlauf','start',12,CC('b'),700)+L(36,226,'Rücklauf','start',12,`color-mix(in srgb,${CC('b')} ${Math.round(100-hot*100)}%,${CC('r')})`,700);
 s+=RC(388,214,84,40,MX(dT<=4?'g':'r',22),CC(dT<=4?'g':'r'),6,1.6)+L(430,231,'ΔT','middle',12,'var(--mute)',600)+L(430,248,nz(dT,1)+' K','middle',14,'var(--ink)',800);
 s+=L(240,250,'Wärme: '+nz(P1,2)+' kW','middle',13,CC('r'),700);return s};
X['Temperieren & Kühlen von Werkzeugen']={
 v:['Du halbierst den Kühlwasserdurchfluss durch ein Werkzeug. Was passiert mit der Temperaturdifferenz zwischen Vor- und Rücklauf?',['Sie halbiert sich.','Sie bleibt gleich.','Sie verdoppelt sich etwa.','Sie verschwindet.'],2,'Die gleiche Wärme verteilt sich auf halb so viel Wasser. Jedes Kilogramm wird doppelt so warm.'],
 ein:[S(13,'Die Schmelze gibt im Werkzeug viel Wärme ab. Das Kühlwasser muss sie wegtragen.',k=>tpBild(5,2+3*ph(k,.1,.9),10)),
  S(13,'Wie viel Wärme anfällt, folgt aus Schussgewicht und Zykluszeit.',k=>TITLE('Wärmestrom')+OP(ph(k,.05,.4),FO(240,104,['Q̇ = ',{n:'m · Δh',d:'t_Z'}],22))+OP(ph(k,.45,.85),FO(240,190,['Q̇ = ',{n:'0,3 kg · 400 kJ/kg',d:'24 s'},' = 5 kW'],18))),
  S(13,'Der Durchfluss bestimmt, wie stark sich das Wasser erwärmt.',k=>TITLE('Kühlwasser')+OP(ph(k,.05,.4),FO(240,104,['ΔT = ',{n:'Wärmestrom',d:'c · Massenstrom'}],20))+OP(ph(k,.45,.85),TX(240,186,'Kleine Temperaturdifferenz heißt gleichmäßige Kühlung',440,'ein2','middle'))),
  S(13,'Wenn die Kühlung nachlässt, sind die Ursachen meist einfach.',LIST('Typische Ursachen',[['Kalk und Rost in den Kanälen','1'],['Geknickter oder vertauschter Schlauch','2'],['Durchfluss zu klein eingestellt','3']]))],
 skz:[[SKZ(k=>tpBild(5,3,10),'Skizze Kühlkreis'),'Kühlwasser fließt im Vorlauf durch die Kanäle beider Seiten und nimmt die Wärme des Formteils auf. Am Rücklauf ist es um ΔT wärmer.']],
 sim:{t:'Kühlwasserstrom einstellen',fix:'PP, Beispielwert: Die Schmelze gibt bis zur Entformung 400 kJ/kg ab. Wasser: c = 4,18 kJ/(kg · K), 1 l ≈ 1 kg. Ziel für gleichmäßige Kühlung: höchstens 4 K zwischen Vor- und Rücklauf.',
  c:[{k:'m',l:'Schussgewicht',u:'g',min:100,max:500,st:20,v:200},{k:'tz',l:'Zykluszeit',u:'s',min:16,max:60,st:2,v:30},{k:'q',l:'Durchfluss',u:'l/min',min:2,max:24,st:1,v:6}],
  calc:v=>{const P1=v.m/1000*400/v.tz,dT=P1/(4.18*v.q/60);return{P1,dT,qn:P1/(4.18*4)*60}},
  rows:(v,r)=>[['Wärmestrom',nz(r.P1,2)+' kW'],['ΔT Vor- zu Rücklauf',nz(r.dT,1)+' K',r.dT<=4?'g':'r'],['nötig für 4 K',nz(r.qn,1)+' l/min']],
  svg:(v,r)=>tpBild(r.P1,r.dT,v.q),
  auf:{z:'300 g, 24 s: ΔT höchstens 4 K.',t:'Ein neues Teil wiegt 300 g und läuft mit 24 s Zykluszeit. Stelle den Durchfluss so ein, dass sich das Wasser höchstens um 4 K erwärmt.',h:'Tipp: Erst Schussgewicht und Zykluszeit einstellen, dann den Durchfluss erhöhen, bis das Feld grün wird.',ok:(v,r)=>v.m===300&&v.tz===24&&r.dT<=4}}};

/* ---------- Trocknen: Trockentrichter ---------- */
const trBild=(V,tv,ok)=>{let s=TI('Trockentrichter an der Maschine');const h=Math.min(1,V/200),top=210-130*h;
 s+=P(`M150 ${F(top-6)}H290V200L240 236H200L150 200Z`,'var(--ink)',2.4,'','var(--card)');
 for(let i=0;i<70;i++){const x=158+(i*37%124),y=top+4+((i*53)%Math.max(8,196-top));if(y<200||x>180&&x<260)s+=`<circle cx="${x}" cy="${F(Math.min(y,228))}" r="3" fill="${MX('y',70)}" stroke="var(--ink)" stroke-width=".6"/>`}
 s+=FLO('M406 180V214H273',6)+FLO(`M270 ${F(top-6)}V52H406V120`,6)+RC(372,120,68,60,MX('b',18),'var(--ink)',6,2)+L(406,155,'Trockner','middle',12,'var(--ink)',700)+L(340,234,'trockene Luft','middle',12,CC('b'),700)+L(338,72,'feuchte Luft','middle',12,'var(--mute)',700)+P('M210 236V258M230 236V258','var(--ink)',2)+L(220,268,'zur Maschine','middle',11,'var(--mute)',600);
 s+=L(80,92,nz(V,0)+' l','middle',18,'var(--ink)',800)+L(80,112,'Trichter','middle',12,'var(--mute)',600);
 s+=RC(30,150,100,40,MX(ok?'g':'r',22),CC(ok?'g':'r'),6,1.6)+L(80,166,'Verweilzeit','middle',11,'var(--mute)',600)+L(80,183,nz(tv,1)+' h','middle',14,'var(--ink)',800);return s};
X['Trocknen, Fördern & Dosieren']={
 v:['Ein Trockner ist für 4 h Trockenzeit eingestellt. Der Durchsatz der Maschine verdoppelt sich, der Trichter bleibt gleich. Was passiert?',['Nichts, die Temperatur bleibt ja gleich.','Das Granulat bleibt nur noch etwa 2 h im Trichter.','Das Granulat wird trockener.','Der Trockner schaltet ab.'],1,'Der Trichter leert sich doppelt so schnell. Jedes Korn verbringt nur halb so lange darin.'],
 ein:[S(13,'Manche Kunststoffe ziehen Wasser. In der Schmelze schadet es.',CARDS('Hygroskopisch',[['💧','PA','Polyamid','b'],['🍾','PET','Flaschen, Fasern','b'],['🔆','PC','Scheiben','b'],['🚫','PE, PP','nehmen kaum Wasser auf','g']],{cols:2})),
  S(14,'Im Trichter strömt trockene, warme Luft durch das Granulat.',k=>trBild(80+60*ph(k,.1,.9),3,1)),
  S(13,'Der Trichter muss so groß sein, dass jedes Korn die volle Trockenzeit darin bleibt.',k=>TITLE('Trichtervolumen')+OP(ph(k,.05,.4),FO(240,104,['V = ',{n:'Durchsatz · Trockenzeit',d:'Schüttdichte'}],19))+OP(ph(k,.45,.85),FO(240,190,['V = ',{n:'21,6 kg/h · 4 h',d:'650 kg/m³'},' = 0,133 m³'],18))),
  S(13,'Fehler beim Fördern und Dosieren sind schnell gemacht.',LIST('Darauf achten',[['Leitungen beim Wechsel leer fahren','1'],['Dosierer regelmäßig auslitern','2'],['Staub absaugen, Explosionsschutz','3']]))],
 skz:[[SKZ(k=>trBild(120,4.5,1),'Skizze Trockentrichter'),'Oben kommt feuchtes Granulat nach, unten läuft getrocknetes in die Maschine. Die trockene Luft strömt von unten nach oben.']],
 sim:{t:'Trockentrichter für ein PA-Teil wählen',fix:'PA 6, Beispielwerte: Trockenzeit 4 h, Schüttdichte 650 kg/m³. Trichter gibt es mit 25, 50, 75, 100, 150 und 200 Litern.',
  c:[{k:'m',l:'Schussgewicht',u:'g',min:40,max:300,st:10,v:120},{k:'tz',l:'Zykluszeit',u:'s',min:16,max:60,st:2,v:30},{k:'V',l:'Trichter',u:'l',opts:[25,50,75,100,150,200],v:2}],
  calc:v=>{const md=v.m/1000*3600/v.tz,tv=v.V/1000*650/md;return{md,tv,Vn:md*4/650*1000}},
  rows:(v,r)=>[['Durchsatz',nz(r.md,1)+' kg/h'],['Verweilzeit im Trichter',nz(r.tv,1)+' h',r.tv>=4?'g':'r'],['nötiges Volumen',nz(r.Vn,0)+' l']],
  svg:(v,r)=>trBild(v.V,r.tv,r.tv>=4),
  auf:{z:'180 g Schussgewicht: 4 bis 6 h Verweilzeit.',t:'Ein neues Teil wiegt 180 g. Zu kurz getrocknet gibt es Schlieren, zu lange getrocknet vergilbt das Polyamid. Wähle Zykluszeit und Trichter so, dass das Granulat mindestens 4 h und höchstens 6 h im Trichter bleibt.',h:'Tipp: Stell zuerst das Schussgewicht ein. Kürzere Zykluszeit heißt mehr Durchsatz, also einen größeren Trichter.',ok:(v,r)=>v.m===180&&r.tv>=4&&r.tv<=6}}};

/* ---------- Additive: Faserausrichtung und Dosierung ---------- */
const adBild=k=>{let s=TI('Glasfasern richten sich beim Fließen aus');
 s+=RC(40,60,400,130,MX('m',14),'var(--ink)',8,1.8)+P('M40 125H20','var(--ink)',8)+L(30,212,'Anschnitt','start',12,'var(--mute)',600);
 for(let i=0;i<26;i++){const x=70+(i%9)*42,y=78+Math.floor(i/9)*40+(i%2)*8;s+=P(`M${x} ${y}h26`,CC('y'),3)}
 s+=AW(60,206,420,206,'var(--flow)',2.2)+L(240,226,'Fließrichtung','middle',13,'var(--flow)',700);
 s+=L(240,252,'längs: fest, wenig Schwindung · quer: weniger fest, mehr Schwindung','middle',12,'var(--ink)',600);return s};
X['Additive, Füllstoffe & Einfärben']={
 v:['Ein Teil aus PP wird künftig mit 30 % Glasfasern gefertigt. Was passiert mit dem Verzug?',['Er verschwindet.','Er kann größer werden.','Er bleibt genau gleich.','Glasfasern verhindern jede Schwindung.'],1,'Die Fasern richten sich in Fließrichtung aus. Längs schwindet das Teil wenig, quer mehr. Der Unterschied verbiegt es.'],
 ein:[S(13,'Zusätze verändern Eigenschaften und Verarbeitung.',CARDS('Was kommt dazu?',[['🛡️','Stabilisator','Wärme, UV','g'],['🪨','Füllstoff','Talkum, Kreide','m'],['🧵','Glasfaser','Festigkeit','y'],['🎨','Masterbatch','Farbe','r']],{cols:2})),
  S(14,'Fasern machen das Teil in Fließrichtung fest, quer dazu weniger.',adBild),
  S(13,'Masterbatch wird in festem Anteil dosiert.',k=>TITLE('Masterbatch je Stunde')+OP(ph(k,.05,.4),FO(240,104,['Masterbatch = Durchsatz · Anteil'],20))+OP(ph(k,.45,.85),FO(240,190,['40 ',{n:'kg',d:'h'},' · 0,02 = 0,8 ',{n:'kg',d:'h'}],19))),
  S(13,'Glasfasern haben ihren Preis in der Werkstatt.',LIST('Folgen für die Maschine',[['Schnecke und Rückstromsperre verschleißen','1'],['Werkzeug braucht harten Stahl','2'],['Mahlgut hat kürzere Fasern','3']]))],
 skz:[[SKZ(adBild,'Skizze Faserausrichtung'),'Die gelben Striche sind Glasfasern. Sie legen sich beim Fließen längs. Ein Teil verzieht sich, weil es längs und quer verschieden stark schwindet.']]};

/* ---------- Spritzgießen: bewegter Zyklus ---------- */
const sgZ=(s,Tw)=>{const tK=2.4*s*s*(1+(Tw-40)/100),tN=Math.min(tK*.6,1.2*s),tz=1.5+1+tK+1+1;return{tK,tN,tz,n:7.5*3600/tz*2*.9}};
const sgBild=(r,still)=>{const tz=r.tz,f=[1.5,1,r.tN,r.tK-r.tN,1,1],cum=[0];f.forEach(x=>cum.push(cum[cum.length-1]+x));const kt=cum.map(x=>F(x/tz).replace(/\.?0+$/,'')||'0'),D=F(Math.max(4,tz/4));
 const an=(attr,vals,ty)=>still?'':ty?`<animateTransform attributeName="transform" type="translate" values="${vals}" keyTimes="${kt.join(';')}" dur="${D}s" repeatCount="indefinite"/>`:`<animate attributeName="${attr}" values="${vals}" keyTimes="${kt.join(';')}" dur="${D}s" repeatCount="indefinite"/>`;
 let s=L(240,22,'Spritzgießzyklus','middle',15,'var(--ink)',700);
 /* Trichter, Zylinder mit Heizbändern */
 s+=P('M346 50H386L376 74H356Z','var(--ink)',2,'',MX('y',50))+RC(200,74,236,44,'#c9d0d8','var(--ink)',4,2);
 [216,262,308,354,400].forEach(x=>s+=RC(x,70,26,52,MX('r',40),'var(--ink)',3,1));
 /* Schnecke: fährt beim Einspritzen nach links, beim Dosieren zurück */
 s+=`<g>`+an('',['0 0','0 0','-34 0','-34 0','0 0','0 0','0 0'].join(';'),1)+RC(214,88,230,16,'#7c8796','var(--ink)',3,1.4)+[...Array(9)].map((_,i)=>P(`M${226+i*24} 88l10 16`,'var(--ink)',1.6)).join('')+`</g>`;
 s+=RC(190,88,14,16,MX('r',55),'var(--ink)',2,1.2)+P('M200 96H184','var(--ink)',6);
 /* Werkzeug: feste Hälfte und bewegliche Hälfte */
 s+=RC(150,58,32,80,'#b6bfca','var(--ink)',3,2);
 s+=`<g>`+an('',['-40 0','0 0','0 0','0 0','0 0','-40 0','-40 0'].join(';'),1)+RC(112,58,34,80,'#b6bfca','var(--ink)',3,2)+`</g>`;
 /* Formteil: füllt sich, fällt beim Auswerfen */
 s+=`<g>`+an('',['0 0','0 0','0 0','0 0','0 0','0 0','0 90'].join(';'),1)+`<rect x="138" y="76" width="18" height="44" rx="2" fill="${CC('a')}" stroke="var(--ink)" stroke-width="1.4">`+an('opacity','0;0;1;1;1;1;1')+`</rect></g>`;
 s+=P('M60 138V150H200','var(--ink)',3)+L(30,52,'bewegliche','start',11,'var(--mute)',600)+L(30,66,'Hälfte','start',11,'var(--mute)',600)+L(160,52,'feste','middle',11,'var(--mute)',600);
 /* Zeitleiste der Phasen mit Läufer */
 const nm=['Schließen','Einspritzen','Nachdruck','Restkühlen + Dosieren','Öffnen','Auswerfen'],cl=['m','r','y','b','m','g'],X0=20,W=440;let x=X0;
 nm.forEach((n,i)=>{const w=W*f[i]/tz;s+=RC(x,186,w,26,MX(cl[i],45),'var(--card)',0,1.5);if(w>62)s+=L(x+w/2,204,w>130?n:n.split(' ')[0],'middle',11,'var(--ink)',700);x+=w});
 s+=L(X0,180,'Phasen im Zyklus (Breite = Zeit)','start',11.5,'var(--mute)',600);
 if(!still)s+=`<path d="M${X0} 182V216" stroke="var(--ink)" stroke-width="2.4"><animate attributeName="d" values="M${X0} 182V216;M${X0+W} 182V216" dur="${D}s" repeatCount="indefinite"/></path>`;
 s+=L(X0,240,'Kühlzeit '+nz(r.tK,1)+' s','start',13,CC('b'),700)+L(240,240,'Zykluszeit '+nz(tz,1)+' s','middle',13,'var(--ink)',800)+L(460,240,'Animation '+nz(Math.max(4,tz/4),1)+' s je Zyklus','end',11,'var(--mute)',500);
 return s};
X['Spritzgießen: Zyklus & Einstellung']={
 v:['Eine Variante hat statt 2 mm nun 3 mm Wanddicke. Wie ändert sich die Kühlzeit etwa?',['Sie steigt um 50 %.','Sie steigt auf mehr als das Doppelte.','Sie bleibt gleich.','Sie sinkt.'],1,'Die Kühlzeit wächst mit dem Quadrat der Wanddicke: (3 ÷ 2)² = 2,25.'],
 ein:[S(14,'Ein Zyklus hat feste Phasen. Die Kühlzeit ist meist die längste.',k=>sgBild(sgZ(2,40),0)),
  S(13,'Am Umschaltpunkt wechselt die Maschine von Geschwindigkeit auf Druck.',FLOW('Füllen und Nachdrücken',[['➡️','Einspritzen','Geschwindigkeit','r'],['🔀','Umschalten','fast voll','a'],['⬅️','Nachdruck','Druck','y']],{y:70,h:128})),
  S(13,'Doppelte Wand, vierfache Kühlzeit.',k=>TITLE('Kühlzeit und Wanddicke')+OP(ph(k,.05,.4),FO(240,104,['t_K2 = t_K1 · ',{n:'s₂²',d:'s₁²'}],22))+OP(ph(k,.45,.85),FO(240,190,['t_K2 = 9,6 s · ',{n:'(3 mm)²',d:'(2 mm)²'},' = 21,6 s'],18))),
  S(13,'Einstellen in fester Reihenfolge spart Zeit und Ausschuss.',LIST('Reihenfolge',[['Temperaturen nach Datenblatt','1'],['Füllstudie mit kurzen Schüssen','2'],['Umschaltpunkt und Nachdruck','3'],['Kühlzeit verkürzen','4']],{h:40}))],
 skz:[[SKZ(k=>sgBild(sgZ(2,40),1),'Skizze Spritzgießmaschine'),'Rechts der Zylinder mit Heizbändern und Schnecke, links die beiden Werkzeughälften. Darunter die Phasen eines Zyklus, die Breite entspricht der Zeit.']],
 sim:{t:'Zykluszeit für ein Zweifachwerkzeug',fix:'PP, Beispielwerte: Kühlzeit t_K = 2,4 s/mm² · s² bei 40 °C Werkzeugtemperatur, je 10 K wärmer 10 % länger. Dazu 4,5 s für Schließen, Einspritzen, Öffnen und Auswerfen. 2-fach-Werkzeug, Schicht 7,5 h, Nutzungsgrad 90 %. Datenblatt: Werkzeugtemperatur 40 bis 80 °C.',
  c:[{k:'s',l:'Wanddicke',u:'mm',min:1,max:4,st:.5,v:2},{k:'Tw',l:'Werkzeugtemperatur',u:'°C',min:20,max:90,st:10,v:40}],
  calc:v=>sgZ(v.s,v.Tw),
  rows:(v,r)=>[['Kühlzeit',nz(r.tK,1)+' s'],['Zykluszeit',nz(r.tz,1)+' s'],['Teile je Schicht',nz(r.n,0),r.n>=1500?'g':'r'],['Werkzeugtemperatur',v.Tw<40?'zu kalt: Verzug':v.Tw>80?'über Datenblatt':'im Datenblatt',v.Tw<40||v.Tw>80?'r':'g']],
  svg:(v,r)=>sgBild(r,0),
  auf:{z:'3 mm Wand: mindestens 1500 Teile, Werkzeug 40 bis 80 °C.',t:'Die neue Variante hat 3 mm Wanddicke. Der Kunde braucht 1500 Teile je Schicht. Finde eine Werkzeugtemperatur im Datenblattbereich, mit der das klappt.',h:'Tipp: Wanddicke auf 3 mm, dann die Werkzeugtemperatur schrittweise ändern.',ok:(v,r)=>v.s===3&&v.Tw>=40&&v.Tw<=80&&r.n>=1500}}};

/* ---------- Werkzeug: Schließkraft ---------- */
const wzBild=(n,F1,M)=>{const over=F1>M,gap=over?10:0;let s=TI('Schließkraft gegen Innendruck');
 s+=RC(60,60,150-gap/2,170,'#b6bfca','var(--ink)',4,2)+RC(210+gap/2,60,150-gap/2,170,'#b6bfca','var(--ink)',4,2);
 const k=Math.min(n,8),rows=k<=2?k:k/2,cols=k<=2?1:2;for(let i=0;i<k;i++){const cy=72+(i%rows+.5)*146/rows,cx=cols==1?210:(i<rows?190:230),h=Math.min(56,120/rows);s+=RC(cx-12+(cols==1?0:0),cy-h/2,24,h,MX('a',50),'var(--ink)',3,1.4)}
 s+=AW(186,145,120,145,'var(--red)',3)+AW(234,145,300,145,'var(--red)',3)+L(153,132,'Innendruck','middle',12,'var(--red)',700);
 s+=AW(22,145,58,145,'var(--flow)',5)+AW(398,145,362,145,'var(--flow)',5)+L(474,112,'Schließkraft','end',12,'var(--flow)',700)+L(474,128,nz(M,0)+' kN','end',13,'var(--flow)',800);
 if(over){s+=P('M210 60V230','var(--red)',2.4,'4 3')+L(210,252,'Werkzeug öffnet: Grat!','middle',14,'var(--red)',800)}
 else s+=L(210,252,'nötig: '+nz(F1,0)+' kN','middle',13,'var(--ink)',700);return s};
X['Werkzeug- & Formenbau']={
 v:['Ein 1-fach-Werkzeug läuft gut auf einer 800-kN-Maschine. Es wird durch ein 2-fach-Werkzeug ersetzt. Was gilt für die Schließkraft?',['Sie bleibt gleich.','Sie verdoppelt sich etwa.','Sie halbiert sich.','Sie hängt nur von der Maschine ab.'],1,'Zwei Kavitäten haben die doppelte projizierte Fläche. Der Innendruck drückt auf beide, also braucht es etwa die doppelte Kraft.'],
 ein:[S(13,'Ein Werkzeug hat viele Aufgaben.',CARDS('Aufbau',[['🫗','Anguss','Weg der Schmelze','r'],['🧊','Kühlung','Kanäle','b'],['📤','Auswerfer','Teil heraus','y'],['🌬️','Entlüftung','Luft heraus','g']],{cols:2})),
  S(14,'Der Innendruck will das Werkzeug öffnen. Die Schließkraft hält dagegen.',k=>wzBild(2,900+600*ph(k,.2,.8),1000)),
  S(13,'Die nötige Kraft folgt aus Fläche, Druck und Kavitäten.',k=>TITLE('Schließkraft')+OP(ph(k,.05,.4),FO(240,100,['F_S = A_proj · p_W · n · 1,2'],20))+OP(ph(k,.45,.85),FO(240,180,['120 cm² · 4000 N/cm² · 2 · 1,2 = 1152 kN'],17))),
  S(13,'Das Werkzeug wird größer gebaut, weil das Teil schwindet.',k=>TITLE('Werkzeugmaß')+OP(ph(k,.05,.4),FO(240,104,['Werkzeugmaß = ',{n:'Formteilmaß',d:'1 − Schwindung'}],19))+OP(ph(k,.45,.85),FO(240,192,[{n:'100 mm',d:'1 − 0,015'},' = 101,52 mm'],19)))],
 skz:[[SKZ(k=>wzBild(2,1100,1500),'Skizze Werkzeug mit zwei Kavitäten'),'Rot drückt die Schmelze die Hälften auseinander, blau hält die Maschine sie zu. Reicht die Schließkraft nicht, öffnet sich ein Spalt, und es entsteht Grat.']],
 sim:{t:'Reicht die Maschine?',fix:'Sicherheitsfaktor 1,2. Werkzeuginnendruck als Beispielwert. 1 bar = 10 N/cm². Maschinen mit 500, 800, 1000, 1500, 2000 und 2500 kN.',
  c:[{k:'A',l:'Projizierte Fläche je Kavität',u:'cm²',min:20,max:300,st:10,v:80},{k:'p',l:'Werkzeuginnendruck',u:'bar',min:200,max:600,st:50,v:350},{k:'n',l:'Kavitäten',u:'',opts:[1,2,4,8],v:1},{k:'M',l:'Maschine',u:'kN',opts:[500,800,1000,1500,2000,2500],v:1}],
  calc:v=>{const F1=v.A*v.p*10*v.n*1.2/1000;return{F1,ok:F1<=v.M,au:F1/v.M}},
  rows:(v,r)=>[['nötige Schließkraft',nz(r.F1,0)+' kN',r.ok?'g':'r'],['Auslastung der Maschine',nz(r.au*100,0)+' %',r.au<=1?'g':'r']],
  svg:(v,r)=>wzBild(v.n,r.F1,v.M),
  auf:{z:'120 cm², 4 Kavitäten: Maschine zu 70 bis 95 % auslasten.',t:'Für ein Teil mit 120 cm² projizierter Fläche wird ein 4-fach-Werkzeug gebaut. Eine zu kleine Maschine geht auf, eine viel zu große kostet unnötig Energie und Stundensatz. Wähle Innendruck und Maschine so, dass die Schließkraft zu 70 bis 95 % genutzt wird.',h:'Tipp: Erst Fläche und Kavitäten einstellen, dann die Maschinen von klein nach groß durchgehen.',ok:(v,r)=>v.A===120&&v.n===4&&r.au>=.7&&r.au<=.95}}};

/* ---------- Fehlerbilder ---------- */
const fbBild=k=>{let s=TI('Typische Fehler am Formteil');
 s+=P('M60 70H420V200H60Z','var(--ink)',2.2,'',MX('b',18))+P('M240 200V226','var(--ink)',6)+L(254,232,'Anschnitt','start',11,'var(--mute)',600);
 s+=`<ellipse cx="120" cy="110" rx="26" ry="10" fill="${MX('m',45)}"/>`+L(120,92,'Einfallstelle','middle',12,'var(--ink)',700);
 s+=P('M330 70Q326 135 334 200','var(--red)',2,'5 3')+L(330,62,'Bindenaht','middle',12,'var(--red)',700);
 s+=P('M60 200h-10M60 160h-8M420 120h10','var(--amber)',3)+L(40,240,'Grat','start',12,'var(--amber)',700);
 s+=`<circle cx="400" cy="186" r="9" fill="#3f3f46"/>`+L(398,240,'Brandstelle','end',12,'#52525b',700);
 [[160,150],[176,160],[192,148],[208,162]].forEach(([x,y])=>s+=P(`M${x} ${y}q12 -6 24 0`,'#a1a1aa',1.8));s+=L(186,186,'Schlieren','middle',12,'var(--mute)',700);return s};
X['Fehlerbilder am Formteil']={
 v:['An einem Teil entsteht Grat an der Trennebene. Ein Einsteller erhöht deshalb den Nachdruck. Was ist zu erwarten?',['Der Grat verschwindet.','Der Grat wird eher stärker.','Es entstehen Einfallstellen.','Nichts ändert sich.'],1,'Mehr Nachdruck drückt die Hälften noch weiter auseinander. Bei Grat werden Schließkraft, Nachdruck und Trennebene geprüft, der Nachdruck eher gesenkt.'],
 ein:[S(13,'Jedes Fehlerbild hat typische Ursachen.',fbBild),
  S(13,'Einfallstellen kommen vom Schwinden dicker Stellen.',VS('Einfallstelle',{h:'Ursache',c:'r',l:['Nachdruck zu klein','Nachdruckzeit zu kurz','Polster zu klein']},{h:'Abhilfe',c:'g',l:['Nachdruck erhöhen','länger nachdrücken','Wand dünner']})),
  S(13,'Brandstellen und unvollständige Füllung haben oft dieselbe Ursache.',FLOW('Luft muss raus',[['💨','Luft','wird verdichtet','y'],['🔥','heiß','Dieseleffekt','r'],['🧹','Abhilfe','Entlüftung reinigen','g']],{y:70,h:128})),
  S(13,'Systematisch vorgehen spart Zeit.',LIST('Vorgehen',[['Fehler genau beschreiben, Foto','1'],['Nur einen Parameter ändern','2'],['Einige Zyklen abwarten','3'],['Ergebnis dokumentieren','4']],{h:40}))],
 skz:[[SKZ(fbBild,'Skizze Fehlerbilder'),'Einfallstelle über einer dicken Stelle, Bindenaht wo zwei Fließfronten zusammentreffen, Grat an der Trennebene, Brandstelle am Ende des Fließwegs, Schlieren durch Feuchte oder Zersetzung.']]};

/* ---------- Instandhaltung: Schnecke mit Rückstromsperre ---------- */
const ihBild=k=>{let s=TI('Plastifiziereinheit');
 s+=RC(60,90,360,60,'#c9d0d8','var(--ink)',4,2)+RC(80,104,300,32,'#7c8796','var(--ink)',3,1.4)+[...Array(11)].map((_,i)=>P(`M${96+i*26} 104l12 32`,'var(--ink)',1.6)).join('');
 s+=P('M60 120H36','var(--ink)',8)+RC(380,108,28,24,MX('a',60),'var(--ink)',3,1.6)+L(394,176,'Rückstromsperre','middle',12,CC('a'),700)+P('M394 160V136','var(--ink)',1.2);
 s+=RC(40,104,20,32,MX('r',40),'none',0,0)+L(48,176,'Polster','middle',12,'var(--red)',700)+P('M48 160V138','var(--ink)',1.2);
 s+=L(230,72,'Zylinder (Verschleiß messen)','middle',12,'var(--mute)',600)+L(230,214,'Schwankt das Polster, ist die Sperre oft verschlissen','middle',13,'var(--ink)',600);return s};
X['Instandhaltung von Maschine & Werkzeug']={
 v:['Das Teilgewicht schwankt seit einigen Tagen, obwohl niemand etwas verstellt hat. Das Massepolster springt zwischen 2 und 9 mm. Wo suchst Du zuerst?',['An der Rückstromsperre','Am Trockner','An der Kühlung','Am Werkzeugauswerfer'],0,'Eine verschlissene Rückstromsperre lässt Schmelze beim Einspritzen zurückfließen. Das Polster und damit die eingespritzte Menge schwanken.'],
 ein:[S(13,'In der Plastifiziereinheit verschleißen vor allem drei Teile.',ihBild),
  S(13,'Werkzeuge wartest Du nach Schusszahl, nicht nach Kalender.',k=>TITLE('Nächste Wartung')+OP(ph(k,.05,.4),FO(240,104,['t = ',{n:'Intervall − Schüsse seit Wartung',d:'Schüsse je Tag'}],18))+OP(ph(k,.45,.85),FO(240,192,['t = ',{n:'80 000 − 50 000',d:'2400 je Tag'},' = 12,5 Tage'],18))),
  S(13,'Die Werkzeugwartung folgt einer Liste.',LIST('Werkzeugwartung',[['Reinigen, Entlüftung freilegen','1'],['Auswerfer und Führungen schmieren','2'],['Kühlkanäle spülen','3'],['Werkzeugkarte ausfüllen','4']],{h:40})),
  S(13,'Auch die Hydraulik braucht Pflege.',CARDS('Hydraulik',[['🛢️','Öl','nach Analyse wechseln','y'],['🧽','Filter','Differenzdruck','b'],['💧','Leckagen','Brand, Rutschen','r']]))],
 skz:[[SKZ(ihBild,'Skizze Plastifiziereinheit'),'Die Schnecke fördert und schmilzt das Granulat. Die Rückstromsperre an der Spitze verhindert beim Einspritzen den Rückfluss. Davor liegt das Massepolster.']]};

/* ---------- Extrusion: Rohrlinie ---------- */
const exS=(n,v)=>{const md=n*2,mm=md/(v*60),A=mm/950*1e6,D=50,d=Math.sqrt(Math.max(0,D*D-4*A/Math.PI)),s=(D-d)/2;return{md,mm,A,s}};
const exBild=(n,v,r)=>{let s=TI('Rohrextrusion');
 s+=P('M60 52H92L84 72H68Z','var(--ink)',2,'',MX('y',50))+RC(40,72,180,30,'#c9d0d8','var(--ink)',4,2);
 [['Einzug',40,60,'b'],['Kompression',100,60,'y'],['Ausstoß',160,60,'r']].forEach(([t,x,w,c])=>s+=RC(x+2,76,w-4,22,MX(c,40),'none',2,0)+L(x+w/2,118,t,'middle',10.5,'var(--mute)',600));
 s+=RC(220,78,18,18,'#7c8796','var(--ink)',2,1.4)+L(229,66,'Düse','middle',11,'var(--mute)',600);
 s+=RC(250,70,86,34,MX('b',22),'var(--ink)',4,1.6)+L(293,64,'Vakuumtank','middle',11,'var(--mute)',600)+RC(360,70,52,34,'#9ca3af','var(--ink)',4,1.6)+L(386,64,'Abzug','middle',11,'var(--mute)',600);
 s+=`<path d="M238 87H470" stroke="${MX('m',70)}" stroke-width="12"/><path d="M238 87H470" stroke="var(--ink)" stroke-width="2" stroke-dasharray="6 12"><animate attributeName="stroke-dashoffset" from="18" to="0" dur="${F(Math.max(.3,3/v))}s" repeatCount="indefinite"/></path>`;
 /* Rohrquerschnitt, Wand maßstäblich vergrößert */
 const cx=110,cy=196,R=56,ri=R*(1-2*r.s/50),ok=r.s>=4.6&&r.s<=5.2;
 s+=`<circle cx="${cx}" cy="${cy}" r="${R}" fill="${MX(ok?'g':'r',38)}" stroke="var(--ink)" stroke-width="2"/><circle cx="${cx}" cy="${cy}" r="${F(Math.max(2,ri))}" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>`;
 s+=L(cx+R+10,cy-18,'Ø 50 mm','start',12,'var(--mute)',600)+L(cx+R+10,cy+2,'Wand '+nz(r.s,2)+' mm','start',14,ok?'var(--ok)':'var(--red)',800)+L(cx+R+10,cy+20,'Soll 4,6 bis 5,2 mm','start',11.5,'var(--mute)',600);
 s+=L(470,196,nz(r.md,0)+' kg/h','end',14,'var(--ink)',800)+L(470,214,'Durchsatz','end',11,'var(--mute)',600)+L(470,240,nz(v,1)+' m/min','end',14,'var(--ink)',800)+L(470,258,'Abzug','end',11,'var(--mute)',600);return s};
X['Extrusion & Blasformen']={
 v:['Ein Rohr ist zu dickwandig. Du lässt die Schneckendrehzahl gleich. Was tust Du am Abzug?',['Schneller laufen lassen','Langsamer laufen lassen','Abschalten','Nichts, der Abzug hat keinen Einfluss'],0,'Gleicher Durchsatz auf mehr Meter verteilt: Das Rohr wird leichter und dünnwandiger.'],
 ein:[S(14,'Eine Extrusionslinie läuft ohne Takt, Meter für Meter.',k=>{const n=90,v=4.5;return exBild(n,v,exS(n,v))}),
  S(13,'Durchsatz und Abzug bestimmen das Metergewicht.',k=>TITLE('Metergewicht')+OP(ph(k,.05,.4),FO(240,104,["m' = ",{n:'ṁ',d:'v_A'}],24))+OP(ph(k,.45,.85),FO(240,190,["m' = ",{n:'180 kg/h',d:'270 m/h'},' = 0,667 kg/m'],18))),
  S(13,'Aus dem Metergewicht folgt die Wanddicke.',k=>TITLE('Querschnitt')+OP(ph(k,.05,.4),FO(240,104,['A = ',{n:"m'",d:'ρ'}],24))+OP(ph(k,.45,.85),FO(240,190,['A = ',{n:'π',d:'4'},' · (D² − d²)'],20))),
  S(13,'Hohlkörper entstehen durch Blasformen.',VS('Zwei Verfahren',{h:'Extrusionsblasen',c:'b',l:['Schlauch aus der Düse','Werkzeug schließt','Kanister, Tanks']},{h:'Streckblasen',c:'y',l:['gespritzter Vorformling','erwärmen, recken','PET-Flaschen']}))],
 skz:[[SKZ(k=>exBild(90,4.5,exS(90,4.5)),'Skizze Rohrextrusion'),'Granulat kommt in den Einzug, wird in der Kompressionszone geschmolzen und in der Ausstoßzone gleichmäßig gefördert. Das Rohr wird im Vakuumtank kalibriert und vom Abzug gezogen. Unten der Rohrquerschnitt.']],
 sim:{t:'Rohr Ø 50 mm in Toleranz fahren',fix:'PE 100, Beispielwerte: Durchsatz 2 kg/h je 1/min Schneckendrehzahl, Dichte 950 kg/m³, Außendurchmesser 50 mm. Wanddicke soll 4,6 bis 5,2 mm betragen. Höchstdrehzahl wegen Verschleiß: 90 1/min.',
  c:[{k:'n',l:'Schneckendrehzahl',u:'1/min',min:20,max:120,st:5,v:60},{k:'v',l:'Abzugsgeschwindigkeit',u:'m/min',min:1,max:10,st:.5,v:4}],
  calc:v=>exS(v.n,v.v),
  rows:(v,r)=>[['Durchsatz',nz(r.md,0)+' kg/h',v.n<=90?'':'r'],['Metergewicht',nz(r.mm*1000,0)+' g/m'],['Wanddicke',nz(r.s,2)+' mm',r.s>=4.6&&r.s<=5.2?'g':'r']],
  svg:(v,r)=>exBild(v.n,v.v,r),
  auf:{z:'Wand 4,6 bis 5,2 mm, mindestens 4 m/min, höchstens 90 1/min.',t:'Die Linie soll möglichst viel Rohr liefern: mindestens 4 m/min. Die Schnecke darf höchstens mit 90 1/min laufen. Halte die Wanddicke in der Toleranz.',h:'Tipp: Drehzahl auf 90 1/min, dann den Abzug so lange erhöhen, bis die Wand gerade noch dick genug ist.',ok:(v,r)=>v.n<=90&&v.v>=4&&r.s>=4.6&&r.s<=5.2}}};

/* ---------- Bearbeiten & Fügen: Heizelement-Stumpfschweißen ---------- */
const hsBild=k=>{let s=TI('Heizelement-Stumpfschweißen');
 const st=[['Angleichen','Enden ans Heizelement'],['Anwärmen','mit kleinem Druck'],['Umstellen','Heizelement heraus'],['Fügen, abkühlen','unter Fügedruck']];
 st.forEach(([t,u],i)=>{const y=52+i*52,g=i==2?14:i==3?0:6;s+=RC(40,y,120,26,MX('y',40),'var(--ink)',3,1.4)+RC(170+g+(i<2?14:0),y,120,26,MX('y',40),'var(--ink)',3,1.4);
  if(i<2)s+=RC(160,y-6,24,38,MX('r',60),'var(--ink)',3,1.4);if(i==3)s+=P(`M160 ${y-2}q5 15 0 30`,'var(--ink)',1.6)+P(`M170 ${y-2}q-5 15 0 30`,'var(--ink)',1.6);
  s+=L(318,y+12,(i+1)+'. '+t,'start',13,'var(--ink)',700)+L(318,y+28,u,'start',11.5,'var(--mute)',500)});return s};
X['Bearbeiten & Fügen von Kunststoffen']={
 v:['Ein Monteur will ein Rohr aus PE-HD an ein Formstück aus PP schweißen, „ist doch beides Kunststoff“. Was sagst Du?',['Geht, wenn die Temperatur hoch genug ist.','Geht nicht, die Werkstoffe sind nicht schweißbar miteinander.','Geht nur mit Ultraschall.','Geht, wenn man länger drückt.'],1,'Geschweißt werden nur gleiche oder verträgliche Thermoplaste. PE und PP mischen sich in der Naht nicht.'],
 ein:[S(13,'Kunststoffe lassen sich auf viele Arten verbinden.',CARDS('Fügeverfahren',[['🔥','Schweißen','nur Thermoplaste','r'],['🧴','Kleben','mit Vorbehandlung','y'],['🔩','Schrauben','passendes Kernloch','b'],['🪝','Schnappen','Schnapphaken','g']],{cols:2})),
  S(14,'Rohre werden stumpf geschweißt, in vier Schritten.',hsBild),
  S(13,'Die Fügekraft folgt aus Fügedruck und Ringfläche.',k=>TITLE('Fügekraft')+OP(ph(k,.05,.4),FO(240,104,['F = p · A'],24))+OP(ph(k,.45,.85),FO(240,190,['F = 0,15 N/mm² · 3112 mm² = 467 N'],18))),
  S(13,'Beim Spanen ist Wärme der Feind.',LIST('Spanen von Kunststoffen',[['Scharfe Werkzeuge','1'],['Kleiner Vorschub, hohe Schnittgeschwindigkeit','2'],['Mit Luft kühlen','3']]))],
 skz:[[SKZ(hsBild,'Skizze Stumpfschweißen'),'Die Rohrenden werden am Heizelement angewärmt, das Heizelement wird entfernt, die Enden werden zusammengedrückt und kühlen unter Druck ab. Es entsteht ein Wulst.']]};

/* ---------- Kautschuk: Vulkameterkurve ---------- */
const vkZ=(T,th)=>{const f=Math.pow(2,(160-T)/10),ts=2*f,t90=ts+6*f,kk=Math.log(10)/(t90-ts),g=th<=ts?0:1-Math.exp(-kk*(th-ts));return{ts,t90,g,n:60/(th+1),kk}};
const vkBild=(T,th,r)=>{const c=CHT({X0:66,X1:300,Y0:220,Y1:50,xm:20,ym:1.1,xt:[0,5,10,15,20],yt:[]});let s=c.s+L(66,36,'Drehmoment','start',12,'var(--mute)',600)+L(304,258,'Zeit in min','end',12,'var(--mute)',600);
 const M=t=>.12+.88*(t<=r.ts?0:1-Math.exp(-r.kk*(t-r.ts)));let d='';for(let t=0;t<=20.01;t+=.25)d+=(d?'L':'M')+F(c.px(t))+' '+F(c.py(M(t)));s+=P(d,CC('a'),3.2);
 s+=`<path d="M${F(c.px(r.ts))} 50V220" stroke="var(--amber)" stroke-dasharray="4 3"/>`+L(c.px(r.ts)+3,62,'Start','start',11,'var(--amber)',700);
 if(r.t90<=20)s+=`<path d="M${F(c.px(r.t90))} 50V220" stroke="var(--ok)" stroke-dasharray="4 3"/>`+L(c.px(r.t90)+3,214,'90 %','start',11,'var(--ok)',700);
 s+=`<path d="M${F(c.px(Math.min(20,th)))} 46V220" stroke="var(--red)" stroke-width="2"/>`+DOT(c.px(Math.min(20,th)),c.py(M(th)),'var(--red)',6)+L(c.px(Math.min(20,th))+6,44,'Heizzeit','start',12,'var(--red)',700);
 /* rechts: Heizpresse und Dichtring */
 const ok=r.g>=.9,sc=r.ts<1.2;s+=RC(340,60,120,24,'#9ca3af','var(--ink)',3,1.6)+RC(340,124,120,24,'#9ca3af','var(--ink)',3,1.6)+[350,380,410,440].map(x=>P(`M${x} 66v12M${x} 130v12`,'var(--red)',2)).join('');
 s+=`<ellipse cx="400" cy="104" rx="46" ry="14" fill="${sc?'#78716c':MX(ok?'g':'y',55)}" stroke="var(--ink)" stroke-width="1.6"/><ellipse cx="400" cy="104" rx="26" ry="7" fill="var(--card)" stroke="var(--ink)" stroke-width="1.4"/>`;
 s+=L(400,178,nz(T,0)+' °C','middle',16,'var(--ink)',800)+L(400,200,sc?'zu früh vernetzt':ok?'ausvulkanisiert':'untervulkanisiert','middle',13,sc?'var(--red)':ok?'var(--ok)':'var(--amber)',800)+L(400,220,'Vernetzung '+nz(r.g*100,0)+' %','middle',12,'var(--mute)',600);return s};
X['Kautschuk: Mischung & Vulkanisation']={
 v:['Eine Dichtung braucht bei 160 °C 8 Minuten Heizzeit. Um schneller zu werden, wird die Presse auf 180 °C gestellt. Welche Heizzeit ist als Richtwert zu erwarten?',['etwa 6 Minuten','etwa 4 Minuten','etwa 2 Minuten','weiter 8 Minuten'],2,'Je 10 K höher halbiert sich die Zeit etwa: 8 min → 4 min → 2 min. Aber Vorsicht: Auch die Anvulkanisation kommt dann früher.'],
 ein:[S(13,'Eine Mischung hat viele Bestandteile.',CARDS('Kautschukmischung',[['🌳','Kautschuk','NR, EPDM, NBR','g'],['⚫','Füllstoff','Ruß, Kieselsäure','m'],['🧪','Vernetzer','Schwefel, Peroxid','y'],['🛡️','Schutz','gegen Alterung','b']],{cols:2})),
  S(14,'Das Vulkameter zeigt, wie die Vernetzung mit der Zeit wächst.',k=>vkBild(160,2+10*ph(k,.1,.9),vkZ(160,2+10*ph(k,.1,.9)))),
  S(13,'Wärmer geht schneller, aber die Mischung vernetzt auch früher.',VS('Heiztemperatur',{h:'höher',c:'r',l:['kürzere Heizzeit','früher anvulkanisiert','Gefahr: Fließfehler']},{h:'niedriger',c:'b',l:['längere Heizzeit','mehr Zeit zum Füllen','weniger Teile je Stunde']})),
  S(13,'Richtwert für die Heizzeit bei anderer Temperatur.',k=>TITLE('Je 10 K halbe Zeit')+OP(ph(k,.05,.4),TX(240,112,'10 K wärmer: etwa halbe Heizzeit',440,'ein3','middle'))+OP(ph(k,.45,.85),TX(240,172,'160 °C: 8 min',440,'ein2','middle')+TX(240,204,'170 °C: etwa 4 min',440,'ein2','middle')))],
 skz:[[SKZ(k=>vkBild(160,10,vkZ(160,10)),'Skizze Vulkameterkurve'),'Erst bleibt das Drehmoment niedrig: Die Mischung fließt noch. Ab t_s steigt es, weil Brücken entstehen. Bei t_90 sind 90 % der Vernetzung erreicht.']],
 sim:{t:'Heizzeit einer Dichtung festlegen',fix:'Beispielmischung: bei 160 °C Anvulkanisation nach 2 min, 90 % Vernetzung nach 8 min, je 10 K wärmer halbe Zeit. Das Werkzeug ist nach 1,2 min gefüllt. Je Heizung 1 min für Einlegen und Entnehmen.',
  c:[{k:'T',l:'Heiztemperatur',u:'°C',min:150,max:190,st:5,v:160},{k:'th',l:'Heizzeit',u:'min',min:1,max:20,st:.5,v:6}],
  calc:v=>vkZ(v.T,v.th),
  rows:(v,r)=>[['Anvulkanisation t_s',nz(r.ts,1)+' min',r.ts>=1.2?'g':'r'],['t_90',nz(r.t90,1)+' min'],['Vernetzung',nz(r.g*100,0)+' %',r.g>=.9?'g':'r'],['Heizungen je Stunde',nz(r.n,1),r.n>=7?'g':'r']],
  svg:(v,r)=>vkBild(v.T,v.th,r),
  auf:{z:'90 % vernetzt, t_s mindestens 1,2 min, mindestens 7 Heizungen je Stunde.',t:'Die Dichtung soll schneller laufen: mindestens 7 Heizungen je Stunde. Sie muss zu 90 % vernetzt sein, und die Mischung darf nicht vernetzen, bevor das Werkzeug voll ist (t_s mindestens 1,2 min).',h:'Tipp: Bei 160 °C reicht es nicht. Erhöhe die Temperatur in kleinen Schritten und passe die Heizzeit an t_90 an.',ok:(v,r)=>r.g>=.9&&r.ts>=1.2&&r.n>=7}}};

/* ---------- Faserverbund: Lagenaufbau ---------- */
const fvBild=k=>{let s=TI('Laminat aus mehreren Lagen');
 [[0,'0°','b'],[1,'90°','y'],[2,'±45°','g'],[3,'0°','b']].forEach(([i,t,c])=>{const y=58+i*40;s+=RC(80,y,250,30,MX(c,22),'var(--ink)',3,1.4);
  for(let j=0;j<12;j++){const x=90+j*20;s+=t==='0°'?P(`M${x} ${y+15}h16`,CC(c),2.4):t==='90°'?P(`M${x+8} ${y+4}v22`,CC(c),2.4):P(`M${x} ${y+26}l16 -22`,CC(c),2.2)}
  s+=L(344,y+20,t,'start',14,'var(--ink)',800)});
 s+=L(240,236,'Jede Lage trägt Last in ihrer Faserrichtung','middle',13,'var(--ink)',600)+L(240,254,'Das Harz verbindet die Lagen','middle',12,'var(--mute)',500);return s};
X['Faserverbund: Laminieren & Aushärten']={
 v:['Ein Laminat soll eine Kraft in Längsrichtung tragen. Alle Fasern liegen quer. Was erwartest Du?',['Es trägt fast genauso gut.','Es trägt deutlich schlechter, weil quer fast nur das Harz trägt.','Es trägt besser, weil quer mehr Fasern passen.','Die Faserrichtung ist egal.'],1,'Faserverbunde sind nur in Faserrichtung fest. Quer dazu trägt im Wesentlichen das weiche Harz.'],
 ein:[S(13,'Fasern tragen, Harz verbindet.',VS('Zwei Partner',{h:'Fasern',c:'y',l:['Glas, Kohlenstoff, Aramid','sehr fest und steif','nur in Faserrichtung']},{h:'Matrix',c:'b',l:['UP, VE, EP','hält die Fasern','leitet Kräfte weiter']})),
  S(14,'Jede Lage wird in die Richtung gelegt, in der Kraft wirkt.',fvBild),
  S(13,'Den Elastizitätsmodul in Faserrichtung schätzt die Mischungsregel ab.',k=>TITLE('Mischungsregel')+OP(ph(k,.05,.4),FO(240,104,['E = φ · E_F + (1 − φ) · E_M'],20))+OP(ph(k,.45,.85),FO(240,190,['E = 0,5 · 73 GPa + 0,5 · 3,2 GPa = 38,1 GPa'],17))),
  S(13,'Harz und Härter genau mischen.',LIST('Beim Anmischen',[['Genau abwiegen, nicht schätzen','1'],['Topfzeit beachten','2'],['Kleine Mengen anmischen','3'],['Handschuhe, Absaugung','4']],{h:40}))],
 skz:[[SKZ(fvBild,'Skizze Lagenaufbau'),'Vier Lagen mit unterschiedlicher Faserrichtung. Lagen in 0° tragen Längskräfte, 90° Querkräfte, ±45° Schub und Verdrehung.']]};

Object.assign(ERK,{
'Temperieren & Kühlen von Werkzeugen':['Das Werkzeug ist ein Wärmetauscher. Wie viel Wärme hinein kommt, legen Schussgewicht und Zykluszeit fest, wie gleichmäßig sie abgeführt wird, der Durchfluss.','Bei Maßproblemen und Verzug schaust Du zuerst auf Werkzeugtemperaturen beider Hälften, Durchfluss und Zustand der Kanäle, bevor Du an den Spritzparametern drehst.',['Nur die Temperatur am Gerät abgelesen, nicht im Werkzeug gemessen.','Durchfluss in l/min nicht in kg/s umgerechnet.','Vor- und Rücklauf vertauscht angeschlossen.']],
'Trocknen, Fördern & Dosieren':['Feuchte zerstört die Schmelze. Entscheidend ist, dass jedes Korn die volle Trockenzeit erreicht, nicht nur die richtige Temperatur.','Bei einem neuen Teil oder höherem Durchsatz prüfst Du die Trichtergröße neu.',['Durchsatz aus dem Teilgewicht ohne Anguss gerechnet.','Schüttdichte mit Dichte des Kunststoffs verwechselt.','Trockenzeit nach Wochenende nicht verlängert, obwohl der Trockner aus war.']],
'Kunststoffe: Aufbau & Einteilung':['Die Art der Vernetzung entscheidet: lose Ketten schmelzen, Netze nicht. Amorph oder teilkristallin entscheidet über Transparenz, Schwindung und Erweichen.','Beim Werkstoffwechsel, beim Recycling und bei Reklamationen ordnest Du den Kunststoff zuerst ein: Thermoplast oder vernetzt, amorph oder teilkristallin?',['Elastomere für schmelzbar gehalten.','Glasübergangstemperatur und Schmelztemperatur verwechselt.','Duroplaste ins Thermoplast-Recycling gegeben.']],
'Kennwerte & Werkstoffprüfung':['Ein Kennwert gilt nur unter seinen Prüfbedingungen. Temperatur, Zeit und Feuchte verändern Kunststoffe stark.','Im Wareneingang prüfst Du MFR und Feuchte, bei Reklamationen Härte und Festigkeit am Teil.',['MFR mit Viskosität verwechselt: hoher MFR heißt dünnflüssig.','Werte „trocken“ und „konditioniert“ vertauscht.','Kurzzeitwerte für Dauerlast verwendet.']],
'Rheologie: Fließverhalten der Schmelze':['Kunststoffschmelzen werden bei schneller Bewegung dünnflüssiger. Temperatur und Geschwindigkeit wirken beide auf die Viskosität.','Wenn ein Teil nicht voll wird, prüfst Du Geschwindigkeit, Temperaturen und Entlüftung, bevor Du den Druck erhöhst.',['Langsamer eingespritzt, um besser zu füllen.','Massetemperatur bis zur Zersetzung erhöht.','MFR als Maß für das Fließen im dünnen Spalt genommen.']],
'Additive, Füllstoffe & Einfärben':['Jeder Zusatz verändert neben der Eigenschaft auch die Verarbeitung: Fasern bringen Verschleiß und Verzug, Farbe bringt Dosierfragen.','Bei Farbabweichungen prüfst Du zuerst Dosierung und Mahlgut, bei Verzug glasfaserverstärkter Teile die Fließrichtung.',['Prozent Masterbatch auf die Masse des Masterbatch statt auf den Durchsatz bezogen.','Verschleiß durch Glasfasern bei der Wartungsplanung vergessen.','Mahlgut mit kürzeren Fasern wie Neuware behandelt.']],
'Spritzgießen: Zyklus & Einstellung':['Der Zyklus besteht aus festen Phasen. Die Kühlzeit hängt am Quadrat der Wanddicke und bestimmt meist die Zykluszeit.','Beim Einrichten gehst Du immer in derselben Reihenfolge vor und hältst alles im Einstellblatt fest.',['Kühlzeit linear statt quadratisch mit der Wanddicke hochgerechnet.','Ohne Massepolster gefahren.','Mehrere Parameter gleichzeitig verändert.']],
'Werkzeug- & Formenbau':['Die Schließkraft muss den Innendruck auf der projizierten Fläche aller Kavitäten halten. Das Werkzeug ist um die Schwindung größer als das Teil.','Bei einem neuen Werkzeug prüfst Du Schließkraft, Plattenmaße, Auswerferhub und Anschlüsse der Maschine, bevor es eingeplant wird.',['Projizierte Fläche mit der Oberfläche verwechselt.','bar nicht in N/cm² umgerechnet.','Fläche des Angusses vergessen.']],
'Fehlerbilder am Formteil':['Jedes Fehlerbild hat wenige typische Ursachen. Wer sie kennt, sucht gezielt.','Du legst für jedes Werkzeug eine Fehlerliste mit Grenzmustern an. So entscheidet jede Schicht gleich.',['Gegen Grat den Nachdruck erhöht.','Schlieren an der Maschine gesucht statt am Trockner.','Ohne Dokumentation an mehreren Parametern gedreht.']],
'Instandhaltung von Maschine & Werkzeug':['Verschleiß an Schnecke, Rückstromsperre und Werkzeug zeigt sich zuerst in schwankenden Prozesswerten.','Du planst Werkzeugwartung nach Schusszahl und nutzt die Werkzeugkarte, damit Wissen nicht an einer Person hängt.',['Werkzeug nach Kalender statt nach Schusszahl gewartet.','Schwankendes Polster mit falschem Dosierweg erklärt.','Werkzeug feucht eingelagert.']],
'Extrusion & Blasformen':['Die Extrusion ist ein Fließprozess. Bei gleichem Durchsatz regelt der Abzug Metergewicht und Wanddicke.','Beim Anfahren einer Linie stellst Du zuerst Temperaturen und Drehzahl ein und regelst dann die Wanddicke über den Abzug.',['Abzug in m/min und Durchsatz in kg/h ohne Umrechnung geteilt.','Dichte in g/cm³ statt kg/m³ eingesetzt.','Wanddicke nur an einer Stelle des Umfangs gemessen.']],
'Bearbeiten & Fügen von Kunststoffen':['Kunststoffe leiten Wärme schlecht. Beim Spanen muss Wärme vermieden, beim Schweißen gezielt eingebracht werden.','Für Rohrschweißungen gilt die Schweißtabelle des Herstellers und eine Qualifikation des Schweißers.',['PE und PP miteinander verschweißt.','PE ohne Vorbehandlung geklebt.','Fügedruck zu früh weggenommen.']],
'Kautschuk: Mischung & Vulkanisation':['Die Vulkanisation braucht Zeit und Temperatur. Höhere Temperatur spart Zeit, verkürzt aber auch die Zeit, in der die Mischung noch fließt.','Bei Problemen am Teil vergleichst Du die Vulkameterkurve der Charge mit der Freigabekurve.',['Anvulkanisation beim Erhöhen der Temperatur übersehen.','phr mit Prozent der Mischung verwechselt.','Dicke Teile mit der Heizzeit dünner Teile gefahren.']],
'Faserverbund: Laminieren & Aushärten':['Fasern tragen in ihrer Richtung, das Harz verbindet. Mischungsverhältnis und Aushärtung entscheiden über die Qualität.','Du legst für jedes Bauteil einen Lagenplan fest und prüfst die Einhaltung beim Laminieren.',['Härter nach Gefühl statt nach Waage zugegeben.','Zu große Menge auf einmal angemischt.','Faserrichtung bei der Festigkeit nicht beachtet.']]});
}
