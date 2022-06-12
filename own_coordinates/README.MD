# Самостійне визначення координат
Для створення якісних структур в Майнкрафті важливо розуміти, як створити елемент за координатами.
Наприклад - букву.
Для визначення координат  візьмемо документ, зроблений в **Google.Sheets**: в якому розмічено [квадартне поле від точки (-10;-10) до точки (10;10)](https://docs.google.com/spreadsheets/d/10ZjEj7YmiklYxn4Z8mr-dD6MaxgyKdxDcLkZ7UexCDo/edit#gid=0) .
Відкрийте відповідний документ та скопійуйте його до себе на Google.Disk
<img src = "img/stylesheet01.png">  
<img src = "img/stylesheet02.png">  
<img src = "img/stylesheet03.png">  
<img src = "img/stylesheet04.png">  

В результаті даних дій ви отримали документ, в якому можете проектувати все елементи, які вам довподоби.  
Наприклад - напишемо одну з літер (наприклад, буква **М**). За допомогою інструмента **"Заливка"** заповнемо деякі клітини (щоб результат був схожий на букву M).
<img src = "img/stylesheet05.png">  

 Оберемо відповідні координати (почнемо з "лівою палички")
<img src = "img/stylesheet06.png">  
Запрограмуємо:  
<img src = "img/stylesheet08.png">  
Та запустимо в Minecraft
<img src = "img/stylesheet07.png">  
Візьмемо інші елементи букви:   
<img src = "img/stylesheet09.png">  
<img src = "img/stylesheet10.png">  
<img src = "img/stylesheet11.png">
І ще таку  
<img src = "img/stylesheet12.png">  
<img src = "img/stylesheet13.png">  
<img src = "img/stylesheet14.png">  

## Завдання
1. Напишіть за допомогою світу Майнкрафт та таблиці першу літеру вашого імені.
2. Напищуть слово з деількох букв за створіть шар, який домопогпє.


## FrontEnd
Зробимо FrontEnd-код таким, щоб максимально повторював функціональність розміщення блоків в Майнкрафті.  
Візьмемо код із **GitHub** за посиланням: https://github.com/mikh-maksi/minecraft-cards/blob/main/own_coordinates/fe/fe.zip 
(скачаємо та розархівуємо).

Скачаємо відповідний файл:  
<img src = "img/js01.png">  
Розархівуємо:  
<img src = "img/js02.png">  
Відкриємо файл index.html, щоб побачити результат:  
<img src = "img/js03.png">  
Результат відкриється в браузері:  
<img src = "img/js04.png">  
  
Для того, щоб змінити щось в даному наборі файлів відкриємо файл **js.js**, що знаходиться в каталозі **js**  
<img src = "img/js05.png">    

В нас є файл в якому указани команди, що аналогічні розміщенню блоків в Minecraft:  
<img src = "img/js06.png">

### Для одиничних блоків:
<img src = "img/stylesheet10.png"> 

Використаємо функцію **element**, аналогічну командам (тільки без значення **y** - 4):  
<img src = "img/js07.png"> 

### Для заповнення областей 

<img src = "img/js08.png">   

<img src = "img/stylesheet08.png" width = "400">  

<img src = "img/js10.png">  


<img src = "img/js09.png">   

<img src = "img/stylesheet14.png" width = "400"> 

<img src = "img/js11.png">  


**Творчі завдання:**
1. Запрограмуйте в Minecraft всі букви вашего імені.
2. Реалізуйте аналогічний функціонал в FrontEnd (для кожної новой букви - стоворіть нову папку із ісходніками)
