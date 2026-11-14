/* ===== Lernlabor Pro, Pakete C1 und C2: Chemie, Verfahrens- & Anlagentechnik. Eigene Texte und Aufgaben.
   Gliederung nach dem Handlungsbereich „Chemische Produktion“ der Verordnung von 2004. Stoffwerte und Grenzwerte sind Rechen- und Beispielwerte. ===== */
if(FR==='ch'){
TM({t:'Wärme & Energiebilanz',intro:'Fast jeder Schritt in der Chemie braucht oder liefert Wärme: Aufheizen, Verdampfen, Kühlen einer Reaktion. Mit der Energiebilanz rechnest Du aus, wie viel Dampf oder Kühlwasser nötig ist und ob der Wärmeübertrager reicht.',
pts:['Energiebilanz: Was ein Stoffstrom an Wärme abgibt, nimmt der andere auf, abzüglich der Verluste. Damit berechnest Du Heizdampf und Kühlwasser.',
'Beim Erwärmen ohne Phasenwechsel zählt die spezifische Wärmekapazität c. Rechenwert für Wasser: c = 4,18 [[kJ||kg · K]].',
'Beim Verdampfen und Kondensieren bleibt die Temperatur gleich, es wird aber viel Wärme umgesetzt. Rechenwert für Wasser bei 100 °C: r = 2257 [[kJ||kg]]. Deshalb heizt man mit kondensierendem Dampf.',
'Wärmeübertrager im Gegenstrom nutzen das Temperaturgefälle besser als im Gleichstrom. Bauarten: Rohrbündel, Platten, Doppelmantel, Rohrschlange.',
'Beläge (Fouling) auf den Flächen verschlechtern den Wärmedurchgang. Anzeichen: Die Austrittstemperatur wird nicht mehr erreicht, der Dampfverbrauch steigt.',
'Wärmerückgewinnung: Ein heißer Ablauf wärmt den kalten Zulauf vor. Das spart Dampf und Kühlwasser zugleich.'],
fo:['Wärmemenge: Q = m · c · ΔT.',
'Wärmestrom: Q̇ = ṁ · c · ΔT. Umrechnung: 1 kW = 3600 [[kJ||h]].',
'Verdampfen und Kondensieren: Q = m · r.',
'Wärmeübertrager: Q̇ = k · A · ΔT_m mit der Fläche A und der mittleren Temperaturdifferenz ΔT_m.'],
mcq:[['Warum heizt man in der Chemie gern mit Dampf?','Beim Kondensieren wird viel Wärme bei gleicher Temperatur frei','Dampf ist kälter als Wasser','Dampf braucht keine Rohrleitung','Dampf hat keine Verluste','Die Kondensationswärme ist viel größer als die Wärme aus dem Abkühlen von Wasser.'],
['Ein Wärmeübertrager erreicht die Austrittstemperatur nicht mehr. Was ist eine typische Ursache?','Beläge auf den Wärmeübertragerflächen','Zu saubere Rohre','Zu hoher Dampfdruck','Zu viel Isolierung','Fouling verschlechtert den Wärmedurchgang. Abhilfe: reinigen.'],
['Welche Stromführung nutzt das Temperaturgefälle am besten?','Gegenstrom','Gleichstrom','Kreuzstrom ist immer schlechter','Das ist egal','Im Gegenstrom bleibt über die ganze Länge eine Temperaturdifferenz, sie ist gleichmäßiger verteilt. Das kalte Medium kann wärmer werden als das warme am Austritt.'],
['1000 kg Wasser werden um 10 K erwärmt. Wie viel Wärme ist nötig?','41 800 kJ','4180 kJ','418 kJ','10 000 kJ','Q = 1000 kg · 4,18 kJ/(kg · K) · 10 K = 41 800 kJ.']]});

TM({t:'Fördern: Pumpen & Rohrleitungen',intro:'Ohne Pumpen bewegt sich in der Anlage nichts. Du unterscheidest die Bauarten, berechnest Strömungsgeschwindigkeit und Leistung und kennst die Fehler, die Pumpen zerstören.',
pts:['Kreiselpumpen fördern gleichmäßig große Mengen. Ihr Förderstrom hängt vom Gegendruck ab. Normale Kreiselpumpen sind nicht selbstansaugend und müssen vor dem Start gefüllt und entlüftet sein. Es gibt selbstansaugende Bauarten.',
'Verdrängerpumpen (Kolben, Membran, Zahnrad, Exzenterschnecke) fördern fast unabhängig vom Gegendruck. Sie dürfen nie gegen eine geschlossene Armatur laufen und brauchen ein Überströmventil.',
'Betriebspunkt: Schnittpunkt von Pumpenkennlinie und Anlagenkennlinie. Wird gedrosselt, wandert er zu kleinerem Förderstrom.',
'Kavitation: Sinkt der Druck am Saugstutzen unter den Dampfdruck, bilden sich Dampfblasen, die schlagartig zusammenfallen. Die Pumpe prasselt, das Laufrad wird zerstört. Abhilfe: Zulaufhöhe erhöhen, Saugleitung kurz und weit, Medium kühler.',
'Als Richtwert für wirtschaftliche Strömungsgeschwindigkeiten gelten bei Flüssigkeiten etwa 1 bis 2 [[m||s]] in der Druckleitung.',
'Wellendichtung: Die Gleitringdichtung ist Standard. Für giftige oder brennbare Medien nimmt man doppelte Gleitringdichtungen mit Sperrflüssigkeit oder Pumpen mit Magnetkupplung.'],
fo:['Volumenstrom: V̇ = A · v mit A = [[π · d²||4]].',
'Förderleistung: P = ρ · g · H · V̇ mit V̇ in [[m³||s]].',
'Antriebsleistung: P_zu = [[P||η]].',
'Förderdruck: Δp = ρ · g · H.',
'Druckverlust im Rohr steigt mit dem Quadrat der Geschwindigkeit: doppelte Geschwindigkeit, vierfacher Druckverlust.'],
mcq:[['Was darf eine Verdrängerpumpe nie?','Gegen eine geschlossene Armatur fördern','Zähe Medien fördern','Langsam laufen','Hohe Drücke erzeugen','Der Druck steigt, bis etwas nachgibt. Deshalb braucht sie ein Überströmventil.'],
['Woran erkennst Du Kavitation?','Prasselndes Geräusch und sinkende Förderleistung','Die Pumpe läuft besonders ruhig','Der Motor nimmt keinen Strom auf','Der Druck steigt stetig','Die Dampfblasen fallen im Laufrad zusammen und schlagen Material heraus.'],
['Du halbierst den Rohrdurchmesser bei gleichem Volumenstrom. Wie ändert sich die Geschwindigkeit?','Sie wird viermal so groß','Sie verdoppelt sich','Sie halbiert sich','Sie bleibt gleich','Die Fläche sinkt auf ein Viertel, also muss die Geschwindigkeit vierfach werden.'],
['Welche Pumpe wählst Du für ein giftiges Medium?','Pumpe mit Magnetkupplung','Kreiselpumpe mit Stopfbuchse','Jede beliebige','Offene Kreiselpumpe','Die Magnetkupplung kommt ohne Wellendurchführung aus und ist hermetisch dicht.']]});

TM({t:'Mechanische Trennverfahren',intro:'Feststoffe aus Flüssigkeiten oder Gasen zu holen, gehört zu fast jedem Verfahren. Du wählst das passende Trennverfahren nach Teilchengröße und Dichte und rechnest mit einfachen Bilanzen nach, ob die Trennung funktioniert.',
pts:['Sedimentieren: Die Schwerkraft trennt, wenn sich die Dichten unterscheiden und die Teilchen groß genug sind. Einfach, aber langsam.',
'Zentrifugieren: Die Fliehkraft ersetzt die Schwerkraft und ist viele hundertmal stärker. Feine Teilchen setzen sich in kurzer Zeit ab.',
'Filtrieren: Ein Filtermittel hält den Feststoff zurück. Bei der Kuchenfiltration filtert der wachsende Kuchen selbst, der Durchsatz sinkt mit der Kuchenhöhe.',
'Nach der Filtration wird der Kuchen gewaschen und entfeuchtet. Die Restfeuchte bestimmt, wie viel Energie der Trockner danach braucht.',
'Gasreinigung: Der Zyklon scheidet grobe Stäube durch Fliehkraft ab, der Schlauchfilter auch feine. Bei brennbaren Stäuben ist Explosionsschutz nötig.',
'Sieben und Sichten trennen Feststoffe nach der Korngröße.'],
fo:['Schleuderziffer: z = [[r · ω²||g]] mit ω = 2 · π · n und n in [[1||s]]. Sie sagt, wie viel stärker die Fliehkraft ist als die Schwerkraft.',
'Feststoffbilanz: m_Suspension · w_Feststoff = m_Kuchen · w_Kuchen, wenn das Filtrat klar ist.',
'Abscheidegrad: η = [[abgeschiedene Masse||zugeführte Masse]] · 100 %.'],
mcq:[['Warum trennt eine Zentrifuge schneller als ein Absetzbecken?','Die Fliehkraft ist ein Vielfaches der Schwerkraft','Sie erwärmt das Medium','Sie verringert die Dichte','Sie filtert mit einem Tuch','Die Schleuderziffer liegt je nach Bauart bei mehreren Hundert bis über Zehntausend.'],
['Der Durchsatz einer Filterpresse sinkt im Lauf der Charge. Warum?','Der wachsende Filterkuchen erhöht den Widerstand','Die Pumpe wird wärmer','Das Filtrat wird dichter','Das Filtertuch wird größer','Das ist normal. Am Ende wird abgepresst, gewaschen und ausgetragen.'],
['Welches Gerät scheidet groben Staub ohne Filtermittel ab?','Zyklon','Schlauchfilter','Filterpresse','Dekanter','Im Zyklon schleudert die Drehströmung die Teilchen an die Wand.'],
['Warum ist eine niedrige Restfeuchte im Filterkuchen wichtig?','Der Trockner braucht dann weniger Energie','Der Kuchen wird dann schwerer','Das Filtrat wird klarer','Die Pumpe läuft ruhiger','Mechanisch entfeuchten ist viel billiger als thermisch trocknen.']]});

TM({t:'Thermische Trennverfahren',intro:'Wenn sich Stoffe nicht mechanisch trennen lassen, nutzt Du ihre unterschiedlichen Siedepunkte oder Löslichkeiten. Du verstehst, wie eine Kolonne arbeitet, und rechnest mit zwei Bilanzen aus, wie viel Destillat sie liefert.',
pts:['Destillation trennt Flüssigkeiten nach dem Siedepunkt: Der Dampf enthält mehr vom Leichtsieder. Die Rektifikation wiederholt diesen Schritt in einer Kolonne viele Male.',
'In der Kolonne steigt Dampf auf, Flüssigkeit läuft herab. Auf Böden oder Packungen tauschen beide Stoff und Wärme aus. Am Kopf sammelt sich der Leichtsieder, im Sumpf der Schwersieder.',
'Der Rücklauf macht die Trennung scharf. Mehr Rücklauf bedeutet reineres Kopfprodukt, aber mehr Dampf- und Kühlwasserverbrauch.',
'Anzeichen für Störungen: Fluten (zu viel Dampf, Druckverlust steigt stark), Durchregnen (zu wenig Dampf), schwankende Kopftemperatur. Die Kopftemperatur zeigt die Reinheit an.',
'Vakuumdestillation senkt die Siedetemperatur und schont empfindliche Stoffe.',
'Weitere Verfahren: Extraktion (trennt nach Löslichkeit), Absorption (wäscht Gase aus), Adsorption (bindet an Aktivkohle), Kristallisation, Trocknung.'],
fo:['Gesamtbilanz der Kolonne: F = D + B (Zulauf = Destillat + Sumpfprodukt).',
'Bilanz des Leichtsieders: F · x_F = D · x_D + B · x_B.',
'Daraus die Destillatmenge: D = F · [[x_F − x_B||x_D − x_B]].',
'Rücklaufverhältnis: v = [[Rücklauf||Destillat]].'],
mcq:[['Was passiert, wenn Du das Rücklaufverhältnis erhöhst?','Das Kopfprodukt wird reiner, der Energiebedarf steigt','Das Kopfprodukt wird unreiner','Der Energiebedarf sinkt','Die Kolonne läuft leer','Mehr Rücklauf heißt mehr Verdampfen und Kondensieren je Kilogramm Produkt.'],
['Woran erkennst Du, dass eine Kolonne flutet?','Der Druckverlust über die Kolonne steigt stark an','Die Kopftemperatur fällt auf Raumtemperatur','Der Sumpf läuft leer','Der Rücklauf wird klar','Der Dampf staut die Flüssigkeit auf. Abhilfe: Heizleistung zurücknehmen.'],
['Wozu dient die Vakuumdestillation?','Sie senkt die Siedetemperatur und schont das Produkt','Sie erhöht den Druck in der Kolonne','Sie spart den Kondensator','Sie ersetzt den Rücklauf','Temperaturempfindliche Stoffe würden bei Normaldruck zersetzt.'],
['Welches Verfahren trennt nach der Löslichkeit in einem zweiten Lösemittel?','Extraktion','Destillation','Sedimentation','Sieben','Das Extraktionsmittel nimmt bevorzugt den gewünschten Stoff auf.']]});

TM({t:'Anfahren, Betreiben & Abfahren',intro:'Die meisten Ereignisse passieren nicht im Normalbetrieb, sondern beim An- und Abfahren. Du führst die Anlage nach Fahrvorschrift, sicherst die Schichtübergabe und weißt, wie ein Behälter sicher inertisiert wird.',
pts:['Grundlage ist die Betriebsanweisung mit Fahrvorschrift: Reihenfolge der Schritte, Grenzwerte, Verhalten bei Abweichungen. Davon wird nicht abgewichen, ohne es freigeben zu lassen.',
'Vor dem Anfahren: Arbeiten abgeschlossen und Freigaben zurückgegeben, Steckscheiben gezogen, Armaturenstellung geprüft, Dichtheit geprüft, Mess- und Schutzeinrichtungen in Funktion, Medien verfügbar, Anlage inertisiert.',
'Angefahren wird schrittweise mit langsamen Temperatur- und Druckänderungen. Schutzeinrichtungen bleiben aktiv, auch wenn sie beim Anfahren lästig sind.',
'Im Betrieb: Rundgänge, Betriebstagebuch, Trends beobachten. Die Schichtübergabe ist mündlich und schriftlich: Zustand, Störungen, laufende Arbeiten, offene Freigaben.',
'Abfahren: geplant in der Reihenfolge der Fahrvorschrift, danach entleeren, spülen, inertisieren. Für den Notfall gibt es das Notabfahren in den sicheren Zustand.',
'Inertisieren mit Stickstoff verdrängt den Sauerstoff. Beim Druckwechselverfahren wird mehrmals aufgedrückt und entspannt. Achtung: Stickstoff ist für Menschen eine Erstickungsgefahr.'],
fo:['Druckwechsel-Inertisierung: c_n = c_0 · ([[p_1||p_2]])ⁿ mit dem Sauerstoffgehalt c, dem unteren Druck p_1 und dem oberen Druck p_2 (beide absolut) und n Zyklen.',
'Raum-Zeit-Ausbeute = [[Produktmasse||Reaktorvolumen · Zeit]].'],
mcq:[['Wann passieren in Chemieanlagen besonders viele Ereignisse?','Beim An- und Abfahren','Im ruhigen Normalbetrieb','Nur nachts','Nur bei Neuanlagen','Zustände ändern sich schnell, vieles wird von Hand geschaltet, Routine fehlt.'],
['Was gehört unbedingt in die Schichtübergabe?','Laufende Arbeiten und offene Freigaben','Die Urlaubsplanung','Der Speiseplan','Nur der Füllstand des Lagertanks','Die Folgeschicht muss wissen, wo jemand an der Anlage arbeitet und was überbrückt ist.'],
['Warum wird vor dem Anfahren mit brennbaren Stoffen inertisiert?','Um den Sauerstoff zu verdrängen und eine Explosion zu verhindern','Um die Anlage zu kühlen','Um Wasser zu sparen','Um die Pumpen zu schmieren','Ohne Sauerstoff kann keine explosionsfähige Atmosphäre entstehen.'],
['Welche Gefahr geht von Stickstoff aus?','Ersticken, weil er den Sauerstoff verdrängt','Er ist brennbar','Er ist ätzend','Keine, er ist ja in der Luft','Stickstoff riecht nicht und warnt nicht. Schon wenige Atemzüge können zur Bewusstlosigkeit führen.']]});

TM({t:'Instandhaltung & Arbeitsfreigabe',intro:'Bevor jemand an einer Chemieanlage schraubt, muss sie sicher sein: leer, gespült, abgesperrt, freigemessen. Du organisierst die Arbeitsfreigabe, weist Fremdfirmen ein und sorgst für eine saubere Rückgabe an den Betrieb.',
pts:['Arbeiten an Anlagen brauchen eine schriftliche Arbeitsfreigabe (Erlaubnisschein). Sie beschreibt Arbeit, Gefährdungen, Schutzmaßnahmen und wer freigibt.',
'Anlage sichern: entleeren, spülen, drucklos machen, mit Steckscheiben oder doppelter Absperrung abtrennen, Antriebe elektrisch freischalten und gegen Wiedereinschalten sichern.',
'Vor dem Befahren eines Behälters wird freigemessen: Sauerstoff, brennbare Gase, giftige Stoffe. Dazu gehören Befahrerlaubnis, Sicherungsposten und Rettungsmittel.',
'Heißarbeiten (Schweißen, Trennen, Schleifen) brauchen eine Feuererlaubnis: Umgebung von brennbaren Stoffen frei, Brandwache, Löschmittel, Nachkontrolle.',
'Fremdfirmen werden vor Arbeitsbeginn eingewiesen. Arbeiten mehrere Firmen nebeneinander, stimmt ein Koordinator die Arbeiten ab.',
'Rückgabe: Arbeit abgenommen, Steckscheiben gezogen, Dichtheit geprüft, Freigabe geschlossen. Erst dann darf wieder angefahren werden.'],
fo:['Messwert bezogen auf die untere Explosionsgrenze: Anteil = [[gemessene Konzentration||UEG]] · 100 %.',
'Verfügbarkeit = [[Laufzeit||Laufzeit + Stillstandszeit]] · 100 %.'],
mcq:[['Was wird vor dem Befahren eines Behälters gemessen?','Sauerstoff, brennbare Gase und giftige Stoffe','Nur die Temperatur','Nur der Füllstand','Die Wanddicke','Das Freimessen zeigt, ob die Atmosphäre im Behälter ungefährlich ist.'],
['Wozu dient eine Steckscheibe?','Sie trennt eine Leitung sicher ab','Sie misst den Durchfluss','Sie dichtet eine Pumpe','Sie regelt den Druck','Eine geschlossene Armatur allein kann undicht sein oder versehentlich geöffnet werden.'],
['Was gehört zu einer Feuererlaubnis?','Brandwache, Löschmittel und Nachkontrolle','Nur ein Verbotsschild','Ein neuer Schweißbrenner','Nichts, wenn es schnell geht','Funken fliegen weit, Schwelbrände entstehen oft erst Stunden später.'],
['Wann darf nach einer Reparatur wieder angefahren werden?','Nach Abnahme, Dichtheitsprüfung und Rückgabe der Freigabe','Sobald der Monteur gegangen ist','Nach Schichtende','Wenn die Leitwarte es wünscht','Die Rückgabe stellt sicher, dass niemand mehr an der Anlage arbeitet und alles wieder dicht ist.']]});

{const tec='tec';
{const m=MI(tec,'Wärme & Energiebilanz');
C.push({f:tec,m,name:'Wärmemenge zum Aufheizen',gen:r=>{const ms=r.step(800,5000,200),c=r.p([2.1,2.5,3.2,4.18]),t1=r.step(15,30,5),t2=r.step(60,95,5),Q=ms*c*(t2-t1)/1000;
 return{q:'Im Rührkessel werden '+ms+' kg Flüssigkeit (c = '+nt(c)+' kJ/(kg · K)) von '+t1+' °C auf '+t2+' °C erwärmt. Wie viel Wärme ist nötig?',a:Q,u:'MJ',d:1,tol:0.01,
 sol:['Q = m · c · ΔT','Q = '+ms+' kg · '+nt(c)+' kJ/(kg · K) · ('+t2+' − '+t1+') K = '+nz(Q*1000,0)+' kJ = '+nz(Q,1)+' MJ']}}});
C.push({f:tec,m,name:'Kühlwasserbedarf',gen:r=>{const Q=r.step(60,400,20),t1=r.p([15,18,20]),dt=r.step(8,16,2),mw=Q*3600/(4.18*dt)/1000;
 return{q:'Ein Kondensator muss '+Q+' kW abführen. Das Kühlwasser kommt mit '+t1+' °C und darf sich um '+dt+' K erwärmen (c = 4,18 kJ/(kg · K)). Wie viel Kühlwasser brauchst Du je Stunde?',a:mw,u:'t/h',d:1,tol:0.01,
 sol:['Q̇ = '+Q+' kW = '+Q+' kJ/s · 3600 s/h = '+nz(Q*3600,0)+' kJ/h','ṁ = [[Q̇||c · ΔT]] = [['+nz(Q*3600,0)+' kJ/h||4,18 kJ/(kg · K) · '+dt+' K]] = '+nz(mw*1000,0)+' kg/h = '+nz(mw,1)+' t/h']}}});
C.push({f:tec,m,name:'Heizdampfmenge',gen:r=>{const Q=r.step(200,1500,100),md=Q*1000/2257;
 return{q:'Zum Aufheizen einer Charge sind '+Q+' MJ nötig. Wie viel Sattdampf muss kondensieren (r = 2257 kJ/kg, Verluste vernachlässigt)?',a:md,u:'kg',d:0,tol:0.01,
 sol:['Q = m · r, umgestellt: m = [[Q||r]]','m = [['+nz(Q*1000,0)+' kJ||2257 kJ/kg]] = '+nz(md,0)+' kg']}}});}
{const m=MI(tec,'Fördern: Pumpen & Rohrleitungen');
C.push({f:tec,m,name:'Strömungsgeschwindigkeit',gen:r=>{const V=r.step(5,60,5),d=r.p([40,50,65,80,100]),A=Math.PI*d*d/4e6,v=V/3600/A;
 return{q:'Durch eine Rohrleitung mit '+d+' mm Innendurchmesser fließen '+V+' m³/h. Wie groß ist die Strömungsgeschwindigkeit?',a:v,u:'m/s',d:2,tol:0.02,
 sol:['A = [[π · d²||4]] = [[π · ('+nt(d/1000)+' m)²||4]] = '+nz(A,5)+' m²','V̇ = '+V+' m³/h ÷ 3600 s/h = '+nz(V/3600,5)+' m³/s','v = [[V̇||A]] = [['+nz(V/3600,5)+' m³/s||'+nz(A,5)+' m²]] = '+nz(v,2)+' m/s']}}});
C.push({f:tec,m,name:'Antriebsleistung der Pumpe',gen:r=>{const V=r.step(10,80,5),H=r.step(15,60,5),rho=r.p([800,1000,1200]),eta=r.p([0.6,0.65,0.7,0.75]),P=rho*9.81*H*V/3600/eta/1000;
 return{q:'Eine Pumpe fördert '+V+' m³/h einer Flüssigkeit (ρ = '+rho+' kg/m³) auf '+H+' m Förderhöhe. Ihr Wirkungsgrad beträgt '+nz(eta*100,0)+' %. Welche Antriebsleistung braucht sie?',a:P,u:'kW',d:1,tol:0.02,
 sol:['V̇ = '+V+' m³/h ÷ 3600 s/h = '+nz(V/3600,5)+' m³/s','P = ρ · g · H · V̇ = '+rho+' kg/m³ · 9,81 m/s² · '+H+' m · '+nz(V/3600,5)+' m³/s = '+nz(P*eta*1000,0)+' W','P_zu = [[P||η]] = [['+nz(P*eta*1000,0)+' W||'+nt(eta)+']] = '+nz(P*1000,0)+' W = '+nz(P,1)+' kW']}}});}
{const m=MI(tec,'Mechanische Trennverfahren');
C.push({f:tec,m,name:'Schleuderziffer',gen:r=>{const d=r.p([400,600,800,1000]),n=r.step(900,3000,300),w=2*Math.PI*n/60,z=d/2000*w*w/9.81;
 return{q:'Eine Zentrifuge hat '+d+' mm Trommeldurchmesser und läuft mit '+n+' 1/min. Wie groß ist die Schleuderziffer?',a:z,u:'',d:0,tol:0.02,
 sol:['ω = 2 · π · n = 2 · π · [['+n+'||60]] 1/s = '+nz(w,1)+' 1/s','z = [[r · ω²||g]] = [['+nt(d/2000)+' m · ('+nz(w,1)+' 1/s)²||9,81 m/s²]] = '+nz(z,0),'Die Fliehkraft ist rund '+nz(z,0)+'-mal so groß wie die Schwerkraft.']}}});
C.push({f:tec,m,name:'Masse des Filterkuchens',gen:r=>{const ms=r.step(2000,8000,500),w=r.step(4,16,2),wk=r.p([60,65,70,75,80]),mk=ms*w/wk;
 return{q:'Es werden '+ms+' kg Suspension mit '+w+' % Feststoff filtriert. Der Filterkuchen enthält '+wk+' % Feststoff, das Filtrat ist klar. Wie schwer ist der feuchte Kuchen?',a:mk,u:'kg',d:0,tol:0.01,
 sol:['Feststoff: '+ms+' kg · '+nt(w/100)+' = '+nz(ms*w/100,0)+' kg','m_Kuchen = [[Feststoffmasse||w_Kuchen]] = [['+nz(ms*w/100,0)+' kg||'+nt(wk/100)+']] = '+nz(mk,0)+' kg']}}});}
{const m=MI(tec,'Thermische Trennverfahren');
C.push({f:tec,m,name:'Destillatmenge aus der Bilanz',gen:r=>{const F=r.step(500,3000,250),xf=r.step(30,50,5),xd=r.p([95,96,98]),xb=r.p([2,3,5]),Dm=F*(xf-xb)/(xd-xb);
 return{q:'Eine Kolonne erhält '+F+' kg/h Zulauf mit '+xf+' % Leichtsieder. Das Destillat enthält '+xd+' %, das Sumpfprodukt noch '+xb+' % Leichtsieder. Wie viel Destillat fällt an?',a:Dm,u:'kg/h',d:0,tol:0.01,
 sol:['D = F · [[x_F − x_B||x_D − x_B]]','D = '+F+' kg/h · [['+nt(xf/100)+' − '+nt(xb/100)+'||'+nt(xd/100)+' − '+nt(xb/100)+']] = '+nz(Dm,0)+' kg/h','Sumpfprodukt: B = F − D = '+nz(F-Dm,0)+' kg/h']}}});
C.push({f:tec,m,name:'Rücklaufmenge',gen:r=>{const Dm=r.step(200,1200,100),v=r.p([1.5,2,2.5,3,4]),R=Dm*v;
 return{q:'Eine Kolonne liefert '+Dm+' kg/h Destillat bei einem Rücklaufverhältnis von '+nt(v)+'. Wie viel Dampf muss der Kondensator am Kopf je Stunde verflüssigen?',a:R+Dm,u:'kg/h',d:0,tol:0.005,
 sol:['Rücklauf = v · Destillat = '+nt(v)+' · '+Dm+' kg/h = '+nz(R,0)+' kg/h','Kopfdampf = Rücklauf + Destillat = '+nz(R,0)+' kg/h + '+Dm+' kg/h = '+nz(R+Dm,0)+' kg/h']}}});}
{const m=MI(tec,'Anfahren, Betreiben & Abfahren');
C.push({f:tec,m,name:'Sauerstoff nach dem Druckwechsel',gen:r=>{const p2=r.p([2,3,4,5]),n=r.i(2,4),c=20.9*Math.pow(1/p2,n);
 return{q:'Ein Behälter mit Luft (20,9 % Sauerstoff) wird '+n+'-mal mit Stickstoff von 1 bar auf '+p2+' bar absolut aufgedrückt und wieder entspannt. Wie hoch ist danach der Sauerstoffgehalt?',a:c,u:'%',d:2,tol:0.03,
 sol:['c_n = c_0 · ([[p_1||p_2]])ⁿ','c_n = 20,9 % · ([[1 bar||'+p2+' bar]])^'+n+' = '+nz(c,2)+' %']}}});
C.push({f:tec,m,name:'Raum-Zeit-Ausbeute',gen:r=>{const mp=r.step(800,4000,200),V=r.p([4,6.3,10,16]),t=r.step(6,16,2),R=mp/(V*t);
 return{q:'Ein Rührkessel mit '+nt(V)+' m³ liefert je Charge '+mp+' kg Produkt. Eine Charge dauert mit Füllen und Entleeren '+t+' h. Wie groß ist die Raum-Zeit-Ausbeute?',a:R,u:'kg/(m³·h)',d:1,tol:0.02,
 sol:['Raum-Zeit-Ausbeute = [[Produktmasse||Reaktorvolumen · Zeit]]','= [['+mp+' kg||'+nt(V)+' m³ · '+t+' h]] = '+nz(R,1)+' kg/(m³ · h)']}}});}
{const m=MI(tec,'Instandhaltung & Arbeitsfreigabe');
C.push({f:tec,m,name:'Messwert bezogen auf die UEG',gen:r=>{const ueg=r.p([1.1,1.7,2.5,3.1]),x=r.step(0.05,0.6,0.05),a=x/ueg*100;
 return{q:'Beim Freimessen zeigt das Gerät '+nz(x,2)+' Vol.-% Lösemitteldampf. Die untere Explosionsgrenze des Stoffs liegt bei '+nt(ueg)+' Vol.-%. Wie viel Prozent der UEG sind das?',a:a,u:'%',d:1,tol:0.02,
 sol:['Anteil = [[gemessene Konzentration||UEG]] · 100 %','Anteil = [['+nz(x,2)+' Vol.-%||'+nt(ueg)+' Vol.-%]] · 100 % = '+nz(a,1)+' % der UEG','Ob damit gearbeitet werden darf, legt die Arbeitsfreigabe fest. Für Heißarbeiten gelten besonders niedrige Grenzen.']}}});}
}
}
