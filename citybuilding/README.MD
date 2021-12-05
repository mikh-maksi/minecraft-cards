# Строительство по чертежам
## Строительство высотных зданий:
Если объединить циклы и строительство блоков мы получим возможность строить высотные здания (многоэтажные, с разным количестом этажей, разными материалами и разной высотой эжтажа)

|#|Альтернативное задание|Код|Результат|
|---|---|---|---|
|1|1. Постройте многоэтажку в 5 этажей из координаты 0;4;0 размером 10х10 с фундаментом из булыжника, этажами из синих стеклянных блоков высотой 6 блоков и перекрытиями из коричневых стеклянных блоков.<br> 2. Постройте многоэтажку в 8 этажей из координаты 0;4;0 размером 10х10 с фундаментом из белого бетона, этажами из желтых стеклянных блоков высотой 5 блоков и перекрытиями из синих бетонных блоков. <br>3. Постройте многоэтажку в 3 этажа из координаты 0;4;0 размером 5х5 с фундаментом из синего бетона, этажами из зеленых стеклянных блоков высотой 5 блоков и перекрытиями из серых стеклянных блоков.  |player.onChat("building", function () {<br>    blocks.fill(<br>    CHISELED_STONE_BRICKS,<br>    world(0, 3, 0),<br>    world(10, 3, 10),<br>    FillOperation.Replace<br>    )<br>    for (let index = 0; index <= 4; index++) {<br>        blocks.fill(<br>        LIGHT_BLUE_STAINED_GLASS,<br>        world(0, index * 7 + 4, 0),<br>        world(10, index * 7 + 10, 10),<br>        FillOperation.Replace<br>        )<br>        blocks.fill(<br>        AIR,<br>        world(1, index * 7 + 4, 1),<br>        world(9, index * 7 + 10, 9),<br>        FillOperation.Replace<br>        )<br>        blocks.fill(<br>        BROWN_STAINED_GLASS,<br>        world(0, index * 7 + 10, 0),<br>        world(10, index * 7 + 10, 10),<br>        FillOperation.Replace<br>        )<br>    }<br>})<br>|<img src ="img/building_view.png" width=300>|





## Построение по схеме
<img src = "img/scheme.png">

## Здания по фотографии


<img src = "img/vokzal_light.jpeg">  
<img src = "img/vokzal.jpeg">
<img src = "img/vokzal_square.jpeg">



