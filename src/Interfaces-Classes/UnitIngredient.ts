import Ingredient from "./Ingredient";
export default class UnitIngredient extends Ingredient {
	constructor(ingredientString: string) {
		super(ingredientString);
	}
	//Changes amount of ingredient needed to get the right portion size
	public resizePortion(proportion: number) {
		this._magnitude = this._magnitude * proportion;
	}
}
