/* ===== Version 24: Dozentenversion, „📧 Auswertung an mich mailen“ (wie Lernlabor v322, trBuild/trText/trHTML/trMail) =====
   Nur in der Kursübersicht (DOZENT). Anonyme Kursauswertung aus den geladenen Lernfortschritten: keine Namen, keine Einzelwerte.
   Teilnehmerzahl je Kurs eintragbar (auch wer nichts gesendet hat), gespeichert unter lernlabor-pro-doztn. */
const DZTN='lernlabor-pro-doztn',DZOW='Dr. rer. nat. Markus Baum',DZML=['baum.ma91','yahoo.de'].join('@');
const dzTnGet=()=>{try{return JSON.parse(localStorage.getItem(DZTN))||{}}catch(e){return{}}};
const dzTnSet=o=>{try{localStorage.setItem(DZTN,JSON.stringify(o))}catch(e){}};
const dzMed=a=>{a=a.filter(x=>x!=null).sort((x,y)=>x-y);if(!a.length)return null;const m=a.length>>1;return a.length%2?a[m]:(a[m-1]+a[m])/2};
const dzDe=v=>String(v).replace('.',','),dzDat=k=>k.split('-').reverse().join('.');
function dzBuild(L){const T0=today(),kk=DOZK,TN=dzTnGet(),N=Math.max(L.length,+TN[kk]||L.length),S=L.map(o=>dozStats(o));
 const q=S.map(s=>s.q).filter(x=>x!=null),fq={},fr={};
 L.forEach(o=>{Object.values(o.module||{}).forEach(m=>{const x=fq[m.f]||(fq[m.f]={n:0,ok:0});x.n+=m.n;x.ok+=m.ok});const f=o.frn||'ohne Angabe';fr[f]=(fr[f]||0)+1});
 const agg={};L.forEach(o=>Object.values(o.module||{}).forEach(m=>{if(m.n<3)return;const k=m.f+'|'+m.t,a=agg[k]||(agg[k]={t:m.t,r:0,c:0});a.r+=m.ok/m.n*100;a.c++}));
 const fc=S.filter(s=>s.fc);
 return{T0,N,L,kurs:kk==='*'?'':kk,frf:DOZF==='*'?'':DOZF,fresh:L.filter(o=>o.datum&&dDiff(o.datum,T0)<=7).length,
  fr:Object.entries(fr).sort((a,b)=>b[1]-a[1]),qAvg:q.length?Math.round(q.reduce((a,b)=>a+b,0)/q.length):null,
  fq:KZ().filter(k=>fq[k]&&fq[k].n).map(k=>[k,Math.round(fq[k].ok/fq[k].n*100)]),
  t30:dzMed(L.map(o=>o.tage30)),a30:dzMed(L.map(o=>o.aufg30)),fcN:fc.length,fcAvg:fc.length?Math.round(fc.reduce((a,s)=>a+s.fcq,0)/fc.length):null,
  weak:Object.values(agg).filter(a=>a.c>=3).map(a=>({t:a.t,r:Math.round(a.r/a.c)})).sort((a,b)=>a.r-b.r).slice(0,3)}}
function dzText(R){const z=['Zwischenstand Lernlabor Pro'+(R.kurs?' im Kurs '+R.kurs:''),'Stand: '+dzDat(R.T0)+(R.frf?' · '+R.frf:'')+' · '+R.N+' Teilnehmende',''];
 z.push('Lernfortschritt gesendet: '+R.L.length+' von '+R.N+' ('+Math.round(R.L.length/R.N*100)+' %), davon in den letzten 7 Tagen: '+R.fresh);
 if(R.fr.length>1||(R.fr[0]&&!R.frf))z.push('Fachrichtungen: '+R.fr.map(([f,n])=>f+' '+n).join(', '));
 if(R.t30!=null)z.push('Aktive Lerntage in 30 Tagen (Median): '+dzDe(R.t30),'Übungsaufgaben in 30 Tagen (Median): '+dzDe(R.a30));
 if(R.qAvg!=null)z.push('Anteil richtiger Antworten (Schnitt): '+R.qAvg+' %');
 if(R.fq.length)z.push('Anteil richtiger Antworten je Bereich: '+R.fq.map(([k,r])=>k+' '+r+' %').join(', '));
 z.push('Prüfungsaufgaben gerechnet: '+R.fcN+' von '+R.N+(R.fcAvg!=null?', im Schnitt '+R.fcAvg+' % der Punkte':''));
 if(R.weak.length)z.push('Schwierigste Themen (mind. 3 TN): '+R.weak.map(w=>w.t+' '+w.r+' %').join(', '));
 z.push('','Datenschutz: keine Konten, keine Nutzungszählung. Grundlage sind nur freiwillig gesendete Lernfortschritte. Keine Namen, keine Einzelwerte.');return z.join('\n')}
