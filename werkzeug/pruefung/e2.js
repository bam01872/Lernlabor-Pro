const {chromium,open,S}=require('./lib');
(async()=>{const b=await chromium.launch();
for(const vk of ['m','d']){
const p=await open(b,vk,{ls:{'lernlabor-pro-tour':'1'}});
await p.screenshot({path:S+`/e2-${vk}-home.png`});
for(const t of ['tec','org','fp','uben','fall','oral','sim','stand','betrieb']){
 try{await p.evaluate(t=>go(t),t);await p.waitForTimeout(500);await p.evaluate(()=>scrollTo(0,0));
 await p.screenshot({path:S+`/e2-${vk}-${t}.png`,fullPage:true});
 const info=await p.evaluate(()=>({h:document.documentElement.scrollHeight,sw:document.documentElement.scrollWidth,cw:document.documentElement.clientWidth,txt:document.querySelector('#view').innerText.slice(0,400).replace(/\n+/g,' | ')}));
 console.log(vk,t,JSON.stringify(info));}catch(e){console.log(vk,t,'ERR',e.message)}
}
console.log(p._errs);}
await b.close()})();
