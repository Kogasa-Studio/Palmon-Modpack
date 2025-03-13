ServerEvents.recipes(event => {
    event.recipes.occultism.miner(
		Item.of('malum:deepslate_soulstone_ore').withChance(250),
		'#occultism:miners/deeps'
	)

	event.recipes.occultism.ritual(
		'kubejs:reinforced_sheet',
		[
			'integrateddynamics:energy_battery',
			'integrateddynamics:energy_battery',
			'nuclearcraft:plate_du',
			'ad_astra:photovoltaic_etrium_cell',
			'ad_astra:photovoltaic_etrium_cell',
			'botania:terrasteel_ingot',
			'tconstruct:manyullyn_ingot',
			'tconstruct:hepatizon_ingot',
			'tconstruct:queens_slime_ingot',
			'malum:block_of_soul_stained_steel',
			'redstone_arsenal:flux_obsidian_rod',
			'occultism:iesnium_pickaxe'
		],
		'embers:superheater',
		'occultism:craft_djinni'
	).id("kubejs:reinforced_sheet")

})