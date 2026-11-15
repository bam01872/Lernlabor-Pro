const {chromium,open,S}=require('./lib');
(async()=>{const b=await chromium.launch();const p=await open(b,'m',{ls:{'lernlabor-pro-tour':'1'}});await p.evaluate(()=>go('stand'));await p.waitForTimeout(300);
console.log(await p.evaluate(()=>{const t=document.querySelector('#view table');const w=t.parentElement;const s=getComputedStyle(w);return {th:[...t.querySelectorAll('th')].map(x=>x.innerText),tw:t.scrollWidth,pw:w.clientWidth,ov:s.overflowX,cls:w.className}}));
await b.close()})();
