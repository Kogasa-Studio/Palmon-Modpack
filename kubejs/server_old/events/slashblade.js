PlayerEvents.tick(event => {
    if (!event.player.stages.has(global.slashbladeStage)) {
        if (event.player.mainHandItem.getItem().getIdLocation().getNamespace() == "slashblade") {
            dropItem(event.level, event.player, event.player.mainHandItem)
            event.player.mainHandItem = 'minecraft:air'
            event.player.addItemCooldown(event.player.mainHandItem, 200)
            event.player.tell(Text.translate("ui.kubejs.slashblade"))

        }
        else if (event.player.offHandItem.getItem().getIdLocation().getNamespace() == "slashblade") {
            dropItem(event.level, event.player, event.player.offHandItem)
            event.player.offHandItem = 'minecraft:air'
            event.player.addItemCooldown(event.player.offHandItem, 200)
            event.player.tell(Text.translate("ui.kubejs.slashblade"))

        }
        
    }
})

function dropItem(level, player, item) {
    let entity = level.createEntity("item")
    entity.x = player.x
    entity.y = player.y
    entity.z = player.z
    entity.setPickUpDelay(40)
    entity.item = item
    entity.spawn()

}