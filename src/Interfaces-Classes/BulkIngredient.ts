import Ingredient from "./Ingredient";
import { ALL_CUSTOMARY_VOLUME } from "./CustomarySystem";
const METRIC_VOLUME_FULL = ["liter"];
//NOTE ONLY VOLUME IS SUPPORTED RN
export default class BulkIngredient extends Ingredient {
	private _baseUnit: string;
	private _baseSystem: string;
	private _type: "VOLUME" | "WEIGHT" | "NULL";
	private _unit: string;
	private _system: "METRIC" | "CUSTOMARY" | "NULL";

	constructor(
		system: "METRIC" | "CUSTOMARY" | "NULL",
		unit: string,
		ingredientString: string,
	) {
		super(ingredientString);
		this._unit = unit;
		this._system = system;
		//Just some placeholder values
		this._baseSystem = "";
		this._baseUnit = "";
		this._type = "NULL";

		this.identifyUnits(ingredientString);
		//Checks if units are identified correctly
		if (this._baseUnit == "" || this._baseUnit == "" || this._type == "NULL") {
			throw "Unable to construct Ingredient";
		}
		//Converts Unit
		if (this._unit != this._baseUnit) {
			if (this._system != this._baseSystem) {
				//TODO Convert System
			}
		}
	}
	private identifyUnits(ingredientString: string) {
		//Checks if no unit can be found
		//TODO WEIGHT
		if (
			!this.identifyVolume(ingredientString) &&
			!this.identifyWeight(ingredientString)
		) {
			throw "Unable to identify unit";
		}
	}
	private identifyVolume(ingredientString: string): boolean {
		ALL_CUSTOMARY_VOLUME.map((unit) => {
			if (
				ingredientString.toLocaleLowerCase().includes(unit.toLocaleLowerCase())
			) {
				//TODO Add metric system and other odd unit systems
				this._baseSystem = "CUSTOMARY";
				this._baseUnit = unit;
				this._type = "VOLUME";
				return true;
			}
		});
		//TODO METRIC
		return false;
	}
	private identifyWeight(ingredientString: string): boolean {
		return false;
	}
}
