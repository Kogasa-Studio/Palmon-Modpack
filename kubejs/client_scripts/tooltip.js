const $Minecraft = Java.loadClass("net.minecraft.client.Minecraft")

let curiosList = [
    'kubejs:present_soul',
    'kubejs:true_soul_of_light',
    'kubejs:true_pure_darkness',
    'kubejs:gungnir',
    'kubejs:laevatain',
    'kubejs:compact_pal_factory',
    'kubejs:first_aid_kit',
    'kubejs:sages_stone',
    'kubejs:blade_of_the_huntress',
    'kubejs:glase_soda',
    'kubejs:white_mask',
    'kubejs:epiphany_pendant',
    'kubejs:divergence_meter',

    'kubejs:deity_from_the_outside',
    'kubejs:true_three_goddess',
    'kubejs:old_george_nutritional_puree',
    'kubejs:miniature_galaxy',
    'kubejs:the_necklace_of_krosa',
    'kubejs:sun',
    'kubejs:photo_of_niko',
    'kubejs:godricks_great_rune'

]

let modBlackList = new Set(['minecraft', 'tconstruct', 'cataclysm', 'tconstruct', 'malum', 'rats'])

ItemEvents.tooltip(event => {
    /**
     * @type {Internal.ClientPlayerKJS}
     */
    let player = $Minecraft.getInstance().player
    event.add('confluence:brain_of_confusion', [Text.translate("ui.kubejs.banned").gold()])

    curiosList.forEach(element => {
        event.addAdvanced(element, (item, advanced, text) => {
            text.add(1, Text.translate("ui.kubejs." + element.split(':')[1]).aqua())
            text.add(2, Text.translate("ui.kubejs.no_dulp_curio").gold())
            text.add(3, Text.empty())

        })

    })

    event.addAdvanced('kubejs:compact_pal_factory', (item, advanced, text) => {
        text.add(4, Text.translate("ui.kubejs.compact_pal_factory_2").gold())
        text.add(5, Text.translate("ui.kubejs.compact_pal_factory_3").gold())

    })

    event.addAdvanced('kubejs:sages_stone', (item, advanced, text) => {
        text.add(4, Text.translate("ui.kubejs.sages_stone_2").gold())
        text.add(5, Text.translate("ui.kubejs.wear_to_update").gold())

        if (item.nbt && item.nbt.contains("player_armor")) {
            let armor = item.nbt.getDouble("player_armor")

            text.add(6, Text.translate('curios.modifiers.otherworld_relics').gold())
            text.add(7, Text.literal(formatAddition(armor * 32)).append(' ').append(Text.translatable('attribute.name.generic.attack_damage')).blue())

        }

    })

    event.addAdvanced('kubejs:glase_soda', (item, advanced, text) => {
        text.add(4, Text.translate("ui.kubejs.glase_soda_2").gold())
    })

    event.addAdvanced('kubejs:true_three_goddess', (item, advanced, text) => {
        text.add(4, Text.translate("ui.kubejs.true_three_goddess_2").gold())
        text.add(5, Text.translate("ui.kubejs.wear_to_update").gold())

        if (item.nbt && item.nbt.contains("player_speed")) {
            let speed = item.nbt.getDouble("player_speed")

            text.add(6, Text.translate('curios.modifiers.otherworld_relics').gold())
            text.add(7, Text.literal(formatPercentage(speed * 2)).append(' ').append(Text.translatable('attribute.name.generic.attack_damage')).blue())
            text.add(8, Text.literal(formatPercentage(speed * 2)).append(' ').append(Text.translatable('attribute.name.generic.attack_speed')).blue())

        }

    })

    event.addAdvanced('kubejs:old_george_nutritional_puree', (item, advanced, text) => {
        text.add(4, Text.translate("ui.kubejs.old_george_nutritional_puree_2").gold())
        text.add(5, Text.translate("ui.kubejs.wear_to_update").gold())

        if (item.nbt && item.nbt.contains("player_health")) {
            let health = item.nbt.getDouble("player_health")

            text.add(6, Text.translate('curios.modifiers.otherworld_relics').gold())
            text.add(7, Text.literal(formatPercentage(health * 0.035)).append(' ').append(Text.translatable('attribute.name.generic.attack_damage')).blue())

        }

    })

    event.addAdvanced('kubejs:miniature_galaxy', (item, advanced, text) => {
        text.add(4, Text.translate("ui.kubejs.miniature_galaxy_2").gold())
        text.add(5, Text.translate("ui.kubejs.wear_to_update").gold())

        if (item.nbt && item.nbt.contains("player_attack_speed")) {
            let attackSpeed = item.nbt.getDouble("player_attack_speed")

            text.add(6, Text.translate('curios.modifiers.otherworld_relics').gold())
            text.add(7, Text.literal(formatPercentage(attackSpeed * 3.25)).append(' ').append(Text.translatable('obscure_api.criticalDamage')).blue())

        }

    })

    event.addAdvanced('kubejs:the_necklace_of_krosa', (item, advanced, text) => {
        text.add(4, Text.translate("ui.kubejs.the_necklace_of_krosa_2").gold())

    })

    event.addAdvanced('kubejs:godricks_great_rune', (item, advanced, text) => {
        text.add(4, Text.translate("ui.kubejs.godricks_great_rune_2").gold())

    })

    event.add('thermal:lumium_coin', Text.translatable('ui.kubejs.lumium_coin').gold())

    event.addAdvanced(Ingredient.all, (item, advanced, text) => {
        if (event.alt && item.nbt) {
            text.add(Text.of('NBT: ').append(Text.prettyPrintNbt(item.nbt)))
        }
    })

})

function formatPercentage(num) {
    return (num >= 0 ? "+" : "") + (num * 100).toFixed(2) + "%";
}

function formatAddition(num) {
    return (num >= 0 ? "+" : "") + (num).toFixed(2);
}