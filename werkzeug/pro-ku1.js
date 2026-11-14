/* ===== Lernlabor Pro, Pakete K1 und K2: Kunststoff & Kautschuk, Technik. Eigene Texte und Aufgaben.
   Gliederung nach der Verordnung von 2014 (Betriebstechnik, Werkstoffe, Produktionsprozesse, dazu ein Wahlschwerpunkt).
   Stoffwerte, Drücke und Temperaturen sind Beispielwerte zum Üben. Maßgeblich sind die Datenblätter der Hersteller. ===== */
if(FR==='ku'){
/* gemeinsam mit Metall: Hydraulik bekommt einen Einstieg aus der Kunststoffverarbeitung */
{const h=D.tec.modules.find(m=>m.t==='Hydraulik: Zylinder & Pumpe');if(h)h.intro='Viele Spritzgieß- und Pressmaschinen schließen ihr Werkzeug hydraulisch und spritzen mit Öldruck ein. Wer Zylinderkraft, Druck und Volumenstrom versteht, versteht auch Schließkraft, Einspritzgeschwindigkeit und Energiebedarf seiner Maschine.'}

TM({t:'Temperieren & Kühlen von Werkzeugen',intro:'Ein Spritzgießwerkzeug ist ein Wärmetauscher: Die heiße Schmelze bringt Wärme hinein, das Temperiermedium trägt sie wieder hinaus. Wie gut das klappt, entscheidet über Zykluszeit, Maßhaltigkeit und Oberfläche.',
pts:['Die Kühlzeit ist meist der längste Abschnitt des Zyklus. Jede Sekunde weniger Kühlzeit bringt direkt mehr Teile je Schicht.',
'Wasser ist das übliche Temperiermedium. Für hohe Werkzeugtemperaturen nimmt man Druckwasser oder Öl. Welche Temperatur richtig ist, steht im Datenblatt des Werkstoffs.',
'Der Durchfluss muss so groß sein, dass sich das Wasser zwischen Vor- und Rücklauf nur um wenige Kelvin erwärmt. Sonst ist das Werkzeug an einer Stelle wärmer als an der anderen.',
'Ungleich gekühlte Werkzeughälften führen zu Verzug: Die wärmere Seite schwindet länger nach.',
'Kalk, Rost und Schmutz in den Kühlkanälen bremsen den Wärmeübergang. Kanäle werden regelmäßig gespült, das Wasser aufbereitet.',
'Teilkristalline Kunststoffe wie PP, PA oder POM brauchen eine ausreichend hohe Werkzeugtemperatur. Zu kalt gespritzt, kristallisieren sie später nach und verziehen sich.'],
fo:['Wärme je Schuss: Q = m · Δh mit der Enthalpiedifferenz Δh der Schmelze bis zur Entformung.',
'Wärmestrom: Q̇ = [[Q||t_Z]] mit der Zykluszeit t_Z.',
'Kühlwasserstrom: ṁ_W = [[Q̇||c_W · ΔT_W]] mit c_W = 4,18 kJ/(kg · K).'],
mcq:[['Warum verzieht sich ein Teil, wenn eine Werkzeughälfte deutlich wärmer ist?','Die wärmere Seite kühlt und schwindet länger nach','Die Schmelze fließt dort schlechter','Der Nachdruck wirkt nur auf einer Seite','Das Teil klebt an der kalten Seite','Unterschiedliche Abkühlung bedeutet unterschiedliche Schwindung, das Teil wölbt sich.'],
['Wozu dient ein großer Durchfluss im Temperierkreis?','Das Wasser erwärmt sich nur wenig, die Werkzeugtemperatur wird gleichmäßig','Das Werkzeug wird heißer','Die Pumpe braucht weniger Energie','Der Kalk löst sich auf','Kleine Temperaturdifferenz zwischen Vor- und Rücklauf heißt gleichmäßige Kühlung.'],
['Ein Temperiergerät zeigt die richtige Temperatur, das Werkzeug ist trotzdem zu warm. Was prüfst Du zuerst?','Durchfluss und verkalkte oder geknickte Leitungen','Die Massetemperatur','Den Nachdruck','Die Farbe des Granulats','Ohne Durchfluss kommt die Kühlleistung nicht im Werkzeug an.'],
['Welcher Abschnitt bestimmt beim dickwandigen Teil meist die Zykluszeit?','Die Kühlzeit','Das Schließen','Das Auswerfen','Das Einspritzen','Die Kühlzeit wächst mit dem Quadrat der Wanddicke.']]});

TM({t:'Trocknen, Fördern & Dosieren',intro:'Bevor die Maschine spritzt, muss das richtige Granulat in der richtigen Mischung und trocken genug im Trichter sein. Viele Fehler am Teil entstehen schon hier, lange vor dem Werkzeug.',
pts:['Manche Kunststoffe nehmen Wasser aus der Luft auf, zum Beispiel PA, PET, PC und PBT. Feuchtes Granulat zersetzt sich in der Schmelze: Schlieren, Blasen, spröde Teile.',
'Getrocknet wird im Trockenlufttrockner. Temperatur und Zeit stehen im Datenblatt. Zu lange oder zu heiß getrocknet, vergilbt das Material.',
'Der Trockentrichter muss so groß sein, dass jedes Korn die volle Trockenzeit darin verbringt. Sonst kommt ein Teil des Materials zu feucht in die Maschine.',
'Saugfördergeräte bringen das Granulat aus Silo, Oktabin oder Sack zur Maschine. Beim Materialwechsel werden Leitungen und Abscheider leer gesaugt, sonst gibt es Mischfarben und Verwechslungen.',
'Masterbatch, Additive und Mahlgut werden volumetrisch oder gravimetrisch dosiert. Gravimetrische Dosierer wiegen und sind genauer.',
'Feiner Staub aus Granulat und Mahlgut kann zusammen mit Luft explosionsfähig sein. Abscheider und Mühlen gehören in die Gefährdungsbeurteilung.'],
fo:['Durchsatz: ṁ = m_Schuss · [[3600 s/h||t_Z]]',
'Nötiges Trichtervolumen: V = [[ṁ · t_T||ρ_S]] mit Trockenzeit t_T und Schüttdichte ρ_S.',
'Dosiermenge: ṁ_D = ṁ · x mit dem Dosieranteil x.'],
mcq:[['Welcher Kunststoff muss vor dem Spritzgießen meist getrocknet werden?','PA 6','PE-HD','PP','PS','Polyamide sind hygroskopisch und nehmen Wasser aus der Luft auf.'],
['Der Trockner ist auf Temperatur, die Teile zeigen trotzdem Schlieren. Was ist eine mögliche Ursache?','Der Trichter ist zu klein, die Verweilzeit reicht nicht','Die Werkzeugtemperatur ist zu hoch','Die Schließkraft ist zu groß','Das Granulat ist zu trocken','Bei hohem Durchsatz kommt Material zu früh aus dem Trichter.'],
['Wozu dient ein gravimetrischer Dosierer?','Er wiegt die Komponenten und dosiert dadurch genauer','Er trocknet das Granulat','Er fördert das Granulat vom Silo','Er misst die Feuchte','Volumetrische Dosierer schwanken mit der Schüttdichte, gravimetrische nicht.'],
['Was tust Du beim Materialwechsel an der Fördertechnik?','Leitungen und Abscheider leer fahren und reinigen','Nichts, der Rest wird mitverarbeitet','Nur den Trichter tauschen','Den Trockner abschalten','Reste des alten Materials verursachen Farbfehler und Verwechslungen.']]});

TM({t:'Kunststoffe: Aufbau & Einteilung',intro:'Ob ein Kunststoff schmilzt, federt oder bricht, hängt am Aufbau seiner Molekülketten. Wer das versteht, kann Verarbeitungstemperatur, Schwindung und Recycling einordnen, ohne jede Zahl auswendig zu wissen.',
pts:['Thermoplaste bestehen aus langen Ketten ohne feste Brücken. Sie werden beim Erwärmen weich und schmelzbar und lassen sich deshalb spritzgießen, extrudieren, schweißen und recyceln.',
'Amorphe Thermoplaste (PS, PC, PMMA, ABS) haben keine geordneten Bereiche. Sie können glasklar sein und erweichen über einem Temperaturbereich ab der Glasübergangstemperatur.',
'Teilkristalline Thermoplaste (PE, PP, PA, POM) haben geordnete Bereiche. Sie sind meist trüb, schmelzen in einem engen Temperaturbereich um die Kristallitschmelztemperatur T_m und schwinden stärker.',
'Elastomere sind weitmaschig vernetzt. Sie lassen sich stark dehnen und federn zurück, schmelzen aber nicht. Beispiele: NR, EPDM, NBR.',
'Duroplaste sind engmaschig vernetzt. Sie sind hart, spröde und formstabil in der Wärme. Einmal ausgehärtet, lassen sie sich nicht mehr umformen. Beispiele: UP, EP, Phenolharz.',
'Kurzzeichen stehen auf Datenblatt, Sack und oft im Teil (zum Beispiel >PP<). So lassen sich Teile beim Recycling sortieren.',
'Kunststoffe entstehen durch Polyreaktionen: Polymerisation (zum Beispiel PE, PP, PVC, PS), Polykondensation mit Abspaltung eines kleinen Moleküls wie Wasser (zum Beispiel PA, PC, PET) und Polyaddition ohne Abspaltung (zum Beispiel PUR, EP). Polykondensate wie PA und PET nehmen Feuchte auf und können beim Verarbeiten durch Wasser abgebaut werden, deshalb gut trocknen.',
'Alterung: Wärme, UV-Licht, Sauerstoff und Medien bauen die Ketten ab. Das Teil versprödet, verfärbt sich oder reißt. Stabilisatoren verzögern das, zu langes Verweilen in der heißen Schmelze beschleunigt es.',
'Recycling im Betrieb: Anguss und Ausschuss sortenrein mahlen und als Mahlgut beimischen, meist bis etwa 20 bis 30 %, je nach Teil und Freigabe. Mahlgut trocken und sauber halten. Duroplaste und Elastomere lassen sich nicht wieder aufschmelzen, sie werden zerkleinert als Füllstoff oder energetisch verwertet.'],
fo:['Verarbeitung: Massetemperatur über T_g (amorph) oder über T_m (teilkristallin).',
'Gebrauch: deutlich unter T_g (amorph) oder unter T_m (teilkristallin).'],
mcq:[['Welcher Kunststoff lässt sich nach dem Gebrauch einschmelzen und neu verarbeiten?','Ein Thermoplast wie PP','Ein Duroplast wie Phenolharz','Ein Elastomer wie EPDM','Keiner der genannten','Nur Thermoplaste haben keine festen Brücken zwischen den Ketten.'],
['Welche Kunststoffe nehmen Feuchte auf und müssen vor dem Spritzgießen besonders gut getrocknet werden?','Polykondensate wie PA und PET','Polymerisate wie PE und PP','Alle Elastomere','Nur glasfasergefüllte Typen','Sie entstehen unter Abspaltung von Wasser. Beim Aufschmelzen mit Feuchte spaltet Wasser die Ketten wieder.'],
['Warum mischt man Mahlgut nur in begrenzter Menge bei?','Jedes Aufschmelzen schädigt die Ketten, die Eigenschaften lassen nach','Weil Mahlgut teurer ist','Weil es nicht schmilzt','Weil es die Farbe immer ändert','Zu viel Mahlgut senkt Zähigkeit und Fließverhalten. Den Anteil legt die Freigabe fest.'],
['Woran erkennst Du meist einen teilkristallinen Kunststoff?','Er ist trüb und schmilzt in einem engen Temperaturbereich','Er ist glasklar','Er ist gummielastisch','Er lässt sich nicht schweißen','Die geordneten Bereiche streuen das Licht.'],
['Warum ist ein Elastomer-Dichtring nach dem Zusammendrücken wieder rund?','Die Brücken zwischen den Ketten ziehen sie in die alte Lage zurück','Er ist teilkristallin','Er wurde zu heiß verarbeitet','Er enthält Glasfasern','Die weitmaschige Vernetzung wirkt wie ein Netz aus Federn.'],
['Was bedeutet die Glasübergangstemperatur bei einem amorphen Thermoplast?','Ab dort wird er weich und gummiartig','Ab dort schmilzt er schlagartig','Ab dort zersetzt er sich','Ab dort wird er durchsichtig','Darunter ist er hart und glasartig, darüber erweicht er.']]});

TM({t:'Kennwerte & Werkstoffprüfung',intro:'Datenblätter vergleichen nur, wenn Du weißt, wie ein Kennwert gemessen wird. Beim Wareneingang und bei Reklamationen prüfst Du selbst: Fließfähigkeit, Feuchte, Härte und Festigkeit.',
pts:['Der Zugversuch liefert Streckspannung, Zugfestigkeit, Bruchdehnung und E-Modul. Bei Kunststoffen hängen alle Werte stark von Temperatur und Prüfgeschwindigkeit ab.',
'Kunststoffe kriechen: Unter Dauerlast dehnen sie sich mit der Zeit weiter. Für Dauerbelastung zählen deshalb Zeitstandwerte, nicht der Kurzzeit-Zugversuch.',
'Die Schmelze-Massefließrate MFR gibt an, wie viel Gramm Schmelze in 10 Minuten durch eine genormte Düse fließen. Hoher MFR heißt leicht fließend, meist kürzere Ketten.',
'Die Härte prüfst Du mit Shore A bei weichen Werkstoffen wie Elastomeren, mit Shore D bei harten Kunststoffen.',
'Die Kerbschlagzähigkeit zeigt, wie spröde ein Werkstoff bei schlagartiger Last ist. Viele Kunststoffe werden in der Kälte spröde.',
'Polyamid nimmt Wasser auf und wird dadurch zäher und weicher. Ein Datenblatt nennt deshalb Werte „trocken“ und „konditioniert“.'],
fo:['Spannung: σ = [[F||A_0]]',
'Dehnung: ε = [[Δl||l_0]] · 100 %',
'E-Modul im geraden Anfang der Kurve: E = [[σ||ε]]',
'Schmelze-Massefließrate: MFR = [[m · 600 s||t]] in g/10 min (m in g, t in s).'],
mcq:[['Zwei Chargen PP haben MFR 3 und MFR 25 g/10 min. Welche fließt leichter?','Die mit MFR 25','Die mit MFR 3','Beide gleich','Das hängt nur von der Farbe ab','Mehr Masse je 10 Minuten heißt dünnflüssiger.'],
['Warum reicht der Kurzzeit-Zugversuch nicht für ein dauerhaft belastetes Kunststoffteil?','Kunststoffe kriechen unter Dauerlast','Der Zugversuch ist zu ungenau','Kunststoffe werden mit der Zeit härter','Die Prüftemperatur ist zu niedrig','Unter Dauerlast dehnt sich das Teil langsam weiter und kann versagen.'],
['Welches Härteverfahren passt für einen Dichtring aus EPDM?','Shore A','Shore D','Brinell','Vickers','Shore A ist für weiche, elastische Werkstoffe gedacht.'],
['Ein PA-Teil ist direkt nach dem Spritzen spröde, Wochen später zäh. Warum?','Es nimmt Feuchte aus der Luft auf','Es kristallisiert nach','Es kühlt weiter ab','Es verliert Weichmacher','Spritzfrisches Polyamid ist trocken. Die aufgenommene Feuchte macht es zäher.']]});

TM({t:'Rheologie: Fließverhalten der Schmelze',intro:'Eine Kunststoffschmelze fließt nicht wie Wasser. Je schneller sie bewegt wird, desto dünnflüssiger wird sie. Dieses Verhalten nutzt Du beim Einspritzen, und es erklärt viele Füllprobleme.',
pts:['Die Viskosität beschreibt, wie zäh eine Schmelze ist. Kunststoffschmelzen sind strukturviskos: Bei hoher Schergeschwindigkeit sinkt die Viskosität deutlich.',
'Höhere Massetemperatur senkt die Viskosität. Zu heiß oder zu lange im Zylinder zersetzt sich der Kunststoff aber: Verfärbung, Schlieren, schlechte Festigkeit.',
'Hohe Einspritzgeschwindigkeit macht die Schmelze durch Scherung dünnflüssiger und erzeugt zusätzlich Wärme durch Reibung (Scherwärme).',
'Das Verhältnis von Fließweg zu Wanddicke zeigt, ob ein Teil überhaupt voll wird. Lange, dünne Teile brauchen leicht fließende Typen, hohe Drücke oder mehrere Anschnitte.',
'Der MFR wird bei kleiner Schergeschwindigkeit gemessen. Er taugt zum Vergleich von Chargen, sagt aber wenig über das Fließen im dünnen Spalt.',
'Die Verweilzeit im Zylinder hängt vom Verhältnis zwischen Zylinderinhalt und Schussgewicht ab. Großer Zylinder, kleiner Schuss: lange Verweilzeit, Gefahr der Zersetzung.'],
fo:['Viskosität: η = [[τ||γ̇]] (Schubspannung durch Schergeschwindigkeit).',
'Fließweg-Wanddicken-Verhältnis: i = [[L_F||s]]',
'Verweilzeit im Zylinder: t_V = [[m_Zyl||m_Schuss]] · t_Z'],
mcq:[['Was passiert mit der Viskosität einer PP-Schmelze, wenn Du schneller einspritzt?','Sie sinkt','Sie steigt','Sie bleibt gleich','Sie schwankt ohne Regel','Strukturviskose Schmelzen werden bei hoher Scherung dünnflüssiger.'],
['Ein langes, dünnes Teil wird nicht voll. Was hilft nicht?','Die Einspritzgeschwindigkeit senken','Einen leichter fließenden Typ wählen','Die Massetemperatur im zulässigen Bereich erhöhen','Einen zweiten Anschnitt vorsehen','Langsamer einspritzen macht die Schmelze zäher und kälter.'],
['Warum ist eine lange Verweilzeit im Zylinder gefährlich?','Der Kunststoff kann sich thermisch zersetzen','Die Schmelze wird zu kalt','Das Granulat wird feucht','Die Schnecke verschleißt nicht mehr','Hitze über lange Zeit bricht die Ketten.'],
['Was sagt ein Fließweg-Wanddicken-Verhältnis von 250 aus?','Der Fließweg ist 250-mal so lang wie die Wand dick','Das Teil ist 250 mm lang','Die Schmelze fließt 250 mm/s','Der Druckverlust beträgt 250 bar','Je größer das Verhältnis, desto schwieriger wird das Füllen.']]});

TM({t:'Additive, Füllstoffe & Einfärben',intro:'Reiner Kunststoff ist selten genug. Additive schützen vor Wärme und Licht, Füllstoffe und Fasern machen ihn steif, Farbe kommt meist als Masterbatch dazu. Jeder Zusatz verändert auch die Verarbeitung.',
pts:['Stabilisatoren schützen vor Abbau durch Wärme beim Verarbeiten und durch UV-Licht im Gebrauch. Gleitmittel erleichtern das Fließen und Entformen.',
'Füllstoffe wie Talkum oder Kreide machen das Teil steifer und oft billiger. Glasfasern erhöhen Festigkeit und Steifigkeit deutlich. Kurzzeichen: PA6-GF30 enthält 30 % Glasfasern.',
'Glasfasern richten sich beim Fließen aus. Das Teil ist in Fließrichtung fester und schwindet dort weniger, quer dazu mehr: Verzug wird wahrscheinlicher.',
'Glasfasern verschleißen Schnecke, Rückstromsperre und Werkzeug. Gepanzerte Schnecken und gehärtete Werkzeugstähle sind dann Pflicht.',
'Farbe kommt meist als Masterbatch: Granulat mit viel Farbstoff, das mit wenigen Prozent zugemischt wird. Die Dosierrate steht in der Freigabe.',
'Farbschwankungen haben meist einfache Ursachen: falsch kalibrierter Dosierer, wechselnde Mahlgutanteile, unterschiedliche Massetemperatur.'],
fo:['Masterbatch je Stunde: ṁ_MB = ṁ · x_MB',
'Faseranteil nach dem Verdünnen: x = x_1 · [[m_1||m_1 + m_2]] (Compound mit reinem Granulat gemischt).'],
mcq:[['Was bedeutet das Kurzzeichen PA66-GF35?','Polyamid 66 mit 35 % Glasfasern','Polyamid mit 35 % Füllstoff Kreide','Polyamid 66 mit 35 % Mahlgut','Polyamid mit 35 °C Glasübergang','GF steht für Glasfasern, die Zahl für den Massenanteil.'],
['Warum verzieht sich ein glasfaserverstärktes Teil leichter?','Die Fasern richten sich aus, die Schwindung ist längs und quer verschieden','Glasfasern schmelzen','Die Werkzeugtemperatur ist immer zu hoch','Glasfasern ziehen Feuchte an','Unterschiedliche Schwindung in zwei Richtungen verbiegt das Teil.'],
['Die Teile werden mal heller, mal dunkler. Was prüfst Du zuerst?','Dosierer und Mahlgutanteil','Die Schließkraft','Den Auswerferweg','Das Hydrauliköl','Farbschwankungen kommen meist aus der Dosierung.'],
['Wozu dient ein UV-Stabilisator?','Er schützt das Teil im Freien vor Abbau durch Sonnenlicht','Er färbt das Teil','Er senkt die Viskosität','Er erhöht die Schwindung','Ohne Schutz versprödet und verblasst der Kunststoff im Sonnenlicht.']]});

TM({t:'Spritzgießen: Zyklus & Einstellung',intro:'Beim Spritzgießen läuft ein fester Zyklus aus Schließen, Einspritzen, Nachdrücken, Kühlen und Auswerfen. Wer die Phasen kennt, stellt eine Maschine planvoll ein, statt an allen Knöpfen gleichzeitig zu drehen.',
pts:['Einspritzen: Die Schnecke schiebt die Schmelze mit geregelter Geschwindigkeit in die Kavität, bis sie fast voll ist.',
'Am Umschaltpunkt wechselt die Maschine von Geschwindigkeit auf Druck. Der Nachdruck füllt den Rest und gleicht die Schwindung aus, bis der Anschnitt eingefroren ist.',
'Während das Teil im Werkzeug abkühlt, dreht sich die Schnecke und fördert Schmelze nach vorn. Dabei weicht sie gegen den Staudruck zurück und dosiert so die Schmelze für den nächsten Schuss. Das Massepolster vor der Schnecke darf nicht auf null gehen.',
'Die Kühlzeit wächst mit dem Quadrat der Wanddicke. Doppelte Wand heißt etwa vierfache Kühlzeit.',
'Einstellen in fester Reihenfolge: Temperaturen nach Datenblatt, Dosierweg, Füllstudie mit kurzen Schüssen, Umschaltpunkt, Nachdruckhöhe und -zeit, zuletzt die Kühlzeit verkürzen.',
'Alle Parameter gehören in ein Einstellblatt. Nur so lässt sich ein guter Prozess nach dem nächsten Rüsten wieder anfahren.'],
fo:['Zykluszeit: t_Z = t_Schließen + t_Einspritzen + t_Nachdruck + t_Restkühl + t_Öffnen + t_Auswerfen',
'Kühlzeit bei anderer Wanddicke: t_K2 = t_K1 · ([[s_2||s_1]])²',
'Teile je Schicht: n = [[t_Schicht||t_Z]] · Kavitäten · Nutzungsgrad'],
mcq:[['Wozu dient der Nachdruck?','Er gleicht die Schwindung aus, bis der Anschnitt eingefroren ist','Er öffnet das Werkzeug','Er kühlt das Teil','Er dosiert die nächste Schmelze','Ohne Nachdruck entstehen Einfallstellen und Lunker.'],
['Die Wanddicke steigt von 2 mm auf 3 mm. Wie ändert sich die Kühlzeit etwa?','Sie steigt auf etwa das 2,25-Fache','Sie steigt um 50 %','Sie bleibt gleich','Sie verdoppelt sich genau','(3 mm ÷ 2 mm)² = 2,25.'],
['Das Massepolster geht bei jedem Schuss auf null. Was droht?','Der Nachdruck kann nicht mehr wirken, es gibt Einfallstellen','Grat am Teil','Brandstellen','Zu hohe Schließkraft','Ohne Polster fehlt die Schmelze, mit der nachgedrückt wird.'],
['Womit beginnst Du beim Einstellen eines neuen Werkzeugs?','Mit den Temperaturen nach Datenblatt und einer Füllstudie','Mit der kürzesten Kühlzeit','Mit dem höchsten Nachdruck','Mit der größten Schließkraft','Erst wenn das Teil richtig voll wird, lohnt sich die Feinarbeit.']]});

TM({t:'Werkzeug- & Formenbau',intro:'Das Werkzeug gibt dem Teil seine Form und bestimmt einen großen Teil der Kosten. Du kennst seinen Aufbau, rechnest die nötige Schließkraft und weißt, warum ein Werkzeug größer gebaut wird als das fertige Teil.',
pts:['Ein Werkzeug hat eine düsenseitige und eine auswerferseitige Hälfte. Darin liegen Kavität, Angusssystem, Anschnitt, Kühlkanäle, Auswerfer und Entlüftung.',
'Kaltkanal: Der Anguss erstarrt mit und wird als Abfall entformt. Heißkanal: Die Schmelze bleibt im beheizten Verteiler flüssig. Kein Angussabfall, oft kürzere Zyklen, aber teurer und störanfälliger.',
'Das Teil schwindet beim Abkühlen. Die Kavität ist deshalb um die Schwindung größer als das Fertigmaß.',
'Entformungsschrägen und glatte Oberflächen lassen das Teil sauber aus dem Werkzeug. Hinterschnitte brauchen Schieber oder Kerne.',
'Der Innendruck der Schmelze drückt die Werkzeughälften auseinander. Reicht die Schließkraft nicht, öffnet das Werkzeug einen Spalt, und es entsteht Grat.',
'Bei Mehrfachwerkzeugen müssen alle Kavitäten gleichzeitig voll werden. Ist der Angussverteiler nicht ausbalanciert, wird eine Kavität überspritzt, eine andere nicht voll.'],
fo:['Schließkraft: F_S = A_proj · p_W · n · Sicherheitsfaktor',
'Umrechnung: 1 bar = 10 N/cm², also 1 cm² · 1 bar = 10 N.',
'Werkzeugmaß: l_W = [[l_F||1 − S]] mit der Schwindung S als Dezimalzahl.'],
mcq:[['Am Teil entsteht Grat an der Trennebene. Was ist eine typische Ursache?','Die Schließkraft reicht nicht für den Innendruck','Die Kühlzeit ist zu lang','Der Trockner ist zu groß','Die Werkzeugtemperatur ist zu niedrig','Die Schmelze drückt die Hälften auseinander und läuft in den Spalt.'],
['Warum ist die Kavität größer als das Fertigteil?','Weil das Teil beim Abkühlen schwindet','Damit das Teil leichter entformt','Wegen der Entlüftung','Weil der Nachdruck das Teil staucht','Die Schwindung wird beim Werkzeugbau vorgehalten.'],
['Welchen Vorteil hat ein Heißkanal?','Kein Angussabfall','Er ist billiger als ein Kaltkanal','Er braucht keine Heizung','Er ersetzt die Kühlung','Die Schmelze im Verteiler bleibt flüssig und wird beim nächsten Schuss mit eingespritzt.'],
['Wozu dient die Entlüftung im Werkzeug?','Die Luft aus der Kavität kann entweichen','Sie kühlt das Teil','Sie senkt die Schließkraft','Sie ersetzt den Auswerfer','Eingeschlossene Luft verhindert das Füllen und kann Brandstellen verursachen.']]});

TM({t:'Fehlerbilder am Formteil',intro:'Einfallstelle, Bindenaht, Grat oder Schlieren: Jedes Fehlerbild hat typische Ursachen in Maschine, Werkzeug oder Material. Du erkennst den Fehler und gehst bei der Abhilfe planvoll vor.',
pts:['Einfallstellen und Lunker an dicken Stellen: Nachdruck zu niedrig oder zu kurz, Massepolster zu klein, Anschnitt friert zu früh ein.',
'Unvollständige Füllung: zu wenig Dosierweg, zu kalte Schmelze oder Werkzeug, zu langsames Einspritzen, verstopfte Entlüftung.',
'Grat oder Schwimmhaut: Schließkraft zu klein, Nachdruck zu hoch, Trennebene beschädigt oder verschmutzt.',
'Bindenaht: Zwei Fließfronten treffen aufeinander. Sie ist sichtbar und oft eine Schwachstelle. Wärmeres Werkzeug, bessere Entlüftung oder ein anderer Anschnitt helfen.',
'Schlieren: Feuchtigkeit (Trocknung prüfen), zersetztes Material (Temperatur und Verweilzeit), Farbschlieren (Dosierung, Mischung).',
'Brandstellen am Fließwegende: Eingeschlossene Luft wird so stark verdichtet, dass sie heiß wird. Entlüftung reinigen, Einspritzgeschwindigkeit am Ende senken.',
'Vorgehen: Fehler genau beschreiben, nur einen Parameter ändern, einige Zyklen abwarten, Ergebnis und Änderung dokumentieren.'],
fo:[],
mcq:[['An einer dicken Rippe zeigt die Oberfläche eine Mulde. Was hilft zuerst?','Nachdruck erhöhen oder verlängern','Schließkraft senken','Einspritzgeschwindigkeit stark senken','Werkzeug kälter fahren und Nachdruck abschalten','Die Mulde entsteht, weil die dicke Stelle beim Schwinden nicht nachgefüllt wird.'],
['Am Ende des Fließwegs sind schwarze, verbrannte Stellen. Was ist die wahrscheinlichste Ursache?','Eingeschlossene Luft (Dieseleffekt)','Zu niedrige Massetemperatur','Zu viel Masterbatch','Zu lange Kühlzeit','Die Luft kann nicht entweichen, wird verdichtet und heiß.'],
['Silbrige Schlieren an PA-Teilen nach dem Wochenende. Was prüfst Du zuerst?','Trocknung und Feuchte des Granulats','Die Schließkraft','Die Auswerfer','Die Werkzeugtemperatur','Granulat nimmt über das Wochenende Feuchte auf, wenn der Trockner aus war.'],
['Warum änderst Du bei der Fehlersuche immer nur einen Parameter?','Sonst weißt Du nicht, welche Änderung gewirkt hat','Weil die Maschine nur einen Wert speichern kann','Weil es die Norm verlangt','Damit es schneller geht','Mehrere Änderungen zugleich verdecken Ursache und Wirkung.']]});

TM({t:'Instandhaltung von Maschine & Werkzeug',intro:'Eine Spritzgießmaschine läuft oft rund um die Uhr. Schnecke, Rückstromsperre, Heizungen und Werkzeug verschleißen dabei leise. Du planst Wartung so, dass sie nicht erst nach dem Ausfall stattfindet.',
pts:['Die Rückstromsperre verhindert, dass Schmelze beim Einspritzen nach hinten fließt. Ist sie verschlissen, schwankt das Massepolster und damit das Teilgewicht.',
'Schnecke und Zylinder verschleißen besonders bei glasfaserverstärkten Werkstoffen. Der Spalt dazwischen wird regelmäßig gemessen.',
'Werkzeuge werden nach Schusszahl gewartet: reinigen, Entlüftung freilegen, Auswerfer und Führungen schmieren, Kühlkanäle spülen, Heißkanal prüfen.',
'Jedes Werkzeug hat eine Werkzeugkarte mit Schusszähler, Wartungen, Reparaturen und Änderungen.',
'Hydrauliköl und Filter werden nach Plan oder nach Ölanalyse gewechselt. Undichte Leitungen sind Brand- und Rutschgefahr.',
'Eingelagerte Werkzeuge werden gereinigt, konserviert und mit offenem Kühlkreis trocken gelagert, damit sie nicht rosten.'],
fo:['Tage bis zur Wartung: t = [[Wartungsintervall − Schusszahl seit der letzten Wartung||Schüsse je Tag]]',
'Schüsse je Tag: n = [[Laufzeit je Tag||t_Z]]'],
mcq:[['Das Massepolster schwankt stark von Schuss zu Schuss. Worauf deutet das hin?','Verschlissene Rückstromsperre','Zu kurze Kühlzeit','Zu hohe Schließkraft','Zu viel Masterbatch','Schmelze fließt beim Einspritzen zurück, das Polster wird mal größer, mal kleiner.'],
['Wonach wird ein Spritzgießwerkzeug typischerweise gewartet?','Nach der Schusszahl','Einmal im Jahr, egal wie viel es lief','Nur nach einem Ausfall','Nach der Farbe der Teile','Die Schusszahl bildet die tatsächliche Beanspruchung ab.'],
['Warum wird ein Werkzeug vor der Einlagerung trocken geblasen?','Restwasser in den Kühlkanälen lässt es rosten','Damit es leichter wird','Damit der Schusszähler zurückgesetzt wird','Wegen der Brandlast','Rost in den Kanälen verschlechtert später die Kühlung.'],
['Was gehört auf die Werkzeugkarte?','Schusszahl, Wartungen, Reparaturen und Änderungen','Der Lohn der Einsteller','Die Kundenpreise','Die Lieferzeit des Granulats','Nur mit der Geschichte des Werkzeugs lässt sich Wartung planen.']]});

TM({t:'Extrusion & Blasformen',intro:'Rohre, Profile, Folien und Flaschen entstehen nicht im Takt, sondern als Endlosprozess oder aus einem Schlauch. Du kennst den Aufbau einer Extrusionslinie und stellst Metergewicht und Wanddicke über die Abzugsgeschwindigkeit ein.',
pts:['Der Extruder fördert, schmilzt und verdichtet das Granulat in drei Zonen: Einzug, Kompression, Ausstoß. Die Schneckendrehzahl bestimmt den Durchsatz.',
'Nach der Düse kommen Kalibrierung (meist im Vakuumtank), Kühlstrecke, Abzug und Säge oder Wickler. Der Abzug zieht das Profil gleichmäßig weg.',
'Bei gleichem Durchsatz macht ein schnellerer Abzug das Profil dünner und leichter. So stellst Du Metergewicht und Wanddicke ein.',
'Die Wanddicke wird an der Linie laufend gemessen, zum Beispiel mit Ultraschall. Abweichungen werden über Abzug oder Durchsatz geregelt.',
'Extrusionsblasformen: Ein Schlauch (Vorformling) hängt zwischen den offenen Werkzeughälften. Das Werkzeug schließt, Luft bläst den Schlauch an die Wand. So entstehen Kanister und Tanks.',
'Streckblasen: Ein spritzgegossener Vorformling wird erwärmt, gereckt und aufgeblasen. So entstehen PET-Flaschen.'],
fo:['Metergewicht: m\' = [[ṁ||v_A]] mit Durchsatz ṁ und Abzugsgeschwindigkeit v_A.',
'Querschnitt aus dem Metergewicht: A = [[m\'||ρ]]',
'Rohrquerschnitt: A = [[π||4]] · (D² − d²)'],
mcq:[['Das Rohr wird zu schwer, die Drehzahl bleibt gleich. Was stellst Du um?','Abzug schneller','Abzug langsamer','Vakuum abschalten','Kühlwasser wärmer','Schnellerer Abzug verteilt den gleichen Durchsatz auf mehr Meter.'],
['Wozu dient die Kompressionszone der Schnecke?','Sie schmilzt und verdichtet das Material','Sie zieht das Granulat ein','Sie kühlt die Schmelze','Sie schneidet das Profil ab','Der Gang wird flacher, das Material wird zusammengedrückt und aufgeschmolzen.'],
['Wie entsteht ein Kunststoffkanister?','Durch Extrusionsblasformen aus einem Schlauch','Durch Spritzgießen in einem Schuss','Durch Laminieren','Durch Vulkanisation','Der Schlauch wird im Werkzeug aufgeblasen.'],
['Wo wird ein Rohr auf seinen Außendurchmesser gebracht?','In der Kalibrierung im Vakuumtank','Im Einzug der Schnecke','Im Abzug','In der Säge','Unterdruck zieht das noch weiche Rohr an die Kalibrierhülse.']]});

TM({t:'Bearbeiten & Fügen von Kunststoffen',intro:'Nicht jedes Teil kommt fertig aus der Maschine. Kunststoffe werden gesägt, gefräst, geschweißt, geklebt und verschraubt. Jedes Verfahren hat eigene Regeln, weil Kunststoffe Wärme schlecht leiten und weich werden.',
pts:['Beim Spanen entsteht Wärme, die der Kunststoff schlecht ableitet. Scharfe Werkzeuge, hohe Schnittgeschwindigkeit bei kleinem Vorschub und Kühlung mit Luft verhindern Schmieren und Schmelzen.',
'Nur Thermoplaste lassen sich schweißen, und nur gleiche oder verträgliche Sorten miteinander. Eine PE-Leitung kann nicht mit PP verschweißt werden.',
'Heizelement-Stumpfschweißen verbindet Rohre: anwärmen, Heizelement entfernen, mit festgelegtem Druck fügen und unter Druck abkühlen lassen. Werte stehen in den Schweißtabellen des Rohrherstellers.',
'Ultraschall-, Vibrations- und Laserschweißen verbinden Formteile in Sekunden, zum Beispiel Gehäuse und Filter.',
'PE und PP lassen sich ohne Vorbehandlung kaum kleben oder bedrucken. Corona-, Plasma- oder Flammbehandlung macht die Oberfläche benetzbar.',
'Schrauben direkt in Kunststoff brauchen passende Kernlochdurchmesser. Schnapphaken sparen Schrauben, müssen aber richtig ausgelegt sein.'],
fo:['Fügekraft beim Stumpfschweißen: F = p · A',
'Ringfläche des Rohrs: A = [[π||4]] · (D² − d²)'],
mcq:[['Kann eine PE-Rohrleitung mit einem PP-Formstück verschweißt werden?','Nein, die Werkstoffe sind nicht verträglich','Ja, beide sind Thermoplaste','Ja, aber nur mit Ultraschall','Ja, mit doppeltem Druck','Geschweißt werden nur gleiche oder verträgliche Sorten.'],
['Warum wird PP vor dem Kleben vorbehandelt?','Die Oberfläche ist schlecht benetzbar','PP ist zu hart','PP enthält Wasser','Der Kleber würde PP auflösen','Vorbehandlung erhöht die Oberflächenenergie, der Kleber haftet.'],
['Beim Fräsen von PA schmiert das Material. Was hilft?','Schärferes Werkzeug und weniger Wärme','Stumpferes Werkzeug','Größerer Vorschub ohne Kühlung','Höhere Werkstücktemperatur','Wärmestau macht den Kunststoff weich.'],
['Was passiert beim Abkühlen einer Stumpfschweißung?','Die Naht bleibt unter Fügedruck, bis sie fest ist','Der Druck wird sofort abgenommen','Das Rohr wird gedreht','Die Naht wird mit Wasser abgeschreckt','Zu frühes Entlasten macht die Naht schwach.']]});

TM({t:'Kautschuk: Mischung & Vulkanisation',intro:'Aus weichem, klebrigem Rohkautschuk wird erst durch Mischen und Vulkanisieren ein elastisches Bauteil. Zeit und Temperatur entscheiden, ob die Vernetzung gelingt.',
pts:['Drei Stufen: Rohkautschuk ist der Grundstoff, plastisch und klebrig. Die Mischung (Compound) enthält zusätzlich Füllstoffe, Weichmacher und Vernetzungschemikalien, sie ist noch formbar. Erst das Vulkanisat ist vernetzt und elastisch, es lässt sich nicht mehr umformen.',
'Eine Kautschukmischung besteht aus Kautschuk (zum Beispiel NR, SBR, EPDM, NBR), Füllstoffen wie Ruß oder Kieselsäure, Weichmachern, Alterungsschutz und dem Vernetzungssystem.',
'Vernetzt wird mit Schwefel und Beschleunigern oder mit Peroxiden. Dabei bilden sich Brücken zwischen den Ketten: Aus dem plastischen Rohstoff wird ein Elastomer.',
'Gemischt wird im Innenmischer und auf dem Walzwerk. Die Temperatur beim Mischen muss niedrig bleiben, sonst vernetzt die Mischung zu früh (Anvulkanisation).',
'Das Vulkameter (Rheometer) misst das Drehmoment über der Zeit. Daraus liest Du die Anvulkanisationszeit und die Zeit bis zur Ausvulkanisation (zum Beispiel t₉₀).',
'Höhere Temperatur verkürzt die Heizzeit. Als Richtwert halbiert sie sich je 10 K. Dicke Teile brauchen länger, weil die Wärme erst nach innen muss.',
'Nach dem Heizen werden die Teile entgratet und je nach Mischung nachgetempert. Prüfung: Härte (Shore A), Maße, Druckverformungsrest.'],
fo:['Heizzeit bei anderer Temperatur (Richtwert): t_2 = t_1 · 2^{(T_1 − T_2) ÷ 10 K}',
'Mischungsanteile in phr: Teile je 100 Teile Kautschuk.'],
mcq:[['Was passiert bei der Vulkanisation?','Zwischen den Ketten bilden sich Brücken','Die Ketten werden kürzer','Der Kautschuk schmilzt','Der Ruß verbrennt','Erst die Vernetzung macht den Kautschuk elastisch.'],
['Was zeigt die Anvulkanisationszeit?','Wie lange die Mischung verarbeitbar bleibt, bevor sie vernetzt','Wann das Teil fertig vernetzt ist','Wie lange gemischt wird','Wann das Teil zersetzt wird','Bis dahin muss die Mischung im Werkzeug sein.'],
['Die Heiztemperatur steigt von 160 °C auf 170 °C. Wie ändert sich die Heizzeit als Richtwert?','Sie halbiert sich etwa','Sie verdoppelt sich','Sie bleibt gleich','Sie sinkt um 10 %','Je 10 K höher etwa halbe Zeit.'],
['Was bedeutet 50 phr Ruß?','50 Teile Ruß auf 100 Teile Kautschuk','50 % Ruß in der Mischung','50 g Ruß je Liter','50 Teile Ruß auf 100 Teile Mischung','phr heißt parts per hundred rubber.']]});

TM({t:'Faserverbund: Laminieren & Aushärten',intro:'In Faserverbunden tragen Fasern die Last, das Harz hält sie in Form. So entstehen leichte, sehr feste Bauteile, von Rotorblättern bis zu Behältern. Sorgfalt beim Mischen und Aushärten entscheidet über die Qualität.',
pts:['Glas-, Kohlenstoff- und Aramidfasern tragen die Last. Die Matrix aus UP-, VE- oder EP-Harz (oder einem Thermoplast) verbindet sie und überträgt die Kräfte.',
'Ein Faserverbund ist in Faserrichtung fest und steif, quer dazu viel weniger. Deshalb wird jede Lage in die Richtung gelegt, in der die Kraft wirkt.',
'Verfahren: Handlaminieren, Vakuuminfusion, Harzinjektion (RTM), Prepregs mit Aushärtung im Autoklaven, Wickeln von Rohren und Behältern, Pultrusion für Profile.',
'Harz und Härter werden genau nach Mischungsverhältnis gewogen. Zu wenig oder zu viel Härter, und das Bauteil härtet nicht richtig aus.',
'Die Topfzeit begrenzt, wie lange angemischtes Harz verarbeitbar ist. Große Mengen im Becher werden durch die Reaktionswärme schneller heiß.',
'Gefährdungen: Styroldämpfe bei UP-Harzen, hautsensibilisierende Epoxidharze, Faserstäube beim Schleifen. Absaugung, Schutzhandschuhe und Atemschutz nach Gefährdungsbeurteilung.'],
fo:['Faservolumenanteil: φ = [[V_F||V_F + V_M]]',
'E-Modul in Faserrichtung (Mischungsregel): E = φ · E_F + (1 − φ) · E_M',
'Härtermenge: m_H = m_Harz · [[x||100]] mit dem Mischungsverhältnis x Teile Härter auf 100 Teile Harz.'],
mcq:[['Warum werden Lagen in verschiedene Richtungen gelegt?','Weil der Verbund nur in Faserrichtung fest ist','Damit weniger Harz nötig ist','Damit das Teil schneller aushärtet','Wegen der Farbe','Jede Lastrichtung braucht Fasern, die sie tragen.'],
['Was passiert, wenn deutlich zu wenig Härter zugegeben wird?','Das Bauteil härtet nicht vollständig aus','Es härtet schneller','Es wird fester','Nichts, der Härter ist nur Zusatz','Harz und Härter reagieren in festem Verhältnis.'],
['Warum wird angemischtes Harz in einem großen Becher schneller heiß?','Die Reaktionswärme kann schlechter entweichen','Der Becher ist zu dünn','Der Härter ist zu kalt','Das Harz verdunstet','Viel Masse, wenig Oberfläche: Die Wärme staut sich.'],
['Welche Schutzmaßnahme ist beim Schleifen von GFK besonders wichtig?','Absaugung und Atemschutz gegen Faserstaub','Nur Gehörschutz','Nur Sicherheitsschuhe','Keine, GFK ist ungefährlich','Feine Faserstäube reizen Haut und Atemwege.']]});

/* ---------- Rechenaufgaben ---------- */
{const tec='tec';
{const m=MI(tec,'Temperieren & Kühlen von Werkzeugen');
C.push({f:tec,m,name:'Wärmestrom aus der Schmelze',gen:r=>{const ms=r.p([120,180,250,320,450]),dh=r.p([[400,'PP'],[350,'ABS'],[450,'PA 6']]),tz=r.step(18,40,2),Q=ms/1000*dh[0],P=Q/tz;
 return{q:'Ein Teil aus '+dh[1]+' wiegt mit Anguss '+ms+' g. Bis zur Entformung gibt die Schmelze je Kilogramm '+dh[0]+' kJ ab (Beispielwert). Die Zykluszeit beträgt '+tz+' s. Welchen Wärmestrom muss die Werkzeugkühlung abführen?',a:P,u:'kW',d:2,tol:0.02,
 sol:['Q = m · Δh = '+nt(ms/1000)+' kg · '+dh[0]+' kJ/kg = '+nz(Q,1)+' kJ je Schuss','Q̇ = [[Q||t_Z]] = [['+nz(Q,1)+' kJ||'+tz+' s]] = '+nz(P,2)+' kJ/s = '+nz(P,2)+' kW']}}});
C.push({f:tec,m,name:'Kühlwasserstrom im Werkzeug',gen:r=>{const P=r.step(1.5,6,0.5),dT=r.p([2,3,4]),mw=P/(4.18*dT)*60;
 return{q:'Ein Werkzeug muss '+nt(P)+' kW Wärme an das Kühlwasser abgeben. Das Wasser soll sich zwischen Vor- und Rücklauf nur um '+dT+' K erwärmen (c = 4,18 kJ/(kg · K)). Wie viel Wasser muss je Minute durchfließen?',a:mw,u:'kg/min',d:1,tol:0.02,
 sol:['ṁ_W = [[Q̇||c_W · ΔT_W]] = [['+nt(P)+' kJ/s||4,18 kJ/(kg · K) · '+dT+' K]] = '+nz(P/(4.18*dT),3)+' kg/s','ṁ_W = '+nz(P/(4.18*dT),3)+' kg/s · 60 s/min = '+nz(mw,1)+' kg/min (etwa '+nz(mw,1)+' l/min)']}}});}
{const m=MI(tec,'Trocknen, Fördern & Dosieren');
C.push({f:tec,m,name:'Größe des Trockentrichters',gen:r=>{const ms=r.p([80,120,160,240]),tz=r.step(20,40,4),tt=r.p([3,4,5]),rs=r.p([600,650,700]),md=ms/1000*3600/tz,V=md*tt/rs*1000;
 return{q:'Ein PA-Teil wiegt mit Anguss '+ms+' g, die Zykluszeit beträgt '+tz+' s. Das Granulat muss '+tt+' h trocknen, die Schüttdichte ist '+rs+' kg/m³. Wie groß muss der Trockentrichter mindestens sein?',a:V,u:'l',d:0,tol:0.02,
 sol:['ṁ = m_Schuss · [[3600 s/h||t_Z]] = '+nt(ms/1000)+' kg · [[3600 s/h||'+tz+' s]] = '+nz(md,2)+' kg/h','V = [[ṁ · t_T||ρ_S]] = [['+nz(md,2)+' kg/h · '+tt+' h||'+rs+' kg/m³]] = '+nz(V/1000,4)+' m³ = '+nz(V,0)+' l','Gewählt wird der nächstgrößere Trichter mit Reserve.']}}});}
{const m=MI(tec,'Kennwerte & Werkstoffprüfung');
C.push({f:tec,m,name:'MFR aus der Wareneingangsprüfung',gen:r=>{const t=r.p([15,20,30,60]),g=r.step(0.3,2.5,0.1),M=g*600/t;
 return{q:'Bei der MFR-Prüfung schneidest Du die austretende Schmelze alle '+t+' s ab. Ein Abschnitt wiegt im Mittel '+nt(g)+' g. Wie groß ist der MFR?',a:M,u:'g/10 min',d:1,tol:0.02,
 sol:['MFR = [[m · 600 s||t]]','MFR = [['+nt(g)+' g · 600 s||'+t+' s]] = '+nz(M,1)+' g/10 min']}}});
C.push({f:tec,m,name:'Spannung im Zugstab',gen:r=>{const b=r.p([10,10,4]),h=r.p([4,4,10]),F=r.step(800,2400,100),s=F/(b*h);
 return{q:'Ein Zugstab aus Kunststoff hat einen Querschnitt von '+b+' mm × '+h+' mm. Bei der Streckgrenze zeigt die Maschine '+F+' N. Wie groß ist die Streckspannung?',a:s,u:'N/mm²',d:1,tol:0.02,
 sol:['A_0 = '+b+' mm · '+h+' mm = '+(b*h)+' mm²','σ = [[F||A_0]] = [['+F+' N||'+(b*h)+' mm²]] = '+nz(s,1)+' N/mm² = '+nz(s,1)+' MPa']}}});}
{const m=MI(tec,'Rheologie: Fließverhalten der Schmelze');
C.push({f:tec,m,name:'Verweilzeit im Zylinder',gen:r=>{const mz=r.p([300,500,800,1200]),ms=r.p([40,60,90,120]),tz=r.step(20,45,5),tv=mz/ms*tz/60;
 return{q:'Im Plastifizierzylinder befinden sich etwa '+mz+' g Schmelze. Je Schuss werden '+ms+' g verbraucht, die Zykluszeit beträgt '+tz+' s. Wie lange bleibt die Schmelze im Mittel im Zylinder?',a:tv,u:'min',d:1,tol:0.02,
 sol:['t_V = [[m_Zyl||m_Schuss]] · t_Z = [['+mz+' g||'+ms+' g]] · '+tz+' s = '+nz(mz/ms*tz,0)+' s','t_V = '+nz(mz/ms*tz,0)+' s ÷ 60 s/min = '+nz(tv,1)+' min']}}});
C.push({f:tec,m,name:'Fließweg-Wanddicken-Verhältnis',gen:r=>{const L=r.step(120,400,20),s=r.p([0.8,1,1.2,1.5,2]),i=L/s;
 return{q:'Ein Deckel hat vom Anschnitt bis zum entferntesten Punkt '+L+' mm Fließweg, die Wanddicke beträgt '+nt(s)+' mm. Wie groß ist das Fließweg-Wanddicken-Verhältnis?',a:i,u:'',d:0,tol:0.01,
 sol:['i = [[L_F||s]] = [['+L+' mm||'+nt(s)+' mm]] = '+nz(i,0),'Mit dem Datenblatt vergleichen: Liegt der Wert über dem, was der Typ schafft, braucht es einen zweiten Anschnitt oder einen leichter fließenden Typ.']}}});}
{const m=MI(tec,'Additive, Füllstoffe & Einfärben');
C.push({f:tec,m,name:'Masterbatch je Schicht',gen:r=>{const md=r.step(20,80,5),x=r.p([1,1.5,2,3,4]),h=r.p([7.5,8]),mb=md*x/100*h;
 return{q:'Eine Maschine verarbeitet '+md+' kg/h. Der Masterbatch wird mit '+nt(x)+' % dosiert. Wie viel Masterbatch brauchst Du für eine Schicht mit '+nt(h)+' h Laufzeit?',a:mb,u:'kg',d:1,tol:0.02,
 sol:['ṁ_MB = ṁ · x_MB = '+md+' kg/h · '+nt(x/100)+' = '+nz(md*x/100,2)+' kg/h','m_MB = '+nz(md*x/100,2)+' kg/h · '+nt(h)+' h = '+nz(mb,1)+' kg']}}});
C.push({f:tec,m,name:'Glasfaseranteil nach dem Verdünnen',gen:r=>{const x1=r.p([30,35,40,50]),m1=r.p([60,70,75,80]),x=x1*m1/100;
 return{q:'Ein PA6-GF'+x1+' wird mit unverstärktem PA6 gemischt: '+m1+' % Compound, '+(100-m1)+' % reines PA6. Welchen Glasfaseranteil hat die Mischung?',a:x,u:'%',d:1,tol:0.01,
 sol:['x = x_1 · [[m_1||m_1 + m_2]] = '+x1+' % · [['+m1+'||100]] = '+nz(x,1)+' %']}}});}
{const m=MI(tec,'Spritzgießen: Zyklus & Einstellung');
C.push({f:tec,m,name:'Teile je Schicht',gen:r=>{const tz=r.step(16,48,2),k=r.p([1,2,4,8]),eta=r.p([85,90,95]),T=r.p([7.5,8]),n=T*3600/tz*k*eta/100;
 return{q:'Ein '+k+'-fach-Werkzeug läuft mit '+tz+' s Zykluszeit. Die Schicht hat '+nt(T)+' h, der Nutzungsgrad beträgt '+eta+' %. Wie viele Teile entstehen je Schicht?',a:Math.floor(n),u:'Stück',d:0,tol:0.005,
 sol:['Schüsse = [[t_Schicht||t_Z]] = [['+nt(T)+' h · 3600 s/h||'+tz+' s]] = '+nz(T*3600/tz,0),'n = '+nz(T*3600/tz,0)+' · '+k+' · '+nt(eta/100)+' = '+nz(n,1)+' Stück, also '+Math.floor(n)+' Stück']}}});
C.push({f:tec,m,name:'Kühlzeit bei dickerer Wand',gen:r=>{const s1=r.p([1.5,2,2.5]),s2=s1+r.p([0.5,1,1.5]),t1=r.step(6,14,1),t2=t1*Math.pow(s2/s1,2);
 return{q:'Ein Teil mit '+nt(s1)+' mm Wanddicke braucht '+t1+' s Kühlzeit. Die Variante bekommt '+nt(s2)+' mm Wand bei gleichem Werkstoff und gleichen Temperaturen. Welche Kühlzeit ist etwa nötig?',a:t2,u:'s',d:1,tol:0.02,
 sol:['t_K2 = t_K1 · ([[s_2||s_1]])²','t_K2 = '+t1+' s · ([['+nt(s2)+' mm||'+nt(s1)+' mm]])² = '+t1+' s · '+nz(Math.pow(s2/s1,2),2)+' = '+nz(t2,1)+' s']}}});}
{const m=MI(tec,'Werkzeug- & Formenbau');
C.push({f:tec,m,name:'Nötige Schließkraft',gen:r=>{const A=r.step(40,240,10),p=r.p([300,350,400,450,500]),k=r.p([1,2,4]),sf=r.p([1.1,1.2]),F=A*p*10*k*sf/1000;
 return{q:'Ein Teil hat eine projizierte Fläche von '+A+' cm² (mit Anguss). Der Werkzeuginnendruck beträgt '+p+' bar (Beispielwert), das Werkzeug hat '+k+' Kavität'+(k>1?'en':'')+'. Mit Sicherheitsfaktor '+nt(sf)+': Welche Schließkraft brauchst Du?',a:F,u:'kN',d:0,tol:0.01,
 sol:['p_W = '+p+' bar = '+(p*10)+' N/cm²','F_S = A_proj · p_W · n · S = '+A+' cm² · '+(p*10)+' N/cm² · '+k+' · '+nt(sf)+' = '+nz(F*1000,0)+' N = '+nz(F,0)+' kN']}}});
C.push({f:tec,m,name:'Werkzeugmaß aus der Schwindung',gen:r=>{const l=r.step(40,240,10),S=r.p([0.5,0.6,1.5,1.8,2]),lw=l/(1-S/100);
 return{q:'Ein Teil soll nach dem Abkühlen '+l+',00 mm lang sein. Der Werkstoff schwindet um '+nt(S)+' %. Wie lang muss die Kavität sein?',a:lw,u:'mm',d:2,tol:0.0005,
 sol:['l_W = [[l_F||1 − S]] = [['+l+' mm||1 − '+nt(S/100)+']] = '+nz(lw,2)+' mm']}}});}
{const m=MI(tec,'Instandhaltung von Maschine & Werkzeug');
C.push({f:tec,m,name:'Tage bis zur Werkzeugwartung',gen:r=>{const I=r.p([50000,80000,100000]),s=r.step(10000,40000,5000),tz=r.step(20,40,5),h=r.p([16,22.5]),n=h*3600/tz,t=(I-s)/n;
 return{q:'Ein Werkzeug wird alle '+nz(I,0)+' Schuss gewartet. Seit der letzten Wartung sind '+nz(s,0)+' Schuss gelaufen. Es läuft '+nt(h)+' h am Tag mit '+tz+' s Zykluszeit. In wie vielen Tagen ist die nächste Wartung fällig?',a:t,u:'Tage',d:1,tol:0.02,
 sol:['n = [[Laufzeit je Tag||t_Z]] = [['+nt(h)+' h · 3600 s/h||'+tz+' s]] = '+nz(n,0)+' Schuss je Tag','t = [['+nz(I,0)+' − '+nz(s,0)+'||'+nz(n,0)+' Schuss je Tag]] = '+nz(t,1)+' Tage']}}});}
{const m=MI(tec,'Extrusion & Blasformen');
C.push({f:tec,m,name:'Metergewicht eines Rohrs',gen:r=>{const md=r.step(60,300,20),v=r.step(2,8,0.5),mm=md/(v*60)*1000;
 return{q:'Eine Rohrlinie extrudiert '+md+' kg/h, der Abzug läuft mit '+nt(v)+' m/min. Wie groß ist das Metergewicht?',a:mm,u:'g/m',d:0,tol:0.01,
 sol:['v_A = '+nt(v)+' m/min · 60 min/h = '+nz(v*60,0)+' m/h','m\' = [[ṁ||v_A]] = [['+md+' kg/h||'+nz(v*60,0)+' m/h]] = '+nz(md/(v*60),3)+' kg/m = '+nz(mm,0)+' g/m']}}});
C.push({f:tec,m,name:'Abzug für ein Soll-Metergewicht',gen:r=>{const md=r.step(80,240,20),mm=r.step(250,800,50),v=md*1000/mm/60;
 return{q:'Ein Rohr soll '+mm+' g/m wiegen. Der Extruder liefert '+md+' kg/h. Wie schnell muss der Abzug laufen?',a:v,u:'m/min',d:2,tol:0.01,
 sol:['v_A = [[ṁ||m\']] = [['+md+' kg/h||'+nt(mm/1000)+' kg/m]] = '+nz(md*1000/mm,1)+' m/h','v_A = '+nz(md*1000/mm,1)+' m/h ÷ 60 min/h = '+nz(v,2)+' m/min']}}});}
{const m=MI(tec,'Bearbeiten & Fügen von Kunststoffen');
C.push({f:tec,m,name:'Fügekraft beim Stumpfschweißen',gen:r=>{const D=r.p([110,160,200,250]),s=r.p([6.6,10,14.6]),p=0.15,d=D-2*s,A=Math.PI/4*(D*D-d*d),F=p*A;
 return{q:'Ein PE-Rohr mit '+D+' mm Außendurchmesser und '+nt(s)+' mm Wanddicke wird stumpf geschweißt. Der Fügedruck beträgt laut Tabelle 0,15 N/mm² (Beispielwert). Welche Fügekraft ist nötig, ohne Bewegungsdruck der Maschine?',a:F,u:'N',d:0,tol:0.01,
 sol:['d = D − 2 · s = '+D+' mm − 2 · '+nt(s)+' mm = '+nt(d)+' mm','A = [[π||4]] · (D² − d²) = [[π||4]] · (('+D+' mm)² − ('+nt(d)+' mm)²) = '+nz(A,0)+' mm²','F = p · A = 0,15 N/mm² · '+nz(A,0)+' mm² = '+nz(F,0)+' N']}}});}
{const m=MI(tec,'Kautschuk: Mischung & Vulkanisation');
C.push({f:tec,m,name:'Heizzeit bei anderer Temperatur',gen:r=>{const T1=r.p([150,160,170]),dT=r.p([-10,10,20]),t1=r.step(4,12,1),T2=T1+dT,t2=t1*Math.pow(2,(T1-T2)/10);
 return{q:'Eine Dichtung braucht bei '+T1+' °C eine Heizzeit von '+t1+' min. Wie lange dauert es etwa bei '+T2+' °C? Rechne mit der Regel „je 10 K halbe Zeit“.',a:t2,u:'min',d:1,tol:0.02,
 sol:['t_2 = t_1 · 2^{(T_1 − T_2) ÷ 10 K}','t_2 = '+t1+' min · 2^{('+T1+' − '+T2+') K ÷ 10 K} = '+t1+' min · '+nt(Math.pow(2,(T1-T2)/10))+' = '+nz(t2,1)+' min']}}});
C.push({f:tec,m,name:'Rußmenge für eine Charge',gen:r=>{const k=r.p([50,80,100,120]),phr=r.p([40,50,60,70]),ws=r.p([10,15,20]),tot=100+phr+ws+5,mr=k*phr/100;
 return{q:'Eine Mischung enthält 100 phr EPDM, '+phr+' phr Ruß, '+ws+' phr Weichmacher und 5 phr Vernetzungschemikalien. Für eine Charge stehen '+k+' kg Kautschuk bereit. Wie viel Ruß wiegst Du ab?',a:mr,u:'kg',d:1,tol:0.01,
 sol:['phr heißt Teile je 100 Teile Kautschuk.','m_Ruß = '+k+' kg · [['+phr+'||100]] = '+nz(mr,1)+' kg','Die ganze Charge wiegt '+k+' kg · [['+tot+'||100]] = '+nz(k*tot/100,1)+' kg.']}}});}
{const m=MI(tec,'Faserverbund: Laminieren & Aushärten');
C.push({f:tec,m,name:'Härter abwiegen',gen:r=>{const mh=r.step(200,1500,50),x=r.p([25,30,32,35,40]),h=mh*x/100;
 return{q:'Ein Epoxidharz wird mit '+x+' Teilen Härter auf 100 Teile Harz gemischt. Du hast '+mh+' g Harz abgewogen. Wie viel Härter gibst Du dazu?',a:h,u:'g',d:0,tol:0.01,
 sol:['m_H = m_Harz · [[x||100]] = '+mh+' g · [['+x+'||100]] = '+nz(h,0)+' g']}}});
C.push({f:tec,m,name:'E-Modul eines Laminats',gen:r=>{const p=r.p([40,50,55,60]),Ef=r.p([[73,'Glasfasern'],[230,'Kohlenstofffasern']]),Em=3.2,E=p/100*Ef[0]+(1-p/100)*Em;
 return{q:'Ein unidirektionales Laminat enthält '+p+' % '+Ef[1]+' (E = '+Ef[0]+' GPa) in Epoxidharz (E = 3,2 GPa). Welchen E-Modul hat es in Faserrichtung nach der Mischungsregel?',a:E,u:'GPa',d:1,tol:0.01,
 sol:['E = φ · E_F + (1 − φ) · E_M','E = '+nt(p/100)+' · '+Ef[0]+' GPa + '+nt(1-p/100)+' · 3,2 GPa = '+nz(E,1)+' GPa']}}});}
}
}
