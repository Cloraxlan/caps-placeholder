export default class Recipe {
	private _name: string;
	private _description: string;
	constructor(name: string, description: string) {
		this._name = name;
		this._description = description;
	}
	public get name() {
		return this._name;
	}
	public get description() {
		return this._description;
	}
}
