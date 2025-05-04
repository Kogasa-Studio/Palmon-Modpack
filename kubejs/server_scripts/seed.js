const $JsonObject = Java.loadClass("com.google.gson.JsonObject")
const $long = Java.loadClass("java.lang.Long")

// 种子， 随机数列表，列表当前位置
global.seed = ""
global.levelRandomMap = []
global.randonIndex = 0

const s3MaterialList = ['jaopca:processors.iesnium', 'nuclearcraft:barium_dust', 'forestry:flexible_casing', 'malum:void_tablet', 'kubejs:elite_mechanism_final', 'kubejs:ember_profile']
const s4MaterialList = ['kubejs:marid_binded_gem', 'kubejs:superconducting_coil_type_1', 'kubejs:unify_essence', 'draconicevolution:wyvern_core', 'industrialforegoing:machine_frame_supreme', 'jaopca:processors.calorite']

global.removeBMRecipes = true

ServerEvents.loaded(event => {
    const { server } = event
    let currentSeed = NBT.l(server.worldData.worldGenOptions().seed())

    console.log("[ROUGELIKE RECIPES]", "Current Seed: " + currentSeed, "Catched Seed: " + global.seed)
    if (global.seed != currentSeed) {
        console.log("[ROUGELIKE RECIPES] Seeds not matched, reloading")

        global.seed = currentSeed

        let object = new $JsonObject()
        object.addProperty("seed", currentSeed)
        JsonIO.write("kubejs\\packdata\\level_catche.json", object)

        server.scheduleInTicks(10, () => server.runCommandSilent("reload"))

    } else {
        console.log("[ROUGELIKE RECIPES] Seeds matched")

    }

})

ServerEvents.recipes((event) => {
    /**
     * @type {Internal.HashMap}
     */
    let jsonData = JsonIO.readJson("kubejs\\packdata\\level_catche.json")
    if (!jsonData) {
        console.error('[ROUGELIKE RECIPES] Error on reading json')
    }

    global.seed = jsonData.get("seed").toString()
    global.seed = global.seed.replace('\"', "")
    console.log("[ROUGELIKE RECIPES] Loading Scripts, catched Seed: " + global.seed)

    const random = Utils.random
    random.setSeed($long.parseLong(global.seed.replace('L', ""), 10))

    for (let i = 0; i < 128; i++) {
        global.levelRandomMap.push(random.nextDouble())
    }

    // console.log(global.levelRandomMap)

    // stage 1 1+1
    // main
    s1Occ(event)
    s1Im(event)
    s1Create(event)
    // extra
    e1SB(event)
    e1TC(event)
    e1PK(event)
    e1PL(event)
    console.log("s1 recipes loaded")

    // stage 2 1+1
    // main
    s2Sp(event)
    s2Bot(event)
    s2AE(event)
    // extra
    e2CM(event)
    e2ER(event)
    e2ID(event)
    e2RFT(event)
    // final
    s2Frame1(event)
    s2Frame2(event)
    console.log("s2 recipes loaded")

    // stage 3 2+2
    // main
    s3SP(event)
    s3NC(event)
    s3Fo(event)
    s3Ma(event)
    s3Cr(event)
    s3Em(event)
    // extra 
    e3MR(event)
    e3SFM(event)
    e3XN(event)
    e3RFT(event)
    e3CR(event)
    // convergence
    s3ConvergenceRecipe(event, 0, 1)
    console.log("s3 recipes loaded")

    // stage 4 3+2
    // main
    s4Occ(event)
    s4TR(event)
    s4ARS(event)
    s4DE(event)
    s4IFM(event)
    s4AA(event)
    // extra
    e4IFS(event)
    e4IFU(event)
    e4EFF(event)
    e4TIB(event)
    e4PLM(event)
    // convergence
    s4ConvergenceRecipe(event, 0, 1, 2)
    console.log("s4 recipes loaded")

    // stage 5 3+2
    // main
    s5DD(event)
    s5NCF(event)
    s5ELF(event)
    s5EAW(event)
    s5DNA(event)

    //extra
    e5IDW(event)
    e5FL(event)
    e5BM(event)

    console.log("s5 recipes loaded")

    if (global.removeBMRecipes) {
        // Botanical Machinery, by e5BM
        event.remove({ mod: 'botanicalmachinery' })

    }

})

