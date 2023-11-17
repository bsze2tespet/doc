---
icon: fa-solid fa-swatchbook
category:
  - JavaFX
---

# JavaFX

A __JavaFX__ egy Java nyelven írt nyílt forráskódú platform és eszközkészlet, amelyet a felhasználói felületek (UI) készítéséhez használnak. A __JavaFX__ célja a modern és interaktív grafikus felhasználói felületek létrehozása Java alkalmazásokhoz, beleértve asztali alkalmazásokat, mobilalkalmazásokat és webalkalmazásokat is.


A __JavaFX__ a __Java Standard Edition__ (__Java SE__) részeként elérhető, és számos eszközt és funkciót kínál a grafikus felhasználói felületek tervezéséhez és fejlesztéséhez.

:::danger  Java 11 verziót követően
Az Oracle bejelentette, hogy a JavaFX-et kivette a Java SE-ből és külön projektbe szervezte. A JavaFX azóta a `JavaFX SDK` részeként érhető el, és külön telepíteni vagy hozzáadni kell az alkalmazásokhoz.
:::

Ezek közé tartozik a színes szabványos vezérlők (pl. gombok, mezők, táblázatok), 2D és 3D grafika támogatása, animációk, médialejátszás, és sok más. A __JavaFX__ lehetővé teszi a fejlesztők számára, hogy személyre szabott és modern felhasználói élményt hozzanak létre az alkalmazásaikban.

