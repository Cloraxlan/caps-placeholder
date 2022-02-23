/* eslint-disable */
import Ingredient from "./Ingredient";
//An ingredient that is its own unit/unitless
export default class UnitIngredient extends Ingredient {
	constructor(ingredientString: string) {
		super(ingredientString, "UNITLESS");
	}
	//Changes amount of ingredient needed to get the right portion size
	public resizePortion(proportion: number) {
		this.magnitude = this.magnitude * proportion;
	}
}
