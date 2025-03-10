/**
 * @param {Internal.RecipesEventJS} event
 */
function s1create(event) {
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item": "tfc:brick/andesite"
        },
        "cast_consumed": true,
        "cooling_time": 80,
        "fluid": {
            "amount": 40,
            "tag": "forge:molten_steel"
        },
        "result": "create:andesite_alloy"
    }).id('kubejs:casting_table_andesite_alloy')

}