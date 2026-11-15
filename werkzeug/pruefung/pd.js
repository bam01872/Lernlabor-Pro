const {chromium,open,S}=require('./lib');
(async()=>{const b=await chromium.launch();const p=await open(b,'m',{ls:{'lernlabor-pro-tour':'1'}});let k=90;const sel=[];
for(const t of ['Maschinenstundensatz','Kostenvergleich & kritische Menge','Zerspanung: Drehen','Kapazitäts- und Terminplanung']){await p.evaluate(t=>{for(const f of FACH){const i=D[f].modules.findIndex(m=>m.t===t);if(i>=0){modSel[f]=i;go(f)}}},t);await p.waitForTimeout(300);k++;
await (await p.$('#view .skb')).screenshot({path:`${S}/pairs/${k}-a.png`});await (await p.$('#view .simsv')).screenshot({path:`${S}/pairs/${k}-b.png`});sel.push({n:String(k),fr:'me',t,jm:0})}
const fs=require('fs');const all=JSON.parse(fs.readFileSync(S+'/pairs/sel.json'));fs.writeFileSync(S+'/pairs/sel.json',JSON.stringify(all.concat(sel)));console.log(all.length);await b.close()})();
