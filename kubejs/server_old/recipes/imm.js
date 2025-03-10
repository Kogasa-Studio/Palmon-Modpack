ServerEvents.recipes(event => {
    event.recipes.immersiveengineering.blueprint('ad_astra:nasa_workbench',
        [
            '8x #forge:gears/steel',
            '4x minecraft:comparator',
            '2x botanicalmachinery:mana_emerald',
            '2x #forge:storage_blocks/stainless_steel',
            '#tfc:chisels',
            'immersiveengineering:craftingtable'
        ], 'components')

    event.recipes.immersiveengineering.blueprint('ad_astra:steel_engine',
        [
            '16x #forge:rods/steel',
            '4x #forge:gears/steel',
            '4x #forge:double_sheets/steel',
            '2x ad_astra:fan',
            '2x botanicalmachinery:mana_emerald',
            'ad_astra:engine_frame'
        ], 'components')

    event.recipes.immersiveengineering.blueprint('ad_astra:steel_tank',
        [
            '8x #forge:plates/steel',
            '4x #forge:plates/iron',
            '2x #forge:rods/steel',
            '2x #forge:rods/iron'
        ], 'components')

    event.recipes.immersiveengineering.mixer(Fluid.of('ad_astra:fuel', 250),
            {"amount":250,"tag":"forge:redstone_acid"},
            ['24x #forge:dusts/redstone']
    )

})