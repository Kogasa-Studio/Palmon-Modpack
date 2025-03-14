ServerEvents.recipes(event => {
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