function dzHTML(txt){const l=txt.split('\n');return'<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+rEsc(l[0])+'</title><style>body{font:16px/1.55 system-ui,sans-serif;max-width:46em;margin:2em auto;padding:0 16px;color:#1f2937}h1{font-size:1.5em;margin:0 0 .2em}.s{color:#5b6472}li{margin:.25em 0}</style></head><body><h1>'+rEsc(l[0])+'</h1><p class="s">'+rEsc(l[1])+'</p><ul>'+l.slice(3,-2).map(x=>'<li>'+rEsc(x)+'</li>').join('')+'</ul><p class="s">'+rEsc(l[l.length-1])+'</p><p class="s">Erstellt mit Lernlabor Pro · '+rEsc(DZOW)+'</p></body></html>'}
async function dzMail(h,L,send){const TN=dzTnGet(),inp=h('#dmln'),m=h('#dmsg');if(!send&&inp&&+inp.value>0){TN[DOZK]=+inp.value;dzTnSet(TN)}
 const R=dzBuild(L),txt=dzText(R);h('#dmlw').hidden=false;h('#dmlt').value=txt;if(inp)inp.value=R.N;
 if(!send){m.textContent='Neu berechnet. Tippe „Auswertung an mich mailen“, um sie zu senden.';return}
 const fn='kursauswertung-lernlabor-pro-'+R.T0+'.html',sub='Kursauswertung Lernlabor Pro '+dzDat(R.T0)+(R.kurs?' · '+R.kurs:''),html=dzHTML(txt);let file=null;try{file=new File([html],fn,{type:'text/html'})}catch(e){}
 try{if(file&&navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file],title:sub,text:txt});m.textContent='Wähle Deine Mail-App und trage '+DZML+' als Empfänger ein. Die Auswertung hängt als Datei an.';return}}catch(e){if(e&&e.name==='AbortError')return}
 try{dl(html,fn,'text/html')}catch(e){}
 try{location.href='mailto:'+DZML+'?subject='+encodeURIComponent(sub)+'&body='+encodeURIComponent(txt+'\n\n(Anhang: '+fn+' aus dem Download-Ordner)')}catch(e){}
 m.textContent='Die Datei „'+fn+'“ ist gespeichert, und eine Mail an '+DZML+' ist vorbereitet. Hänge die Datei an und sende. Falls sich keine Mail öffnet: Text unten kopieren. Prüfe die Teilnehmerzahl.'}
async function dzCopy(h){const t=h('#dmlt');try{await navigator.clipboard.writeText(t.value);h('#dmsg').textContent='Text kopiert.'}catch(e){t.select()}}
/* ===== Version 25: 🔗 Kurslink für Teilnehmer (wie Lernlabor kgen) =====
   Kursname und Kurstage (TT.MM.JJJJ, optional ein Thema dahinter) ergeben …#kurs/<Name>/<JJJJ-MM-TT~Thema,...> mit QR-Code.
   Bei den Teilnehmenden richtet kursImport() (pro-ll.js) „Meine Kurstermine“ ein, der nächste Termin steht auf der Startseite.
   Diese Datei wird vor pro-ll.js geladen, damit #dozent schon beim ersten Öffnen vollständig ist; llBase, llQr und llToast (aus pro-ll.js) werden erst beim Klick gebraucht. */
const DZKL='lernlabor-pro-dozkl';
function dzKursParse(txt){const ok=[],bad=[];String(txt).split(/\n/).forEach(l=>{l=l.trim();if(!l)return;const x=l.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})\s*(.*)$/);
 const d=x&&new Date(+x[3],+x[2]-1,+x[1]);if(!x||d.getDate()!==+x[1]||d.getMonth()!==+x[2]-1){bad.push(l);return}
 ok.push(x[3]+'-'+x[2].padStart(2,'0')+'-'+x[1].padStart(2,'0')+(x[4]?'~'+encodeURIComponent(x[4].slice(0,80)):''))});return{ok:[...new Set(ok)].sort(),bad}}
