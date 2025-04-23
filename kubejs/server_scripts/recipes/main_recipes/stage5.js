ServerEvents.recipes(event => {
    event.shapeless('2x hostilenetworks:prediction_matrix', ['kubejs:collapse_prediction']).id('kubejs:prediction_matrix_s5')

    event.recipes.thermal.smelter('2x kubejs:end_steel',
        ['3x techreborn:sodalite_dust', '5x #forge:ingots/draconium', '2x integrateddynamics:crystalized_chorus_block']
    ).energy(204800)
        .id('kubejs:end_steel_s5')

    event.custom({
        "type": "palmon:processing",
        "category": "misc",
        "focus_stat": "ATTACK",
        "min_level": 60,
        "required_type": null,
        "base_hp": 20,
        "base_atk": 90,
        "base_def": 0,
        "base_spa": 40,
        "base_spd": 10,
        "base_spe": 20,
        "area_blocks": [
            {
                "item": 'integrateddynamics:crystalized_chorus_block'
            },
            {
                "item": 'integratedterminals:menril_glass'
            },
        ],
        "block_count": 12,
        "input_items": [
            {
                "item": 'minecraft:clay_ball',
                "count": 16
            },
            {
                "tag": "forge:glass",
                "count": 8
            },
            {
                "item": 'palmon:stone',
                "count": 8
            },
            {
                "tag": 'forge:ingots/bronze',
                "count": 8
            },
            {
                "tag": 'forge:ingots/constantan',
                "count": 4
            },
            {
                "tag": 'forge:ingots/rose_gold',
                "count": 2
            },
            {
                "tag": 'forge:ingots/soul_infused',
                "count": 1
            },
            {
                "item": 'palmon:m_crystal',
                "count": 1
            }
        ],
        "input_power": 409600,
        "input_fluid": {
            "fluid": "thermal:refined_fuel",
            "amount": 500
          },
        "tick": 1000,
        "result_items": [
            {
                "item": 'hostilenetworks:prediction_matrix',
                "count": 32
            },
            {
                "item": 'minecraft:sand',
                "count": 4
            }
        ]
    }).id('kubejs:prediction_matrix_s5')
    
    event.recipes.create.compacting(['2x kubejs:collapse_prediction'],
        [
            '3x hostilenetworks:overworld_prediction',
            '2x hostilenetworks:nether_prediction',
            'hostilenetworks:end_prediction'
        ]
    ).superheated()
        .id('kubejs:collapse_prediction_s5')

})