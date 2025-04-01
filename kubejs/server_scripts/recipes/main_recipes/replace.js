ServerEvents.recipes(event => {
    event.replaceInput([
        { type: "minecraft:crafting_shaped" }, { type: "minecraft:crafting_shapeless" }
    ],
        'ad_astra:desh_plate',
        'kubejs:stable_desh_ingot'
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
        { output: 'industrialforegoing:machine_frame_pity' }
    ],
        '#minecraft:logs',
        'create:brass_casing'
    )

    event.replaceInput([
        {}
    ],
        'minecraft:anvil',
        '#minecraft:anvil'
    )

})