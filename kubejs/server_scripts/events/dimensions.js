const $EntityTravelToDimensionEvent = Java.loadClass("net.minecraftforge.event.entity.EntityTravelToDimensionEvent")

NativeEvents.onEvent($EntityTravelToDimensionEvent, /** @param {Internal.EntityTravelToDimensionEvent} event  */ event => {
    /**
    * @type {Internal.ServerPlayer}
    */
    let player = event.entity
    let key = event.dimension.getPath()

    if (player.player) {
        player.tell(key)
        switch (key) {
            case 'the_end':
                if (!player.stages.has(global.endStage)) {
                    event.setCanceled(true)
                    player.tell(Text.translatable('ui.kubejs.banned').lightPurple())
                    player.tell(Text.translatable('ui.kubejs.ui.kubejs.banned_dim').lightPurple())
                    
                }
                break

        }

    }

})


ItemEvents.rightClicked('rats:chunky_cheese_token', event => {
    ratlantis(event)
})

BlockEvents.placed('rats:chunky_cheese_token', event => {
    ratlantis(event)
})

const ratlantis = function (event) {
    if (!event.player.stages.has(global.ratlantis)) {
        event.player.tell(Text.translatable('ui.kubejs.banned').gold())
        event.player.tell(Text.translatable('ui.kubejs.ui.kubejs.banned_dim').gold())
        event.player.addItemCooldown(event.player.mainHandItem, 200)
        event.cancel()

    }
}

