/**
 * @param {Internal.RecipesEventJS} event
 */
function s3Cr(event) {
    event.recipes.create.item_application('create:brass_casing',
        ['create:andesite_casing', 'kubejs:stable_desh_ingot']
    ).id('kubejs:cr_brass_casing_s3')

    event.recipes.create.mechanical_crafting('kubejs:elite_mechanism_final', [
        ' ABC ',
        ' DED ',
        'FFFFF'
      ], {
        A: 'createaddition:electrum_amulet',
        B: 'create:electron_tube',
        C: 'createaddition:small_light_connector',
        D: 'kubejs:stable_desh_ingot',
        E: 'kubejs:elite_mechanism_plus',
        F: '#forge:plates/brass',
      }).id('kubejs:cr_elite_mechanism_final_s3')

    var t = 'kubejs:beta_framework'
    event.recipes.createSequencedAssembly([
        'kubejs:elite_mechanism',
    ], t, [
        event.recipes.createDeploying(t, [t, 'create:brass_casing']),
        event.recipes.createCutting(t, t),
        event.recipes.createDeploying(t, [t, 'create:precision_mechanism']),
        event.recipes.createDeploying(t, [t, 'kubejs:present_alloy']),
        event.recipes.createDeploying(t, [t, 'create:sturdy_sheet']),
        event.recipes.createDeploying(t, [t, 'create:sturdy_sheet']),
        event.recipes.createPressing(t, t)
    ]).id('kubejs:cr_elite_mechanism_s3')
        .transitionalItem(t)
        .loops(2)

    t = 'kubejs:elite_mechanism'
    event.recipes.createSequencedAssembly([
        'kubejs:elite_mechanism_plus',
    ], t, [
        event.recipes.createDeploying(t, [t, 'createaddition:biomass_pellet']),
        event.recipes.createDeploying(t, [t, 'createaddition:capacitor']),
        event.recipes.createDeploying(t, [t, 'create:brass_sheet']),
    ]).id('kubejs:cr_elite_mechanism_plus_s3')
        .transitionalItem(t)
        .loops(3)

}