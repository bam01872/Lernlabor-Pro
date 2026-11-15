const {chromium,open,S}=require('./lib');
const L=(...a)=>console.log(...a);
(async()=>{const b=await chromium.launch();
// T1 Browser back
{const c=await b.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});await c.addInitScript(()=>{try{localStorage.setItem('lernlabor-pro-tour','1')}catch(e){}});const p=await c.newPage();
 await p.goto('about:blank');await p.goto('http://localhost:8765/');await p.waitForTimeout(700);
 await p.click('#fs button:nth-child(2)');await p.waitForTimeout(500);L('T1 nach Lernen: url',p.url(),'tab',await p.evaluate(()=>tab));
 await p.goBack().catch(e=>L('goBack err',e.message));await p.waitForTimeout(700);L('T1 nach Zurück: url',p.url());
 await p.goForward();await p.waitForTimeout(700);L('T1 forward url',p.url(),await p.evaluate(()=>typeof tab!=='undefined'?tab:'-'));
 // T2 reload keeps topic?
 await p.evaluate(()=>{modSel.tec=3;go('tec')});await p.waitForTimeout(400);await p.reload();await p.waitForTimeout(800);L('T2 nach Neuladen tab',await p.evaluate(()=>tab+' '+JSON.stringify(modSel)));
 await c.close()}
// T3 Erstes Thema öffnen
{const p=await open(b,'m',{ls:{'lernlabor-pro-tour':'1'}});
 await p.click('text=Erstes Thema öffnen');await p.waitForTimeout(500);L('T3 Erstes Thema ->',await p.evaluate(()=>tab+' '+document.querySelector('#view h1,#view h2')?.innerText));
 L('T3 scrollY',await p.evaluate(()=>scrollY));
 // T4 Mehr menu at 390
 await p.evaluate(()=>{modSel.tec=0;go('tec')});await p.waitForTimeout(400);
 const s=await p.$('summary:has-text("Mehr")');await s.scrollIntoViewIfNeeded();await s.click();await p.waitForTimeout(300);
 L('T4 Mehr-Menü',await p.evaluate(()=>{const m=document.querySelector('.mm');const r=m.getBoundingClientRect();return {left:r.left,right:r.right,vw:innerWidth,docSW:document.documentElement.scrollWidth}}));
 await p.screenshot({path:S+'/f-mehr-390.png'});
 // T5 Thema wechseln
 await p.evaluate(()=>scrollTo(0,0));await p.click('.thw');await p.waitForTimeout(400);await p.screenshot({path:S+'/f-thw-390.png'});
 L('T5 sheet focus',await p.evaluate(()=>document.activeElement.outerHTML.slice(0,120)));
 await p.keyboard.press('Escape');await p.waitForTimeout(300);L('T5 nach Esc offen?',await p.evaluate(()=>{const e=document.querySelector('.thw');return e.getAttribute('aria-expanded')+' '+[...document.querySelectorAll('.wl,.wls,[class*=sheet]')].map(x=>x.className+':'+(x.offsetParent!==null)).join(',')}));
 await p.screenshot({path:S+'/f-thw-esc.png'});
 // T6 step bar
 await p.evaluate(()=>{go('tec');scrollTo(0,0)});await p.waitForTimeout(300);
 for(const st of ['2 Ansehen','3 Ausprobieren','4 Üben','1 Vermuten']){await p.click(`button:has-text("${st}")`);await p.waitForTimeout(700);L('T6 Schritt',st,'scrollY',await p.evaluate(()=>Math.round(scrollY)),await p.evaluate(()=>[...document.querySelectorAll('button')].filter(b=>/^\d (Verm|Anse|Ausp|Üben)/.test(b.innerText)).map(b=>b.className).join(',')));}
 await p.screenshot({path:S+'/f-step.png'});
 // T7 Regler number input
 await p.evaluate(()=>{go('tec');});await p.waitForTimeout(300);
 const inp=p.locator('input.rgn').first();await inp.scrollIntoViewIfNeeded();
 for(const v of ['99999','-5','4,5','','abc','1.250']){await inp.fill(v);await inp.press('Enter');await p.waitForTimeout(250);L('T7 Eingabe',JSON.stringify(v),'->feld',await inp.inputValue(),'regler',await p.evaluate(()=>{const r=document.querySelector('#rg-b');return r.value+' ['+r.min+'..'+r.max+' step '+r.step+']'}),'msg',await p.evaluate(()=>{const e=document.querySelector('.rgn').closest('div').parentElement.querySelector('.err,.hint,[role=alert]');return e?e.innerText:''}))}
 await p.screenshot({path:S+'/f-regler.png'});
 L('errs',p._errs);await p.context().close()}
await b.close()})();
