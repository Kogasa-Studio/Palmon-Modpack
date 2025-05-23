/**
 * @param {Internal.RecipesEventJS} event
 */
function s4ARS(event) {

    event.shaped('ars_nouveau:imbuement_chamber', [
        'ACA',
        'BDB',
        'BEB'
    ],
        {
            A: '#forge:ingots/manasteel',
            B: 'ars_nouveau:archwood_planks',
            C: 'ae2:logic_processor',
            D: 'kubejs:essence_computation_frame',
            E: 'industrialforegoing:machine_frame_simple',
        }).id('kubejs:imbuement_chamber_s4')
}