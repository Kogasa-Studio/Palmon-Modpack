ServerEvents.recipes(event => {
    event.recipes.create.crushing([
        Item.of('kubejs:epsilon_dust'),
        Item.of('kubejs:epsilon_dust').withChance(0.75),
        Item.of('kubejs:epsilon_dust').withChance(0.5),
        Item.of('kubejs:epsilon_dust').withChance(0.4),
        Item.of('kubejs:epsilon_dust').withChance(0.3),
        Item.of('kubejs:epsilon_dust').withChance(0.2),
        Item.of('kubejs:epsilon_dust').withChance(0.1)
    ], 'kubejs:epsilon_framework')
        .id('kubejs:epsilon_dust_s6')

    event.shapeless('occultism:chalk_red_impure', ['occultism:chalk_white_impure', 'occultism:afrit_essence', '#forge:dusts/blaze', 'kubejs:epsilon_dust']).id('kubejs:chalk_red_impure_s6')

    event.shaped('kubejs:basic_machine_frame', [
        'ABA',
        'ACA',
        'ADA'
    ],
        {
            A: 'techreborn:insulated_copper_cable',
            B: 'kubejs:essence_computation_frame',
            C: 'techreborn:basic_machine_frame',
            D: 'kubejs:epsilon_dust'
        }).id('kubejs:basic_machine_frame_s6')

    event.shaped('ars_nouveau:imbuement_chamber', [
        'ACA',
        'BDB',
        'BEB'
    ],
        {
            A: '#forge:ingots/manasteel',
            B: 'ars_nouveau:archwood_planks',
            C: 'ae2:logic_processor',
            D: 'kubejs:essence_computation_frame',
            E: 'kubejs:epsilon_dust',
        }).id('kubejs:imbuement_chamber_s6')

    event.recipes.thermal.smelter('12x kubejs:intelligent_draconium_ingot',
        ['kubejs:epsilon_dust', '16x jaopca:processors.draconium']
    ).energy(102400)
        .id('kubejs:intelligent_draconium_ingot_s6')

    event.shaped('industrialforegoing:mob_slaughter_factory', [
        'ADA',
        'BEB',
        'CFC'
    ],
        {
            A: 'industrialforegoing:plastic',
            B: 'minecraft:netherite_sword',
            C: 'minecraft:netherite_axe',
            D: 'kubejs:epsilon_dust',
            E: '#industrialforegoing:machine_frame/simple',
            F: '#forge:dusts/redstone'
        }).id('kubejs:mob_slaughter_factory_s6')

    event.shaped('ad_astra:cryo_freezer', [
        'ADA',
        'BCB',
        'ADA'
    ],
        {
            A: '#forge:plates/ostrum',
            B: 'minecraft:blue_ice',
            C: 'kubejs:epsilon_dust',
            D: 'kubejs:reinforced_sheet'
        }).id('kubejs:cryo_freezer_s5')

    event.shaped('industrialforegoingsouls:soul_laser_base', [
        'ADA',
        'BEB',
        'CFC'
    ],
        {
            A: 'industrialforegoing:plastic',
            B: 'kubejs:epsilon_dust',
            C: '#forge:gears/diamond',
            D: 'minecraft:sculk_shrieker',
            E: '#industrialforegoing:machine_frame/simple',
            F: 'kubejs:essence_computation_frame'
        }).id('kubejs:soul_laser_base_s6')

        event.shaped('industrialforegoing:enchantment_factory', [
            'PBP',
            'DMD',
            'OFO'
        ], {
            P: '#forge:plastic',
            B: 'kubejs:epsilon_dust',
            D: 'minecraft:diamond',
            M: '#industrialforegoing:machine_frame/simple',
            O: 'minecraft:obsidian',
            F: 'kubejs:essence_computation_frame'
        }).id('kubejs:enchantment_factory_s6')
    
        event.shaped('industrialforegoing:enchantment_extractor', [
            'PSP',
            'BMB',
            'DGD'
        ], {
            P: '#forge:plastic',
            S: 'kubejs:epsilon_dust',
            B: 'minecraft:book',
            M: '#industrialforegoing:machine_frame/simple',
            D: 'minecraft:diamond',
            G: 'kubejs:essence_computation_frame'
        }).id('kubejs:enchantment_extractor_s6')
    
        event.shaped('industrialforegoing:enchantment_applicator', [
            'PFP',
            'BMB',
            'GBG'
        ], {
            P: '#forge:plastic',
            B: 'minecraft:anvil',
            M: '#industrialforegoing:machine_frame/simple',
            G: 'kubejs:epsilon_dust',
            F: 'kubejs:essence_computation_frame'
        }).id('kubejs:enchantment_applicator_s6')
    
        event.shaped('industrialforegoing:ore_laser_base', [
            'pfp',
            'bmb',
            'grg'
        ], {
            p: '#forge:plastic',
            f: 'minecraft:diamond_pickaxe',
            b: '#forge:ores/iron',
            m: '#industrialforegoing:machine_frame/simple',
            g: 'kubejs:epsilon_dust',
            r: 'kubejs:essence_computation_frame'
        }).id('kubejs:ore_laser_base_s6')
    
        event.shaped('industrialforegoing:potion_brewer', [
            'PSP',
            'BMB',
            'GFG'
        ], {
            P: '#forge:plastic',
            S: 'minecraft:brewing_stand',
            B: 'kubejs:epsilon_dust',
            F: 'kubejs:essence_computation_frame',
            M: '#industrialforegoing:machine_frame/simple',
            G: 'minecraft:repeater'
        }).id('kubejs:potion_brewer_s6')
    
        event.shaped('industrialforegoing:marine_fisher', [
            'pfp',
            'bmb',
            'grg'
        ], {
            p: '#forge:plastic',
            f: 'minecraft:fishing_rod',
            b: 'minecraft:bucket',
            m: '#industrialforegoing:machine_frame/simple',
            g: 'kubejs:epsilon_dust',
            r: 'kubejs:essence_computation_frame'
        }).id('kubejs:marine_fisher_s6')
    
        event.shaped('industrialforegoing:material_stonework_factory', [
            'pcp',
            'gmf',
            'aba'
        ], {
            p: '#forge:plastic',
            c: 'kubejs:essence_computation_frame',
            g: 'minecraft:diamond_pickaxe',
            m: '#industrialforegoing:machine_frame/simple',
            f: 'kubejs:epsilon_dust',
            a: '#forge:gears/gold',
            b: 'industrialforegoing:pink_slime'
        }).id('kubejs:material_stonework_factory_s6')

        event.shaped('tiab:time_in_a_bottle', [
            'GFG',
            'DCD',
            'LBL'
        ], {
            G: 'kubejs:epsilon_dust',
            D: '#forge:gems/diamond',
            L: '#forge:gems/lapis',
            C: 'minecraft:clock',
            B: 'minecraft:glass_bottle',
            F: 'kubejs:essence_computation_frame'
        }).id('kubejs:time_in_a_bottle_s6')

    event.recipes.thermal.smelter('kubejs:reinforced_sheet',
        ['kubejs:epsilon_dust', '#forge:plates/terrasteel', '#forge:plates/elementium']
    ).energy(204800)
        .id('kubejs:reinforced_sheet_s6')

})