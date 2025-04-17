/**
 * @param {Internal.RecipesEventJS} event
 */
function s4Occ(event) {

    event.shapeless('occultism:chalk_red_impure', ['occultism:chalk_white_impure', 'occultism:afrit_essence', '#forge:dusts/blaze', '#industrialforegoing:machine_frame/simple']).id('kubejs:chalk_red_impure_s4')

    event.recipes.occultism.ritual(
        '2x kubejs:marid_binded_gem',
        [
            'kubejs:essence_computation_frame',
            'kubejs:essence_computation_frame',
            'occultism:spirit_attuned_gem',
            'occultism:spirit_attuned_gem',
            'kubejs:present_alloy',
            'occultism:storage_stabilizer_tier4',
            'jaopca:processors.terrasteel',
            'jaopca:processors.elementium'
        ],
        'occultism:book_of_binding_bound_marid',
        'occultism:craft_marid',
        200
    ).id("kubejs:occ_marid_binded_gem_0")
}