// PlayerEvents.inventoryChanged(event => {
//     if (!event.player.stages.has(global.overworldItemStage) &&
//         global.modBlackList.has(String(event.item.getItem().getIdLocation().getNamespace())) &&
//         !Ingredient.of('#kubejs:overworld_item_whitelist').test(event.item)) {
//             const player = event.player
            
//             player.getInventory().setItem(player.getInventory().findSlotMatchingItem(event.item), 'minecraft:air')
//             const remaining = player.getEnderChestInventory().addItem(event.item)

//             if (!remaining.isEmpty()) {
//                 player.tell(Text.literal(remaining.getDisplayName()).append(Text.translatable('ui.kubejs.banned_item_disappeared')))
//             } else {
//                 event.player.tell([Text.translate("ui.kubejs.banned").gold()])
//             }

//     }
// })