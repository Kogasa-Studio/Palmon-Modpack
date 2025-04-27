/**
 * @param {Internal.RecipesEventJS} event
 */
function s5EAW(event) {
    event.shaped('aetherworks:forge_metal_former', [
        'ACA',
        'BBB'
    ],
        {
            A: 'kubejs:end_steel',
            B: 'embers:caminite_plate',
            C: 'kubejs:collapse_prediction'
        }).id('kubejs:forge_metal_former_s5')
}