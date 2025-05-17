ItemEvents.modification(event => {
  // food

  // weapons
  event.modify('avaritia:blaze_pickaxe', item => {
    item.tier = tier => {
        tier.attackDamageBonus = 0

    }
  })

  // event.modify('stalwart_dungeons:tungsten_sword', item => {
  //   item.attackDamage = 11
  // })

  // event.modify('dustandash:titanium_alloy_sword', item => {
  //   item.attackDamage = 14
  //   item.attackSpeed = -1.8
  //   item.fireResistant = true
  // })

  // event.modify('dustandash:titanium_alloy_great_sword', item => {
  //   item.attackDamage = 19
  //   item.attackSpeed = -2.9
  //   item.fireResistant = true
  // })

  // event.modify('botania:terra_sword', item => {
  //   item.attackDamage = 17
  //   item.attackSpeed = -1.0
  //   item.fireResistant = true
  // })

  // event.modify('botania:star_sword', item => {
  //   item.attackDamage = 19
  //   item.attackSpeed = -2.2
  //   item.fireResistant = true
  // })

  // event.modify('botania:thunder_sword', item => {
  //   item.attackDamage = 15
  //   item.attackSpeed = -0.4
  //   item.fireResistant = true
  // })

  // event.modify('dustandash:gale_otaijutsu', item => {
  //   item.attackDamage = 15
  //   item.attackSpeed = -0.8
  //   item.fireResistant = true
  // })

  // event.modify('dustandash:sunburn_mega_sword', item => {
  //   item.attackDamage = 22
  //   item.attackSpeed = -3.1
  //   item.fireResistant = true
  // })

  // event.modify('dustandash:lord_of_blood', item => {
  //   item.attackDamage = 12
  //   item.attackSpeed = -2.6
  //   item.fireResistant = true
  // })

  // event.modify('dustandash:judgement', item => {
  //   item.attackSpeed = -2.2
  //   item.fireResistant = true
  // })

  // event.modify('dustandash:white_lightning', item => {
  //   item.attackDamage = 22
  //   item.attackSpeed = -1.2
  //   item.fireResistant = true
  // })

  // event.modify('dustandash:rotten_blade', item => {
  //   item.attackDamage = 24
  //   item.attackSpeed = -1.8
  //   item.fireResistant = true
  // })

})
