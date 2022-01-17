import BulkIngredient from "./BulkIngredient";
import Ingredient, { allUnits } from "./Ingredient";
import Unit, { identifyUnitsByString } from "./Unit";
import UnitIngredient from "./UnitIngredient";

export interface serialRecipe {
	name: string;
	description: string;
	ingredientList: Array<string>;
}
export default class Recipe {
	private _name: string;
	private _description: string;
	//Only a string for now to be kept simple, will later be expanded into new class
	private _ingredientList: Array<Ingredient>;
	constructor(name: string, description: string, ingredients: Array<Ingredient>) {
		this._name = name;
		this._description = description;
		this._ingredientList = ingredients;
		
	}
	public get name() {
		return this._name;
	}
	public get description() {
		return this._description;
	}
	public get ingredientList() {
		return this._ingredientList;
	}
	//converts the Ingredients into a single set of preffered units
	public convertIntoSingleUnit(volume: Unit, weight: Unit){
		for(let i = 0; i < this.ingredientList.length; i++){
			switch (this._ingredientList[i].measure) {
				case "UNITLESS":
					break;
				case "VOLUME":
					(this._ingredientList[i] as BulkIngredient).convertUnits(volume)
					break;
				case "WEIGHT":
					(this._ingredientList[i] as BulkIngredient).convertUnits(weight)

					break;
			}
		}
	}
	public serialize(): serialRecipe {
		let serializedIngredients: string[] = [];
		this.ingredientList.map((ingredient)=>{
			serializedIngredients.push(ingredient.fullName());
		})
		return {
			name: this._name,
			description: this._description,
			ingredientList: serializedIngredients,
		};
	}
}
//Uses a string to identify the Unit and what measure it uses, if none is found it is identified as a bulk unitless ingredient
export const constructIngredientFromString: (ingredientString: string)=> Ingredient = (ingredientString: string)=>{
	let result = 	identifyUnitsByString(ingredientString, allUnits);
	switch (result) {
		case undefined:
			return new UnitIngredient(ingredientString);
		default:
			return new BulkIngredient((result as Unit), ingredientString);

	}
}
