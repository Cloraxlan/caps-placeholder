import BulkIngredient from "./BulkIngredient";
import Ingredient, { allUnits, serializedIngredient } from "./Ingredient";
import Unit, { identifyUnitsByString } from "./Unit";
import UnitIngredient from "./UnitIngredient";

export interface serialRecipe {
	name: string;
	description: string;
	instructions: Array<string>;
	ingredients: Array<serializedIngredient>;
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
	private _servings: number;
	private _ingredients: Ingredient[];
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
			instructions: [],
			name: "",
			ingredients: [],
		};
		this.name = name;
		this.description = description;
		this._ingredients = ingredients;
		this.instructions = instructions;
		this.metadata = metadata;
		if (this._recipe.servings) {
			this._servings = this._recipe.metadata.baseServings as number;
		} else {
			//If not specified defaults to one
			this._servings = 1;
		}
		//Updates the interface
		this.ingredients = ingredients;
	}
	public get name() {
		return this._recipe.name;
	}
	public get description() {
		return this._recipe.description;
	}
	public get ingredients() {
		return this._ingredients;
	}
	public get instructions() {
		return this._recipe.instructions;
	}
	public get servings() {
		return this._servings;
	}
	public set name(name: string) {
		this._recipe.name = name;
	}
	public set description(description: string) {
		this._recipe.description = description;
	}
	public set ingredients(ingredients: Ingredient[]) {
		this._ingredients = ingredients;
		let serializedIngredients: serializedIngredient[] = [];
		ingredients.map((ingredient) => {
			serializedIngredients.push(ingredient.serialize());
		});
		this._recipe.ingredients = serializedIngredients;
	}
	public set instructions(instructions: string[]) {
		this._recipe.instructions = instructions;
	}
	public set servings(servings: number) {
		this._servings = servings;
	}
	public set metadata(metadata: recipeMetadata) {
		this._recipe.metadata = metadata;
	}
	//converts the Ingredients into a single set of preffered units
	public convertIntoSingleUnit(volume: Unit, weight: Unit) {
		for (let i = 0; i < this.ingredients.length; i++) {
			switch (this.ingredients[i].measure) {
				case "UNITLESS":
					break;
				case "VOLUME":
					(this.ingredients[i] as BulkIngredient).convertUnits(volume);
					break;
				case "WEIGHT":
					(this.ingredients[i] as BulkIngredient).convertUnits(weight);

					break;
			}
		}
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
		for (let i = 0; i < this.ingredients.length; i++) {
			this.ingredients[i].resizeIngredient(resizeRation);
		}
	}
	public listInstrutions(): string {
		let instructions: string = "";
		this.instructions.map((instruction, i) => {
			instructions += i + ": " + instruction + "\n";
		});
		return instructions;
	}
	//Creates a recipe from a serialized recipe
	public static constructFromInterface(recipe: serialRecipe): Recipe {
		//Creates ingredients from serialized ingredients
		let ingredients: Ingredient[] = [];
		recipe.ingredients.map((ingredient) => {
			ingredients.push(Ingredient.constructFromInterface(ingredient));
		});
		return new Recipe(
			recipe.name,
			recipe.description,
			ingredients,
			recipe.instructions,
			recipe.metadata,
		);
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
