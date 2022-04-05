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
	let found: Unit[] = [];
	query = query.toLowerCase();
	//See if name is found
	for (let i = 0; i < units.length; i++) {
		if (query.includes(units[i].fullName)) {
			found.push(units[i]);
		}
	}
	//See if abreviations are found
	if (found.length == 0) {
		for (let i = 0; i < units.length; i++) {
			for (let j = 0; j < units[i].abbreviations.length; j++) {
				if (query.includes(units[i].abbreviations[j])) {
					found.push(units[i]);
				}
			}
		}
	}

	//Remove duplicates
	found = found.filter((unit, i, units) => {
		for (let o = 0; o < i; o++) {
			if (unit.fullName == units[o].fullName) {
				return;
			}
		}
		return unit;
	});

	//Find which ones have higher priority
	found = found.sort((a, b) => {
		switch (a.fullName.length <= b.fullName.length) {
			case true:
				return 1;
			case false:
				return -1;
		}
	});
	console.log("milibutters");
	console.log(found[0]);
	return found[0];
};
