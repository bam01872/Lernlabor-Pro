const {chromium,open,S}=require('./lib');
(async()=>{const b=await chromium.launch();
for(const [u,tag] of [['http://localhost:8765/','main'],['http://localhost:8766/','br']]){process.env.URL=u;
const c=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true});await c.addInitScript(()=>{try{localStorage.setItem('lernlabor-pro-tour','1');localStorage.setItem('lernlabor-pro-tips',JSON.stringify({tec:1,org:1,fp:1,uben:1,fall:1,oral:1,sim:1,stand:1,betrieb:1,home:1}))}catch(e){}});const p=await c.newPage();await p.goto(u+'?fr=ch');await p.waitForTimeout(700);await p.addStyleTag({content:'.tiph{display:none!important}'});
await p.evaluate(()=>{for(const f of FACH){const k=D[f].modules.findIndex(m=>m.t==='Thermische Trennverfahren');if(k>=0){modSel[f]=k;go(f)}}});await p.waitForTimeout(500);
await (await p.$('#view .skb svg')).screenshot({path:S+`/tt-${tag}.png`});await c.close()}
await b.close()})();
