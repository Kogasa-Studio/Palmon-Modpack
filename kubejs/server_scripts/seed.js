const $JsonObject = Java.loadClass("com.google.gson.JsonObject")
const $long = Java.loadClass("java.lang.Long")

global.seed = ""
global.levelRandomMap = []
global.randonIndex = 0

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

    // stage 1
    // main
    s1Occ(event)
    s1im(event)
    s1create(event)

    // extra
    e1SB(event)
    e1TC(event)
    e1PK(event)
    e1PL(event)

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