ServerEvents.recipes(event => {
    event.replaceInput([
        { id: 'immersiveengineering:crafting/thermoelectric_generator' }
    ],
        'immersiveengineering:coil_lv',
        'create:steam_engine'
    )

    event.replaceInput([
        { id: 'confluence:workshop' }
    ],
        'minecraft:red_wool',
        'ad_astra:ostrum_ingot'
    )

    event.replaceInput([
        { id: 'ae2:network/blocks/inscribers' }
    ],
        '#forge:ingots/copper',
        'botania:gaia_ingot'
    )

    event.replaceInput([
        { id: 'ae2:network/cells/item_storage_components_cell_256k_part' }
    ],
        'ae2:quartz_glass',
        'ae2:engineering_processor'
    )

    event.replaceInput([
        { id: 'ae2:network/blocks/io_condenser' }
    ],
        'ae2:fluix_dust',
        'ae2:cell_component_256k'
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