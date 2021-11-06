# Флаги
## Линия
Мы с Вами уже умеем создавать линию из блоков в Minecraft

# Линии
|#|Название|Альтернативные задания|Код|Результат|
|---|---|---|---|---|
|1|Шахматная доска| 1. Сделать белые и красные клетки <br> 2. Сделать синие и желтые клетки <br> 3. Увеличить доску в 2 раза <br> 4. Увеличить доску в 4 раза|let k = 0 <br>player.onChat("chess", function () {<br>&nbsp;&nbsp;agent.setItem(WHITE_CONCRETE, 1, 1)<br>&nbsp;&nbsp;agent.setItem(BLACK_CONCRETE, 1, 2)<br>&nbsp;&nbsp;agent.move(UP, 1)<br>&nbsp;&nbsp;for (let i = 0; i <= 8; i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;for (let j = 0; j <= 8; j++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;agent.setSlot(Math.abs(k-j % 2)+1)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;agent.place(DOWN)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;agent.move(FORWARD, 1)<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;agent.move(BACK, 9)<br>&nbsp;&nbsp;&nbsp;&nbsp;agent.move(RIGHT, 1)<br>&nbsp;&nbsp;&nbsp;&nbsp;k = 1 - k<br>&nbsp;&nbsp;}<br>})|<img src = './img/chess-board-01.png' width=500>|

