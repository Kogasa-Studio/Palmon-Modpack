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

    var t = 'celestial_core:virtual_gold_ingot'
    event.recipes.createSequencedAssembly([
        'kubejs:alpha_framework',
    ], t, [
        event.recipes.createCutting(t, t),
        event.recipes.createFilling(t, [t, Fluid.of('createaddition:seed_oil', 500)]),
        event.recipes.createPressing(t, t),
        event.recipes.createFilling(t, [t, Fluid.of('minecraft:water', 1000)]),
        event.recipes.createPressing(t, t),
        event.recipes.createPressing(t, t)
    ]).transitionalItem(t)
        .loops(2)
        .id('kubejs:create_alpha_framework_1')

    event.recipes.createSequencedAssembly([
            'kubejs:alpha_framework',
        ], t, [
            event.recipes.createCutting(t, t),
            event.recipes.createFilling(t, [t, Fluid.of('immersiveengineering:plantoil', 500)]),
            event.recipes.createPressing(t, t),
            event.recipes.createFilling(t, [t, Fluid.of('minecraft:water', 1000)]),
            event.recipes.createPressing(t, t),
            event.recipes.createPressing(t, t)
        ]).transitionalItem(t)
            .loops(2)
            .id('kubejs:create_alpha_framework_2')
}