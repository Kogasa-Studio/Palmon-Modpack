/**
 * @param {Internal.RecipesEventJS} event
 */
function s1Occ(event) {
    event.shaped('supplementaries:planter', [
        'ABA',
        'ABA',
        'AAA'
    ],
        {
            A: '#forge:ingots/brick',
            B: '#tfc:dirt'
        }).id('kubejs:planter_s1_occ')

    event.recipes.tfc.barrel_sealed(4800)
        .outputItem('occultism:datura_seeds')
        .inputs('#tfc:seeds', TFC.fluidStackIngredient('tfc:limewater', 2000))
        .id('kubejs:datura_seeds_s1_occ')
    
}