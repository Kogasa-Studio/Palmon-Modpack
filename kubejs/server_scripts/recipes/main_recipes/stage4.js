ServerEvents.recipes(event => {
    event.shapeless('ars_nouveau:novice_spell_book', ['minecraft:book', 'kubejs:charged_source_gem', 'botania:manastar']).id('kubejs:novice_spell_book_s4')
    event.shapeless('ars_nouveau:apprentice_spell_book', ['ars_nouveau:novice_spell_book', '2x minecraft:diamond', '2x minecraft:blaze_rod', 'kubejs:unify_essence', 'minecraft:crying_obsidian', 'minecraft:quartz_block', 'botania:mana_quartz']).id('kubejs:apprentice_spell_book_s4')
    event.shapeless('ars_nouveau:ritual_brazier', ['ars_nouveau:arcane_pedestal', '4x #forge:ingots/gold', 'kubejs:unify_essence', '#forge:storage_blocks/source_gem']).id('kubejs:ritual_brazier_s4')

    event.shaped('industrialforegoing:machine_frame_pity', [
        'ACA',
        'BDB',
        'ACA'
    ],
        {
            A: '#forge:gears/dawnstone',
            B: 'kubejs:stable_desh_ingot',
            C: '#forge:gears/steel',
            D: 'kubejs:essence_computation_frame'
        }).id('kubejs:machine_frame_pity_s4')

    event.shaped('ae2:inscriber', [
        'ABA',
        ' CA',
        'ABA'
    ],
        {
            A: '#forge:ingots/ostrum',
            B: 'minecraft:sticky_piston',
            C: 'ad_astra:ostrum_engine'
        }).id('kubejs:ae_inscriber_s4')

    event.shaped('botania:apothecary_default', [
        'ABA',
        ' A ',
        'AAA'
    ],
        {
            A: 'embers:caminite_brick',
            B: 'ad_astra:ostrum_engine'
        }).id('kubejs:bot_apothecary_s4')

    event.shaped('2x compactmachines:wall', [
        'ABA',
        'BCB',
        'ABA'
    ],
        {
            A: '#forge:plates/iron',
            B: '#forge:obsidian',
            C: '#forge:plates/ostrum'
        }).id('kubejs:cm_wall_s4')

    event.shaped('botania:alfheim_portal', [
        'ABA',
        'BCB',
        'ABA'
    ],
        {
            A: '#botania:livingwood_logs',
            B: '#forge:plates/ostrum',
            C: 'ad_astra:ostrum_engine'
        }).id('kubejs:alfheim_portal_s4')

    event.recipes.thermal.smelter('2x kubejs:essence_computation_frame',
        ['ae2:cell_component_4k', 'kubejs:gamma_framework', 'jaopca:processors.elementium']
    ).energy(38400)
        .id('kubejs:essence_computation_frame_s4')

    event.recipes.ars_nouveau.imbuement(
        '#forge:gems/source_gem',
        'kubejs:charged_source_gem',
        2000,
        []
    ).id('kubejs:charged_source_gem_s4')

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:abjuration_essence', 'ars_nouveau:conjuration_essence', 'ars_nouveau:air_essence', 'ars_nouveau:earth_essence', 'ars_nouveau:fire_essence', 'ars_nouveau:manipulation_essence', 'ars_nouveau:water_essence', 'botania:pixie_dust'],
        ['kubejs:charged_source_gem'],
        'kubejs:unify_essence',
        8000
    ).id('kubejs:unify_essence_s4')

    event.recipes.botania.elven_trade('botania:elementium_ingot',
        ['#forge:ingots/manasteel', '#forge:ingots/manasteel', '#forge:ingots/ostrum'])
        .id('kubejs:elementium_s4')

    event.recipes.createMechanicalCrafting('kubejs:scranton_reality_anchor', [
        ' AAAAA ',
        'A BCB A',
        'DBCECBD',
        'A BCB A',
        ' AAAAA '
    ], {
        A: '#ad_astra:calorite_plates',
        B: '#forge:storage_blocks/draconium',
        C: 'kubejs:essence_computation_frame',
        D: 'mythicbotany:alfsteel_ingot',
        E: 'kubejs:delta_framework'
    }).id('kubejs:scranton_reality_anchor_s4')
})