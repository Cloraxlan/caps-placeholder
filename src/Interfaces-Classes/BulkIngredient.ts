import Ingredient from "./Ingredient";
import Unit from "./Unit";
//NOTE ONLY VOLUME IS SUPPORTED RN
export default class BulkIngredient extends Ingredient {
	private _unit : Unit;
	constructor(
		unit: Unit,
		ingredientString: string,
	) {
		super(ingredientString, unit.measure);
		this._unit = unit;
		
		
	}
	public get unit(){
		return this._unit
	}
	
}
