/**
 * @param {Internal.RecipesEventJS} event
 */
function s4IFM(event) {

    event.shaped('industrialforegoing:mob_slaughter_factory', [
        'ADA',
        'BEB',
        'CFC'
    ],
        {
            A: 'industrialforegoing:plastic',
            B: 'minecraft:netherite_sword',
            C: 'minecraft:netherite_axe',
            D: '#forge:gears/gold',
            E: '#industrialforegoing:machine_frame/simple',
            F: '#forge:dusts/redstone'
        }).id('kubejs:mob_slaughter_factory_s4')

    event.recipes.create.mixing([Fluid.of('kubejs:melted_voidarium', 100)],
        [
            Fluid.of('industrialforegoing:fermented_ore_meat', 100, { Tag: 'forge:raw_materials/ostrum' }),
            Fluid.of('industrialforegoing:fermented_ore_meat', 100, { Tag: 'forge:raw_materials/desh' }),
            'industrialforegoing:dryrubber'
        ]
    ).superheated()
        .processingTime(400)
        .id('kubejs:melted_voidarium_s4')

    var t = 'industrialforegoing:machine_frame_advanced'
    event.recipes.createSequencedAssembly([
        'industrialforegoing:machine_frame_supreme',
    ], t, [
        event.recipes.createCutting(t, t),
        event.recipes.createFilling(t, [t, Fluid.of('industrialforegoing:ether_gas', 125)]),
        event.recipes.createDeploying(t, [t, 'kubejs:essence_computation_frame']),
        event.recipes.createDeploying(t, [t, 'industrialforegoing:pink_slime_ingot']),
        event.recipes.createPressing(t, t),
        event.recipes.createFilling(t, [t, Fluid.of('kubejs:melted_voidarium', 100)]),
        event.recipes.createPressing(t, t)
    ]).transitionalItem(t)
        .loops(2)
        .id('kubejs:machine_frame_supreme_s4')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'industrialforegoing:plastic'
            },
            {
                "tag": 'industrialforegoing:machine_frame/advanced'
            },
            {
                "item": 'industrialforegoing:plastic'
            },
            {
                "item": 'kubejs:essence_computation_frame'
            },
            {
                "item": 'kubejs:essence_computation_frame'
            },
            {
                "item": 'minecraft:bucket'
            },
            {
                "item": 'minecraft:netherite_pickaxe'
            },
            {
                "item": 'minecraft:bucket'
            }
        ],
        "inputFluid": "{Amount:1200,FluidName:\"kubejs:melted_voidarium\"}",
        "output": {
            "count": 1,
            "item": 'industrialforegoing:fluid_laser_base'
        },
        "processingTime": 800
    }).id('kubejs:fluid_laser_base_s4')


}