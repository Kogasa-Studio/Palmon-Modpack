const healthMultiplier = [1, 1.7, 2.4, 3.8, 5.6, 8.0, 10.0, 20.0]
const attackMultiplier = [1, 1.5, 2.0, 2.8, 3.6, 5.2, 7.4, 12.0]
const armorAdder = [0, 4, 7, 10, 14, 20, 28, 48]

const dimMultiplier = {
    'kubejs:overworld': 1.1,
    'dimdungeons:dungeon_dimension': 1.4,
    'deeperdarker:otherside': 1.6,
    'minecraft:the_end': 2.0,
    'adventuresmod:mythica': 3.0,
    'rats:ratlantis': 4.0
}

const health = "minecraft:generic.max_health"
const attack = "minecraft:generic.attack_damage"
const armor = "minecraft:generic.armor"

EntityEvents.spawned(event => {
    /**
     * @type {Internal.LivingEntity}
     */
    var entity = event.entity

    if (entity && entity.isLiving()) {
        var name = entity.type
        if (entity.isMonster() && !global.entityBlackList.has(name) && !entity.persistentData.contains('diffLevel')) {
            var player = entity.getLevel().getNearestPlayer(entity, 240)
            if (player) {
                var diffNum = 0
                player.stages.getAll().forEach(element => {
                    if (element.startsWith(global.diffLevelStage)) {
                        diffNum = Math.max(diffNum, parseInt(element.split('_')[2]))
                    }
                })

                entity.persistentData.putInt('diffLevel', diffNum)
                let muti = 1
                if (dimMultiplier[entity.level.getDimension()]) {
                    muti = dimMultiplier[entity.level.getDimension()]
                }
                
                if (entity.attributes.hasAttribute(health)) {
                    entity.setAttributeBaseValue(health, (entity.getAttribute(health).getBaseValue() * healthMultiplier[diffNum]) * muti)
                    entity.setHealth(entity.getMaxHealth())
                }

                if (entity.attributes.hasAttribute(attack)) {
                    entity.setAttributeBaseValue(attack, (entity.getAttribute(attack).getBaseValue() * attackMultiplier[diffNum]) * muti)
                }

                if (entity.attributes.hasAttribute(armor)) {
                    entity.setAttributeBaseValue(armor, (entity.getAttribute(armor).getBaseValue() + armorAdder[diffNum]) * muti)
                }

            }
        }

    }

})