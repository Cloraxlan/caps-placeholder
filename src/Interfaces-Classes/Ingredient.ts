import nlp from "compromise";
import nlpNumbers from "compromise-numbers";
import { ALL_CUSTOMARY_UNITS } from "./CustomarySystem";
//TODO ADD METRIC
export const allUnits = ALL_CUSTOMARY_UNITS
export default class Ingredient {
	protected _magnitude: number;
	private _measure: "UNITLESS" | "WEIGHT" | "VOLUME" 
	//TODO make it identify the name
	//private _ingredientName: string;
	protected constructor(ingredientString: string, measure: "UNITLESS" | "WEIGHT" | "VOLUME" ) {
		this._measure = measure
		//initialize nlp(library natural language library that allows things such as numbers to be parsed)
		const nlpI = nlp;
		let plugin = nlpNumbers;
		nlp.extend(plugin);

		let doc: any = nlpI(ingredientString);
		//gets first number unit and sets that to be the amount of that ingredient
		this._magnitude = doc.numbers().get()[0];
	}
	public get magnitude() {
		return this._magnitude;
	}
	public get measure(){
		return this._measure
	}
}

