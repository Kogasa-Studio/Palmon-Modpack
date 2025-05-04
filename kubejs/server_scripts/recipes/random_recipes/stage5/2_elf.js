/**
 * @param {Internal.RecipesEventJS} event
 */
function s5ELF(event) {

    event.shapeless('kubejs:alfheim_iridescent', ['3x mythicbotany:raw_elementium', 'kubejs:iridescent', 'botania:bifrost_perm']).id('kubejs:alfheim_iridescent_s5')

    event.shaped('mythicbotany:central_rune_holder', [
        'ABA',
        'BCB'
    ],
        {
            A: 'kubejs:collapse_prediction',
            B: 'kubejs:end_steel',
            C: 'mythicbotany:rune_holder'
        }).id('kubejs:central_rune_holder_s5')

    event.shaped('mythicbotany:rune_holder', [
        'ABA',
        'BCB'
    ],
        {
            A: 'kubejs:collapse_prediction',
            B: 'kubejs:end_steel',
            C: 'jaopca:storage_blocks.mana'
        }).id('kubejs:rune_holder_s5')

    event.custom({
        "type": "palmon:processing",
        "category": "misc",
        "focus_stat": "SPECIAL_DEFENCE",
        "min_level": 80,
        "required_type": "fairy",
        "base_hp": 0,
        "base_atk": 0,
        "base_def": 0,
        "base_spa": 78,
        "base_spd": 78,
        "base_spe": 38,
        "area_blocks": [
            {
                "item": 'botania:glimmering_dreamwood'
            },
            {
                "item": 'botania:elementium_block'
            }
        ],
        "block_count": 4,
        "input_items": [
            {
                "item": 'mythicbotany:kvasir_blood',
                "count": 1
            },
            {
                "item": 'mythicbotany:asgard_rune',
                "count": 2
            },
            {
                "item": 'mythicbotany:vanaheim_rune',
                "count": 2
            },
            {
                "item": 'mythicbotany:midgard_rune',
                "count": 2
            },
            {
                "item": 'mythicbotany:joetunheim_rune',
                "count": 2
            },
            {
                "item": 'mythicbotany:muspelheim_rune',
                "count": 1
            },
            {
                "item": 'mythicbotany:niflheim_rune',
                "count": 1
            },
            {
                "item": 'mythicbotany:nidavellir_rune',
                "count": 1
            }
        ],
        "input_power": 40800000,
        "input_fluid": {
            "fluid": "forestry:honey",
            "amount": 8000
        },
        "tick": 9600,
        "result_items": [
            {
                "item": 'mythicbotany:kvasir_mead',
                "count": 1
            },            
            {
                "item": 'mythicbotany:kvasir_blood',
                "count": 1
            },
        ]
    }).id('kubejs:kvasir_mead_s5')

}