# Блоки
В программировании в Майнкрафте можно запрограммировать размещение блоков.  
Данный код заменяет 1 блок под игроком на блок воздуха
```js
player.onChat("п", function () {
    blocks.place(AIR, pos(0, -1, 0))
})
```
<img src = "img/flying01.gif">


Такой код - позволяет **"пробивать землю"**, для этого игрок должен начать падать (**FALL**)
```js
player.onTravelled(FALL, function () {
    player.runChatCommand("п")
    player.say("Я - лечу!!!")
})
player.onChat("п", function () {
    blocks.place(AIR, pos(0, -1, 0))
})
```
<img src = "img/flying02.gif">

**Задание:**
5 раз "пробить" землю из полета.

##  Сажать цветы
Также можно запрограммировать **ходьбу** (**WALK**) игрока.
```js
player.onTravelled(WALK, function () {
    blocks.place(OXEYE_DAISY, pos(0, 0, 0))
})
```
<img src = "img/walk01.gif">

PINK_TULIP - розовый тюльпан  
WHITE_TULIP - белый тюльпан  
ORANGE_TULIP - оранжевый тюльпан  
RED_TULIP - красный тюльпан  
YELLOW_FLOWER - одуванчик  
POPPY - мак  
BLUE_ORCHID - синяя орхидея  
ALLIUM - лук  
AZURE_BLUET - голубой василек  
BAMBOO - бамбук  
CORNFLOWER - василек  
LILY_OF_THE_VALLEY - ландыш  
BROWN_MUSHROOM - гриб (коричневый)   
RED_MUSHROOM - мухомор (красный)  
TORCH - факел  

|#|Дополниительные задания|Код|внешний вид|
|---|---|---|---|
|1|1. Посадить линию ромашек <br>2. Посадить крест ромашек<br>3. Посадить линию маков<br>4. Посадить крест белых тюльпанов<br>5. Поставить крест факелов|player.onTravelled(WALK, function () {blocks.place(OXEYE_DAISY, pos(0, 0, 0))})|<img src = "img/walk01.png" width=200><img src = "img/walk02.png" width=50>|

## Блоки
В майнкрафте можно с помощью кода можно разместить группы блоков:
```js
player.onItemInteracted(IRON_SHOVEL, function () {
    blocks.fill(
    LAPIS_LAZULI_BLOCK,
    pos(0, 0, 0),
    pos(3, 5, 1),
    FillOperation.Replace
    )
})
```
<img src = "img/block01.png" width = 300>

|#|Дополниительные задания|Код|внешний вид|
|---|---|---|---|
|2|1. Построить параллелипипед из лазуритных блоков размером 4х6х2<br>2. Построить параллелипипед из лазуритных блоков размером 5х5х5<br>3. Построить параллелипипед из алмазных блоков размером 3х3х3<br>4. Построить параллелипипед из изумродных блоков размером 4х12х4<br>5. Построить параллелипипед из лазуритных блоков размером 10х1х1<br>|player.onItemInteracted(IRON_SHOVEL, function () {<br>blocks.fill(<br>LAPIS_LAZULI_BLOCK<br>pos(0, 0, 0),<br>pos(3, 5, 1),<br>FillOperation.Replace<br>)<br>})|<img src = "img/block01.png" width = 200>|

**Творческое задание:** построить "город" - 10+ зданий из различных материалов.


```js
player.onItemInteracted(IRON_SHOVEL, function () {
    blocks.fill(
    LAPIS_LAZULI_BLOCK,
    pos(0, 0, 0),
    pos(0, 0, 10),
    FillOperation.Replace
    )
})

```

```js
player.onItemInteracted(IRON_SHOVEL, function () {
    blocks.fill(
    LAPIS_LAZULI_BLOCK,
    pos(0, 0, 0),
    pos(0, 0, 10),
    FillOperation.Replace
    )
})
```

```js
player.onItemInteracted(STONE_SHOVEL, function () {
    for (let index = 0; index <= 5; index++) {
        blocks.place(LAPIS_LAZULI_BLOCK, pos(0, 0, index))
    }
})
```