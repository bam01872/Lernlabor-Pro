const {chromium,open,S}=require('./lib');
(async()=>{const b=await chromium.launch();
const go=async(p,f,t)=>{await p.evaluate(([f,t])=>{const k=D[f].modules.findIndex(m=>m.t===t);modSel[f]=k;go(f);scrollTo(0,0)},[f,t]);await p.waitForTimeout(500)};
for(const [vk,dark] of [['s',0],['m',0],['m',1],['t',0],['d',0],['d',1]]){const p=await open(b,vk,{dark,ls:{'lernlabor-pro-tour':'1'}});const tag=vk+(dark?'-dark':'');
 await go(p,'tec','Hydraulik: Zylinder & Pumpe');await p.screenshot({path:`${S}/shots/${tag}-hydraulik.png`,fullPage:true});
 await p.evaluate(()=>{go('home');scrollTo(0,0)});await p.waitForTimeout(300);await p.screenshot({path:`${S}/shots/${tag}-home.png`,fullPage:true});
 if(vk==='m'&&!dark){for(const t of ['uben','fall','oral','sim','betrieb']){await p.evaluate(t=>{go(t);scrollTo(0,0)},t);await p.waitForTimeout(400);await p.screenshot({path:`${S}/shots/${tag}-${t}.png`,fullPage:true})}}
 await p.context().close()}
await b.close()})();
