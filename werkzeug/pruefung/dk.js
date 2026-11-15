const {chromium,open,S}=require('./lib');
(async()=>{const b=await chromium.launch();const p=await open(b,'m',{dark:1,ls:{'lernlabor-pro-tour':'1'}});
await p.evaluate(()=>{go('uben');scrollTo(0,0)});await p.waitForTimeout(400);await p.screenshot({path:S+'/dk-uben.png'});
console.log(await p.evaluate(()=>{const e=[...document.querySelectorAll('button.btn')].find(b=>b.innerText.includes('Nächste'));const s=getComputedStyle(e);return s.color+' / '+s.backgroundColor+' / '+s.backgroundImage}));
console.log(await p.evaluate(()=>{const h=document.querySelector('h1.brand');return h.outerHTML.slice(0,400)}));
await b.close()})();