function dzKursPanel(){let st={n:'',t:''};try{st=JSON.parse(localStorage.getItem(DZKL))||st}catch(e){}
 const p=el(`<h2>🔗 Kurslink für Teilnehmer</h2><p class="sub">Ein Link richtet bei den Teilnehmenden Kursnamen und Kurstage ein. Auf ihrer Startseite erscheint dann der nächste Termin mit „In den Kalender“. Ihre eigenen Termine bleiben erhalten.</p>
 <div class="row"><label>Kurs <input type="text" id="kgn" maxlength="60" placeholder="z. B. IMM 2026-1" autocomplete="off" value="${rEsc(st.n)}"></label></div>
 <label class="kgl">Kurstage, einer pro Zeile: Datum und, wenn Du möchtest, das Thema<textarea id="kgd" rows="8" placeholder="28.11.2026 Hydraulik&#10;05.12.2026 Kostenrechnung">${rEsc(st.t)}</textarea></label>
 <div class="row"><button class="btn" id="kgb">Link erstellen</button></div><div id="kgo" aria-live="polite"></div>`,'panel');p.id='kgen';
 const $k=x=>p.querySelector(x);
 $k('#kgb').onclick=()=>{const n=$k('#kgn').value.trim(),t=$k('#kgd').value,o=$k('#kgo');try{localStorage.setItem(DZKL,JSON.stringify({n,t}))}catch(e){}
  if(!n){o.innerHTML='<p class="sub">Bitte einen Kursnamen eintragen.</p>';$k('#kgn').focus();return}
  const r=dzKursParse(t),u=(window.llBase?llBase():'https://bam01872.github.io/Lernlabor-Pro/')+'#kurs/'+encodeURIComponent(n)+'/'+r.ok.join(',');
  o.innerHTML=`<p class="sub">${r.ok.length} ${r.ok.length===1?'Kurstag':'Kurstage'} im Link${r.bad.length?'. Ohne gültiges Datum übersprungen: '+r.bad.map(rEsc).join(' · '):''}.</p><input type="text" class="kgu" readonly value="${rEsc(u)}" aria-label="Kurslink"><div class="row"><button class="btn sec" id="kgc">Link kopieren</button><button class="btn sec" id="kgq">QR-Code zeigen</button></div>`;
  $k('#kgq').onclick=()=>{if(window.llQr)llQr('Kurs '+n,u,'Der Link richtet bei den Teilnehmenden den Kurs und die Kurstage ein.')};
  $k('#kgc').onclick=async()=>{const i=$k('.kgu');try{await navigator.clipboard.writeText(u);if(window.llToast)llToast('Kurslink kopiert')}catch(e){i.select()}}};
 return p}
{const doz0=doz;doz=function(v,msg){doz0(v,msg);if(DOZENT&&!v.querySelector('#kgen'))v.append(dzKursPanel())}}
/* ===== Version 26: ⚠️ Top-3-Fehler im Kurs (wie Lernlabor fwTop) =====
   Teilnehmende schicken mit dem Lernfortschritt mit, welche typischen Fehler sie nach einer falschen Antwort unter „Woran lag es?“ angetippt haben (fw).
   Gezählt wird, wie viele Teilnehmende ein Fehlerbild gewählt haben, dann wie oft. */
{const rb=repBuild;repBuild=function(){const o=rb.apply(this,arguments),s=load();if(s.fw&&Object.keys(s.fw).length)o.fw=s.fw;return o}}
function dzFwTop(L){const a={};L.forEach(o=>Object.entries(o.fw||{}).forEach(([t,v])=>Object.entries((v&&v.c)||{}).forEach(([x,c])=>{if(!(c>0))return;const k=t+'|'+x,y=a[k]||(a[k]={t,x,s:v.s||'',fr:o.fr||'',tn:0,n:0});y.tn++;y.n+=c})));
 return Object.values(a).sort((p,q)=>q.tn-p.tn||q.n-p.n).slice(0,3)}
function dzNextDay(){let st={t:''};try{st=JSON.parse(localStorage.getItem(DZKL))||st}catch(e){}const T0=today(),d=dzKursParse(st.t||'').ok.map(x=>x.slice(0,10)).find(x=>x>=T0);return d?new Date(d+'T12:00:00').toLocaleDateString('de-DE',{weekday:'short',day:'2-digit',month:'2-digit'}):''}
function dzFwPanel(L){const F=dzFwTop(L),nd=dzNextDay(),sub=t=>rEsc(t).replace(/([A-Za-zσλμϑΔεηṁ])_([A-Za-z0-9äöü]+)/g,'$1<sub>$2</sub>');
 const href=f=>!f.s?'':(!f.fr||f.fr===FR)?'#thema/'+f.s:(window.llBase?llBase():'')+'?fr='+f.fr+'#thema/'+f.s;
 const p=el(`<h3>⚠️ Top-3-Fehler im Kurs</h3>${F.length?`<p class="sub">Aus den typischen Fehlern, die Teilnehmende nach einer falschen Antwort unter „Woran lag es?“ selbst angetippt haben.</p><ol class="dfwl">${F.map(f=>{const h=href(f);return`<li><b>${sub(f.x)}</b><br><small>${rEsc(f.t)} · ${f.tn} TN, ${f.n}×</small>${h?` <a class="chip" href="${rEsc(h)}"${h[0]==='#'?'':' target="_blank" rel="noopener"'}>Thema öffnen</a>`:''}</li>`}).join('')}</ol><p class="sub">Vorschlag für den nächsten Kurstag${nd?' (<span class="nw">'+rEsc(nd)+'</span>)':''}: Den ersten Fehler 5 Minuten an der Tafel vorrechnen lassen, mit falschem und richtigem Weg nebeneinander.</p>`:'<p class="sub">Noch keine angetippten Fehlerbilder. Sie kommen mit den nächsten gesendeten Lernfortschritten (ab Version 26).</p>'}`,'panel');p.id='dfw';return p}
{const doz1=doz;doz=function(v,msg){doz1(v,msg);if(!DOZENT||v.querySelector('#dfw'))return;const L=Object.values(dozAll()).filter(o=>(DOZK==='*'||(o.kurs||'')===DOZK)&&(DOZF==='*'||(o.frn||'')===DOZF));if(!L.length)return;
 const p=dzFwPanel(L),wk=[...v.querySelectorAll('h3')].find(h=>/schwersten/.test(h.textContent));if(wk)wk.closest('.panel').after(p);else{const k=v.querySelector('#kgen');k?k.before(p):v.append(p)}}}
