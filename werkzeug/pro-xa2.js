/* ===== Paket A2: Vermuten, Kurz erklärt, Skizze, Regler für Rüsten (alle Fachrichtungen) und die Zusatzthemen
   in der Organisation von Kunststoff & Kautschuk, Mechatronik und Logistik ===== */
{const TI=XTI,MX=XMX,P=XP,FO=XFO;
/* ---------- Rüsten: Wochenbalken und Bestandsverlauf ---------- */
const smBild=(tr,n)=>{const B=4000,nr=B/n,tf=B*.5/60,trw=nr*tr/60,tot=tf+trw,ok=tot<=40;let s=TI('Eine Woche an der Anlage');
 const X0=30,W=400,sc=56;s+=L(X0,58,'Belegte Zeit von 40 h','start',12.5,'var(--mute)',600);
 s+=XSTK(X0,66,W,30,[[tf,'b','Fertigen '+nz(tf,1)+' h'],[trw,'y','Rüsten '+nz(trw,1)+' h']],sc);
 const xl=X0+W*40/sc;s+=P(`M${F(xl)} 58V104`,ok?'var(--ok)':'var(--red)',2.6)+L(xl,118,'40 h','middle',12,ok?'var(--ok)':'var(--red)',800);
 if(!ok)s+=L(xl+22,118,'zu viel: '+nz(tot-40,1)+' h','start',12,'var(--red)',700);
 /* Bestand als Sägezahn */
 const y0=236,y1=150,hm=2000,k=Math.min(nr,40);let d=`M${X0} ${y0}`;for(let i=0;i<k;i++){const xa=X0+W*i/k,fr=Math.min(1,k-i),xb=xa+W/k*fr,yt=y0-(y0-y1)*n/hm;d+=`L${F(xa)} ${F(yt)}L${F(xb)} ${F(yt+(y0-yt)*fr)}`+(fr<1?`L${F(xb)} ${y0}`:'')}
 s+=L(X0,142,'Bestand im Lager (ein Zacken je Los)','start',12.5,'var(--mute)',600)+P(`M${X0} ${y1-4}V${y0}H${X0+W+6}`,'var(--ink)',1.4)+P(d,CC('a'),2.4,'',MX('a',14));
 const ym=y0-(y0-y1)*n/2/hm;s+=P(`M${X0} ${F(ym)}H${X0+W}`,'var(--mute)',1.4,'5 4')+L(X0+W+8,ym+4,'Ø '+nz(n/2,0),'start',12,'var(--mute)',700)+L(X0+W,256,'eine Woche','end',11.5,'var(--mute)',500);return s};
const smSk=k=>{let s=TI('Intern und extern trennen');
 s+=L(30,64,'Vorher: alles bei stehender Anlage','start',13,'var(--ink)',700)+XSTK(30,72,420,30,[[15,'y','holen'],[40,'r','Werkzeug wechseln'],[20,'y','einstellen'],[15,'y','aufräumen']],90);
 s+=L(30,142,'Nachher: nur der Wechsel braucht Stillstand','start',13,'var(--ink)',700)+XSTK(30,150,420,30,[[15,'g','holen'],[25,'r','wechseln'],[8,'y',''],[15,'g','aufräumen']],90);
 s+=L(30,206,'rot und gelb: Anlage steht','start',12,'var(--red)',700)+L(30,224,'grün: läuft parallel zum alten oder neuen Auftrag','start',12,'var(--ok)',700)+L(450,206,'Stillstand 90 min → 33 min','end',13,'var(--ink)',800);return s};
X['Rüsten verkürzen (SMED)']={
 v:['Ein Rüstvorgang dauert 90 min. Davon entfallen 30 min auf das Holen und Wegbringen von Werkzeug und Material. Was bringt es, das vor dem Stillstand zu erledigen?',['Nichts, die Arbeit bleibt gleich','Die Anlage steht 30 min kürzer','Der Rüster spart 30 min Arbeitszeit','Die Losgröße muss steigen'],1,'Die Arbeit bleibt, aber sie fällt nicht mehr in den Stillstand. Für die Anlage zählt nur die Zeit, in der sie steht.'],
 ein:[S(13,'Rüstzeit zählt vom letzten Gutteil des alten bis zum ersten Gutteil des neuen Auftrags.',FLOW('Was alles zur Rüstzeit gehört',[['🛑','letztes','Gutteil'],['🔧','wechseln','einstellen'],['🧪','anfahren','prüfen'],['✅','erstes','Gutteil']])),
  S(14,'Der wichtigste Schritt: trennen, was bei laufender Anlage geht und was nicht.',smSk),
  S(13,'Dann wird das, was bleibt, einfacher gemacht.',LIST('Den Wechsel vereinfachen',[['Schnellspanner statt Schrauben','1'],['Einheitliche Anschlüsse und Höhen','2'],['Voreinstellen außerhalb der Maschine','3'],['Zu zweit mit festen Rollen','4']])),
  S(13,'Kurze Rüstzeiten machen kleine Lose bezahlbar.',VS('Was kurze Rüstzeiten bringen',{h:'für die Anlage',c:'b',l:['mehr Laufzeit','weniger Anfahrausschuss','planbarer Wechsel']},{h:'für den Betrieb',c:'g',l:['kleinere Lose','weniger Bestand','kürzere Lieferzeit']}))],
 skz:[[SKZ(smSk,'Skizze Rüstvorgang vorher und nachher'),'Oben der alte Ablauf, unten der neue: Holen und Aufräumen laufen parallel zur Fertigung, der Wechsel selbst ist vereinfacht.']],
 sim:{t:'Kleine Lose in der 40-Stunden-Woche',fix:'Wochenbedarf 4000 Stück, Fertigungszeit 0,5 min je Stück, Anlage 60 € je Stunde, Kapazität 40 h je Woche.',
  c:[{k:'tr',l:'Rüstzeit',u:'min',min:10,max:120,st:5,v:90},{k:'n',l:'Losgröße',u:'Stück',min:100,max:2000,st:100,v:500}],
  calc:v=>{const nr=4000/v.n,trw=nr*v.tr/60,tot=4000*.5/60+trw;return{nr,trw,tot,kr:v.tr/60*60/v.n,bm:v.n/2}},
  rows:(v,r)=>[['Rüstvorgänge je Woche',nz(r.nr,1)],['Rüsten je Woche',nz(r.trw,1)+' h'],['belegte Zeit',nz(r.tot,1)+' h',r.tot<=40?'g':'r'],['Rüstkosten je Stück',nz(r.kr*100,1)+' ct'],['mittlerer Bestand',nz(r.bm,0)+' Stück',r.bm<=200?'g':'']],
  svg:(v,r)=>smBild(v.tr,v.n),
  auf:{z:'Mittlerer Bestand höchstens 200 Stück, Woche passt in 40 h.',t:'Das Lager ist zu voll. Der mittlere Bestand soll auf höchstens 200 Stück sinken, also müssen die Lose kleiner werden. Die Woche muss trotzdem in 40 h passen. Finde eine Rüstzeit, mit der das geht.',h:'Tipp: Stell zuerst die Losgröße ein. Dann siehst Du, wie viel Rüstzeit die Woche noch verträgt.',ok:(v,r)=>r.bm<=200&&r.tot<=40}}};
Object.assign(ERK,{'Rüsten verkürzen (SMED)':['Rüsten ist Stillstand. Wer Vorbereitung und Nacharbeit aus dem Stillstand herausnimmt und den Wechsel selbst vereinfacht, gewinnt Laufzeit und kann kleinere Lose fahren.','Du nimmst einen Rüstvorgang mit der Mannschaft auf, am besten als Video. Die besten Ideen kommen von den Rüstern selbst. Das Ergebnis hältst Du als Standard fest und misst es regelmäßig nach.',['Rüstzeit nur bis zum Spannen des Werkzeugs messen','Sofort in Technik investieren, ohne den Ablauf anzusehen','Gewonnene Zeit nicht nutzen: gleiche Lose, gleiche Bestände','Den neuen Ablauf nicht üben und nicht aufschreiben']]});

if(FR==='ku'){
/* ---------- Kalkulation je Gutteil ---------- */
const mgCalc=v=>{const mat=.05*(2.4*(1-v.x/100)+.4*v.x/100),ma=48*v.tz/3600/4,en=.05*.6*.22,k=mat+ma+en,g=k/(1-v.a/100);return{mat,ma,en,k,g,zu:g-k}};
const mgBild=(v,r)=>{let s=TI('Kosten je Gutteil');const X0=30,W=420,mx=30;
 s+=XSTK(X0,70,W,40,[[r.mat*100,'b','Material'],[r.ma*100,'y','Maschine'],[r.en*100,'g',''],[r.zu*100,'r','Ausschuss']],mx);
 const xz=X0+W*20/mx,ok=r.g<=.2;s+=P(`M${F(xz)} 60V120`,ok?'var(--ok)':'var(--red)',2.6)+L(xz,136,'Ziel 20 ct','middle',12.5,ok?'var(--ok)':'var(--red)',800);
 [0,10,30].forEach(t=>s+=L(X0+W*t/mx,136,t+' ct','middle',11.5,'var(--mute)',500));
 s+=L(X0,172,'Material '+nz(r.mat*100,1)+' ct','start',13,CC('b'),700)+L(X0+150,172,'Maschine '+nz(r.ma*100,1)+' ct','start',13,'var(--ink)',700)+L(X0+300,172,'Energie '+nz(r.en*100,1)+' ct','start',13,CC('g'),700);
 s+=L(X0,196,'Zuschlag für Ausschuss '+nz(r.zu*100,1)+' ct','start',13,CC('r'),700)+L(450,196,'Gutteil: '+nz(r.g*100,1)+' ct','end',15,ok?'var(--ok)':'var(--red)',800);
 const zu=v.x>25;s+=RC(X0,214,W,34,MX(zu?'r':'g',14),CC(zu?'r':'g'),8,1.5)+L(240,236,zu?'Mahlgutanteil über der Freigabe von 25 %':'Mahlgut '+v.x+' %: innerhalb der Freigabe (höchstens 25 %)','middle',13,'var(--ink)',700);return s};
const mgSk=k=>{let s=TI('Der Kreislauf des Angusses');
 s+=BOX(30,60,110,50,'Neuware','b',14,'2,40 €/kg')+BOX(185,60,110,50,'Maschine','y',14,'Teile + Anguss')+BOX(340,60,110,50,'Gutteile','g',14,'zum Kunden');
 s+=AW(142,85,183,85,'var(--ink)',2.4)+AW(297,85,338,85,'var(--ink)',2.4);
 s+=BOX(185,160,110,50,'Mühle','m',14,'Anguss, Ausschuss')+AW(240,112,240,158,'var(--ink)',2.4)+P('M183 185H85V114','var(--ink)',2.4)+AW(85,130,85,112,'var(--ink)',2.4)+L(78,150,'Mahlgut','end',12.5,'var(--ink)',700)+L(100,228,'zurück in den Trichter','middle',12,'var(--mute)',600);
 s+=L(240,246,'Mahlgut spart Neuware, aber nur bis zum freigegebenen Anteil.','middle',13,'var(--mute)',500);return s};
X['Zykluszeit, Ausschuss & Mahlgut kalkulieren']={
 v:['Ein Teil kostet 24 ct, davon 12 ct Material und 10 ct Maschine. Was senkt die Kosten stärker: 10 % weniger Material oder 10 % kürzere Zykluszeit?',['Das Material, um 1,2 ct','Die Zykluszeit, um 1,0 ct','Beides gleich','Keines von beiden'],0,'Jeder Block wirkt mit seinem Anteil. Hier ist das Material der größere Block. In der Praxis lohnt der Blick auf beide.'],
 ein:[S(13,'Die Kosten eines Spritzgussteils bestehen vor allem aus drei Blöcken.',CARDS('Drei Blöcke je Teil',[['🧴','Material','Gramm mal Preis','b'],['⏱️','Maschine','Stundensatz mal Zeit','y'],['⚡','Energie','kWh je kg','g']])),
  S(14,'Angüsse und Ausschuss gehen durch die Mühle zurück in den Prozess.',mgSk),
  S(13,'Die Maschinenkosten je Teil folgen direkt aus der Zykluszeit.',k=>TITLE('Maschinenkosten je Teil')+OP(ph(k,.05,.4),FO(240,104,[{n:'Stundensatz · Zykluszeit',d:'3600 s/h · Kavitäten'}],19))+OP(ph(k,.45,.85),FO(240,190,[{n:'48 €/h · 30 s',d:'3600 s/h · 4'},' = 0,10 €'],19))),
  S(13,'Ausschuss verteuert jedes Gutteil.',BARS('Kosten je Gutteil',[['2 % Ausschuss',23.1,'23,1 ct','g'],['5 % Ausschuss',23.9,'23,9 ct','y'],['10 % Ausschuss',25.2,'25,2 ct','r']],{lx:150,h:46,y0:70,note:'bei 22,7 ct Herstellkosten je Teil'}))],
 skz:[[SKZ(mgSk,'Skizze Mahlgutkreislauf'),'Neuware und Mahlgut werden im festen Verhältnis gemischt. Die Mühle steht meist direkt an der Maschine.']],
 sim:{t:'Was kostet ein Gutteil?',fix:'Teil 50 g, 4-fach-Werkzeug, Neuware 2,40 €/kg, Mahlgut 0,40 €/kg, Maschine 48 €/h, Energie 0,6 kWh/kg bei 0,22 €/kWh. Freigegeben sind höchstens 25 % Mahlgut.',
  c:[{k:'x',l:'Mahlgutanteil',u:'%',min:0,max:50,st:5,v:0},{k:'tz',l:'Zykluszeit',u:'s',min:20,max:40,st:1,v:30},{k:'a',l:'Ausschussquote',u:'%',min:1,max:10,st:1,v:5}],
  calc:mgCalc,
  rows:(v,r)=>[['Material je Teil',nz(r.mat*100,1)+' ct'],['Maschine je Teil',nz(r.ma*100,1)+' ct'],['Energie je Teil',nz(r.en*100,2)+' ct'],['Kosten je Gutteil',nz(r.g*100,1)+' ct',r.g<=.2?'g':'r'],['Mahlgut',v.x<=25?'freigegeben':'über der Freigabe',v.x<=25?'g':'r']],
  svg:(v,r)=>mgBild(v,r),
  auf:{z:'Gutteil für höchstens 20 ct, Mahlgut innerhalb der Freigabe.',t:'Der Kunde zahlt nur, wenn das Gutteil höchstens 20 ct kostet. Der Mahlgutanteil darf 25 % nicht übersteigen. Finde eine Kombination aus Mahlgut, Zykluszeit und Ausschussquote, die das schafft.',h:'Tipp: Ein Hebel allein reicht nicht. Probiere, wie weit Du mit Mahlgut kommst, und kürze dann die Zykluszeit.',ok:(v,r)=>r.g<=.2&&v.x<=25}}};
const bsSk=k=>{let s=TI('Wo es gefährlich wird');
 s+=BOX(24,52,134,74,'Düse, Ausspritzen','r',13,'Schmelze, Dämpfe')+BOX(173,52,134,74,'Mühle, Fördern','y',13,'Staub, Aufladung')+BOX(322,52,134,74,'Lager','b',13,'hohe Brandlast');
 s+=BOX(24,150,134,74,'Absaugen','g',13,'an der Quelle')+BOX(173,150,134,74,'Saugen, erden','g',13,'nicht abblasen')+BOX(322,150,134,74,'Mengen begrenzen','g',13,'Wege frei halten');
 [91,240,389].forEach(x=>s+=AW(x,128,x,148,'var(--ink)',2.2));s+=L(240,250,'oben die Gefahr, darunter die wichtigste Maßnahme','middle',12.5,'var(--mute)',500);return s};
X['Brandschutz, Dämpfe & Stäube']={
 v:['Unter einer Mühle liegt feiner Kunststoffstaub. Ein Kollege will ihn mit Druckluft wegblasen. Was sagst Du?',['Gute Idee, das geht am schnellsten','Nein, aufgewirbelter Staub kann sich entzünden, bitte saugen','Egal, Kunststoff brennt nicht','Erst nass machen, dann blasen'],1,'Feiner Staub in der Luft kann ein explosionsfähiges Gemisch bilden. Deshalb wird gesaugt, nicht geblasen.'],
 ein:[S(14,'Drei Bereiche brauchen besondere Aufmerksamkeit.',bsSk),
  S(13,'Überhitzte Schmelze zersetzt sich. Manche Kunststoffe setzen dabei reizende Gase frei.',VS('Zersetzung vermeiden',{h:'Ursachen',c:'r',l:['Temperatur zu hoch','zu lange Verweilzeit','Stillstand mit heißem Zylinder']},{h:'Maßnahmen',c:'g',l:['Temperatur nach Datenblatt','leer fahren, absenken','Absaugung an der Düse']})),
  S(13,'Beim Ausspritzen schützt nur vollständige Ausrüstung.',LIST('Am heißen Zylinder',[['Gesichtsschutz und Handschuhe','1'],['Lange, schwer entflammbare Kleidung','2'],['Nie in die Düse schauen','3'],['Schutzabdeckung geschlossen halten','4']])),
  S(13,'Heißarbeiten sind eine häufige Brandursache.',FLOW('Schweißen, Trennen, Löten',[['📝','Erlaubnis','schein'],['🧹','Umgebung','räumen'],['🧯','Löscher','bereit'],['👀','Brand','wache']]))],
 skz:[[SKZ(bsSk,'Skizze Gefahren und Maßnahmen'),'Jede Gefahr hat eine erste, technische Antwort. Persönliche Schutzausrüstung kommt dazu, ersetzt sie aber nicht.']]};
Object.assign(ERK,{'Zykluszeit, Ausschuss & Mahlgut kalkulieren':['Material, Maschine und Energie bestimmen die Kosten eines Teils. Zykluszeit, Ausschuss und Mahlgut sind die Hebel, die Du als Meister selbst in der Hand hast.','Du kennst die Kosten je Teil Deiner wichtigsten Artikel und siehst täglich Zykluszeit und Ausschuss. Abweichungen sprichst Du in der Schichtbesprechung an, bevor sie im Monatsbericht stehen.',['Ausschuss für kostenlos halten, weil er gemahlen wird','Mahlgutanteil über die Freigabe hinaus erhöhen','Zykluszeit kürzen, ohne die Maße nachzumessen','Energie je Teil mit der Anschlussleistung rechnen']],
'Brandschutz, Dämpfe & Stäube':['Kunststoffe bringen eine hohe Brandlast in den Betrieb. Überhitzte Schmelze setzt Gase frei, feiner Staub kann sich entzünden. Maßnahmen setzen zuerst an der Quelle an.','Du achtest auf Ordnung, freie Wege und begrenzte Mengen, lässt Heißarbeiten nur mit Erlaubnis zu und unterweist Deine Leute im Ausspritzen und im Verhalten bei Stillstand.',['Staub mit Druckluft abblasen','Maschine mit heißem Zylinder und empfindlichem Material stehen lassen','Ohne Gesichtsschutz ausspritzen','Paletten und Kartons in Fluchtwegen abstellen']]});
}
if(FR==='mt'){
/* ---------- Instandhaltungsstrategie: Kosten über dem Tauschintervall ---------- */
const ihC=(T,cm)=>{const Fa=1-Math.exp(-Math.pow(T/8000,3)),d=cm?.9:0,c=600*(1-Fa)+Fa*((1-d)*4200+d*600),Lz=T*(1-.25*Fa);return{Fa,k:c/Lz*1000+(cm?60:0),ru:Fa*(1-d)}};
const ihBild=(T,cm)=>{const c=CHT({X0:64,X1:452,Y0:216,Y1:54,xm:12000,ym:700,xt:[2000,4000,6000,8000,10000,12000],yt:[200,400,600],xl:'Tausch nach Betriebsstunden',yl:'Kosten in € je 1000 h'});let s=c.s;
 [0,1].forEach(m=>{let d='';for(let t=1000;t<=12000;t+=250)d+=(d?'L':'M')+F(c.px(t))+' '+F(c.py(ihC(t,m).k));s+=P(d,m?CC('g'):CC('r'),m==cm?3.4:1.6,m==cm?'':'5 4')});
 const r=ihC(T,cm);s+=DOT(c.px(T),c.py(r.k),cm?'var(--ok)':'var(--red)',7);
 s+=L(250,70,'ohne Überwachung','start',12,CC('r'),700)+L(250,86,'mit Überwachung','start',12,CC('g'),700)+P('M226 66h18',CC('r'),2.4)+P('M226 82h18',CC('g'),2.4);
 s+=L(452,24,'zu früh ist teuer, zu spät auch','end',13,'var(--ink)',700);return s};
const ihSk=k=>{let s=TI('Vier Strategien');
 const q=[['ausfallbedingt','fahren bis zum Ausfall','r'],['vorbeugend','festes Intervall','y'],['zustandsabhängig','messen, dann handeln','g'],['vorausschauend','Prognose aus Daten','b']];
 q.forEach((a,i)=>{const x=24+(i%2)*222,y=52+Math.floor(i/2)*88;s+=BOX(x,y,210,68,a[0],a[2],15,a[1])});
 s+=L(240,250,'Je teurer der Ausfall, desto weiter rechts unten.','middle',13,'var(--mute)',500);return s};
X['Instandhaltungsstrategien & Ersatzteile']={
 v:['Ein Lager wird vorbeugend alle 2000 Stunden getauscht, obwohl es im Mittel 8000 Stunden hält. Ist das sicher und sinnvoll?',['Ja, je früher desto besser','Sicher ja, aber teuer: Der größte Teil der Lebensdauer wird verschenkt','Nein, es ist gefährlich','Das spielt keine Rolle'],1,'Sehr frühes Tauschen vermeidet Ausfälle, kostet aber Teile und Arbeit. Das Kostenminimum liegt später.'],
 ein:[S(14,'Es gibt vier Strategien. Welche passt, hängt vom Bauteil ab.',ihSk),
  S(13,'Drei Fragen führen zur Strategie.',LIST('Strategie wählen',[['Wie teuer oder gefährlich ist der Ausfall?','1'],['Kündigt sich der Ausfall an?','2'],['Lässt sich der Zustand messen?','3']])),
  S(14,'Zwischen zu früh und zu spät liegt ein Kostenminimum.',k=>ihBild(1500+9000*ph(k,.1,.9),0)),
  S(13,'Bei Ersatzteilen entscheidet die Kritikalität.',VS('Ins Lager oder nicht?',{h:'lagern',c:'g',l:['legt die Anlage still','lange Lieferzeit','kein Ersatzweg']},{h:'nicht lagern',c:'m',l:['Ausfall ohne Folgen','schnell lieferbar','altert im Regal']}))],
 skz:[[SKZ(ihSk,'Skizze Instandhaltungsstrategien'),'Von oben links nach unten rechts steigt der Aufwand für die Überwachung. Dafür sinkt das Risiko ungeplanter Stillstände.']],
 sim:{t:'Wann das Lager tauschen?',fix:'Beispielmodell: Lager hält im Mittel rund 7000 h. Geplanter Tausch 600 €, ungeplanter Ausfall 4200 € (mit Stillstand). Zustandsüberwachung kostet 60 € je 1000 h und erkennt 9 von 10 Ausfällen rechtzeitig.',
  c:[{k:'T',l:'Tausch spätestens nach',u:'h',min:1000,max:12000,st:500,v:12000},{k:'cm',l:'Zustandsüberwachung',u:'',opts:[0,1],v:0,lab:['ohne','mit']}],
  calc:v=>ihC(v.T,v.cm),
  rows:(v,r)=>[['Kosten je 1000 h',nz(r.k,0)+' €',r.k<=200?'g':''],['Lager fällt vorher aus',nz(r.Fa*100,1)+' %'],['davon ungeplant',nz(r.ru*100,1)+' %',r.ru<=.05?'g':'r']],
  svg:(v,r)=>ihBild(v.T,v.cm),
  auf:{z:'Höchstens 200 € je 1000 h und höchstens 5 % ungeplante Ausfälle.',t:'Die Betriebsleitung gibt vor: Die Kosten für dieses Lager sollen höchstens 200 € je 1000 Betriebsstunden betragen, und höchstens 5 % der Lager dürfen ungeplant ausfallen. Finde Strategie und Intervall.',h:'Tipp: Suche zuerst ohne Überwachung das Minimum der Kurve. Schalte dann die Überwachung ein und vergleiche.',ok:(v,r)=>r.k<=200&&r.ru<=.05}}};
Object.assign(ERK,{'Instandhaltungsstrategien & Ersatzteile':['Jedes Bauteil bekommt die Strategie, die zu den Folgen seines Ausfalls passt. Zustandsüberwachung erlaubt lange Nutzung bei kleinem Risiko. Ersatzteile werden nach Kritikalität und Lieferzeit gelagert.','Du teilst die Bauteile Deiner Anlagen in Klassen ein, legst Strategie und Ersatzteilbestand fest und überprüfst beides mit den Störungsdaten. Die Bediener bindest Du über tägliche Pflege ein.',['Alle Teile gleich behandeln','Nur nach Kalender tauschen, ohne den Zustand anzusehen','Ersatzteile nach Preis statt nach Kritikalität lagern','Stillstandskosten in der Rechnung vergessen']]});
}
/*MT*/
/*LO*/
}
