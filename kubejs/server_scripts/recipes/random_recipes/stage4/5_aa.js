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

  event.custom({
    "type": "ae2:inscriber",
    "ingredients": {
      "bottom": {
        "item": 'kubejs:reinforced_sheet'
      },
      "middle": {
        "item": 'ae2:cell_component_1k'
      },
      "top": {
        "tag": 'forge:circuits/calorite'
      }
    },
    "mode": "press",
    "result": {
      "item": 'jaopca:processors.calorite'
    }
  }).id('kubejs:processors_calorite_s4')

  event.custom({
    "type": "industrialforegoing:dissolution_chamber",
    "input": [
      {
        "item": 'ad_astra:calorite_plate'
      },
      {
        "item": 'ad_astra:calorite_plate'
      },
      {
        "item": 'ad_astra:calorite_plate'
      },
      {
        "item": 'kubejs:essence_computation_frame'
      },
      {
        "tag": 'forge:circuits/elementium'
      }
    ],
    "inputFluid": "{Amount:500,FluidName:\"ad_astra:cryo_fuel\"}",
    "output": {
      "count": 3,
      "item": 'jaopca:circuits.calorite'
    },
    "processingTime": 600
  }).id('kubejs:circuits_calorite_s4')

  event.custom({
    "type": "ad_astra:nasa_workbench",
    "ingredients": [
      {
        "item": "ad_astra:rocket_nose_cone"
      },
      {
        "item": 'kubejs:reinforced_sheet'
      },
      {
        "item": 'kubejs:reinforced_sheet'
      },
      {
        "item": 'kubejs:reinforced_sheet'
      },
      {
        "item": 'kubejs:reinforced_sheet'
      },
      {
        "tag": "ad_astra:ostrum_blocks"
      },
      {
        "tag": "ad_astra:ostrum_blocks"
      },
      {
        "item": 'kubejs:reinforced_sheet'
      },
      {
        "item": "ad_astra:ostrum_tank"
      },
      {
        "item": "ad_astra:ostrum_tank"
      },
      {
        "item": 'kubejs:reinforced_sheet'
      },
      {
        "item": "ad_astra:rocket_fin"
      },
      {
        "item": "ad_astra:ostrum_engine"
      },
      {
        "item": "ad_astra:rocket_fin"
      }
    ],
    "result": {
      "count": 1,
      "id": "ad_astra:tier_3_rocket"
    }
  }).id('kubejs:rocket_t3_s4')

}