/* ===== Version 27: 🎯 Übungslinks je Thema (wie Lernlabor bpl, ohne Stufen, weil Pro keine Basis/Plus-Stufen hat) =====
   …#ueben/<slug> öffnet bei den Teilnehmenden das Thema direkt beim Üben (openRoute in pro-ll.js). Technikthemen tragen ?fr= der Fachrichtung,
   Organisation und Führung gelten für alle. Empfehlung aus den geladenen Lernfortschritten: sicher ab 80 % bei mindestens 3 Aufgaben, sonst üben. */
function dzUeRec(L,t){const S=[],U=[],O=[];L.forEach(o=>{const m=Object.values(o.module||{}).find(x=>x.t===t);if(!m||m.n<3)O.push(o.name);else if(m.ok/m.n>=.8)S.push(o.name);else U.push(o.name)});return{S,U,O}}
function dzUePanel(L){const G=[['tec','Technik ('+FRN[FR]+')'],['org','Organisation'],['fp','Führung & Personal']],sn=()=>window.llSN||{};
 const p=el(`<h2>🎯 Übungslinks je Thema</h2><p class="sub">Ein Link öffnet bei den Teilnehmenden das Thema direkt beim Üben, mit Check-Fragen und Rechenaufgaben. So gibst Du gezielt Übungen auf, ohne selbst Aufgaben zu schreiben. Technikthemen gelten für ${rEsc(FRN[FR])}. Für eine andere Fachrichtung wählst Du sie zuerst auf der Startseite.</p>
 <div class="row"><label>Thema <select id="uet">${G.map(([f,g])=>`<optgroup label="${rEsc(g)}">${D[f].modules.map((m,i)=>[m.t,i]).sort((a,b)=>a[0].localeCompare(b[0],'de')).map(([t,i])=>`<option value="${f}:${i}">${rEsc(t)}</option>`).join('')}</optgroup>`).join('')}</select></label></div><div id="ueo" aria-live="polite"></div>`,'panel');p.id='uel';
 const $u=x=>p.querySelector(x);
 const show=()=>{const [f,i]=$u('#uet').value.split(':'),t=D[f].modules[+i].t,s=sn()[f+':'+i]||'',u=(window.llBase?llBase():'https://bam01872.github.io/Lernlabor-Pro/')+(f==='tec'?'?fr='+FR:'')+'#ueben/'+s;
  const LL=f==='tec'?L.filter(o=>!o.fr||o.fr===FR):L,R=dzUeRec(LL,t),nm=a=>a.map(rEsc).join(', ')||'–';
  $u('#ueo').innerHTML=`<input type="text" class="kgu" readonly value="${rEsc(u)}" aria-label="Übungslink"><div class="row"><button class="btn sec" id="uec">Link kopieren</button><button class="btn sec" id="ueq">QR-Code zeigen</button></div>`+
   (LL.length?`<p class="sub uerh"><b>Empfehlung aus den geladenen Lernfortschritten:</b></p><ul class="uer"><li>Üben empfohlen: ${nm(R.U)}</li><li>Schon sicher (mindestens 80 %): ${nm(R.S)}</li>${R.O.length?`<li>Noch zu wenig geübt (unter 3 Aufgaben): ${nm(R.O)}</li>`:''}</ul><p class="sub">Die Empfehlung ist ein Vorschlag, Du entscheidest.</p>`:'<p class="sub">Sobald Lernfortschritte geladen sind, steht hier, wer das Thema üben sollte.</p>');
  $u('#ueq').onclick=()=>{if(window.llQr)llQr(t,u,'Der Link öffnet das Thema direkt beim Üben.')};
  $u('#uec').onclick=async()=>{try{await navigator.clipboard.writeText(u);if(window.llToast)llToast('Übungslink kopiert')}catch(e){$u('.kgu').select()}}};
 $u('#uet').onchange=show;show();return p}
{const doz2=doz;doz=function(v,msg){doz2(v,msg);if(!DOZENT||v.querySelector('#uel'))return;const L=Object.values(dozAll()).filter(o=>(DOZK==='*'||(o.kurs||'')===DOZK)&&(DOZF==='*'||(o.frn||'')===DOZF));v.append(dzUePanel(L))}}
/* ===== Version 28: ✍️ Eigene Aufgaben (wie Lernlabor oed/ownClean/ownImport) =====
   Dozent: Rechenaufgaben (Ergebnis, Einheit, Toleranz in %, Lösungsweg) oder Textaufgaben (Musterlösung, Stichpunkte) schreiben,
   lokal speichern (lernlabor-pro-ownedit), als Link …#aufgaben/<base64> oder Datei weitergeben. Nur eigene Aufgaben, keine IHK-Originale.
   Teilnehmende: Link übernimmt die Sammlung (lernlabor-pro-own, für alle Fachrichtungen), Ansicht „📝 Vom Dozenten“ unter Üben & Prüfen,
   Fortschritt im Lernstand (s.own, je Fachrichtung, mit Sichern/Zurücksetzen) und im Lernfortschritt (own). */
