ServerEvents.recipes(event => {


    
    event.recipes.createMechanicalCrafting('kubejs:scranton_reality_anchor', [
        "IIIIIII",
        "ABACABA",
        "ADEFEDA",
        "AGAHAGA",
        "ADEFEDA",
        "ABACABA",
        "IIIIIII"
    ], {
        A: 'kubejs:beryllium_bronze_alloy',
        B: 'cataclysm:cursium_ingot',
        C: 'ae2:quantum_entangled_singularity',
        D: 'cataclysm:ignitium_ingot',
        E: 'integratedterminals:chorus_glass',
        F: 'occultism:storage_stabilizer_tier3',
        G: 'cataclysm:witherite_ingot',
        H: 'ae2:cell_component_256k',
        I: 'ad_astra:calorite_plate'
    })

    
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