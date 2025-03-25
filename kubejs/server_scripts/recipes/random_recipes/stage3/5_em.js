/**
 * @param {Internal.RecipesEventJS} event
 */
function s3Em(event) {

    event.shaped('embers:alchemy_tablet', [
        'AAA',
        'BCB',
        'BDB'
    ],
        {
            A: '#forge:plates/dawnstone',
            B: 'kubejs:stable_desh_ingot',
            C: 'embers:ember_crystal',
            D: 'embers:mechanical_core'
        }).id('kubejs:alchemy_tablet_s3')

    event.shaped('kubejs:ember_profile', [
        'ABA',
        'CDE',
        'AFA'
    ],
        {
            A: 'kubejs:stable_desh_ingot',
            B: 'embers:focal_lens',
            C: 'embers:eldritch_insignia',
            D: 'embers:intelligent_apparatus',
            E: 'embers:explosion_charm',
            F: 'embers:ember_crystal_cluster'
        }).id('kubejs:ember_profile_s3')

}