global.modBlackList = new Set(['minecraft', 'tconstruct', 'cataclysm', 'tconstruct', 'malum', 'rats'])
global.entityBlackList = new Set(["cobblemon:pokemon", "dummmmmmy:target_dummy", "aqua_creepers:aqua_creeper"])

global.netherStage = "the_nether"
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

})