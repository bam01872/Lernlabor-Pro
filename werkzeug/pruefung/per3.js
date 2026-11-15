const {chromium,open,S}=require('./lib');const L=(...a)=>console.log(...a);
(async()=>{const b=await chromium.launch();const p=await open(b,'m',{ls:{'lernlabor-pro-tour':'1'}});
await p.evaluate(()=>go('betrieb'));await p.waitForTimeout(300);
await p.locator('button',{hasText:'Aufgabe öffnen'}).nth(1).click();await p.waitForTimeout(400);
L(await p.evaluate(()=>({sel:document.querySelector('#fsel')?.selectedOptions[0]?.text,zur:[...document.querySelectorAll('#view button,#view a')].filter(b=>/Zurück|Im Betrieb/.test(b.innerText)).map(b=>b.innerText),navOn:[...document.querySelectorAll('#fs button')].map(b=>b.className+':'+b.innerText.replace(/\n/g,'')).join(' '),scrollY})));
await p.screenshot({path:S+'/betr-open.png'});
await b.close()})();
