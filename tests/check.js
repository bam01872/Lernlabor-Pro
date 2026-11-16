/* Prüft Lernlabor Pro in allen sechs Fachrichtungen (Fachprüfung KONS-002).
   Aufruf: node tests/check.js   (braucht Playwright mit Chromium)
   1. Die Seite lädt ohne Fehler.
   2. Jede Rechenaufgabe liefert in 25 Zahlenvarianten ein gültiges Ergebnis.
   3. Toleranzen sind relativ und klein (höchstens 5 %).
   4. Deutlich falsche Eingaben (Hälfte, plus 10 %) werden als falsch erkannt.
   5. Hinweis: Der Lösungsweg zeigt das gerundete Ergebnis.
   6. Version: sw.js passt zu APPV, Ich → Sonstiges zeigt sie, Hinweis auf neue Version.
   7. Dozentenversion: const DOZENT=false; und <title>Lernlabor Pro</title> genau einmal. */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const FILE=path.resolve(__dirname,'..','index.html');
const OKF='ok=Math.abs(v-t.a)<=Math.max(Math.abs(t.a)*t.tol,t.d===0?0.5:Math.pow(10,-t.d)/2+1e-9)';
const ok=(v,t)=>Math.abs(v-t.a)<=Math.max(Math.abs(t.a)*t.tol,t.d===0?0.5:Math.pow(10,-t.d)/2+1e-9);
(async()=>{
 const html=fs.readFileSync(FILE,'utf8');let fehler=[],hinweise=[];
 if(!html.includes(OKF))fehler.push('Antwortprüfung in index.html hat sich geändert: tests/check.js anpassen');
 /* 7. Dozentenversion bleibt baubar (werkzeug/build-dozent.py): im Repo nie DOZENT=true, Titel genau einmal */
 if(html.split('const DOZENT=false;').length!==2)fehler.push('const DOZENT=false; fehlt oder doppelt (Dozentenversion nie committen)');
 if(html.split('<title>Lernlabor Pro</title>').length!==2)fehler.push('<title>Lernlabor Pro</title> fehlt oder doppelt');
 const b=await chromium.launch();const gesehen=new Set();let n=0;
 for(const fr of ['me','el','ch','ku','mt','lo']){
  const p=await b.newPage();const errs=[];p.on('pageerror',e=>errs.push(String(e)));
  await p.goto('file://'+FILE+'?fr='+fr);await p.waitForTimeout(600);
  errs.forEach(e=>fehler.push(fr+': Seitenfehler '+e));
  const calc=await p.evaluate(()=>{let seed=1;const rnd=()=>{seed=(seed*16807)%2147483647;return (seed-1)/2147483646};
   const R={i:(a,b)=>a+Math.floor(rnd()*(b-a+1)),p:a=>a[Math.floor(rnd()*a.length)],step:(a,b,s)=>a+s*Math.floor(rnd()*((b-a)/s+1))};
   return C.map((c,ci)=>{const inst=[];for(let k=0;k<25;k++){seed=1000+k*7919+ci;try{const g=c.gen(R);inst.push({a:g.a,d:g.d,tol:g.tol,dt:!!g.dt,sol:(g.sol||[]).join(' '),erg:g.dt?'':nz(g.a,g.d)})}catch(e){inst.push({err:String(e)})}}return{name:c.name,inst}})});
  for(const c of calc){if(gesehen.has(c.name))continue;gesehen.add(c.name);n++;
   let w=0;
   for(const t of c.inst){
    if(t.err){fehler.push(fr+' „'+c.name+'“: '+t.err);break}
    if(t.dt)continue;
    if(typeof t.a!=='number'||!isFinite(t.a)){fehler.push(fr+' „'+c.name+'“: Ergebnis ungültig');break}
    if(!(t.tol>=0&&t.tol<=0.05)){fehler.push(fr+' „'+c.name+'“: Toleranz '+t.tol+' ist keine kleine relative Toleranz');break}
    const floor=t.d===0?0.5:Math.pow(10,-t.d)/2;
    if(Math.abs(t.a)*0.5>floor&&ok(t.a*0.5,t)){fehler.push(fr+' „'+c.name+'“: Hälfte des Ergebnisses gilt als richtig');break}
    if(Math.abs(t.a)*0.1>floor&&ok(t.a*1.1,t)){fehler.push(fr+' „'+c.name+'“: Ergebnis plus 10 % gilt als richtig');break}
    if(t.sol&&!t.sol.includes(t.erg))w++;
   }
   if(w)hinweise.push(fr+' „'+c.name+'“: Lösungsweg zeigt '+w+' von 25 Ergebnissen nicht genau so');
  }
  await p.close();
 }
 /* 6. Version: sw.js passt zu APPV, Ich → Sonstiges zeigt die Version, Hinweis „Jetzt laden“ erscheint */
 {const p=await b.newPage();await p.goto('file://'+FILE+'?fr=me');await p.waitForTimeout(400);
  const r=await p.evaluate(()=>{go('sonst');const v=document.querySelector('#view .vnr');window.llUpdate();const u=document.querySelector('#upd');return{appv:APPV,vnr:v?v.textContent:'',upd:u?u.textContent:''}});
  const sw=fs.readFileSync(path.resolve(__dirname,'..','sw.js'),'utf8');
  if(!sw.includes("'lernlabor-pro-v"+r.appv+"'"))fehler.push('sw.js hat nicht den Cache-Namen lernlabor-pro-v'+r.appv+': werkzeug/build.py neu laufen lassen');
  if(!r.vnr.includes('Version '+r.appv))fehler.push('Ich → Sonstiges zeigt die Version nicht');
  if(!r.upd.includes('Jetzt laden'))fehler.push('Hinweis auf neue Version fehlt');
  await p.close()}
 await b.close();
 console.log(n+' Rechenaufgaben geprüft, je 25 Zahlenvarianten.');
 if(hinweise.length){console.log('\nHinweise ('+hinweise.length+'):');hinweise.forEach(h=>console.log('  '+h))}
 if(fehler.length){console.log('\nFEHLER ('+fehler.length+'):');fehler.forEach(f=>console.log('  '+f));process.exit(1)}
 console.log('\nAlles in Ordnung.');
})();
