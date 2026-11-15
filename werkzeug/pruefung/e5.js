const {chromium,open,S}=require('./lib');
(async()=>{const b=await chromium.launch();const p=await open(b,'m',{ls:{'lernlabor-pro-tour':'1'}});
await p.evaluate(()=>{go('tec')});await p.waitForTimeout(400);
console.log(await p.evaluate(()=>[...document.querySelectorAll('#view button')].filter(e=>!e.innerText.trim()).map(e=>e.outerHTML.slice(0,300)+' VIS='+(e.offsetParent!==null)+' parent='+e.parentElement.className).join('\n')));
await b.close()})();
