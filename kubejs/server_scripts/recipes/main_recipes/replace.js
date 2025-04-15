ServerEvents.recipes(event => {
    event.replaceInput([
        { type: "minecraft:crafting_shaped" }, { type: "minecraft:crafting_shapeless" }
    ],
        'draconicevolution:draconium_ingot',
        'kubejs:intelligent_draconium_ingot'
    )

    event.replaceInput([
        { type: "minecraft:crafting_shaped" }, { type: "minecraft:crafting_shapeless" }
    ],
        'ars_nouveau:source_gem',
        'kubejs:charged_source_gem'
    )

    event.replaceInput([
        { type: "minecraft:crafting_shaped" }, { type: "minecraft:crafting_shapeless" }
    ],
        'techreborn:basic_machine_frame',
        'kubejs:basic_machine_frame'
    )

    event.replaceInput([
        { type: "minecraft:crafting_shaped" }, { type: "minecraft:crafting_shapeless" }
    ],
        'techreborn:advanced_machine_frame',
        'kubejs:advanced_machine_frame'
    )

    event.replaceInput([
        { type: "minecraft:crafting_shaped" }, { type: "minecraft:crafting_shapeless" }
    ],
        'techreborn:industrial_machine_frame',
        'kubejs:industrial_machine_frame'
    )

    event.replaceInput([
        { type: "minecraft:crafting_shaped" }, { type: "minecraft:crafting_shapeless" }
    ],
        'ad_astra:desh_plate',
        'kubejs:stable_desh_ingot'
    )

    event.replaceInput([
        { id: 'draconicevolution:machines/basic_crafting_injector' }
    ],
        'draconicevolution:draconium_core',
        'draconicevolution:wyvern_energy_core'
    )

    event.replaceInput([
        { id: 'occultism:crafting/chalk_purple_impure' }
    ],
        '#forge:dusts/end_stone',
        'kubejs:essence_computation_frame'
    )

    event.replaceInput([
        { id: 'ae2:network/blocks/quantum_ring' }
    ],
        'ae2:engineering_processor',
        'kubejs:essence_computation_frame'
    )

    event.replaceInput([
        { id: 'ae2:network/parts/storage_bus' }
    ],
        'minecraft:piston',
        'kubejs:essence_computation_frame'
    )

    // old
    event.replaceInput([
        { id: 'confluence:workshop' }
    ],
        'minecraft:red_wool',
        'ad_astra:ostrum_ingot'
    )

    event.replaceInput([
        { id: 'create:crafting/kinetics/deployer' }
    ],
        'create:andesite_casing',
        'create:brass_casing'
    )

    event.replaceInput([
        { id: 'botania:flighttiara_0' }
    ],
        'minecraft:feather',
        'adventuresmod:mythril_ingot'
    )

    event.replaceInput([
        { id: 'tacz:gun_smith_table' }
    ],
        'minecraft:iron_ingot',
        'ad_astra:desh_ingot'
    )

    event.replaceInput([
        { id: 'emxarms:sky_workbench' }
    ],
        'minecraft:iron_ingot',
        'ad_astra:desh_ingot'
    )

    event.replaceInput([
        { id: 'emxarms:emx_workbench' }
    ],
        'minecraft:iron_ingot',
        'ad_astra:desh_ingot'
    )

    event.replaceInput([
        { id: 'trisdyna:tris_workbench' }
    ],
        'minecraft:iron_ingot',
        'ad_astra:desh_ingot'
    )

    event.replaceInput([
        { id: 'deep_rock_galactic:supply' }
    ],
        'minecraft:iron_ingot',
        'ad_astra:desh_ingot'
    )

    event.replaceInput([
        {}
    ],
        'minecraft:anvil',
        '#minecraft:anvil'
    )

})