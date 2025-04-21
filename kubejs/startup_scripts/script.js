// priority: 0

console.info('Hello, World! From KJS')

StartupEvents.registry('item', event => {
	// Register new items here
	event.create('reinforced_sheet').displayName('Reinforced Sheet').fireResistant()
	event.create('beryllium_bronze_alloy').displayName('Reinforced Sheet').fireResistant().rarity('rare').glow(true)
	
	event.create('baby_proofing').displayName('§m§eBaby Proofing').fireResistant().rarity('rare').glow(true)
	event.create('vial_of_chaos').displayName('§m§dVial of Chaos').fireResistant().rarity('rare').glow(true)
	event.create('cognitio').displayName('§m§dCognitio').fireResistant().rarity('epic').glow(true)

	event.create('ancient_netherite').displayName('§mAncient Netherite').fireResistant().rarity('rare')

	event.create('present_alloy').displayName('§m§dPresent Alloy Ingot').fireResistant().rarity('rare')
	event.create('stable_desh_ingot').displayName('§m§dStable Desh Ingot').fireResistant().rarity('rare')

	event.create('elite_mechanism').displayName('§m§dElite Mechanism').fireResistant().rarity('rare')
	event.create('elite_mechanism_plus').displayName('§m§dElite Mechanism Plus').fireResistant().rarity('rare')
	event.create('elite_mechanism_final').displayName('§m§dElite Mechanism Final').fireResistant().rarity('rare')

	event.create('hallowed_soul_steel_ingot').displayName('§m§dHallowed Soul Steel Ingot').fireResistant().rarity('rare')
	event.create('ember_profile').displayName('§m§dEmber Profile').fireResistant().rarity('rare')
	event.create('spirit_coil').displayName('§m§dSpirit Coil').fireResistant().rarity('rare')

	event.create('essence_computation_frame').displayName('§m§eEssence Computation Frame').fireResistant().rarity('rare')
	event.create('basic_machine_frame').displayName('[Basic Machine Frame]').fireResistant()
	event.create('advanced_machine_frame').displayName('[Advanced Machine Frame]').fireResistant().rarity('rare')
	event.create('industrial_machine_frame').displayName('[Industrial Machine Frame]').fireResistant().rarity('epic')

	event.create('marid_binded_gem').displayName('Marid Binded Gem').fireResistant().rarity('epic')
	event.create('superconducting_coil_type_1').displayName('Superconducting Coil Type I').fireResistant()
	event.create('superconducting_coil_type_2').displayName('Superconducting Coil Type II').fireResistant().rarity('rare')
	event.create('superconducting_coil_type_3').displayName('Superconducting Coil Type III').fireResistant().rarity('epic')

	event.create('charged_source_gem').displayName('Charged Source Gem').fireResistant()
	event.create('unify_essence').displayName('Unify Essence').fireResistant().rarity('rare')

	event.create('intelligent_draconium_ingot').displayName('Intelligent Draconium Ingot').fireResistant().rarity('epic')

	event.create('end_steel').displayName('§5End Steel').fireResistant().rarity('epic')

	event.create('alpha_dust').displayName('§aAlpha Dust').fireResistant()
	event.create('beta_dust').displayName('§bBeta Dust').fireResistant().rarity('rare')
	event.create('gamma_dust').displayName('§cGamma Dust').fireResistant().rarity('rare')
	event.create('delta_dust').displayName('§dDelta Dust').fireResistant().rarity('epic')
	event.create('epsilon_dust').displayName('§eEpsilon Dust').fireResistant().rarity('epic').glow(true)

	event.create('alpha_framework').displayName('§aAlpha Framework').fireResistant()
	event.create('beta_framework').displayName('§bBeta Framework').fireResistant().rarity('rare')
	event.create('gamma_framework').displayName('§cGamma Framework').fireResistant().rarity('rare')
	event.create('delta_framework').displayName('§dDelta Framework').fireResistant().rarity('epic')
	event.create('epsilon_framework').displayName('§eEpsilon Framework').fireResistant().rarity('epic').glow(true)

	event.create('anchor_shard').displayName('§9Anchor Shard').fireResistant().rarity('epic').glow(true)

	const voucherTexture = 'kubejs:item/voucher'
	event.create('voucher_1_0').displayName('Voucher S01T00').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_1_1').displayName('Voucher S01T01').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_1_2').displayName('Voucher S01T02').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_1_3').displayName('Voucher S01T03').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)

	event.create('voucher_2_0').displayName('Voucher S02T00').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_2_1').displayName('Voucher S02T01').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_2_2').displayName('Voucher S02T02').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_2_3').displayName('Voucher S02T03').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)

	event.create('voucher_3_0').displayName('Voucher S03T00').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_3_1').displayName('Voucher S03T01').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_3_2').displayName('Voucher S03T02').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_3_3').displayName('Voucher S03T03').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_3_4').displayName('Voucher S03T04').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)

	event.create('voucher_4_0').displayName('Voucher S04T00').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_4_1').displayName('Voucher S04T01').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_4_2').displayName('Voucher S04T02').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_4_3').displayName('Voucher S04T03').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_4_4').displayName('Voucher S04T04').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_4_5').displayName('Voucher S04T05').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)

	event.create('voucher_5_0').displayName('Voucher S05T00').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_5_1').displayName('Voucher S05T01').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)
	event.create('voucher_5_2').displayName('Voucher S05T02').maxStackSize(1).texture(voucherTexture).tag('kubejs:voucher').fireResistant().glow(true)

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
