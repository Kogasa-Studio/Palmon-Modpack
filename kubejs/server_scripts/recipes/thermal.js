ServerEvents.recipes(event => {
  event.recipes.thermal.press('thermal:diamond_gear',
    ['4x minecraft:diamond',
      'thermal:press_gear_die'])
    .energy(9600)

  event.custom({
    "type": "thermal:smelter",
    "ingredients": [
      {
        "item": "ad_astra:ostrum_nugget",
        "count": 1
      },
      {
        "item": "minecraft:andesite",
        "count": 1
      }
    ],
    "result": [
      {
        "item": "create:andesite_alloy",
        "count": 1
      }
    ],
    "energy": 3200,
    "conditions": [
      {
        "type": "thermal:flag",
        "flag": "mod_create"
      }
    ]
  })
})