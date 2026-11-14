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
if(FR==='lo'){
/* ---------- Lagerkennzahlen ---------- */
const lkC=v=>{const U=v.JV*1e6/(v.B*1000);return{U,D:360/U,K:v.B*1000*v.z/100}};
const lkB=(v,r)=>{let s=TI('Bestand, Umschlag und Lagerkosten');const ok=r.U>=8,ok2=r.K<=60000;
 /* Regal, gefüllt nach Bestand */
 const n=Math.round(v.B/50);for(let i=0;i<20;i++){const cx=i%5,cy=Math.floor(i/5),x=30+cx*34,y=148-cy*30;s+=RC(x,y,30,24,i<n?MX('b',40):'var(--card)','var(--line)',2,1.2)}
 s+=P('M26 54V176M200 54V176M26 176H200','var(--ink)',2.4)+L(113,196,'Bestand '+nz(v.B,0)+' T€','middle',12.5,'var(--ink)',700);
 s+=RC(220,48,116,60,MX(ok?'g':'y',16),CC(ok?'g':'y'),8,1.8)+L(278,68,'Umschlag','middle',12,'var(--mute)',600)+L(278,97,nz(r.U,1)+'-mal','middle',20,'var(--ink)',800);
 s+=RC(346,48,116,60,'var(--card)','var(--ink)',8,1.6)+L(404,68,'Lagerdauer','middle',12,'var(--mute)',600)+L(404,97,nz(r.D,0)+' Tage','middle',20,'var(--ink)',800);
 s+=RC(220,118,242,60,MX(ok2?'g':'r',14),CC(ok2?'g':'r'),8,1.8)+L(341,138,'Lagerkosten im Jahr','middle',12,'var(--mute)',600)+L(341,167,nz(r.K,0)+' €','middle',20,'var(--ink)',800);
 s+=XSTK(30,216,420,16,[[Math.min(r.D,120),'b','']],120)+L(30,250,'0','start',11,'var(--mute)',500)+L(450,250,'120 Tage','end',11,'var(--mute)',500)+P(`M${30+420*45/120} 210V238`,'var(--ok)',2.4)+L(30+420*45/120,250,'45 Tage','middle',11.5,'var(--ok)',700);return s};
X['Logistikkosten & Lagerkennzahlen']={
 v:['Zwei Lager haben denselben Jahresverbrauch. Lager A hat den doppelten mittleren Bestand von Lager B. Was gilt?',['A schlägt doppelt so oft um','A bindet doppelt so viel Kapital und schlägt halb so oft um','Beide sind gleich wirtschaftlich','B hat höhere Lagerkosten'],1,'Umschlagshäufigkeit ist Verbrauch geteilt durch Bestand. Doppelter Bestand heißt halber Umschlag und doppelte Lagerkosten.'],
 ein:[S(13,'Logistikkosten entstehen in vier Blöcken.',CARDS('Vier Kostenblöcke',[['📦','Bestände','Kapital, Zinsen','b'],['🏭','Lager','Fläche, Technik','m'],['🧑‍🔧','Handhabung','Personal','y'],['🚚','Transport','Fracht','g']])),
  S(13,'Die Umschlagshäufigkeit zeigt, wie oft der Bestand im Jahr erneuert wird.',k=>TITLE('Umschlagshäufigkeit')+OP(ph(k,.05,.4),FO(240,104,[{n:'Jahresverbrauch',d:'mittlerer Lagerbestand'}],20))+OP(ph(k,.45,.85),FO(240,190,[{n:'3 000 000 €',d:'600 000 €'},' = 5'],20))),
  S(13,'Daraus folgt die mittlere Lagerdauer.',k=>TITLE('Mittlere Lagerdauer')+OP(ph(k,.05,.4),FO(240,104,[{n:'360 Tage',d:'Umschlagshäufigkeit'}],20))+OP(ph(k,.45,.85),FO(240,190,[{n:'360 Tage',d:'5'},' = 72 Tage'],20))),
  S(14,'Weniger Bestand heißt mehr Umschlag und weniger Lagerkosten.',k=>lkB({JV:3,B:600-300*ph(k,.15,.85),z:20},lkC({JV:3,B:600-300*ph(k,.15,.85),z:20})))],
 skz:[[SKZ(k=>lkB({JV:3,B:600,z:20},lkC({JV:3,B:600,z:20})),'Skizze Lagerkennzahlen'),'Links der Bestand als gefülltes Regal, rechts die Kennzahlen. Der Balken unten zeigt die Lagerdauer.']],
 sim:{t:'Bestand senken, Umschlag erhöhen',fix:'Gerechnet wird mit 360 Tagen. Der Lagerkostensatz enthält Zinsen, Raum, Versicherung, Schwund und Verwaltung.',
  c:[{k:'JV',l:'Jahresverbrauch',u:'Mio. €',min:1,max:6,st:.5,v:3},{k:'B',l:'mittlerer Lagerbestand',u:'T€',min:100,max:1000,st:50,v:600},{k:'z',l:'Lagerkostensatz',u:'%',min:10,max:30,st:1,v:20}],
  calc:lkC,
  rows:(v,r)=>[['Umschlagshäufigkeit',nz(r.U,1),r.U>=8?'g':''],['mittlere Lagerdauer',nz(r.D,0)+' Tage'],['Lagerkosten',nz(r.K,0)+' €',r.K<=60000?'g':'r']],
  svg:(v,r)=>lkB(v,r),
  auf:{z:'Bei 3 Mio. € Verbrauch: Umschlag mindestens 8, Lagerkosten höchstens 60 000 €.',t:'Das Lager verbraucht im Jahr Ware für 3 Mio. €. Die Leitung verlangt mindestens 8 Umschläge im Jahr und höchstens 60 000 € Lagerkosten. Finde Bestand und Lagerkostensatz, die beides erfüllen.',h:'Tipp: Für 8 Umschläge darf der Bestand höchstens ein Achtel des Verbrauchs betragen.',ok:(v,r)=>v.JV===3&&r.U>=8&&r.K<=60000}}};
/* ---------- Fuhrpark oder Spedition ---------- */
const fpC=v=>{const Ke=v.Fx*1000+v.km*1000*.45,Ks=v.km*1000*v.sp;return{Ke,Ks,kr:v.Fx*1000/(v.sp-.45),d:Ks-Ke}};
const fpB=(v,r)=>{const c=CHT({X0:66,X1:452,Y0:218,Y1:68,xm:120,ym:250,xt:[0,20,40,60,80,100,120],yt:[50,100,150,200,250],xl:'Fahrleistung in 1000 km je Jahr',yl:'Kosten in 1000 €'});let s=c.s;
 s+=LN(c,0,v.Fx,120,v.Fx+120*.45,CC('b'),3)+LN(c,0,0,Math.min(120,250/v.sp),Math.min(250,120*v.sp),CC('y'),3);
 const kk=r.kr/1000;if(kk<=120)s+=LN(c,kk,0,kk,kk*v.sp,'var(--mute)',1.4,'4 4')+L(c.px(kk)+(kk<=75?6:-6),c.py(0)-8,'gleich teuer: '+nz(Math.round(r.kr/100)*100,0)+' km',kk<=75?'start':'end',11.5,'var(--mute)',700);
 s+=DOT(c.px(v.km),c.py(r.Ke/1000),CC('b'),6)+DOT(c.px(v.km),c.py(Math.min(250,r.Ks/1000)),CC('y'),6);
 s+=P('M66 18h18',CC('b'),3)+L(88,22,'eigener Lkw','start',12,CC('b'),700)+P('M186 18h18',CC('y'),3)+L(208,22,'Spedition','start',12,'var(--ink)',700)+L(452,22,r.d>0?'eigener Lkw günstiger':'Spedition günstiger','end',12.5,r.d>0?CC('b'):'var(--ink)',800);return s};
X['Fuhrpark oder Spedition']={
 v:['Ein eigener Lkw kostet je Kilometer nur ein Drittel des Speditionspreises. Ist er damit immer günstiger?',['Ja','Nein, erst ab einer bestimmten Fahrleistung, weil er hohe feste Kosten hat','Nein, nie','Nur im Winter'],1,'Die festen Kosten fallen auch an, wenn der Lkw steht. Erst ab der kritischen Fahrleistung macht der niedrige Kilometersatz sie wett.'],
 ein:[S(13,'Zwei Wege mit ganz verschiedener Kostenstruktur.',VS('Kostenstruktur',{h:'eigener Lkw',c:'b',l:['hohe feste Kosten','niedrige Kosten je km','lohnt bei hoher Auslastung']},{h:'Spedition',c:'y',l:['kaum feste Kosten','höherer Preis je km','lohnt bei wenig oder schwankend']})),
  S(14,'Wo sich die Geraden schneiden, sind beide Wege gleich teuer.',k=>fpB({Fx:70,sp:1.4,km:20+90*ph(k,.1,.9)},fpC({Fx:70,sp:1.4,km:20+90*ph(k,.1,.9)}))),
  S(13,'Die kritische Fahrleistung lässt sich ausrechnen.',k=>TITLE('Kritische Fahrleistung')+OP(ph(k,.05,.4),FO(240,104,[{n:'Fixkosten',d:'Preis je km − eigene Kosten je km'}],19))+OP(ph(k,.45,.85),FO(240,190,[{n:'70 000 €',d:'1,40 €/km − 0,45 €/km'},' = 73 684 km'],18))),
  S(13,'Nicht alles steht in der Rechnung.',LIST('Was zusätzlich zählt',[['Termine und Auftreten beim Kunden','1'],['Reserve für Spitzen','2'],['Ausfall von Fahrer oder Fahrzeug','3'],['Abhängigkeit vom Dienstleister','4']]))],
 skz:[[SKZ(k=>fpB({Fx:70,sp:1.4,km:60},fpC({Fx:70,sp:1.4,km:60})),'Skizze Kostenvergleich Fuhrpark und Spedition'),'Die blaue Gerade beginnt bei den Fixkosten und steigt flach. Die gelbe beginnt bei null und steigt steil.']],
 sim:{t:'Eigener Lkw oder Spedition?',fix:'Eigener Lkw: 0,45 € je Kilometer für Kraftstoff, Reifen, Wartung und Maut (Beispielwert). Die Fixkosten enthalten Leasing, Steuer, Versicherung und Fahrer.',
  c:[{k:'km',l:'Fahrleistung im Jahr',u:'1000 km',min:20,max:120,st:5,v:60},{k:'Fx',l:'Fixkosten eigener Lkw',u:'T€',min:40,max:100,st:5,v:70},{k:'sp',l:'Preis der Spedition',u:'€/km',min:1,max:2,st:.05,v:1.4}],
  calc:fpC,
  rows:(v,r)=>[['eigener Lkw',nz(r.Ke,0)+' €'],['Spedition',nz(r.Ks,0)+' €'],['kritische Fahrleistung',nz(r.kr,0)+' km'],['Vorteil eigener Lkw',nz(r.d,0)+' €',r.d>=10000?'g':r.d<0?'r':'']],
  svg:(v,r)=>fpB(v,r),
  auf:{z:'Eigener Lkw mindestens 10 000 € günstiger.',t:'Die Geschäftsleitung kauft nur dann einen eigenen Lkw, wenn er im Jahr mindestens 10 000 € günstiger ist als die Spedition. Finde heraus, unter welchen Bedingungen das der Fall ist.',h:'Tipp: Verändere zuerst nur die Fahrleistung und beobachte den Schnittpunkt der Geraden.',ok:(v,r)=>r.d>=10000}}};
/* ---------- Verkehrswege ---------- */
const vwSk=k=>{let s=TI('Wege trennen');
 s+=RC(20,50,440,60,MX('y',16),'none',4,0)+P('M20 80H460','var(--ink)',1.6,'14 10')+L(30,68,'Fahrweg','start',12,'var(--ink)',700);
 s+=RC(140,62,54,34,MX('y',55),'var(--ink)',6,1.8)+`<circle cx="152" cy="100" r="7" fill="var(--ink)"/><circle cx="182" cy="100" r="7" fill="var(--ink)"/>`+P('M196 70V98H216','var(--ink)',3)+AW(222,80,262,80,'var(--ink)',2.4);
 s+=RC(20,124,440,30,MX('g',16),'none',4,0)+L(30,144,'Gehweg','start',12,'var(--ok)',700)+[120,170,300,360].map(x=>`<circle cx="${x}" cy="134" r="5" fill="${CC('g')}"/>`+P(`M${x} 139v10`,CC('g'),3)).join('');
 s+=P('M20 117H460','var(--ink)',3)+RC(250,112,40,10,'var(--card)','var(--ink)',1,1.4)+L(270,172,'gesicherter Übergang','middle',11.5,'var(--mute)',600);
 s+=BOX(40,190,120,44,'Sicht','b',13,'Spiegel, Licht')+BOX(180,190,120,44,'frei halten','y',13,'nichts abstellen')+BOX(320,190,120,44,'Rampe','r',13,'Lkw gegen Wegrollen');return s};
X['Verkehrswege, Staplerverkehr & Ergonomie']={
 v:['Im Lager gibt es immer wieder Beinahe-Unfälle zwischen Staplern und Fußgängern. Was hilft am meisten?',['Mehr Warnschilder','Fahr- und Gehwege baulich trennen','Hellere Warnwesten','Eine Dienstanweisung'],1,'Wo sich Wege nicht kreuzen, kann niemand angefahren werden. Schilder, Westen und Anweisungen ergänzen das nur.'],
 ein:[S(14,'Fahrzeuge und Fußgänger bekommen eigene Wege.',vwSk),
  S(13,'Die Rangfolge der Schutzmaßnahmen gilt auch im Lager.',FLOW('Rangfolge',[['🧱','technisch','trennen'],['📋','organisatorisch','Regeln, Zeiten'],['🦺','persönlich','Weste, Schuhe']])),
  S(13,'Heben und Tragen belastet den Rücken, wenn es falsch gemacht wird.',VS('Heben und Tragen',{h:'richtig',c:'g',l:['nah am Körper','gerader Rücken','Hebehilfe nutzen']},{h:'falsch',c:'r',l:['weit vom Körper','verdreht','ruckartig']})),
  S(13,'Regale brauchen Aufmerksamkeit.',LIST('Regalsicherheit',[['Fach- und Feldlast angeschrieben','1'],['Anfahrschutz an den Stützen','2'],['Schäden sofort melden, Feld entlasten','3'],['Jährliche Inspektion','4']]))],
 skz:[[SKZ(vwSk,'Skizze getrennte Verkehrswege'),'Oben der Fahrweg, unten der Gehweg, dazwischen eine Abtrennung mit gesichertem Übergang.']]};
Object.assign(ERK,{'Logistikkosten & Lagerkennzahlen':['Bestand bindet Kapital. Umschlagshäufigkeit und Lagerdauer zeigen, wie schnell es wieder frei wird. Der Lagerkostensatz macht daraus Euro.','Du kennst Umschlag und Reichweite Deiner wichtigsten Artikel, prüfst Ladenhüter regelmäßig und planst das Personal nach der Menge.',['Bestand mit Lieferfähigkeit gleichsetzen','Lagerkosten nur als Miete sehen','Ladenhüter liegen lassen','Saisonspitzen erst angehen, wenn sie da sind']],
'Fuhrpark oder Spedition':['Der eigene Lkw hat hohe feste und niedrige laufende Kosten, die Spedition umgekehrt. Die kritische Fahrleistung trennt beide. Dazu kommen Gründe, die sich nicht rechnen lassen.','Du lieferst die Zahlen zu Fahrleistung, Auslastung und Leerfahrten und bewertest Termintreue und Schäden des Dienstleisters mit Kennzahlen.',['Nur die Kosten je Kilometer vergleichen','Standtage und Leerfahrten nicht einrechnen','Dienstleister ohne Kennzahlen steuern','Verantwortung für die Verladung beim Fahrer sehen']],
'Verkehrswege, Staplerverkehr & Ergonomie':['Fahrzeuge und Fußgänger werden getrennt. Wege bleiben frei, Regale werden geschützt und geprüft. Lasten werden körpernah oder mit Hilfsmitteln bewegt.','Du gehst regelmäßig durch Deinen Bereich, lässt abgestellte Ware sofort räumen, meldest Regalschäden und unterweist auch Aushilfen vor dem ersten Einsatz.',['Paletten im Verkehrsweg abstellen','Angefahrene Regalstützen weiter belasten','Aushilfen ohne Unterweisung einsetzen','Schwere Artikel ganz unten oder ganz oben lagern']]});
}
/*LO*/
}
