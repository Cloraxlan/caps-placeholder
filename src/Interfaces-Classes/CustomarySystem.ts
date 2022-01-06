import Unit from "./Unit";
//!!!!
//VOLUME MASTER CONVERTION FACTOR FOR CUSTOMARY IS THE GALLON
//!!!!
export const CUSTOMARY_VOLUME_FULL = [
	"drop",
	"smidgen",
	"pinch",
	"dash",
	"saltspoon",
	"scruple",
	"coffeespoon",
	"fluid dram",
	"teaspoon",
	"dessertspoon",
	"tablespoon",
	"wineglass",
	"teacup",
	"gill",
	"cup",
	"pint",
	"quart",
	"pottle",
	"gallon",
];
export const CUSTOMARY_VOLUME_ABR = [
	"dr.",
	"gt.",
	"gtt.",
	"smdg.",
	"smi.",
	"pn.",
	"ds.",
	"ssp.",
	"csp.",
	"fl.dr.",
	"tsp.",
	"tsp",
	"dsp.",
	"dssp.",
	"dstspn.",
	"tbsp.",
	"tbsp",
	"fl.oz",
	"fl.oz.",
	"wgf.",
	"tcf.",
	"pt.",
	"qt.",
	"pot.",
	"gal.",
];
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

export const ALL_CUSTOMARY_VOLUME =
	CUSTOMARY_VOLUME_ABR.concat(CUSTOMARY_VOLUME_ABR);

export default class CustomarySystem {
	private _unit: Unit;
	constructor(unit: Unit) {
		this._unit = unit;
	}
	public convertCustomarytoCustomary(
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
