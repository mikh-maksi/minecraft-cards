# Додаємо HTML
В Minecraft NPC ми можемо додавати посилання на зовнішні сторінки.  
Перед тим, як додати таке посилання створимо сторінку, на якій розмістимо HTML-інформацію, а також опис гри.  

## Реєстрація на GitHub.com
Всі сучасні програмісти користуються git-сервісами. Це сервіс, який дозволяє зберігати ваш код, на організовувати спільну роботу. Найбільшим та найвідомішим git-сервісом є сервіс GitHub.com  
Навички роботи із git-сервісами є обов'язковою вимогою для ВСІХ сучасних програмістів.

Створимо обліковий запис на сервісі GitHub.com.  
  

1. Перейдемо на сайт <a href = "https://github.com" target = "_blank">github.com</a>
<img src = "img/github01.png">  

2. Введемо адресу електронної пошти  
<img src = "img/github02.png">  

3. Створіть пароль (обов'язково запам'ятайте його)
<img src = "img/github03.png">  

4. Придумайте та введіть ім'я користувача:  
<img src = "img/github04.png">  

5. У відповіді на питання про те, чи хочете ви отримувати інформацію про оновлення через email вкажіть n  (ні).
<img src = "img/github05.png">  

6. Пройдіть перевірку, що ви людина:  
<img src = "img/github06.png">  
<img src = "img/github07.png">  

7. Створіть акаунт
<img src = "img/github08.png">  

8. На вказану вами пошту прийде код для підтвердження, введіть його у відповідне поле 
<img src = "img/github09.png">  

9. Пропустіть персоналізацію
<img src = "img/github10.png">  

10. Створіть репозитарій
<img src = "img/github11.png">  


## Додамо елементи майбутнього сайту (із готового коду)
11. Задайте назву новому репозитарію  
<img src = "img/github12.png">  

12. Отримаємо готовий репозитарій
<img src = "img/github13.png">  

13. Створимо новий файл
<img src = "img/github14.png">  

14. Назвемо новий **index.html** та додамо заготовлений **HTML-код**  
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <div class="card">
      <img src="https://www.minecraft.net/content/dam/games/minecraft/marketplace/mediablock-buzzybees.jpg" alt="">
      <div class="text">
        <h2>Minecraft</h2>
        <p>Minecraft - моє життя!</p>
        <a href="https://www.minecraft.net/ru-ru">Перейти до гри </a>
      </div>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
<img src = "img/github15.png">  
<img src = "img/github16.png">  

15. Створимо новий файл **style.css** та внесемо в нього заготовлений код:
```css
* {
    margin: 0;
    padding: 0;
}
body {
    background-color: #3757c2;
}
.card {
  width: 28%;
  display: inline-block;
  border-radius: 10px;
  background-color: white;
  transition:0.4s;
  margin: 20px;
  border: 1px solid #222222;
}

img {
  width: 100%;
  border-radius: 10px;
}

p {
  font-size: 16px;
  color: #626262;
  margin: 10px 0px;
}

.text {
  padding: 20px;
}

a{
  display: inline-block;
  text-decoration:none;
  padding: 10px 20px;
  color: white;
  background-color: #3d3c;
  text-transform: uppercase; 
  }

  .card:hover {
  width: 30%;
  box-shadow: 0 0 10px #222222;
}
```

<img src = "img/github17.png">  
<img src = "img/github18.png">  
<img src = "img/github19.png">  

## Запустимо обробку HTML+CSS
GitHub.com має можливість відображати HTML+CSS код у вигляді сайта за спеціальним посиланням.
16. Зайдемо в налаштування облікового запису:  
<img src = "img/github20.png">  

17. Перейдемо до пункту **Pages**:  
<img src = "img/github21.png">  

18. Оберемо **main** (вітку, яку буде відображати сторінка)
<img src = "img/github22.png">  

19. Збережемо результат:  
<img src = "img/github23.png">  

20. Після збереження результату ви отримаєте поислання, за яким буде відображено створений сайт.
<img src = "img/github24.png"> 

21. Результат:  
<img src = "img/github25.png">  

## Текстовий опис
За допомогою GitHub.com можна робити зручні описи. При цьому використовується мова розмітки MarkDown.  
Для того, щоб побачити відповідну розмітку необхідно змінити файл README.MD, який має лежати в корінній 

22.  Натиснемо на іконку змін на корінній сторінці репозитарію:
<img src = "img/github26.png">  

23. Додамо опис
<img src = "img/github27.png">  

24. Для відображення нових рядків необхідно в кінці кожно рядка поставити 2 пробіла
<img src = "img/github28.png">  

25. Збережемо результат
<img src = "img/github30.png">  

26. Отримаємо результат.
<img src = "img/github31.png">  

27. Даний результат можна відображати за посиланням.
<img src = "img/github32.png">  

## Додамо інформацію до гри через посилання-кнопку в NPC  
1. Увімкнемо режим "Творець світу" 
<img src = "img/npchtml07.png">    

2. Зайдемо в NPC (натиснемо правою клавішею на NPC)  
<img src = "img/npchtml01.png">    

3. Зайдемо в "Розширені параметри"  
<img src = "img/npchtml02.png">   

4. Натиснемо кнопку "Додати URL-адресу"  
<img src = "img/npchtml03.png">    
  
5. Вставимо посилання на опис гри
<img src = "img/npchtml04.png">    
  
6. Вийдемо із даного вікна
<img src = "img/npchtml05.png">   
  
7. Закриємо налаштування NPC
<img src = "img/npchtml06.png">    
  
8. Виключимо режим "Творець світу"
<img src = "img/npchtml07.png">    
   
<img src = "img/npchtml08.png">    

9. Зайдемо в NPC (натиснемо правою клавішею)  
<img src = "img/npchtml09.png">    

10. Натиснемо на кнопку "Докладніше"  
<img src = "img/npchtml10.png">  
  
11. Побачемо сайт, на який давали посилання  
<img src = "img/npchtml11.png">    






