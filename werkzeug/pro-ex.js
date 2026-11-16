/* ===== Version 22: gerechnete Prüfungsaufgaben kennzeichnen (wie Lernlabor v322, PR #67) =====
   Schlüssel lernlabor-pro-gerechnet (+FRS je Fachrichtung), nur in diesem Browser.
   Je Aufgabe (Titel): s = begonnen am, d = zuletzt fertig bewertet am, n = Durchgänge, g/m = eigene Punkte von maximal, alt = aus früherem Stand übernommen.
   ✓ gerechnet = alle Teilaufgaben selbst bewertet · ✎ begonnen = Antwort geschrieben oder Erwartungshorizont geöffnet · ○ offen */
(()=>{
const q=s=>document.querySelector(s);
const EK='lernlabor-pro-gerechnet'+FRS,AK='lernlabor-pro-antw'+FRS;
const hq=v=>String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
const rd=k=>{try{const v=JSON.parse(localStorage.getItem(k));return v&&typeof v==='object'?v:null}catch(e){return null}};
const wr=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
let MEM=null;
/* einmalig: früheren Stand übernehmen. Gespeicherte Antworten (seit Version 9) = begonnen, vollständig bewertete Aufgaben aus dem Lernstand = gerechnet */
function exD(){let X=rd(EK);if(X)return X;if(MEM)return MEM;X={};
 try{const A=rd(AK)||{};Object.keys(A).forEach(k=>{const t=k.slice(0,k.lastIndexOf('|'));if(t&&A[k]&&!X[t])X[t]={alt:1}})}catch(e){}
 try{const C_=(load().c)||{};Object.keys(C_).forEach(k=>{const t=k.slice(k.indexOf(':')+1),o=C_[k];if(t&&o&&typeof o.g==='number')X[t]={n:1,g:o.g,m:o.m,alt:1}})}catch(e){}
 MEM=X;wr(EK,X);return X}
const exSave=X=>{MEM=X;wr(EK,X)};
const exSt=(X,t)=>{const e=X[t];return !e?0:e.n?2:1};
const SYM=['','✎ ','✓ '];
const day=d=>{if(!d)return'';const T=today(),y=new Date();y.setDate(y.getDate()-1);if(d===T)return'heute';if(d===dKey(y))return'gestern';const[a,b,c]=d.split('-');return (+c)+'.'+(+b)+'.'+(a===T.slice(0,4)?'':a)};
const pts=v=>Number.isInteger(v)?String(v):nf(v,1);
/* Gruppen wie in der Auswahl: Im Betrieb, dann die Bereiche; leere Gruppen fallen weg */
function groups(){const G=[['Im Betrieb',CASES.map((c,i)=>c.ib?i:-1).filter(i=>i>=0)]];FACH.forEach(f=>G.push([D[f].name,CASES.map((c,i)=>c.f===f&&!c.ib?i:-1).filter(i=>i>=0)]));return G.filter(g=>g[1].length)}
function begin(){const c=CASES[fIdx];if(!c)return;const X=exD();if(X[c.t])return;X[c.t]={s:today()};exSave(X);ui()}
/* fertig: einmal je Durchgang zählen, Punkte bei späterem Umhaken nachführen */
let RUN=null;
const rc=recCase;recCase=function(f,t,g,m){const r=rc.apply(this,arguments);try{if(tab==='fall'){const X=exD(),e=X[t]||(X[t]={});if(RUN!==t){RUN=t;e.n=(e.n||0)+1}e.d=today();e.g=g;e.m=m;delete e.alt;exSave(X);ui()}}catch(x){}return r};
document.addEventListener('input',e=>{const ta=e.target;if(tab==='fall'&&ta.matches&&ta.matches('#view .q textarea')&&ta.value.trim())begin()});
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('#view .q .btn');if(tab==='fall'&&b&&!b.dataset.ki)begin()});
/* Zufällige offene Aufgabe: Wert wird vor dem Wechsel in eine Aufgabe umgesetzt */
document.addEventListener('change',e=>{const s=e.target;if(s.id!=='fsel'||s.value!=='ro')return;const X=exD(),all=groups().flatMap(g=>g[1]),o=all.filter(i=>exSt(X,CASES[i].t)<2&&i!==fIdx),p=o.length?o:all.filter(i=>i!==fIdx);s.value=String(p.length?p[Math.floor(Math.random()*p.length)]:fIdx)},true);
function selHtml(){const X=exD(),G=groups(),all=G.flatMap(g=>g[1]),po=all.filter(i=>exSt(X,CASES[i].t)<2).length;
 return `<option value="ro">${po?`🎲 Zufällige offene Aufgabe (${po} offen)`:'🎲 Zufällige Aufgabe (alle gerechnet)'}</option>`+G.map(([g,L])=>{const z=L.filter(i=>exSt(X,CASES[i].t)===2).length;return `<optgroup label="${hq(g)}${z?` · ${z} von ${L.length} ✓`:''}">`+L.map(i=>`<option value="${i}">${SYM[exSt(X,CASES[i].t)]}${hq(CASES[i].t)}</option>`).join('')+'</optgroup>'}).join('')}
function line(){const h=q('#view .panel h2');if(!h||tab!=='fall')return;let b=q('#pexs');if(!b){b=document.createElement('p');b.id='pexs';b.className='pexs';b.setAttribute('aria-live','polite');h.after(b);RUN=null}
 const c=CASES[fIdx],X=exD(),e=X[c.t],st=exSt(X,c.t);let t;
 if(st===2)t=`<span class="exi ex2">✓</span><span><b>Schon gerechnet</b>${e.n>1?` (${e.n}×)`:''}${e.d?`, zuletzt ${day(e.d)}`:', in einer früheren Version'}${e.m?` · ${pts(e.g)} von ${e.m} Punkten`:''}</span>`;
 else if(st===1)t=`<span class="exi ex1">✎</span><span>${e.alt?'Schon einmal bearbeitet, noch nicht fertig bewertet':`Begonnen ${day(e.s)}, noch nicht fertig bewertet`}</span>`;
 else t=`<span class="exi ex0">○</span><span>Noch nicht gerechnet</span>`;
 b.innerHTML=t}
