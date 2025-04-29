let ddFlag = false
ItemEvents.rightClicked('deeperdarker:heart_of_the_deep', event => {
    /**
    * @type {Internal.ServerPlayer}
    */
    const player = event.player
    if (ddFlag && player.isShiftKeyDown() && player.offHandItem.getItem().getId() == 'deeperdarker:reinforced_echo_shard') {
        event.server.runCommandSilent(`execute in deeperdarker:otherside run tp ${player.name.getString()} ${player.getX()} 60 ${player.getZ()}`)
        player.tell(Text.literal('§kNow You See Me.'))
        event.player.addItemCooldown(event.item, 1200)
        event.player.addItemCooldown('deeperdarker:reinforced_echo_shard', 1200)

    }

})

/**
 * @param {Internal.RecipesEventJS} event
 */
function s5DD(event) {
    ddFlag = true

    event.shaped('deeperdarker:reinforced_echo_shard', [
        'ABA',
        'BCB',
        'ABA'
    ],
        {
            A: 'minecraft:echo_shard',
            B: 'kubejs:collapse_prediction',
            C: 'deeperdarker:heart_of_the_deep'
        }).id('kubejs:reinforced_echo_shard_s5')

    event.custom({
        "type": "palmon:processing",
        "category": "misc",
        "focus_stat": "DEFENCE",
        "min_level": 70,
        "required_type": null,
        "base_hp": 0,
        "base_atk": 0,
        "base_def": 0,
        "base_spa": 0,
        "base_spd": 0,
        "base_spe": 0,
        "area_blocks": [
            {
                "item": 'deeperdarker:gloomy_geyser'
            },
            {
                "item": 'integratedterminals:menril_glass'
            },
        ],
        "block_count": 4,
        "input_items": [
            {
                "item": 'deeperdarker:sculk_tendrils',
                "count": 4
            },
            {
                "item": 'deeperdarker:bloom_berries',
                "count": 4
            },
            {
                "item": 'deeperdarker:gloomslate',
                "count": 2
            },
            {
                "item": 'deeperdarker:heart_of_the_deep',
                "count": 1
            }
        ],
        "input_power": 0,
        "input_fluid": null,
        "tick": 2400,
        "result_items": [
            {
                "item": 'kubejs:otherside_mixture',
                "count": 2
            }
        ]
    }).id('kubejs:otherside_mixture_s5')


    event.custom({
        "type": "palmon:processing",
        "category": "misc",
        "focus_stat": "SPECIAL_DEFENCE",
        "min_level": 80,
        "required_type": null,
        "base_hp": 0,
        "base_atk": 0,
        "base_def": 0,
        "base_spa": 0,
        "base_spd": 0,
        "base_spe": 0,
        "area_blocks": [
            {
                "item": 'deeperdarker:gloomy_geyser'
            },
            {
                "item": 'integratedterminals:menril_glass'
            },
        ],
        "block_count": 4,
        "input_items": [
            {
                "item": 'deeperdarker:glowing_roots',
                "count": 8
            },
            {
                "item": 'deeperdarker:crystallized_amber',
                "count": 4
            },
            {
                "item": 'deeperdarker:soundproof_glass',
                "count": 2
            },
            {
                "item": 'kubejs:otherside_mixture',
                "count": 2
            },
            {
                "item": 'deeperdarker:resonarium_plate',
                "count": 1
            }
        ],
        "input_power": 0,
        "input_fluid": null,
        "tick": 3600,
        "result_items": [
            {
                "item": 'kubejs:light_of_inlixaland',
                "count": 1
            }
        ]
    }).id('kubejs:light_of_inlixaland_s5')

}