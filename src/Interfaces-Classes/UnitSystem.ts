import Unit from "./Unit";
const VOLUME_UNITS: Unit[] = [
	{
		fullName: "cup",
		abbreviations: ["cp.", "cp"],
		system: "CUSTOMARY",
		measure: "VOLUME",
		convertionFactor: 16,
	},
	{
		fullName: "pint",
		abbreviations: ["pt.", "pt"],
		system: "CUSTOMARY",
		measure: "VOLUME",
		convertionFactor: 8,
	},
	{
		fullName: "quart",
		abbreviations: ["qt.", "qt"],
		system: "CUSTOMARY",
		measure: "VOLUME",
		convertionFactor: 4,
	},
	{
		fullName: "gallon",
		abbreviations: ["gal.", "gal", "gl.", "gl"],
		system: "CUSTOMARY",
		measure: "VOLUME",
		convertionFactor: 1,
	},
	{
		fullName: "tablespoon",
		abbreviations: ["tbsp.", "tbsp"],
		system: "CUSTOMARY",
		measure: "VOLUME",
		convertionFactor: 256,
	},
	{
		fullName: "teaspoon",
		abbreviations: ["tsp.", "tsp"],
		system: "CUSTOMARY",
		measure: "VOLUME",
		convertionFactor: 768,
	},
];


export default class CustomarySystem {
	private _unit: Unit;
	constructor(unit: Unit) {
		this._unit = unit;
	}
	public convertBetweenUnitInSameSystem(
		currentUnit: Unit,
		magnitude: number,
	): number {
		if(currentUnit.system !=)
		return (
			(currentUnit.convertionFactor * magnitude) / this._unit.convertionFactor
		);
	}
	convertBetweenSystem
}
