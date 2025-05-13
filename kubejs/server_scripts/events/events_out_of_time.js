// priority: 60

const $ClickEvent = Java.loadClass('net.minecraft.network.chat.ClickEvent');
const $ClickEventAction = Java.loadClass('net.minecraft.network.chat.ClickEvent$Action');

global.current_buffs = new Set()
global.all_buffs = {}

/**
 * @param {string} id
 * @param {int} cost
 * @param {string[]} [prerequisites]
 * @param {boolean} lineBreak
 * @param {function} initEffect
 * @param {function} recipeEffect
 */
function registerBuff(id, cost, prerequisites, lineBreak, initEffect, recipeEffect) {
    global.all_buffs[id] = {
        cost: cost,
        unlocked: false,
        prerequisites: prerequisites,
        lineBreak: lineBreak,
        initEffect: initEffect,
        recipeEffect: recipeEffect
    }
}

// 注册
// 矿工
registerBuff("miner_1", 1, ["init"], false, {}, {})
registerBuff("miner_2", 2, ["miner_1"], false, {}, {})
registerBuff("miner_3", 5, ["miner_2", "true_ending"], false, {}, {})
registerBuff("miner_4", 2, ["miner_3", "master_ending"], true, {}, {})

// 战斗
registerBuff("fighter_1", 1, ["init"], true, {}, {})

// 体质
registerBuff("speed_1", 1, ["init"], true, {}, {})

// 工业
registerBuff("industrial_1", 1, ["init"], true, {}, {})

// 特殊
registerBuff("special_1", 1, ["init"], true, {}, {})

// 锚
registerBuff("init", 0, [], false, {}, {})
registerBuff("true_ending", 0, ["init"], false, {}, {})
registerBuff("master_ending", 1, ["true_ending"], false, {}, {})

// 展示
global.renderBuffs = function (player) {
    // 前缀
    let line = Text.of('========================\n========================')
        .append('\n')
        .append(Text.translatable('kubejs.eot.list_prefix')
            .color(Color.AQUA)
            .hover(Text.translatable('kubejs.eot.description'))
        )
        .append('\n');

    // 主体
    for (let id in global.all_buffs) {
        let buff = global.all_buffs[id];
        let unmet = buff.prerequisites.filter(req => !global.all_buffs[req]?.unlocked);

        let prereqLine = buff.prerequisites.length > 0 ?
            Text.of('\n').append(Text.translatable('kubejs.eot.prerequisites').color(Color.AQUA)) :
            Text.empty()

        buff.prerequisites.forEach((reqId, idx) => {
            let reqBuff = global.all_buffs[reqId]
            let reqColor = reqBuff && reqBuff.unlocked ? Color.GREEN : Color.GRAY

            prereqLine.append(Text.translatable(`kubejs.eot.${reqId}_name`).color(reqColor))
                .append(' ')

        })

        let color = global.current_buffs.has(id) ?
            Color.LIGHT_PURPLE
            : (buff.unlocked ?
                Color.GREEN
                : (unmet.length ?
                    Color.GRAY
                    : Color.YELLOW)
            )

        let activatedText = (global.current_buffs.has(id) ?
            Text.translatable('kubejs.eot.activated')
            : (buff.unlocked ?
                Text.translatable('kubejs.eot.unlocked')
                : Text.translatable('kubejs.eot.locked')
            )
        ).color(color)

        line = line
            .append('   ')
            .append(Text.translatable(`kubejs.eot.${id}_name`)
                .color(color)
                .click(Text.clickEventOf(
                    new $ClickEvent(
                        $ClickEventAction.SUGGEST_COMMAND,
                        `/eot_activate ${id}`
                    )
                ))
                .hover(activatedText
                    .append('\n')
                    .append(Text.translatable('kubejs.eot.cost')).append(Text.of(buff.cost.toString()).color(Color.AQUA))
                    .append('\n')
                    .append(Text.of(id).color(Color.DARK_GRAY))
                    .append('\n')
                    .append(Text.translatable(`kubejs.eot.${id}_desc`).color(Color.WHITE))
                    .append(prereqLine)
                )
            )

        if (buff.lineBreak) {
            line = line.append('\n')

        } else {
            line = line.append(' ')

        }

    }

    // 后缀
    line = line.append('\n========================\n========================')
    player.tell(line);
}


