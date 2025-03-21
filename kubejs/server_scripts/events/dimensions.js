ItemEvents.rightClicked('rats:chunky_cheese_token', event => {
    ratlantis(event)
})

BlockEvents.placed('rats:chunky_cheese_token', event => {
    ratlantis(event)
})

const ratlantis  = function(event){
    if (!event.player.stages.has(global.ratlantis)) {
        event.player.tell(Text.translatable('ui.kubejs.banned').gold())
        event.player.addItemCooldown(event.player.mainHandItem, 200)
        event.cancel()

    }
}

