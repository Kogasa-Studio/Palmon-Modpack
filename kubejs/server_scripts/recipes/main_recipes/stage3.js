ServerEvents.recipes(event => {
  event.replaceInput([
    { id: 'gendustry:genetics_processor' }
  ],
    'minecraft:ender_pearl',
    'forestry:flexible_casing'
  )
  event.replaceInput([
    { id: 'gendustry:industrial_apiary' }
  ],
    'forestry:sturdy_machine',
    'forestry:hardened_machine'
  )
  event.replaceInput([
    { id: 'gendustry:industrial_apiary' }
  ],
    'minecraft:piston',
    'forestry:apiary'
  )

  event.shaped('dimdungeons:block_gilded_portal', [
    ' A ',
    'ABA',
    ' A '
  ],
    {
      A: 'kubejs:stable_desh_ingot',
      B: 'minecraft:chiseled_stone_bricks'
    }).id('kubejs:block_gilded_portal_s3')

  event.shaped('immersiveengineering:hammer', [
    ' AC',
    ' BA',
    'B  '
  ],
    {
      A: 'kubejs:present_alloy',
      B: '#forge:rods',
      C: 'create:andesite_alloy'
    }).id('kubejs:hammer_s3')

  event.shaped('2x thermal:machine_frame', [
    'ABA',
    'BCB',
    'ABA'
  ],
    {
      A: '#forge:plates/steel',
      B: '#forge:gears/tin',
      C: 'kubejs:beta_framework'
    }).id('kubejs:machine_frame_s3')

  event.recipes.thermal.smelter('2x kubejs:present_alloy',
    ['3x #forge:ingots/signalum', '2x #forge:ingots/lumium', '#forge:ingots/enderium']
  ).energy(9600)
    .id('kubejs:present_alloy_s3')

  event.recipes.thermal.smelter('3x create:andesite_alloy',
    ['2x #forge:plates/zinc', '#forge:plates/steel', '2x occultism:otherstone']
  ).energy(6400)
    .id('kubejs:andesite_alloy_s3')

  event.recipes.thermal.smelter('2x kubejs:stable_desh_ingot',
    ['2x #forge:plates/desh', 'kubejs:present_alloy', 'celestial_core:ocean_ingot']
  ).energy(12800)
    .id('kubejs:stable_desh_ingot_s3')

  event.custom({
    "type": "malum:spirit_infusion",
    "extra_items": [
      {
        "count": 4,
        "item": "malum:null_slate"
      },
      {
        "count": 1,
        "item": 'malum:runewood_tablet'
      },
      {
        "count": 1,
        "item": 'malum:soulwood_tablet'
      }
    ],
    "input": {
      "count": 1,
      "item": "malum:tainted_rock_tablet"
    },
    "output": {
      "item": "malum:void_tablet"
    },
    "spirits": [
      {
        "type": "eldritch",
        "count": 4
      }
    ]
  }).id('kubejs:void_tablet_s3')

  event.custom({
    "type": "malum:spirit_infusion",
    "extra_items": [
      {
        "count": 4,
        "item": "malum:runewood_planks"
      },
      {
        "count": 4,
        "item": 'kubejs:hallowed_soul_steel_ingot'
      }
    ],
    "input": {
      "count": 1,
      "item": "malum:runewood_item_pedestal"
    },
    "output": {
      "item": "malum:runic_workbench"
    },
    "spirits": [
      {
        "type": "aqueous",
        "count": 16
      },
      {
        "type": "sacred",
        "count": 8
      }
    ]
  }).id('kubejs:runic_workbench_s3')

  event.custom({
    "type": "ad_astra:nasa_workbench",
    "ingredients": [
      {
        "item": "ad_astra:rocket_nose_cone"
      },
      {
        "item": 'kubejs:gamma_framework'
      },
      {
        "item": 'kubejs:gamma_framework'
      },
      {
        "item": 'ad_astra:desh_block'
      },
      {
        "item": 'ad_astra:desh_block'
      },
      {
        "item": 'kubejs:gamma_framework'
      },
      {
        "item": 'kubejs:gamma_framework'
      },
      {
        "item": 'kubejs:gamma_framework'
      },
      {
        "item": 'ad_astra:desh_tank'
      },
      {
        "item": 'ad_astra:desh_tank'
      },
      {
        "item": 'kubejs:gamma_framework'
      },
      {
        "item": 'ad_astra:desh_engine'
      },
      {
        "item": 'kubejs:gamma_framework'
      },
      {
        "item": 'ad_astra:desh_engine'
      }
    ],
    "result": {
      "count": 1,
      "id": "ad_astra:tier_2_rocket"
    }
  }).id('kubejs:tier_2_rocket_s3')
})