const OWK='lernlabor-pro-own',OEK='lernlabor-pro-ownedit';
const owJ=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}},owS=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const b64e=t=>{const b=new TextEncoder().encode(t);let s='';b.forEach(c=>s+=String.fromCharCode(c));return btoa(s).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')},
 b64d=t=>new TextDecoder().decode(Uint8Array.from(atob(t.replace(/-/g,'+').replace(/_/g,'/')),c=>c.charCodeAt(0)));
const owNum=v=>{v=String(v==null?'':v).trim().replace(/\s/g,'');if(v.indexOf(',')>=0)v=v.replace(/\./g,'').replace(',','.');return parseFloat(v)};
const owFmt=v=>Number(v).toLocaleString('de-DE',{maximumFractionDigits:4});
function ownClean(o){const S=(v,n)=>String(v==null?'':v).slice(0,n),L=(v,k,n)=>(Array.isArray(v)?v:[]).slice(0,k).map(x=>S(x,n)).filter(Boolean);if(!o||!Array.isArray(o.a))return null;
 const a=o.a.slice(0,60).map((x,i)=>({id:S(x.id||i+1,12).replace(/[^\w-]/g,''),th:S(x.th,80),t:x.t==='num'?'num':'txt',q:S(x.q,1500),a:x.t==='num'?+x.a:undefined,u:S(x.u,20),tol:x.t==='num'?Math.min(20,Math.max(.1,+x.tol||2)):undefined,s:L(x.s,12,300),m:S(x.m,2500),c:L(x.c,8,200)})).filter(x=>x.th&&x.q&&(x.t==='txt'||isFinite(x.a)));
 return a.length?{n:S(o.n,60),a}:null}
function ownGet(){return ownClean(owJ(OWK,null))}
function ownImport(r){let o=null;try{o=ownClean(JSON.parse(b64d(r)))}catch(e){}const say=m=>setTimeout(()=>{if(window.llToast)llToast(m)},300);
 if(!o){say('Der Aufgaben-Link ist unvollständig. Bitte den ganzen Link öffnen.');return false}owS(OWK,o);say(o.a.length+(o.a.length===1?' Aufgabe':' Aufgaben')+' vom Dozenten übernommen');return true}
/* Stand je Aufgabe im Lernstand: s.own[id]={d:erledigt,ok:richtig/Anteil,x:Antwort} */
const owSt=()=>{const s=load();return s.own||{}},owSet=(id,o)=>{const s=load();s.own=s.own||{};s.own[id]=Object.assign(s.own[id]||{},o);actDay(s);save(s)};
const owDone=O=>{const st=owSt();return O.a.filter(x=>st[x.id]&&st[x.id].d).length};
const owUpd=()=>{const O=ownGet(),e=document.querySelector('.owdn');if(O&&e)e.textContent=owDone(O)};
function ownView(v){const O=ownGet();
 if(!O){v.append(el('<h2>📝 Vom Dozenten</h2><p class="sub">Hier erscheinen Aufgaben, die Dir Dein Dozent als Link oder QR-Code schickt. Noch ist keine Sammlung da.</p>','panel'));return}
 const st=owSt(),dn=owDone(O);
 v.append(el(`<h2>📝 Vom Dozenten${O.n?': '+rEsc(O.n):''}</h2><p class="sub">${O.a.length} ${O.a.length===1?'Aufgabe':'Aufgaben'} von Deinem Dozenten, <span class="owdn">${dn}</span> erledigt. Dein Stand geht mit „Lernfortschritt senden“ an ihn.</p>`,'panel'));
 O.a.forEach((x,i)=>{const s=st[x.id]||{},p=el(`<h3>${s.d?'✓ ':''}${i+1}. ${rEsc(x.th)} <small class="owk">${x.t==='num'?'Rechnen':'Text'}</small></h3><p class="owq">${rEsc(x.q).replace(/\n/g,'<br>')}</p>`,'panel owa');
  if(x.t==='num'){p.insertAdjacentHTML('beforeend',`<div class="row"><input type="text" inputmode="decimal" aria-label="Deine Antwort" size="12" value="${rEsc(s.x||'')}"> <span>${rEsc(x.u)}</span><button class="btn">Antwort prüfen</button><button class="btn sec owl"${s.d||s.w?'':' hidden'}>Lösungsweg</button></div><p class="fb" aria-live="polite">${s.d?'Richtig. Ergebnis: '+owFmt(x.a)+(x.u?' '+rEsc(x.u):''):''}</p><div class="sol" hidden><div>Ergebnis: <b>${owFmt(x.a)}${x.u?' '+rEsc(x.u):''}</b></div>${x.s.map(l=>'<div>'+rEsc(l)+'</div>').join('')}</div>`);
   const inp=p.querySelector('input'),fb=p.querySelector('.fb'),lw=p.querySelector('.owl'),sol=p.querySelector('.sol');
   const chk=()=>{const y=owNum(inp.value);if(!isFinite(y)){fb.textContent='Bitte eine Zahl eingeben.';return}const ok=Math.abs(y-x.a)<=Math.abs(x.a)*x.tol/100+1e-9;
    if(ok){fb.textContent='Richtig. Ergebnis: '+owFmt(x.a)+(x.u?' '+x.u:'');fb.style.color='var(--ok)';owSet(x.id,{d:1,ok:1,x:inp.value});const h=p.querySelector('h3');if(!/^✓/.test(h.textContent))h.prepend('✓ ');owUpd()}
    else{fb.textContent='Nicht ganz. Dein Wert ist zu '+(y>x.a?'groß':'klein')+'.'+(x.s.length?' Der Lösungsweg hilft weiter.':'');fb.style.color='var(--red)';const w=(owSt()[x.id]||{}).w||0;owSet(x.id,{w:w+1,x:inp.value});lw.hidden=false}};
   p.querySelector('.btn').onclick=chk;inp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();chk()}});lw.onclick=()=>{sol.hidden=!sol.hidden}}
  else{p.insertAdjacentHTML('beforeend',`<textarea rows="4" aria-label="Deine Antwort" placeholder="Deine Antwort in Stichpunkten">${rEsc(s.x||'')}</textarea><div class="row"><button class="btn sec owm">Musterlösung zeigen</button></div><div class="owms" hidden><p><b>Musterlösung</b><br>${rEsc(x.m).replace(/\n/g,'<br>')}</p>${x.c.length?`<p class="sub">Was davon steht in Deiner Antwort? Hake ab.</p><ul class="owc">${x.c.map((c,j)=>`<li><label><input type="checkbox" data-j="${j}"${s.c&&s.c.includes(j)?' checked':''}> ${rEsc(c)}</label></li>`).join('')}</ul>`:''}<div class="row"><button class="btn owb">✓ Selbst bewertet</button></div><p class="fb" aria-live="polite"></p></div>`);
   const ta=p.querySelector('textarea'),ms=p.querySelector('.owms');ta.onchange=()=>owSet(x.id,{x:ta.value.slice(0,2000)});
   p.querySelector('.owm').onclick=()=>{ms.hidden=!ms.hidden};
   p.querySelector('.owb').onclick=()=>{const c=[...p.querySelectorAll('.owc input:checked')].map(i=>+i.dataset.j),r=x.c.length?c.length/x.c.length:1;owSet(x.id,{d:1,ok:Math.round(r*100)/100,c,x:ta.value.slice(0,2000)});
    p.querySelector('.owms .fb').textContent=x.c.length?'Gespeichert: '+c.length+' von '+x.c.length+' Punkten.':'Gespeichert.';const h=p.querySelector('h3');if(!/^✓/.test(h.textContent))h.prepend('✓ ');owUpd()}}
  v.append(p)})}
