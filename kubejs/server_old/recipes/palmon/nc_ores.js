ServerEvents.recipes(event => {
    ncOre({ "tag": 'forge:ingots/copper', "count": 1 },
        [{ "item": 'nuclearcraft:lithium_ore', "count": 1 }, { "item": 'nuclearcraft:magnesium_ore', "count": 1 }, { "item": 'nuclearcraft:boron_ore', "count": 1 }])

    ncOre({ "tag": 'forge:ingots/cast_iron', "count": 1 },
        [{ "item": 'nuclearcraft:magnesium_ore', "count": 1 }, { "item": 'nuclearcraft:boron_ore', "count": 1 }, { "item": 'nuclearcraft:thorium_ore', "count": 1 }])

    ncOre({ "tag": 'forge:ingots/gold', "count": 1 },
        [{ "item": 'nuclearcraft:boron_ore', "count": 1 }, { "item": 'nuclearcraft:thorium_ore', "count": 1 }, { "item": 'nuclearcraft:cobalt_ore', "count": 1 }])

    function ncOre(input, outputs) {
        event.custom({
            "type": "palmon:processing",
            "category": "misc",
            "focus_stat": "SPECIAL_ATTACK",
            "min_level": 40,
            "required_type": "psychic",
            "base_hp": 0,
            "base_atk": 0,
            "base_def": 0,
            "base_spa": 60,
            "base_spd": 0,
            "base_spe": 0,
            "area_blocks": [
                {
                    "item": 'nuclearcraft:manufactory'
                },
                {
                    "item": 'minecraft:piston'
                },
                {
                    "item": 'minecraft:sticky_piston'
                }
            ],
            "block_count": 3,
            "input_items": [
                {
                    "item": "palmon:stone",
                    "count": 12
                },
                input
            ],
            "input_power": 10000,
            "input_fluid": null,
            "tick": 2000,
            "result_items": outputs
        })
    }
})