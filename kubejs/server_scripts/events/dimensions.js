const $EntityTravelToDimensionEvent = Java.loadClass("net.minecraftforge.event.entity.EntityTravelToDimensionEvent")

NativeEvents.onEvent($EntityTravelToDimensionEvent, /** @param {Internal.EntityTravelToDimensionEvent} event  */ event => {
    /**
    * @type {Internal.ServerPlayer}
    */
    let player = event.entity
    let key = event.dimension.getPath()

    if (player.player) {
        switch (key) {
            case 'the_end':
                if (!player.stages.has(global.endStage)) {
                    event.setCanceled(true)
                    player.tell(Text.translatable('ui.kubejs.banned').darkPurple())
                    player.tell(Text.translatable('ui.kubejs.banned_dim').lightPurple())
                    player.teleportTo(player.getX(), 320, player.getZ())
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

ItemEvents.rightClicked('minecraft:coal', event => {
    console.log("LOG: Start of Foods")
    let lst = []
    Ingredient.of('*').getItemIds().forEach(element => {
        let itm = Item.of(element)
        if (itm.edible && itm.getIdLocation().getNamespace() != 'tfc' && itm.getIdLocation().getNamespace() != 'firmalife' && itm.getIdLocation().getNamespace() != 'farmersdelight') {
            lst.push(element)
            console.log(element)
        }

    })
    console.log(lst.toString())
    console.log(lst.length)
})

ItemEvents.rightClicked('minecraft:diamond', event => {
    let lst = []
    Ingredient.of('*').getItemIds().forEach(element => {
        let itm = Item.of(element)
        if (itm.edible && itm.getIdLocation().getNamespace() != 'tfc' && itm.getIdLocation().getNamespace() != 'firmalife' && itm.getIdLocation().getNamespace() != 'farmersdelight') {
            lst.push(element)
        }

    }) 
    let map = {}
    lst.forEach(element => {
        let fp = Item.of(element).getFoodProperties(event.player)
        map[element] = {
            "foodProperties" : [fp.getNutrition(), fp.getSaturationModifier()]
        }
        // console.log(fp.getNutrition(), fp.getSaturationModifier())

    })
    console.log(map)

})