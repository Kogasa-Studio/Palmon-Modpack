/**
 * @param {Internal.RecipesEventJS} event
 */
function s5NCF(event) {

  event.shaped('nuclearcraft:fusion_reactor_casing', [
    'ABA',
    'BCB',
    'ABA'
  ],
    {
      A: 'nuclearcraft:plate_advanced',
      B: 'jaopca:plates.manyullyn',
      C: 'kubejs:collapse_prediction'
    }).id('kubejs:fusion_reactor_casing_s5')

  var t = 'kubejs:helium_3_crystal'
  event.recipes.createSequencedAssembly([
    'kubejs:helium_3_crystal_infinity',
  ], t, [
    event.recipes.createFilling(t, [t, Fluid.of('kubejs:hybrid_fuel', 50)]),
    event.recipes.createPressing(t, t)
  ]).transitionalItem(t)
    .loops(10)
    .id('kubejs:helium_3_crystal_infinity_s5')

  event.custom({
    "type": "nuclearcraft:crystallizer",
    "inputFluids": [
      {
        "amount": 4000,
        "tag": 'forge:helium_3'
      }
    ],
    "output": [
      {
        "item": "kubejs:helium_3_crystal"
      }
    ],
    "powerModifier": 1.0,
    "radiation": 1.0,
    "timeModifier": 1.5
  }).id('kubejs:helium_3_crystal_s5')

}    