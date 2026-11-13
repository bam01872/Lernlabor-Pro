#!/usr/bin/env python3
"""Baut den Lernlabor-Pro-Prototyp aus dem Meisterlabor-Gerüst (Lernlabor-Seitenaufbau).
Aufruf: python3 build.py <meisterlabor/index.html> <ziel.html>"""
import re,sys,os
W=os.path.dirname(os.path.abspath(__file__))
src,dst=sys.argv[1],sys.argv[2]
s=open(src,encoding='utf-8').read()
rd=lambda n:open(os.path.join(W,n),encoding='utf-8').read()
def rep(a,b,cnt=1,rx=False):
    global s
    if rx:
        n=len(re.findall(a,s,flags=re.S))
        assert n>=1,('fehlt',a[:60]);s=re.sub(a,lambda m:b,s,count=cnt,flags=re.S)
    else:
        assert a in s,('fehlt',a[:60]);s=s.replace(a,b) if cnt==0 else s.replace(a,b,cnt)
# Daten
rep("const FACH=['reha','beha','mikp','zib'];",rd('pro-data.js')+'\n'+rd('pro-pakete.js')+"\nconst FACH=['tec','org','fp'];")
rep("modSel={reha:0,beha:0,mikp:0,zib:0}","modSel={tec:0,org:0,fp:0}")
rep("const FEM={reha:'⚖️',beha:'💶',mikp:'📊',zib:'🤝'}","const FEM={tec:'⚙️',org:'📋',fp:'🤝'}")
rep(r"const GRP=\{reha:.*?\nconst SUBT=\{[^\n]*\n",
"""ICO.tec=SV('<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/><circle cx="12" cy="12" r="6.5"/>');
ICO.org=SV('<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2.8h6V4M8.5 10h7M8.5 14h7M8.5 18h4"/>');ICO.fp=ICO.zib;
const GRP={tec:[['Betriebstechnik',[0,1,2,3,4]],['Fertigungstechnik',[5,6,7,8,9]],['Montagetechnik',[10,11,12,13]]],
 org:[['Betriebliches Kostenwesen',[0,1,2,3,4,5]],['Planung, Steuerung & Kommunikation',[6,7,8,9]],['Arbeits-, Umwelt- & Gesundheitsschutz',[10,11,12,13]]],
 fp:[['Personalführung',[0,1,2,3]],['Personalentwicklung',[4,5,6]],['Qualitätsmanagement',[7,8,9]]]};
const TNM={tec:'Betriebs-, Fertigungs- & Montage\\u00adtechnik',org:'Kosten, Planung, Arbeitsschutz',fp:'Personal\\u00adführung, -entwicklung, QM'};
const SUBT={tec:'Situationsaufgabe Technik: Instandhaltung, Hydraulik, Zerspanung, Werkstoffe, Montage, FMEA',org:'Situationsaufgabe Organisation: Kostenwesen, Planung und Steuerung, Arbeits-, Umwelt- und Gesundheitsschutz',fp:'Fachgespräch und Teil beider Situationsaufgaben: Führung, Personalentwicklung, Qualität'};
Object.assign(ERK,{'Zerspanung: Drehen':['Alle Rechnungen hängen an zwei Größen: Wie groß ist der Span (a_p · f), und wie schnell wird er abgenommen (v_c)? Daraus folgen Kraft, Leistung und Zeit.','Vor dem Schruppen prüfst Du, ob die Maschine die Leistung schafft. Bei Überlast senkst Du zuerst Schnitttiefe oder Vorschub, nicht die Schnittgeschwindigkeit, weil sonst die Standzeit leidet.',['v_c in m/min direkt in P = F · v einsetzen: Faktor 60 vergessen.','Durchmesser in m statt mm in die Drehzahlformel einsetzen.','P_c mit P_zu verwechseln: Der Wirkungsgrad macht die nötige Leistung größer, nicht kleiner.','An- und Überlauf beim Vorschubweg vergessen.']],
'Hydraulik: Zylinder & Pumpe':['Hydraulik tauscht Kraft gegen Weg: Ein großer Kolben drückt stark, fährt aber langsam. Die Leistung p · Q legt fest, was zusammen möglich ist.','Bei der Auswahl eines Zylinders prüfst Du Kraft mit Reserve, Geschwindigkeit, Pumpenleistung und den höchsten zulässigen Druck aller Bauteile.',['bar nicht in N/cm² umgerechnet.','Kolbenfläche mit dem Radius statt dem Durchmesser falsch gerechnet.','Beim Einfahren die volle Kolbenfläche statt der Ringfläche genommen.','l/min nicht in cm³/min oder m³/s umgerechnet.']],
'Maschinenstundensatz':['Der Stundensatz ist eine Verteilungsrechnung: Feste Jahreskosten werden auf Laufstunden verteilt. Deshalb ist die geplante Laufzeit die wichtigste Annahme.','Mit dem Stundensatz kalkulierst Du Aufträge und vergleichst Maschinen. Weicht die tatsächliche Laufzeit stark ab, stimmt die Kalkulation nicht mehr.',['Zinsen mit dem vollen statt dem halben Anschaffungswert gerechnet.','Energie als feste Jahreskosten behandelt, obwohl sie von der Laufzeit abhängt.','Raumkosten pro Monat nicht mal 12 genommen.','Laufzeit mit Anwesenheitszeit verwechselt.']],
'Kostenvergleich & kritische Menge':['Die kritische Menge ist der Schnittpunkt zweier Kostengeraden. Links davon gewinnt das Verfahren mit kleinen Fixkosten, rechts das mit kleinen Stückkosten.','Du rechnest nicht nur, sondern entscheidest: Liegt die geplante Menge sicher über der kritischen Menge? Was passiert, wenn die Menge sinkt?',['Zähler und Nenner vertauscht.','Stückkosten statt Fixkosten im Zähler.','Kritische Menge nicht aufgerundet, obwohl es um ganze Stücke geht.','Nur gerechnet und keine Entscheidung begründet.']],
'Mitarbeitergespräche führen':['Ein Gespräch wirkt, wenn es vorbereitet ist, die Sicht des Mitarbeiters ernst nimmt und mit einer klaren Vereinbarung endet.','Im Fachgespräch fragt der Prüfer oft: Wie gehst Du vor? Antworte in Schritten und beziehe Dich auf die Situation.',['Allgemein bleiben statt konkrete Beobachtungen zu nennen.','Nur reden, nicht zuhören.','Ohne Vereinbarung und Folgetermin auseinandergehen.','Kritik vor dem Team äußern.']]});
""",rx=True)
rep(r"f:\{reha:\[.*?x:\{[^}]*\}\};","f:{tec:[],org:[],fp:[]},x:{}};",rx=True)
rep("n:'IM TZ 11/2026 Regenstauf'","n:''")
rep(r"const NEU='.*?';\n","const NEU='<h3>🆕 Vorschau 2 (13.11.2026)</h3><ul><li>Pakete O1 Kostenwesen, T1 Instandhaltung &amp; Zerspanung, T2 Fluidtechnik &amp; Antriebe, F1 Personalführung: zwölf neue Themen.</li><li>17 fertige Themen mit Vermuten, Kurz erklärt, Skizze, Merkbox, Check-Fragen, die meisten mit Reglern und Auftrag.</li><li>Einleitung im Blocksatz wie im Lernlabor, Hydraulik im Lernlabor-Stil, Drehwerkzeug sitzt immer am Werkstück.</li></ul>';\n",rx=True)
rep("lf=L&&D[L[0]]&&D[L[0]].modules[L[1]]?L:['reha',0]","lf=L&&D[L[0]]&&D[L[0]].modules[L[1]]?L:['tec',5]")
rep("reha:()=>fach('reha'),beha:()=>fach('beha'),mikp:()=>fach('mikp'),zib:()=>fach('zib')","tec:()=>fach('tec'),org:()=>fach('org'),fp:()=>fach('fp')")
rep("const res=()=>t.dt?fD(t.dt):nf(t.a,t.d,t.ng)","const res=()=>t.dt?fD(t.dt):nz(t.a,t.d)")
rep('Die mündliche Ergänzungsprüfung dauert höchstens 20 Minuten je Bereich und wird angeboten, wenn höchstens zwei Bereiche mangelhaft sind. Antworte laut, bevor Du die Antwort anzeigst.','Im situationsbezogenen Fachgespräch erklärst Du, wie Du in einer betrieblichen Lage vorgehst. Der Schwerpunkt liegt auf Führung und Personal. Antworte laut und in Schritten, bevor Du die Antwort anzeigst.')
# P0: keine KI im Pilot
rep("['kitutor','🤖 KI-Tutor'],['kipruf','🎤 KI-Prüfer'],","")
rep("['🎓','Prüfen',['uben','fall','oral','sim','kipruf']]","['🎓','Prüfen',['uben','fall','oral','sim']]")
rep("['👤','Ich',['stand','send','kitutor','tour'","['👤','Ich',['stand','send','tour'")
rep(r" \{const kb=el\('<button class=\"btn sec\">🤖 Dazu die KI fragen</button>',''\);kb\.firstChild\.onclick=\(\)=>\{kiPre=\{f,m\};go\('kitutor'\)\};mbx\.append\(kb\)\}","",rx=True)
rep(r"const kd=el\('<summary>🤖 Dazu die KI fragen</summary>.*?ns\.append\(kdd\);","",rx=True)
rep('Aufgebaut wie die IHK-Klausur: situationsbezogene Fallaufgaben mit Rechenteil','Übungsformat mit Situationsaufgabe und Rechenteil')
rep('⏱ Prüfungssimulation <small>(90 Minuten)</small>','⏱ Prüfung üben <small>(mit Zeit)</small>')
# Einführung
rep(r"\{g:-1,i:'👋',h:'Willkommen im Meisterlabor',p:'[^']*'\}","{g:-1,i:'👋',h:'Willkommen im Lernlabor Pro',p:'Hier bereitest Du Dich auf die Hauptqualifikation vor: Situationsaufgaben in Technik und Organisation und das Fachgespräch zu Führung und Personal. In einer Minute siehst Du, wie Du damit am besten lernst.'}",rx=True)
rep(r"\{g:0,i:'🏠',h:'Start: Dein nächster Kurstag',p:'[^']*'\}","{g:0,i:'🏠',h:'Start: Dein nächster Schritt',p:'Auf der Startseite geht es dort weiter, wo Du aufgehört hast. Darunter siehst Du, wie die Prüfung aufgebaut ist.'}",rx=True)
rep(r"h:'Fächer: 49 Module',p:'[^']*'","h:'Lernen: drei Handlungsbereiche',p:'Jedes Thema ist aufgebaut wie im Lernlabor: Vermuten, Kurz erklärt, Skizze, Regler mit Auftrag, Merkbox und Üben mit Zufallszahlen.'",rx=True)
rep(r"h:'Prüfen: wie in der IHK-Klausur',p:'[^']*'","h:'Prüfen: Situationsaufgaben und Fachgespräch',p:'Situationsaufgaben verknüpfen Rechnen, Entscheiden und Führen. Du schreibst Deine Lösung und hakst sie mit dem Erwartungshorizont selbst ab.'",rx=True)
rep(r"h:'Ich: Dein Leitstand',p:'[^']*'","h:'Ich: Dein Leitstand',p:'Hier siehst Du, welche Themen Du bearbeitet hast und wie sicher Du bist. Alles bleibt auf Deinem Gerät.'",rx=True)
rep("Leg das Meisterlabor auf den Home-Bildschirm","Leg das Lernlabor Pro auf den Home-Bildschirm")
# Kopf, Marke, Texte
rep('<span class="b1">MEISTER</span>','<span class="b1">LERN</span>')
rep('</svg>R</span></span><span class="bs">Basisqualifikationen · Verstehen. Anwenden. Bestehen.</span>','</svg>R</span><span class="bpro">PRO</span></span><span class="bs">Hauptqualifikation Metall · Verstehen. Anwenden. Bestehen.</span>')
rep('placeholder="Modul oder Stichwort suchen, z. B. Kündigung, BAB, FMEA"','placeholder="Thema oder Stichwort suchen, z. B. Hydraulik, Stundensatz"')
rep(r'<p class="sub" style="margin-top:24px;font-size:13px">.*?</p>','<p class="sub" style="margin-top:24px;font-size:13px">Vorschau.</p>',rx=True)
rep("© 2026 Dr. rer. nat. Markus Baum · Version 5 · Eigene Aufgaben","© 2026 Dr. rer. nat. Markus Baum · Vorschau 2 · Eigene Aufgaben")
rep("let brand='bordeaux';","let brand='pro';")
rep("const BRN={bordeaux:'Bordeaux',","const BRN={pro:'Pro',bordeaux:'Bordeaux',")
rep('<meta name="theme-color" content="#7a1b38">','<meta name="theme-color" content="#1f2937">')
rep("<script>if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));</script>","")
rep(r"<script>/\* ===== Version 5, Paket 2:.*?</script>","",rx=True)
s=s.replace('meisterlabor-','lernlabor-pro-').replace('Meisterlabor Basis','Lernlabor Pro').replace('Meisterlabor','Lernlabor Pro')
s=s.replace('Lernplattform für die Basisqualifikationen im Industriemeister. Vier Fächer','Lernplattform für die Hauptqualifikation im Industriemeister. Drei Handlungsbereiche')
# Zusatz: Stil und Mustermodule
i=s.rfind('</script>')+len('</script>')
ml=rd('pro-ml5.js');mk='/* ---------- Bruchstrich';assert mk in ml;ml=ml.replace(mk,rd('pro-x2.js')+'\n'+mk,1)
s=s[:i]+'\n<style>'+rd('pro.css')+'</style>\n<script>'+ml+'</script>'+s[i:]
open(dst,'w',encoding='utf-8').write(s)
print('ok',len(s))
