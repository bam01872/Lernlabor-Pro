const {chromium,open,S}=require('./lib');
const L=(...a)=>console.log(...a);
(async()=>{const b=await chromium.launch();
const p=await open(b,'m',{ls:{'lernlabor-pro-tour':'1'}});
await p.evaluate(()=>{go('tec');scrollTo(0,0)});await p.waitForTimeout(300);
const steps=p.locator('button.on').first().locator('xpath=..').locator('button');
L('Schritte',await steps.allInnerTexts());
for(let k of [1,2,3,0]){await steps.nth(k).click();await p.waitForTimeout(800);L('T6 Schritt',k+1,'scrollY',await p.evaluate(()=>Math.round(scrollY)),'on=',await p.evaluate(()=>[...document.querySelector('button.on').parentElement.children].findIndex(x=>x.classList.contains('on'))+1),'sticky?',await p.evaluate(()=>{const r=document.querySelector('button.on').getBoundingClientRect();return Math.round(r.top)}))}
// T7 Regler
await p.evaluate(()=>{go('tec');});await p.waitForTimeout(300);
const inp=p.locator('input.rgn').first();await inp.scrollIntoViewIfNeeded();
for(const v of ['99999','-5','4,5','','abc','1.250','150']){await inp.fill(v);await inp.press('Enter');await p.waitForTimeout(250);L('T7 Eingabe',JSON.stringify(v),'-> Feld',await inp.inputValue(),'Regler',await p.evaluate(()=>{const r=document.querySelector('#rg-b');return r.value+' ['+r.min+'..'+r.max+' step '+r.step+']'}))}
await inp.fill('77');await inp.blur();await p.waitForTimeout(200);L('T7 blur 77 ->',await p.evaluate(()=>document.querySelector('#rg-b').value));
// T8 Üben answer
await p.evaluate(()=>{go('tec')});await p.waitForTimeout(300);
await p.click('.uebk');await p.waitForTimeout(400);
const ans=p.locator('input[placeholder="Deine Antwort"]').first();await ans.scrollIntoViewIfNeeded();
const y0=await p.evaluate(()=>scrollY);
await ans.fill('abc');await ans.press('Enter');await p.waitForTimeout(300);
L('T8 Enter abc: Rückmeldung',await p.evaluate(()=>{const i=document.querySelector('input[placeholder="Deine Antwort"]');const c=i.closest('div').parentElement;return c.innerText.slice(0,300).replace(/\n/g,' | ')}),'scroll',y0,'->',await p.evaluate(()=>scrollY));
await p.locator('button:text-is("Prüfen")').first().click();await p.waitForTimeout(300);
L('T8 Klick Prüfen abc:',await p.evaluate(()=>{const i=document.querySelector('input[placeholder="Deine Antwort"]');let c=i.parentElement;for(let k=0;k<3;k++)c=c.parentElement;return c.innerText.slice(0,400).replace(/\n/g,' | ')}));
await ans.fill('1.250');await p.locator('button:text-is("Prüfen")').first().click();await p.waitForTimeout(300);
L('T8 1.250:',await p.evaluate(()=>{const i=document.querySelector('input[placeholder="Deine Antwort"]');let c=i.parentElement;for(let k=0;k<3;k++)c=c.parentElement;return c.innerText.slice(0,400).replace(/\n/g,' | ')}));
await p.screenshot({path:S+'/f-ueben.png'});
// MC option click
const opt=p.locator('button.opt').first();await opt.scrollIntoViewIfNeeded();const yb=await p.evaluate(()=>scrollY);await opt.click();await p.waitForTimeout(400);
L('T9 MC Klick: scroll',yb,'->',await p.evaluate(()=>scrollY),'states',await p.evaluate(()=>[...document.querySelector('button.opt').parentElement.children].map(b=>b.className+(b.disabled?'[dis]':'')+(b.getAttribute('aria-pressed')||'')).join(',')),await p.evaluate(()=>document.querySelector('button.opt').parentElement.parentElement.innerText.slice(0,300).replace(/\n/g,' | ')));
await opt.screenshot({path:S+'/f-mc.png'});
await p.evaluate(()=>document.querySelector('button.opt').parentElement.parentElement.scrollIntoView());await p.screenshot({path:S+'/f-mc2.png'});
// Vermuten
await p.evaluate(()=>{go('tec');scrollTo(0,0)});await p.waitForTimeout(300);await p.click('.predx');await p.waitForTimeout(400);await p.screenshot({path:S+'/f-pred.png'});
L('T10 Vermuten',await p.evaluate(()=>document.querySelector('.predx')?.parentElement.innerText.slice(0,300).replace(/\n/g,' | ')));
L('errs',p._errs);await b.close()})();
