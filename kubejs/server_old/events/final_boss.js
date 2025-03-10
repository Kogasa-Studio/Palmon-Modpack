ItemEvents.rightClicked(event => {
    if (event.item == 'vial_of_chaos') {
        if (event.level.getDimension() == 'minecraft:the_end') {
            event.player.tell('Prepare for your death. ')
            event.server.runCommand(`/execute as ${event.player.name.getString()} run champions summon rats:neo_ratlantean 8`)
            event.player.give(Item.of('champions:champion_egg', '{Champion:{Affix:[],Tier:8},EntityTag:{Id:"rats:neo_ratlantean"},display:{Name:\'{"text":"???"}\'}}'))

            event.item.shrink(1)

        } else {
            event.getPlayer().tell('Not in The End.')

        }
    }
})