/* Lernfortschritt: Stand der Sammlung mitschicken */
{const rb2=repBuild;repBuild=function(){const o=rb2.apply(this,arguments),O=ownGet();if(O){const st=owSt(),A=O.a.filter(x=>st[x.id]&&st[x.id].d);o.own={n:O.n,k:O.a.length,d:A.length,ok:Math.round(A.reduce((a,x)=>a+(+st[x.id].ok||0),0)*10)/10}}return o}}
/* Dozent: Aufgaben schreiben */
let OE=null;
const oeGet=()=>owJ(OEK,{n:'',a:[]}),oeSet=v=>owS(OEK,v);
function oePanel(){const p=el('','panel');p.id='oed';oeRender(p);return p}
function oeRender(p){const o=oeGet(),$o=x=>p.querySelector(x),X=OE?o.a.find(x=>x.id===OE):null,x=X||{t:'num'},n=x.t==='num';
 const L=Object.values(dozAll()).filter(r=>r.own&&(DOZK==='*'||(r.kurs||'')===DOZK)&&(DOZF==='*'||(r.frn||'')===DOZF));
 p.innerHTML=`<h2>✍️ Eigene Aufgaben</h2><p class="sub">Schreib Aufgaben aus Deinem Unterricht oder aus Betrieben der Region. Die Teilnehmenden bekommen sie per Link und finden sie unter Üben &amp; Prüfen → „📝 Vom Dozenten“. Ihr Stand kommt mit dem Lernfortschritt zu Dir. Nur eigene Aufgaben, keine IHK-Originale.</p>
 <div class="row"><label>Name der Sammlung <input type="text" id="oen" maxlength="60" value="${rEsc(o.n)}" placeholder="z. B. Woche 3: Hydraulik"></label></div>
 ${o.a.length?`<ol class="oel">${o.a.map(y=>`<li><b>${rEsc(y.th)}</b> <small>${y.t==='num'?'Rechnen':'Text'}</small> <button class="btn sec" data-oe="${rEsc(y.id)}">Bearbeiten</button> <button class="btn sec" data-od="${rEsc(y.id)}" aria-label="Aufgabe ${rEsc(y.th)} löschen">✕</button></li>`).join('')}</ol>`:'<p class="sub">Noch keine eigenen Aufgaben.</p>'}
 <details class="oead" open><summary>${OE?'✏️ Aufgabe bearbeiten':'➕ Aufgabe schreiben'}</summary><div class="oef">
  <label>Titel <input type="text" id="oth" maxlength="80" value="${rEsc(x.th||'')}" placeholder="z. B. Hubzylinder der Firma Maier"></label>
  <label>Art <select id="ot"><option value="num"${n?' selected':''}>Rechenaufgabe mit Ergebnis</option><option value="txt"${n?'':' selected'}>Text: Begründen, Beurteilen, Vorgehen</option></select></label>
  <label class="oew">Aufgabentext <textarea id="oq" rows="4" maxlength="1500">${rEsc(x.q||'')}</textarea></label>
  <div id="onum"${n?'':' hidden'}><div class="row"><label>Ergebnis <input type="text" id="oa" inputmode="decimal" size="10" value="${x.a!=null&&n?String(x.a).replace('.',','):''}"></label><label>Einheit <input type="text" id="ou" maxlength="20" size="8" value="${rEsc(x.u||'')}"></label><label>Toleranz in % <input type="text" id="otol" inputmode="decimal" size="4" value="${String(x.tol||2).replace('.',',')}"></label></div><label class="oew">Lösungsweg, ein Schritt pro Zeile <textarea id="os" rows="4">${rEsc((x.s||[]).join('\n'))}</textarea></label></div>
  <div id="otxt"${n?' hidden':''}><label class="oew">Musterlösung <textarea id="om" rows="4" maxlength="2500">${rEsc(x.m||'')}</textarea></label><label class="oew">Das sollte in der Antwort vorkommen, ein Punkt pro Zeile <textarea id="oc" rows="4">${rEsc((x.c||[]).join('\n'))}</textarea></label></div>
  <div class="row"><button class="btn" id="osv">${OE?'Änderung speichern':'Aufgabe hinzufügen'}</button>${OE?'<button class="btn sec" id="ocx">Abbrechen</button>':''}</div><p class="sub" id="omsg" role="status"></p></div></details>
 <div class="row"><button class="btn" id="olk"${o.a.length?'':' disabled'}>🔗 Link erstellen</button><button class="btn sec" id="otry"${o.a.length?'':' disabled'}>👀 Als Teilnehmer ansehen</button><button class="btn sec" id="ofs"${o.a.length?'':' disabled'}>💾 Als Datei speichern</button><label class="btn sec">📂 Datei laden<input type="file" id="ofl" accept=".json,application/json" hidden></label></div><div id="oo"></div>
 ${L.length?`<h3>Stand im Kurs</h3><ul class="dl">${L.sort((a,b)=>String(a.name).localeCompare(String(b.name),'de')).map(r=>{const q=Math.round(r.own.d/Math.max(1,r.own.k)*100);return`<li><span><b>${rEsc(r.name)}</b> <small>${rEsc(r.own.n||'')}</small></span><span>${bar(q)} ${r.own.d} von ${r.own.k}</span></li>`}).join('')}</ul>`:''}`;
 const re=()=>oeRender(p);
 $o('#oen').onchange=()=>{const v=oeGet();v.n=$o('#oen').value.trim();oeSet(v)};
 $o('#ot').onchange=()=>{const m=$o('#ot').value==='num';$o('#onum').hidden=!m;$o('#otxt').hidden=m};
 p.querySelectorAll('[data-oe]').forEach(b=>b.onclick=()=>{OE=b.dataset.oe;re();$o('#oth').focus()});
 p.querySelectorAll('[data-od]').forEach(b=>b.onclick=()=>{if(b.dataset.s){const v=oeGet();v.a=v.a.filter(y=>y.id!==b.dataset.od);oeSet(v);if(OE===b.dataset.od)OE=null;re()}else{b.dataset.s=1;b.textContent='Wirklich löschen?'}});
 if($o('#ocx'))$o('#ocx').onclick=()=>{OE=null;re()};
 $o('#osv').onclick=()=>{const t=$o('#ot').value,y={id:OE||String(Date.now()).slice(-8),th:$o('#oth').value.trim(),t,q:$o('#oq').value.trim()},msg=m=>{$o('#omsg').textContent=m};
  if(!y.th||!y.q){msg('Bitte Titel und Aufgabentext eintragen.');return}
  if(t==='num'){y.a=owNum($o('#oa').value);if(!isFinite(y.a)){msg('Bitte das Ergebnis als Zahl eintragen.');return}y.u=$o('#ou').value.trim();y.tol=owNum($o('#otol').value)||2;y.s=$o('#os').value.split('\n').map(l=>l.trim()).filter(Boolean)}
  else{y.m=$o('#om').value.trim();y.c=$o('#oc').value.split('\n').map(l=>l.trim()).filter(Boolean);if(!y.m){msg('Bitte eine Musterlösung eintragen.');return}}
  const v=oeGet(),i=v.a.findIndex(z=>z.id===y.id);if(i>=0)v.a[i]=y;else v.a.push(y);const c=ownClean(v);if(!c){msg('Die Aufgabe ließ sich nicht speichern.');return}oeSet({n:v.n,a:c.a});OE=null;re();if(window.llToast)llToast('Aufgabe gespeichert')};
 if(o.a.length){$o('#olk').onclick=()=>{const u=(window.llBase?llBase():'https://bam01872.github.io/Lernlabor-Pro/')+'#aufgaben/'+b64e(JSON.stringify(ownClean(oeGet())));
   $o('#oo').innerHTML=`<input type="text" class="kgu" readonly value="${rEsc(u)}" aria-label="Aufgaben-Link"><p class="sub">Schick den Link per Mail oder Messenger. Wer ihn öffnet, findet die Aufgaben unter Üben &amp; Prüfen. Eine neue Sammlung ersetzt die alte.</p><div class="row"><button class="btn sec" id="ocp">Link kopieren</button>${u.length<1800?'<button class="btn sec" id="oqr">QR-Code zeigen</button>':''}</div>${u.length<1800?'':'<p class="sub">Für einen QR-Code ist der Link zu lang. Teile ihn als Text oder als Datei.</p>'}`;
   $o('#ocp').onclick=async()=>{try{await navigator.clipboard.writeText(u);if(window.llToast)llToast('Link kopiert')}catch(e){$o('#oo .kgu').select()}};
   if($o('#oqr'))$o('#oqr').onclick=()=>{if(window.llQr)llQr('Aufgaben: '+(oeGet().n||'Eigene Aufgaben'),u,'Der Link übernimmt die Aufgaben bei den Teilnehmenden.')}};
  $o('#otry').onclick=()=>{owS(OWK,ownClean(oeGet()));go('own')};
  $o('#ofs').onclick=()=>{try{dl(JSON.stringify(oeGet(),null,1),'lernlabor-pro-aufgaben-'+(oeGet().n||'eigene').replace(/[^a-z0-9äöüß]+/gi,'-').toLowerCase()+'.json','application/json')}catch(e){}}}
 $o('#ofl').onchange=e=>{const f=e.target.files&&e.target.files[0];if(!f)return;f.text().then(t=>{const c=ownClean(JSON.parse(t));if(!c)throw 0;oeSet(c);OE=null;re();if(window.llToast)llToast(c.a.length+' Aufgaben geladen')}).catch(()=>{if(window.llToast)llToast('Die Datei enthält keine Lernlabor-Pro-Aufgaben.')})}}
{const doz3=doz;doz=function(v,msg){doz3(v,msg);if(!DOZENT||v.querySelector('#oed'))return;v.append(oePanel())}}
