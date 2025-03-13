ServerEvents.recipes(event => {
    event.shapeless('minecraft:slime_ball', ['tfc:glue'])
        .id('kubejs:slime_ball')
    event.shapeless('minecraft:dried_kelp', ['tfc:food/dried_kelp'])
        .id('kubejs:dried_kelp_comp')
    event.shapeless('tfc:bellows', ['supplementaries:bellows', '#forge:leather'])
        .id('kubejs:bellows_comp')

    event.smelting('minecraft:dried_kelp', ['tfc:plant/winged_kelp', 'tfc:plant/leafy_kelp'], 200, 10)

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

    event.recipes.tfc.barrel_sealed(4800)
        .outputFluid(Fluid.of('ad_astra:fuel', 1000))
        .inputs('32x #forge:dusts/redstone', TFC.fluidStackIngredient('immersiveengineering:creosote', 2000))
        .id('kubejs:fuel_s1')

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
            C: ['minecraft:hopper', 'woodenhopper:wooden_hopper'],
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

    event.shaped('ad_astra:nasa_workbench', [
        'ACA',
        'BDB',
        'AEA'
    ],
        {
            A: '#forge:sheets/brass',
            B: 'kubejs:alpha_framework',
            C: 'palmon:m_crystal',
            D: 'tfc:brass_mechanisms',
            E: '#forge:sheets/any_bronze'
        }).id('kubejs:nasa_workbench_s1')

    event.shaped('ad_astra:steel_engine', [
        'ACA',
        'BDB',
        'AEA'
    ],
        {
            A: '#forge:plates/steel',
            B: '#forge:rods/steel',
            C: 'kubejs:alpha_framework',
            D: 'ad_astra:engine_frame',
            E: 'ad_astra:fan'
        }).id('kubejs:steel_engine_s1')

})

