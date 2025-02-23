ServerEvents.recipes(event => {
    event.custom({
        "type": "dustandash:milling",
        "step1": false,
        "pattern": [
          "# # #",
          " ### ",
          "##B##",
          " ### ",
          "# # #"
        ],
        "key": {
          "catalyst":
          {
            "item": "dustandash:lacerate_dust"
          },
          "#":
          {
            "item": "botania:mana_diamond"
          },
          "B":
          {
            "item": "dustandash:ash_steel_scrap"
          }
        },
        "output": {
          "item": "industrialforegoing:diamond_gear",
          "count": 1
        }
      })

})