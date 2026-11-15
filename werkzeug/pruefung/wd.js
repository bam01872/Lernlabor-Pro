const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();for(const w of [393,412,430,768]){const c=await b.newContext({viewport:{width:w,height:740},isMobile:true,hasTouch:true});await c.addInitScript(()=>{try{localStorage.setItem('lernlabor-pro-tour','1')}catch(e){}});const p=await c.newPage();await p.goto('http://localhost:8765/');await p.waitForTimeout(700);
const r={};for(const t of ['home','uben','oral','sim','stand','tec']){await p.evaluate(t=>go(t),t);await p.waitForTimeout(150);r[t]=await p.evaluate(()=>document.documentElement.scrollWidth)}
await p.evaluate(()=>go('tec'));const s=await p.$('summary:has-text("Mehr")');await s.scrollIntoViewIfNeeded();await s.click();await p.waitForTimeout(200);r.mehr=await p.evaluate(()=>document.documentElement.scrollWidth);
console.log(w,JSON.stringify(r));await c.close()}await b.close()})();
