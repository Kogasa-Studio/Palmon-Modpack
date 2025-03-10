ServerEvents.recipes(event => {
    event.shaped('9x tconstruct:seared_brick', [
        'ACB',
        'CDC',
        'BCA'
    ],
        {
            A: '#forge:sand',
            B: '#forge:gravel',
            C: '#forge:clay',
            D: 'tfc:ceramic/fire_brick'
        }).id('kubejs:seared_brick_s1')

    event.recipes.tfc.barrel_sealed(4800)
        .outputItem('thermal:slag')
        .outputFluid(Fluid.of('immersiveengineering:creosote', 1000))
        .inputs('#forge:coal', TFC.fluidStackIngredient('tfc:limewater', 1000))
        .id('kubejs:creosote_s1')

    event.shaped('2x palmon:working_station', [
        'AAA',
        'BCB',
        'DDD'
    ],
        {
            A: '#forge:sheets/gold',
            B: 'palmon:wood',
            C: 'tfcgroomer:copper_grooming_station',
            D: '#forge:sheets/wrought_iron'
        }).id('kubejs:working_station_s1')

    event.shaped('palmon:production_machine', [
        'ABA',
        'CDC',
        'EEE'
    ],
        {
            A: '#forge:sheets/brass',
            B: 'minecraft:crafting_table',
            C: 'minecraft:hopper',
            D: 'tfc:metal/pickaxe/wrought_iron',
            E: '#forge:sheets/wrought_iron'
        }).id('kubejs:production_machine_s1')

    event.shaped('palmon:processing_station', [
        'ABA',
        'CDC',
        'EEE'
    ],
        {
            A: '#forge:sheets/wrought_iron',
            B: 'tfc:bellows',
            C: 'minecraft:hopper',
            D: 'minecraft:smithing_table',
            E: '#forge:sheets/black_steel'
        }).id('kubejs:processing_station_s1')

})