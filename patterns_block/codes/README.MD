# Коды
```js
player.onItemInteracted(IRON_SHOVEL, function () {
    blocks.fill(
    WHITE_CONCRETE,
    pos(0, -2, 0),
    pos(10, -1, 10),
    FillOperation.Replace
    )
})


```


```js
player.onItemInteracted(IRON_SHOVEL, function () {
    blocks.fill(
    WHITE_CONCRETE,
    pos(0, -2, 0),
    pos(2, -1, 2),
    FillOperation.Replace
    )
    agent.teleport(pos(0, 0, 0), EAST)
    agent.setItem(RED_CONCRETE, 1, 1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 2; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
            agent.place(DOWN)
        }
        agent.turn(RIGHT_TURN)
    }
})


```

```js
player.onItemInteracted(IRON_SHOVEL, function () {
    blocks.fill(
    WHITE_CONCRETE,
    pos(0, -2, 0),
    pos(4, -1, 4),
    FillOperation.Replace
    )
    agent.teleport(pos(1, 0, 1), EAST)
    agent.setItem(RED_CONCRETE, 1, 1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 2; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
            agent.place(DOWN)
        }
        agent.turn(RIGHT_TURN)
    }
})

```