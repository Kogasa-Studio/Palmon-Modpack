/**
 * @param {Internal.RecipesEventJS} event
 */
function s4TR(event) {

    event.shaped('kubejs:basic_machine_frame', [
        'ABA',
        'ACA',
        'ADA'
    ],
        {
            A: 'techreborn:insulated_copper_cable',
            B: 'kubejs:essence_computation_frame',
            C: 'techreborn:basic_machine_frame',
            D: 'industrialforegoing:machine_frame_simple'
        }).id('kubejs:basic_machine_frame_s4')

    event.recipes.thermal.smelter('2x kubejs:superconducting_coil_type_1',
        ['7x techreborn:cupronickel_heating_coil', '5x thermal:rf_coil', '3x techreborn:electronic_circuit']
    ).energy(76800)
        .id('kubejs:superconducting_coil_type_1_s4')
}