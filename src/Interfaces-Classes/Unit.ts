export default interface Unit {
	fullName: string;
	abbreviations: string[];
	system: "METRIC" | "CUSTOMARY" | "NULL";
	measure: "WEIGHT" | "VOLUME";
	//How much of the unit makes one of the master unit of the system and measure
	convertionFactor: number;
}
