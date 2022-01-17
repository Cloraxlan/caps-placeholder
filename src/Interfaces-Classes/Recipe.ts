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
	private _ingredientList: Array<string>;
	constructor(name: string, description: string, ingredients: Array<string>) {
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
	public serialize(): serialRecipe {
		return {
			name: this._name,
			description: this._description,
			ingredientList: this._ingredientList,
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