Fontos megjegyezni, hogy használatakor az alkalmazást elindító gépen telepítve kell lennie a futtatókörnyezetnek. A fejlesztéshez a [JavaFX Scene Builder](https://github.com/gluonhq/scenebuilder) nevű grafikus eszközt is használhatják a fejlesztők, amely segít az _UI_ tervezésében és elrendezésében.

Mivel szerves része a Java ökoszisztémának, így a Java nyelvet és a JavaFX-t használó fejlesztők könnyen kezelhetik a Java alkalmazásaikat a grafikus felhasználói felülettel együtt.

## A JavaFX komponensei

A __JavaFX__ architektúrája úgy van felépítve, hogy a fejlesztőknek eszközök és erőforrások sorát kínálja a hatékony asztali alkalmazások létrehozásához. Következőkben látni fogjuk a __JavaFX__ architektúráját és megértjük, hogyan működnek együtt az egyes komponensek a grafikus alkalmazások létrehozásához.

A __JavaFX__ központi eleme a `Scene Graph`, egy hierarchikus struktúra, amely reprezentálja alkalmazásának vizuális elemeit. Ez a gráf a csomópontokból áll, amelyek mindegyike lehet egy alakzat, szöveg, kép vagy bármilyen más vizuális elem. A csomópontokat fastruktúrába rendezhetjük, ahol minden csomópont rendelkezhet szülő- és gyermekcsomópontokkal, lehetővé téve bonyolult vizuális elemek összeállítását. Ez a koncepció létfontosságú a rugalmas és dinamikus felhasználói felületek létrehozásához.


![Scene Graph példa](/assets/images/vasvari/sample_scene_graph.webp)

A hierarchia legfelsőbb pontján a `Stage` áll, mely egy natív ablakot reprezentál. A `Stage` egyszerre csak egy Scene-t tartalmazhat, mely a `Scene Graph` tárolója. A belső úgynevezett `Branch Node`-oknak lehetnek gyerekei, így ezek a `node`-ok `Parent` típusúak. Ennek a reprezentációnak az előnye például, ha eltolunk egy elemet, aminek vannak gyerekei is, akkor azok is el lesznek tolva a megadott transzformáció alapján.


A __JavaFX__ architektúra több kulcsfontosságú csomagot tartalmaz, amelyek mindegyike különböző aspektusokat kezel:

1. `javafx.animation`: Ez a csomag lehetővé teszi sima animációk létrehozását. Lehetővé teszi különböző áttűnések alkalmazását, például elhalványítást, nagyítást, forgatást és eltolást. Az animációk növelik az alkalmazás vonzerejét és reakcióképességét.

2. `javafx.application`: Ez a csomag kezeli az alkalmazás életciklusát. Tartalmazza az `Application` és `Platform` osztályokat, amelyek segítenek az alkalmazás inicializálásában és indításában. Ezenkívül kezelheti az alkalmazás eseményeit és az alkalmazás állapotát.

3. `javafx.css`: A stílusozás elengedhetetlen része a modern GUI-nak. Ez a csomag lehetővé teszi a fejlesztők számára a CSS-hez hasonló stílusok alkalmazását __JavaFX__ alkalmazásokhoz, ami segít a vizuálisan vonzó és összhangban lévő felhasználói felületek készítésében.

4. `javafx.event`: Az eseménykezelés alapvető fontosságú a GUI programozásban. Ez a csomag tartalmaz osztályokat és interfészeket események kezeléséhez, mint például egérkattintások, billentyűleütések és felhasználó által generált egyéni események. Biztosítja, hogy az alkalmazás hatékonyan reagáljon a felhasználói interakciókra.

5. `javafx.geometry`: Amikor 2D grafikával dolgozunk, szükségünk van alakzatok meghatározására és különböző műveletek végrehajtására rajtuk. Ez a csomag osztályokat biztosít 2D geometriai objektumok definiálásához és módosításához, segítve a precíz grafikák létrehozását.

6. `javafx.stage`: A __JavaFX__ alkalmazások felső szintű konténerosztályait ebben a csomagban találjuk. Ez lehetővé teszi az alkalmazás ablakainak kezelését és tulajdonságaik meghatározását, beleértve a méretüket, címüket és stílusukat.

7. `javafx.scene`: Ez a csomag a __JavaFX__ architektúra központi eleme. Osztályokat és interfészeket kínál a jelenetgráf létrehozásához és kezeléséhez. Ezenkívül különböző alkönyvtárakat is tartalmaz, mint például `canvas`, `chart`, `control`, `effect`, `image`, `input`, `layout`, `media`, `paint`, `shape`, `text`, `transform` és `web`. Ezek a segédcsomagok különféle területeken kínálnak szakosított eszközöket a grafikus és interaktív fejlesztéshez.


![A következő ábra a JavaFX API felépítését mutatja be. Itt láthatja a JavaFX API-t támogató komponenseket.](/assets/images/vasvari/architecture_of_javafx_api.webp)


A `Prism` -et grafikus hardveres gyorsításra használnak a `Scene Graph` megjelenítésére.

A `Glass Windowing Toolkit` natív módon végzi az ablakezelési feladatokat az operációs rendszertől függően, és az eseménykezelő kezeléséért is felelős. A __JavaFX__ alkalmazásokban az események a fő szálon, azaz az `Application Thread`-en kezelődnek. Fontos, hogy a `Scene Graph` módosításait is ezen a fő szálon keresztül kell végrehajtani.

A `Media Engine` lehetőséget nyújtva az _audio_ és _video_ tartalmak lejátszására.

__JavaFX__ alkalmazásokban webes tartalmat is megjeleníthetünk a `Web Engine` segítségével, amely a `WebKit` alapú.

A `Quantum Toolkit` az alkalmazás számára absztrakciós szintet kínál az alacsony szintű komponensek felett.

## Hello World JavaFX-ben

A következőkben megnézzük, hogy hogyan kell beállítani a projektünket, hogy képesek legyünk JavaFX alkalmazásokat írni. A projektek buildeléséhez `Maven`-t fogunk használni, így erre fókuszálunk.

__Új projekt létrehozása:__ Nyissuk meg az __IntelliJ IDEA__-t majd kattintsunk a `New Project` opcióra.

![Új projekt létrehozása](/assets/images/vasvari/intellij/step1.webp)


__Projekt beállítások:__ Először is válasszuk ki bal oldalt a `Generators` alatt a `JavaFX`-et. Itt adjuk meg a projekt nevét és a helyét a számítógépen. A nyelv értelem szerűen __Java__ és a buildeléshez ahogy már említettem `Maven`-t fogunk használni. A projekt csoport azonosítója (`group`) legyen `org.vasvari`, a projekt neve (`artifact`) pedig `helloworld`. Győződjünk meg róla, hogy a `JDK` helyes __Java__ verziót mutatja (_például jelen esetben a Java 17_). 

Kattintsunk a `Next` gombra.

![Projekt beállítások](/assets/images/vasvari/intellij/step2.webp)


__Projekt elkészítése:__ A következő ablakban olyan harmadik féltől származó könyvtárakat és keretrendszereket láthatunk, amelyek kibővítik a __JavaFX__ képességeit, valamint előre elkészített vezérlőket és komponenseket kínálnak a __JavaFX__ alkalmazások fejlesztéséhez.

Végül kattintsunk a `Create` gombra a projekt elkészítéséhez.

![Projekt elkészítése](/assets/images/vasvari/intellij/step3.webp)

Most már készen állsz egy __JavaFX__ alkalmazás fejlesztésére __Maven__ használatával __IntelliJ IDEA__-ban. Győződjünk meg arról, hogy a __JavaFX__ alkalmazásban a főosztály (jelnlegi példánkban a `HelloApplication.java`) tartalmazza a `public static void main` metódust. Ez az osztály lesz az, amelyből az alkalmazás elindul.

![IntelliJ IDEA - HelloApplication.java](/assets/images/vasvari/intellij/step4.webp)

__Konfiguráció beállítása pt. I.:__ Menjünk a `Run` menüpont alatt a `Edit Configurations` opcióra. Kattintsunk a `+` ikonra a bal felső sarokban, majd válasszuk az `Application` lehetőséget. Válasszuk ki a projektet, és a `Main class` mezőben adjuk meg a __JavaFX__ alkalmazás főosztályát.

![Új Run Configuration hozzáadása](/assets/images/vasvari/intellij/step5e.webp)

__Main Class beállítása:__ Válasszuk ki a `HelloApplication`-t mivel ez az egyetlen osztály amely a főosztályunk.

![Main Class kiválasztása](/assets/images/vasvari/intellij/step6.webp)

__Konfiguráció beállítása pt. II.:__ Adjuk meg a konfiguráció nevét (`HelloApplication`) ami igazából bármi lehet. Amennyiben az alkalmazásnak bemeneti paraméterekre van szüksége, adjuk meg azokat a `Program arguments` mezőben. Most viszont mi ezt üresen hagyjuk és menjünk tovább majd az `OK` gombra, hogy véglegesítsük a konfigurációnkat.

![Konfigurációk szerkesztése](/assets/images/vasvari/intellij/step5.webp)

__Futtatás:__ Kattintson `Run` gombra a konfiguráció elindításához.

![Futtatás](/assets/images/vasvari/intellij/step5r.webp)

__Végeredmény:__ Amennyiben nem kapunk hibaüzenetet akkor az __IntelliJ IDEA__ most elindítja a __JavaFX__ alkalmazást a megadott konfigurációval. Az alkalmazásablak megjelenik, és az alkalmazás futni fog.

![JavaFX GUI App](/assets/images/vasvari/intellij/step7.webp)


## Mi mit csinál?

Most megvizsgáljuk a programkódot és megnézzük, hogy milyen elemekből épül fel az alkalmazásunk.

### HelloApplication.java

```java
package org.vasvari.helloworld;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;

public class HelloApplication extends Application {
    @Override
    public void start(Stage stage) throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(HelloApplication.class.getResource("hello-view.fxml"));
        Scene scene = new Scene(fxmlLoader.load(), 320, 240);
        stage.setTitle("Hello!");
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch();
    }
}
```


- `public class HelloApplication extends Application`: Itt definiáljuk az `HelloApplication` osztályt, amely kiterjeszti a JavaFX `Application` osztálytát, ami felelős az alkalmazás kezeléséért.

- `@Override public void start(Stage stage) throws IOException`: Ez egy `start` metódus felülírása, amelyet a JavaFX alkalmazás az indítás során automatikusan hív. A `Stage` objektumot paraméterként kapjuk, amely a fő ablakot reprezentálja.

- `FXMLLoader fxmlLoader = new FXMLLoader(HelloApplication.class.getResource("hello-view.fxml"));`: Ebben a sorban létrehozunk egy `FXMLLoader` objektumot, amely lehetővé teszi az FXML fájl betöltését. Az `HelloApplication.class.getResource("hello-view.fxml")` részlet a `hello-view.fxml` fájl elérési útját adja meg az osztály erőforrások között.

- `Scene scene = new Scene(fxmlLoader.load(), 320, 240);`: Itt létrehozunk egy `Scene` objektumot, amely a felhasználói felület tartalmát reprezentálja. Az `fxmlLoader.load()` metódus az FXML fájl betöltését jelenti, és a második és harmadik paraméterek a szélességet (320 pixel) és a magasságot (240 pixel) állítják be.

- `stage.setTitle("Hello!");`: Beállítjuk az alkalmazás ablakának címét __Hello!__-ra.

- `stage.setScene(scene);`:Beállítjuk az alkalmazás ablakának tartalmát a korábban létrehozott `scene`-re.

- `stage.show();`: Megjelenítjük az alkalmazás ablakát, amely tartalmazza az FXML fájlból betöltött felhasználói felületet.

- `public static void main(String[] args) {`: A `main` metódus (_minden_) alkalmazás belépési pontja.

- `launch();`: Itt hívjuk meg a `launch` metódust, amely elindítja az alkalmazást a JavaFX platformon.


### HelloController.java

```java
package org.vasvari.helloworld;

import javafx.fxml.FXML;
import javafx.scene.control.Label;

public class HelloController {
    @FXML
    private Label welcomeText;

    @FXML
    protected void onHelloButtonClick() {
        welcomeText.setText("Welcome to JavaFX Application!");
    }
}
```

- `public class HelloController {`: Itt definiáljuk a `HelloController` osztályt, amely felelős a felhasználói felület kezeléséért.

- `@FXML private Label welcomeText;`: Ebben a sorban az `@FXML` annotációval ellátott `welcomeText` nevű `Label` változót deklaráljuk. Ez a változó kapcsolódik az FXML fájlban definiált "welcomeText" ID-jű `Label` elemhez, és lehetővé teszi a szöveg módosítását.

- `@FXML protected void onHelloButtonClick() {`: Ebben a sorban definiáljuk a `onHelloButtonClick` metódust, amely az FXML fájlban definiált __Hello__ gomb eseménykezelője.

:::tip Az @FXML annotációval jelöljük, hogy az FXML fájlban található eseménykezelőkhez kapcsolódik.
:::

- `welcomeText.setText("Welcome to JavaFX Application!");`: Ebben a sorban beállítjuk a `welcomeText` `Label` szövegét __Welcome to JavaFX Application!__-re. Tehát amikor a __Hello__ gombra kattintanak, ez a szöveg jelenik meg a `Label`-en.


### hello-view.fxml

```xml
<?xml version="1.0" encoding="UTF-8"?>

<?import javafx.geometry.Insets?>
<?import javafx.scene.control.Label?>
<?import javafx.scene.layout.VBox?>

<?import javafx.scene.control.Button?>
<VBox alignment="CENTER" spacing="20.0" xmlns:fx="http://javafx.com/fxml"
      fx:controller="org.vasvari.helloworld.HelloController">
    <padding>
        <Insets bottom="20.0" left="20.0" right="20.0" top="20.0"/>
    </padding>

    <Label fx:id="welcomeText"/>
    <Button text="Hello!" onAction="#onHelloButtonClick"/>
</VBox>
```

- `<?xml version="1.0" encoding="UTF-8"?>`: Az XML fájl kezdetén meghatározza a dokumentum verzióját és karakterkódolását.

- `<VBox alignment="CENTER" spacing="20.0" xmlns:fx="http://javafx.com/fxml" fx:controller="org.vasvari.helloworld.HelloController">`: Egy `VBox` konténer elemet definiál, amely a felhasználói felület egy részét reprezentálja. Az `alignment` tulajdonság középre igazítja a gyermekeket, a `spacing` pedig a gyermekek közötti térközt állítja be. Az `xmlns:fx` az FXML névtér deklarációját tartalmazza, és a `fx:controller` attribútum a hozzárendelt vezérlő osztályt jelöli meg.

- `<padding>...</padding>`: Ebben a részben az `Insets` objektumot használják, hogy definiálják a térközöket a `VBox` konténer elem körül.

- `<Label fx:id="welcomeText"/>`: Egy `Label` elemet definiál, amely a szöveget tartalmazza. Az `fx:id` attribútum lehetővé teszi, hogy az elemet azonosítsuk az FXML fájlban, és a __Controller__ osztályból is hivatkozhassunk rá.

- `<Button text="Hello!" onAction="#onHelloButtonClick"/>`: Egy gombot definiál, amelynek felirata __Hello!__. Az `onAction` attribútum meghatározza az eseménykezelő metódus nevét (`onHelloButtonClick`), amelyet hívni fognak, amikor a gombra kattintanak.


Most, miután részleteiben megnéztük a JavaFX fájl felépítését, érdemes továbblépnünk és megismerkednünk a __Model-View-Controller__ (`MVC`) modell elvével, amely egy fontos tervezési minta az alkalmazások felépítéséhez. 

![👉👆👇👈](/assets/images/vasvari/mvc_meme.webp)

Később pedig részletesebben is szemügyre vesszük a JavaFX keretrendszer által kínált komponenseket, amelyek segítségével létrehozhatunk interaktív felhasználói felületeket.

## Model-View-Controller

A __Model-View-Controller__ (`MVC`) egy olyan tervezési minta, amelyet szoftvertervezés során alkalmaznak a felhasználói felületek és az alkalmazáslogika elkülönítésére. Az `MVC` eléggé népszerű és gyakran alkalmazzák szoftverfejlesztés során, különösen akkor, amikor szükség van a felhasználói felület és az alkalmazáslogika szétválasztására illetve a kód újrafelhasználhatóságára. Az `MVC` három fő komponenst tartalmaz: a _Modellt_, a _Nézetet_ és a _Vezérlőt_.

1. **Model:**
   A `Model` adataink és alkalmazásunk üzleti logikájának központi részét képezi. Ide tartoznak az adatstruktúrák, az adatbázis-kezelők, az üzleti szabályok és minden olyan rész, amely az alkalmazás állapotát és logikáját kezeli. A `Model` felelős az adatok karbantartásáért, módosításáért amelyek informálják a többi komponenst az állapotváltozásokról.

2. **View:**
   A `View` felelős a felhasználói felület kialakításáért és a felhasználóval való kommunikációért. Ez a komponens megjeleníti a Modell által tartalmazott adatokat a felhasználó számára, és lehetővé teszi a felhasználói interakciót, például a felhasználói felület eseményeinek (_pl. gombok lenyomása_) érzékelését. A `View` továbbítja az eseményeket a `Controller`-nek, hogy azokat kezelje.

3. **Controller:**
   A `Controller` a központi vezérlő egység, amely összekapcsolja a `Model`-t és a `View`-t. A `Controller` felelős az események (pl. gombnyomások, egérkattintások) fogadásáért a `View`-ból, majd a megfelelő műveletek végrehajtásáért a Modellben. A `Controller` irányítja az alkalmazáslogikát és biztosítja, hogy a `Model` és a `View` ne kommunikáljon közvetlenül egymással.

Az `MVC` tervezési minta előnyei:

- **Kódújrafelhasználás:** A `Model` és a `View` elkülönítése lehetővé teszi a kódújrafelhasználást. Például ugyanazt a `Model`-t és Vezérlőt használhatja több különböző `View`-ban.

- **Könnyű karbantarthatóság:** A kód elkülönítése révén könnyen lehet módosítani vagy kicserélni a különböző komponenseket anélkül, hogy az egész alkalmazást újraírni kellene.

- **Tesztelhetőség:** Az elkülönített komponensek könnyen tesztelhetők, mivel a `Model` és a `Controller` függetlenek a felhasználói felülettől.

:::warning Azonban fontos megjegyezni, hogy a pontos implementáció és működési részletek változhatnak a különböző programozási nyelvek és keretrendszerek esetében. Az MVC alapelvei azonban általánosságban alkalmazhatók, és segíthetnek a szoftvertervezési feladatok egyszerűsítésében és szervezésében.
:::


### Hogyan alkalmazzuk JavaFX-ben?

A fentiekben megbeszéltük az `MVC`-t és a __JavaFX__ alapvetően erre épül - _olyan hasonló mintákkal együtt, mint az `MVP` és az `MVVM`_.  Az eseménytámogatása, a tulajdonságok, a kötés és az __FXML__-dokumentumok mind ezt segítik elő. Ezek lehetővé teszik az üzleti logika és a felhasználói felület szétválasztását.

:::info
A __JavaFX MVC__ minta minden elemét egy vagy több Java-objektum határozza meg. Valójában az __MVC__ a __JavaFX__-ben __FXML__ használatával és anélkül is megvalósítható.
:::

Én személy szerint jobban szeretem az __FXML__-t használni a __View__ objektumok strukturálására és létrehozására, az egyszerűsége, a __Controller__ és __CSS__ fájlok beépített hivatkozásai és az __FXMLLoader__ kényelme miatt. A memóriába betöltés után azonban a __View__ még mindig csak Java objektumok gyűjteménye.

![A JavaFX MVC](/assets/images/vasvari/mvc_javafx.webp)

Ezt szem előtt tartva, megmutatom, hogyan lehet az MVC mintát hibrid (Java/FXML) és csak Java rendszerekben megvalósítani.

Az MVC alkalmazásához a JavaFX-ben három alapelvet kell alkalmaznunk:

- A __View__ logikát a __Controller__ kell tartalmaznia, és meg kell határoznia, hogyan jelenjen meg az információ és hogyan lépjen kapcsolatba vele.

- Az üzleti logikának a __Model__-ben kell szerepelnie, és meg kell határoznia, hogy hogyan lehet az adatokat elérni, létrehozni, tárolni és módosítani.

- Minden egyes nézetnek egy egyszerű és következetes céllal kell rendelkeznie. Sok összetett alkalmazásban akár több nézet is lehet egy ablakon belül. Valójában ez gyakran segít a függőségek felosztásában, és lehetővé teszi a kód újrafelhasználását a programban máshol.


Az MVC-mintának összességében meg kell könnyítenie a kód újrafelhasználását a moduláris elemek módosítása nélkül.

__MVC nélkül__ hajlamosak vagyunk arra, hogy szorosabb kapcsolatot alakítsunk ki az __üzleti és nézeti logika__ között. Ez azt jelenti, hogy ha a viselkedéstől az adatérvényesítésig bármit is meg kell változtatnunk, jelentős refaktorálást kell elvégeznünk.


Oké oké folyamatosan említem őket... __de mi az az üzleti logika és a nézeti logika?__

Ez egy jogos kérdés, és lehet némi átfedés (ahol a nézeti logika valamilyen magasabb elvet valósít meg az üzleti szabályokon vagy logikán alapulva), de itt van néhány példa mindegyikre:

### Üzleti logika

- Milyen formátumban kell megadni a felhasználó lakcímét?
- Mi történik, ha két felhasználó regisztrál, akik egyszerre foglalják el az utolsó helyet?
- Lehetővé kell tenni a felhasználók számára, hogy frissíthessék e-mail címüket, és hogyan kell azt érvényesíteni?

### Nézeti logika

- Mi történik, amikor a felhasználó az 'OK' gombra kattint?
- Hány rekordot jelenítsek meg egyszerre a táblázatban?
- Mely mezőknek kell kitöltve lenniük az OK gomb aktiválása előtt? <i class="fa-solid fa-asterisk"></i>

<i class="fa-solid fa-asterisk"></i> A nézeti logika egy része üzleti logikán (_és üzleti szabályokon_) fog alapulni, például _"a felhasználóknak rendelkezniük kell e-mail címmel és irányítószámmal is"_.

Az __MVC__ tervezési minta zavarosnak tűnhet, mert amint megemlítjük, akár elkezdhetnénk beszélni a domain modellekről[^first], az aggregált gyökerekről[^second] és a repository mintákról[^third].


## SceneBuilder

A _SceneBuilder_ egy olyan grafikus eszköz, amelyenek segítségével könnyen tervezhetünk és szerkeszthetünk a JavaFX alkalmazások felhasználói felületeit anélkül, hogy kódolnunk kellene az összes felhasználói felületi elemet.

![SceneBuilder](/assets/images/vasvari/scenebuilder/sblogo.webp)

A _SceneBuilder_ lehetővé teszi számunkra, hogy felhasználói felületi elemeket hozzunk létre, például gombokat, szövegdobozokat, címkéket, táblázatokat stb., majd ezeket egyszerűen elrendezzük és testre szabhassuk elképzeléseinek megfelelően. A felület létrehozása után a _SceneBuilder_ lehetővé teszi az exportálását __FXML__ formátumban, amely a JavaFX alkalmazásban használt __XML__-alapú leíró nyelv. Az elkészült __FXML__ fájlt az alkalmazásba lehet betölteni és kóddal vezérelni.

A _SceneBuilder_ használata gyorsíthatja az alkalmazások fejlesztését, különösen, ha fontos a felhasználói felület vizuális tervezése és finomhangolása.

![SceneBuilder program elindítás után](/assets/images/vasvari/scenebuilder/scenebuilder1.webp)

1. **Menüsor (Menu Bar):** A felső részen található menüsor tartalmazza a fájlkezelő funkciókat, például az új projekt létrehozását, a projekt megnyitását, mentését és nyomtatását.

2. **Bal oldali eszköztár (Left-hand Sidebar):** A bal oldalon található eszköztár tartalmazza a komponensek kategóriáit, amelyek között választhatsz a tervezés során. Például, itt találod a _Containers_, _Controls_, _Layouts_, _Shapes_, stb. kategóriákat.

3. **Document Tree (Dokumentum fa):** Itt látható __FXML dokumentumot__ reprezentáló hierarchia. A különböző felhasználói felületi komponensek és konténerek a fán belül szerveződnek. Ezen a panelen hozzáadhatod, eltávolíthatod és szerkesztheted ezeket a komponenseket, valamint megváltoztathatod azok hierarchiáját.

4. **Controller (Vezérlő):** Amennyiben egy __Java__ osztályt használsz a projektedben, akkor itt láthatod az osztályhoz tartozó metódusokat és eseménykezelőket. Ezen a panelen konfigurálhatod az eseménykezelőket és kötheted a komponenseket az osztály metódusaihoz.

5. **Központi munkaterület (Central Workspace):** A középső részen található munkaterület az, ahol tervezheted és elrendezheted az alkalmazásod felhasználói felületét. Ide húzhatod és ejtheted a különböző komponenseket, például gombokat, címkéket, szövegmezőket, táblázatokat stb.

6. **Szerkesztő ablak (Inspector):** A jobb oldali panelen található szerkesztő ablakban konfigurálhatod és testre szabhatod a kiválasztott komponenst. Itt adhatsz meg tulajdonságokat, például szöveget egy címkéhez vagy hozzárendelheted eseménykezelőket egy gombhoz.

Ez egy gyors áttekintés a Scene Builder felépítéséről és funkcióiról. A valóságban a program sok részletet kínál, amelyek segít az alkalmazások felhasználói felületének hatékony tervezésében és szerkesztésében.

### UI elemek

Nézzük meg a leggyakrabban használt *Felhasználói felületi* elemeket:

1. **Button (Gomb):**
   - Leírás: A gomb egy olyan felhasználói felületi elem, amely lehetővé teszi a felhasználók számára egy művelet kiválasztását vagy aktiválását egy kattintással. Például egy gombot lehet használni egy űrlap elküldéséhez vagy egy funkció indításához.

   ![Button](/assets/images/vasvari/scenebuilder/button.webp)

2. **Label (Címke):**
   - Leírás: A címke egy statikus szöveges elem, amelyet általában a felhasználói felületen információ megjelenítésére használnak. Például szöveg megjelenítésére használható egy űrlapon vagy egy kép alatt a leírás megadására.
   
   ![Label](/assets/images/vasvari/scenebuilder/label.webp)

3. **TextField (Szövegmező):**
   - Leírás: A szövegmező egy olyan beviteli mező, ahol a felhasználók szöveget vagy számokat írhatnak be. Ez a mező lehetővé teszi a felhasználók számára adataik megadását vagy kiválasztását.

   ![TextField](/assets/images/vasvari/scenebuilder/textfield.webp)

4. **TableView (Táblázat):**
   - Leírás: A táblázat egy olyan komponens, amely lehetővé teszi a táblázatos adatok megjelenítését és szerkesztését. Általában használják listák, táblázatok vagy adatbázisok tartalmának megjelenítésére.
   
   ![TableView](/assets/images/vasvari/scenebuilder/tableview.webp)

5. **ComboBox (Legördülő lista):**
   - Leírás: A legördülő lista egy olyan felhasználói felületi elem, amely egy választási lehetőségek listát tartalmaz, és a felhasználók egyet választhatnak ki belőle. Ez ideális olyan helyzetekben, amikor több lehetőség közül lehet választani.
   
   ![ComboBox](/assets/images/vasvari/scenebuilder/combobox.webp)

6. **CheckBox (Jelölőnégyzet):**
   - Leírás: A jelölőnégyzet egy olyan elem, amellyel a felhasználók egyetlen választási lehetőséget kijelölhetnek vagy kikapcsolhatnak. Általában igaz/hamis típusú beállításokhoz használják.
   
   ![CheckBox](/assets/images/vasvari/scenebuilder/checkbox.webp)

7. **RadioButton (Rádiógomb):**
   - Leírás: A rádiógomb olyan felhasználói felületi elem, amely hasonló a jelölőnégyzethez, de csoportokban jelenik meg. Egy csoporton belül a rádiógombok közül csak egy választható ki. Olyan helyzetekben használják, amikor egyetlen opciót kell kiválasztani egy csoportból.
   
   ![RadioButton](/assets/images/vasvari/scenebuilder/radiobutton.webp)

8. **MenuBar (Menüsor):**
   - Leírás: A menüsor egy olyan felületi elem, amely menük és almenük listáját tartalmazza. A felhasználók itt találják az alkalmazás különböző funkcióit és lehetőségeit.
   
   ![MenuBar](/assets/images/vasvari/scenebuilder/menubar.webp)

9. **TabPane (Lapozó):**
   - Leírás: A lapozó egy olyan konténer, amely több lapot (flipek) tartalmaz, és a felhasználók közötti váltáshoz használható. Minden lap különböző tartalmat jeleníthet meg.

   ![TabPane](/assets/images/vasvari/scenebuilder/tabpane.webp)

10. **ImageView (Képnézet):**
    - Leírás: A képnézet egy olyan felhasználói felületi elem, amely egy képet vagy grafikát jelenít meg az alkalmazásban. Használható képek, logók vagy más vizuális elemek megjelenítésére.

    ![ImageView](/assets/images/vasvari/scenebuilder/imageview.webp)

Ezek a gyakran használt elemek a JavaFX alkalmazásokban. A Scene Builder segítségével könnyen hozzáadhatók és testreszabhatók a felhasználói felület kialakításához.

### Elrendezési elemek

![Elrendezési elemek](/assets/images/vasvari/scenebuilder/control_elements.webp)

Nézzük meg az elrendezési elmeket, amelyek a JavaFX Scene Builderben gyakran használtak a felhasználói felületek kialakításához:

1. **BorderPane:**
   - A `BorderPane` a középen lévő tartalom körül négy zónát definiál: _felső_, _alsó_, _bal_ és _jobb_. A középső területet általában a fő tartalomnak használják, míg a peremterületeken lehetőség van a további elemek (_például menüsor_) elhelyezésére.

   ![BorderPane](/assets/images/vasvari/scenebuilder/borderpane.webp)

2. **HBox (Horizontális doboz):**
   - Az `HBox` a benne elhelyezett elemeket vízszintesen egymás után helyezi el. Ideális vízszintes gombok, címkék vagy vezérlők elrendezéséhez.

   ![HBox](/assets/images/vasvari/scenebuilder/hbox.gif)

3. **VBox (Vertikális doboz):**
   - A `VBox` hasonló az `HBox`-hoz, de a tartalmazott elemeket függőlegesen egymás alá helyezi. Segít a felhasználói felület függőleges elrendezésében.

   ![VBox](/assets/images/vasvari/scenebuilder/vbox.gif)

4. **StackPane:**
   - A `StackPane` az összes benne lévő elemet egymásra helyezi. Jól használható akkor amikor például egy képre szeretnénk szöveget írni. Amennyiben megváltoztatjuk az elemek pozicionálását, akkor az az összes belerakott elemre hatással lesz.

   ![StackPane](/assets/images/vasvari/scenebuilder/stackpane.webp)

   ![Demo](/assets/images/vasvari/scenebuilder/stackpane_demo.gif)

5. **GridPane:**
   - A `GridPane` táblázatos elrendezés, amely sorokat és oszlopokat definiál. Az elemeket a rács celláiban rendezhetjük.

    ![GridPane](/assets/images/vasvari/scenebuilder/gridpane.webp)

6. **FlowPane:**
   - A `FlowPane` egy olyan elrendezés, amely az elemeket az elérhető helyhez igazítja, így vízszintesen vagy függőlegesen is rendezheti őket. Ez ideális dinamikusan változó méretű elrendezéséhez.

   ![FlowPane](/assets/images/vasvari/scenebuilder/flowpane.webp)

   ![Demo](/assets/images/vasvari/scenebuilder/flowpane_demo.gif)

7. **TilePane:**
   - A `TilePane` hasonló a `FlowPane`-hoz, de a benne lévő elemek egyenletesen oszlanak el, és az összes sor és oszlop azonos méretű. Ez különösen hasznos olyan alkalmazásoknál, ahol az elemeknek szabályos elrendezésre van szükség.

   ![](/assets/images/vasvari/scenebuilder/tilepane1.webp)

   ![TilePane](/assets/images/vasvari/scenebuilder/tilepane2.webp)

8. **AnchorPane:**
   - Az `AnchorPane` az elemeket rögzített távolságra legyenek az ablak szélétől vagy más elemektől. Ez segíthet a precíz elhelyezésben és pozícionálásban.

   ![AnchorPane](/assets/images/vasvari/scenebuilder/anchorpane.webp)


Ezek az elrendezések segítenek a felhasználói felületek struktúrájának és elrendezésének meghatározásában. Attól függően, hogy milyen típusú felhasználói felületet tervezel, kiválaszthatod a megfelelő elrendezést a projekt igényeinek kielégítéséhez.

## FXML

Az __FXML__ egy __XML__ alapú leíró nyelv, amely lehetővé teszi, hogy __JavaFX__ alkalmazásokban a felhasználói felületek struktúráját leírjuk anélkül, hogy a kódban definiálnánk őket. __FXML__ segítségével meghatározhatjuk, hogy mit tartalmaz egy felület, azonban a viselkedését Java kódban határozzuk meg.


Ez a példa egy egyszerű __JavaFX__ alkalmazást mutat be, amely egy ablakban egy gombot tartalmaz, és amikor rákattintunk, kiírja a __Hello, JavaFX!__ üzenetet a konzolra.

Itt van egy a __JavaFX API__ segítségével létrehozott felület:

```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class JavaFXApp extends Application {

    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("JavaFX Példa");

        Button button = new Button("Kattintás");
        button.setOnAction(e -> System.out.println("Hello, JavaFX!"));

        StackPane root = new StackPane();
        root.getChildren().add(button);

        primaryStage.setScene(new Scene(root, 300, 200));
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
```


Az __FXML__ megfelelője ennek a felületnek így néz ki:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<?import javafx.scene.control.Button?>
<?import javafx.scene.layout.StackPane?>

<StackPane xmlns:fx="http://javafx.com/fxml" fx:controller="SampleController">
    <Button text="Kattintás" fx:id="button" onAction="#handleButtonClick" />
</StackPane>
```

```java
import javafx.fxml.FXML;
import javafx.scene.control.Button;

public class SampleController {

    @FXML
    private Button button;

    @FXML
    private void handleButtonClick() {
        System.out.println("Hello, JavaFX FXML!");
    }
}
```

Az FXML fájlok `*.fxml` kiterjesztéssel rendelkeznek. A fájl első sora az _XML prolog_, amelyet követnek az _importok_, majd pedig maguk a _grafikus komponensek_ leírásai láthatóak.

A példában két helyen használja az `fx` prefixet:

   1. `fx:controller`: Ezt az attribútumot a legfelső szintű XML elemen használjuk, hogy megadjuk, mely vezérlő osztállyal dolgozzon együtt az __FXML__ állomány futás közben. Itt tudjuk beállítani az eseménykezelő metódusokat az egyes elemekhez, vagyis azokat a metódusokat, amelyek a kódban végzik majd a műveleteket. Fontos megjegyezni, hogy az itt megadott vezérlő osztályt a `FXMLLoader` példányosítja.

   2. `fx:id`: Minden egyes `XML` elemhez hozzárendelhetünk egy egyedi azonosítót, amely az `fx:id` attribútummal kerül megadásra. Ez az azonosító lehetővé teszi, hogy a __Java__ kódból is elérjük a betöltött _UI elemeket_ (`Node`) a nevük alapján. Ha nem tervezünk a kódban hivatkozni az adott _UI elemre_, akkor az `fx:id` attribútum használata elhagyható.

Az __XML__-alapú fájlok manuális szerkesztése bonyolult lehet, és a __JavaFX API__ használata kézenfekvőbb megoldás lenne ebben a példában. Azonban a könnyen érthető formátuma miatt lehetőség van olyan eszközök használatára, amelyek grafikusan segítenek létrehozni felhasználói felületeket - erre célra használjuk a __SceneBuilder__-t.

:::info
A __SceneBuilder__-t az __IntelliJ__ alapból felkínálja az __*.fxml__ kiterjesztésű fájlok szerkesztéséhez, de a program futtatható fájlját be kell állítani a __Settings -> Languages & Frameworks__
__-> JavaFX -> Path to SceneBuilder__ segítségével. Ezután az __FXML__ fájlon jobb kattintás, és a legalsó menüpont a __SceneBuilder__, ami végül megnyitja a vizuális szerkesztőt.
:::

```java
<Button text="Kattintás" fx:id="button" onAction="#handleButtonClick" />
```

Az __FXML__ lehetővé teszi az eseménykezelők megadását, amelyeket a `Controller` osztályban kell definiálni. Az eltérés a __JavaFX API__-tól, hogy az eseménykezelő metódusok nevét az __FXML__-ben az `onAction` attribútum segítségével adhatjuk meg. Az attribútumban egyszerűen meg kell adni az eseménykezelő metódus nevét.

### FXML betöltése

Az __FXML__-ben definiált felhasználói felületeket a __Java__ alkalmazás kódjában be kell tölteni annak érdekében, hogy a megjelenítéshez szükséges `SceneGraph` létrejöjjön. Ezt a folyamatot a __Java__ kódban az `FXMLLoader` segítségével végezzük el. Miután a felület betöltődött, a `SceneGraph` létrehozása és megjelenítése a megszokott módon történik egy `Stage` tartalmaként.

```java
@Override
public void start(Stage stage) throws IOException {
   FXMLLoader fxmlLoader = new FXMLLoader(HelloApplication.class.getResource("hello-view.fxml"));
   Scene scene = new Scene(fxmlLoader.load(), 320, 240);
   stage.setTitle("Hello!");
   stage.setScene(scene);
   stage.show();
}
```

A betöltött __FXML__ tartalmat teljes egészében felhasználhatjuk mint Scene Graph (_amely valójában az is_), és lehetőségünk van azt használni például egy Scene gyökérelemként is, vagy akár csak egy részét betölthetjük egy __FXML__-ből, amely később része lehet egy összetettebb felületnek (_ez hasznos lehet újrafelhasználásnál_). Fontos megjegyezni, hogy az __FXML__ állományokat az `FXMLLoader` futás közben tölti be, így csak abban a pillanatban derül ki, hogy az adott állomány megfelel-e az __FXML__ specifikációjának.

```java
public class HelloController implements Initializable {
    @FXML
    private Label welcomeText;

    @FXML
    protected void onHelloButtonClick() {
        welcomeText.setText("Welcome to JavaFX Application!");
    }

    @Override
    public void initialize(URL url, ResourceBundle resourceBundle) {
        
    }
}
```

Amikor az `FXMLLoader` segítségével betöltünk egy `FXML` dokumentumot, gyakran előfordul, hogy szeretnénk kezdőértékeket beállítani a __FXML__-ben definiált grafikus elemeknek. Ha a konstruktorban próbáljuk ezt megtenni, akkor valószínűleg `NullPointerException` hibával találjuk magunkat szemben, mert a mezőinjektálás még nem történtek meg. Azonban ennek a problémának egyszerű megoldása van: az `FXMLLoader` automatikusan meghívja az `initialize()` nevű metódust, amikor a mezőinjektálás már megtörténtek. A `initialize()` metódus felülírásához a `javafx.fxml.Initializable` interfészt kell implementálnunk. Ezen a ponton már biztosak lehetünk benne, hogy a grafikus elemek _inicializálása_ megfelelően megtörtént.

Az `initialize` metódus paraméterei között található `URL` és `ResourceBundle`, amelyek lehetővé teszik a szükséges erőforrásokhoz és lokalizációs információkhoz való hozzáférést.

1. `URL`: A `URL` objektum segítségével hivatkozhatunk erőforrásokra, például képekhez, hangfájlokhoz vagy más külső erőforrásokhoz. Ezen keresztül tudjuk megadni a forrásfájlok elérési útját vagy az erőforrásokhoz vezető hivatkozást.

2. `ResourceBundle`: A `ResourceBundle` egy lokalizált erőforrások gyűjteményét tartalmazza. Használhatjuk például a szövegek nyelvfüggő megjelenítéséhez. A `ResourceBundle` segít az alkalmazás szövegeinek lokalizációjában és annak kezelésében, hogy a megfelelő nyelven vagy környezeten megjelenjenek a felhasználói felületen.


### FXML Controller

Az __FXML__-ben kialakított felhasználói felület elemeihez való hozzáférést biztosítani Java kódból az `@FXML` annotáció segítségével lehet megoldani. Ennek a megközelítésnek a lényege, hogy az __FXML__ fájlban található elemeket a Java kódban deklarált változókhoz kötjük. Az `@FXML` annotáció segít azonosítani az elemeket a megfelelő nevük és az __FXML__ fájlban található `fx:id` alapján. Ez lehetővé teszi a __SceneBuilder__ segítségével a vizuális tervezőben kezelni ezeket az elemeket, és eseménykezelőket is hozzárendelni.

:::info
A `@FXML` annotáció alkalmazása lehetővé teszi, hogy a privát láthatóságú mezőket és metódusokat is láthatóvá tegyük az FXML-ben, nem szükséges, hogy a változók vagy metódusok publikus láthatósággal rendelkezzenek ahhoz, hogy működjenek.
:::

Az FXML és a kód közötti kapcsolatot az annotáció teremti meg, és annak érdekében, hogy a rendszer automatikusan megtalálja, melyik FXML-ben deklarált pl. __Button__-t kell a változóval összekapcsolni, a változó __nevének__ és az __FXML__-ben deklarált elem `fx:id` attribútumának egyeznie kell.


Az __FXML__ annotáció használatához ráadásul egy függőséget is használunk a `POM.xml`-ben:

```xml
<dependency>
   <groupId>org.openjfx</groupId>
   <artifactId>javafx-fxml</artifactId>
   <version>17.0.6</version>
</dependency>
```



## Dailógus ablakok

![AnchorPane](/assets/images/vasvari/scenebuilder/alert.webp)

Az `Alert` osztály a `Dialog` osztály alosztálya, és számos előre elkészített dialógustípust tartalmaz, amelyek könnyen megjeleníthetők a felhasználóknak, hogy infromációt jelenítsünk meg. Ezért sok felhasználó számára az `Alert` osztály a legmegfelelőbb osztály az igényeiknek (szemben a `Dialog` közvetlen használatával). Alternatívaként azoknak, akik szöveges bevitelre vagy döntést várnak a felhasználót, jobban járnak a `TextInputDialog`, illetve a `ChoiceDialog` használatával.

Az alábbiakban részletezem az `Alert` típusokat.

### Error Alert

Az `Error Alert` egy olyan ablak, amely hibaüzenetek vagy problémák esetén jelenik meg a felhasználó számára. Ez a típusú ablak rendszerint piros színnel és egy megfelelő hibaüzenettel rendelkezik. Például, ha egy alkalmazásban hibás adatot ad meg a felhasználó, az `Error Alert` jelenhet meg a következőképpen:

_"Hiba! Hibás adatokat adott meg. Kérem ellenőrizze az input mezőket."_

Az `Error Alert` hasznos lehet a felhasználók számára, hogy tudomást szerezzenek az esetleges hibákról, és segítsen nekik megérteni a problémát.

### Information Alert

Az `Information Alert` olyan ablak, amely informatív üzeneteket tartalmaz, amelyek segítenek a felhasználónak megérteni vagy észlelni valamilyen fontos információt. Ez általában zöld vagy kék színű, és például egy folyamat sikerességére lehet használni:

_"Művelet sikeresen végrehajtva. Az új adatok el lettek mentve."_

Az `Information Alert` segít a felhasználónak észlelni, hogy az alkalmazás vagy a rendszer sikeresen teljesítette a feladatot.

### Warning Alert

A `Warning Alert` egy olyan ablak, amely a felhasználót figyelmezteti olyan potenciálisan problémás vagy kockázatos helyzetekre, amelyek megkövetelik a figyelmet vagy a cselekvést. Ez általában narancssárga vagy sárga színű lehet, és például az alábbi módon jelenhet meg:

_"Figyelem! Az adatok elveszhetnek, ha nem menti el őket. Szeretne menteni most?"_

A `Warning Alert` segít a felhasználónak felismerni a potenciális problémákat, és lehetőséget nyújt a döntés meghozatalára vagy a további cselekvésre.

Ezen Alert típusok használata segít a felhasználók számára világos és érthető visszajelzést nyújtani vagy a rendszerben történő eseményekről. Azoknak az eseményeknek megfelelően használjuk őket, amelyekkel a felhasználónak tisztában kell lennie, és amelyek segítik őket a helyes döntések meghozatalában vagy a problémák azonosításában.


### Minta kód

A __"HelloWorld FXML"__-es programunk eddigi változatának módosításához használjuk a __SceneBuilder__ -t. Ezen módosítások során hozzáadunk a felhasználói felületünkhöz három gombot (`Button`) és három címkét (`Label`).

Az alábbi kódot használjuk fel az `HelloController` nevű osztályunk tartalmának módosításához:

__HelloController.java__

```java
package org.vasvari.alertsjavafx;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Alert;

public class HelloController {
    @FXML
    void errorButton(ActionEvent event) {
        Alert alert = new Alert(Alert.AlertType.ERROR);
        alert.showAndWait();
    }

    @FXML
    void infoButton(ActionEvent event) {
        Alert alert = new Alert(Alert.AlertType.INFORMATION);
        alert.showAndWait();
    }

    @FXML
    void warningButton(ActionEvent event) {
        Alert alert = new Alert(Alert.AlertType.WARNING);
        alert.showAndWait();
    }
}
```

__hello-view.fxml__

```xml
<?xml version="1.0" encoding="UTF-8"?>

<?import javafx.scene.control.Button?>
<?import javafx.scene.control.Label?>
<?import javafx.scene.layout.Pane?>
<?import javafx.scene.layout.VBox?>

<Pane maxHeight="-Infinity" maxWidth="-Infinity" minHeight="-Infinity" minWidth="-Infinity" prefHeight="300.0" prefWidth="300.0" xmlns="http://javafx.com/javafx/17" xmlns:fx="http://javafx.com/fxml/1" fx:controller="org.vasvari.alertsjavafx.HelloController">
   <children>
      <VBox layoutX="230.0" layoutY="58.0" prefHeight="200.0" prefWidth="56.0" spacing="30.0">
         <children>
            <Button mnemonicParsing="false" onAction="#infoButton" text="Show" />
            <Button mnemonicParsing="false" onAction="#warningButton" text="Show" />
            <Button mnemonicParsing="false" onAction="#errorButton" text="Show" />
         </children>
      </VBox>
      <VBox layoutX="65.0" layoutY="65.0" prefHeight="200.0" prefWidth="170.0" spacing="30.0">
         <children>
            <Label text="AlertType.INFORMATION" />
            <Label text="AlertType.WARNING" />
            <Label text="AlertType.ERROR" />
         </children>
      </VBox>
   </children>
</Pane>
```

Ha ezzel megvagyunk akkor a következő eredményt láthatjuk a program futtatásakor:


![A program](/assets/images/vasvari/scenebuilder/dialog_app.webp)

Így most ha bármelyik gombra rá is kattintunk abban az esetben megjelenik a számunkra szükséges `Alert` ablak.

![Error](/assets/images/vasvari/scenebuilder/dialog_error.webp)

![Warning](/assets/images/vasvari/scenebuilder/dialog_warning.webp)

![Information](/assets/images/vasvari/scenebuilder/dialog_information.webp)

Azonban észrevehetjük, hogy jelenleg egyik sem tartalmaz szöveges üzenetet a felhasználó számára, csupán a piktogram alapján sejtethetjük, hogy valamilyen figyelmeztetést kaptunk. Továbbá azt is megfigyelhetjük, hogy a program fejlécében megjelenik az `Alert` ablak típusa.


### Címsor, fejléc, tartalom

Most pedig bemutatom, hogy az `Alert` ablakokhoz hogyan tudunk szöveges tartalmat hozzáadni illetve fejléc szövegét módosítani:

1. **Címsorának módosításához:**
   Az `Alert` ablak címének módosításához használd a `setTitle(String text)` metódust. Például:

   ```java
   Alert alert = new Alert(Alert.AlertType.INFORMATION);
   alert.setTitle("Információ");
   alert.showAndWait();
   ```

2. **Fejléc szöveg módosítása**:
   A fejléc szövegét a `setHeaderText(String text)` metódussal változtathatjuk meg. Például:

   ```java
   Alert alert = new Alert(Alert.AlertType.INFORMATION);
   alert.setTitle("Információ");
   alert.setHeaderText("Művelet sikeresen végrehajtva.");
   alert.showAndWait();
   ```

3. **Szöveges tartalom hozzáadása**:
   A szöveges tartalmat a `setContentText(String text)` metódus segítségével adhatjuk hozzá az `Alert` ablakhoz. Például:

   ```java
   Alert alert = new Alert(Alert.AlertType.INFORMATION);
   alert.setTitle("Információ");
   alert.setHeaderText("Művelet sikeresen végrehajtva.");
   alert.setContentText("Az új adatok el lettek mentve.");
   alert.showAndWait();
   ```


Így lehetőségünk van személyre szabni az `Alert` ablakokat, hogy megjelenítsék a szükséges információkat és figyelmeztetéseket a felhasználó számára.

Módosítás után így néznek ki az alábbi `Alert` ablakok:

![Error w/ title, header, content](/assets/images/vasvari/scenebuilder/dialog_error_content.webp)

![Warning w/ title, header, content](/assets/images/vasvari/scenebuilder/dialog_warning_content.webp)

![Information w/ title, header, content](/assets/images/vasvari/scenebuilder/dialog_information_content.webp)

:::info Fejléc elrejtése
Az `alert.setHeaderText(null)` meghívása azt eredményezi, hogy a fejléc teljesen eltűnik, vagyis nem lesz megjelenítve a felhasználónak.

![Fejléc elrejtve](/assets/images/vasvari/scenebuilder/dialog_header_null.webp)
:::

Most, hogy megismerkedtünk ezzel a három `Alert` ablakkal, nézzük meg a negyedik ablakunkat a `Confirmation`-t.

### Confirmation Alert

A `Confirmation` típusú `Alert` ablakot általában arra használják, hogy olyan helyzetekben jelenítsen meg üzenetet a felhasználónak, amikor megerősítést vagy elutasítást kérünk egy adott művelet előtt. Például, amikor a felhasználó szeretne egy fontos műveletet végrehajtani, az alkalmazás egy `Confirmation` ablakot jeleníthet meg, amely tartalmaz egy kérdést és gombokat, például __OK__ és __Cancel__, hogy a felhasználó dönthessen a művelet végrehajtásáról.

Egy példa ennek az ablaknak használatára:

```java
@FXML
void confirmationButton(ActionEvent event) {
   Alert alert = new Alert(Alert.AlertType.CONFIRMATION);
   alert.setTitle("Fájl törlése");
   alert.setHeaderText("Biztos át akarja helyezni ezt a fájlt a Lomtárba?");
   alert.setContentText("C:/Downloads/python_installer.exe");
   alert.showAndWait();
}
```

![Confirmation](/assets/images/vasvari/scenebuilder/dialog_confirmation.webp)

Szuper! Azonban feltételezem, hogy mindenki felvetette már azt a kérdést, hogy ha már rendelkezünk __Cancel__ és __OK__ gombokkal, akkor szükséges lenne valamilyen logikai folyamatban használni ezeket, hogy a programunk valódi funkcionalitást nyerjen.


Tehát ezért a programom úgy módosítom, hogy egy új `Label`-t adok hozzá az alkalmazás felületéhez és amikor döntést hozunk a __Cancel__ vagy a __OK__ gomb megnyomásával, a `Label` választásunknak megfelelően fogja frissíteni az információt.

```java
@FXML
void confirmationButton(ActionEvent event) {
   Alert alert = new Alert(Alert.AlertType.CONFIRMATION);
   alert.setTitle("Fájl törlése");
   alert.setHeaderText("Biztos, hogy át akarja helyezni ezt a fájlt a Lomtárba?");
   alert.setContentText("C:/Downloads/python_installer.exe");
   Optional<ButtonType> option = alert.showAndWait();

   if (option.isPresent()) {
      if (option.get() == ButtonType.OK) {
            this.confirmationLabel.setText("Fájl törölve!");
      } else if (option.get() == ButtonType.CANCEL) {
            this.confirmationLabel.setText("Fájl mégsem törölve!");
      } else {
            this.confirmationLabel.setText("-");
      }
   } else {
      this.confirmationLabel.setText("Az Optional értéke null.");
   }
}
```

Az `Optional<ButtonType> option = alert.showAndWait();` kódsor egy `Confirmation` ablakot jelenít meg, és várja a felhasználó válaszát, majd az ablak bezárása után visszaadja a válaszát egy `Optional` típusú változóban. Ezt követően ellenőrzi, hogy az `Optional` tartalmaz-e értéket (`option.isPresent()`), és ha igen, akkor megnézi, hogy melyik gombra kattintott a felhasználó. A választástól függően beállítja a `confirmationLabel` címke szövegét:

- Ha a felhasználó az __OK__ gombot választotta, akkor a címke szövege __Fájl törölve!__ lesz.
- Ha a felhasználó a __Cancel__ gombot választotta, akkor a címke szövege __Fájl mégsem törölve!__ lesz.
- Minden egyéb esetben a címke szövege __kötőjel (-)__ lesz.
- Ha az `Optional` nem tartalmaz értéket (tehát `null`), akkor a címke szövege __Az Optional értéke null.__ lesz.

:::info Optional&lt;T&gt;
Az `Optional<T>` egy olyan osztály a Java nyelvben, amelyet arra terveztek, hogy kezelje az érték jelenlétét (`present`) vagy hiányát (`null`) egy bizonyos típusú objektum (`<T>`) esetén. Az `Optional` osztály lehetővé teszi a programozók számára, hogy elegánsan kezeljék az olyan helyzeteket, ahol egy érték jelen van vagy éppen hiányzik (`null`), anélkül, hogy a `null` ellenőrzésekkel kellene foglalkozniuk.

Néhány alapvető információ az `Optional` osztályról:

Ennek az objektumoknak két fő állapota van:
   - `present`: Amikor az `Optional` tartalmaz egy értéket (nem `null`).
   - `empty`: Amikor az `Optional` nincs kitöltve, és nem tartalmaz értéket.


Az osztály számos hasznos metódust kínál az érték jelenlétének ellenőrzésére, az érték elérésére, és a hiányzó érték esetén történő kezelésére, például `isPresent()`, `get()`, `ifPresent()`, `orElse()` stb. Segít elkerülni a `null` ellenőrzések sorozatát, amelyekkel gyakran találkozhatunk, ha egy érték `null` lehet, és biztonságosabbá teszi a kódot. Magát ezt az osztályt nem csak null értékek kezelésére használják, hanem bármilyen érték jelenlétét és hiányát lehet vele kezelni.
Az `Optional` paraméterként megadja, hogy milyen típusú értéket tartalmaz, például `Optional<Integer>`, `Optional<String>`, stb.

Példa arra, hogyan használható az `Optional`:

```java
String someNullableValue = null; //null or "Hello"
Optional<String> optionalValue = Optional.ofNullable(someNullableValue);

if (optionalValue.isPresent()) {
   String value = optionalValue.get();
   System.out.println("The value: " + value);
} else {
   System.out.println("Empty value.");
}
```

Ebben a példában az `Optional` segítségével ellenőrizzük, hogy egy adott érték jelen van-e vagy hiányzik, és ennek megfelelően járunk el. Ennek használatával a kód olvashatóbb és kevésbé hajlamos hibákra.
:::

Az `Alert` ablak lehetőséget biztosít arra, hogy testre szabott gombokat jelenítsünk meg a lábléc területén.

```java{3,4}
   ...
   alert.setContentText("C:/Downloads/python_installer.exe");
   alert.getButtonTypes().clear();
   alert.getButtonTypes().addAll(new ButtonType("Nem"), new ButtonType("Igen"), new ButtonType("Talán"));
   Optional<ButtonType> option = alert.showAndWait();
   ...
```

Az alábbiakban a elmagyarázom ennek a két sornak a működését:

3. `alert.getButtonTypes().clear();`: Ez a sor először törli az összes alapértelmezett gombot az ablakból.

4. `alert.getButtonTypes().addAll();`: Ez a sor új gombokat ad hozzá az ablakhoz. Az új gombok jelen lesznek az ablak alján a lábléc területén, és a felhasználó választhat közöttük.

Ebben a példában a felhasználó most __Nem__, __Igen__ és __Talán__ lehetőségek közül választhat, és az alkalmazás a válasz alapján további műveleteket végezhet el.

Ezek a különböző típusú `Alert` ablakok hasznos eszközök az alkalmazásokban a felhasználóval történő kommunikációhoz és az információ megjelenítéséhez, hibák jelzéséhez és felhasználói döntések megerősítéséhez. Az ilyen `Alert` ablakok segítik a felhasználókat az alkalmazás használatában és az esetleges problémák kezelésében.

## Tulajdonságok és Kötések
_avagy Properties and Bindings_

A JavaFX használatának egyik előnye a tulajdonságok és a kötések átfogó támogatása. A tulajdonságok segítségével többek között a __Jelenetet__ (`Scene`) úgy kötheti össze, hogy a __Nézet__ (`View`) automatikusan frissüljön, ha módosítja a mögötte lévő adatokat.

A tulajdonságok __Megfigyelhető__ (`Observable`) objektumok, amelyek lehetnek írhatóak vagy csak olvashatóak. A JavaFX-ben __30__ típusú `Property` objektum létezik, köztük a `StringProperty`, a `SimpleListProperty` és a `ReadOnlyObjectProperty`. Mindegyik tulajdonság egy meglévő Java-objektumot csomagol be (`wrap`), hozzáadva a megfigyelés (`Event Listener`) és a kötés (`Bindings`) funkcionalitását.

![A `SimpleDoubleProperty` a JavaFX __kötések__, __tulajdonságok__ és __csomagok__ jelentős részéből örököl. Mindegyik csomag hozzáad egy-egy aspektust a JavaFX tulajdonságai által mutatott esetleges funkcionalitáshoz.](/assets/images/vasvari/SimpleDoubleProperty.webp)

A kötés egy olyan mechanizmus az objektumok közötti kapcsolatok érvényesítésére, amelyben egy vagy több megfigyelhető objektumot használnak egy másik objektum értékének frissítésére. A kötések egy vagy mindkét irányba hathatnak egymásra, és létrehozhatók közvetlenül a tulajdonságokból (`Fluent API`) vagy a `Bindings` segédosztály segítségével (`Bindings API`).

Egyéni kötésű objektumok kézzel is létrehozhatók, ha extra testreszabásra vagy teljesítményre van szükség. Ezt nevezzük alacsony szintű API-nak (_Low-Level API_).

:::info Properties and Bindings
A tulajdonságok és kötések interfészek és osztályok egy csoportja, amelyek célja, hogy jelentősen megkönnyítsék a fejlesztői életét. Ennek ellenére __61__ tulajdonsággal és __249__ metódussal a `Bindings` osztályban ez túlterhelő és nehezen kezelhető.

A __JavaFX__ korai szakaszában számos probléma abból eredet, hogy például a jelenet nem frissítette magát, amikor megváltoztattak valamit. Ennek az oka az volt, hogy a jelenetet helytelenül kötötték össze a tulajdonságokkal. A JavaFX jelenetet úgy tervezték, hogy a tulajdonságok és események alapján frissüljön.
:::

### Mi az a Property?



Amennyiben nem számítástechnikai háttérrel rendelkezel, a tulajdonságok elsőre elég ijesztőnek tűnnek. A motorháztető alatt azonban nincs semmi varázslatos. A __JavaFX__ `Property` objektumok többsége két kulcsfontosságú interfészt terjeszt ki: 

- `ReadOnlyProperty<T>` 
- `WriteableValue<T>`

![](/assets/images/vasvari/WhatIsAProperty.webp)

Néhányuk azonban nem... A JavaFX csak __10__ olvasható tulajdonsággal rendelkezik, amelyek kiterjesztik a `ReadOnlyProperty<T>`-t, de nem kiterjesztik a `WriteableValue<T>`-t.

### Property létrehozása

A JavaFX tíz beépített osztállyal rendelkezik, amelyek jelentősen megkönnyítik a tulajdonságok létrehozását. Ezek minden szükséges funkciót megvalósítanak, a figyeléstől a kötésig.

- `SimpleBooleanProperty`
- `SimpleDoubleProperty`
- `SimpleFloatProperty`
- `SimpleIntegerProperty`
- `SimpleListProperty`
- `SimpleLongProperty`
- `SimpleMapProperty`
- `SimpleObjectProperty`
- `SimpleSetProperty`
- `SimpleStringProperty`

Az egyszerű tulajdonságobjektumok (`Simple...Property`) bármelyikét definiálhatja kezdeti értékkel vagy anélkül. Ha alapértelmezett érték nélkül definiáljuk őket, akkor a tulajdonság az alapértelmezett értékét kapják - 0, false, "" vagy egy üres gyűjteményt.

```java
SimpleIntegerProperty()
SimpleIntegerProperty(int initialValue)
```

Létrehozhatók egy névvel és egy olyan objektummal is, amelyet a JavaFX a tulajdonság "`bean`"-jeként említ. Ez semmilyen módon nem zárja egységbe be a tulajdonságot, hanem egy szimbolikus linket hoz létre egy objektumhoz, amely a tulajdonság "tulajdonosát" reprezentálja.

:::info Egységbezárás 
avagy `Encapsulation`
Az adatok és a metódusok osztályba való összezárását jelenti. Tulajdonképpen az objektum egyéségbezárja az állapotot (_adattagok értékei_) a viselkedésmóddal (_műveletekkel_). Következmény: az objektum állapotát csak a műveletein keresztül módosíthatjuk.

```java
public class BankAccount {
    // Privát mező, nem érhető el közvetlenül kívülről
    private String accountNumber;
    // Privát mező, nem érhető el közvetlenül kívülről
    private double balance; 
    

    public BankAccount(String accountNumber) {
        this.accountNumber = accountNumber;
        this.balance = 0.0;
    }

    // Getter metódus az accountNumber lekérdezéséhez
    public String getAccountNumber() {
        return accountNumber;
    }

    // Getter metódus az egyenleg lekérdezéséhez
    public double getBalance() {
        return balance;
    }

    // Metódus a pénz befizetéséhez
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    // Metódus a pénz kivételéhez
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
}
```

A `BankAccount` osztály két privát mezőt tartalmaz (`accountNumber` és `balance`), amelyek nem érhetők el közvetlenül kívülről. Ehelyett a mezőkhöz két _getter_ metódust készítettünk (`getAccountNumber` és `getBalance`), amelyek segítségével az értéküket lekérdezhetjük, de nem módosíthatjuk őket közvetlenül.

Az osztály továbbá biztosít metódusokat a pénz befizetésére (`deposit`) és kivételére (`withdraw`), amelyek ellenőrzik a bemeneti értékeket és csak érvényes műveleteket hajtanak végre. Tehát az `encapsulation` segít abban, hogy az osztály belső állapotát ellenőrzött módon kezeljük, és ne lehessen káros végrehajtásokat rajta eszközölni.
:::

```java
SimpleIntegerProperty(Object bean, String name)
SimpleIntegerProperty(Object bean, String name, int initialValue)
```

Sem a `name`, sem a `bean` attribútumok nem változtatják meg a tulajdonság viselkedését, de hasznos keresési lehetőségként szolgálhat. Ez akkor hasznos, ha ugyanazt a figyelőt több tulajdonsághoz csatoljuk - különösen generált tulajdonságokhoz. Ezután, ha változás történik, a `bean` és a `name` attribútumok segítségével ellenőrizhetjük, hogy melyik tulajdonság változott meg éppen.

Minden __JavaFX__ tulajdonság rendelkezik olyan beépített funkciókkal, amelyek segítik az alábbiakat:

- Lehetőség van figyelni és értesülni a tulajdonság értékének változásairól.
- A tulajdonságokat egymáshoz lehet kötni, így automatikusan frissülnek, ha az egyik megváltozik.
- Lehetőség van lekérdezni és beállítani a tulajdonság értékét, feltéve, hogy a tulajdonság írható.

### Hogyan kell megfigyelni a tulajdonságokat

Ahogy fentebb láttuk, a __JavaFX__ `Property` objektumok különböző implementált interfészek összevisszasága. Ez itt azért fontos, mert ez azt jelenti, hogy kétféle módon biztosítják a változásokra való figyelést: `invalidation` és `change`.

![](/assets/images/vasvari/PropertyListenerOptions.webp)


`InvalidationListeners`: Minden JavaFX tulajdonság megvalósítja az `Observable` interfészt, ami azt jelenti, hogy mindegyik képes regisztrálni olyan _listenereket_, amelyek akkor aktiválódnak, amikor a tulajdonság érvénytelenítve lett. 

:::info Érvénytelenítve
avagy `invalidation`
Az érvénytelenítés azt jelzi, hogy a tulajdonság állapota megváltozott, de az aktuális értékét nem kapjuk meg a figyelőn keresztül. Használata akkor lehet hasznos, ha egy tulajdonság frissítése nem igényel azonnali újraszámítást, de értesítést akarunk kapni a változásról.

```java
import javafx.beans.InvalidationListener;
import javafx.beans.Observable;

public class InvalidationListenerExample {

    public static void main(String[] args) {
        MyProperty myProperty = new MyProperty();

        InvalidationListener listener = new InvalidationListener() {
            @Override
            public void invalidated(Observable observable) {
                System.out.println("A tulajdonság érvénytelenítve lett.");
            }
        };

        myProperty.addListener(listener);

        myProperty.setValue(10);
        // Itt meg kell adni a listener objektumot
        myProperty.removeListener(listener);
    }
}

class MyProperty implements Observable {
    private int value;
    private InvalidationListener listener;

    @Override
    public void addListener(InvalidationListener listener) {
        this.listener = listener;
    }

    @Override
    public void removeListener(InvalidationListener listener) {
        if (this.listener == listener) {
            this.listener = null;
        }
    }

    public void setValue(int newValue) {
        if (value != newValue) {
            value = newValue;
            if (listener != null) {
                listener.invalidated(this);
            }
        }
    }
}
```
:::

Azoknál a tulajdonságoknál, amelyek bonyolult vagy költséges számításokat igényelnek, ez egy hasznos eszköz lehet, de nem tapasztalom, hogy annyira gyakran használnák, mint a `ChangeListeners`-t.

`ChangeListeners`: A JavaFX tulajdonságok az `ObservableValue<T>` interfészt is kiterjesztik, ami azt jelenti, hogy olyan _listenereket_ is regisztrálhatunk, amelyek csak akkor hívódnak meg, ha egy objektum ténylegesen megváltozott.

A _listenerek_ lehetővé teszik számunkra, hogy értesüljünk egy változásról, és előre meghatározott kódot biztosítsunk, amely az új és régi tulajdonságértékeken alapul.

### Változásokról való értesülés

Egy tulajdonsághoz az `addListener()` metódus meghívásával regisztrálhatunk egy figyelőt, amely vagy egy `InvalidationListener` (kevésbé gyakori), vagy egy `ChangeListener` (gyakoribb).

Használatához elegendő implementáláni a `ChangeListener` interfész  - ez egy funkcionális interfész egy metódussal: `changed()`.

```java
DoubleProperty magassag = new SimpleDoubleProperty(2500);

ChangeListener<Number> changeListener = new ChangeListener<Number>() {
        @Override
        public void changed(ObservableValue<? extends Number> observable, Number oldValue, Number newValue) {
            if (newValue.doubleValue() < 1500) {
                ejtoernyoKinyitasa();
            }
        }
    };

magassag.addListener(changeListener);
```

Az összes számértékű tulajdonság (`double`, `float`, `int` és `long`) esetében olyan `ChangeListener`-ek szükségesek, amelyek paraméterként `Number` típust várnak. 


:::info lambda
Természetesen, mivel ezek funkcionális interfészek, lehetőség van rá, hogy __Java 8 vagy annál újabb__ verzióiban azonnal létrehozzuk őket lambda kifejezések segítségével.

```java
magassag.addListener((observable, oldValue, newValue) -> {
        if (newValue.doubleValue() < 15000) {
            deployParachute();
        }
});
```
:::

Minden alkalommal, amikor a tulajdonság értéke megváltozik, a `listener` egyszer működésbe lép.

### Mi az a kötés?

A kötésekkel az objektumokat összeköthetjük, és olyan kapcsolatot hozunk létre, amelyben az egyik objektum függ legalább egy másik objektumtól. A tulajdonságok natív módon, valamint `Expression` és `Binding` objektumok létrehozásával köthetők.

A `Expression` és a `Binding` megfigyelhető objektumok, amelyek legalább egy másik megfigyelhető objektum értékétől is függnek (_de potenciálisan több is lehet_). Ez lehetővé teszi, hogy több számítást tartalmazó kifejezésláncokat hozzon létre: szuperegyszerű módja a karakterlánc- vagy számkonverziók összekapcsolásának.

Most csak két tulajdonságot fogunk egymáshoz kötni, további osztályok nélkül.

### Hogyan kössünk össze Property-ket

Háttérben a kötés (`binding`) egy speciális használati módja a változásfigyelésnek. Az összes __JavaFX Binding API__ tartalmaz sablonkódot, amely figyeli (__legalább__) egy tulajdonság változását, és minden változást alkalmaz az adott kötés értékének frissítéséhez.

Míg a `ChangeListner`-ek lehetővé teszik előre definiált kód megadását, a kötés lehetővé teszi két tulajdonság egyszerű összekapcsolását anélkül, hogy aggódnánk a konkrét érték frissítésének a megvalósítása miatt.

A legegyszerűbb és leggyakrabban használt módszerek azok, amelyek a `Property` objektumokhoz vannak csatolva: `bind()` és `bindBidirectional()`. Ezek a legegyszerűbb lehetőségek az egyirányú és kétirányú kötések létrehozásához.

### Egyirányú kötés

Amikor meghívod a `bind()` módszert egy tulajdonságon, átadsz neki egy második tulajdonságot _argumentumként_ - ez a kötés forrása.

```java
StringProperty sourceProperty = new SimpleStringProperty("First Value");
StringProperty targetProperty = new SimpleStringProperty("Second Value");
targetProperty.bind(sourceProperty);
```

A háttérben a tulajdonság egy hivatkozást tárol, ahol az új tulajdonságnak figyeli a változásait. Amikor a forrás (`sourceProperty`) értéke megváltozik, automatikusan frissíti a célt (`targetProperty`), amikor változást észlel.


![](/assets/images/vasvari/SimplePropertyBinding.webp)


Ebben az esetben a `targetProperty` követni fogja a `sourceProperty` értékét. Néhány megjegyzés a módszerhez tartozó további részekről:

- Ha a tulajdonság jelenleg kötve van, a jelenlegi kötése megszűnik, és az új kötés lép a helyére.
- Ha `null` értéket adunk át argumentumként, a metódus `NullPointerException` kivételt dob.
- A metódus azonnal másolja a megfigyelt tulajdonság értékét, így az aktuális `targetProperty` értéke elveszik.

### Kétirányú kötés

Ha két tulajdonságot szeretnénk összekötni úgy, hogy mindig ugyanaz legyen az értékük, akkor használhatjuk a `bindBidirectional()` függvényt, amelynek argumentumaként átadjuk a forrás tulajdonságot.

```java
StringProperty sourceProperty = new SimpleStringProperty("First Value");
StringProperty targetProperty = new SimpleStringProperty("Second Value");
targetProperty.bindBidirectional(sourceProperty);
```

Ha a tulajdonságok értéke különböző, akkor a metódus hívásának sorrendje fontos a kötés kezdőértékének meghatározásában.

A `targetProperty` alkalmazott tulajdonság azonnal frissíti a `targetProperty` értékét, mielőtt a `sourceProperty`-vel azt összekötnénk. Ez azt jelenti, hogy a kétirányú kötés után mindkét tulajdonság az argumentumként átadott tulajdonság értékével fog rendelkezni.

![](/assets/images/vasvari/SimplePropertyBidirectionalBinding.webp)

A __JavaFX__ nemcsak az alapvető, egyszerű másoláson alapuló kötést támogatja, hanem lehetőséget nyújt a tulajdonságok bonyolultabb összekapcsolására is: több tulajdonság összekapcsolására vagy egy tulajdonságnak bonyolult manipulációja a másik tulajdonságának a frissítésére.

A következő részekben áttekintjük a bonyolultabb kötéseket.


## Haladó kötési technikák

Három módszer áll rendelkezésre bármely tulajdonság manipulálására és a manipulált érték kötésére:

- A `Fluent API` - olyan módszerek, mint a `myProperty.bind(otherProperty).multiply(2)`
- A `Bindings API` - olyan módszerek, mint a `Bindings.add(myProperty, otherProperty)`
- Az `Low-Level API` - saját `Bindings` objektumok létrehozása, mint például a `DoubleBinding`

Ezek közül kettő előre meghatározott implementációkkal rendelkező sablon módszereket biztosít a tulajdonságok összekapcsolásához. Ezek a módszerek a tulajdonságkötések többségének lefedésére elegendőek, mivel hatalmas rugalmasságot biztosítanak.

### Fluent API

![](/assets/images/vasvari/ExpressionChaining.webp)

A __Fluent API__ az `expression` objektumok létrehozására támaszkodik, melyek hasonlóak a tulajdonságokhoz (_figyelhető értékek_), de extra kényelmi metódusokkal rendelkeznek a további manipulációk támogatásához.

A tulajdonságokat is össze lehet kötni kifejezésekkel, ami azt jelenti, hogy a manipulációk eredményét fel lehet használni egy tulajdonság frissítéséhez, éppen úgy, mint fentebb. Ennek a funkcionalitásnak - a megfigyelhetőségnek és egy értéktől való függésnek - az az eredménye, hogy láncolás lehetséges.


Például karakterláncok esetében ezt arra használhatjuk, hogy a karakterláncok láncolatát hozzuk létre, amelyeket egymáshoz fűzünk. Amint a `sourceProperty` frissül, a `targetProperty` automatikusan frissül a kifejezésen keresztül.

```java
StringProperty sourceProperty = new SimpleStringProperty("It doesn't matter how slowly you go");
StringExpression expression = sourceProperty.concat(" as long as you don't stop");
StringProperty targetProperty = new SimpleStringProperty("");
targetProperty.bind(expression);
System.out.println(targetProperty.get());
//Output: It doesn't matter how slowly you go as long as you don't stop
```

Ezt mind megtehetjük egy sorban, így a bonyolult kódot viszonylag tömörebben írhatjuk. Ebben az esetben létrehozzuk a `StringExpression`-t, miközben meghívjuk a bind metódust.

```java
targetProperty.bind(sourceProperty.concat(" as long as you don't stop"));
System.out.println(targetProperty.get());
//Output: It doesn't matter how slowly you go as long as you don't stop
```

Ez egy kicsit zavaró lehet, de ne felejtsük el, hogy a `targetProperty` valójában a `concat()` metódus által létrehozott `StringExpression`-hez van kötve. Ez az anonim kifejezés az, ami a `sourceProperty`-hez lesz kötve.

Lefedi a legtöbb manipulációt, amire szükségünk lehet. A `Fluent API`-t számokkal is használhatjuk. Számsorok esetén manipulációkat fűzhetünk egymáshoz, hogy egyszerű, olvasható kódot hozzunk létre, amely tükrözi a reprodukálni kívánt képletet. Például fokból radiánba váltáshoz meg kell szorozni Pi értékével és elosztani 180-tal. 

```java
DoubleProperty degrees = new SimpleDoubleProperty(180);
DoubleProperty radians = new SimpleDoubleProperty();
radians.bind(degrees
                .multiply(Math.PI)
                .divide(180)
        );
```

:::info 
A kód rendkívül olvasható jelenleg.

Azonban teljesítmény szempontjából minden kifejezés egy láncszem, amelyet minden változáskor frissíteni kell az eredeti tulajdonságban. Ebben a példában, ahol fokokból radiánba váltunk, két megfigyelhető értéket hozunk létre csak azért, hogy frissítsük a radián tulajdonságunkat.
:::

Bonyolult átalakítások esetén, vagy olyan helyzetekben, ahol sok kötést végezünkk, érdemes fontolóra venni a `Bindings API` használatát (`az rugalmasságot nyújt, amire szükséged van`), vagy a `Low-Level API`-t.

### Binding API

A Bindings osztály a __JavaFX__-ben egy segédosztály, amely __249__ metódust tartalmaz a tulajdonságkötésekhez. Lehetővé teszi a különböző típusú megfigyelhető (`observable`) objektumok közötti kötések létrehozását. Összekötheted tulajdonságokat értékekkel, például karakterláncokkal és számokkal, a kötéstől függően.


![](/assets/images/vasvari/HowAPropertyOrBindingUpdates.webp)

Az JavaFX-ben 10 általános kötési stratégia létezik, amelyeket a két fő részterület osztottam, ezek a "__műveletek értékeken__" (_values_) és "__műveletek gyűjteményeken__" (_collections_). Néhány nem illeszkedik bele, ezért van egy "__egyéb__" nevű kevésbé elegáns kategóriánk is.

__Értékek__ (_values_):
- Matematika (`+, - ÷, ×`)
- A maximum vagy a minimum kiválasztása
- Érték-összehasonlítás (`=, !=, <, >, <=, >=`)
- String formázás


__Gyűjtemények__ (_collections_):
- Két gyűjtemény összekapcsolása (listák (_list_), map-ek, set-ek (_halmazok_))
- Értékek kötése objektumokhoz a gyűjtemény egy bizonyos pozíciójában lévő objektumokhoz.
- Kötés a gyűjtemény méretéhez
- Egy gyűjtemény üres-e


__Egyéb kötések__:
- Több objektumhoz kötődések
- Boolean operátorok (és, nem vagy) - (és ha!)
- Értékek kiválasztása


### Értékeken végzett műveletek

A __Bindings API__ támogatást nyújt négy egyszerű matematikai művelethez: __összeadás__, __kivonás__, __szorzás__ és __osztás__. Különféle metódusokat biztosít ezek használatához `double`, `int` és `Long` értékekkel, valamint két `ObservableNumberValue` objektum között (például egy `DoubleProperty` esetén).


```java
DoubleBinding add(double op1, ObservableNumberValue op2)
NumberBinding add(float op1, ObservableNumberValue op2)
NumberBinding add(int op1, ObservableNumberValue op2)
NumberBinding add(long op1, ObservableNumberValue op2)
DoubleBinding add(ObservableNumberValue op1, double op2)
NumberBinding add(ObservableNumberValue op1, float op2)
NumberBinding add(ObservableNumberValue op1, int op2)
NumberBinding add(ObservableNumberValue op1, long op2)
NumberBinding add(ObservableNumberValue op1, ObservableNumberValue op2)
```



### Low-level API

A `Low-Level API` egy 10 absztrakt `Binding` osztály gyűjteménye, melyeket az összes kötés nehézkes részének végrehajtására terveztek (_például hallgatók hozzáadása és eltávolítása_). Az osztály `observable` értékeket vesz fel, és átalakítja őket egy kimenetre. A __Fluent__ és a __Bindings API__-khoz hasonlóan a __Low-level API__ is támogatja a `boolean`, `string`, `számok`, `gyűjtemények` és `objektumok` használatát.


#### Low-Level API kötés létrehozása

Olyan egyszerű lehet, mint egy absztrakt belső osztály definiálása (_egy osztály, amit más kóddal együtt definiálsz_). Mivel az absztrakt `Bindings` osztályoknak csak egy absztrakt metódusa van, csak akkor kell a `computeValue()` metódust felülírnod, amikor definiáljuk.

Amint definiáljuk a kötést, az hivatalos tanács az, hogy használjunk inicializációs blokkot, amely összeköti a forrás tulajdonságokat a kötés létrehozása során. Az összhatás pontosan ugyanaz - _a fordító amúgy is beilleszti a kódot az inicializációs blokkokba_ - viszont a konstruktor megközelítés alkalmasabb, ha egy olyan konkurens osztályt hozol létre, amit többször is használni fogsz.

```java
//Inside your binding object at the top
{
    super.bind(cost, itemCount);
}
```

Ezután csak meg kell határoznod a `computeValue()` metódust. Ebben az esetben egészen egyszerű, de a számítást akár bonyolultabbá is teheted, ahogyan csak szeretnéd.

```java
DoubleProperty cost = new SimpleDoubleProperty(25);
IntegerProperty itemCount = new SimpleIntegerProperty(15);
DoubleBinding totalCost = new DoubleBinding() {
    
    {
        super.bind(cost, itemCount);
    }
    
    @Override
    protected double computeValue() {
        return itemCount.get() * cost.get();
    }
};
```


Ettől a ponttól kezdve a `totalCost` kötés értéke mindig tükrözi a `cost` és `itemCount` tulajdonságok szorzatát.

Ha szeretnéd, hogy a `totalCost` objektumot továbbadhassa és később visszakaphassa a függőségeket, extra funkcionalitást adhatsz hozzá az alapértelmezett `getDependencies()` metódus felülírásásával.

#### További funkcionalitás hozzáadása a Low-Level API kötésekhez

Az `Low-Level API` minden osztálya bővíthető a `getDependencies()` és `dispose()` metódusok felülírásásával.

- `getDependencies()`: visszatérhet az összes függőséggel, ha szükséges őket tárolni és később visszakapni.
- `dispose()`: leiratkozhat az összes kötés függőségére regisztrált `listener`-ről.



##### `getDependencies()` felülírása

A `getDependencies()` metódus felülírása fontos, ha szeretnéd átadni a kötés objektumot egy másik osztálynak, vagy tárolni és később visszakapni a függőségeket.

```java
DoubleBinding totalCost = new DoubleBinding() {
    {
        super.bind(cost, itemCount);
    }
    @Override
    protected double computeValue() {
        return itemCount.get() * cost.get();
    }
    @Override
    public ObservableList<?> getDependencies() {
        return FXCollections.observableList(Arrays.asList(cost, itemCount));
    }
};
```

Érdemes észben tartani, mielőtt nekiesnénk felülírni ezt a metódust, hogy a `Low-Level API` összes alapértelmezett implementációja __weak listenereket__ használ. Ez azt jelenti:

:::warning Ha a Low-Level API-t az alapértelmezett implementációval használjuk, akkor erős referenciákat kell fenntartania a `observable` (_megfigyelhető_) objektumokra, különben azok szemétgyűjtésre (`garbage collected`) kerülnek, és a hivatkozás elveszik.
:::

Ezzel együtt, ha erős __listenerekkel__ implementáltad a kötést, akkor érdemes lesz a `dispose()` metódust is felülírnod. Ez megakadályozza a memóriaszivárgásokat, amelyek akkor jelentkezhetnek, ha egy kötést nem törölnek le az `observable` objektumról, miután már használták.


```java
@Override
public void dispose() {
    unbind(cost, itemCount);
}
```

## Konklúzió

A __JavaFX__-ben a tulajdonságok lehetnek csak olvashatóak vagy írhatóak, de mindig észlelhetőek. 

Minden tulajdonság megvalósítja a funkcionalitást a

- `javafx.beans.binding`
- `javafx.beans.value` 
- és `javafx.beans.property` 

csomagokból.

Minden tulajdonságot meg lehet figyelni `InvalidationListener` vagy `ChangeListener` objektumokkal. Mindkettőt el lehet érni az `addListener()` metódus meghívásával, mert minden tulajdonságnak van `addListener()` metódusa mind az `Invalidation` (_érvénytelenség_), mind a `Change` (_változás_) esetére.

A `property listening` (_tulajdonságfigyelés_) kiterjesztése a `property binding` (_tulajdonságkötés_), amely lehetőséget nyújt a tulajdonságok összekapcsolására, így azok automatikusan frissülnek egy vagy több változás alapján.

Ezen felül a __JavaFX__ támogatást nyújt a kötéseket `Expression` és `Bindings` objektumokon keresztül való kiterjesztéséhez. Ezekhez a legegyszerűbb hozzáférni a `Fluent` és `Bindings API`-kon keresztül. Azonban ha teljesítményre vagy testreszabhatóságra van szükségünk, a `Low-Level API` lehetővé teszi számunkra, hogy teljesen egyedi kötéseket hozzunk létre.


[^first]: A domain model a valós világbeli objektumok strukturált vizuális megjelenítése, amely magában foglalja az összes entitás viselkedését és kapcsolatait. Ez segít a szoftvertervezés során az objektumokat és szolgáltatásokat összekapcsolni, és biztosítja, hogy a szoftver a területre vonatkozó szabályokat és követelményeket megfelelően kezelje.

[^second]: Az aggregált gyökér olyan entitás vagy objektum, amely csoportosítja és vezeti az összetartozó objektumokat egy területen, meghatározva, hogyan lehet hozzájuk hozzáférni és módosítani az alkalmazásban.

[^third]: A repository minta, amely elszigeteli az adatréteget az alkalmazás többi részétől. Az adatréteg az alkalmazásnak a felhasználói felülettől elkülönített részét jelenti, amely az alkalmazás adatait és üzleti logikáját kezeli.