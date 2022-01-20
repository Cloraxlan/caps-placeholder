import BulkIngredient from "./BulkIngredient";
import Ingredient, { allUnits } from "./Ingredient";
import Unit, { identifyUnitsByString } from "./Unit";
import UnitIngredient from "./UnitIngredient";

export interface serialRecipe {
	name: string;
	description: string;
	instructionSet: Array<string>;
	ingredientList: Array<Ingredient>;
	servings: number;
	metadata: recipeMetadata;
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
	private _recipe: serialRecipe;
	constructor(
		name: string,
		description: string,
		ingredients: Array<Ingredient>,
		instructions: Array<string>,
		metadata: recipeMetadata,
	) {
		this._recipe = {
			description: "",
			servings: 1,
			metadata: {},
			instructionSet: [],
			name: "",
			ingredientList: [],
		};
		this.name = name;
		this.description = description;
		this.ingredientList = ingredients;
		this.instructions = instructions;
		this.metadata = metadata;
		if (this.metadata.baseServings) {
			this.servings = this.metadata.baseServings;
		} else {
			//If not specified defaults to one
			this.servings = 1;
		}
	}
	public get name() {
		return this._recipe.name;
	}
	public get description() {
		return this._recipe.description;
	}
	public get ingredientList() {
		return this._recipe.ingredientList;
	}
	public get instructions() {
		return this._recipe.instructionSet;
	}
	public get servings() {
		return this._recipe.servings;
	}
	public set name(name: string) {
		this._recipe.name = name;
	}
	public set description(description: string) {
		this._recipe.description = description;
	}
	public set ingredientList(ingredients: Ingredient[]) {
		this._recipe.ingredientList = ingredients;
	}
	public set instructions(instructions: string[]) {
		this._recipe.instructionSet = instructions;
	}
	public set servings(servings: number) {
		this._recipe.servings = servings;
	}
	public set metadata(metadata: recipeMetadata) {
		this._recipe.metadata = metadata;
	}
	public serialize(): serialRecipe {
		/*let serializedIngredients: string[] = [];
		this.ingredientList.map((ingredient) => {
			serializedIngredients.push(ingredient.fullName());
		});*/
		return this._recipe;
	}
	//changes the amount of servings and the required ingredient proportions accordingly
	public resizePortions(newServings: number) {
		let resizeRation: number = newServings / this.servings;
		for (let i = 0; i < this.ingredientList.length; i++) {
			this.ingredientList[i].resizeIngredient(resizeRation);
		}
	}
	public listInstrutions(): string {
		let instructions: string = "";
		this.instructions.map((instruction, i) => {
			instructions += i + ": " + instruction + "\n";
		});
		return instructions;
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
