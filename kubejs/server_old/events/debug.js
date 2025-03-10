ItemEvents.rightClicked('botania:lens_storm', event => {
    console.log("STARTING DUMPING WHITELIST")
    const json = {
        values: Ingredient.of('#kubejs:overworld_item_whitelist').itemIds
    }
    JsonIO.write("kubejs\\client_scripts\\overworld_item_whitelist.json", json)
    console.log("FINISHED")
    event.player.tell("Dumped overworld_item_whitelist")
    
})