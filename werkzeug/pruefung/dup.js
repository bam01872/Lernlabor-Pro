const {chromium,open,S}=require('./lib');const fs=require('fs');
(async()=>{const b=await chromium.launch();const out=[];
for(const fr of ['me','el','ch','ku','mt','lo']){const p=await open(b,'d',{q:'?fr='+fr,ls:{'lernlabor-pro-tour':'1'}});
 const list=await p.evaluate(()=>FACH.flatMap(f=>D[f].modules.map((m,i)=>[f,i,m.t])));
 for(const [f,i,t] of list){await p.evaluate(([f,i])=>{modSel[f]=i;go(f)},[f,i]);await p.waitForTimeout(200);
  const r=await p.evaluate(()=>{const v=document.querySelector('#view');const svgs=[...v.querySelectorAll('svg')].filter(s=>s.getBoundingClientRect().width>150);
   const sig=s=>[...s.querySelectorAll('text')].map(t=>t.textContent.replace(/[\d,.\s−-]+/g,'#')).join('|');
   const sec=s=>{const c=s.closest('.panel,section,.card');return (c&&c.querySelector('h2,h3')?.innerText||'')+'/'+(s.parentElement.className)};
   return svgs.map(s=>({sec:sec(s),sig:sig(s),txt:[...s.querySelectorAll('text')].map(t=>t.textContent).join(' ').slice(0,200),w:Math.round(s.getBoundingClientRect().width)}))});
  // pairs
  const sk=r.filter(x=>!/Werte einstellen/.test(x.sec)), rg=r.filter(x=>/Werte einstellen/.test(x.sec));
  let dup=null;const jac=(a,c)=>{const A=new Set(a.sig.split("|").filter(x=>x.length>2)),B=new Set(c.sig.split("|").filter(x=>x.length>2));const i=[...A].filter(x=>B.has(x)).length;return A.size+B.size?i/(A.size+B.size-i):0};let jm=0;for(const a of sk)for(const c of rg)jm=Math.max(jm,jac(a,c));for(const a of sk)for(const c of rg){if(a.sig&&a.sig===c.sig){dup={sk:a.txt,rg:c.txt}}}
  out.push({fr,f,i,t,n:r.length,secs:r.map(x=>x.sec),dup,jm});
 }await p.context().close()}
fs.writeFileSync(S+'/dup.json',JSON.stringify(out));
const T=out;console.log('Themen',T.length,'mit Regler',T.filter(o=>o.secs.some(s=>/Werte/.test(s))).length,'identische Skizze',T.filter(o=>o.dup).length);
for(const o of T.filter(o=>o.dup))console.log(o.fr,o.t,'| SK:',o.dup.sk.slice(0,90),'| RG:',o.dup.rg.slice(0,90));
await b.close()})();
