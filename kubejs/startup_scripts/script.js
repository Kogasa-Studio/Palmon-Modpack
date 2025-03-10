// priority: 0

console.info('Hello, World! From KJS')

StartupEvents.registry('item', event => {
	// Register new items here
	event.create('reinforced_sheet').displayName('Reinforced Sheet').fireResistant()
	event.create('beryllium_bronze_alloy').displayName('Reinforced Sheet').fireResistant().rarity('rare').glow(true)

	event.create('baby_proofing').displayName('§m§eBaby Proofing').fireResistant().rarity('rare').glow(true)
	event.create('vial_of_chaos').displayName('§m§dVial of Chaos').fireResistant().rarity('rare').glow(true)

})

StartupEvents.registry('block', event => {

})

StartupEvents.registry('fluid', event => {
	event.create('melted_refined_copper')
		.displayName('Melted Refined Copper')
		.bucketColor(0xDA8A67)
		.thickTexture(0xDA8A67)
		.temperature(1400)

	event.create('melted_refined_steel')
		.displayName('Melted Refined Steel')
		.bucketColor(0x8A2BE2)
		.thickTexture(0x8A2BE2)
		.temperature(1400)

	event.create('melted_refined_m_steel')
		.displayName('Melted Refined M Steel')
		.bucketColor(0x708090)
		.thickTexture(0x708090)
		.temperature(1400)

	event.create('melted_soul_stained_steel')
		.displayName('Melted Soul Stained Steel')
		.bucketColor(0x6A0DAD)
		.thickTexture(0x6A0DAD)
		.temperature(1400)

	event.create('melted_glowing_obsidian')
		.displayName('Melted Glowing Obsidian')
		.bucketColor(0x8B0000)
		.thickTexture(0x8B0000)
		.temperature(1400)

	event.create('melted_moltarium')
		.displayName('Melted Moltarium')
		.bucketColor(0xCF1020)
		.thickTexture(0xCF1020)
		.temperature(1400)

	event.create('melted_terrasteel')
		.displayName('Melted Terrasteel')
		.bucketColor(0x90EE90)
		.thickTexture(0x90EE90)
		.temperature(1400)

	event.create('melted_gaia')
		.displayName('Melted Gaia')
		.bucketColor(0xFFFF55)
		.thickTexture(0xFFFF55)
		.temperature(1400)

	event.create('melted_ignitium')
		.displayName('Melted Ignitium')
		.bucketColor(0xFFA500)
		.thickTexture(0xFFA500)
		.temperature(1400)

	event.create('melted_witherite')
		.displayName('Melted Witherite')
		.bucketColor(0x8B0000)
		.thickTexture(0x8B0000)
		.temperature(1400)

	event.create('melted_cursium')
		.displayName('Melted Cursium')
		.bucketColor(0x00A3A3)
		.thickTexture(0x00A3A3)
		.temperature(1400)

	event.create('melted_voidarium')
		.displayName('Melted Voidarium')
		.bucketColor(0x800080)
		.thickTexture(0x800080)
		.temperature(1400)
		.temperature(1400)

	event.create('melted_mythril')
		.displayName('Melted Mythril')
		.bucketColor(0xC0C0C0)
		.thickTexture(0xC0C0C0)
		.temperature(1400)

	event.create('melted_beryllium_bronze_alloy')
		.displayName('§eMelted Beryllium Bronze Alloy')
		.bucketColor(0xD8BFD8)
		.thickTexture(0xD8BFD8)
		.temperature(1500)
})
