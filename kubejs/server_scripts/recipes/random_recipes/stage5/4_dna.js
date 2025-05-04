/**
 * @param {Internal.RecipesEventJS} event
 */
function s5DNA(event) {
    
    event.smithing('dustandash:centrifuge', 'dustandash:iron_structural_components', 'nuclearcraft:centrifuge', 'dustandash:ash_steel_ingot').id('kubejs:centrifuge_s5')

    event.shaped('dustandash:ionizer', [
        ' BA',
        'ACA',
        'EDE'
    ],
        {
            A: 'dustandash:ash_steel_cylinder',
            B: 'dustandash:redstone_vacuum_tube',
            C: 'nuclearcraft:electrolyzer',
            D: 'kubejs:collapse_prediction',
            E: 'kubejs:end_steel'
        }).id('kubejs:ionizer_s5')

}