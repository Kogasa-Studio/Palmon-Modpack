ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(Commands.literal('reset_difficulty')
        .requires(s => s.hasPermission(2))
        .executes(c => {
            let toRemove = []
            c.source.player.stages.getAll().forEach(element => {
                if (element.startsWith('diff_level_')) {
                    toRemove.push(element);
                }
            })
            toRemove.forEach(element => {
                c.source.player.stages.remove(element);
            })

            return 1
        })
        .then(Commands.argument('target', Arguments.PLAYER.create(event))
            .executes(c => {
                /**
                 * @type {Internal.ServerPlayer}
                 */
                let player = Arguments.PLAYER.getResult(c, 'target')
                let toRemove = []
                player.stages.getAll().forEach(element => {
                    if (element.startsWith('diff_level_')) {
                        toRemove.push(element);
                    }
                })
                toRemove.forEach(element => {
                    player.stages.remove(element);
                })
                return 1
            })
        )
    )
    
})
