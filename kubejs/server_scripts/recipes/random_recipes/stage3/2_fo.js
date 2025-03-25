/**
 * @param {Internal.RecipesEventJS} event
 */
function s3Fo(event) {

    event.shaped('forestry:sturdy_machine', [
        'ABA',
        'A A',
        'ABA'
    ],
        {
            A: '#forge:ingots/bronze',
            B: 'kubejs:stable_desh_ingot'
        }).id('kubejs:sturdy_machine_s3')

    event.shaped('forestry:carpenter', [
        'ABA',
        'ACA',
        'ABA'
    ],
        {
            A: '#forge:ingots/bronze',
            B: 'forestry:electron_tube_emerald',
            C: 'forestry:sturdy_machine'
        }).id('kubejs:carpenter_s3')

    event.shaped('forestry:squeezer', [
        'ABA',
        'ACA',
        'ABA'
    ],
        {
            A: '#forge:ingots/tin',
            B: 'forestry:electron_tube_emerald',
            C: 'forestry:sturdy_machine'
        }).id('kubejs:squeezer_s3')

    event.custom({
        "type": "forestry:carpenter",
        "box": {
            "item": 'forestry:impregnated_casing'
        },
        "liquid": {
            "Amount": 5000,
            "FluidName": "minecraft:water"
        },
        "recipe": {
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "X": {
                    "tag": "forge:gems/diamond"
                },
                "Y": {
                    "item": "forestry:sturdy_machine"
                }
            },
            "pattern": [
                "X X",
                " Y ",
                "X X"
            ],
            "result": {
                "item": "forestry:hardened_machine"
            },
            "show_notification": true
        },
        "time": 150
    }).id('kubejs:hardened_machine_s3')

    event.custom({
        "type": "forestry:fabricator",
        "molten": {
            "Amount": 500,
            "FluidName": "forestry:glass"
        },
        "plan": [],
        "recipe": {
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "tag": "forge:ingots/bronze"
                },
                "B": {
                    "item": 'forestry:circuit_board_intricate'
                },
                "E": {
                    "item": 'forestry:electron_tube_emerald'
                },
                "A": {
                    "item": 'forestry:hardened_machine'
                }
            },
            "pattern": [
                "#E#",
                "BAB",
                "#E#"
            ],
            "result": {
                "item": "forestry:flexible_casing"
            },
            "show_notification": true
        }
    }).id('kubejs:flexible_casing_s3')

}