ServerEvents.recipes(event => {
    event.recipes.tfc.barrel_sealed(4800)
        .outputItem('cobblemon:red_apricorn_seed')
        .inputs('#forge:fruits/apple', TFC.fluidStackIngredient('tfc:limewater', 1000))
        
    event.recipes.tfc.barrel_sealed(4800)
        .outputItem('enchanted:mandrake_seeds')
        .inputs('tfc:seeds/onion', TFC.fluidStackIngredient('tfc:limewater', 1000))


    event.recipes.tfc.pot(['cobblemon:medicinal_leek','cobblemon:medicinal_leek','cobblemon:medicinal_leek','cobblemon:medicinal_leek'], Fluid.of('minecraft:water', 1000), 200, 500)
        .outputs(['cobblemon:potion', 'cobblemon:potion'], Fluid.of('minecraft:water', 0))

    event.recipes.tfc.pot(['cobblemon:potion', 'cobblemon:medicinal_leek', 'cobblemon:medicinal_leek', 'cobblemon:medicinal_leek', 'cobblemon:medicinal_leek'], Fluid.of('minecraft:water', 1000), 200, 500)
        .outputs(['cobblemon:ether', 'cobblemon:ether', 'cobblemon:ether'], Fluid.of('minecraft:water', 0))

    event.recipes.tfc.pot(['enchanted:soft_clay_jar'], Fluid.of('minecraft:water', 100), 200, 500)
        .outputs(['enchanted:clay_jar'], Fluid.of('minecraft:water', 0))

    event.recipes.tfc.knapping('2x enchanted:soft_clay_jar', 'tfc:clay', [' X ', 'XXX', 'XXX', 'XXX'])
        .outsideSlotRequired(false)

    })
