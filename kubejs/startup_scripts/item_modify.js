ItemEvents.modification(event => {
  event.modify('adventuresmod:cobalt_sword', item => {
    item.attackDamage = 19
    item.attackSpeed = -2.2
  })

  event.modify('adventuresmod:mythril_sword', item => {
    item.attackDamage = 21
    item.attackSpeed = -2.2
  })

  event.modify('adventuresmod:runic_sword', item => {
    item.attackDamage = 20
    item.attackSpeed = -1.6
  })

  event.modify('adventuresmod:voidarium_sword', item => {
    item.attackDamage = 22
    item.attackSpeed = -2.6
  })

  event.modify('celestial_core:sakura_sword', item => {
    item.attackDamage = 13
  })

  event.modify('celestial_core:virtual_gold_sword', item => {
    item.attackDamage = 15
  })

  event.modify('adventuresmod:enchanted_sword', item => {
    item.attackDamage = 14
  })

  event.modify('stalwart_dungeons:tungsten_sword', item => {
    item.attackDamage = 11
  })

  event.modify('adventuresmod:molten_sword', item => {
    item.attackDamage = 12
  })

  event.modify('dustandash:titanium_alloy_sword', item => {
    item.attackDamage = 14
    item.attackSpeed = -1.8
    item.fireResistant = true
  })

  event.modify('dustandash:titanium_alloy_great_sword', item => {
    item.attackDamage = 19
    item.attackSpeed = -2.9
    item.fireResistant = true
  })

  event.modify('botania:terra_sword', item => {
    item.attackDamage = 17
    item.attackSpeed = -1.0
    item.fireResistant = true
  })

  event.modify('botania:star_sword', item => {
    item.attackDamage = 19
    item.attackSpeed = -2.2
    item.fireResistant = true
  })

  event.modify('botania:thunder_sword', item => {
    item.attackDamage = 15
    item.attackSpeed = -0.4
    item.fireResistant = true
  })

  event.modify('dustandash:gale_otaijutsu', item => {
    item.attackDamage = 15
    item.attackSpeed = -0.8
    item.fireResistant = true
  })

  event.modify('dustandash:sunburn_mega_sword', item => {
    item.attackDamage = 22
    item.attackSpeed = -3.1
    item.fireResistant = true
  })

  event.modify('dustandash:lord_of_blood', item => {
    item.attackDamage = 12
    item.attackSpeed = -2.6
    item.fireResistant = true
  })

  event.modify('dustandash:judgement', item => {
    item.attackSpeed = -2.2
    item.fireResistant = true
  })

  event.modify('dustandash:white_lightning', item => {
    item.attackDamage = 22
    item.attackSpeed = -1.2
    item.fireResistant = true
  })

  event.modify('dustandash:rotten_blade', item => {
    item.attackDamage = 24
    item.attackSpeed = -1.8
    item.fireResistant = true
  })

})