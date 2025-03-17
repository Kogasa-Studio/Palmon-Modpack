ServerEvents.recipes(event => {

    event.stonecutting('botania:apothecary_default', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_1_s2')
    event.stonecutting('botania:apothecary_forest', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_2_s2')
    event.stonecutting('botania:apothecary_plains', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_3_s2')
    event.stonecutting('botania:apothecary_mountain', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_4_s2')
    event.stonecutting('botania:apothecary_fungal', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_5_s2')
    event.stonecutting('botania:apothecary_swamp', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_6_s2')
    event.stonecutting('botania:apothecary_desert', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_7_s2')
    event.stonecutting('botania:apothecary_taiga', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_8_s2')
    event.stonecutting('botania:apothecary_mesa', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_9_s2')
    event.stonecutting('botania:apothecary_mossy', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_10_s2')
    event.stonecutting('botania:apothecary_livingrock', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_11_s2')
    event.stonecutting('botania:apothecary_deepslate', ['#kubejs:apothecary']).id('kubejs:apothecary_ex_12_s2')

    event.shaped('embers:mechanical_core', [
        'ACA',
        ' B ',
        'ADA'
    ],
        {
            A: '#forge:ingots/cast_iron',
            B: 'kubejs:alpha_framework',
            C: 'embers:caminite_bricks',
            D: 'malum:block_of_blazing_quartz'
        }).id('kubejs:mechanical_core_s2')

    event.shaped('embers:ember_activator', [
        'AAA',
        'ACA',
        'BDB'
    ],
        {
            A: '#forge:plates/copper',
            B: '#forge:plates/iron',
            C: 'embers:ember_crystal',
            D: 'embers:mechanical_core'
        }).id('kubejs:ember_activator_s2')

    event.shaped('embers:melter', [
        'ACA',
        'ADA',
        'BEB'
    ],
        {
            A: 'embers:caminite_bricks',
            B: '#forge:plates/iron',
            C: 'embers:caminite_plate',
            D: 'embers:mechanical_core',
            E: 'malum:block_of_blazing_quartz'
        }).id('kubejs:melter_s2')

    event.shaped('embers:stamper', [
        'ABA',
        'ACA',
        'A A'
    ],
        {
            A: 'embers:caminite_brick',
            B: 'embers:mechanical_core',
            C: '#forge:storage_blocks/iron'
        }).id('kubejs:stamper_s2')

})