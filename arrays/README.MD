# Массивы
## Дорога
Массивы позволяют хранить информацию
|#|Альтернативное задание|Код|Результат|
|---|---|---|---|
|1|1. Построить дорогу из 7 блоков. Основа дороги из черных блоков бетона, разметка - из белых блоков бетона по схеме (бччбчччб)<br>2. Построй однополосную дорогу: основа из черного бетона, разметка из белого бетона по схеме (бчччб)<br>3. Построй "велодорожку": основа из черного бетона, разметка из белого бетона по схеме (чбч) |let ar: number[] = []<br>player.onChat("road", function () {<br>agent.setItem(BLACK_CONCRETE, 1, 1)<br>agent.setItem(WHITE_CONCRETE, 1, 2)<br>ar = [2,1,1,2,1,1,2]<br>for (let index = 0; index < 20; index++) {<br>for (let value of ar) {<br>agent.setSlot(value)<br>agent.destroy(DOWN)<br>agent.place(DOWN)<br>agent.move(RIGHT, 1)<br>}<br>agent.move(LEFT, 7)<br>agent.move(FORWARD, 1)<br>}<br>})|<img src = "img/road01.png">|


**Творческое задание:**
1. С помощью массива написать свое имя с помощью блоков используя шифр азбуки Морзе.


## Фонарь

|№|Альтернативные задания|Код|Скриншот|
|---|---|---|---|
|2|1. Построить фонарь с палочкой из забора из дуба (1), забора из березы (2), забора из темного дуба (3) по формуле (1-2-1-1-3)<br>2. Построить фонарь на 1 блок ниже предыдущего по своей формуле.<br>3. Построить фонарь на 2 блока выше предыдущего по своей формуле. |let ar: number[] = []<br>let column: number[] = []<br>let crossbar: number[] = []<br>player.onChat("road", function () {<br>    agent.setItem(BLACK_CONCRETE, 1, 1)<br>    agent.setItem(WHITE_CONCRETE, 1, 2)<br>    ar = [<br>    2,<br>    1,<br>    1,<br>    2,<br>    1,<br>    1,<br>    2<br>    ]<br>    for (let index = 0; index < 20; index++) {<br>        for (let value of ar) {<br>            agent.setSlot(value)<br>            agent.destroy(DOWN)<br>            agent.place(DOWN)<br>            agent.move(RIGHT, 1)<br>        }<br>        agent.move(LEFT, 7)<br>        agent.move(FORWARD, 1)<br>    }<br>})<br>player.onChat("t", function () {<br>    agent.teleportToPlayer()<br>})<br>player.onChat("light", function () {<br>    agent.setItem(OAK_FENCE, 1, 1)<br>    agent.setItem(BIRCH_FENCE, 1, 2)<br>    agent.setItem(DARK_OAK_FENCE, 1, 3)<br>    agent.setItem(GLOWSTONE, 1, 4)<br>    column = [<br>    1,<br>    2,<br>    1,<br>    1,<br>    3<br>    ]<br>    for (let value of column) {<br>        agent.setSlot(value)<br>        agent.place(FORWARD)<br>        agent.move(UP, 1)<br>    }<br>    agent.move(LEFT, 1)<br>    crossbar = [1, 3, 1]<br>    for (let value of crossbar) {<br>        agent.setSlot(value)<br>        agent.place(FORWARD)<br>        agent.move(RIGHT, 1)<br>    }<br>    agent.move(DOWN, 1)<br>    agent.move(LEFT, 3)<br>    agent.setSlot(4)<br>    agent.place(FORWARD)<br>    agent.move(RIGHT, 2)<br>    agent.place(FORWARD)<br>    agent.move(DOWN, column.length - 1)<br>})<br>|<img src = "img/light01.png">|

**Творческие задания:**
1. Построить аллею фонарей.
2. Построить аллею фонарей вдоль дороги.
3. Построить аллею фонарей вдоль дороши (справа от фонарей - дорога, слева - велодорожка).

**Супер-творческое задание:**
1. Построить микрорайон: дома, между которыми проходят дороги, дорожки и велодорожки, размещены фонари, чтобы даже ночью было видно куда идти. На главной площади выложите узор.

|№|Альтернативные задания|Код|Скриншот|
|---|---|---|---|
|3|1. Написать букву A.<br>2. Написать букву B.<br>3. Написать букву C.<br> 4. Написать букву D.<br> Написать букву E.<br>|let matrix: number[][] = []<br><br>player.onChat("letter", function () {<br>    agent.setItem(WHITE_CONCRETE, 1, 1)<br>    agent.setItem(RED_CONCRETE, 1, 2)<br>    matrix = [<br>    [1,1,1,1,1],<br>    [2,1,2,2,1],<br>    [2,1,2,2,1],<br>    [2,1,2,2,1],<br>    [1,1,1,1,1]<br>    ]<br>    for (let value of matrix) {<br>        for (let v of value) {<br>            agent.setSlot(v)<br>            agent.destroy(DOWN)<br>            agent.place(DOWN)<br>            agent.move(FORWARD, 1)<br>        }<br>        agent.move(BACK, value.length)<br>        agent.move(RIGHT, 1)<br>    }<br>})<br>|<img src = "img/letter01.png">|


**Творческие задания:**
1. Написать свое имя с помощью созданных букв

**Супер-творческое задание:**
1. Нарисовать на листочке узор 5х5.
2. Реализовать нарисованный узор с помощью двумерного массива 5х5.