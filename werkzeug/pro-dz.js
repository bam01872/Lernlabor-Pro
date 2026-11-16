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
