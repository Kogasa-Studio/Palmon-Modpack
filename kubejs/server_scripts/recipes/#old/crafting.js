ServerEvents.recipes(event => {
    event.shapeless('4x tfc:wood/planks/douglas_fir', ['palmon:wood'])
    event.shapeless('palmon:empty_contract', ['minecraft:paper', 'cobblemon:red_apricorn', 'tfc:volcanic_glass_bottle', 'minecraft:black_dye'])
    
    event.shapeless('minecraft:gravel', ['#forge:gravel'])



    event.shapeless('cobblemon:ancient_feather_ball', ['#forge:feathers', 'cobblemon:ancient_azure_ball'])
    event.shapeless('cobblemon:ancient_wing_ball', ['#forge:feathers', 'cobblemon:ancient_great_ball'])
    event.shapeless('cobblemon:ancient_jet_ball', ['#forge:feathers', 'cobblemon:ancient_ultra_ball'])

    event.shapeless('cobblemon:ancient_heavy_ball', ['palmon:stone', 'cobblemon:ancient_slate_ball'])
    event.shapeless('cobblemon:ancient_leaden_ball', ['palmon:stone', 'cobblemon:ancient_great_ball'])
    event.shapeless('cobblemon:ancient_gigaton_ball', ['palmon:stone', 'cobblemon:ancient_ultra_ball'])
    event.shapeless('thermal:enderium_coin', ['4x thermal:signalum_coin'])
    event.shapeless('4x thermal:signalum_coin', ['thermal:enderium_coin'])
    
    event.shapeless('palmon:stone', ['2x tfc:rock/smooth/granite', '2x tfc:rock/smooth/diorite', '2x tfc:rock/smooth/andesite', '2x tfc:rock/smooth/dacite'])

    event.shaped('sophisticatedbackpacks:backpack', [
        'ABA',
        'BCB',
        'ADA'
    ],
        {
            A: '#forge:sheets/wrought_iron',
            B: '#forge:leather',
            C: '#forge:barrels/wooden',
            D: 'minecraft:saddle'
        })

    event.shaped('minecraft:furnace', [
        'AAA',
        'BCB',
        'ADA'
    ],
        {
            A: '#forge:cobblestone',
            B: '#forge:rods/red_steel',
            C: 'tfc:wrought_iron_grill',
            D: 'minecraft:glowstone'
        })

    event.shaped('minecraft:bucket', [
        'ABA',
        ' A '
    ],
        {
            A: '#forge:plates/steel',
            B: 'minecraft:barrel'
        })

    event.shaped('kubejs:present_soul', [
        'ABA',
        'CFD',
        'AEA'
    ],
        {
            A: 'tfc:soot',
            B: ['tfc:metal/helmet/red_steel', 'tfc:metal/helmet/blue_steel'],
            C: ['tfc:metal/chestplate/red_steel', 'tfc:metal/chestplate/blue_steel'],
            D: ['tfc:metal/greaves/red_steel', 'tfc:metal/greaves/blue_steel'],
            E: ['tfc:metal/boots/red_steel', 'tfc:metal/boots/blue_steel'],
            F: 'tfc:hematitic_glass_bottle'
        })

    event.shaped('botania:alfheim_portal', [
        'ABA',
        'BCB',
        'ABA'
    ],
        {
            A: '#botania:livingwood_logs',
            B: '#forge:plates/ostrum',
            C: 'kubejs:reinforced_sheet'
        })

    event.shaped('palmon:boost_frame_5', [
        'ABA',
        'ACA',
        'ADA'
    ],
        {
            A: 'palmon:refined_m_steel_ingot',
            B: 'botania:gaia_ingot',
            C: 'palmon:boost_frame_4',
            D: 'industrialforegoing:machine_frame_supreme'
        })

    event.shaped('kubejs:vial_of_chaos', [
        'ABA',
        'BCB',
        'ABA'
    ],
        {
            A: 'adventuresmod:stardust',
            B: 'adventuresmod:mythril_ingot',
            C: 'rats:vial_of_sentience'
        })

    event.shaped('minecraft:netherite_upgrade_smithing_template', [
        'ABA',
        'ACA',
        'AAA'
    ],
        {
            A: '#forge:gems/diamond',
            B: '#forge:ingots/netherite_scrap',
            C: '#forge:netherrack'
        })

    event.shaped('minecraft:anvil', [
        'AAA',
        ' B ',
        'BBB'
    ],
        {
            A: '#forge:storage_blocks/iron',
            B: '#forge:ingots/cast_iron'
        })

    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
            {
                "type": "sophisticatedcore:item_enabled",
                "itemRegistryName": "sophisticatedbackpacks:iron_backpack"
            }
        ],
        "key": {
            "B": {
                "item": "sophisticatedbackpacks:copper_backpack"
            },
            "I": {
                "item": "tfc:metal/ingot/black_steel"
            }
        },
        "pattern": [
            " I ",
            "IBI",
            " I "
        ],
        "result": {
            "item": "sophisticatedbackpacks:iron_backpack"
        }
    })

})