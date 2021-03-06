<img src = "img/p01.png">  

<img src = "img/p02.png">   
   -
<img src = "img/p03.gif">   
   -
<img src = "img/p04.gif">   

## Роза ветров. Основа

|Роза ветров|
|---|
|Зробимо 4 діагоналі:<br><img src = "img/mayak_rose_01.png" width = 300><br><img src = "img/mayak_rose_02.png" width = 300><br><img src = "img/mayak_rose_03.png" width = 300><br><img src = "img/mayak_rose_04.png" width = 300><br>А також 4 лінії, що з'єднуються під прямим кутом:<br> <img src = "img/mayak_rose_05.png" width = 300><br><img src = "img/mayak_rose_06.png" width = 300><br><img src = "img/mayak_rose_07.png" width = 300><br><img src = "img/mayak_08.png" width = 300><br>|
  
В результаті - отримаємо такий елемент в якості рози вітрів:  
<img src = "img/rose_base_01.png" width = 500>

## Роза ветров. Цикл
Для того, щоб дану форму мала не лише лінія висотою в 1 блок, а ціла стіна додамо змінні та ціикли до нашого коду.
Здуюлюємо попередній код. Замінемо повідомлення чату, при якому код буде виконуватися (на **rose-up**). А також додамо елементи, що дозволять нам повторювати відповідний код по елементам, при цьому кожен наступний крок буде піднімати лінію на 1 блок.  
Розберемо основні рішення такої можливості:  
<img src = "img/mayak_rose_cycle_describe.png" width = 500>  

**1** - Зробимо можливість змінювати матеріал для побудови.
**2** - Повторимо стільки разів, яку висоту хочемо отримати.
**3, 6** - додамо можливість будувати не тільки починаючи від висоти 0 , але й від будь-якої висоти.
**4, 5** - додамо визначні змінні до вже створених елементів (**material** - в позицію, де визначається тим блоків, **n** - де визначається y-координата),


В результаті - отмаємо код, що будує стіну, яка за формою відповідає розі вітрів:
<img src = "img/mayak_rose_cycle_01.png">  
<img src = "img/mayak_rose_cycle_02.png">  
<img src = "img/mayak_rose_cycle_03.png">  
<img src = "img/mayak_rose_cycle_04.png">  
<img src = "img/mayak_rose_cycle_05.png">  
<img src = "img/mayak_rose_cycle_06.png">  
<img src = "img/mayak_rose_cycle_07.png">  
<img src = "img/mayak_rose_cycle_08.png">  
  
Отримаємо результат:  
<img src = "img/mayak_rose_cycle_result.gif">

## Очищення поля
Дуже часто необхідно очистити поле, на якому вже побудовано елемент. Наприклад, ви хочете змінити висоту, або матеріал для будівництва. Для цього зручно використовувати розміщення **блоків повітря** на тому місці, яке вже займають блоки побудовної конструкції.

<img src = "img/clear_01.png">  
<img src = "img/clear_02.gif"> 

## Творчі завдання:
1. Намалюйте за допомогою блоків першу букву вашого імені.
2. Зробіть стіну заввишки 15 блоків яка за формою відповідає першій літері вашго імені.
3. Створіть "приюирач" - набор команд, які витирають створену ваму стіну, що відповідає формі першої літери вашого імені.
4. В центр створеної на занятті розви вітрів розмістіть компас, що його ви створили на попередньому занятті.
<img src = "img/compass01.png" width = "400">  

5. Побудуйте "Розу вітрів" з пісчаніка. Проте висоту задайте - 10.  
6. Збудуйте аналогічну "Розу вітрів", проте розмір діагональних та прямих елементів зробіть **3** (в той час як в прикладі такий розмір - **4**). Матеріал задайте самостійно.
Наприклад:  
<img src = "img/rose_base.png" width = 500>
Тепер, запрограмуємо створення відповідної літери:




