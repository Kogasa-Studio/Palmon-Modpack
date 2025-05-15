StartupEvents.modifyCreativeTab("kubejs:tab", event => {
    event.displayName = Text.translatable("kubejs.modpack_name")
})

StartupEvents.registry("creative_mode_tab", tab => {
    
    tab.create("kubejs:palmon_otherworld_relics")
        .icon(() => Item.of('kubejs:scranton_reality_anchor'))
        .content(() => Ingredient.of('#curios:otherworld_relics').itemIds.toArray())
        .displayName(Text.translatable("curios.identifier.otherworld_relics"))

    })

