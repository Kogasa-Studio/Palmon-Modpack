const ovaArmorModify = "overall_armor_modifier"
const ovaArmorModifyHash = hashCode(ovaArmorModify)
const ovaArmorModifyUUID = new $UUID(ovaArmorModifyHash, ovaArmorModifyHash)

const ovaArmorModifer = new $AttributeModifier(
    ovaArmorModifyUUID,
    "overall_armor_modifier",
    -0.5,
    "multiply_total"
)

PlayerEvents.tick(event => {
    if (event.player.age % 20 == 0) {
        try {
            event.player.getAttribute("minecraft:generic.armor").removeModifier(ovaArmorModifyUUID)

        }
        finally {
            event.player.getAttribute("minecraft:generic.armor").addPermanentModifier(ovaArmorModifer)

        }
    
    }

})