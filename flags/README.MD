# Флаги
## Линия
Мы с Вами уже умеем создавать линию из блоков в Minecraft

# Линии
|#|Название|Альтернативные задания|Код|Результат|
|---|---|---|---|---|
|1|Линия блоков| 1. 6 золотых <br> 2. 6 алмазных блоков <br> 3. 9 изумрудных блоков <br> 4. 12 железных блоков<br> 5. 15 угольных блоков|player.onChat("line", function () {<br>    agent.setItem(GOLD_BLOCK, 1, 1)<br>    agent.move(UP, 1)<br>    for (let index = 0; index < 6; index++) {<br>        agent.place(DOWN)<br>        agent.move(FORWARD, 1)<br>    }<br>    agent.move(DOWN, 1)<br>})|<img src = './img/screen-01.png' width=500>|

|#|Название|Альтернативные задания|Код|Результат|
|---|---|---|---|---|
|1|Линия блоков| 1. 6x6 белых бетонных блоков <br> 2. 6x4 красных бетонных блоков <br> 3. 12x8 зеленых бетонных блоков  <br> 4. 8х8 голубых бетонных блоков<br> 5. 10х10 черных бетонных блоков|player.onChat("square", function () {<br>    agent.setItem(BLUE_CONCRETE, 1, 1)<br>    agent.move(UP, 1)<br>    for (let index = 0; index < 4; index++) {<br>    for (let index = 0; index < 6; index++) {<br>        agent.place(DOWN)<br>        agent.move(FORWARD, 1)<br>    }<br>        agent.move(BACK, 6)<br>        agent.move(LEFT, 1)<br>    }<br>    agent.move(DOWN, 1)<br>})|<img src = './img/screen-02.png' width=500>|


|#|Название|Альтернативные задания|Код|Результат|
|---|---|---|---|---|
|1|Линия блоков| 1. 6x6 белых бетонных блоков <br> 2. 6x4 красных бетонных блоков <br> 3. 12x8 зеленых бетонных блоков  <br> 4. 8х8 голубых бетонных блоков<br> 5. 10х10 черных бетонных блоков|player.onChat("ukr", function () {<br>    agent.move(UP, 1)<br>    agent.setItem(YELLOW_CONCRETE, 1, 1)<br>    for (let index = 0; index < 2; index++) {<br>    for (let index = 0; index < 6; index++) {<br>        agent.place(DOWN)<br>        agent.move(FORWARD, 1)<br>    }<br>        agent.move(BACK, 6)<br>        agent.move(LEFT, 1)<br>    }    agent.setItem(BLUE_CONCRETE, 1, 1)<br>    for (let index = 0; index < 2; index++) {<br>    for (let index = 0; index < 6; index++) {<br>        agent.place(DOWN)<br>        agent.move(FORWARD, 1)<br>    }<br>        agent.move(BACK, 6)<br>        agent.move(LEFT, 1)<br>    }<br>    agent.move(DOWN, 1)<br>})|<img src = './img/screen-03.png' width=500>|


# Задания
**Создайте флаги таких государств:**
Польша:    
<img src = './img/poland.png' width = 300>  
Венгрия:  
<img src = './img/hungary.png' width = 300>  
Болгария:  
<img src = './img/bulgaria.jpeg' width = 300>  
Австрия:  
<img src = './img/austria.png' width = 300>  

**Выберите флаги, которые вам больше нравятся и постройте 3 из них:**
<img src = './img/flags3.jpeg'>  
  
**Выберите флаги, которые вам больше нравятся и постройте 3 из них:**
<img src = './img/flags3v.jpeg'>  
