
/* ===== Pakete C3 und C4 (Chemie): Vermuten, Kurz erklärt, Skizze, Regler mit Auftrag ===== */
if(FR==='ch'){const TI=t=>L(240,28,t,'middle',16,'var(--ink)',700),P=(d,c='var(--ink)',w=2.4,da='',fl='none')=>`<path d="${d}" stroke="${c}" stroke-width="${w}" fill="${fl}" stroke-linejoin="round"${da?` stroke-dasharray="${da}"`:''}/>`,MX=(c,p)=>`color-mix(in srgb,${CC(c)} ${p}%,var(--card))`,
 MS=(x,y,t,ln)=>`<circle cx="${x}" cy="${y}" r="19" fill="var(--card)" stroke="var(--ink)" stroke-width="1.8"/>`+(ln?P(`M${x-19} ${y}H${x+19}`,'var(--ink)',1.4):'')+L(x,y+(ln?-3:5),t,'middle',12.5,'var(--ink)',700);

/* ---------- Stöchiometrie & Stoffbilanz ---------- */
const mixBild=(m1,w1,m2,wM)=>{const ok=Math.abs(wM-20)<=0.5,c=ok?'var(--ok)':'var(--red)';let s=TI('Verdünnen im Ansatzbehälter');const TK=(x,t,t2,cc,fr)=>RC(x,52,110,84,'var(--card)','var(--ink)',10,1.8)+RC(x+2,52+82*(1-fr),106,82*fr,MX(cc,40),'none',8,0)+L(x+55,84,t,'middle',14,'var(--ink)',700)+L(x+55,104,t2,'middle',13,'var(--ink)',600);
 s+=TK(30,'Lauge '+nt(w1)+' %',nz(m1,0)+' kg','a',Math.min(1,m1/1000))+TK(340,'Wasser',nz(m2,0)+' kg','b',Math.min(1,m2/1000))+AW(142,96,180,116,'var(--ink)',2.6)+AW(338,96,300,116,'var(--ink)',2.6);
 s+=RC(182,84,116,84,MX('g',16),'var(--ink)',10,1.8)+L(240,118,nz(m1+m2,0)+' kg','middle',14,'var(--ink)',700)+L(240,142,nz(wM,1)+' %','middle',18,c,800);
 s+=HB(40,206,400,18,wM/50,c,'Gehalt der Mischung','')+MK(40+400*20/50,206,18,'Ziel 20 %');return s};
X['Stöchiometrie & Stoffbilanz']={
 v:['Für einen Ansatz brauchst Du 100 kg reines NaOH. Im Lager steht 50-prozentige Natronlauge. Wie viel füllst Du ab?',['50 kg','100 kg','150 kg','200 kg'],3,'In 200 kg 50-prozentiger Lauge stecken genau 100 kg reines NaOH. Der Gehalt gehört in jede Ansatzrechnung.'],
 ein:[S(13,'Die Reaktionsgleichung zählt Teilchen. Über die molare Masse wird daraus ein Massenverhältnis.',k=>TITLE('Von der Gleichung zur Masse')+OP(ph(k,.05,.35),TX(240,92,'HCl + NaOH → NaCl + H₂O',440,'ein3','middle'))+OP(ph(k,.4,.65),TX(240,142,'36,5 kg + 40 kg → 58,5 kg + 18 kg',440,'ein3','middle'))+OP(ph(k,.7,.95),TX(240,200,'Links und rechts je 76,5 kg',440,'ein2','middle'))),
  S(12,'Die Stoffmenge verbindet Masse und molare Masse.',k=>TITLE('Stoffmenge')+OP(ph(k,.05,.4),FORM(240,104,['n = ',{n:'m',d:'M'}],'middle',undefined,24))+OP(ph(k,.45,.85),FORM(240,190,['n = ',{n:'200 kg',d:'40 kg/kmol'},' = 5 kmol'],'middle',undefined,18))),
  S(13,'Die Massenbilanz gilt für jeden Apparat: Was hineingeht, kommt wieder heraus.',FLOW('Massenbilanz',[['📥','Eintrag','Einsatzstoffe','b'],['⚗️','Apparat','Bestand ändert sich','y'],['📤','Austrag','Produkt, Abfall, Abluft','g']])),
  S(13,'Beim Verdünnen bleibt die Masse des gelösten Stoffs gleich. Daraus folgt die Mischungsgleichung.',k=>mixBild(400,50,600,20))],
 skz:[[SKZ(k=>mixBild(400,50,600,20),'Skizze Verdünnen'),'400 kg Lauge mit 50 % enthalten 200 kg NaOH. Mit 600 kg Wasser werden daraus 1000 kg mit 20 %.']],
 sim:{t:'Lauge auf 20 % einstellen',fix:'Ziel: 990 bis 1010 kg Natronlauge mit 19,5 bis 20,5 % für den nächsten Ansatz.',
  c:[{k:'m1',l:'konzentrierte Lauge',u:'kg',min:100,max:1000,st:10,v:500},{k:'w1',l:'Gehalt der Lauge',u:'%',opts:[32,50],v:1},{k:'m2',l:'Wasser',u:'kg',min:0,max:1000,st:10,v:300}],
  calc:v=>{const mg=v.m1+v.m2,wM=v.m1*v.w1/mg;return{mg,wM,mr:v.m1*v.w1/100}},
  rows:(v,r)=>[['reines NaOH',nz(r.mr,0)+' kg'],['Gesamtmasse',nz(r.mg,0)+' kg',r.mg>=990&&r.mg<=1010?'g':'r'],['Gehalt der Mischung',nz(r.wM,1)+' %',Math.abs(r.wM-20)<=0.5?'g':'r']],
  svg:(v,r)=>mixBild(v.m1,v.w1,v.m2,r.wM),
  auf:{z:'Rund 1000 kg Lauge mit 20 % ansetzen.',t:'Für den nächsten Ansatz brauchst Du 990 bis 1010 kg Natronlauge mit 19,5 bis 20,5 %. Stelle die Mengen an konzentrierter Lauge und Wasser passend ein.',h:'Tipp: Rechne zuerst, wie viel reines NaOH in 1000 kg mit 20 % steckt. Daraus folgt die Menge an konzentrierter Lauge, der Rest ist Wasser.',ok:(v,r)=>r.mg>=990&&r.mg<=1010&&Math.abs(r.wM-20)<=0.5}}};

/* ---------- Reaktionstechnik ---------- */
const rtCalc=(T,tau)=>{const k=0.4*Math.pow(2,(T-80)/10),U=1-Math.exp(-k*tau),S=Math.max(0,0.99-0.003*(T-60)-0.01*tau);return{U:U*100,S:S*100,A:U*S*100}};
const uaBild=(r,ti)=>{let s=TI(ti||'Umsatz, Selektivität, Ausbeute');
 s+=HB(60,74,360,22,r.U/100,CC('b'),'Umsatz',nz(r.U,0)+' %')+HB(60,136,360,22,r.S/100,CC('y'),'Selektivität',nz(r.S,0)+' %')+HB(60,198,360,22,r.A/100,r.A>=80?'var(--ok)':'var(--red)','Ausbeute',nz(r.A,0)+' %')+MK(60+360*.8,198,22,'Ziel 80 %');return s};
X['Reaktionstechnik: Umsatz & Ausbeute']={
 v:['Du erhöhst die Reaktionstemperatur um 10 K, um schneller fertig zu werden. Womit musst Du rechnen?',['Nur die gewünschte Reaktion wird schneller.','Auch Nebenreaktionen werden schneller, die Selektivität kann sinken.','Die Reaktion wird langsamer.','Der Katalysator wird überflüssig.'],1,'Temperatur beschleunigt alle Reaktionen, oft die unerwünschten sogar stärker. Schneller heißt deshalb nicht automatisch mehr Produkt.'],
 ein:[S(13,'Drei Kennzahlen beschreiben, wie gut eine Reaktion gelaufen ist.',CARDS('Drei Kennzahlen',[['🔄','Umsatz','Wie viel hat reagiert?','b'],['🎯','Selektivität','Wie viel davon zum Produkt?','y'],['📦','Ausbeute','Umsatz mal Selektivität','g']])),
  S(13,'Die Ausbeute ist das Produkt aus beiden. Ein hoher Umsatz nützt wenig, wenn viel Nebenprodukt entsteht.',k=>uaBild({U:90,S:80,A:72},'90 % mal 80 % ergibt 72 %')),
  S(14,'Exotherme Reaktionen können durchgehen: Mehr Temperatur macht die Reaktion schneller, und die liefert noch mehr Wärme.',CYC('Durchgehen einer Reaktion',[['Kühlung fällt aus','oder Rührer steht'],['Temperatur steigt',''],['Reaktion wird schneller',''],['Mehr Wärme entsteht','']],{w:150})),
  S(13,'Dagegen schützt Du die Anlage mit mehreren Maßnahmen.',LIST('Schutz vor dem Durchgehen',[['Einsatzstoff langsam dosieren','1'],['Dosierung an Temperatur und Rührer verriegeln','2'],['Notkühlung und Reaktionsstopper','3'],['Druckentlastung','4']]))],
 skz:[[SKZ(k=>uaBild({U:90,S:80,A:72},'Beispiel: U = 90 %, S = 80 %'),'Skizze Umsatz, Selektivität, Ausbeute'),'Von 100 kmol Einsatzstoff reagieren 90 kmol. Davon werden 80 % zum Produkt, also 72 kmol.']],
 sim:{t:'Charge optimieren',fix:'Vereinfachtes Modell: Die Reaktion wird je 10 K doppelt so schnell. Mit Temperatur und Zeit nehmen die Nebenreaktionen zu. Über 110 °C zersetzt sich das Produkt.',
  c:[{k:'T',l:'Reaktionstemperatur',u:'°C',min:60,max:120,st:5,v:80},{k:'tau',l:'Reaktionszeit',u:'h',min:0.5,max:4,st:0.5,v:2}],
  calc:v=>rtCalc(v.T,v.tau),
  rows:(v,r)=>[['Umsatz',nz(r.U,0)+' %'],['Selektivität',nz(r.S,0)+' %'],['Ausbeute',nz(r.A,0)+' %',r.A>=80?'g':'r'],['Temperatur',v.T+' °C',v.T<=110?'g':'r']],
  svg:(v,r)=>uaBild(r,v.T+' °C, '+nt(v.tau)+' h'),
  auf:{z:'Mindestens 80 % Ausbeute bei höchstens 110 °C.',t:'Die Charge soll mindestens 80 % Ausbeute bringen. Die Temperatur darf 110 °C nicht übersteigen, weil sich das Produkt sonst zersetzt.',h:'Tipp: Kalt und kurz reagiert zu wenig. Heiß und lang entsteht zu viel Nebenprodukt. Dazwischen liegt das Optimum.',ok:(v,r)=>r.A>=80&&v.T<=110}}};

/* ---------- Prozesskontrolle & Analytik ---------- */
const spBild=k=>{const c=CHT({xm:9,ym:10,xt:[1,2,3,4,5,6,7,8],yt:[2,4,6,8],xl:'Charge',yl:'pH-Wert',Y1:66});let s=c.s+TI('Analysenwerte gegen die Spezifikation');const d=[6.9,7.1,7.0,7.3,7.2,7.6,7.9,8.4];
 s+=`<rect x="${c.X0}" y="${F(c.py(8))}" width="${c.X1-c.X0}" height="${F(c.py(6)-c.py(8))}" fill="color-mix(in srgb,var(--ok) 12%,transparent)"/>`+LN(c,0,8,9,8,'var(--red)',1.8,'6 4')+LN(c,0,6,9,6,'var(--red)',1.8,'6 4')+L(c.X0+8,c.py(8)-6,'obere Grenze','start',12.5,'var(--red)',700)+L(c.X0+8,c.py(6)+16,'untere Grenze','start',12.5,'var(--red)',700);
 s+=PL(d.map((y,i)=>[c.px(i+1),c.py(y)]),'var(--flow)',2.2);d.forEach((y,i)=>s+=DOT(c.px(i+1),c.py(y),y>8?'var(--red)':'var(--flow)',5));s+=L(c.px(8)-8,c.py(8.4)-10,'gesperrt','end',13,'var(--red)',700);return s};
X['Prozesskontrolle & Analytik']={
 v:['Die pH-Werte der letzten sechs Chargen steigen langsam an, liegen aber alle noch in der Spezifikation. Was tust Du?',['Nichts, alle Werte sind in Ordnung.','Der Ursache jetzt nachgehen, bevor eine Charge außerhalb liegt.','Die Spezifikation erweitern.','Seltener messen.'],1,'Ein Trend ist ein Frühwarnzeichen: Sonde verschmutzt, Dosierung driftet, Rohstoff verändert. Wer früh reagiert, vermeidet die gesperrte Charge.'],
 ein:[S(13,'Geprüft wird an drei Stellen. Je früher ein Fehler auffällt, desto billiger ist er.',FLOW('Wo wird geprüft?',[['📥','Wareneingang','Rohstoffe','b'],['⚗️','Im Prozess','pH, Dichte, Umsatz','y'],['📦','Endprodukt','Freigabe','g']])),
  S(13,'Eine Probe ist nur so gut wie die Probenahme.',LIST('Probenahme',[['Festgelegte Stelle, vorher spülen','1'],['Sauberes, geeignetes Gefäß','2'],['Sofort beschriften','3','Produkt, Charge, Zeit, Name'],['Rückstellmuster aufbewahren','4']])),
  S(14,'Werte außerhalb der Spezifikation führen zur Sperrung. Ein Trend warnt schon vorher.',spBild),
  S(13,'Bei einer Abweichung gehst Du in fester Reihenfolge vor.',LIST('Charge außerhalb der Spezifikation',[['Charge sperren und kennzeichnen','1'],['Messung und Probe überprüfen','2'],['Ursache suchen','3'],['Nacharbeit, Verschnitt oder Entsorgung','4','entscheidet die Qualitätsstelle']]))],
 skz:[[SKZ(spBild,'Skizze Trend der Analysenwerte'),'Die Werte wandern seit Charge 4 nach oben. Charge 8 liegt über der oberen Grenze und wird gesperrt. Der Trend war schon vorher zu sehen.']]};

/* ---------- Stoffe bewerten & Explosionsschutz ---------- */
const exBild=k=>{let s=TI('Explosion: Drei Dinge müssen zusammenkommen');
 s+=P('M240 52L372 220H108Z','var(--ink)',2.4,'',MX('r',12))+L(240,170,'Explosion','middle',16,CC('r'),800)+L(240,190,'nur wenn alle drei da sind','middle',12.5,'var(--mute)',500);
 s+=L(132,128,'Brennbarer Stoff','end',14,'var(--ink)',700)+L(132,146,'Dampf, Gas, Staub','end',12.5,'var(--mute)',500)+L(348,128,'Sauerstoff','start',14,'var(--ink)',700)+L(348,146,'aus der Luft','start',12.5,'var(--mute)',500)+L(240,242,'Zündquelle','middle',14,'var(--ink)',700)+L(240,260,'Funke, heiße Oberfläche, Aufladung','middle',12.5,'var(--mute)',500);return s};
X['Stoffe bewerten & Explosionsschutz']={
 v:['Ein Lösemittel hat einen Flammpunkt von 12 °C. Was bedeutet das für das Umfüllen bei Raumtemperatur?',['Es ist ungefährlich, weil es erst bei 12 °C brennt.','Über der Flüssigkeit kann ein zündfähiges Gemisch stehen.','Es entzündet sich von selbst.','Es kann nicht verdampfen.'],1,'Die Raumtemperatur liegt über dem Flammpunkt. Es fehlt nur noch eine Zündquelle, zum Beispiel ein Funke durch Aufladung.'],
 ein:[S(13,'Die wichtigsten Kenngrößen stehen im Sicherheitsdatenblatt.',CARDS('Kenngrößen',[['🌡️','Flammpunkt','ab hier zündfähige Dämpfe','y'],['🔥','Zündtemperatur','entzündet sich an heißer Fläche','r'],['📊','Explosionsgrenzen','UEG bis OEG zündfähig','a'],['💨','Dampfdruck','wie stark verdampft es?','b']])),
  S(14,'Eine Explosion braucht drei Dinge gleichzeitig. Nimmst Du eines weg, kann nichts passieren.',exBild),
  S(13,'Daraus ergibt sich die Rangfolge der Schutzmaßnahmen.',STAIRS('Rangfolge',[['Atmosphäre vermeiden','inertisieren, lüften'],['Zündquellen vermeiden','Ex-Geräte, erden'],['Folgen begrenzen','Druckentlastung']])),
  S(13,'Zonen sagen, wie oft mit explosionsfähiger Atmosphäre zu rechnen ist.',BARS('Zonen für Gase und Dämpfe',[['Zone 0',3,'ständig oder häufig','r'],['Zone 1',2,'gelegentlich','y'],['Zone 2',1,'selten und kurz','g']],{lx:110,max:3.3}))],
 skz:[[SKZ(exBild,'Skizze Explosionsdreieck'),'Inertisieren nimmt den Sauerstoff weg, eine dichte Anlage den brennbaren Stoff, Erdung und geeignete Geräte die Zündquelle.']]};

/* ---------- R&I-Fließbilder ---------- */
const riBild=k=>{let s=L(466,28,'R&I-Ausschnitt','end',16,'var(--ink)',700);
 s+=RC(190,70,100,136,MX('b',10),'var(--ink)',20,2)+L(240,196,'B101','middle',13,'var(--ink)',700)+RC(192,130,96,66,MX('b',26),'none',14,0);
 s+=P('M40 96H190','var(--ink)',3)+P('M96 84L120 108V84L96 108Z','var(--ink)',1.8,'',MX('y',50))+P('M108 84V62','var(--ink)',1.6)+P('M96 62H120','var(--ink)',1.6)+L(40,88,'Zulauf','start',12.5,'var(--mute)',600);
 s+=MS(108,40,'FIC',1)+P('M127 40H330V96H290','var(--ink)',1.4,'4 3')+MS(350,120,'LIC',1)+P('M290 150H331','var(--ink)',1.4,'4 3')+P('M350 101V62H127','var(--ink)',1.4,'4 3');
 s+=MS(350,186,'TI',0)+P('M290 186H331','var(--ink)',1.4,'4 3')+P('M240 206V236H440','var(--ink)',3)+L(440,228,'Ablauf','end',12.5,'var(--mute)',600);
 s+=L(376,116,'Füllstand,','start',12.5,'var(--mute)',500)+L(376,132,'Leitwarte','start',12.5,'var(--mute)',500)+L(376,184,'Temperatur,','start',12.5,'var(--mute)',500)+L(376,200,'vor Ort','start',12.5,'var(--mute)',500);return s};
X['R&I-Fließbilder lesen']={
 v:['Im R&I-Fließbild steht an einem Behälter die Messstelle „LAH“. Was sagt sie?',['Der Füllstand wird geregelt.','Bei hohem Füllstand gibt es einen Alarm.','Die Temperatur wird aufgezeichnet.','Der Druck schaltet eine Pumpe.'],1,'L steht für Füllstand, A für Alarm, H für den oberen Grenzwert.'],
 ein:[S(13,'Vom groben Überblick bis zum Detail gibt es drei Fließbilder.',STAIRS('Fließbilder',[['Grundfließbild','Schritte als Kästen'],['Verfahrensfließbild','Apparate, Stoffströme'],['R&I-Fließbild','jede Armatur, jede Messstelle']])),
  S(13,'Der erste Buchstabe einer Messstelle nennt die Messgröße.',CARDS('Erster Buchstabe',[['🌡️','T','Temperatur','r'],['🧭','P','Druck','b'],['🌊','F','Durchfluss','g'],['📏','L','Füllstand','y'],['🧪','Q','Qualität, z. B. pH','a']],{cols:3})),
  S(13,'Die folgenden Buchstaben sagen, was mit dem Messwert geschieht.',CARDS('Folgebuchstaben',[['👁️','I','Anzeige','b'],['📈','R','Aufzeichnung','g'],['🎛️','C','Regelung','y'],['🔔','A','Alarm','r'],['🔀','S','Schaltung','a'],['🛡️','Z','Schutzfunktion','r']],{cols:3})),
  S(14,'So sieht das im Plan aus: Der Füllstandsregler gibt dem Durchflussregler am Zulauf den Sollwert vor.',riBild)],
 skz:[[SKZ(riBild,'Skizze R&I-Ausschnitt'),'Kreise mit Strich werden in der Leitwarte angezeigt, der Kreis ohne Strich (TI) nur vor Ort. Gestrichelte Linien sind Signale.']]};

/* ---------- Messtechnik ---------- */
const hsBild=k=>{let s=TI('Füllstand über den Bodendruck');
 s+=P('M150 50V220H310V50','var(--ink)',2.4)+RC(152,104,156,114,MX('b',30),'none',0,0)+P('M152 104H308',CC('b'),2)+L(230,150,'ρ = 1100 kg/m³','middle',13,'var(--ink)',600);
 s+=P('M330 104V218','var(--ink)',1.6)+P('M324 104H336M324 218H336','var(--ink)',1.6)+L(342,166,'h = 2,5 m','start',14,'var(--ink)',700);
 s+=RC(96,198,54,26,MX('g',30),CC('g'),5,1.6)+L(123,216,'p','middle',14,'var(--ink)',700)+L(90,184,'Drucksensor','middle',12.5,'var(--mute)',600);
 s+=L(240,250,'p = ρ · g · h = 1100 · 9,81 · 2,5 Pa = 270 mbar','middle',14,'var(--ink)',700);return s};
X['Messtechnik: Druck, Temperatur, Durchfluss, Füllstand']={
 v:['Ein Tank wird von Wasser auf ein Produkt mit höherer Dichte umgestellt. Die hydrostatische Füllstandmessung wird nicht angepasst. Was zeigt sie an?',['Den richtigen Füllstand','Einen zu hohen Füllstand','Einen zu niedrigen Füllstand','Gar nichts'],1,'Das dichtere Produkt drückt bei gleicher Höhe stärker auf den Boden. Der Messumformer rechnet aber noch mit der Dichte von Wasser.'],
 ein:[S(13,'Vier Größen werden in fast jeder Anlage gemessen.',CARDS('Die vier Messgrößen',[['🧭','Druck','Über-, Absolut-, Differenzdruck','b'],['🌡️','Temperatur','Pt100, Thermoelement','r'],['🌊','Durchfluss','Blende, MID, Coriolis','g'],['📏','Füllstand','hydrostatisch, Radar','y']])),
  S(14,'Der hydrostatische Füllstand wird aus dem Druck am Boden berechnet. Dazu muss die Dichte stimmen.',hsBild),
  S(13,'Jedes Durchflussmessgerät hat seine Grenzen.',LIST('Durchfluss messen',[['Blende: einfach, aber Druckverlust','Δp'],['Magnetisch-induktiv: nur leitfähige Flüssigkeiten','MID'],['Coriolis: misst Masse und Dichte','ṁ']])),
  S(13,'Ein Messwert ist erst dann etwas wert, wenn er plausibel ist.',LIST('Plausibel?',[['Passt der Füllstand zur dosierten Menge?','?'],['Passen Druck und Temperatur zusammen?','?'],['Widersprechen sich zwei Messungen?','!','dann vor Ort nachsehen']]))],
 skz:[[SKZ(hsBild,'Skizze hydrostatische Füllstandmessung'),'Der Sensor am Boden misst nur den Druck der Flüssigkeitssäule. Bei einem geschlossenen Behälter unter Druck braucht man eine Differenzdruckmessung.']]};

/* ---------- Regelungstechnik im Prozess: Kaskade ---------- */
const kasBild=k=>{let s=TI('Kaskade: Reaktortemperatur über den Mantel regeln');
 s+=BOX(14,70,112,54,'Führungsregler','b',13,'Reaktor: TIC')+AW(126,97,162,97)+L(144,62,'Sollwert','middle',11.5,'var(--mute)',600)+BOX(164,70,100,54,'Folgeregler','g',13,'Mantel: TIC')+AW(264,97,298,97)+BOX(300,70,56,54,'Ventil','y',13)+AW(356,97,390,97)+BOX(392,70,70,54,'Mantel','y',13);
 s+=P('M412 124V150H214V126','var(--ok)',1.8,'5 4')+L(313,144,'Manteltemperatur (schnell)','middle',12,'var(--ok)',600);
 s+=BOX(190,180,100,44,'Reaktor','r',14)+P('M446 124V202','var(--ink)',1.8)+AW(446,202,292,202,'var(--ink)',1.8)+L(368,196,'heizt, kühlt','middle',11.5,'var(--mute)',600)+P('M190 202H69V126','var(--flow)',1.8,'5 4')+L(62,242,'Reaktortemperatur (träge)','start',12,'var(--flow)',600);
 s+=L(240,262,'Der innere Kreis fängt Störungen im Heizkreis ab.','middle',13,'var(--mute)',500);return s};
X['Regelungstechnik im Prozess']={
 v:['Der Dampfdruck im Netz schwankt. Die Reaktortemperatur wird direkt über das Dampfventil geregelt und pendelt deshalb. Was hilft?',['Den Regler auf Hand stellen','Eine Kaskade mit einem schnellen Regler für die Manteltemperatur','Den Sollwert höher stellen','Das Dampfventil größer wählen'],1,'Der schnelle innere Regler bemerkt die Störung im Mantel und gleicht sie aus, bevor sich die träge Reaktortemperatur ändert.'],
 ein:[S(13,'Jeder Regelkreis hat dieselben vier Bausteine.',FLOW('Regelkreis',[['📏','Messen','Istwert x','b'],['⚖️','Vergleichen','e = w − x','y'],['🎛️','Regeln','Stellgröße y','g'],['🚰','Stellen','Ventil','a']])),
  S(13,'Nicht alle Regelungen sind gleich schnell. Das bestimmt, wie Du sie einstellst.',BARS('Wie träge ist die Regelung?',[['Durchfluss',1,'Sekunden','g'],['Druck',2,'Sekunden bis Minuten','g'],['Füllstand',3,'Minuten','y'],['Temperatur',5,'viele Minuten, Totzeit','r']],{lx:120,max:5.5})),
  S(14,'Bei der Kaskade gibt ein langsamer Regler einem schnellen den Sollwert vor.',kasBild),
  S(13,'Für besondere Aufgaben gibt es weitere Schaltungen.',CARDS('Weitere Regelungen',[['⚖️','Verhältnis','zwei Ströme im festen Verhältnis','b'],['↔️','Split-Range','ein Regler, zwei Ventile','y'],['🔁','Kaskade','Führungs- und Folgeregler','g']]))],
 skz:[[SKZ(kasBild,'Skizze Kaskadenregelung'),'Der Führungsregler misst die Reaktortemperatur und gibt dem Folgeregler den Sollwert für die Manteltemperatur vor. Der Folgeregler stellt das Ventil.']]};

/* ---------- Prozessleitsystem & Schutzeinrichtungen ---------- */
const seBild=k=>{const E=[['Rückhaltung','Auffangwanne, Löschwasserbecken','a',420],['Mechanischer Schutz','Sicherheitsventil, Berstscheibe','r',350],['PLT-Schutzeinrichtung','schaltet selbsttätig ab','y',280],['Alarm','Bediener greift ein','b',210],['Regelung','hält den Prozess im Soll','g',140]];let s=TI('Schutzebenen einer Anlage');
 E.forEach((e,i)=>{const y=42+i*42;s+=RC(240-e[3]/2,y,e[3],38,MX(e[2],20),CC(e[2]),8,1.6)+L(240,y+16,e[0],'middle',13.5,'var(--ink)',700)+L(240,y+31,e[1],'middle',11.5,'var(--mute)',500)});
 s+=L(240,264,'von innen nach außen: Jede Ebene fängt auf, was die vorige nicht hält.','middle',12.5,'var(--mute)',500);return s};
X['Prozessleitsystem & Schutzeinrichtungen']={
 v:['Eine Überfüllsicherung löst beim Befüllen immer wieder aus und stoppt die Pumpe. Die Schicht möchte sie überbrücken. Was ist richtig?',['Überbrücken, sie stört ja nur.','Ursache klären. Überbrückt wird nur mit schriftlicher Freigabe und Ersatzmaßnahme.','Den Grenzwert heimlich höher stellen.','Die Pumpe von Hand weiterlaufen lassen.'],1,'Eine Schutzeinrichtung, die oft auslöst, zeigt ein Problem im Prozess oder an der Messung. Wer sie überbrückt, nimmt die letzte automatische Sicherung weg.'],
 ein:[S(13,'Das Prozessleitsystem hat fünf Aufgaben.',CARDS('Aufgaben des Leitsystems',[['👁️','Beobachten','Fließbilder, Trends','b'],['🎛️','Bedienen','Sollwerte, Rezepte','g'],['🔁','Regeln, Steuern','automatisch','y'],['🔔','Melden','Alarme','r'],['🗄️','Archivieren','Chargenprotokoll','a']],{cols:3})),
  S(14,'Mehrere Ebenen schützen die Anlage. Jede fängt auf, was die vorige nicht gehalten hat.',seBild),
  S(13,'Alarme helfen nur, wenn sie selten und eindeutig sind.',LIST('Gute Alarme',[['Jeder Alarm hat eine festgelegte Handlung','ok'],['Wichtiges ist von Unwichtigem getrennt','ok'],['Daueralarme werden beseitigt','ok'],['Alarmflut nach Störungen wird ausgewertet','ok']])),
  S(13,'Für das Überbrücken einer Schutzeinrichtung gelten strenge Regeln.',LIST('Überbrücken nur mit',[['schriftlicher Freigabe','1'],['Befristung','2'],['Ersatzmaßnahme','3','zum Beispiel Posten vor Ort'],['Eintrag im Schichtbuch','4']]))],
 skz:[[SKZ(seBild,'Skizze Schutzebenen'),'Die PLT-Schutzeinrichtung arbeitet unabhängig vom Leitsystem. Sicherheitsventil und Auffangwanne wirken auch ohne Strom.']]};

Object.assign(ERK,{
'Stöchiometrie & Stoffbilanz':['Chemie rechnet in Teilchen, der Betrieb wiegt in Kilogramm. Die molare Masse ist die Brücke dazwischen, die Massenbilanz die Kontrolle.','Du prüfst Ansatzrechnungen auf Plausibilität: Stimmt der Gehalt des Rohstoffs laut Analysenzertifikat? Geht die Bilanz der Charge auf?',['Den Gehalt des technischen Einsatzstoffs nicht berücksichtigt.','Massen statt Stoffmengen ins Verhältnis der Gleichung gesetzt.','Beim Verdünnen die Wassermenge mit der Endmenge verwechselt.','g/mol und kg/kmol mit unterschiedlichen Masseneinheiten gemischt.']],
'Reaktionstechnik: Umsatz & Ausbeute':['Jede Reaktion ist ein Wettlauf zwischen gewünschter Reaktion und Nebenreaktionen. Temperatur, Zeit und Konzentration entscheiden, wer gewinnt.','Weicht die Ausbeute ab, vergleichst Du das Chargenprotokoll mit der Vorschrift: Temperaturverlauf, Dosierzeit, Rührer, Rohstoffqualität.',['Umsatz und Ausbeute gleichgesetzt.','Prozentwerte multipliziert, ohne sie in Dezimalzahlen umzurechnen.','Bei Störungen die Dosierung weiterlaufen lassen.','Dem Katalysator eine höhere Gleichgewichtsausbeute zugeschrieben.']],
'Prozesskontrolle & Analytik':['Die Analyse macht Qualität sichtbar. Sie hilft nur, wenn die Probe stimmt, das Gerät kalibriert ist und jemand auf den Wert reagiert.','Du achtest auf Trends über mehrere Chargen und sorgst dafür, dass gesperrte Ware eindeutig gekennzeichnet und getrennt gelagert ist.',['Probe ohne Spülen der Entnahmestelle gezogen.','Proben nicht sofort beschriftet und später verwechselt.','Einen Wert knapp außerhalb der Grenze durchgehen lassen.','ml und l bei der Titration vermischt.']],
'Stoffe bewerten & Explosionsschutz':['Gefährlich wird ein Stoff durch seine Eigenschaften und durch das, was Du mit ihm tust. Das Sicherheitsdatenblatt liefert die Eigenschaften, die Gefährdungsbeurteilung den Rest.','Vor jedem neuen Stoff und jeder geänderten Fahrweise prüfst Du, ob Zoneneinteilung, Geräte und Erdung noch passen.',['Flammpunkt und Zündtemperatur verwechselt.','Gemische oberhalb der OEG für dauerhaft sicher gehalten, obwohl sie sich beim Verdünnen mit Luft durch den Ex-Bereich bewegen.','Elektrostatische Aufladung als Zündquelle übersehen.','Stäube nicht als explosionsfähig erkannt.']],
'R&I-Fließbilder lesen':['Das R&I-Fließbild zeigt, was womit verbunden ist und was gemessen und geregelt wird. Es zeigt nicht die echte Lage im Raum.','Vor jeder Freigabe, jeder Änderung und jeder Fehlersuche liegt das aktuelle R&I-Fließbild auf dem Tisch. Änderungen werden sofort eingetragen.',['Erstbuchstabe und Folgebuchstaben verwechselt.','Messstellen vor Ort und in der Leitwarte nicht unterschieden.','Die Sicherheitsstellung der Ventile nicht beachtet.','Mit einem veralteten Plan gearbeitet.']],
'Messtechnik: Druck, Temperatur, Durchfluss, Füllstand':['Jedes Messgerät misst eigentlich etwas anderes als die gewünschte Größe: einen Druck, einen Widerstand, eine Spannung. Stimmen die Annahmen nicht, stimmt der Wert nicht.','Unplausible Werte nimmst Du ernst. Du lässt vor Ort nachsehen, bevor Du dem Leitsystem oder dem Bauchgefühl glaubst.',['Überdruck und Absolutdruck verwechselt.','mbar nicht in Pa umgerechnet.','Bei der Blende linear statt mit der Wurzel gerechnet.','Die Dichte nach einem Produktwechsel nicht angepasst.']],
'Regelungstechnik im Prozess':['Ein Regler kann nur ausgleichen, was er über sein Stellglied beeinflussen kann, und nur so schnell, wie die Strecke es zulässt.','Regler, die dauernd auf Hand stehen, schwingende Trends und ständig voll geöffnete Ventile sind für Dich Hinweise auf ein Problem in Auslegung oder Instandhaltung.',['Führungs- und Folgeregler in der Kaskade vertauscht.','Eine schwingende Regelung mit mehr Verstärkung beruhigen wollen.','Beim Stellventil die Wurzel vergessen.','Die Sicherheitsstellung des Ventils nicht bedacht.']],
'Prozessleitsystem & Schutzeinrichtungen':['Die Regelung sorgt für Qualität, die Schutzeinrichtung für Sicherheit. Beide sind absichtlich getrennt, damit ein Fehler nicht beide trifft.','Du lässt Dir Überbrückungen und Daueralarme regelmäßig berichten und sorgst dafür, dass Prüfungen der Schutzeinrichtungen termingerecht laufen.',['Schutzfunktion im normalen Leitsystem statt in unabhängiger Technik verwirklicht.','Alarme quittiert, ohne zu handeln.','Überbrückungen nicht befristet und nicht übergeben.','Wiederkehrende Prüfungen verschoben.']]});
}
