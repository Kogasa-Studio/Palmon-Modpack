/**
 * @param {Internal.RecipesEventJS} event
 */
function s2Bot(event) {
    event.shapeless('botania:fertilizer', ['minecraft:bone_meal', 'embers:dawnstone_nugget', '3x #c:dyes'])
        .id('kubejs:bot_fertilizer_s2')

    event.shaped('botania:apothecary_default', [
        'ABA',
        ' A ',
        'AAA'
    ],
        {
            A: 'embers:caminite_brick',
            B: 'embers:dawnstone_aspectus'
        }).id('kubejs:bot_apothecary_s2')

    event.shaped('botania:mana_pool', [
        ' B ',
        'ACA',
        ' A '
    ],
        {
            A: 'botania:livingrock',
            B: 'botania:mana_powder',
            C: 'botania:diluted_pool'
        }).id('kubejs:bot_mana_pool_s2')

    event.recipes.botania.pure_daisy('botania:livingwood_log', 'forestry:log_pile').id('kubejs:bot_livingwood_s2')
    event.recipes.botania.pure_daisy('botania:livingrock', 'minecraft:nether_bricks').id('kubejs:bot_livingrock_s2')
}