/* ===== Version 21: Ich → Tutorial wie im Lernlabor (v303/v304) =====
   Freiwilliger Rundgang in sieben kurzen Kapiteln mit Mini-Regler und Mini-Aufgabe, Adresse #tutorial/<n>.
   Gelesene Kapitel bekommen einen Haken (lernlabor-pro-tut, für alle Fachrichtungen gemeinsam). */
(()=>{
const q=s=>document.querySelector(s);
const get=k=>{try{return localStorage.getItem(k)}catch(e){return null}},set=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const seen=()=>{try{return JSON.parse(get('lernlabor-pro-tut')||'[]')}catch(e){return[]}};
const nf=(x,d)=>x.toLocaleString('de-DE',{minimumFractionDigits:d,maximumFractionDigits:d});
const cnt=f=>D[f].modules.filter(m=>!m.wip).length;
const BN={tec:D.tec.kurz,org:D.org.kurz,fp:D.fp.kurz};
const ex=()=>{const g=GRP.tec&&GRP.tec[0]&&GRP.tec[0][1];return g&&g.length?g[0]:0};
const exT=()=>D.tec.modules[ex()].t;
const topic=(after)=>{modSel.tec=ex();go('tec');scrollTo(0,0);if(after)setTimeout(after,250)};
window.TUK=window.TUK||0;
TL.tut='🗺️ Tutorial';

const K=[
 {i:'🧭',t:'Zurechtfinden',z:'Wo ist was, und wie komme ich zurück?',
  p:[['🧩','Unten liegt das <b>Menüband</b> mit vier Reitern: Start, Lernen, Üben & Prüfen und Ich. Bist Du in einem Thema, steht statt „Lernen“ der Bereich, z. B. „'+FEM.tec+' '+BN.tec+'“.'],
     ['↩️','<b>Zurück</b> geht immer mit der Zurück-Taste vom Handy oder Browser. Jede Seite hat eine eigene Adresse, so landest Du genau dort, wo Du vorher warst.'],
     ['🔎','Die <b>Suche</b> oben findet Themen und Formeln, z. B. „Wirkungsgrad“ oder „Deckungsbeitrag“.'],
     ['🏠','Die <b>Startseite</b> zeigt Deinen nächsten Schritt. Unter Lernen steht „↩ Weiter mit …“ mit dem Thema, bei dem Du aufgehört hast.']],
  d:'mb'},
 {i:'📚',t:'Fachrichtung und Themen',z:'Drei Bereiche, jedes Thema in vier Schritten.',
  p:[['🎓','Deine <b>Fachrichtung</b> wählst Du auf der Startseite. Organisation und Führung & Personal sind für alle gleich, die Technik wechselt. Der Lernstand wird je Fachrichtung getrennt gemerkt.'],
     ['🗂️','Im Bereich wählst Du oben die <b>Gruppe</b> oder tippst auf „Thema wechseln ▾“.'],
     ['👣','Jedes Thema hat vier <b>Schritte</b>. Die Leiste oben zeigt, wo Du bist, und springt beim Antippen hin.'],
     ['📎','Unten im Thema liegt <b>Nachschlagen</b>: Rechenweg, Wichtiges, Grundgleichungen, typische Fehler und Deine eigene Notiz. Glossar und Formelsammlung findest Du im Reiter Lernen.']],
  d:'sl'},
 {i:'🎬',t:'Kurz erklärt',z:'Jedes Thema in etwa einer Minute.',
  p:[['▶️','Der Knopf <b>„🎬 Kurz erklärt“</b> steht im Thema unter dem Vermuten. Ein Tipp startet die Erklärung, die Länge steht daneben.'],
     ['🔇','Der <b>Ton</b> ist aus, der Text läuft unter dem Bild mit. So geht es auch im Zug. Mit „🔇 Ton aus“ schaltest Du das Vorlesen ein.'],
     ['💡','Am besten erst <b>vermuten</b>, dann ansehen. Danach weißt Du, ob Deine Vermutung stimmte, und behältst es besser.']],
  d:'pl'},
 {i:'🎚️',t:'Regler und Auftrag',z:'Ausprobieren, was in der Formel passiert.',
  p:[['👆','<b>Regler</b> ziehen oder die Zahl ins Feld tippen. Zeichnung und Ergebnis ändern sich sofort.'],
     ['🎯','Der <b>Auftrag</b> unter den Reglern gibt Dir ein Ziel. Antippen klappt ihn auf. Er wird grün, sobald Du es geschafft hast.'],
     ['🔄','Viele Zeichnungen <b>bewegen sich</b>: Zylinder fahren aus, Bänder laufen, Behälter füllen sich. Der kleine Knopf oben rechts im Bild hält die Bewegung an.']],
  d:'sim'},
 {i:'✏️',t:'Üben',z:'Rechnen mit immer neuen Zahlen, so oft Du willst.',
  p:[['🎲','Jede Rechenaufgabe kommt mit <b>neuen Werten</b>. Ergebnis eintippen, dann „Antwort prüfen“ oder Enter. Komma ist erlaubt, kleine Rundungsfehler zählen als richtig.'],
     ['💡','<b>Hilfe</b> zeigt erst einen Tipp, dann den Ansatz. Nach dem zweiten Versuch kommt der <b>Lösungsweg</b>, Schritt für Schritt mit Einheiten. „Woran lag es?“ zeigt typische Fehler.'],
     ['🗂️','Unter <b>Fach</b> und <b>Typ</b> wählst Du, was Du üben willst: Technik, Organisation oder Führung & Personal, Wissensfragen oder Rechnen.']],
  d:'ub'},
 {i:'🎓',t:'Aufgaben für die Prüfung',z:'Alles unter Üben & Prüfen. Tippe auf einen Knopf, um es anzusehen.',d:'ty'},
 {i:'📈',t:'Ich und Lerntipps',z:'Dein Stand, Deine Daten, und wie Du am meisten herausholst.',
  p:[['📈','<b>Lernstand</b> zeigt, welche Themen Du bearbeitet hast und wie sicher Du bist, getrennt je Fachrichtung.'],
     ['📤','<b>Lernfortschritt senden</b> erzeugt eine kleine Datei mit Deinen Ergebnissen für Deinen Dozenten, nur wenn Du es willst. Kurstage trägst Du unter <b>Meine Kurstermine</b> ein und übernimmst sie in Deinen Kalender.'],
     ['🎨','<b>Darstellung</b> unter Ich → Sonstiges: hell, dunkel oder wie das Gerät. Dort steht auch die Version mit „Was ist neu“.'],
     ['🔒','Alles bleibt <b>auf Deinem Gerät</b>, ohne Konto und ohne Anmeldung. Beim Löschen der Website-Daten geht der Stand verloren.']],
  d:'tip'}];

/* ---- Mini-Übungen ---- */
const MB=()=>[['🏠','Start','Die Startseite mit Deinem nächsten Schritt, der Wahl der Fachrichtung und dem Aufbau der Prüfung.'],
 ['📚','Lernen','Die drei Bereiche, dazu Glossar, Formelsammlung und „↩ Weiter mit …“ mit Deinem letzten Thema. Im Thema heißt dieser Reiter wie der Bereich.',FACH.map(f=>FEM[f]+' '+BN[f])],
 ['🎓','Üben & Prüfen','',['✏️ Üben','🏭 Im Betrieb','🎓 Prüfungsaufgaben','🗣️ Mündliche Prüfung','⏱️ Prüfungssimulation']],
 ['🧑‍🔬','Ich','',['📈 Lernstand','📤 Lernfortschritt senden','📅 Meine Kurstermine','🗺️ Tutorial','⚙️ Sonstiges (Darstellung, Version)']]];
const SLX=[['Vermuten','Erst raten, dann nachsehen. Eine Frage, mehrere Antworten, keine Note.'],['Ansehen','„Kurz erklärt“ und die Skizze zum Thema.'],['Probieren','Regler bewegen, Auftrag lösen, die Zeichnung beobachten.'],['Üben','Check-Fragen und Rechenaufgaben zum Thema, gleich mit Lösungsweg.']];
function demo(d,box){
 if(d==='mb'){const M=MB();box.innerHTML=`<h4>Probier es aus: tippe auf einen Reiter</h4><div class="tumb" role="group" aria-label="Menüband zum Ausprobieren">${M.map((m,j)=>`<button type="button" data-j="${j}" aria-pressed="false"><span aria-hidden="true">${m[0]}</span>${m[1]}</button>`).join('')}</div><div class="tumbl" aria-live="polite"><span class="sub">Hier erscheint, was hinter dem Reiter steckt.</span></div>`;
  const l=box.querySelector('.tumbl');box.querySelectorAll('.tumb button').forEach(b=>b.onclick=()=>{box.querySelectorAll('.tumb button').forEach(x=>x.setAttribute('aria-pressed',x===b));const m=M[+b.dataset.j];l.innerHTML=`<b>${m[0]} ${m[1]}</b>${m[2]?`<p>${m[2]}</p>`:''}${m[3]?`<ul>${m[3].map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}`});return}
 if(d==='sl'){box.innerHTML=`<h4>Die Schrittleiste im Thema: tippe einen Schritt an</h4><div class="tusl" role="group" aria-label="Schritte">${SLX.map((s,j)=>`<button type="button" data-j="${j}" aria-pressed="${!j}">${j+1} ${s[0]}</button>`).join('')}</div><p class="tumbl" aria-live="polite" style="min-height:0">${SLX[0][1]}</p>
  <h4 style="margin-top:12px">Deine Bereiche: ${esc(FRK[FR]||'Deine Fachrichtung')}</h4><div class="tufa">${FACH.map(f=>`<button type="button" data-f="${f}">${FEM[f]} ${esc(BN[f])}<span class="tucn">${cnt(f)}</span></button>`).join('')}</div><p class="sub" style="margin:0">Die Zahl ist die Anzahl der Themen. Ein Tipp öffnet den Bereich, mit Zurück kommst Du wieder hierher.</p>`;
  const l=box.querySelector('.tumbl');box.querySelectorAll('.tusl button').forEach(b=>b.onclick=()=>{box.querySelectorAll('.tusl button').forEach(x=>x.setAttribute('aria-pressed',x===b));l.textContent=SLX[+b.dataset.j][1]});
  box.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{go(b.dataset.f);scrollTo(0,0)});return}
 if(d==='pl'){box.innerHTML=`<h4>Die Knöpfe in „Kurz erklärt“</h4><div class="tupl" aria-hidden="true"><span>⏮</span><span>⏸ Pause</span><span>⏭</span><span>🔇 Ton aus</span><span>✕</span></div>
  <dl class="tuple"><dt>⏮ ⏭</dt><dd>ein Bild zurück oder weiter</dd><dt>⏸ Pause</dt><dd>anhalten, in Ruhe das Bild ansehen</dd><dt>🔇 Ton aus</dt><dd>Vorlesen ein- oder ausschalten</dd><dt>✕</dt><dd>schließen</dd><dt>Am Ende</dt><dd>„Weiter ↓“ springt zu den Reglern</dd></dl>`;return}
 if(d==='sim'){let P=30,A=20,dn=false;
  box.innerHTML=`<h4>Mini-Regler: Hydraulikzylinder</h4><div class="tusim"><svg viewBox="0 0 240 110" aria-hidden="true">
   <rect class="tumet" x="10" y="30" width="120" height="50" rx="4" stroke-width="3"/><rect class="tuoil" data-a="oil" x="13" y="33" width="50" height="44"/>
   <rect class="tumet" data-a="kol" x="63" y="33" width="10" height="44" stroke-width="2"/><rect class="tumet" data-a="st" x="73" y="49" width="110" height="12" stroke-width="2"/>
   <line class="tuarr" data-a="ar" x1="190" y1="55" x2="220" y2="55" stroke-width="5"/><path class="tuarr" data-a="ah" d="M220 47 l12 8 l-12 8z"/>
   <text x="36" y="22" text-anchor="middle" font-size="13" data-a="pt"></text><text x="205" y="88" text-anchor="middle" font-size="14" font-weight="700">F</text></svg>
  <div><div class="turg"><b>p</b><input type="range" min="10" max="100" step="10" value="${P}" aria-label="Druck p in bar" data-v="P"><input type="number" min="10" max="100" step="10" value="${P}" aria-label="Druck p in bar" data-n="P"><span>bar</span></div>
  <div class="turg"><b>A</b><input type="range" min="10" max="50" step="10" value="${A}" aria-label="Kolbenfläche A in cm²" data-v="A"><input type="number" min="10" max="50" step="10" value="${A}" aria-label="Kolbenfläche A in cm²" data-n="A"><span>cm²</span></div>
  <div class="tures"><span class="sub">Kolbenkraft</span> <b class="tuF"></b></div></div></div>
  <div class="tuauf" aria-live="polite"></div>`;
  const $a=n=>box.querySelector('[data-a="'+n+'"]'),out=box.querySelector('.tuF'),auf=box.querySelector('.tuauf');
  const upd=()=>{const F=P*A/100,h=Math.round(16+A*0.56);/* Kolben größer bei großer Fläche, Pfeil länger bei großer Kraft */
   $a('oil').setAttribute('fill-opacity',.25+.75*P/100);$a('kol').setAttribute('y',55-h/2);$a('kol').setAttribute('height',h);
   const L=8+F*0.9;$a('ar').setAttribute('x2',190+L);$a('ah').setAttribute('d','M'+(190+L)+' 47 l12 8 l-12 8z');$a('pt').textContent=P+' bar';
   out.textContent='F = '+nf(F,0)+' kN';
   if(Math.abs(F-20)<.01)dn=true;auf.classList.toggle('ok',dn);
   auf.innerHTML=dn?'<b>✓ Auftrag geschafft:</b> 40 bar auf 50 cm² oder 100 bar auf 20 cm² ergeben auch 20 kN. Genau so funktionieren die Aufträge in den Themen.':'<b>🎯 Auftrag:</b> Stelle eine Kolbenkraft von genau 20 kN ein. Tipp: F = p · A, und 1 bar drückt mit 10 N auf jeden cm².'};
  box.querySelectorAll('[data-v]').forEach(s=>s.oninput=()=>{const k=s.dataset.v;if(k==='P')P=+s.value;else A=+s.value;box.querySelector(`[data-n="${k}"]`).value=s.value;upd()});
  box.querySelectorAll('[data-n]').forEach(s=>s.onchange=()=>{const k=s.dataset.n,r=box.querySelector(`[data-v="${k}"]`);let v=+String(s.value).replace(',','.');if(!isFinite(v))v=+r.value;v=Math.max(+r.min,Math.min(+r.max,Math.round(v/10)*10));s.value=r.value=v;if(k==='P')P=v;else A=v;upd()});
  upd();return}
 if(d==='ub'){let p,k,db,n,F,hi=0,tr=0;const neu=()=>{db=[12,15,18,20,24][Math.floor(Math.random()*5)];k=[22,26,30,34,38][Math.floor(Math.random()*5)];p=k+db;n=[300,400,500,600,750][Math.floor(Math.random()*5)];F=db*n;hi=0;tr=0;draw()};
  const lw0=()=>`<p><b>Lösungsweg</b></p><p>Deckungsbeitrag je Stück = Preis − variable Kosten</p><p>= ${p} € − ${k} € = ${db} €</p><p>Gewinnschwelle = ${FRX('[[Fixkosten||Deckungsbeitrag je Stück]]')}</p><p>= ${FRX('[['+nz(F,0)+' €||'+db+' €]]')} = ${nz(n,0)} Stück</p>`;
  const draw=()=>{box.innerHTML=`<h4>Mini-Aufgabe: probier es aus</h4><p class="tuq">Ein Teil wird für ${p} € verkauft. Die variablen Kosten betragen ${k} € je Stück, die Fixkosten ${nz(F,0)} € im Monat. Ab wie vielen Stück im Monat macht der Betrieb Gewinn?</p>
   <div class="tuin"><input inputmode="decimal" placeholder="Antwort" aria-label="Antwort in Stück" autocomplete="off"><b>Stück</b><button type="button" class="btn tuck">Antwort prüfen</button></div><div class="tufb" aria-live="polite" hidden></div>
   <div class="tugo" style="margin-top:10px"><button type="button" class="chip tuhi">💡 Hilfe</button><button type="button" class="chip tunw">🎲 Neue Werte</button></div><div class="tulw" hidden></div>`;
   const inp=box.querySelector('input'),fb=box.querySelector('.tufb'),lw=box.querySelector('.tulw');
   const chk=()=>{const v=parseFloat(inp.value.replace(/\s/g,'').replace(/\.(?=\d{3}(\D|$))/g,'').replace(',','.'));fb.hidden=false;if(!isFinite(v)){fb.className='tufb no';fb.textContent='Bitte eine Zahl eingeben, z. B. 500.';return}tr++;
    if(Math.abs(v-n)<.5){fb.className='tufb ok';fb.textContent='✓ Richtig! Genau so prüft Lernlabor Pro Deine Ergebnisse.'}
    else if(tr<2){fb.className='tufb no';fb.textContent='Noch nicht. Dein Wert ist zu '+(v>n?'groß':'klein')+'. Versuch es nochmal oder tippe auf „💡 Hilfe“.'}
    else{fb.className='tufb no';fb.textContent='Noch nicht. Hier ist der Lösungsweg, danach klappt es mit „🎲 Neue Werte“.';lw.hidden=false;lw.innerHTML=lw0()}};
   box.querySelector('.tuck').onclick=chk;inp.onkeydown=e=>{if(e.key==='Enter')chk()};
   box.querySelector('.tuhi').onclick=()=>{hi++;lw.hidden=false;lw.innerHTML=hi<2?'<p><b>Tipp:</b> Jedes verkaufte Stück deckt einen Teil der Fixkosten. Wie viel bringt ein Stück dafür ein?</p><p class="sub">Tippe nochmal auf „💡 Hilfe“ für den Ansatz.</p>':'<p><b>Ansatz:</b> Deckungsbeitrag je Stück = Preis − variable Kosten. Die Fixkosten geteilt durch den Deckungsbeitrag je Stück ergeben die Gewinnschwelle.</p>'};
   box.querySelector('.tunw').onclick=neu};neu();return}
 if(d==='ty'){const T=[['✏️','Üben','Check-Fragen und Rechenaufgaben zu jedem Thema, mit Zufallswerten, Hilfe und Lösungsweg. Der Grundstein für alles andere.','uben'],
   ['🏭','Im Betrieb','Fünf Lagen aus dem Alltag eines Meisters in Deiner Fachrichtung. Jede Aufgabe hat mehrere Schritte und verbindet Technik, Organisation und Führung.','betrieb'],
   ['🎓','Prüfungsaufgaben','Situationsaufgaben wie in der schriftlichen Prüfung: Du schreibst Deine Lösung, öffnest den Erwartungshorizont und hakst ab, was Du genannt hast.','fall'],
   ['🗣️','Mündliche Prüfung','Fragen wie im situationsbezogenen Fachgespräch, Schwerpunkt Führung und Personal. Erst laut antworten, dann die Antwort anzeigen. Geht auch zu zweit.','oral'],
   ['⏱️','Prüfungssimulation','90 Minuten mit Situationsaufgaben und Rechenteil, auf 100 Punkte umgerechnet. Kurz geht es in 30 Minuten. Am besten erst, wenn die Themen sitzen.','sim']];
  box.className='';box.innerHTML=`<span class="tubet"><b>🏭 Besonders lohnend: Aufgaben „Im Betrieb“.</b> Sie spielen in Werkstatt, Halle, Anlage oder Lager Deiner Fachrichtung und verlangen wie die Prüfung, dass Du rechnest, entscheidest und führst.</span>
   <div class="tuty">${T.map((t,j)=>`<div><div class="tutyh"><h4>${t[0]} ${t[1]}</h4><button type="button" class="chip" data-j="${j}" aria-label="${t[1]} ansehen">Ansehen ›</button></div><p>${t[2]}</p></div>`).join('')}</div>
   <div class="tudemo"><h4>Ein guter Weg zur Prüfung</h4><div class="tuwg"><span>✏️ Üben</span><b>→</b><span>🏭 Im Betrieb</span><b>→</b><span>🎓 Prüfungsaufgaben</span><b>→</b><span>🗣️ Mündlich</span><b>→</b><span>⏱️ Simulation</span></div><p class="sub" style="margin:8px 0 0">Ein Vorschlag, keine Pflicht. Mit der Zurück-Taste kommst Du jederzeit wieder ins Tutorial.</p></div>`;
  box.querySelectorAll('[data-j]').forEach(b=>b.onclick=()=>{go(T[+b.dataset.j][3]);scrollTo(0,0)});return}
 if(d==='tip'){box.innerHTML=`<h4>So holst Du am meisten heraus</h4><ul class="tupt"><li><span>⏰</span><span><b>Lieber oft und kurz:</b> 15 bis 20 Minuten an mehreren Tagen bringen mehr als drei Stunden am Abend vor dem Kurs.</span></li><li><span>🔮</span><span><b>Erst vermuten, dann ausprobieren:</b> Wer vorher rät, merkt sich das Ergebnis besser, auch wenn die Vermutung falsch war.</span></li><li><span>✍️</span><span><b>Situationsaufgaben schriftlich lösen:</b> Erst selbst aufschreiben, dann mit dem Erwartungshorizont vergleichen. Nur so merkst Du, was Dir fehlt.</span></li><li><span>📝</span><span><b>Mit Papier und Taschenrechner rechnen</b>, wie in der Prüfung. Das Handy ist dort nicht erlaubt.</span></li></ul>`;return}}

const GO=[[['🏠 Zur Startseite',()=>{go('home');scrollTo(0,0)}]],
 [['Beispiel: '+exT()+' ›',()=>topic()]],
 [['🎬 Kurz erklärt im Thema ansehen ›',()=>topic(()=>{const b=[...document.querySelectorAll('#view button')].find(x=>/Kurz erklärt/.test(x.textContent));if(b){b.scrollIntoView({block:'center'});b.click()}})]],
 [['🎚️ Regler im Thema ausprobieren ›',()=>topic(()=>{const s=q('#sim');if(s)s.scrollIntoView({block:'start'})})]],
 [['✏️ Zum Üben ›',()=>{go('uben');scrollTo(0,0)}]],
 [],
 [['📈 Zum Lernstand ›',()=>{go('stand');scrollTo(0,0)}]]];

function tutView(v){set('lernlabor-pro-tour','1');const k=Math.max(0,Math.min(K.length-1,TUK|0)),c=K[k],s=seen();TUK=k;if(!s.includes(k)){s.push(k);set('lernlabor-pro-tut',JSON.stringify(s))}
 const box=document.createElement('div');box.id='tut';
 box.innerHTML=`<div class="panel"><div class="tuh"><h2>🗺️ Tutorial</h2><p class="sub" style="margin:0">Freiwillig: sieben kurze Kapitel, je etwa eine Minute. Spring hin und her, wie Du magst, oder entdecke die App einfach selbst.</p></div>
 <div class="tunav" role="tablist" aria-label="Kapitel">${K.map((x,j)=>`<button type="button" role="tab" data-k="${j}" aria-current="${j===k}" aria-selected="${j===k}" class="${s.includes(j)&&j!==k?'dn':''}"><i>${s.includes(j)&&j!==k?'✓':j+1}</i>${x.t}</button>`).join('')}</div>
 <div class="tuk" role="tabpanel"><h3>${c.i} ${c.t}</h3><p class="tuz">${c.z}</p>
 ${c.p?`<ul class="tupt">${c.p.map(x=>`<li><span aria-hidden="true">${x[0]}</span><span>${x[1]}</span></li>`).join('')}</ul>`:''}
 <div class="${c.d==='ty'?'':'tudemo'}" id="tudm"></div>
 ${GO[k].length?`<div class="tugo">${GO[k].map((g,j)=>`<button type="button" class="btn sec" data-go="${j}">${esc(g[0])}</button>`).join('')}</div>`:''}
 <div class="tubt"><button type="button" class="btn sec" id="tupv"${k?'':' disabled'}>‹ Zurück</button><span class="sub">${k+1} von ${K.length}</span><button type="button" class="btn" id="tunx">${k<K.length-1?'Weiter ›':'Fertig ✓'}</button></div></div></div>`;
 v.append(box);demo(c.d,box.querySelector('#tudm'));
 const to=j=>{TUK=j;try{history.replaceState(history.state,'','#tutorial/'+(j+1))}catch(e){}draw();const p=q('#tut .tuk');if(p&&p.getBoundingClientRect().top<0)q('#tut').scrollIntoView({block:'start'})};
 box.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>to(+b.dataset.k));
 box.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>GO[k][+b.dataset.go][1]());
 box.querySelector('#tupv').onclick=()=>{if(k)to(k-1)};box.querySelector('#tunx').onclick=()=>{if(k<K.length-1)to(k+1);else{go('home');scrollTo(0,0)}};
 const a=box.querySelector('.tunav [aria-current="true"]'),n=box.querySelector('.tunav');requestAnimationFrame(()=>{if(!a||!n)return;const ar=a.getBoundingClientRect(),nr=n.getBoundingClientRect();if(ar.right>nr.right||ar.left<nr.left)n.scrollLeft+=ar.left-nr.left-8})}

window.tutView=tutView;
const navT=nav;nav=function(){navT.apply(this,arguments);if(tab==='tut'){const b=q('#fs [data-g="3"]');if(b)b.setAttribute('aria-pressed','true')}};
/* Lernstand: Tutorial wieder öffnen (wie im Lernlabor unter Ich) */
const standT=stand;stand=function(v){standT(v);const p=el('<h2>🗺️ Tutorial</h2><p class="sub">Sieben kurze Kapitel zur Bedienung der App, mit kleinen Übungen zum Ausprobieren.</p><p><button type="button" class="btn sec" id="tutb">Tutorial öffnen</button></p>','panel');p.id='tourp';p.querySelector('#tutb').onclick=()=>{TUK=0;go('tut');scrollTo(0,0)};v.append(p)};
/* Direktlink #tutorial/n: pro-ll.js hat die Ansicht schon geöffnet, jetzt zeichnen */
if(tab==='tut'||tab==='stand')draw();
})();
