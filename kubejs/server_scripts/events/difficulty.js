const healthMultiplier = [1.0, 1.7, 2.4, 3.8, 5.6, 8.0, 10.0, 20.0]
const healthAdder = [10, 20, 40, 80, 120, 160, 240, 480]

const attackMultiplier = [1.0, 1.2, 1.4, 1.6, 2.0, 2.4, 3.6, 7.2]
const attackAdder = [2, 4, 6, 10, 14, 20, 26, 48]

const armorMultiplier = [1.0, 1.05, 1.1, 1.175, 1.25, 1.35, 1.5, 2.0]
const armorAdder = [0, 2, 4, 7, 10, 14, 20, 30]

const dimMultiplier = {
    'minecraft:the_nether': 1.0,
    'kubejs:overworld': 1.1,
    'dimdungeons:dungeon_dimension': 1.4,
    'minecraft:the_end': 1.5,
    'deeperdarker:otherside': 1.6,
    'rats:ratlantis': 2.0
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
                    entity.setAttributeBaseValue(health, ((entity.getAttribute(health).getBaseValue() + healthAdder[diffNum]) * healthMultiplier[diffNum]) * muti)
                    entity.setHealth(entity.getMaxHealth())

                }

                if (entity.attributes.hasAttribute(attack)) {
                    entity.setAttributeBaseValue(attack, ((entity.getAttribute(attack).getBaseValue() + attackAdder[diffNum]) * attackMultiplier[diffNum]) * muti)

                }

                if (entity.attributes.hasAttribute(armor)) {
                    entity.setAttributeBaseValue(armor, ((entity.getAttribute(armor).getBaseValue() + armorAdder[diffNum]) * armorAdder[diffNum]) * muti)

                }

            }
        }

    }

})