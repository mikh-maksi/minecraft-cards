player.onChat("sea", function() {
    blocks.fill(
        SAND,
        world(23, 3, 23),
        world(-23, 3, -23),
        FillOperation.Replace
    )
    blocks.fill(
        WATER,
        world(20, 3, 20),
        world(-20, 3, -20),
        FillOperation.Replace
    )
    blocks.fill(
        GRASS,
        world(5, 3, 5),
        world(-5, 3, -5),
        FillOperation.Replace
    )
})