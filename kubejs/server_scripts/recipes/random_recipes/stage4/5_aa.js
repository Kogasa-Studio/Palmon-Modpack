/**
 * @param {Internal.RecipesEventJS} event
 */
function s4AA(event) {
  event.shaped('ad_astra:cryo_freezer', [
    'ADA',
    'BCB',
    'ADA'
  ],
    {
      A: '#forge:plates/ostrum',
      B: 'minecraft:blue_ice',
      C: '#industrialforegoing:machine_frame/simple',
      D: 'kubejs:reinforced_sheet'
    }).id('kubejs:cryo_freezer_s4')

  event.recipes.thermal.smelter('kubejs:reinforced_sheet',
    ['#industrialforegoing:machine_frame/simple', '#forge:plates/terrasteel', '#forge:plates/elementium']
  ).energy(102400)
    .id('kubejs:reinforced_sheet_s4')

}
