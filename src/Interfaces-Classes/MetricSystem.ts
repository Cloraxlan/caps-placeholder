import Unit from "./Unit";
export const MASTER_VOLUME_METRIC: Unit = {
	fullName: "liter",
	abbreviations: ["L", "L."],
	system: "METRIC",
	measure: "VOLUME",
	convertionFactor: 1,
};
export const MASTER_WEIGHT_METRIC: Unit = {
	fullName: "kilogram",
	abbreviations: ["kg", "kg."],
	system: "METRIC",
	measure: "WEIGHT",
	convertionFactor: 1,
};
const VOLUME_UNITS: Unit[] = [
	{
		fullName: "liter",
		abbreviations: ["L", "L."],
		system: "METRIC",
		measure: "VOLUME",
		convertionFactor: 1,
	},
	{
		fullName: "mililiter",
		abbreviations: ["ml", "ml."],
		system: "METRIC",
		measure: "VOLUME",
		convertionFactor: 1000,
	},
];
const WEIGHT_UNITS: Unit[] = [
	{
		fullName: "kilogram",
		abbreviations: ["kg", "kg."],
		system: "METRIC",
		measure: "WEIGHT",
		convertionFactor: 1,
	},
	{
		fullName: "gram",
		abbreviations: ["g", "g."],
		system: "METRIC",
		measure: "WEIGHT",
		convertionFactor: 1000,
	},
];
export const ALL_METRIC_UNITS = VOLUME_UNITS.concat(WEIGHT_UNITS);
