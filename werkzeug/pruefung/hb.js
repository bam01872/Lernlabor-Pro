const {chromium,open,S}=require('./lib');
(async()=>{const b=await chromium.launch();for(const vk of ['s','m']){const p=await open(b,vk,{ls:{'lernlabor-pro-tour':'1'}});
const el=await p.$('text=Handlungsbereiche');await el.scrollIntoViewIfNeeded();const bb=await el.boundingBox();await p.screenshot({path:S+`/hb-${vk}.png`,clip:{x:0,y:bb.y-10,width:vk=='s'?320:390,height:260}});
const fr=await p.$('text=Deine Fachrichtung');await fr.scrollIntoViewIfNeeded();const b2=await fr.boundingBox();await p.screenshot({path:S+`/fr-${vk}.png`,clip:{x:0,y:b2.y-10,width:vk=='s'?320:390,height:160}});await p.context().close()}
await b.close()})();
