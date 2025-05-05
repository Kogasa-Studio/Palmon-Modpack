ServerEvents.recipes(event => {
    event.recipes.create.crushing([
        Item.of('kubejs:epsilon_dust'),
        Item.of('kubejs:epsilon_dust').withChance(0.75),
        Item.of('kubejs:epsilon_dust').withChance(0.5),
        Item.of('kubejs:epsilon_dust').withChance(0.4),
        Item.of('kubejs:epsilon_dust').withChance(0.3),
        Item.of('kubejs:epsilon_dust').withChance(0.2),
        Item.of('kubejs:epsilon_dust').withChance(0.1)
    ], 'kubejs:epsilon_framework')
        .id('kubejs:epsilon_dust_s6')

})