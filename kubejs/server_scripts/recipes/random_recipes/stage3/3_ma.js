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

}