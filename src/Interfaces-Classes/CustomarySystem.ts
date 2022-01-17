import Unit from "./Unit";
import UnitSystem, {
	KNOW_SYSTEM_MASTER_CONVERSION_FACTORS,
} from "./UnitSystem";
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
const WEIGHT_UNITS: Unit[] = []
export const ALL_CUSTOMARY_UNITS = VOLUME_UNITS.concat(WEIGHT_UNITS);

export const ALL_CUSTOMARY_VOLUME =
	CUSTOMARY_VOLUME_ABR.concat(CUSTOMARY_VOLUME_ABR);
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
