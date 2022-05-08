# JavaScript у FrontEnd і Minecraft
План уроку:
Давайте познайомимося ближче із тим, що нам дозволяє робити JavaScript в Minecraft. Та як це можна використати на прикладі роботи у FrontEnd.  

Повторимо запуск JavaScript-коду в Minecraft

|#|Завдання|Код|Результат|
|---|---|---|---|
|1|1. При команді чату "1" виведіть на екран слово "Hello"<br>2. При команді чату "2" виведіть на екран слово "Bye"<br>3. При команді чату "3" виведіть на екран власне ім'я "How are you?"<br>4. При команді чату "4" виведіть на екран слова "How are you?"<br>5. При команді чату "5" виведіть на екран слова "I'm ok!"|player.onChat("1", function () {<br>player.say("hello")<br>})|<img src = "img/ask.gif">|

##  Реалізація запуску JavaScript-коду у FrontEnd

1. Для роботи із файлами на комп'ютері необхідно встановити <a href = "https://code.visualstudio.com/">Visual Studio Code</a>. 
2. Створимо на комп'ютері папку **code01**  
<img src = "img/task01.png" width = 600>  
<img src = "img/task02.png" width = 600>  

3. Відкриємо папку в **Visual Studio Code**  
<img src = "img/task03.png" width = 600>  
<img src = "img/task04.png" width = 600>  

4. Після відкриття папки **Visual Studio Code** у вбудованому редакторі створимо на комп'ютері файл **index.html**
<img src = "img/task05.png" width = 600>  

5. Вставимо до файлу **index.html** такий код:
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="btn1">1</button>
    <script src="js/js.js"></script>
</body>
  
</html>
```
<img src = "img/task06.png" width = 600>  


6. Створимо папку **js**.  
<img src = "img/task07.png" width = 600>  


7. В папці **js** - створемо новий файл **js.js**   
<img src = "img/task08.png" width = 600>  


8. До файлу **js.js** додамо відповідний код:  
```js
btn1.addEventListener("click", function() { alert("Hello") })
```  
<img src = "img/task09.png" width = 600>  

9. Відкриємо створений файл **index.html** в браузері:  
<img src = "img/task10.png" width = 600>  


10. Запустимо файл index.html в браузері та отпримаємо результат.  
<img src = "img/ask01.gif">   


|#|Завдання|Код|Результат|
|---|---|---|---|
|1|1. Створіть кнопку із текстом "1" та id="btn1", при її нажатті виведіть в сервісне вікно (команда Alert) слово "Hello"<br>2. Створіть кнопку із текстом "2" та id="btn2", при її нажатті виведіть в сервісне вікно (команда Alert) слово "Bye"<br>3. Створіть кнопку із текстом "3" та id="btn3", при її нажатті виведіть в сервісне вікно (команда Alert) власне ім'я <br>4. Створіть кнопку із текстом "4" та id="btn4", при її нажатті виведіть в сервісне вікно (команда Alert) слова "How are you?"<br>5. Створіть кнопку із текстом "5" та id="bt5", при її нажатті виведіть в сервісне вікно (команда Alert) слова "I'm ok!"|btn1.addEventListener("click", function() { alert("Hello") })|<img src = "img/ask01.gif">|

## Додаткове завдання
1. Запустіть створені файли в **GitHub Pages**.


## Функції із параметром


```js
player.onChat("mult2", function (num1) {
    player.say(num1 * 2)
})
```