let EXF='alle';
function ov(){const sp=q('#fsel');if(!sp||tab!=='fall')return;const pn=sp.closest('.panel');let d=q('#pexo');
 if(!d){d=document.createElement('details');d.id='pexo';d.innerHTML='<summary></summary><div class="exf" role="group" aria-label="Aufgaben filtern"></div><div class="exl"></div><p class="exk">✓ fertig bewertet · ✎ begonnen · ○ offen. Gespeichert nur in diesem Browser.</p>';pn.append(d);
  d.addEventListener('toggle',()=>{if(d.open){const a=d.querySelector('.exr[aria-current="true"]');if(a)a.scrollIntoView({block:'nearest'})}})}
 const X=exD(),G=groups(),all=G.flatMap(g=>g[1]),N=all.length,n2=all.filter(i=>exSt(X,CASES[i].t)===2).length,n1=all.filter(i=>exSt(X,CASES[i].t)===1).length;
 d.querySelector('summary').innerHTML=`<span>📋 ${n2} von ${N} gerechnet</span><span class="exbar" aria-hidden="true"><i style="width:${N?Math.round(100*n2/N):0}%"></i></span><span class="exarr" aria-hidden="true">▾</span>`;
 d.querySelector('.exf').innerHTML=[['alle','Alle',N],['offen','Offen',N-n2-n1],['ang','Begonnen',n1],['ok','Gerechnet',n2]].map(([k,t,z])=>`<button type="button" data-f="${k}" aria-pressed="${k===EXF}">${t} (${z})</button>`).join('');
 const keep=i=>{const s=exSt(X,CASES[i].t);return EXF==='alle'||(EXF==='offen'&&!s)||(EXF==='ang'&&s===1)||(EXF==='ok'&&s===2)};
 const html=G.map(([g,L])=>{const K=L.filter(keep);if(!K.length)return'';const z=L.filter(i=>exSt(X,CASES[i].t)===2).length;
  return `<div class="exg"><span>${hq(g)}</span><span>${z?`${z} von ${L.length} ✓`:`${L.length} offen`}</span></div>`+K.map(i=>{const t=CASES[i].t,s=exSt(X,t),e=X[t]||{};
   return `<button type="button" class="exr${s===2?' ex2s':''}" data-v="${i}"${i===fIdx?' aria-current="true"':''}><span class="exi ex${s}" aria-label="${['offen','begonnen','gerechnet'][s]}">${['○','✎','✓'][s]}</span><span class="ext">${hq(t)}</span><span class="exd">${s===2?(e.m?pts(e.g)+' / '+e.m+' P.':'')+(e.d?' · '+day(e.d):''):s===1?day(e.s):''}</span></button>`}).join('')}).join('');
 d.querySelector('.exl').innerHTML=html||`<p class="exe">${EXF==='ok'?'Noch keine Aufgabe fertig bewertet.':EXF==='ang'?'Keine begonnenen Aufgaben.':'Alle Aufgaben sind gerechnet. 🎉'}</p>`;
 d.querySelectorAll('.exf button').forEach(b=>b.onclick=()=>{EXF=b.dataset.f;ov()});
 d.querySelectorAll('.exr').forEach(b=>b.onclick=()=>{const f=q('#fsel');f.value=b.dataset.v;f.dispatchEvent(new Event('change'));d.open=false;pn.scrollIntoView({block:'start'})})}
function ui(){if(tab!=='fall')return;const s=q('#fsel');if(s){const v=String(fIdx),h=selHtml();if(s.dataset.exh!==h){s.innerHTML=h;s.dataset.exh=h}s.value=v}line();ov()}
/* Bei jedem Neuaufbau der Aufgabe: Auswahl, Zeile und Übersicht aktualisieren */
let BUSY=false;new MutationObserver(()=>{if(BUSY||tab!=='fall')return;if(q('#view .panel h2')&&!q('#pexs')||q('#fsel')&&!q('#pexo')){BUSY=true;try{ui()}finally{BUSY=false}}}).observe(q('#view'),{childList:true,subtree:true});
/* Ich → Lernstand: Sichern, Wiederherstellen und Zurücksetzen schließen die Markierungen ein */
const bp=backupPanel;backupPanel=function(){const p=bp.apply(this,arguments),m=p.querySelector('#bmsg');
 p.querySelector('#bex').onclick=()=>{try{dl(JSON.stringify({typ:'lernlabor-pro-sicherung',v:1,data:load(),gerechnet:exD()}),'lernlabor-pro-lernstand-'+today()+'.json','application/json');m.textContent='Gespeichert.'}catch(e){m.textContent='Speichern ist hier nicht möglich.'}};
 p.querySelector('#bim').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const o=JSON.parse(r.result);if(!o||o.typ!=='lernlabor-pro-sicherung'||!o.data)throw 0;save(o.data);if(o.gerechnet&&typeof o.gerechnet==='object')exSave(o.gerechnet);draw()}catch(x){m.textContent='Die Datei konnte nicht gelesen werden.'}};r.readAsText(f)};return p};
const st=stand;stand=function(v){st.apply(this,arguments);const b=v.querySelector('#rs');if(b)b.onclick=()=>{if(confirm('Lernstand wirklich löschen?')){save({});exSave({});draw()}}};
if(tab==='fall')ui();
})();
