player.onChat("west", function() {
    blocks.fill(
        BLUE_CONCRETE,
        world(0, 3, 0),
        world(-5, 3, 0),
        FillOperation.Replace
    )
})
player.onChat("south", function() {
    blocks.fill(
        RED_CONCRETE,
        world(0, 3, 0),
        world(0, 3, 5),
        FillOperation.Replace
    )
})
player.onChat("clear", function() {
    blocks.fill(
        GRASS,
        world(5, 3, 5),
        world(-5, 3, -5),
        FillOperation.Replace
    )
})
player.onChat("nord", function() {
    blocks.fill(
        WHITE_CONCRETE,
        world(0, 3, 0),
        world(0, 3, -5),
        FillOperation.Replace
    )
})
player.onChat("point", function() {
    blocks.place(DIAMOND_BLOCK, world(0, 3, 0))
})
player.onChat("sunset", function() {
    gameplay.timeSet(gameplay.time(DAWN))
    agent.teleport(world(0, 4, 0), EAST)
})
player.onChat("compass", function() {
    blocks.fill(
        WHITE_CONCRETE,
        world(0, 3, 0),
        world(0, 3, -5),
        FillOperation.Replace
    )
    blocks.fill(
        RED_CONCRETE,
        world(0, 3, 0),
        world(0, 3, 5),
        FillOperation.Replace
    )
    blocks.fill(
        YELLOW_CONCRETE,
        world(0, 3, 0),
        world(5, 3, 0),
        FillOperation.Replace
    )
    blocks.fill(
        BLUE_CONCRETE,
        world(0, 3, 0),
        world(-5, 3, 0),
        FillOperation.Replace
    )
    blocks.place(DIAMOND_BLOCK, world(0, 3, 0))
})
player.onChat("ost", function() {
    blocks.fill(
        YELLOW_CONCRETE,
        world(0, 3, 0),
        world(5, 3, 0),
        FillOperation.Replace
    )
})