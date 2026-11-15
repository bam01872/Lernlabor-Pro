const {chromium,open,S}=require('./lib');const fs=require('fs');
const d=JSON.parse(fs.readFileSync(S+'/scan-m-meelchkumtlo.json')).filter(o=>o.t&&o.slash.some(x=>!x.startsWith('SVG')));
(async()=>{const b=await chromium.launch();const pages={};const C={};const ex=[];
for(const o of d){if(!pages[o.fr])pages[o.fr]=await open(b,'m',{q:'?fr='+o.fr,ls:{'lernlabor-pro-tour':'1'}});const p=pages[o.fr];
 await p.evaluate(([f,i])=>{modSel[f]=i;go(f)},[o.f,o.i]);await p.waitForTimeout(250);
 const r=await p.evaluate(()=>{document.querySelectorAll('details').forEach(d=>{if(!d.querySelector('.mm'))d.open=true});const res=[];const tw=document.createTreeWalker(document.querySelector('#view'),NodeFilter.SHOW_TEXT);let n;while(n=tw.nextNode()){if(n.parentElement.closest('svg,script,style'))continue;const m=n.textContent.match(/(?:\d|\b)\s?(?:€|[a-zA-Zμ°²³]{1,4})\/(?:[a-zA-Z]{1,4}|\(|\d)/g);if(m){const box=n.parentElement.closest('details')?.querySelector('summary')?.innerText||n.parentElement.closest('[class]')?.className;res.push([box,n.parentElement.tagName,n.textContent.slice(0,70)])}}return res});
 for(const x of r){C[x[0]]=(C[x[0]]||0)+1;if(ex.length<25)ex.push(o.fr+' '+o.t+' :: '+x.join(' | '))}}
console.log(C);console.log(ex.join('\n'));await b.close()})();
