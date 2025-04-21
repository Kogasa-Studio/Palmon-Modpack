ServerEvents.recipes(event => {

    event.recipes.thermal.smelter('2x kubejs:end_steel',
        ['3x techreborn:sodalite_dust', '5x #forge:ingots/draconium', '2x integrateddynamics:crystalized_chorus_block']
    ).energy(204800)
        .id('kubejs:end_steel_s5')


})