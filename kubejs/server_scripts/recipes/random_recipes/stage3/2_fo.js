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

}