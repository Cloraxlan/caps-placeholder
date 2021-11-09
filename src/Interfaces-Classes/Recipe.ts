export interface serialRecipe {
	name: string;
	description: string;
	ingredientList: Array<string>;
}
export default class Recipe {
	private _name: string;
	private _description: string;
	private _instuctions: string;
	//Only a string for now to be kept simple, will later be expanded into new class
	private _ingredientList: Array<string>;
	constructor(
		name: string,
		description: string,
		ingredients: Array<string>,
		instuctions: string,
	) {
		this._name = name;
		this._description = description;
		this._ingredientList = ingredients;
		this._instuctions = instuctions;
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
	public get instuctions() {
		return this._instuctions;
	}
	public serialize(): serialRecipe {
		return {
			name: this._name,
			description: this._description,
			ingredientList: this._ingredientList,
		};
	}
}
