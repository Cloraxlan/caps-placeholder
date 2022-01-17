import nlp from "compromise";
import nlpNumbers from "compromise-numbers";
import { ALL_CUSTOMARY_UNITS } from "./CustomarySystem";
import { identifyUnitsByString } from "./Unit";

//TODO ADD METRIC
export const allUnits = ALL_CUSTOMARY_UNITS
export default abstract class Ingredient {
	protected _magnitude: number;
	private _measure: "UNITLESS" | "WEIGHT" | "VOLUME" 
	//protected _name: string;
	//TODO make it identify the name
	private _ingredientName: string;
	protected constructor(ingredientString: string, measure: "UNITLESS" | "WEIGHT" | "VOLUME" ) {
		//Cleans the string
		ingredientString = ingredientString.toLowerCase();
		
		this._measure = measure
		//initialize nlp(library natural language library that allows things such as numbers to be parsed)
		const nlpI = nlp;
		let plugin = nlpNumbers;
		nlp.extend(plugin);

		let doc: any = nlpI(ingredientString);
		//gets first number unit and sets that to be the amount of that ingredient
		this._magnitude = doc.numbers().get()[0];
		//Gets the name of the ingredient
		this._ingredientName = 	this.cleanName(nlp(ingredientString).nouns().out('array')[0]);

	}
	//Removes of and the units if found
	private cleanName(cleanString: string): string{
		let unit =  identifyUnitsByString(cleanString, allUnits);
		if(unit){
			//Removes Full name
			cleanString = cleanString.replace(unit.fullName+"s" ,"");
			cleanString = cleanString.replace(unit.fullName ,"");

			//Removes Abreviations
			unit.abbreviations.map((abv)=>{
				cleanString = cleanString.replace(abv+"s"  ,"");
				cleanString = cleanString.replace(abv  ,"");
			})
		}
		//Removes "of"
		cleanString = cleanString.replace("of", "");
		//Removes double spaces
		cleanString = cleanString.replace("  ", "");
		//Removes space in front of name
		if(cleanString.charAt(0) == " "){
			cleanString = cleanString.slice(1);
		}
		return cleanString;
	}
	public get magnitude() {
		return this._magnitude;
	}
	public get measure(){
		return this._measure
	}
	public get ingredientName(){
		return this._ingredientName;
	}
	//Adds an s if magnitude not equal to 1
	public pluralizedName(){
		if(this.magnitude != 1){
			return this.ingredientName+"s";
		}else{
			return this.ingredientName;
		}
	}
	//Name with magnitude and name
	public fullName(): string{
		return this._magnitude+ " "+ this.pluralizedName();
	}
	//sees if it is unitless or unitwith
	public isBulk(){
		switch (this._measure) {
			case "UNITLESS":
				return false
				
		
			default:
				return true;
		}
	}
}

