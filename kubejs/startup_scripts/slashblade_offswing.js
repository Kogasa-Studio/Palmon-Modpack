const InteractionHand = Java.loadClass("net.minecraft.world.InteractionHand")
const EquipmentSlot = Java.loadClass("net.minecraft.world.entity.EquipmentSlot")
const Attributes = Java.loadClass("net.minecraft.world.entity.ai.attributes.Attributes")
const Operation = Java.loadClass("net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation")

ForgeModEvents.onEvent("mods.flammpfeil.slashblade.event.SlashBladeEvent$HitEvent", event => {
    global.onSBHit(event)

})

global.onSBHit = event => {
    if (event.target) {
        /**
         * @type {Internal.ServerPlayer}
        */
        let player = event.user
        /**
         * @type {Internal.LivingEntity}
        */
        let target = event.target
        let stack = player.getOffHandItem()
        let slashblade = player.getMainHandItem()

        if (stack && !stack.isEmpty() && stack.idLocation.getNamespace() != 'slashblade' && !player.getCooldowns().isOnCooldown(stack.getItem())) {
            target.invulnerableTime = 0
            // 造成伤害
            let damage = 1
            let atkSpeed = 0;
            stack.getAttributeModifiers(EquipmentSlot.MAINHAND).forEach((k, v) => {
                if (k == Attributes.ATTACK_DAMAGE) {
                    if (v.getOperation() == Operation.ADDITION) {
                        damage += v.amount
                    }
                } else if (k == Attributes.ATTACK_SPEED) {
                    if (v.getOperation() == Operation.ADDITION) {
                        atkSpeed += v.amount
                    }
                }

            })

            atkSpeed = -(0.42 * atkSpeed * atkSpeed * atkSpeed) + (0.07 * atkSpeed * atkSpeed) - (0.8 * atkSpeed) + 8.14

            player.tell("d: " +  damage + ", cd: " + atkSpeed)

            target.attack(player.damageSources().playerAttack(player), damage)
            player.swinging = false
            player.swing(InteractionHand.OFF_HAND, true)
            // 特效
            stack.getItem().onLeftClickEntity(stack, player, target)

            player.getCooldowns().addCooldown(stack.getItem(), Math.max(2, atkSpeed))

        }

    }
}
