const {chromium,open,S}=require('./lib');
(async()=>{const b=await chromium.launch();const p=await open(b,'m',{q:'?fr=ch',ls:{'lernlabor-pro-tour':'1'}});
await p.evaluate(()=>{modSel.tec=14;go('tec')});await p.waitForTimeout(400);
const t=p.locator('input.rgn').nth(1);await t.fill('60');await t.press('Enter');await p.waitForTimeout(300);
console.log(await p.evaluate(()=>[...document.querySelectorAll('.simsv text')].map(e=>e.textContent).join(' ')));
console.log(await p.evaluate(()=>[...document.querySelectorAll('.simsv ~ *')].map(e=>e.innerText).join(' || ').slice(0,600)));
await b.close()})();
