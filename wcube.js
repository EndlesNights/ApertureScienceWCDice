Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "wcube", name: "Aperture Science"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/wcube/wcube_d2.glb",
		system: "wcube"
	});
	dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/wcube/wcube_d4.glb",
		system: "wcube"
	});
	dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/wcube/wcube_d6.glb",
		system: "wcube"
	});
	dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/wcube/wcube_d8.glb",
		system: "wcube"
	});
	dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/wcube/wcube_d10.glb",
		system: "wcube"
	});
	dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/wcube/wcube_d100.glb",
		system: "wcube"
	});
	dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/wcube/wcube_d12.glb",
		system: "wcube"
	});	
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/wcube/wcube_d20.glb",
		system: "wcube"
	});
});