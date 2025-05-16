PlayerEvents.respawned(event => {
    let player = event.player
    player.getFoodData().setFoodLevel(12)
    player.getFoodData().setSaturation(10)
    player.getFoodData().setThirst(80)
    
})