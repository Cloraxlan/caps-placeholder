/* eslint-disable */
import Unit from "./Unit";
//!!!!
//VOLUME MASTER CONVERTION FACTOR FOR CUSTOMARY IS THE GALLON
//!!!!
export const MASTER_VOLUME_CUSTOMARY: Unit = {
	fullName: "gallon",
	abbreviations: ["gal.", "gal", "gl.", "gl"],
	system: "CUSTOMARY",
	measure: "VOLUME",
	convertionFactor: 1,
};
export const MASTER_WEIGHT_CUSTOMARY: Unit = {
	fullName: "pound",
	abbreviations: ["lb", "lbs", "lb.", "lbs."],
	system: "CUSTOMARY",
	measure: "WEIGHT",
	convertionFactor: 1,
};
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
	{
		fullName: "fluid ounce",
		abbreviations: ["floz.", "fl oz.", "fl oz", "floz"],
		system: "CUSTOMARY",
		measure: "VOLUME",
		convertionFactor: 128,
	},
];
const WEIGHT_UNITS: Unit[] = [
	{
		fullName: "pound",
		abbreviations: ["lb", "lbs", "lb.", "lbs."],
		system: "CUSTOMARY",
		measure: "WEIGHT",
		convertionFactor: 1,
	},
	{
		fullName: "ounce",
		abbreviations: ["oz", "oz."],
		system: "CUSTOMARY",
		measure: "WEIGHT",
		convertionFactor: 16,
	},
];
export const ALL_CUSTOMARY_UNITS = VOLUME_UNITS.concat(WEIGHT_UNITS);

/*export default class CustomarySystem extends UnitSystem {
	constructor(unit: Unit) {
		super(unit, "CUSTOMARY");
	}
	public convert(magnitude: number, finalUnit: Unit) {
		if (this._unit.system != finalUnit.system) {
			this.convertSystems(finalUnit.system);
		}
	}
}*/
