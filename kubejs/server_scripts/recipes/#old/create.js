ServerEvents.recipes(event => {
    
    var t = 'kubejs:reinforced_sheet'
    event.recipes.createSequencedAssembly([
        'kubejs:beryllium_bronze_alloy',
    ], 'kubejs:reinforced_sheet', [
        event.recipes.createDeploying(t, [t, '#forge:ingots/beryllium']),
        event.recipes.createDeploying(t, [t, '#forge:ingots/bronze']),
        event.recipes.createPressing(t, t),
        event.recipes.createDeploying(t, [t, '#forge:ingots/beryllium']),
        event.recipes.createDeploying(t, [t, '#forge:ingots/bronze']),
        event.recipes.createPressing(t, t),
        event.recipes.createDeploying(t, [t, 'ae2:quantum_entangled_singularity'])
    ]).transitionalItem(t)
        .loops(1)

})