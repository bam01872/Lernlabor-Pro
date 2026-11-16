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
