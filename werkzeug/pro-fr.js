/* ===== Lernlabor Pro, Paket G1: Fachrichtungen Metall, Elektrotechnik, Chemie =====
   Technik (bei Chemie: Chemische Produktion) wird je Fachrichtung getauscht. Organisation und Führung & Personal sind gemeinsam,
   dazu kommen je Fachrichtung Zusatzthemen und Aufgaben „Im Betrieb“. Gliederung nach den Verordnungen (Elektrotechnik 2004, Chemie 2004). */
const FRD={
 me:{em:'⚙️',first:5,orgx:[],
  grp:[['Betriebstechnik',[0,1,2,3,4]],['Fertigungstechnik',[5,6,7,8,9]],['Montagetechnik',[10,11,12,13]]],
  og:['Betriebliches Kostenwesen','Planung, Steuerung & Kommunikation','Arbeits-, Umwelt- & Gesundheitsschutz'],
  tnm:'Betriebs-, Fertigungs- & Montage­technik',
  subt:'Situationsaufgabe Technik: Instandhaltung, Hydraulik, Zerspanung, Werkstoffe, Montage, FMEA',
  hq:[['Situationsaufgabe Technik','schriftlich · Kern: Betriebs-, Fertigungs- und Montagetechnik, dazu Teile aus Organisation und Führung'],['Situationsaufgabe Organisation','schriftlich · Kern: Kostenwesen, Planung und Steuerung, Arbeits-, Umwelt- und Gesundheitsschutz'],['Fachgespräch','mündlich · Kern: Führung und Personal']],hqn:''},
 el:{em:'⚡',first:0,orgx:[14],
  grp:[['Infrastruktursysteme & Betriebstechnik',[0,1,2,3,4,5,6]],['Automatisierungs- & Informationstechnik',[7,8,9,10,11,12,13]]],
  og:['Betriebliches Kostenwesen','Planung, Steuerung & Kommunikation','Arbeits-, Umwelt- & Gesundheitsschutz'],
  tnm:'Infrastruktur­systeme, Betriebs- & Automatisierungs­technik',
  subt:'Situationsaufgabe Technik: Energieversorgung, Schutzmaßnahmen, Leitungen, Antriebe, SPS, Regelung, Netzwerke',
  hq:[['Situationsaufgabe Technik','schriftlich · Kern: Infrastruktursysteme und Betriebstechnik, Automatisierungs- und Informationstechnik'],['Situationsaufgabe Organisation','schriftlich · Kern: Kostenwesen, Planung und Steuerung, Arbeits-, Umwelt- und Gesundheitsschutz'],['Fachgespräch','mündlich · Kern: Führung und Personal, ausgehend von einer dritten Situationsaufgabe']],
  hqn:'Nach der Verordnung von 2004 dauern die schriftlichen Situationsaufgaben je mindestens vier Stunden, das Fachgespräch 45 bis 60 Minuten. Maßgeblich sind die Angaben Deiner IHK.'},
 ch:{em:'🧪',first:0,orgx:[14,15],
  grp:[['Verfahrens- & Anlagentechnik',[0,1,2,3,4,5]],['Chemische Prozesse & Verfahren',[6,7,8,9]],['Prozessleittechnik',[10,11,12,13]]],
  og:['Betriebliches Kostenwesen','Information, Planung & Kommunikation','Verantwortliches Handeln (Responsible Care)'],
  tnm:'Verfahrens­technik, chemische Prozesse, Prozessleit­technik',
  subt:'Situationsaufgabe I: Bilanzen, Fördern, Trennen, Reaktionsführung, Anlagenbetrieb, Prozessleittechnik',
  hq:[['Situationsaufgabe I','schriftlich · Kern: Chemische Produktion (Verfahrens- und Anlagentechnik, chemische Prozesse, Prozessleittechnik)'],['Situationsaufgabe II','schriftlich und Fachgespräch · Kern: Organisation, Führung und Kommunikation'],['Spezialisierungsgebiet','schriftlich · Wahlgebiet, in dieser App noch nicht enthalten']],
  hqn:'Nach der Verordnung von 2004 dauert die Situationsaufgabe I mindestens vier Stunden, der schriftliche Teil der Situationsaufgabe II mindestens zwei Stunden, das Fachgespräch 30 bis 45 Minuten. Maßgeblich sind die Angaben Deiner IHK.'}};
if(FR!=='me'){[C,CASES,ORAL].forEach(A=>{for(let i=A.length-1;i>=0;i--){const e=A[i];if((Array.isArray(e)?e[0]:e.f)==='tec')A.splice(i,1)}});D.tec.modules=[]}
if(FR==='ch'){D.tec.name='Chemische Produktion';D.tec.kurz='Produktion';D.tec.icon='🧪'}
if(FR==='el')D.tec.icon='⚡';
const TM=o=>D.tec.modules.push(o),OM=o=>D.org.modules.push(o);
/* Aufgaben „Im Betrieb“: mehrstufig, jede Teilaufgabe trägt ihren Bereich (b: tec, org, fp) */
const IB=(t,kz,txt,tasks)=>CASES.push({f:'tec',ib:1,t,kz,txt,tasks});
/* Beispiele aus der eigenen Fachrichtung in den gemeinsamen Themen: kommt als letzter Punkt in „Wichtiges“ */
const FRB=(fr,o)=>{if(fr!==FR)return;['org','fp'].forEach(f=>D[f].modules.forEach(m=>{if(o[m.t])m.pts.push((FR==='el'?'In der Elektrotechnik: ':'In der Chemie: ')+o[m.t])}))};
