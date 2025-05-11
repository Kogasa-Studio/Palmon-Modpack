const $ClickEvent = Java.loadClass('net.minecraft.network.chat.ClickEvent');
const $ClickEventAction = Java.loadClass('net.minecraft.network.chat.ClickEvent$Action');

global.AllBuffs = {}

/**
 * @param {string} id
 * @param {int} cost
 */
function registerBuff(id, cost) {
    global.AllBuffs[id] = {
        cost: cost,
        active: false
    }
}

// 注册
registerBuff('init', 0)
registerBuff('miner_1', 1)

function renderBuffs(player) {
    let line = Text.of('========================')
        .append('\n')
        .append(Text.translatable('kubejs.eot.list_prefix'))
        .append('\n')

    for (let id in global.AllBuffs) {
        let buff = global.AllBuffs[id]
        let color = buff.active ? Color.GREEN : Color.GRAY

        let activatedText = buff.active ? Text.translatable('kubejs.eot.activated') : Text.translatable('kubejs.eot.not_activated')

        activatedText.color(color)

        line = line
            .append('   ')
            .append(
                Text
                    .translatable(`kubejs.eot.${id}_name`)
                    .color(color)
                    .click(Text.clickEventOf(
                        new $ClickEvent(
                            $ClickEventAction.SUGGEST_COMMAND,
                            `/eot_activate ${id}`
                        )
                    ))
                    .hover(activatedText
                        .append('\n')
                        .append(Text.translatable('kubejs.eot.cost'))
                        .append(buff.cost.toString())
                        .append('\n')
                        .append(Text.translatable(`kubejs.eot.${id}_desc`).color(Color.WHITE))

                    )
            )
            .append('\n')
    }

    line.append('========================')

    player.tell(line)
}

ItemEvents.rightClicked('kubejs:anchor_shard', event => {
    renderBuffs(event.player)
    event.player.addItemCooldown('kubejs:anchor_shard', 40)

})

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(Commands.literal('eot_activate')
        .then(Commands.argument('target', Arguments.STRING.create(event))
            .executes(c => {
                let target_buff = Arguments.STRING.getResult(c, 'target')
                let buff = global.AllBuffs[target_buff]
                /**
                 * @type {Internal.ServerPlayer}
                 */
                let player = c.source.player

                if (buff == null) {
                    player.tell(Text.translatable('kubejs.eot.not_found'))
                    return 0
                }

                if (buff.active) {
                    player.tell(Text.translatable('kubejs.eot.already_activated').color(Color.AQUA))
                    return 0
                }

                let stack = player.mainHandItem

                if (stack == 'kubejs:anchor_shard' && stack.count >= buff.cost) {
                    stack.shrink(buff.cost)
                    player.tell(Text.translatable('kubejs.eot.success').color(Color.AQUA))
                    buff.active = true

                    renderBuffs(player)
                    return 1

                }
                player.tell(Text.translatable('kubejs.eot.not_enough_shard').color(Color.RED))

                return 0
            })
        )
    )


    event.register(Commands.literal('eot_deactivate')
        .then(Commands.argument('target', Arguments.STRING.create(event))
            .executes(c => {
                let target_buff = Arguments.STRING.getResult(c, 'target')
                let buff = global.AllBuffs[target_buff]
                /**
                 * @type {Internal.ServerPlayer}
                 */
                let player = c.source.player

                if (buff == null) {
                    player.tell(Text.translatable('kubejs.eot.not_found'))
                    return 0
                }

                buff.active = false
                renderBuffs(player)

                return 1
            })
        )
    )

})
