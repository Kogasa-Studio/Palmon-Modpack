ServerEvents.recipes(event => {
    event.shaped('ae2:inscriber', [
        'ABA',
        ' CA',
        'ABA'
    ],
        {
            A: '#forge:ingots/ostrum',
            B: 'minecraft:sticky_piston',
            C: 'ad_astra:ostrum_engine'
        }).id('kubejs:ae_inscriber_s4')

    event.shaped('botania:apothecary_default', [
        'ABA',
        ' A ',
        'AAA'
    ],
        {
            A: 'embers:caminite_brick',
            B: 'ad_astra:ostrum_engine'
        }).id('kubejs:bot_apothecary_s4')

    event.shaped('2x compactmachines:wall', [
        'ABA',
        'BCB',
        'ABA'
    ],
        {
            A: '#forge:plates/iron',
            B: '#forge:obsidian',
            C: '#forge:plates/ostrum'
        }).id('kubejs:cm_wall_s4')

    event.recipes.thermal.smelter('2x kubejs:essence_computation_frame',
        ['ae2:cell_component_4k', 'kubejs:gamma_framework', 'jaopca:processors.elementium']
    ).energy(38400)
        .id('kubejs:essence_computation_frame_s4')

})