function randomNext(range) {
    if (global.randonIndex >= global.levelRandomMap.length) {
        global.randonIndex = 0
    }
    return Math.floor(global.levelRandomMap[global.randonIndex++] * range)
}

function randomSample(n, range) {
    if (range === 0) {
        throw new Error("范围内的数字不足以进行抽样")
    }
    const result = []
    let availableNumbers = Array.from(new Array(range).keys())

    for (let i = 0; i < n; i++) {
        let randomIndex = randomNext(availableNumbers.length)
        result.push(availableNumbers[randomIndex])
        availableNumbers.splice(randomIndex, 1)

    }

    return result
}

/**
 * @param {Internal.RecipesEventJS} event
 * @param {int} index1
 * @param {int} index2
 * @param {int} index3
 */
function s5ConvergenceRecipe(event, index1, index2, index3) {
    event.custom({
        "type": "palmon:processing",
        "category": "misc",
        "focus_stat": "HP",
        "min_level": 90,
        "required_type": null,
        "base_hp": 0,
        "base_atk": 0,
        "base_def": 0,
        "base_spa": 0,
        "base_spd": 0,
        "base_spe": 0,
        "area_blocks": [
            {
                "item": 'supplementaries:sugar_cube'
            },
            {
                "item": 'cobblemon:healing_machine'
            },
            {
                "item": 'cobblemon:monitor'
            },
            {
                "item": 'cobblemon:relic_coin_sack'
            },
        ],
        "block_count": 4,
        "input_items": [
            {
                "item": 'minecraft:sugar',
                "count": 48
            },
            {
                "item": 'supplementaries:candy',
                "count": 32
            },
            {
                "item": 'forestry:tree_maple_decorative_leaves',
                "count": 16
            },
            {
                "item": 'nuclearcraft:unsweetened_chocolate',
                "count": 8
            },
            {
                "item": 'kubejs:collapse_prediction',
                "count": 2
            },
            {
                "item": 'palmon:m_crystal',
                "count": 2
            }
        ],
        "input_power": 204800,
        "input_fluid": {
            "fluid": "minecraft:water",
            "amount": 8000
        },
        "tick": 1600,
        "result_items": [
            {
                "item": 'cobblemon:rare_candy',
                "count": 1
            }
        ]
    }).id('kubejs:epsilon_framework_s5')
}

/**
 * @param {Internal.RecipesEventJS} event
 * @param {int} index1
 * @param {int} index2
 * @param {int} index3
 */
function s4ConvergenceRecipe(event, index1, index2, index3) {

    event.recipes.create.mechanical_crafting('kubejs:delta_framework', [
        '  A  ',
        ' BXB ',
        'AD DA',
        ' EFE ',
        'AY ZA',
        'AADAA'
    ], {
        A: '#forge:plates/elementium',
        B: '#forge:gears/ostrum',
        D: '#forge:rods/elementium',
        E: 'ae2:cell_component_1k',
        F: 'kubejs:gamma_framework',

        X: s4MaterialList[index1],
        Y: s4MaterialList[index2],
        Z: s4MaterialList[index3]
    }).id('kubejs:delta_framework_s4')


}

/**
 * @param {Internal.RecipesEventJS} event
 * @param {int} index1
 * @param {int} index2
 */
