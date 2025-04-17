/**
 * @param {Internal.RecipesEventJS} event
 */
function s4DE(event) {

    event.recipes.thermal.smelter('3x kubejs:intelligent_draconium_ingot',
        ['industrialforegoing:machine_frame_simple', '4x jaopca:processors.draconium']
    ).energy(76800)
        .id('kubejs:intelligent_draconium_ingot_s4')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "tag": 'industrialforegoing:machine_frame/simple'
            },
            {
                "tag": 'forge:gears/diamond'
            },
            {
                "tag": 'forge:processors/manasteel'
            },
            {
                "tag": 'forge:processors/manasteel'
            }
        ],
        "inputFluid": "{Amount:450,FluidName:\"tconstruct:molten_electrum\"}",
        "output": {
            "count": 1,
            "item": 'draconicevolution:draconium_core'
        },
        "processingTime": 600
    }).id('kubejs:draconium_core_1_s4')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "tag": 'industrialforegoing:machine_frame/simple'
            },
            {
                "tag": 'forge:gears/diamond'
            },
            {
                "tag": 'forge:processors/manasteel'
            },
            {
                "tag": 'forge:processors/manasteel'
            }
        ],
        "inputFluid": "{Amount:450,FluidName:\"embers:molten_electrum\"}",
        "output": {
            "count": 1,
            "item": 'draconicevolution:draconium_core'
        },
        "processingTime": 600
    }).id('kubejs:draconium_core_2_s4')

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "item": 'kubejs:intelligent_draconium_ingot'
            },
            {
                "item": 'botania:mana_fluxfield'
            },
            {
                "item": 'botania:mana_fluxfield'
            },
            {
                "item": 'draconicevolution:draconium_core'
            },
        ],
        "inputFluid": "{Amount:1800,FluidName:\"thermal:redstone\"}",
        "output": {
            "count": 1,
            "item": 'draconicevolution:wyvern_energy_core'
        },
        "processingTime": 1200
    }).id('kubejs:wyvern_energy_core_s4')

}