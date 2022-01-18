import BulkIngredient from "./BulkIngredient";
import Ingredient, { allUnits } from "./Ingredient";
import Unit, { identifyUnitsByString } from "./Unit";
import UnitIngredient from "./UnitIngredient";

export interface serialRecipe {
	name: string;
	description: string;
	ingredientList: Array<string>;
	instructionSet: Array<string>;
}
export interface recipeTime {
	hours: number;
	minutes: number;
}
export interface nutritionData {
	//Per serving
	calories: number;
}
export interface recipeMetadata {
	prepTime?: recipeTime;
	totalTime?: number;
	//Amount of servings in base recipe, if not specified default is 1
	baseServings?: number;
	nutritionPerServing?: nutritionData;
}
export default class Recipe {
	private _name: string;
	private _description: string;
	private _instructionSet: Array<string>;
	//Only a string for now to be kept simple, will later be expanded into new class
	private _ingredientList: Array<Ingredient>;
	private _servings: number;
	private _metadata: recipeMetadata;
	constructor(
		name: string,
		description: string,
		ingredients: Array<Ingredient>,
		instructions: Array<string>,
		metadata: recipeMetadata,
	) {
		this._name = name;
		this._description = description;
		this._ingredientList = ingredients;
		this._instructionSet = instructions;
		this._metadata = metadata;
		if (this._metadata.baseServings) {
			this._servings = this._metadata.baseServings;
		} else {
			//If not specified defaults to one
			this._servings = 1;
		}
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
	public get instructions() {
		return this._instructionSet;
	}
	public get servings() {
		return this._servings;
	}
	public serialize(): serialRecipe {
		let serializedIngredients: string[] = [];
		this.ingredientList.map((ingredient) => {
			serializedIngredients.push(ingredient.fullName());
		});
		return {
			name: this._name,
			description: this._description,
			ingredientList: serializedIngredients,
			instructionSet: this._instructionSet,
		};
	}
	//changes the amount of servings and the required ingredient proportions accordingly
	public resizePortions(newServings: number) {
		let resizeRation: number = newServings / this._servings;
		for (let i = 0; i < this._ingredientList.length; i++) {
			this._ingredientList[i].resizeIngredient(resizeRation);
		}
	}
}
//Uses a string to identify the Unit and what measure it uses, if none is found it is identified as a bulk unitless ingredient
export const constructIngredientFromString: (
	ingredientString: string,
) => Ingredient = (ingredientString: string) => {
	let result = identifyUnitsByString(ingredientString, allUnits);
	switch (result) {
		case undefined:
			return new UnitIngredient(ingredientString);
		default:
			return new BulkIngredient(result as Unit, ingredientString);
	}
};
