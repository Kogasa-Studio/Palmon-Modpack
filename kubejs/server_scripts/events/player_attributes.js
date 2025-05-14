/**
 * @param {string} attributeKey  要修改的属性名
 * @param {string} modifierKey   用来生成 UUID 的 key
 * @param {() => number} amountProvider 每次调用时动态拿数值的函数
 * @param {string} type          modifier 类型
 */
function createConstantAttributeApplier(attributeKey, modifierKey, amountProvider, type) {
    const keyHash = hashCode(modifierKey)
    const keyUUID = new $UUID(keyHash, keyHash)

    return function apply(player) {

        const amount = amountProvider()

        const modifier = new $AttributeModifier(
            keyUUID,
            modifierKey,
            amount,
            type
        )

        const inst = player.getAttribute(attributeKey)
        for (let m of inst.getModifiers()) {
            if (m.getId().equals(keyUUID)) {
                inst.removeModifier(keyUUID)
                break;
            }
        }
        inst.addPermanentModifier(modifier)
    }
}

global.armorAmmount = 0.0
const armorModifier = createConstantAttributeApplier(
    "minecraft:generic.armor",
    "addition_armor_modifier",
    () => global.armorAmmount,
    "addition"
)

global.armor_toughnessAmmount = 0.0
const armor_toughnessModifier = createConstantAttributeApplier(
    "minecraft:generic.armor_toughness",
    "addition_armor_toughness_modifier",
    () => global.armor_toughnessAmmount,
    "addition"
)

global.movementSpeedAmmount = 0.0
const movementSpeedModifier = createConstantAttributeApplier(
    "minecraft:generic.movement_speed",
    "overall_movement_speed_modifier",
    () => global.movementSpeedAmmount,
    "multiply_total"
)

global.blockReachAmmount = 0.0
const blockReachModifier = createConstantAttributeApplier(
    "forge:block_reach",
    "addition_block_reach_modifier",
    () => global.blockReachAmmount,
    "addition"
)

global.maxManaAmmount = 0.0
const maxManaModifier = createConstantAttributeApplier(
    "ars_nouveau:ars_nouveau.perk.max_mana",
    "overall_max_mana_modifier",
    () => global.maxManaAmmount,
    "multiply_total"
)

global.attack_damageAmmount = 0.0
const attack_damageModifier = createConstantAttributeApplier(
    "minecraft:generic.attack_damage",
    "addition_attack_damage_modifier",
    () => global.attack_damageAmmount,
    "addition"
)

global.attack_speedAmmount = 0.0
const attack_speedModifier = createConstantAttributeApplier(
    "minecraft:generic.attack_speed",
    "overall_attack_speed_modifier",
    () => global.attack_speedAmmount,
    "multiply_total"
)

global.critical_hitAmmount = 0.0
const critical_hitModifier = createConstantAttributeApplier(
    "obscure_api:critical_hit",
    "addition_critical_hit_modifier",
    () => global.critical_hitAmmount,
    "addition"
)

global.max_healthAmmount = 0.0
const max_healthModifier = createConstantAttributeApplier(
    "minecraft:generic.max_health",
    "overall_max_health_modifier",
    () => global.max_healthAmmount,
    "multiply_total"
)

global.healing_powerAmmount = 0.0
const healing_powerModifier = createConstantAttributeApplier(
    "obscure_api:healing_power",
    "overall_healing_power_modifier",
    () => global.healing_powerAmmount,
    "multiply_total"
)

PlayerEvents.tick(event => {
    if (event.player.age % 20 === 0) {
        armorModifier(event.player)
        armor_toughnessModifier(event.player)
        movementSpeedModifier(event.player)
        blockReachModifier(event.player)
        maxManaModifier(event.player)
        attack_damageModifier(event.player)
        attack_speedModifier(event.player)
        critical_hitModifier(event.player)
        max_healthModifier(event.player)
        healing_powerModifier(event.player)

    }
})