ItemEvents.rightClicked('kubejs:anchor_shard', event => {
    global.renderBuffs(event.player)
    event.player.addItemCooldown('kubejs:anchor_shard', 40)

})

// 指令
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(Commands.literal('eot_activate')
        .then(Commands.argument('target', Arguments.STRING.create(event))
            .executes(c => global.eotActivate(c, Commands, Arguments))
        )
    )

    event.register(Commands.literal('eot_deactivate')
        .then(Commands.argument('target', Arguments.STRING.create(event))
            .executes(c => global.eotDeactive(c, Commands, Arguments))
        )
    )

    event.register(Commands.literal('eot_show')
        .executes(c => {
            global.renderBuffs(c.source.player)

            return 1
        })
    )

})

global.eotActivate = function (c, Commands, Arguments) {
    let target = Arguments.STRING.getResult(c, 'target')
    let buff = global.all_buffs[target]
    /**
     * @type {Internal.ServerPlayer}
     */
    let player = c.source.player

    if (!buff) {
        player.tell(Text.translatable('kubejs.eot.not_found'))
        return 0
    }

    let unmet = buff.prerequisites
        .filter(req => !global.all_buffs[req]?.unlocked)


    if (unmet.length > 0) {
        let unmetTexts = unmet.map(reqId =>
            Text.translatable(`kubejs.eot.${reqId}_name`).color(Color.GRAY)
        )

        let unmetTextsFinal = Text.empty()
        unmetTexts.forEach(txt => {
            unmetTextsFinal.append(txt).append(' ')
        })

        player.tell(
            Text.translatable('kubejs.eot.requirements_not_met')
                .color(Color.RED)
                .append(unmetTextsFinal)
        )
        return 0
    }

    if (buff.unlocked) {
        player.tell(Text.translatable('kubejs.eot.already_activated').color(Color.AQUA))
        return 0
    }

    let stack = player.mainHandItem
    if (stack.id == 'kubejs:anchor_shard' && stack.count >= buff.cost) {
        stack.shrink(buff.cost)
        buff.unlocked = true
        let arr = global.jsonData.getAsJsonArray("learned_buffs")
        let exist = false

        for (let i of arr.asList()) {
            if (i == target) {
                exist = true
                break
            }
        }

        if (exist) {
            console.log("[Warning] Already Added, That Shouldn't Happen")

        } else {
            console.log("Not Exist, adding")
            arr["add(java.lang.String)"](target)
            console.log("added")
            savePackData(global.jsonData)

        }

        player.tell(Text.translatable('kubejs.eot.success').color(Color.AQUA))
        global.renderBuffs(player)
        return 1
    }

    player.tell(Text.translatable('kubejs.eot.not_enough_shard').color(Color.RED))
    return 0
}

global.eotDeactive = function (c, Commands, Arguments) {
    let target_buff = Arguments.STRING.getResult(c, 'target')
    let buff = global.all_buffs[target_buff]
    /**
     * @type {Internal.ServerPlayer}
     */
    let player = c.source.player

    if (buff == null) {
        player.tell(Text.translatable('kubejs.eot.not_found'))
        return 0
    }

    buff.unlocked = false
    global.renderBuffs(player)

    return 1
}

// 应用效果
PlayerEvents.advancement('dustandash:entry', event => {
    /**
     * @type {Internal.ServerPlayer}
     */
    let player = event.player
    player.tell("第一次登陆提示")
    player.give(Item.of('kubejs:anchor_shard'))

})
