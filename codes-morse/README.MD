## Азбука Морзе
Существует специальный код передачи символов. С помощью него до изобретения Интернета передавали информацию с помощью светового, а потом и электрического телеграфа.  Коды букв - приведены ниже
<img src = './img/morse_code_en.jpeg' width = 600> 
<img src = './img/morse_code_ua.jpeg' width = 600>  
<img src = './img/morse_code_ru.jpeg' width = 600>  

## Телеграфист
Напишем код, который позволит вам с помощью агента писать свое имя
При команде чата `start` - агент готовится
```js
player.onChat("start", function() {
    agent.move(UP, 1)
})
```
При команде чата `dot` - ставит точку
```js
player.onChat("dot", function () {
    agent.setItem(WHITE_CONCRETE, 1, 1)
    agent.place(DOWN)
    agent.move(FORWARD, 2)
})
```
При команде чата `dash`  - ставит тире
```js
player.onChat("dash", function() {
    agent.setItem(WHITE_CONCRETE, 1, 1)
    for(let i =0;i<3;i++){
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.move(FORWARD, 1)
})
```

При команде чата `space` - делает отступ

```js
player.onChat("space", function() {
    agent.move(FORWARD, 1)
})
```

При команде чата `finish` - завершает работу
```js
player.onChat("finish", function() {
    agent.move(DOWN, 1)
})
```

## Задания: 
1. С помощью кода и команд чата написать первую букву своего имени азбукой морзе
2. С помощью кода и команд чата написать свое имя
3. С помощью кода и команд чата написать название своего города