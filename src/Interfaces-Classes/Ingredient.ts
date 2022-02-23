/* eslint-disable */
import nlp from "compromise";
import nlpNumbers from "compromise-numbers";
import BulkIngredient from "./BulkIngredient";
import { ALL_CUSTOMARY_UNITS } from "./CustomarySystem";
import { ALL_METRIC_UNITS } from "./MetricSystem";
import { constructIngredientFromString } from "./Recipe";
import { identifyUnitsByString } from "./Unit";
import UnitIngredient from "./UnitIngredient";

export interface serializedIngredient {
	magnitude: number;
	measure: "UNITLESS" | "WEIGHT" | "VOLUME";
	fullName: string;
	ingredientName: string;
}

//TODO ADD METRIC
export const allUnits = ALL_CUSTOMARY_UNITS.concat(ALL_METRIC_UNITS)
export default abstract class Ingredient {
	private _ingredient: serializedIngredient;
	protected constructor(
		ingredientString: string,
		measure: "UNITLESS" | "WEIGHT" | "VOLUME",
	) {
		this._ingredient = {
			ingredientName: "",
			fullName: "",
			measure: "UNITLESS",
			magnitude: 0,
		};
		//Cleans the string
		ingredientString = ingredientString.toLowerCase();

		this.measure = measure;
		//initialize nlp(library natural language library that allows things such as numbers to be parsed)
		const nlpI = nlp;
		let plugin = nlpNumbers;
		nlp.extend(plugin);

		let doc: any = nlpI(ingredientString);
		//gets first number unit and sets that to be the amount of that ingredient
		this._ingredient.magnitude = doc.numbers().get()[0];
		//Gets the name of the ingredient
		this._ingredient.ingredientName = this.cleanName(
			nlp(ingredientString).nouns().out("array")[0],
		);
	}
	//Removes of and the units if found
	private cleanName(cleanString: string): string {
		let unit = identifyUnitsByString(cleanString, allUnits);
		if (unit) {
			//Removes Full name
			cleanString = cleanString.replace(unit.fullName + "s", "");
			cleanString = cleanString.replace(unit.fullName, "");

			//Removes Abreviations
			unit.abbreviations.map((abv) => {
				cleanString = cleanString.replace(abv + "s", "");
				cleanString = cleanString.replace(abv, "");
			});
		}
		//Removes "of"
		cleanString = cleanString.replace("of", "");
		//Removes double spaces
		cleanString = cleanString.replace("  ", "");
		//Removes space in front of name
		if (cleanString.charAt(0) == " ") {
			cleanString = cleanString.slice(1);
		}
		return cleanString;
	}
	public get magnitude() {
		return this._ingredient.magnitude;
	}
	public get measure() {
		return this._ingredient.measure;
	}
	public get ingredientName() {
		return this._ingredient.ingredientName;
	}
	public set magnitude(magnitude: number) {
		this._ingredient.magnitude = magnitude;
	}
	public set measure(measure: "UNITLESS" | "WEIGHT" | "VOLUME") {
		this._ingredient.measure = measure;
	}
	public set ingredientName(ingredientName: string) {
		this._ingredient.ingredientName = ingredientName;
	}
	//Adds an s if magnitude not equal to 1
	public pluralizedName() {
		if (this.magnitude != 1) {
			return this.ingredientName + "s";
		} else {
			return this.ingredientName;
		}
	}
	//Name with magnitude and name
	public fullName(): string {
		return this.magnitude + " " + this.pluralizedName();
	}
	//sees if it is unitless or unitwith
	public isBulk() {
		switch (this.measure) {
			case "UNITLESS":
				return false;

			default:
				return true;
		}
	}
	//Resizes the ingredients by a proportion
	public resizeIngredient(proportion: number) {
		this.magnitude = this.magnitude * proportion;
	}
	public serialize() {
		this._ingredient.fullName = this.fullName();
		return this._ingredient;
	}
	public static constructFromInterface(ingredient: serializedIngredient): Ingredient{
		return constructIngredientFromString(ingredient.fullName)
	}
}
