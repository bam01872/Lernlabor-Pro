/* ===== Lernlabor Pro, Paket G1: Fachrichtungen Metall, Elektrotechnik, Chemie, Kunststoff & Kautschuk, Mechatronik, Logistik =====
   Gruppen (grp) und Zusatzthemen (ox) dürfen Themen per Titel nennen; build.py rechnet die Titel in Positionen um.
   keep: Technikthemen aus Metall, die eine Fachrichtung gemeinsam nutzt (gemeinsamer Kern, eigene Beispiele).
   Technik (bei Chemie: Chemische Produktion) wird je Fachrichtung getauscht. Organisation und Führung & Personal sind gemeinsam,
   dazu kommen je Fachrichtung Zusatzthemen und Aufgaben „Im Betrieb“. Gliederung nach den Verordnungen (Elektrotechnik 2004, Chemie 2004). */
const FRD={
 me:{em:'⚙️',first:5,ox:[[],[],[]],
  grp:[['Betriebstechnik',[0,1,2,3,4]],['Fertigungstechnik',[5,6,7,8,9]],['Montagetechnik',[10,11,12,13]]],
  og:['Betriebliches Kostenwesen','Planung, Steuerung & Kommunikation','Arbeits-, Umwelt- & Gesundheitsschutz'],
  tnm:'Betriebs-, Fertigungs- & Montage­technik',
  subt:'Situationsaufgabe Technik: Instandhaltung, Hydraulik, Zerspanung, Werkstoffe, Montage, FMEA',
  hq:[['Situationsaufgabe Technik','schriftlich · Kern: Betriebs-, Fertigungs- und Montagetechnik, dazu Teile aus Organisation und Führung'],['Situationsaufgabe Organisation','schriftlich · Kern: Kostenwesen, Planung und Steuerung, Arbeits-, Umwelt- und Gesundheitsschutz'],['Fachgespräch','mündlich · Kern: Führung und Personal']],hqn:'Nach der Verordnung von 1997 dauern die schriftlichen Situationsaufgaben je mindestens vier Stunden, das Fachgespräch 45 bis 60 Minuten. Maßgeblich sind die Angaben Deiner IHK.'},
 el:{em:'⚡',first:0,ox:[[],[],['Verantwortliche Elektrofachkraft & Organisation']],
  grp:[['Infrastruktursysteme & Betriebstechnik',[0,1,2,3,4,5,6]],['Automatisierungs- & Informationstechnik',[7,8,9,10,11,12,13]]],
  og:['Betriebliches Kostenwesen','Planung, Steuerung & Kommunikation','Arbeits-, Umwelt- & Gesundheitsschutz'],
  tnm:'Infrastruktur­systeme, Betriebs- & Automatisierungs­technik',
  subt:'Situationsaufgabe Technik: Energieversorgung, Schutzmaßnahmen, Leitungen, Antriebe, SPS, Regelung, Netzwerke',
  hq:[['Situationsaufgabe Technik','schriftlich · Kern: Infrastruktursysteme und Betriebstechnik, Automatisierungs- und Informationstechnik'],['Situationsaufgabe Organisation','schriftlich · Kern: Kostenwesen, Planung und Steuerung, Arbeits-, Umwelt- und Gesundheitsschutz'],['Fachgespräch','mündlich · Kern: Führung und Personal, ausgehend von einer dritten Situationsaufgabe']],
  hqn:'Nach der Verordnung von 2004 dauern die schriftlichen Situationsaufgaben je mindestens vier Stunden, das Fachgespräch 45 bis 60 Minuten. Maßgeblich sind die Angaben Deiner IHK.'},
 ch:{em:'🧪',first:0,ox:[[],[],['Störfallvorsorge & Anlagengenehmigung','Stoffrecht: REACH & CLP']],
  grp:[['Verfahrens- & Anlagentechnik',[0,1,2,3,4,5]],['Chemische Prozesse & Verfahren',[6,7,8,9]],['Prozessleittechnik',[10,11,12,13]]],
  og:['Betriebliches Kostenwesen','Information, Planung & Kommunikation','Verantwortliches Handeln (Responsible Care)'],
  tnm:'Verfahrens­technik, chemische Prozesse, Prozessleit­technik',
  subt:'Situationsaufgabe I: Bilanzen, Fördern, Trennen, Reaktionsführung, Anlagenbetrieb, Prozessleittechnik',
  hq:[['Situationsaufgabe I','schriftlich · Kern: Chemische Produktion (Verfahrens- und Anlagentechnik, chemische Prozesse, Prozessleittechnik)'],['Situationsaufgabe II','schriftlich und Fachgespräch · Kern: Organisation, Führung und Kommunikation'],['Spezialisierungsgebiet','schriftlich · Wahlgebiet, in dieser App noch nicht enthalten']],
  hqn:'Nach der Verordnung von 2004 dauert die Situationsaufgabe I mindestens vier Stunden, der schriftliche Teil der Situationsaufgabe II mindestens zwei Stunden, das Fachgespräch 30 bis 45 Minuten. Maßgeblich sind die Angaben Deiner IHK.'},
 ku:{em:'🧴',first:'Kunststoffe: Aufbau & Einteilung',keep:['Hydraulik: Zylinder & Pumpe'],ox:[['Zykluszeit, Ausschuss & Mahlgut kalkulieren'],[],['Brandschutz, Dämpfe & Stäube']],
  grp:[['Betriebstechnik',['Hydraulik: Zylinder & Pumpe','Temperieren & Kühlen von Werkzeugen','Trocknen, Fördern & Dosieren']],
   ['Werkstoffe',['Kunststoffe: Aufbau & Einteilung','Kennwerte & Werkstoffprüfung','Rheologie: Fließverhalten der Schmelze','Additive, Füllstoffe & Einfärben']],
   ['Produktionsprozesse',['Spritzgießen: Zyklus & Einstellung','Werkzeug- & Formenbau','Fehlerbilder am Formteil','Instandhaltung von Maschine & Werkzeug']],
   ['Wahlschwerpunkte (Einblick)',['Extrusion & Blasformen','Bearbeiten & Fügen von Kunststoffen','Kautschuk: Mischung & Vulkanisation','Faserverbund: Laminieren & Aushärten']]],
  og:['Betriebliches Kostenwesen','Planung, Steuerung & Kommunikation','Arbeits-, Umwelt- & Gesundheitsschutz'],
  tnm:'Betriebstechnik, Werkstoffe, Produktions­prozesse',
  subt:'Situationsaufgabe Technik: Werkstoffe, Spritzgießen, Werkzeug, Fehlerbilder, Temperieren, Wahlschwerpunkt',
  hq:[['Situationsaufgabe Technik','schriftlich · Kern: Betriebstechnik, Werkstoffe, Produktionsprozesse und ein gewählter Schwerpunkt (Verarbeitung, Bearbeitung, Kautschuk oder Faserverbund)'],['Situationsaufgabe Organisation','schriftlich · Kern: Kostenwesen, Planung und Steuerung, Arbeits-, Umwelt- und Gesundheitsschutz'],['Fachgespräch','mündlich · Kern: Führung und Personal']],
  hqn:'Nach der Verordnung von 2014 dauert die Situationsaufgabe Technik mindestens 270 Minuten, die Situationsaufgabe Organisation mindestens 240 Minuten, das Fachgespräch 30 bis 45 Minuten. Im Bereich Technik wählst Du einen von vier Schwerpunkten; die App gibt zu jedem nur einen Einblick. Maßgeblich sind die Angaben Deiner IHK.'},
 mt:{em:'🤖',first:0,keep:['Pneumatik & Vakuumtechnik','Automatisierung & Robotik','Inbetriebnahme & Abnahme','Zustandsüberwachung & Schadensanalyse'],ox:[['Instandhaltungsstrategien & Ersatzteile'],[],['Verantwortliche Elektrofachkraft & Organisation']],
  grp:[['Systemintegration',['Mechatronische Systeme & Schnittstellen','Schaltpläne & Schaltungstechnik','Sensoren & Aktoren','SPS: Aufbau & Programmierung','Bussysteme & industrielle Netzwerke','Pneumatik & Vakuumtechnik']],
   ['Technische Applikation',['Positionierantriebe & Servotechnik','Regelungstechnik','Automatisierung & Robotik','Maschinensicherheit: Risikobeurteilung & CE','Funktionale Sicherheit von Steuerungen']],
   ['Kundenunterstützung & Service',['Inbetriebnahme & Abnahme','Systematische Fehlersuche & Diagnose','Zustandsüberwachung & Schadensanalyse','IT-Sicherheit & Datensicherung in der Produktion','Service & Kundenunterstützung']]],
  og:['Betriebliches Kostenwesen','Planung, Steuerung & Kommunikation','Arbeits-, Umwelt- & Gesundheitsschutz'],
  tnm:'Systemintegration, Technische Applikation, Service',
  subt:'Situationsaufgabe Technik: Sensoren, SPS, Antriebe, Sicherheit, Inbetriebnahme, Fehlersuche, Service',
  hq:[['Situationsaufgabe 1','schriftlich · Schwerpunkt Technik (Systemintegration, Technische Applikation, Kundenunterstützung und Service), dazu Organisation und Führung'],['Situationsaufgabe 2','schriftlich · Schwerpunkt Organisation (Kostenwesen, Planung und Steuerung, Arbeitsschutz), dazu Technik und Führung'],['Fachgespräch','mündlich · Kern: Führung und Personal']],
  hqn:'Für Mechatronik gibt es keine bundesweite Verordnung. Jede IHK regelt die Prüfung in einer eigenen Rechtsvorschrift, Dauer und Ablauf können sich deshalb unterscheiden. Maßgeblich sind die Angaben Deiner IHK.'},
 lo:{em:'📦',first:0,ox:[[],[],[]],
  grp:[['Logistikkonzepte',['Logistikstrategien & Lieferkette','Beschaffung & Bestandsmanagement','Distribution & Standortwahl','Informationsfluss: Lagerverwaltung, Barcode, RFID']],
   ['Leistungserstellung',['Wareneingang & Lagerstrategien','Kommissionierung','Flurförderzeuge & Fördertechnik','Ladeeinheiten & Verpackung','Transport & Tourenplanung','Ladungssicherung']],
   ['Prozesssteuerung & -optimierung',['Prozessdaten & Logistikkennzahlen','Incoterms & Zollabwicklung','Gefahrgut & Gefahrstofflager','Prozesse verbessern: Wertstrom & Lean']]],
  ogi:[['Kostenwesen & Logistikcontrolling',[0,1,2,3,4,5,'Logistikkosten & Lagerkennzahlen','Fuhrpark oder Spedition']],['Arbeits-, Umwelt- & Gesundheitsschutz',[10,11,12,13,'Verkehrswege, Staplerverkehr & Ergonomie']],['Planung & Steuerung (ergänzend)',[6,7,8,9,'Rüsten verkürzen (SMED)']]],
  fpg:[['Personalführung',[0,1,2,3]],['Personalentwicklung',[4,5,6]],['Qualitätsmanagement (bei Logistik Teil der Organisation)',[7,8,9]]],
  tnm:'Logistik­konzepte, Leistungs­erstellung, Prozess­steuerung',
  subt:'Situationsaufgabe Logistikprozesse: Bestand, Lager, Kommissionierung, Stapler, Transport, Ladungssicherung',
  hq:[['Situationsaufgabe Logistikprozesse','schriftlich · Kern: Logistikkonzepte, Leistungserstellung, Prozesssteuerung und -optimierung'],['Situationsaufgabe Organisation','schriftlich · Kern: Kostenwesen und Logistikcontrolling, Arbeits-, Umwelt- und Gesundheitsschutz, Qualitätsmanagement'],['Fachgespräch','mündlich · Kern: Führung und Personal']],
  hqn:'Der Logistikmeister hat eine eigene Verordnung und ist kein Industriemeister. Die beiden schriftlichen Situationsaufgaben dauern je mindestens drei Stunden, zusammen höchstens acht. Das Fachgespräch dauert höchstens 45 Minuten nach 30 Minuten Vorbereitung. Welcher Bereich schriftlich und welcher mündlich geprüft wird, regelt Deine IHK.'}};
