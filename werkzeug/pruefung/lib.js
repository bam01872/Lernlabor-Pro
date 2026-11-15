const {chromium}=require('playwright');
const S=__dirname;
const URL=process.env.URL||'http://localhost:8765/';
const VP={s:{width:320,height:568,isMobile:true,hasTouch:true},m:{width:390,height:844,isMobile:true,hasTouch:true},t:{width:768,height:1024,isMobile:true,hasTouch:true},d:{width:1366,height:768,isMobile:false,hasTouch:false}};
async function open(b,vk='m',opt={}){const v=VP[vk];const c=await b.newContext({viewport:{width:v.width,height:v.height},deviceScaleFactor:1,isMobile:v.isMobile,hasTouch:v.hasTouch,colorScheme:opt.dark?'dark':'light'});
 if(opt.ls)await c.addInitScript(o=>{try{if(!sessionStorage.getItem('_i')){sessionStorage.setItem('_i','1');for(const k in o)localStorage.setItem(k,o[k])}}catch(e){}},opt.ls);
 const p=await c.newPage();p._errs=[];p.on('pageerror',e=>p._errs.push('pageerror: '+e.message));p.on('console',m=>{if(m.type()==='error'||m.type()==='warning')p._errs.push(m.type()+': '+m.text())});
 await p.goto(URL+(opt.q||'')+(opt.hash||''));await p.waitForTimeout(opt.wait||900);if(!opt.tips)await p.addStyleTag({content:'.tiph{display:none!important}'});return p}
module.exports={chromium,S,URL,VP,open};
