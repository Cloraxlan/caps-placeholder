import nlp from "compromise";
import nlpNumbers from "compromise-numbers";

export default class Ingredient {
	private type: "UNIT" | "BULK";
	private unit: string;
	private system: "METRIC" | "CUSTOMARY";
	private magnitude: number;
	constructor(ingredientString: string) {
		const nlpI = nlp;
		let plugin = nlpNumbers;
		nlp.extend(plugin);

		//for now just unit
		this.type = "UNIT";
		this.system = "METRIC";
		this.unit = "UNIT";

		let doc = nlpI(
			"i have two questions for Homer - 'Why lie?' and 'Lies, why?'",
		);
		//get all numbers, in any form
		let nums = doc.values();
		console.log(nums.out("array"));

		this.magnitude = 0;
	}
}