function s3ConvergenceRecipe(event, index1, index2) {
    switch (index1) {
        // switch (true) {
        case 0:
            // sp
            event.shaped('kubejs:gamma_framework', [
                'ACA',
                'BDB',
                'AEA'
            ],
                {
                    A: 'kubejs:stable_desh_ingot',
                    B: 'kubejs:spirit_coil',
                    C: s3MaterialList[index2],
                    D: 'jaopca:processors.iesnium',
                    E: 'kubejs:beta_framework'
                }).id('kubejs:gamma_framework_s3_0')

            break
        case 1:
            // nuclearcraft
            event.custom({
                "type": "nuclearcraft:assembler",
                "input": [
                    {
                        "count": 1,
                        "item": 'kubejs:beta_framework'
                    },
                    {
                        "count": 4,
                        "item": 'nuclearcraft:barium_dust'
                    },
                    {
                        "count": 1,
                        "item": s3MaterialList[index2]
                    },
                    {
                        "count": 3,
                        "item": 'kubejs:stable_desh_ingot'
                    },
                    {
                        "count": 3,
                        "item": 'kubejs:present_alloy'
                    }
                ],
                "output": [
                    {
                        "count": 1,
                        "item": 'kubejs:gamma_framework'
                    }
                ],
                "powerModifier": 5.0,
                "radiation": 0.0,
                "timeModifier": 5.0
            }).id('kubejs:gamma_framework_s3_1')

            break
        case 2:
            // forestry
            event.custom({
                "type": "forestry:carpenter",
                "box": {
                    "item": 'forestry:impregnated_casing'
                },
                "liquid": {
                    "Amount": 1000,
                    "FluidName": "forestry:seed_oil"
                },
                "recipe": {
                    "type": "minecraft:crafting_shaped",
                    "category": "misc",
                    "key": {
                        "A": {
                            "item": 'kubejs:stable_desh_ingot'
                        },
                        "B": {
                            "item": 'kubejs:present_alloy'
                        },
                        "C": {
                            "item": s3MaterialList[index2]
                        },
                        "D": {
                            "item": 'kubejs:ember_profile'
                        },
                        "E": {
                            "item": 'kubejs:beta_framework'
                        }
                    },
                    "pattern": [
                        'ACA',
                        'BDB',
                        'AEA'
                    ],
                    "result": {
                        "item": 'kubejs:gamma_framework'
                    },
                    "show_notification": true
                },
                "time": 150
            }).id('kubejs:gamma_framework_s3_2')

            break
        case 3:
            // malum
            event.custom({
                "type": "malum:spirit_infusion",
                "extra_items": [
                    {
                        "count": 1,
                        "item": 'malum:void_tablet'
                    },
                    {
                        "count": 3,
                        "item": 'kubejs:stable_desh_ingot'
                    },
                    {
                        "count": 1,
                        "item": 'kubejs:present_alloy'
                    },
                    {
                        "count": 1,
                        "item": s3MaterialList[index2]
                    }
                ],
                "input": {
                    "count": 1,
                    "item": 'kubejs:beta_framework'
                },
                "output": {
                    "item": 'kubejs:gamma_framework'
                },
                "spirits": [
                    {
                        "type": "eldritch",
                        "count": 1
                    }
                ]
            }).id('kubejs:gamma_framework_s3_3')
            break
        case 4:
            // create
            event.recipes.create.mechanical_crafting('kubejs:gamma_framework', [
                '  F  ',
                ' ACA ',
                'FBDBF',
                ' AEA ',
                '  F  '
            ], {
                A: 'kubejs:stable_desh_ingot',
                B: '#forge:plates/obsidian',
                C: s3MaterialList[index2],
                D: 'kubejs:elite_mechanism_final',
                E: 'kubejs:beta_framework',
                F: '#forge:plates/brass',
            }).id('kubejs:gamma_framework_s3_4')
            break
        case 5:
            // ember
            event.shaped('kubejs:gamma_framework', [
                'ACA',
                'BDB',
                'AEA'
            ],
                {
                    A: 'kubejs:stable_desh_ingot',
                    B: 'kubejs:present_alloy',
                    C: s3MaterialList[index2],
                    D: 'kubejs:ember_profile',
                    E: 'kubejs:beta_framework'
                }).id('kubejs:gamma_framework_s3_5')
            break
    }

}

// ItemEvents.rightClicked('cobblemon:relic_coin', event => {
//     const random = Utils.random
//     global.levelRandomMap = []
//     global.randonIndex = 0
//     for (let i = 0; i < 128; i++) {
//         global.levelRandomMap.push(random.nextDouble())
//     }
//     event.player.tell(1 + " " + 4)
//     event.player.tell(randomSample(1, 4).toLocaleString())
//     event.player.tell(2 + " " + 4)
//     event.player.tell(randomSample(2, 4).toLocaleString())
//     event.player.tell(1 + " " + 6)
//     event.player.tell(randomSample(1, 6).toLocaleString())
//     event.player.tell(2 + " " + 6)
//     event.player.tell(randomSample(2, 6).toLocaleString())
//     event.player.tell(1 + " " + 8)
//     event.player.tell(randomSample(1, 8).toLocaleString())
//     event.player.tell(2 + " " + 8)
//     event.player.tell(randomSample(2, 8).toLocaleString())

// })