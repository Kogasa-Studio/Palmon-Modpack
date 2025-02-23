ItemEvents.rightClicked('thermal:lumium_coin', event => {
    event.item.shrink(1)
    event.server.runCommand(`curios set otherworld_relics ${event.player.name.getString()} 3`)

})