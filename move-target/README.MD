# Пересування мішені
## Створимо установку з фейерверків!
```js
player.onChat("target", function () {
    agent.teleport(world(20, 5, -10), WEST)
    agent.setItem(DISPENSER, 1, 1)
    agent.setItem(PLANKS_OAK, 1, 2)
    agent.setItem(DARK_OAK_BUTTON, 1, 3)
    agent.setSlot(1)
    agent.place(DOWN)
    agent.move(BACK, 1)
    agent.setSlot(2)
    agent.place(DOWN)
    agent.move(BACK, 1)
    agent.move(DOWN, 1)
    agent.setSlot(3)
    agent.place(FORWARD)
})
```

<img src = "img/move-target01.png">

## Завантажимо фейерверки
Для цього зайдемо до інвентаря (клавіша **E**). Знайдемо фейерверки. Та переведимо фейерверки до ячійок гравця.
<img src = "img/move-target02.png">
Задйемо до вже створеного росподілювача. Для цього - клікнемо на росподілювач правою клавішею миші.

<img src = "img/move-target03.png">

Перенесемо фейерверки з ячійок гравця в якійки розподілювача.
<img src = "img/move-target05.png">

Візьміть в інструментах лук зі стрілами.
<img src = "img/move-target06.png">  

<img src = "img/move-target07.png">  

Відійдіть на значну дистанцію та влучте в існуючу кнопку.  
<img src = "img/move-target08.gif">  




## Мішень, що рухається
Запустимо пересування створеної мішені
```js
player.onChat("tprt", function () {
    for (let index = 0; index < 10; index++) {
        for (let i = 0; i <= 4; i++) {
            blocks.clone(
            world(19, 4, i - 10),
            world(22, 4, i - 10),
            world(19, 4, i - 9),
            CloneMask.Replace,
            CloneMode.Move
            )
            loops.pause(1000)
        }
        for (let j = 0; j <= 4; j++) {
            i = 5 - j
            blocks.clone(
            world(19, 4, i - 10),
            world(22, 4, i - 10),
            world(19, 4, i - 11),
            CloneMask.Replace,
            CloneMode.Move
            )
            loops.pause(1000)
        }
    }
})
```
Для зміни швикості: змініть значення команди **loops.pause(1000)**

<img src = "img/move-target09.gif">

## Творче завдання
Створіть 3-4 мішені, що рухаються в різних місцях карти. Потренуйтеся влучати в такі мішені на швидкість.

 

