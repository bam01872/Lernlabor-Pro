const {chromium,open,S}=require('./lib');const L=(...a)=>console.log(...a);
(async()=>{const b=await chromium.launch();const p=await open(b,'m',{ls:{'lernlabor-pro-tour':'1'}});
await p.evaluate(()=>go('fall'));await p.waitForTimeout(300);
await p.locator('textarea').first().fill('Meine Antwort 123');await p.waitForTimeout(200);
await p.evaluate(()=>go('home'));await p.waitForTimeout(200);await p.evaluate(()=>go('fall'));await p.waitForTimeout(300);
L('Fall-Antwort nach Tabwechsel:',JSON.stringify(await p.locator('textarea').first().inputValue()));
L('textarea label',await p.evaluate(()=>{const t=document.querySelector('textarea');return t.getAttribute('aria-label')||t.labels?.[0]?.innerText||t.placeholder||'NONE'}));
// regler value persist when switching topic
await p.evaluate(()=>{modSel.tec=0;go('tec')});await p.waitForTimeout(300);const i=p.locator('input.rgn').first();await i.fill('150');await i.press('Enter');
await p.evaluate(()=>{modSel.tec=1;go('tec')});await p.waitForTimeout(200);await p.evaluate(()=>{modSel.tec=0;go('tec')});await p.waitForTimeout(300);
L('Reglerwert nach Themenwechsel:',await p.locator('input.rgn').first().inputValue());
// scroll position after topic switch via Wischleiste
await p.evaluate(()=>scrollTo(0,900));await p.click('.thw').catch(()=>{});
L('nach Thema wechseln klick scrollY',await p.evaluate(()=>scrollY));
await p.evaluate(()=>{scrollTo(0,0)});await p.click('.thw');await p.waitForTimeout(300);
const btn=p.locator('.wl button:visible',{hasText:'Pneumatik'}).first();L('cnt',await btn.count());if(await btn.count()){await btn.click();await p.waitForTimeout(500);L('nach Themenwahl: Thema',await p.evaluate(()=>document.querySelector('#view h2')?.innerText),'scrollY',await p.evaluate(()=>scrollY),'sheet offen',await p.evaluate(()=>document.querySelector('.thw').getAttribute('aria-expanded')))}
// Ich tab bottom nav highlight on fall
await b.close()})();
