# JavaScript у FrontEnd і Minecraft
План уроку:
Давайте познайомимося ближче із тим, що нам дозволяє робити JavaScript в Minecraft. Та як це можна використати на прикладі роботи у FrontEnd.  

Повторимо запуск JavaScript-коду в Minecraft

|#|Завдання|Код|Результат|
|---|---|---|---|
|1|1. При команді чату "1" виведіть на екран слово "Hello"<br>2. При команді чату "2" виведіть на екран слово "Bye"<br>3. При команді чату "3" виведіть на екран власне ім'я "How are you?"<br>4. При команді чату "4" виведіть на екран слова "How are you?"<br>5. При команді чату "5" виведіть на екран слова "I'm ok!"|player.onChat("1", function () {<br>player.say("hello")<br>})|<img src = "img/ask.gif">|

##  Реалізація запуску JavaScript-коду у FrontEnd

1. Створимо на комп'ютері файл index.html
2. Вставимо до файлу index.html такий код:
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
3. Створимо папку js, та в ній - файл js.js і в ньому код
```js
btn1.addEventListener("click", function() { alert("Hello") })
```  

4. Запустимо файл index.html в браузері та отпримаємо реалтат.  
<img src = "img/ask01.gif">   
