const {chromium,open,S}=require('./lib');const fs=require('fs');
fs.mkdirSync(S+'/pairs',{recursive:true});
const d=JSON.parse(fs.readFileSync(S+'/dup.json'));const seen=new Set();const sel=[];
for(const o of d.sort((a,b)=>(b.jm||0)-(a.jm||0))){if(o.jm>=0.3&&!seen.has(o.t)){seen.add(o.t);sel.push(o)}}
(async()=>{const b=await chromium.launch();const pages={};let k=0;
for(const o of sel){if(!pages[o.fr])pages[o.fr]=await open(b,'m',{q:'?fr='+o.fr,ls:{'lernlabor-pro-tour':'1'}});const p=pages[o.fr];
 await p.evaluate(([f,i])=>{modSel[f]=i;go(f)},[o.f,o.i]);await p.waitForTimeout(300);
 const a=await p.$('#view .skb');const c=await p.$('#view .simsv');
 k++;const n=String(k).padStart(2,'0');
 if(a)await a.screenshot({path:`${S}/pairs/${n}-a.png`});if(c)await c.screenshot({path:`${S}/pairs/${n}-b.png`});
 o.n=n;}
fs.writeFileSync(S+'/pairs/sel.json',JSON.stringify(sel.map(o=>({n:o.n,fr:o.fr,f:o.f,i:o.i,t:o.t,jm:o.jm,dup:!!o.dup}))));
await b.close()})();
