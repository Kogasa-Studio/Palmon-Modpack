ServerEvents.recipes(event => {
  event.recipes.thermal.press('thermal:diamond_gear',
    ['4x minecraft:diamond',
      'thermal:press_gear_die'])
    .energy(9600)
})