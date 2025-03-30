/**
 * @param {Internal.RecipesEventJS} event
 */
function s3Ma(event) {

    event.shaped('malum:spirit_altar', [
        ' A ',
        'BCB',
        'CCC'
    ],
        {
            A: 'malum:processed_soulstone',
            B: 'kubejs:stable_desh_ingot',
            C: '#malum:runewood_planks'
        }).id('kubejs:spirit_altar_s3')

    event.recipes.thermal.smelter('2x kubejs:hallowed_soul_steel_ingot',
        ['2x kubejs:stable_desh_ingot', '#forge:ingots/soul_stained_steel', 'malum:hallowed_gold_ingot']
    ).energy(38400)
        .id('kubejs:hallowed_soul_steel_ingot_s3')

    event.custom({
        "type": "malum:spirit_infusion",
        "extra_items": [
            {
                "count": 4,
                "item": "malum:runewood_planks"
            },
            {
                "count": 4,
                "item": 'kubejs:hallowed_soul_steel_ingot'
            }
        ],
        "input": {
            "count": 1,
            "item": "malum:runewood_item_pedestal"
        },
        "output": {
            "item": "malum:runic_workbench"
        },
        "spirits": [
            {
                "type": "aqueous",
                "count": 16
            },
            {
                "type": "sacred",
                "count": 8
            }
        ]
    }).id('kubejs:runic_workbench_s3')

    event.custom({
        "type": "malum:spirit_infusion",
        "extra_items": [
            {
                "count": 4,
                "item": "malum:null_slate"
            },
            {
                "count": 1,
                "item": 'malum:runewood_tablet'
            },
            {
                "count": 1,
                "item": 'malum:soulwood_tablet'
            }
        ],
        "input": {
            "count": 1,
            "item": "malum:tainted_rock_tablet"
        },
        "output": {
            "item": "malum:void_tablet"
        },
        "spirits": [
            {
                "type": "eldritch",
                "count": 4
            }
        ]
    }).id('kubejs:void_tablet_s3')
    
}