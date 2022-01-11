export default interface Unit {
	fullName: string;
	abbreviations: string[];
	system: "METRIC" | "CUSTOMARY" | "NULL";
	measure: "WEIGHT" | "VOLUME";
	//How much of the unit makes one of the master unit of the system and measure
	convertionFactor: number;
}
//With a string and a set of possible units find what unit it can be
//Can have filler text that isnt exactly the unit
//Returns undefined if unknown
export const identifyUnitsByString = (
	query: string,
	units: Unit[],
): Unit | undefined => {};
