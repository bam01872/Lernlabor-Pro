const {chromium,open,S}=require('./lib');
(async()=>{const b=await chromium.launch();const p=await open(b,'m',{ls:{'lernlabor-pro-tour':'1'}});
await p.evaluate(()=>{go('tec')});await p.waitForTimeout(400);
console.log(await p.evaluate(()=>[...document.querySelectorAll('#view button,#view summary,#view input,#view select,#fs button,header button,header input')].map(e=>e.tagName+'#'+e.id+'.'+e.className+'|'+(e.innerText||e.placeholder||e.value||e.getAttribute('aria-label')||'').replace(/\s+/g,' ').slice(0,40)+'|'+(e.getAttribute('aria-label')||'')).join('\n')));
await b.close()})();
