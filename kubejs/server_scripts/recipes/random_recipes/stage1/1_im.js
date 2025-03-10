/**
 * @param {Internal.RecipesEventJS} event
 */
function s1im(event) {
    event.custom({
        "type": "tfc:anvil",
        "input": {
          "tag": 'forge:ingots/steel'
        },
        "result": {
          "item": "tfc_ie_addon:tool_head/ie_hammer"
        },
        "tier": 3,
        "rules": [
          "upset_last",
          "draw_second_last",
          "hit_third_last"
        ]
      }).id('kubejs:ie_hammer_s1_im')

}