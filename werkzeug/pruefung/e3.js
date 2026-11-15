const {chromium,open,S}=require('./lib');
(async()=>{const b=await chromium.launch();const p=await open(b,'m',{ls:{'lernlabor-pro-tour':'1'}});
console.log(await p.evaluate(()=>{const o={};for(const f of FACH){o[f]={n:D[f].modules.length,keys:Object.keys(D[f].modules[0]),first:D[f].modules[0].t||D[f].modules[0].title||D[f].modules[0].name}};o.modSel=modSel;o.FR=typeof FR!=='undefined'?FR:null;o.grp=Object.keys(GRP);return o}));
await b.close()})();
