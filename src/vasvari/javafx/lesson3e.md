---
icon: fa-solid fa-3
category:
  - JavaFX
---

# Events

A __JavaFX__ felhasználói felületei szinte teljesen eseményvezéreltek. A legtöbb ember ismeri a műveleti eseményeket, a billentyű- és egéreseményeket, de a felhasználói felület szinte minden összetett frissítése valamilyen esemény segítségével történik. És mégis, az események a __JavaFX__ egyik legkevésbé kihangsúlyozott része.

## A JavaFX események útmutatója

Általános szabályként elmondható, hogy ha egyszerű érték alapú változtatást kell végrehajtani, akkor ezt Property kötéssel lehet elérni. Minden egyéb esetben érdemes eseményeket használni. Az események sokoldalúak és stabil módot biztosítanak a változások vezérlésére az alkalmazásban.

Eseménynek számít bármely állapotváltozás egy bemeneti eszközön (_például egér vagy érintőképernyő_), egy felhasználói művelet (`ActionEvent`) vagy egy háttérfeladat során.  Az események összetett csomópontok, például `TableView`-ben és `ListView`-ben történő görgetés vagy szerkesztés eredményeként is kiválthatunk.


Nagyon alapszinten az `Event` objektum egy osztály, meglepően kevés paraméterrel. Nem tartalmaz semmilyen futtatható kódot, és nem is futtat semmilyen kódot. Ez egy jelzés a rendszernek, hogy valami megváltozott.

A JavaFX jelentős támogatást nyújt a végrehajtható kódok futtatásához, amelyeket külön az `EventHandler` osztályon keresztül definiálnak, minden állapotváltozás esetén.A JavaFX _90_ különálló eseménytípust támogat, és lehetőség van az `Event` osztály kiterjesztésére és további egyéni funkciók definiálására.


### Hogyan működnek az események?

Nem hazudok, ha azt mondom, hogy egy `Event` rendkívül egyszerű. Ami bonyolult, az a háttérben futó folyamatok, amelyek megvalósítják az eseménykezelő rendszert. Ebben a szakaszban áttekintjük, mi határozza meg egy `Event`-et, és hogyan állíthatjuk be a kódunkat, hogy minden alkalommal végrehajtsa, amikor egy bizonyos eseményt észlel.

## Az Event osztály

A JavaFX-ben egy Eseménynek négy tulajdonsága van:

- Forrás (`Source`)
- Cél (`Target`)
- Típus (`Type`)
- Felhasználva (`consumed`)

:::info A consumed (felhasználva) nevű logikai paramétert általában figyelmen kívül hagyják, de valójában fontos az alkalmazás viselkedése szempontjából. Nézzük meg mindegyiket sorban.
:::


### Source

JavaFX a `Node`-ot rendeli hozzá az esemény forrásaként a létrehozásnál, ami az esemény okának megfelelően van meghatározva. (_egér, billentyű, művelet stb._).

A Java natívan támogatja az eseményeket az `EventObject` osztállyal. Még mielőtt a __JavaFX__ a saját Target és `Type` attribútumait is rárakná, az esemény alapvető része a forrás. A `Target`, a `Type` és a `Consumed` a __JavaFX__ által bevezetett konstrukciók, de minden eseményt valaminek okoznia kell. Ez a forrás.

Az eseményforrás az az objektum, amely az eseményt okozza. Sokféle állapotváltozás okozhat eseményt:

- Az egér mozgása, kattintás, húzás
- gesztusok, érintőképernyő bevitele, nagyítás.
- Egy gomb aktiválása
- Egy feladat elindulása, befejezése vagy állapotváltozása.

Még akkor is, ha egy bemeneti eszközről van szó, amelynek állapota megváltozott, a __JavaFX__ hozzárendeli a saját forrását, amely gyakran egy csomópont.

E rugalmasság érdekében az esemény forrása `Object`-ként tárolódik, és a `getSource()` metóduson keresztül érhető el.

Az esemény céljától eltérően, bizonyos speciális esetekben az esemény forrása változhat az esemény végrehajtása során. Az __Eseménytípusok__ című fejezetben beszélek arról, hogyan működhet ez.

??????????????? 

????????

### Target

A __JavaFX__ kiterjeszti a `java.util` fájlban szereplő `EventObject`-et, hogy további paramétereket adjon hozzá. Ezek közül az első a `target`, amely azt a `Node`-ot határozza meg, amelyre az esemény hatott. Például, amikor egy `TextField` mezőbe gépelünk, minden billentyűleütés `KeyEvent`-ként regisztrálódik, és minden ilyen esemény célpontja a `TextField` mező lesz.

Az `EventObject` kiterjesztése rugalmasságot biztosít a __JavaFX__ számára az esemény céljának __JavaFX__-specifikus módon történő tárolásához és megadásához. Ebben az esetben a __JavaFX__-ben bármely esemény céljának implementálnia kell az `EventType` interfészt. Ez az interfész egyetlen metódust tartalmaz, amely paraméterként egy `EventDispatchChain`-t fogad, és egy `EventDispatchChain`-t ad vissza.

```java
EventDispatchChain buildEventDispatchChain(EventDispatchChain tail);
```

Ez áll a __JavaFX__ eseménykezelési módjának középpontjában. Rengeteg __JavaFX__ objektum bővíti az `EventTarget` interfészt:

- __Nodes, Panes and Controls__ <i class="fa-solid fa-window-maximize"></i>
- __Transforms__ <i class="fa-solid fa-rotate"></i>
- __Charts__ <i class="fa-solid fa-chart-line"></i>
- __Lights and Cameras__ <i class="fa-solid fa-lightbulb"></i>
- __Mesh data__ <i class="fa-solid fa-layer-group"></i>
- __Shapes__ <i class="fa-solid fa-shapes"></i>
- __Skins__ <i class="fa-regular fa-file-code"></i>

