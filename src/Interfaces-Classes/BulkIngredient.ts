import Ingredient from "./Ingredient";
import Unit from "./Unit";
import UnitSystem from "./UnitSystem";
//NOTE ONLY VOLUME IS SUPPORTED RN
export default class BulkIngredient extends Ingredient {
	private _unit: Unit;
	constructor(unit: Unit, ingredientString: string) {
		super(ingredientString, unit.measure);
		this._unit = unit;
	}
	public get unit() {
		return this._unit;
	}
	//Pluralizes units
	public pluralizedName() {
		if (this.magnitude != 1) {
			return this.unit.fullName + "s" + " " + this.ingredientName;
		} else {
			return this.unit.fullName + " " + this.ingredientName;
		}
	}
	public fullName(): string {
		return this._magnitude + " " + this.pluralizedName();
	}
	//Converts into diffrent units and changes the unit of the class
	public convertUnits(unitToConvertInto: Unit) {
		let converter = new UnitSystem(this._unit);
		this._unit = unitToConvertInto;
		this._magnitude = converter.convert(this._magnitude, unitToConvertInto);
	}
}
