PlayerEvents.tick(event => {
    if (event.player.getLevel().dimension == 'minecraft:the_nether' && !event.player.stages.has(global.netherStage)) {
        event.player.tell([Text.translate("ui.kubejs.banned").gold()])
        eve
        nt.server.runCommandSilent(`execute in minecraft:overworld run tp ${event.player.name.getString()} 0 90 0`)
    }
    if (event.player.getLevel().dimension == 'minecraft:the_end' && !event.player.stages.has(global.endStage)) {
        event.player.tell([Text.translate("ui.kubejs.banned").gold()])
        event.server.runCommandSilent(`execute in minecraft:overworld run tp ${event.player.name.getString()} 0 90 0`)
    }

})