/* Andere Fachrichtungen: Metall-Technik entfernen, gemeinsam genutzte Themen (keep) behalten, Rechenaufgaben umnummerieren */
if(FR!=='me'){const kp=FRD[FR].keep||[],nm=[],mp={};D.tec.modules.forEach((m,i)=>{if(kp.includes(m.t)){mp[i]=nm.length;nm.push(m)}});
 for(let i=C.length-1;i>=0;i--){const e=C[i];if(e.f==='tec'){if(mp[e.m]!=null)e.m=mp[e.m];else C.splice(i,1)}}
 [CASES,ORAL].forEach(A=>{for(let i=A.length-1;i>=0;i--){const e=A[i];if((Array.isArray(e)?e[0]:e.f)==='tec')A.splice(i,1)}});D.tec.modules=nm}
if(FR==='ch'){D.tec.name='Chemische Produktion';D.tec.kurz='Produktion';D.tec.icon='🧪'}
if(FR==='el')D.tec.icon='⚡';
if(FR==='ku')D.tec.icon='🧴';
if(FR==='mt')D.tec.icon='🤖';
if(FR==='lo'){D.tec.name='Logistikprozesse';D.tec.kurz='Logistik';D.tec.icon='📦';D.org.name='Betriebliche Organisation & Kostenwesen'}
/* Kurzname für Knöpfe und Abzeichen */
const FRK={me:'Metall',el:'Elektrotechnik',ch:'Chemie',ku:'Kunststoff',mt:'Mechatronik',lo:'Logistik'},TKZ=FR==='ch'?'Produktion':FR==='lo'?'Logistik':'Technik';
const TM=o=>D.tec.modules.push(o),OM=o=>D.org.modules.push(o);
/* Aufgaben „Im Betrieb“: mehrstufig, jede Teilaufgabe trägt ihren Bereich (b: tec, org, fp) */
const IB=(t,kz,txt,tasks)=>CASES.push({f:'tec',ib:1,t,kz,txt,tasks});
/* Beispiele aus der eigenen Fachrichtung in den gemeinsamen Themen: kommt als letzter Punkt in „Wichtiges“ */
const FRB=(fr,o)=>{if(fr!==FR)return;['org','fp'].forEach(f=>D[f].modules.forEach(m=>{if(o[m.t])m.pts.push(({el:'In der Elektrotechnik: ',ch:'In der Chemie: ',ku:'In der Kunststoffverarbeitung: ',mt:'In der Mechatronik: ',lo:'In der Logistik: '})[FR]+o[m.t])}))};
