const {chromium,open,S}=require('./lib');
(async()=>{const b=await chromium.launch();const p=await open(b,'m',{q:'?fr=ch',ls:{'lernlabor-pro-tour':'1'}});
const i=await p.evaluate(()=>{for(const f of FACH){const k=D[f].modules.findIndex(m=>m.t==='Gasgesetze');if(k>=0){modSel[f]=k;go(f);return f+k}}});await p.waitForTimeout(400);
console.log(i,await p.evaluate(()=>[...document.querySelectorAll('.simsv ~ * label, .ctl label, .rgl, [class*=rg] label')].map(e=>e.innerText).join(' | ')));
console.log(await p.evaluate(()=>[...document.querySelectorAll('input.rgn')].map(e=>e.getAttribute('aria-label')+'='+e.value).join(' ; ')));
console.log(await p.evaluate(()=>document.querySelector('.aufk')?.innerText));
console.log(await p.evaluate(()=>document.querySelector('.skb').innerText));
await b.close()})();
