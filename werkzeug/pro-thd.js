/* ===== Lernlabor Pro, Gebiet Thermodynamik in der Fachrichtung Chemie (Chemische Produktion), Vorschau.
   Eigene Texte und Aufgaben. Stoffwerte sind Rechen- und Richtwerte zum Üben, maßgeblich sind Tabellenbuch und Herstellerangaben.
   Hochgestellt: ^{…} wird in der App als Hochzahl gezeigt (pro-xthd.js). ===== */
if(FR==='ch'){
const T0=D.tec.modules.length;
TM({t:'Gasgesetze',intro:'Gase lassen sich zusammendrücken, und ihr Druck steigt, wenn sie warm werden. Das betrifft Druckbehälter, Gasflaschen, Stickstoffpolster und das Inertisieren. In den Gasgesetzen stehen immer der absolute Druck und die absolute Temperatur in Kelvin.',
pts:['Für eine eingeschlossene Gasmenge bleibt [[p · V||T]] gleich (allgemeine Gasgleichung). Hält man eine Größe fest, folgen daraus drei Sonderfälle.',
'Gleiche Temperatur (Boyle-Mariotte): p · V bleibt gleich. Halbes Volumen ergibt doppelten Druck.',
'Gleiches Volumen (Amontons): [[p||T]] bleibt gleich. Ein geschlossener Behälter in der Sonne bekommt mehr Druck.',
'Gleicher Druck (Gay-Lussac): [[V||T]] bleibt gleich. Warmes Gas braucht mehr Platz.',
'Manometer zeigen meist den Überdruck p_e. Rechne immer mit dem absoluten Druck: p_abs = p_e + p_amb, Rechenwert p_amb = 1 bar.',
'Gasflaschen und Druckbehälter nicht in der Sonne oder an Wärmequellen lagern: Der Druck steigt mit der Temperatur.'],
fo:['Allgemeine Gasgleichung: [[p_1 · V_1||T_1]] = [[p_2 · V_2||T_2]]',
'Absoluter Druck: p_abs = p_e + 1 bar',
'Kelvin: T = ϑ + 273 K'],
mcq:[['Ein Manometer an einer Druckluftleitung zeigt 6 bar. Mit welchem Druck rechnest Du in der Gasgleichung?','7 bar absolut','6 bar','5 bar','6,5 bar','Das Manometer zeigt den Überdruck. Absolut kommt der Luftdruck von rund 1 bar dazu.'],
['Ein geschlossener Behälter wird von 20 °C auf 60 °C erwärmt. Wie ändert sich der absolute Druck?','Er steigt um rund 14 %','Er verdreifacht sich','Er steigt um 40 %','Er bleibt gleich','p₂ : p₁ = T₂ : T₁ = 333 K : 293 K ≈ 1,14. Mit Celsius gerechnet käme fälschlich das Dreifache heraus.'],
['Ein Gas wird bei gleicher Temperatur auf ein Viertel seines Volumens zusammengedrückt. Wie groß wird der absolute Druck?','Das Vierfache','Ein Viertel','Das Doppelte','Er bleibt gleich','Boyle-Mariotte: p · V bleibt gleich.'],
['Warum dürfen Gasflaschen nicht neben einer Heizung stehen?','Der Druck steigt mit der Temperatur und kann die Flasche überlasten','Das Gas wird leichter und entweicht','Die Flasche dehnt sich und wird undicht, der Druck bleibt gleich','Das Gas kühlt die Heizung','Bei gleichem Volumen wächst der Druck mit der absoluten Temperatur.']]}),
TM({t:'Erster Hauptsatz',intro:'Energie geht nicht verloren, sie wechselt nur die Form. Der erste Hauptsatz verbindet Wärme, Arbeit und die innere Energie eines Gases. Damit verstehst Du, warum Luft beim Verdichten heiß wird und warum ein Druckluftwerkzeug an der Abluft vereisen kann.',
pts:['Innere Energie U ist die Energie in der Bewegung der Teilchen. Steigt U, steigt die Temperatur.',
'Erster Hauptsatz: Zugeführte Wärme erhöht die innere Energie oder wird als Arbeit abgegeben: Q = ΔU + W_ab.',
'Volumenänderungsarbeit bei gleichem Druck: W = p · ΔV. Dehnt sich das Gas gegen einen Kolben aus, gibt es Arbeit ab.',
'Verdichten: Arbeit wird zugeführt, die innere Energie steigt, die Luft wird heiß. Entspannen: Das Gas leistet Arbeit und kühlt dabei ab.',
'Lehrbücher verwenden verschiedene Vorzeichen. Mach Dir bei jeder Aufgabe klar, was zugeführt und was abgegeben wird.',
'Reaktionen setzen Wärme frei (exotherm) oder brauchen Wärme (endotherm). Auch dafür gilt: Die Energie verschwindet nicht, sie muss abgeführt oder zugeführt werden.'],
fo:['Erster Hauptsatz: Q = ΔU + W_ab',
'Volumenänderungsarbeit: W = p · ΔV',
'Umrechnung: 1 bar · 1 l = 10^{5} Pa · 10^{−3} m³ = 100 J'],
mcq:[['Warum wird die Luft in einer Fahrradpumpe beim schnellen Pumpen warm?','Die zugeführte Verdichtungsarbeit erhöht die innere Energie der Luft','Weil die Hand Wärme abgibt','Weil Luft Wärme aus der Umgebung zieht','Weil der Druck dabei sinkt','Beim schnellen Verdichten bleibt keine Zeit, Wärme abzugeben. Die Arbeit steckt in der inneren Energie, die Temperatur steigt.'],
['Einem Gas werden 50 kJ Wärme zugeführt, es gibt 20 kJ Arbeit ab. Wie ändert sich die innere Energie?','Sie steigt um 30 kJ','Sie steigt um 70 kJ','Sie sinkt um 30 kJ','Sie bleibt gleich','ΔU = Q − W_ab = 50 kJ − 20 kJ = 30 kJ.'],
['An einem Druckluftschrauber bildet sich am Abluftaustritt Reif. Warum?','Die Luft leistet beim Entspannen Arbeit und kühlt dabei ab','Die Luft war schon im Kessel gefroren','Der Schrauber hat einen eingebauten Kühler','Das Öl im Schrauber gefriert','Die Energie für die Arbeit kommt aus der inneren Energie der Luft. Die Feuchte in der Luft gefriert.'],
['Was sagt der erste Hauptsatz?','Energie bleibt erhalten, sie wechselt nur die Form','Wärme fließt von selbst von kalt nach warm','Jede Maschine hat den Wirkungsgrad 1','Gase lassen sich nicht verdichten','Er ist der Energieerhaltungssatz für Wärme und Arbeit.']]}),
TM({t:'Zustandsänderungen',intro:'Wie sich Druck, Volumen und Temperatur eines Gases gemeinsam ändern, hängt davon ab, was festgehalten wird und ob Wärme fließen kann. Im p-V-Diagramm siehst Du die vier wichtigen Fälle auf einen Blick. Am Kompressor entscheidet das über Endtemperatur und Energiebedarf.',
pts:['Isochor: Das Volumen bleibt gleich, zum Beispiel im geschlossenen Behälter. Es wird keine Volumenarbeit verrichtet.',
'Isobar: Der Druck bleibt gleich, zum Beispiel unter einem frei beweglichen Kolben mit gleicher Last.',
'Isotherm: Die Temperatur bleibt gleich. Das geht nur langsam und mit Kühlung. p · V bleibt gleich.',
'Adiabat: Es wird keine Wärme ausgetauscht, zum Beispiel beim schnellen Verdichten ohne Kühlung. Druck und Temperatur steigen stark.',
'Reale Verdichter liegen zwischen isotherm und adiabat. Je besser die Kühlung, desto näher an der Isotherme.',
'Im p-V-Diagramm ist die Fläche unter der Kurve die Arbeit. Die Adiabate verläuft steiler als die Isotherme, deshalb braucht ungekühltes Verdichten mehr Arbeit. Abhilfe: Kühlung und mehrere Stufen mit Zwischenkühlung.'],
fo:['Isotherm: p_1 · V_1 = p_2 · V_2',
'Verdichtungsverhältnis: ε = [[V_1||V_2]]',
'Adiabat (Luft): T_2 = T_1 · ε^{0,4}'],
mcq:[['Welche Zustandsänderung läuft in einem verschlossenen Druckluftbehälter ab, der in der Sonne steht?','Isochor','Isobar','Isotherm','Adiabat','Das Volumen des Behälters bleibt gleich, Druck und Temperatur steigen.'],
['Luft wird schnell und ohne Kühlung auf ein Achtel ihres Volumens verdichtet. Was passiert mit der Temperatur?','Sie steigt auf mehrere hundert Grad','Sie bleibt gleich','Sie sinkt','Sie steigt nur um wenige Grad','Adiabat: T₂ = T₁ · ε^{0,4}. Mit 293 K und ε = 8 kommen rund 673 K heraus, also etwa 400 °C.'],
['Warum verdichtet man Druckluft für hohe Drücke in zwei Stufen mit Zwischenkühlung?','Man spart Antriebsarbeit und vermeidet zu hohe Temperaturen','Damit mehr Kondensat entsteht','Weil eine Stufe keinen Druck halten kann','Damit die Luft feuchter wird','Durch die Kühlung liegt der Verlauf näher an der Isotherme. Die Fläche im p-V-Diagramm und damit die Arbeit wird kleiner.'],
['Was zeigt die Fläche unter der Kurve im p-V-Diagramm?','Die Volumenänderungsarbeit','Die Temperatur','Die Wärmekapazität','Den Wirkungsgrad','Arbeit ist Druck mal Volumenänderung, im Diagramm eine Fläche.']]}),
TM({t:'Wärmeleitung & Dämmung',intro:'Durch Behälterwände, Dampfleitungen und Ofenwände fließt ständig Wärme nach draußen. Wie viel, hängt vom Werkstoff, von der Dicke, der Fläche und dem Temperaturunterschied ab. Mit Dämmung sparst Du Energie und senkst die Temperatur an Oberflächen, die Mitarbeiter berühren können.',
pts:['Wärmeleitung: Wärme wandert durch einen festen Stoff von der warmen zur kalten Seite.',
'Die Wärmeleitfähigkeit λ ist ein Stoffwert. Rechenwerte in [[W||m · K]]: Kupfer 380, Aluminium 220, Stahl 50, Beton 2, Ziegel 0,8, Mineralwolle 0,04, ruhende Luft 0,026.',
'Der Wärmestrom wächst mit der Fläche A und der Temperaturdifferenz ΔT und sinkt mit der Dicke d.',
'Der U-Wert (Wärmedurchgangskoeffizient) fasst eine ganze Wand einschließlich der Übergänge an die Luft zusammen. Kleiner U-Wert heißt gute Dämmung.',
'Gute Dämmstoffe schließen viel ruhende Luft ein. Durchnässte Dämmung leitet die Wärme viel besser und verliert ihre Wirkung.',
'Dämmung senkt auch die Oberflächentemperatur. Heiße Oberflächen sind eine Verbrennungsgefahr und müssen gedämmt oder abgedeckt werden.'],
fo:['Wärmestrom durch eine Wand: Q̇ = [[λ · A · ΔT||d]]',
'Mit U-Wert: Q̇ = U · A · ΔT',
'Energie: Q = Q̇ · t'],
mcq:[['Welcher Stoff dämmt am besten?','Mineralwolle','Stahl','Beton','Aluminium','Mineralwolle hat die kleinste Wärmeleitfähigkeit, weil sie viel ruhende Luft einschließt.'],
['Die Dämmschicht einer ebenen Ofenwand wird doppelt so dick. Wie ändert sich der Wärmeverlust durch die Dämmung?','Er halbiert sich','Er verdoppelt sich','Er bleibt gleich','Er sinkt auf ein Viertel','Q̇ ist umgekehrt proportional zur Dicke d.'],
['Die Dämmung einer Dampfleitung ist durchnässt. Was folgt daraus?','Der Wärmeverlust steigt stark','Die Dämmung wirkt besser','Nichts, solange sie hält','Die Leitung wird innen heißer','Wasser leitet die Wärme rund zwanzigmal besser als ruhende Luft.'],
['Was bedeutet ein kleiner U-Wert?','Es geht wenig Wärme verloren','Es geht viel Wärme verloren','Die Wand ist dünn','Die Wand ist aus Metall','U ist der Wärmestrom je m² Fläche und je Kelvin Temperaturdifferenz.']]}),
TM({t:'Konvektion & Strahlung',intro:'Wärme wird nicht nur durch Wände geleitet. Strömende Luft oder Flüssigkeit trägt sie mit (Konvektion), und jeder warme Körper strahlt sie ab (Strahlung). Die Strahlung nutzt Du bei der Thermografie, um heiße Lager, lose Klemmen oder schlechte Dämmung zu finden.',
pts:['Drei Wege der Wärmeübertragung: Leitung im Stoff, Konvektion mit strömendem Stoff, Strahlung ohne Stoff, also auch durch Vakuum.',
'Konvektion: Den Wärmeübergang von einer Oberfläche an Luft oder Wasser beschreibt der Wärmeübergangskoeffizient α. Bewegte Luft überträgt mehr Wärme als ruhende, Wasser viel mehr als Luft.',
'Freie Konvektion entsteht von selbst, weil warme Luft aufsteigt. Erzwungene Konvektion macht ein Lüfter oder eine Pumpe.',
'Strahlung wächst mit der vierten Potenz der absoluten Temperatur: Doppelte Temperatur in Kelvin ergibt die 16-fache Strahlung.',
'Der Emissionsgrad ε (0 bis 1) sagt, wie gut eine Oberfläche strahlt. Lack, Kunststoff und matte, oxidierte Flächen strahlen gut (ε um 0,9), blankes Metall schlecht (ε um 0,1).',
'Thermografie: Die Kamera misst Strahlung und rechnet sie in Temperatur um. Ist der Emissionsgrad falsch eingestellt, zeigt sie bei blankem Metall viel zu niedrige Werte. Abhilfe: Messstelle mit mattem Lack oder Klebeband versehen.'],
fo:['Konvektion: Q̇ = α · A · ΔT',
'Strahlung: Die Leistung wächst mit ε · T⁴ (T in Kelvin)'],
mcq:[['Wie gelangt die Wärme der Sonne zur Erde?','Durch Strahlung','Durch Wärmeleitung','Durch Konvektion','Durch Verdampfen','Im Weltraum gibt es keinen Stoff, der die Wärme leiten oder mitnehmen könnte.'],
['Eine Thermografiekamera ist auf ε = 0,95 eingestellt. Du misst eine blanke Edelstahlfläche. Was zeigt sie?','Eine zu niedrige Temperatur','Die richtige Temperatur','Eine zu hohe Temperatur','Gar nichts','Blankes Metall strahlt viel weniger, als die Kamera erwartet. Sie zeigt zu kalt an, dazu spiegelt sich die Umgebung.'],
['Warum hat ein Elektromotor Kühlrippen und einen Lüfter?','Größere Fläche und bewegte Luft verbessern die Wärmeabgabe durch Konvektion','Damit er leichter wird','Damit er weniger strahlt','Damit er leiser läuft','Q̇ = α · A · ΔT: Rippen vergrößern A, der Lüfter vergrößert α.'],
['Die absolute Temperatur eines Körpers verdoppelt sich. Wie ändert sich seine Wärmestrahlung?','Sie wird 16-mal so groß','Sie verdoppelt sich','Sie vervierfacht sich','Sie bleibt gleich','Strahlung wächst mit T⁴, und 2⁴ = 16.']]}),
TM({t:'Kreisprozesse & Wirkungsgrad',intro:'Wärmekraftmaschinen wie Dampfturbinen, Gasturbinen und Motoren wandeln Wärme in Arbeit um, aber nie vollständig. Der zweite Hauptsatz erklärt, warum immer Abwärme bleibt, und der Carnot-Wirkungsgrad zeigt die obere Grenze.',
pts:['Kreisprozess: Ein Arbeitsstoff durchläuft immer wieder dieselben Schritte, zum Beispiel Verdichten, Erhitzen, Entspannen, Abkühlen.',
'Zweiter Hauptsatz: Wärme fließt von selbst nur von warm nach kalt. Eine Maschine kann Wärme nicht vollständig in Arbeit umwandeln, ein Teil muss als Abwärme an die kalte Seite gehen.',
'Der Carnot-Wirkungsgrad ist die theoretische Obergrenze. Er hängt nur von der oberen und der unteren absoluten Temperatur ab.',
'Reale Maschinen erreichen deutlich weniger. Grobe Richtwerte: Ottomotor rund 35 %, Dieselmotor rund 40 %, Dampfkraftwerk rund 45 %, Gas-und-Dampf-Kraftwerk rund 60 %.',
'Mehr Wirkungsgrad gibt es durch eine höhere obere oder eine tiefere untere Temperatur. Die Abwärme lässt sich weiter nutzen (Kraft-Wärme-Kopplung, Blockheizkraftwerk).',
'Energiefluss: zugeführte Wärme = Nutzarbeit + Abwärme.'],
fo:['Wirkungsgrad: η = [[W_Nutz||Q_zu]]',
'Carnot-Wirkungsgrad: η_C = 1 − [[T_u||T_o]]',
'Energiebilanz: Q_zu = W_Nutz + Q_ab'],
mcq:[['Wovon hängt der Carnot-Wirkungsgrad ab?','Nur von der oberen und der unteren absoluten Temperatur','Vom Brennstoff','Von der Größe der Maschine','Von der Drehzahl','η_C = 1 − T_u : T_o.'],
['Eine ideale Maschine arbeitet zwischen 527 °C und 27 °C. Wie groß ist der Carnot-Wirkungsgrad?','62,5 %','95 %','50 %','5 %','T_o = 800 K, T_u = 300 K: η_C = 1 − 300 K : 800 K = 0,625.'],
['Warum braucht jedes Wärmekraftwerk Kühlwasser oder einen Kühlturm?','Ein Teil der Wärme muss als Abwärme an die kalte Umgebung gehen','Um den Dampf zu erzeugen','Nur um den Generator zu kühlen','Nur wegen des Umweltschutzes','Ohne kalte Seite läuft kein Kreisprozess. Das folgt aus dem zweiten Hauptsatz.'],
['Ein Anbieter verspricht einen Motor, der die ganze Brennstoffwärme in Arbeit umwandelt. Was sagst Du?','Unmöglich, das widerspricht dem zweiten Hauptsatz','Möglich mit besserem Öl','Möglich bei hoher Drehzahl','Möglich im Winter','Selbst die ideale Carnot-Maschine käme nur bei einer unteren Temperatur von 0 K auf 100 %.']]}),
TM({t:'Kältemaschine & Wärmepumpe',intro:'Kältemaschine und Wärmepumpe pumpen Wärme vom Kalten ins Warme. Das geht nur mit Antriebsarbeit, meist mit einem Verdichter. Im Betrieb begegnen sie Dir als Kaltwassersatz, Solekühlung für den Reaktor, Klimaanlage der Messwarte und Wärmepumpe für Abwärme.',
pts:['Kältekreis mit vier Bauteilen: Verdampfer (Kältemittel nimmt bei tiefer Temperatur Wärme auf und verdampft), Verdichter, Verflüssiger (gibt bei hoher Temperatur Wärme ab), Expansionsventil.',
'Kältemaschine: Nutzen ist die Wärme, die im Verdampfer aufgenommen wird. Wärmepumpe: Nutzen ist die Wärme, die im Verflüssiger abgegeben wird.',
'Energiebilanz: Wärme am Verflüssiger = Wärme am Verdampfer + Antriebsleistung.',
'Die Leistungszahl ε (englisch COP) sagt, wie viel Nutzwärme je kW Antrieb entsteht. Eine Wärmepumpe mit ε = 4 macht aus 1 kW Strom 4 kW Wärme.',
'Je kleiner der Temperaturhub zwischen Wärmequelle und Heizung, desto größer die Leistungszahl. Deshalb passen Wärmepumpen gut zu Fußbodenheizung und zu Abwärme als Quelle.',
'Arbeiten am Kältekreis mit fluorierten Kältemitteln (Füllen, Dichtheitskontrolle, Rückgewinnung) dürfen nur zertifizierte Fachleute ausführen. Rechtsstand vor dem Lehren prüfen.'],
fo:['Energiebilanz: Q̇_ab = Q̇_zu + P',
'Wärmepumpe: ε_WP = [[Q̇_ab||P]]',
'Kältemaschine: ε_K = [[Q̇_zu||P]]',
'Ideal (Carnot): ε_WP = [[T_o||T_o − T_u]]'],
mcq:[['Welches Bauteil gibt im Kältekreis die Wärme an die warme Seite ab?','Der Verflüssiger','Der Verdampfer','Das Expansionsventil','Der Sammler','Im Verflüssiger kondensiert das heiße Kältemittel und gibt dabei Wärme ab.'],
['Eine Wärmepumpe nimmt 2,5 kW elektrisch auf und hat die Leistungszahl 4. Welche Heizleistung liefert sie?','10 kW','6,5 kW','1,6 kW','4 kW','Q̇ = ε · P = 4 · 2,5 kW = 10 kW. Davon stammen 7,5 kW aus der Umwelt.'],
['Warum sinkt die Leistungszahl einer Luft-Wärmepumpe im Winter?','Der Temperaturhub zwischen Außenluft und Heizwasser wird größer','Der Strom wird teurer','Das Kältemittel wird schwerer','Der Verdichter läuft langsamer','Je größer der Abstand zwischen kalter und warmer Seite, desto mehr Arbeit braucht jedes kW Wärme.'],
['Ein Instandhalter ohne Zertifikat will Kältemittel in eine Klimaanlage nachfüllen. Was sagst Du?','Nicht erlaubt, das dürfen nur zertifizierte Fachleute','Erlaubt, wenn er Schutzhandschuhe trägt','Erlaubt, wenn die Anlage klein ist und es schnell geht','Erlaubt, wenn der Meister danebensteht','Für Arbeiten am Kältekreis mit fluorierten Kältemitteln ist eine Zertifizierung vorgeschrieben.']]});
TM({t:'Sieden & Kondensieren',intro:'Verdampfen und Kondensieren sind die Grundlage von Destillation, Rektifikation, Eindampfen und Dampfheizung. Entscheidend ist: Die Siedetemperatur hängt vom Druck ab, und beim Phasenwechsel wird sehr viel Wärme umgesetzt, ohne dass sich die Temperatur ändert.',
pts:['Eine Flüssigkeit siedet, wenn ihr Dampfdruck so groß ist wie der Druck über ihr. Wasser siedet bei 1013 mbar bei 100 °C.',
'Weniger Druck, niedrigere Siedetemperatur: Unter Vakuum lassen sich temperaturempfindliche Stoffe schonend destillieren. Mehr Druck, höhere Siedetemperatur: So erreicht Heizdampf höhere Temperaturen.',
'Beim Sieden bleibt die Temperatur gleich, bis alles verdampft ist. Die zugeführte Wärme steckt als Verdampfungswärme r im Dampf.',
'Beim Kondensieren gibt der Dampf genau diese Wärme wieder ab. Deshalb heizt man mit kondensierendem Dampf, und deshalb braucht der Kondensator einer Kolonne so viel Kühlwasser.',
'Rechenwerte für r bei Siedetemperatur und Normaldruck in [[kJ||kg]]: Wasser 2257, Ethanol 840, Aceton 525, Toluol 360.',
'Verbrühungen durch Dampf sind schwer, weil der Dampf auf der Haut kondensiert und dabei seine Verdampfungswärme abgibt.'],
fo:['Verdampfen oder Kondensieren: Q = m · r',
'Aufheizen und Verdampfen: Q = m · c · ΔT + m · r',
'Wärmestrom: Q̇ = ṁ · r'],
mcq:[['Wie ändert sich die Siedetemperatur, wenn der Druck in der Kolonne gesenkt wird?','Sie sinkt','Sie steigt','Sie bleibt gleich','Sie springt auf 100 °C','Die Flüssigkeit siedet, sobald ihr Dampfdruck den Druck über ihr erreicht. Bei kleinerem Druck ist das schon bei tieferer Temperatur der Fall.'],
['Ein Kessel mit siedendem Wasser wird weiter beheizt. Was passiert mit der Temperatur des Wassers?','Sie bleibt gleich, bis alles verdampft ist','Sie steigt gleichmäßig weiter','Sie sinkt','Sie schwankt stark','Die zugeführte Wärme wird als Verdampfungswärme gebraucht, nicht zum Erwärmen.'],
['Warum heizt man in der Chemie gern mit kondensierendem Sattdampf?','Er gibt beim Kondensieren viel Wärme bei gleichbleibender Temperatur ab','Er ist billiger als Wasser','Er kann nicht zu heiß werden, egal bei welchem Druck','Er braucht keine Rohrleitungen','Die Kondensationswärme ist groß, und die Temperatur lässt sich über den Dampfdruck einstellen.'],
['Warum wird ein temperaturempfindliches Produkt im Vakuum destilliert?','Weil es dann bei niedrigerer Temperatur siedet','Weil Vakuum besser kühlt','Weil es dann schneller reagiert','Weil dann kein Kondensator nötig ist','Der niedrigere Druck senkt die Siedetemperatur, das Produkt wird geschont.']]});
TM({t:'Reaktionswärme & Enthalpie',intro:'Jede chemische Reaktion setzt Wärme frei oder braucht Wärme. Wie viel, sagt die Reaktionsenthalpie. Zusammen mit der Stöchiometrie rechnest Du aus, welche Wärme eine Charge entwickelt und wie stark sich der Kessel ohne Kühlung erwärmen würde.',
pts:['Exotherm: Die Reaktion gibt Wärme ab, die Reaktionsenthalpie ΔH_R ist negativ. Es muss gekühlt werden.',
'Endotherm: Die Reaktion nimmt Wärme auf, ΔH_R ist positiv. Es muss geheizt werden.',
'Die molare Reaktionsenthalpie steht in [[kJ||mol]] und gilt für den Formelumsatz der Reaktionsgleichung.',
'Rechenweg in zwei Schritten: erst die Stoffmenge aus Masse und molarer Masse (Stöchiometrie), dann die Wärme aus Stoffmenge und Reaktionsenthalpie. Ein Fehler im ersten Schritt zieht sich durch.',
'Aus Tabellenwerten: Reaktionsenthalpie = Bildungsenthalpien der Produkte minus Bildungsenthalpien der Edukte, jeweils mal der Zahl aus der Reaktionsgleichung. Elemente haben die Bildungsenthalpie null.',
'Die adiabate Temperaturerhöhung sagt, um wie viel sich der Ansatz erwärmt, wenn die Kühlung ausfällt. Sie ist eine wichtige Kennzahl für die Sicherheit.'],
fo:['Stoffmenge: n = [[m||M]]',
'Reaktionswärme: Q = n · ΔH_R',
'Aus Bildungsenthalpien: ΔH_R = ΣΔH_B(Produkte) − ΣΔH_B(Edukte)',
'Adiabate Temperaturerhöhung: ΔT_ad = [[Q||m_ges · c]]'],
mcq:[['Eine Reaktion hat ΔH_R = −120 kJ/mol. Was bedeutet das?','Sie ist exotherm und gibt je Formelumsatz 120 kJ ab','Sie ist endotherm und braucht 120 kJ','Sie läuft nicht ab','Sie kühlt den Kessel','Das negative Vorzeichen zeigt: Das System gibt Energie ab.'],
['Was brauchst Du zuerst, um die Wärme einer Charge zu berechnen?','Die umgesetzte Stoffmenge in mol','Die Farbe des Produkts','Den Durchmesser des Kessels','Die Drehzahl des Rührers','Die Reaktionsenthalpie gilt je mol. Die Stoffmenge kommt aus Masse und molarer Masse.'],
['Wozu dient die adiabate Temperaturerhöhung?','Sie zeigt, wie heiß der Ansatz ohne Kühlung würde','Sie gibt die Heizleistung des Mantels an','Sie ist die Siedetemperatur des Lösemittels','Sie beschreibt die Raumtemperatur','Ist sie groß, kann ein Kühlausfall zu Sieden, Druckaufbau oder Zersetzung führen.'],
['Welche Bildungsenthalpie haben Elemente wie O₂ oder N₂ im Normzustand?','Null','Immer −100 kJ/mol','Immer +100 kJ/mol','Das hängt vom Hersteller ab','So ist der Bezugspunkt der Tabellen festgelegt.']]});
TM({t:'Wärmebilanz am Reaktor',intro:'Im Reaktor stehen sich zwei Wärmeströme gegenüber: die Wärme, die die Reaktion erzeugt, und die Wärme, die der Kühlmantel abführt. Solange beide gleich sind, bleibt die Temperatur stabil. Kippt die Bilanz, kann die Reaktion durchgehen.',
pts:['Stabiler Betrieb: erzeugte Wärme = abgeführte Wärme. Dann bleibt die Reaktortemperatur gleich.',
'Wärmeerzeugung: Sie hängt davon ab, wie viel Stoff je Zeit reagiert. Bei Zulaufverfahren steuerst Du sie über die Dosierung.',
'Wärmeabfuhr: Sie wächst mit Wärmedurchgang k, Kühlfläche A und dem Abstand zwischen Reaktor- und Kühlmitteltemperatur.',
'Durchgehen: Mit steigender Temperatur wird die Reaktion schneller (Faustregel: etwa doppelt so schnell je 10 K) und erzeugt mehr Wärme. Die Kühlung wächst nur gleichmäßig mit. Ab einem Punkt holt sie die Reaktion nicht mehr ein.',
'Typische Auslöser: Kühlwasserausfall, Rührerausfall, zu schnelle Dosierung, Anreicherung von unreagiertem Edukt bei zu kalter Fahrweise.',
'Schutz: Temperaturregelung auf das Kühlwasserventil, Verriegelung der Dosierung bei zu hoher Temperatur oder Rührerausfall, Notkühlung, Reaktionsstopper, Druckentlastung. Im Störfall zuerst die Dosierung stoppen.'],
fo:['Wärmeerzeugung: Q̇_R = ṅ · ΔH_R',
'Wärmeabfuhr: Q̇_K = k · A · (ϑ_R − ϑ_K)',
'Stabil, wenn: Q̇_R = Q̇_K'],
mcq:[['Die Reaktortemperatur steigt, obwohl das Kühlwasserventil ganz offen ist. Was tust Du zuerst?','Die Dosierung stoppen','Den Rührer abstellen','Mehr Edukt zugeben, damit es schneller fertig ist','Abwarten','Ohne Zulauf kommt kein neuer Brennstoff für die Reaktion nach. Der Rührer muss weiterlaufen, sonst bricht die Wärmeabfuhr ein.'],
['Warum ist der Ausfall des Rührers bei einer exothermen Reaktion gefährlich?','Die Wärme wird schlechter an die Kühlfläche gebracht, und Edukt kann sich anreichern','Der Kessel wird leichter','Die Reaktion hört sofort auf','Das Kühlwasser wird wärmer','Ohne Durchmischung bricht der Wärmeübergang ein, es entstehen heiße Zonen.'],
['Warum kann eine Reaktion durchgehen?','Die Wärmeerzeugung steigt mit der Temperatur viel stärker als die Wärmeabfuhr','Weil Kühlwasser brennbar ist','Weil der Mantel zu groß ist','Weil die Temperatur sinkt','Die Reaktion beschleunigt sich selbst, die Kühlung wächst nur gleichmäßig mit dem Temperaturabstand.'],
['Bei einem Zulaufverfahren wird versehentlich zu kalt gefahren und trotzdem weiter dosiert. Was ist das Risiko?','Unreagiertes Edukt reichert sich an und reagiert später auf einmal','Keines, kalt ist immer sicher','Das Produkt friert ein','Der Rührer läuft schneller','Die angesammelte Menge kann beim Erwärmen schlagartig reagieren und mehr Wärme freisetzen, als die Kühlung schafft.']]});
FRD.ch.grp.splice(1,0,['Thermodynamik',['Gasgesetze','Erster Hauptsatz','Zustandsänderungen','Sieden & Kondensieren','Reaktionswärme & Enthalpie','Wärmebilanz am Reaktor','Wärmeleitung & Dämmung','Konvektion & Strahlung','Kreisprozesse & Wirkungsgrad','Kältemaschine & Wärmepumpe'].map(t=>D.tec.modules.findIndex(x=>x.t===t))]);
FRD.ch.subt+=', Thermodynamik';

/* ---------- Rechenaufgaben ---------- */
{const f='tec',m0=n=>MI(f,n);
{const m=m0('Gasgesetze');
C.push({f,m,name:'Behälterdruck nach Erwärmen',gen:r=>{const pe=r.step(6,10,0.5),t1=r.p([10,15,20]),t2=r.step(40,70,5),p2=(pe+1)*(t2+273)/(t1+273);
 return{q:'Ein Druckluftbehälter wird bei '+t1+' °C auf '+nt(pe)+' bar Überdruck gefüllt und abgesperrt. Im Sommer erwärmt er sich auf '+t2+' °C. Welchen Überdruck zeigt das Manometer dann?',a:p2-1,u:'bar',d:2,tol:0.01,
 sol:['p_1 = '+nt(pe)+' bar + 1 bar = '+nt(pe+1)+' bar (absolut)','T_1 = '+t1+' °C + 273 K = '+(t1+273)+' K, T_2 = '+t2+' °C + 273 K = '+(t2+273)+' K','V bleibt gleich: p_2 = p_1 · [[T_2||T_1]] = '+nt(pe+1)+' bar · [['+(t2+273)+' K||'+(t1+273)+' K]] = '+nz(p2,2)+' bar','p_e2 = '+nz(p2,2)+' bar − 1 bar = '+nz(p2-1,2)+' bar']}}});
C.push({f,m,name:'Angesaugte Luft für einen Behälter',gen:r=>{const V=r.p([250,500,750,1000]),pe=r.step(6,11,1),Va=V*(pe+1)/1000;
 return{q:'Ein leerer Druckluftbehälter mit '+V+' l Inhalt (Anfangsdruck 1 bar absolut) wird auf '+pe+' bar Überdruck gefüllt. Wie viel Luft (bei 1 bar und gleicher Temperatur) muss der Kompressor dafür ansaugen? Die Luft im Behälter am Anfang zählt mit.',a:Va,u:'m³',d:2,tol:0.01,
 sol:['p_2 = '+pe+' bar + 1 bar = '+(pe+1)+' bar (absolut)','Gleiche Temperatur: p_1 · V_1 = p_2 · V_2, also V_1 = [[p_2 · V_2||p_1]] = [['+(pe+1)+' bar · '+V+' l||1 bar]] = '+nz(V*(pe+1),0)+' l','Gesamte Luftmenge: '+nz(V*(pe+1),0)+' l = '+nz(Va,2)+' m³, davon war '+nz(V/1000,2)+' m³ schon im Behälter']}}});
C.push({f,m,name:'Allgemeine Gasgleichung',gen:r=>{const V1=r.step(2,10,1),p1=r.p([1,2,3]),t1=r.p([15,20,25]),V2=r.step(0.5,V1/2,0.5),t2=r.step(60,150,10),p2=p1*V1*(t2+273)/(V2*(t1+273));
 return{q:'In einem Zylinder werden '+nt(V1)+' l Luft mit '+p1+' bar (absolut) und '+t1+' °C auf '+nt(V2)+' l verdichtet. Danach hat die Luft '+t2+' °C. Wie groß ist der absolute Enddruck?',a:p2,u:'bar',d:2,tol:0.01,
 sol:['T_1 = '+(t1+273)+' K, T_2 = '+(t2+273)+' K','p_2 = p_1 · [[V_1||V_2]] · [[T_2||T_1]]','p_2 = '+p1+' bar · [['+nt(V1)+' l||'+nt(V2)+' l]] · [['+(t2+273)+' K||'+(t1+273)+' K]] = '+nz(p2,2)+' bar']}}});}
{const m=m0('Erster Hauptsatz');
C.push({f,m,name:'Innere Energie',gen:r=>{const Q=r.step(20,120,5),W=r.step(5,Q-5,5),dU=Q-W;
 return{q:'Einem Gas in einem Zylinder werden '+Q+' kJ Wärme zugeführt. Gleichzeitig schiebt es den Kolben hinaus und gibt dabei '+W+' kJ Arbeit ab. Um wie viel ändert sich seine innere Energie?',a:dU,u:'kJ',d:0,tol:0.005,
 sol:['Q = ΔU + W_ab, umgestellt: ΔU = Q − W_ab','ΔU = '+Q+' kJ − '+W+' kJ = '+dU+' kJ','Die innere Energie steigt, das Gas wird wärmer.']}}});
C.push({f,m,name:'Volumenänderungsarbeit',gen:r=>{const p=r.step(2,10,1),dV=r.step(5,60,5),W=p*1e5*dV/1000;
 return{q:'Ein Gas dehnt sich bei gleichbleibend '+p+' bar (absolut) um '+dV+' l aus. Welche Arbeit gibt es ab?',a:W/1000,u:'kJ',d:2,tol:0.01,
 sol:['p = '+p+' bar = '+nz(p*1e5,0)+' Pa, ΔV = '+dV+' l = '+nt(dV/1000)+' m³','W = p · ΔV = '+nz(p*1e5,0)+' Pa · '+nt(dV/1000)+' m³ = '+nz(W,0)+' J','W = '+nz(W,0)+' J = '+nz(W/1000,2)+' kJ']}}});
C.push({f,m,name:'Wärme bei gleichem Druck',gen:r=>{const p=r.p([2,3,4,5]),dV=r.step(10,50,5),dU=r.step(5,30,1),W=p*1e5*dV/1e6,Q=dU+W;
 return{q:'Ein Gas wird bei gleichbleibend '+p+' bar (absolut) erwärmt. Seine innere Energie steigt um '+dU+' kJ, sein Volumen um '+dV+' l. Wie viel Wärme wurde zugeführt?',a:Q,u:'kJ',d:1,tol:0.01,
 sol:['W_ab = p · ΔV = '+nz(p*1e5,0)+' Pa · '+nt(dV/1000)+' m³ = '+nz(W*1000,0)+' J = '+nz(W,1)+' kJ','Q = ΔU + W_ab = '+dU+' kJ + '+nz(W,1)+' kJ = '+nz(Q,1)+' kJ']}}});}
{const m=m0('Zustandsänderungen');
C.push({f,m,name:'Isotherm verdichten',gen:r=>{const V1=r.step(2,12,1),p1=1,p2=r.step(4,10,1),V2=V1*p1/p2;
 return{q:''+V1+' l Luft mit 1 bar (absolut) werden langsam und gut gekühlt, also bei gleicher Temperatur, auf '+p2+' bar (absolut) verdichtet. Welches Volumen hat die Luft danach?',a:V2,u:'l',d:2,tol:0.01,
 sol:['Isotherm: p_1 · V_1 = p_2 · V_2','V_2 = [[p_1 · V_1||p_2]] = [[1 bar · '+V1+' l||'+p2+' bar]] = '+nz(V2,2)+' l']}}});
C.push({f,m,name:'Endtemperatur beim schnellen Verdichten',gen:r=>{const e=r.p([3,4,5,6,8]),t1=r.p([10,20,30]),T2=(t1+273)*Math.pow(e,0.4);
 return{q:'Luft mit '+t1+' °C wird schnell und ohne Kühlung (adiabat) im Verhältnis ε = '+e+' verdichtet. Welche Temperatur hat sie am Ende?',a:T2-273,u:'°C',d:0,tol:0.01,
 sol:['T_1 = '+t1+' °C + 273 K = '+(t1+273)+' K','T_2 = T_1 · ε^{0,4} = '+(t1+273)+' K · '+e+'^{0,4} = '+(t1+273)+' K · '+nz(Math.pow(e,0.4),3)+' = '+nz(T2,0)+' K','ϑ_2 = '+nz(T2,0)+' K − 273 K = '+nz(T2-273,0)+' °C']}}});}
{const m=m0('Wärmeleitung & Dämmung');
C.push({f,m,name:'Wärmestrom durch eine Ofenwand',gen:r=>{const l=r.p([0.04,0.05,0.08]),A=r.step(2,8,0.5),d=r.step(50,200,25),dT=r.step(150,500,50),Qd=l*A*dT/(d/1000);
 return{q:'Die Dämmung einer Ofenwand ist '+d+' mm dick (λ = '+nt(l)+' W/(m · K)), die Fläche beträgt '+nt(A)+' m². Innen an der Dämmung herrschen '+(dT+30)+' °C, außen 30 °C. Wie groß ist der Wärmestrom durch die Dämmung?',a:Qd,u:'W',d:0,tol:0.01,
 sol:['ΔT = '+(dT+30)+' °C − 30 °C = '+dT+' K, d = '+d+' mm = '+nt(d/1000)+' m','Q̇ = [[λ · A · ΔT||d]] = [['+nt(l)+' W/(m · K) · '+nt(A)+' m² · '+dT+' K||'+nt(d/1000)+' m]] = '+nz(Qd,0)+' W']}}});
C.push({f,m,name:'Heizkosten einer Hallenwand',gen:r=>{const U=r.p([0.3,0.5,1.2,1.8]),A=r.step(200,800,50),dT=r.p([15,18,20]),h=r.p([2000,2500,3000]),pr=r.p([0.1,0.12,0.15]),Qd=U*A*dT,E=Qd*h/1000,K=E*pr;
 return{q:'Eine Hallenwand hat '+A+' m² und den U-Wert '+nt(U)+' W/(m² · K). Im Mittel ist es innen '+dT+' K wärmer als außen, und das an '+h+' Heizstunden im Jahr. Die Wärme kostet '+nz(pr,2)+' € je kWh. Wie hoch sind die Heizkosten für die Wand im Jahr?',a:K,u:'€',d:0,tol:0.01,
 sol:['Q̇ = U · A · ΔT = '+nt(U)+' W/(m² · K) · '+A+' m² · '+dT+' K = '+nz(Qd,0)+' W','Q = Q̇ · t = '+nz(Qd/1000,2)+' kW · '+h+' h = '+nz(E,0)+' kWh','K = '+nz(E,0)+' kWh · '+nz(pr,2)+' €/kWh = '+nz(K,0)+' €']}}});
C.push({f,m,name:'Nötige Dämmdicke',gen:r=>{const l=r.p([0.035,0.04,0.05]),q=r.step(50,200,25),dT=r.step(100,300,50),d=l*dT/q;
 return{q:'Durch die Dämmung einer Behälterwand sollen höchstens '+q+' W je m² fließen. Über der Dämmung liegen '+dT+' K Temperaturdifferenz, λ = '+nt(l)+' W/(m · K). Wie dick muss die Dämmung mindestens sein?',a:d*1000,u:'mm',d:0,tol:0.01,
 sol:['Je m²: [[Q̇||A]] = [[λ · ΔT||d]], umgestellt: d = [[λ · ΔT||Q̇ : A]]','d = [['+nt(l)+' W/(m · K) · '+dT+' K||'+q+' W/m²]] = '+nz(d,3)+' m = '+nz(d*1000,0)+' mm']}}});}
{const m=m0('Konvektion & Strahlung');
C.push({f,m,name:'Wärmeabgabe durch Konvektion',gen:r=>{const a=r.p([5,10,25,50]),A=r.step(0.5,4,0.5),ts=r.step(40,90,5),tu=r.p([20,25]),Q=a*A*(ts-tu);
 return{q:'Ein Gehäuse mit '+nt(A)+' m² Oberfläche ist '+ts+' °C warm, die Luft ringsum hat '+tu+' °C. Der Wärmeübergangskoeffizient beträgt '+a+' W/(m² · K). Wie viel Wärme gibt das Gehäuse durch Konvektion ab?',a:Q,u:'W',d:0,tol:0.01,
 sol:['ΔT = '+ts+' °C − '+tu+' °C = '+(ts-tu)+' K','Q̇ = α · A · ΔT = '+a+' W/(m² · K) · '+nt(A)+' m² · '+(ts-tu)+' K = '+nz(Q,0)+' W']}}});
C.push({f,m,name:'Strahlung bei höherer Temperatur',gen:r=>{const t1=r.p([27,77,127]),t2=r.p([227,327,427,527]),v=Math.pow((t2+273)/(t1+273),4);
 return{q:'Eine Fläche wird von '+t1+' °C auf '+t2+' °C erhitzt. Auf das Wievielfache steigt ihre Wärmestrahlung?',a:v,u:'',d:1,tol:0.02,
 sol:['T_1 = '+t1+' °C + 273 K = '+(t1+273)+' K, T_2 = '+t2+' °C + 273 K = '+(t2+273)+' K','[[T_2||T_1]] = [['+(t2+273)+' K||'+(t1+273)+' K]] = '+nz((t2+273)/(t1+273),3),'Strahlung wächst mit T⁴: '+nz((t2+273)/(t1+273),3)+'⁴ = '+nz(v,1)+'-fach']}}});}
{const m=m0('Kreisprozesse & Wirkungsgrad');
C.push({f,m,name:'Carnot-Wirkungsgrad',gen:r=>{const to=r.step(300,900,50),tu=r.p([20,30,40]),e=1-(tu+273)/(to+273);
 return{q:'Eine Wärmekraftmaschine arbeitet zwischen '+to+' °C und '+tu+' °C. Wie groß ist der Carnot-Wirkungsgrad?',a:e*100,u:'%',d:1,tol:0.01,
 sol:['T_o = '+to+' °C + 273 K = '+(to+273)+' K, T_u = '+tu+' °C + 273 K = '+(tu+273)+' K','η_C = 1 − [[T_u||T_o]] = 1 − [['+(tu+273)+' K||'+(to+273)+' K]] = '+nz(e,3)+' = '+nz(e*100,1)+' %']}}});
C.push({f,m,name:'Abwärme eines Motors',gen:r=>{const P=r.step(20,200,10),eta=r.p([0.3,0.35,0.4,0.42]),Qz=P/eta,Qa=Qz-P;
 return{q:'Ein Gasmotor gibt '+P+' kW mechanische Leistung ab, sein Wirkungsgrad beträgt '+nz(eta*100,0)+' %. Wie viel Abwärme fällt an?',a:Qa,u:'kW',d:1,tol:0.01,
 sol:['Q̇_zu = [[P||η]] = [['+P+' kW||'+nt(eta)+']] = '+nz(Qz,1)+' kW','Q̇_ab = Q̇_zu − P = '+nz(Qz,1)+' kW − '+P+' kW = '+nz(Qa,1)+' kW']}}});}
{const m=m0('Kältemaschine & Wärmepumpe');
C.push({f,m,name:'Heizleistung der Wärmepumpe',gen:r=>{const P=r.step(2,20,0.5),e=r.p([2.8,3.2,3.5,4,4.5]),Q=P*e;
 return{q:'Eine Wärmepumpe nimmt '+nt(P)+' kW elektrische Leistung auf, ihre Leistungszahl beträgt '+nt(e)+'. Welche Heizleistung liefert sie, und wie viel davon kommt aus der Umwelt?',a:Q,u:'kW',d:1,tol:0.01,
 sol:['Q̇_ab = ε_WP · P = '+nt(e)+' · '+nt(P)+' kW = '+nz(Q,1)+' kW','Aus der Umwelt: Q̇_zu = Q̇_ab − P = '+nz(Q,1)+' kW − '+nt(P)+' kW = '+nz(Q-P,1)+' kW']}}});
C.push({f,m,name:'Antrieb der Kältemaschine',gen:r=>{const Q0=r.step(5,60,5),e=r.p([2.5,3,3.5,4]),P=Q0/e;
 return{q:'Ein Kaltwassersatz soll '+Q0+' kW Wärme aus dem Kühlwasser einer Maschine abführen. Seine Leistungszahl als Kältemaschine beträgt '+nt(e)+'. Welche Antriebsleistung braucht er, und wie viel Wärme gibt er am Verflüssiger ab?',a:P,u:'kW',d:2,tol:0.01,
 sol:['P = [[Q̇_zu||ε_K]] = [['+Q0+' kW||'+nt(e)+']] = '+nz(P,2)+' kW','Q̇_ab = Q̇_zu + P = '+Q0+' kW + '+nz(P,2)+' kW = '+nz(Q0+P,2)+' kW']}}});
C.push({f,m,name:'Ideale Leistungszahl',gen:r=>{const tu=r.p([-5,0,5,10,20]),to=r.p([35,45,55]),e=(to+273)/(to-tu);
 return{q:'Eine Wärmepumpe holt Wärme bei '+tu+' °C und gibt sie bei '+to+' °C ab. Wie groß ist die ideale Leistungszahl (Carnot)?',a:e,u:'',d:2,tol:0.01,
 sol:['T_o = '+(to+273)+' K, T_o − T_u = '+to+' °C − ('+tu+' °C) = '+(to-tu)+' K','ε_WP = [[T_o||T_o − T_u]] = [['+(to+273)+' K||'+(to-tu)+' K]] = '+nz(e,2),'Reale Wärmepumpen erreichen etwa die Hälfte davon.']}}});}

}

/* ---------- Fachgespräch ---------- */
ORAL.push(['tec','Ein Mitarbeiter misst mit der Wärmebildkamera an einer blanken Welle nur 35 °C, obwohl das Lager heiß läuft. Was erklärst Du ihm?','Blankes Metall hat einen kleinen Emissionsgrad und spiegelt die Umgebung, die Kamera zeigt zu niedrig an. Emissionsgrad passend einstellen oder Messstelle mit mattem Lack oder Klebeband versehen, an einer matten Gehäusestelle messen, Vergleich mit Kontaktthermometer.'],
['tec','Warum ist eine Wärmepumpe für die Hallenheizung nicht immer die beste Lösung?','Die Leistungszahl hängt vom Temperaturhub ab: Kalte Quelle und hohe Vorlauftemperatur (zum Beispiel alte Heizkörper) verschlechtern sie. Gut sind niedrige Vorlauftemperaturen und warme Quellen wie Abwärme. Dazu Stromanschluss, Kosten, Platz, Kältemittelvorschriften und Wartung bedenken.']);
{const f='tec',m0=n=>MI(f,n);
{const m=m0('Sieden & Kondensieren');
C.push({f,m,name:'Aufheizen und Verdampfen',gen:r=>{const ms=r.step(200,2000,100),t1=r.p([15,20,25]),Q1=ms*4.18*(100-t1),Q2=ms*2257,Q=(Q1+Q2)/1000;
 return{q:''+ms+' kg Wasser von '+t1+' °C sollen bei Normaldruck auf 100 °C erwärmt und vollständig verdampft werden (c = 4,18 kJ/(kg · K), r = 2257 kJ/kg). Wie viel Wärme ist insgesamt nötig?',a:Q,u:'MJ',d:0,tol:0.01,
 sol:['Aufheizen: Q_1 = m · c · ΔT = '+ms+' kg · 4,18 kJ/(kg · K) · '+(100-t1)+' K = '+nz(Q1,0)+' kJ','Verdampfen: Q_2 = m · r = '+ms+' kg · 2257 kJ/kg = '+nz(Q2,0)+' kJ','Q = Q_1 + Q_2 = '+nz(Q1+Q2,0)+' kJ = '+nz(Q,0)+' MJ']}}});
C.push({f,m,name:'Leistung des Verdampfers',gen:r=>{const S=r.p([['Ethanol',840],['Aceton',525],['Toluol',360]]),ms=r.step(200,1500,100),P=ms*S[1]/3600;
 return{q:'Ein Verdampfer soll je Stunde '+ms+' kg '+S[0]+' bei Siedetemperatur verdampfen (r = '+S[1]+' kJ/kg). Welche Heizleistung braucht er?',a:P,u:'kW',d:1,tol:0.01,
 sol:['Q̇ = ṁ · r = '+ms+' kg/h · '+S[1]+' kJ/kg = '+nz(ms*S[1],0)+' kJ/h','Q̇ = '+nz(ms*S[1],0)+' kJ/h : 3600 s/h = '+nz(P,1)+' kW']}}});}
{const m=m0('Reaktionswärme & Enthalpie');
C.push({f,m,name:'Wärme einer Charge',gen:r=>{const M=r.p([40,60,80,100,120]),ms=r.step(100,800,50),dH=r.step(40,180,10),n=ms*1000/M,Q=n*dH/1000;
 return{q:'In einer Charge werden '+ms+' kg eines Edukts (M = '+M+' g/mol) vollständig umgesetzt. Die Reaktionsenthalpie beträgt −'+dH+' kJ/mol. Wie viel Wärme wird frei?',a:Q,u:'MJ',d:0,tol:0.01,
 sol:['n = [[m||M]] = [['+nz(ms*1000,0)+' g||'+M+' g/mol]] = '+nz(n,0)+' mol','Q = n · ΔH_R = '+nz(n,0)+' mol · (−'+dH+' kJ/mol) = −'+nz(n*dH,0)+' kJ','Es werden '+nz(Q,0)+' MJ frei (Vorzeichen minus: Wärme wird abgegeben).']}}});
C.push({f,m,name:'Reaktionsenthalpie aus Tabellenwerten',gen:r=>{const a=-r.step(50,150,10),b=-r.step(100,300,10),c=-r.step(400,700,10),dH=c-(a+b);
 return{q:'Für die Reaktion A + B → C stehen im Tabellenbuch die Bildungsenthalpien: A '+nz(a,0)+' kJ/mol, B '+nz(b,0)+' kJ/mol, C '+nz(c,0)+' kJ/mol. Wie groß ist die Reaktionsenthalpie?',a:dH,u:'kJ/mol',d:0,tol:0.005,
 sol:['ΔH_R = ΔH_B(C) − (ΔH_B(A) + ΔH_B(B))','ΔH_R = '+nz(c,0)+' kJ/mol − ('+nz(a,0)+' kJ/mol + ('+nz(b,0)+' kJ/mol)) = '+nz(dH,0)+' kJ/mol',dH<0?'Negativ: Die Reaktion ist exotherm.':'Positiv: Die Reaktion ist endotherm.']}}});
C.push({f,m,name:'Adiabate Temperaturerhöhung',gen:r=>{const Q=r.step(100,900,50),mg=r.step(2000,8000,500),c=r.p([2.5,3,3.5,4.18]),dT=Q*1000/(mg*c);
 return{q:'Eine Reaktion setzt '+Q+' MJ frei. Der Ansatz hat '+mg+' kg und c = '+nt(c)+' kJ/(kg · K). Um wie viel Kelvin würde er sich erwärmen, wenn die Kühlung ausfällt?',a:dT,u:'K',d:1,tol:0.01,
 sol:['ΔT_ad = [[Q||m_ges · c]] = [['+nz(Q*1000,0)+' kJ||'+mg+' kg · '+nt(c)+' kJ/(kg · K)]] = '+nz(dT,1)+' K']}}});}
{const m=m0('Wärmebilanz am Reaktor');
C.push({f,m,name:'Wärmeerzeugung beim Dosieren',gen:r=>{const md=r.step(100,600,50),M=r.p([50,80,100]),dH=r.step(60,160,10),n=md*1000/M,P=n*dH/3600;
 return{q:'In einen Reaktor werden '+md+' kg/h Edukt (M = '+M+' g/mol) dosiert, das sofort abreagiert (ΔH_R = −'+dH+' kJ/mol). Welche Wärmeleistung muss die Kühlung abführen?',a:P,u:'kW',d:1,tol:0.01,
 sol:['ṅ = [[ṁ||M]] = [['+nz(md*1000,0)+' g/h||'+M+' g/mol]] = '+nz(n,0)+' mol/h','Q̇_R = ṅ · ΔH_R = '+nz(n,0)+' mol/h · '+dH+' kJ/mol = '+nz(n*dH,0)+' kJ/h (wird frei)','Q̇_R = '+nz(n*dH,0)+' kJ/h : 3600 s/h = '+nz(P,1)+' kW']}}});
C.push({f,m,name:'Kühlleistung des Mantels',gen:r=>{const k=r.p([300,400,500]),A=r.step(8,24,2),tr=r.step(60,90,5),tk=r.p([20,25,30]),P=k*A*(tr-tk)/1000;
 return{q:'Ein Rührkessel hat '+A+' m² Kühlfläche, k = '+k+' W/(m² · K). Der Inhalt hat '+tr+' °C, das Kühlmittel im Mittel '+tk+' °C. Welche Wärmeleistung führt der Mantel ab?',a:P,u:'kW',d:1,tol:0.01,
 sol:['Δϑ = '+tr+' °C − '+tk+' °C = '+(tr-tk)+' K','Q̇_K = k · A · Δϑ = '+k+' W/(m² · K) · '+A+' m² · '+(tr-tk)+' K = '+nz(P*1000,0)+' W = '+nz(P,1)+' kW']}}});}
}
ORAL.push(['tec','Bei einer exothermen Zulaufreaktion steigt die Temperatur trotz voll geöffneter Kühlung weiter. Wie gehst Du vor?','Dosierung sofort stoppen, Rührer weiterlaufen lassen, Notkühlung nutzen, Leitwarte und Vorgesetzte informieren, nach Betriebsanweisung handeln (Reaktionsstopper, Entspannen, Alarmplan). Danach Ursache klären: Kühlwasser, Regelventil, Dosierrate, Anreicherung von Edukt. Ereignis dokumentieren und mit der Schicht besprechen.']);
}
