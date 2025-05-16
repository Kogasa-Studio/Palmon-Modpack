global.deliveryCoordinateModBlacklist = new Set(['sophisticatedstorage', 'sophisticatedbackpacks', 'ae2', 'ae2things'])

ItemEvents.rightClicked('kubejs:delivery_coordinate_gamma', event => {
    /**
     * @type {Internal.ServerPlayer}
     */
    let player = event.player
    player.cooldowns.addCooldown('kubejs:delivery_coordinate_gamma', 2000)

    if (player.mainHandItem == 'kubejs:delivery_coordinate_gamma' && player.offHandItem &&
        !global.deliveryCoordinateModBlacklist.has(String(player.offHandItem.getItem().getIdLocation().getNamespace()))) {

        global.jsonData.add("delivery_coordinate_gamma", player.offHandItem.toJson())

        savePackData(global.jsonData)

    } else {
        player.tell(Text.translatable('kubejs.eot.special_2_not_allow').red())
        
    }

})

ItemEvents.rightClicked('kubejs:delivery_coordinate_epsilon', event => {
    /**
     * @type {Internal.ServerPlayer}
     */
    let player = event.player
    player.cooldowns.addCooldown('kubejs:delivery_coordinate_epsilon', 2000)

    if (player.mainHandItem == 'kubejs:delivery_coordinate_epsilon' && player.offHandItem &&
        !global.deliveryCoordinateModBlacklist.has(String(player.offHandItem.getItem().getIdLocation().getNamespace()))) {

        global.jsonData.add("delivery_coordinate_epsilon", player.offHandItem.toJson())

        savePackData(global.jsonData)

    } else {
        player.tell(Text.translatable('kubejs.eot.special_2_not_allow').red())
        
    }

})

ItemEvents.rightClicked('kubejs:delivery_coordinate_ultimate', event => {
    /**
     * @type {Internal.ServerPlayer}
     */
    let player = event.player
    player.cooldowns.addCooldown('kubejs:delivery_coordinate_ultimate', 2000)

    if (player.mainHandItem == 'kubejs:delivery_coordinate_ultimate' && player.offHandItem &&
        !global.deliveryCoordinateModBlacklist.has(String(player.offHandItem.getItem().getIdLocation().getNamespace()))) {

        global.jsonData.add("delivery_coordinate_ultimate", player.offHandItem.toJson())

        savePackData(global.jsonData)

    } else {
        player.tell(Text.translatable('kubejs.eot.special_2_not_allow').red())

    }

})