/**
 * @param {Internal.RecipesEventJS} event
 */
function s2AE(event) {
    event.shaped('ae2:inscriber', [
        'ABA',
        ' CA',
        'ABA'
    ],
        {
            A: '#forge:plates/dawnstone',
            B: '#immersiveengineering:scaffoldings/steel',
            C: 'embers:stamper'
        }).id('kubejs:ae_inscriber_s2')

    event.shaped('ae2:controller', [
        'ABA',
        'BCB',
        'ABA'
    ],
        {
            A: '#forge:plates/dawnstone',
            B: '#forge:gems/fluix',
            C: 'ae2:engineering_processor'
        }).id('kubejs:ae_controller_s2')

    event.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
            "item": 'minecraft:respawn_anchor'
        },
        "cast_consumed": true,
        "cooling_time": 600,
        "fluid": {
            "amount": 1440,
            "tag": 'forge:molten_dawnstone'
        },
        "result": 'ae2:mysterious_cube'
    }).id('kubejs:ae_mysterious_cube_s2')

    event.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "fluid",
            "tag": 'forge:molten_dawnstone'
        },
        "ingredients": [
            {
                "item": 'minecraft:quartz'
            },
            {
                "item": 'malum:blazing_quartz'
            },
            {
                "item": 'minecraft:redstone'
            }
        ],
        "result": {
            "count": 1,
            "item": 'ae2:certus_quartz_crystal'
        }
    }).id('kubejs:ae_certus_quartz_crystal_s2')

    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "tag": 'forge:storage_blocks/fluix'
          },
          "top": {
            "item": 'jaopcaextras:extra_press'
          }
        },
        "mode": "inscribe",
        "result": {
          "item": 'jaopca:circuits.fluix'
        }
      }).id('kubejs:ae_circuits_fluix_s2')

    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "bottom": {
            "item": 'ae2:logic_processor'
          },
          "middle": {
            "tag": 'ae2:interface'
          },
          "top": {
            "item": 'jaopca:circuits.fluix'
          }
        },
        "mode": "press",
        "result": {
          "item": 'jaopca:processors.fluix'
        }
      }).id('kubejs:ae_processors_fluix_s2')

}