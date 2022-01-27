import { measure } from "./Ingredient";

export default interface Unit {
	fullName: string;
	abbreviations: string[];
	system: "METRIC" | "CUSTOMARY" | "NULL";
	measure: measure;
	//How much of the unit makes one of the master unit of the system and measure
	convertionFactor: number;
}
//With a string and a set of possible units find what unit it can be
//Can have filler text that isnt exactly the unit
//Returns undefined if unknown
export const identifyUnitsByString = (
	query: string,
	units: Unit[],
): Unit | undefined => {
	query = query.toLowerCase();
	//See if name is found
	for (let i = 0; i < units.length; i++) {
		if (query.includes(units[i].fullName)) {
			return units[i];
		}
	}
	//See if abreviations are found
	for (let i = 0; i < units.length; i++) {
		for (let j = 0; j < units[i].abbreviations.length; j++) {
			if (query.includes(units[i].abbreviations[j])) {
				return units[i];
			}
		}
	}
};
