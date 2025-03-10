const $JsonObject = Java.loadClass("com.google.gson.JsonObject")
const $long = Java.loadClass("java.lang.Long")

global.seed = ""
global.levelRandomMap = []

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

    for (let i = 0; i < 32; i++) {
        global.levelRandomMap.push(random.nextDouble())
    }

    console.log(global.levelRandomMap)

    s1Occ(event)
    s1im(event)
    s1create(event)

    

})