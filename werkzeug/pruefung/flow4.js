const {chromium,open,S}=require('./lib');
const {chromium:_c}=require("./lib");
(async()=>{const b=await chromium.launch();
const p=await open(b,'m',{ls:{'lernlabor-pro-tour':'1'}});
await p.evaluate(()=>{go('tec');scrollTo(0,0)});await p.waitForTimeout(300);await p.click('.uebk');await p.waitForTimeout(500);
console.log(await p.evaluate(()=>[...document.querySelector('.uebk').parentElement.querySelectorAll('input,button')].filter(e=>e.offsetParent).map(e=>e.tagName+'.'+e.className+':'+(e.placeholder||e.innerText).slice(0,30)+':'+(e.getAttribute('inputmode')||'')+':'+(e.type)).join('\n')));
await b.close()})();
