/**
 * @param {Internal.RecipesEventJS} event
 */
function e4IFS(event) {
    event.shaped('industrialforegoingsouls:soul_laser_base', [
        'ADA',
        'BEB',
        'CFC'
    ],
        {
            A: 'industrialforegoing:plastic',
            B: 'minecraft:iron_bars',
            C: '#forge:gears/diamond',
            D: 'minecraft:sculk_shrieker',
            E: '#industrialforegoing:machine_frame/advanced',
            F: 'kubejs:essence_computation_frame'
        }).id('kubejs:soul_laser_base_s4')

}

/**
 * @param {Internal.RecipesEventJS} event
 */
function e4IFU(event) {
    event.shaped('industrialforegoing:enchantment_factory', [
        'PBP',
        'DMD',
        'OFO'
    ], {
        P: '#forge:plastic',
        B: 'minecraft:book',
        D: 'minecraft:diamond',
        M: '#industrialforegoing:machine_frame/advanced',
        O: 'minecraft:obsidian',
        F: 'kubejs:essence_computation_frame'
    }).id('kubejs:enchantment_factory_s4')

    event.shaped('industrialforegoing:enchantment_extractor', [
        'PSP',
        'BMB',
        'DGD'
    ], {
        P: '#forge:plastic',
        S: 'minecraft:nether_bricks',
        B: 'minecraft:book',
        M: '#industrialforegoing:machine_frame/advanced',
        D: 'minecraft:diamond',
        G: 'kubejs:essence_computation_frame'
    }).id('kubejs:enchantment_extractor_s4')

    event.shaped('industrialforegoing:enchantment_applicator', [
        'PFP',
        'BMB',
        'GBG'
    ], {
        P: '#forge:plastic',
        B: 'minecraft:anvil',
        M: '#industrialforegoing:machine_frame/advanced',
        G: '#forge:gears/gold',
        F: 'kubejs:essence_computation_frame'
    }).id('kubejs:enchantment_applicator_s4')

    event.shaped('industrialforegoing:ore_laser_base', [
        'pfp',
        'bmb',
        'grg'
    ], {
        p: '#forge:plastic',
        f: 'minecraft:diamond_pickaxe',
        b: '#forge:ores/iron',
        m: '#industrialforegoing:machine_frame/advanced',
        g: '#forge:gears/diamond',
        r: 'kubejs:essence_computation_frame'
    }).id('kubejs:ore_laser_base_s4')

    event.shaped('industrialforegoing:potion_brewer', [
        'PSP',
        'BMB',
        'GFG'
    ], {
        P: '#forge:plastic',
        S: 'minecraft:brewing_stand',
        B: '#forge:gears/gold',
        F: 'kubejs:essence_computation_frame',
        M: '#industrialforegoing:machine_frame/advanced',
        G: 'minecraft:repeater'
    }).id('kubejs:potion_brewer_s4')

    event.shaped('industrialforegoing:marine_fisher', [
        'pfp',
        'bmb',
        'grg'
    ], {
        p: '#forge:plastic',
        f: 'minecraft:fishing_rod',
        b: 'minecraft:bucket',
        m: '#industrialforegoing:machine_frame/simple',
        g: '#forge:gears/iron',
        r: 'kubejs:essence_computation_frame'
    }).id('kubejs:marine_fisher_s4')

    event.shaped('industrialforegoing:material_stonework_factory', [
        'pcp',
        'gmf',
        'aba'
    ], {
        p: '#forge:plastic',
        c: 'kubejs:essence_computation_frame',
        g: 'minecraft:diamond_pickaxe',
        m: '#industrialforegoing:machine_frame/advanced',
        f: 'minecraft:furnace',
        a: '#forge:gears/gold',
        b: 'industrialforegoing:pink_slime'
    }).id('kubejs:material_stonework_factory_s4')
}

/**
 * @param {Internal.RecipesEventJS} event
 */
function e4EFF(event) {

}

/**
 * @param {Internal.RecipesEventJS} event
 */
function e4TIB(event) {
    event.shaped('tiab:time_in_a_bottle', [
        'GFG',
        'DCD',
        'LBL'
    ], {
        G: '#forge:ingots/gold',
        D: '#forge:gems/diamond',
        L: '#forge:gems/lapis',
        C: 'minecraft:clock',
        B: 'minecraft:glass_bottle',
        F: 'kubejs:essence_computation_frame'
    }).id('kubejs:time_in_a_bottle_s4')
}

/**
 * @param {Internal.RecipesEventJS} event
 */
function e4PLM(event) {

}

/**
 * @param {Internal.RecipesEventJS} event
 */
function e4AE(event) {

}
