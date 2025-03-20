ServerEvents.recipes(event => {

    event.shaped('immersiveengineering:hammer', [
        ' AC',
        ' BA',
        'B  '
    ],
        {
            A: 'kubejs:present_alloy',
            B: '#forge:rods',
            C: 'create:andesite_alloy'
        }).id('kubejs:hammer_s3')

    event.shaped('2x thermal:machine_frame', [
        'ABA',
        'BCB',
        'ABA'
    ],
        {
            A: '#forge:plates/steel',
            B: '#forge:gears/tin',
            C: 'kubejs:beta_framework'
        }).id('kubejs:machine_frame_s3')

    event.recipes.thermal.smelter('2x kubejs:present_alloy', 
        ['3x #forge:ingots/signalum', '2x #forge:ingots/lumium', '#forge:ingots/enderium']
    ).energy(9600)
    .id('kubejs:present_alloy_s2')

    event.recipes.thermal.smelter('3x create:andesite_alloy', 
        ['2x #forge:plates/zinc', '#forge:plates/steel', '2x occultism:otherstone']
    ).energy(6400)
    .id('kubejs:andesite_alloy_s2')

    event.recipes.thermal.smelter('2x kubejs:stable_desh_ingot', 
        ['2x #forge:plates/desh', 'kubejs:present_alloy', 'celestial_core:ocean_ingot']
    ).energy(12800)
    .id('kubejs:stable_desh_ingot_s2')

})