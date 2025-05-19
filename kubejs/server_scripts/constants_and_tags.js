// priority: 200

global.modBlackList = new Set(['minecraft', 'tconstruct', 'cataclysm', 'tconstruct', 'malum', 'rats'])

global.ratlantis = "ratlantis"
global.endStage = "the_end"

global.overworldItemStage = "overworld_item"
global.slashbladeStage = "slashblade"

global.diffLevelStage = "diff_level_"

ServerEvents.tags('item', event => {
    event.add('kubejs:tier_1_materials',
        'thermal:enderium_ingot',
        'nuclearcraft:hard_carbon_ingot',
        'ad_astra:desh_ingot',
        'tconstruct:manyullyn_ingot',
        'malum:soul_stained_steel_ingot',
        'botania:terrasteel_nugget',
        'embers:dawnstone_ingot',
        'occultism:spirit_attuned_gem'
    )

    event.add('forge:vegetables',
        '#cobblemon:plants'
    )

    event.add('forge:crops',
        '#cobblemon:plants'
    )

    event.add('kubejs:apothecary',
        'botania:apothecary_default',
        'botania:apothecary_forest',
        'botania:apothecary_plains',
        'botania:apothecary_mountain',
        'botania:apothecary_fungal',
        'botania:apothecary_swamp',
        'botania:apothecary_desert',
        'botania:apothecary_taiga',
        'botania:apothecary_mesa',
        'botania:apothecary_mossy',
        'botania:apothecary_livingrock',
        'botania:apothecary_deepslate'
    )

    event.add('kubejs:stage2_convergence',
        'jaopca:processors.fluix',
        'botania:terrasteel_ingot',
        'jaopca:gears.unknown'
    )

    event.add('dustandash:centrifuge_catalyst',
        'techreborn:cell'
    )

})

ServerEvents.tags('fluid', event => {
    event.add('kubejs:hybrid_fuel',
        'kubejs:hybrid_fuel'
    )

    event.add('forge:deuterium',
        'techreborn:deuterium'
    )
    
    event.add('forge:tritium',
        'techreborn:tritium'
    )

    event.add('forge:helium',
        'techreborn:helium'
    )

    event.remove('minecraft:water',
        'cobgyms:safe_lava'
    )

})