Ez lehetővé teszi a __JavaFX__ számára, hogy a felhasználói felület bármely elemén eseményeket indítson, de nekünk, fejlesztőknek is lehetővé teszi, hogy ezeket az eseményeket indítsuk.

Mivel az eseményeket a __JavaFX__ így kezeli, azt is biztosítja, hogy az általunk megadott végrehajtható kódot az `Application` szálon küldjük el. Ez egy hihetetlenül stabil módja az olyan összetett elemek, mint a diagramok és a vizuálisan bonyolult vezérlők frissítésének.


### Type

A JavaFX az eseménytípust az esemény eredete (_egér, billentyű, művelet stb._) és az állapotváltozás jellege (_billentyű elengedése, egérkattintás, feladat elindítása stb._) alapján jelöli ki.

Az eseménytípusok az `EventType` osztály által meghatározott __JavaFX__-specifikus paraméterek. Tudomásom szerint a JavaFX két okból definiálja az eseménytípusokat az `EventType` osztály segítségével:

#### Típusbiztonság

Egy `EventType` meghatározásakor meg kell adnia az eseményt, amelyre a típust definiálja, és meg kell adnia az esemény nevét. A __JavaFX__ `90` előre definiált eseménytípussal rendelkezik, amelyek az `Event` és az `al-Event` osztályok statikus tagváltozóiként érhetők el.

#### Különbség az AWT-től

A __Java__ másik ablakkezelő megoldása az absztrakt ablakkezelő eszközkészlet (`AWT`). Az események típusbiztonságát ebben az eszközkészletben úgy érték el, hogy az eseményeket egész számokként adták meg.

Ez nem tökéletes típusbiztonság, de statikus tagváltozóként lettek definiálva, mint például `MOUSE_CLICKED = 500`, így legalább könnyen lehetett rájuk hivatkozni.

Ha a __JavaFX__ is ezt tette volna, a `MouseEvent.MOUSE_CLICKED` (`AWT import`) és a `MouseEvent.MOUSE_CLICKED` (`JavaFX import`) elég nehezen lenne észrevehető. Ha a statikus változók mögötti számok különbözőek lennének, talán észre sem vennéd, amíg a kódod össze nem omlik, és kézzel kell hibátkeresned.

### consumed

Bármelyik ponton ebben a folyamatban, beleértve azt is, mielőtt az esemény elérte volna a célját, az eseményt kezelni lehet, és a folyamat azonnal leáll.

Nem lehet eléggé hangsúlyozni, milyen hasznos ez az események vezérlésében egy teljes jelenet során, és milyen gyakran fogod használni az eseményvezérelt fejlesztés során.

A __JavaFX__ eseménykezelésének alapvető része, hogy az események a jelenetgrafikonon áthaladnak. Egy levélcsomóponton bekövetkező esemény az adott típusú eseményeket a tetején lévő Windowtól lefelé a csomópontig, majd vissza felfelé indítja el.

Ha egy eseményt a diszpécserlánc végrehajtásának egy részénél fogyasztanak el, akkor az azonnal leáll, és további események nem lőnek ki.

Lehetőség van egy esemény leállítására, mielőtt az elérné a célcsomópontot. Ez az eseményszűrők gyakori felhasználási módja.

Az eseményeket a `consume()` metódussal lehet felhasználni. Az `isConsumed()` metódus meghívásával állapítható meg, hogy egy eseményt felhasználtak-e már.

## Eseménykiválódási fázisok

Amikor egy esemény kiváltódik a __JavaFX__-ben, az a jelenettől (`scene`) a csomópontig (`node`), majd a csomóponttól vissza a jelenetig utazik. 

Ehhez három dologra van szükség:

1. Tudni, hogy az eseménynek melyik csomópontba kell eljutnia.
2. Azonosítani a `Window`-ot, többablakos alkalmazásokban.
3. Tudni, milyen útvonalon kell végigmennie a jelenet és a csomópont között.

Ezek a lépések az esemény kiváltásában. Az első lépést __Target Selection__ (_Célcsoport kiválasztásnak_) nevezik. A második és harmadik lépést együtt hajtják végre egy folyamatban, amit __Route Construction__ (_Útvonal építésnek_) neveznek.

Ezek mindegyikén végigmegyünk, majd befejezésül végigmegyünk az események indításának módján.

### Cél kiválasztása

A JavaFX a bekövetkezett esemény típusa és az eseményt létrehozó bemeneti eszköz alapján választja ki az esemény célpontját.

Mivel a célpont kiválasztása típusfüggő, az alábbi legördülő listákban részletesebben áttekinthetjük az egyes eseménytípusok célpont-kiválasztását.

### Útvonal építés

Új események esetén - azoknál az eseményeknél, ahol a cél egy csomópont a jelenetben - a cél csomópont létrehoz egy útvonalat önmaga és az `Window` között.

A logika valami ilyesmit követ:

- Szerezd be az összes csomópontot innen a `Scene`:
- A célcsomópont hozzáadása az útvonalhoz végpontként.
- Ha a célnak van szülője, fűzzük hozzá a szülőcsomópontot az útvonalhoz.
- Folytassuk a szülők hozzáadását, amíg el nem érek egy olyan csomóponthoz, amelynek nincs szülője.
- Ez a gyökércsomópont.
- Használjuk a gyökércsomópontot a `Scene` megszerzéséhez.

Ezután visszaadjuk az útvonalat, amelyet az eredeti `buildEventDispatchChain()` hívás során hoztunk létre a `Target node`-on.
Az útvonalkészítés után az események készen állnak arra, hogy a `dispatch chain` minden láncszeméről elküldhetők legyenek.