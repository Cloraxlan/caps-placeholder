import Unit from "./Unit";
export interface SystemConversion {
	baseSystem: string;
	finalSystem: string;
	measure: "VOLUME" | "WEIGHT";
	convert: number;
}
//Converting between system declarations
export type KNOWN_SYSTEMS = "METRIC" | "CUSTOMARY";
export const KNOW_SYSTEM_MASTER_CONVERSION_FACTORS_VOLUME: SystemConversion[] =
	[
		{
			baseSystem: "CUSTOMARY",
			finalSystem: "METRIC",
			measure: "VOLUME",
			convert: 3.785,
		},
		{
			baseSystem: "METRIC",
			finalSystem: "CUSTOMARY",
			measure: "VOLUME",
			convert: 0.264172,
		},
	];
export const KNOW_SYSTEM_MASTER_CONVERSION_FACTORS_WEIGHT: SystemConversion[] =
	[];
export const KNOW_SYSTEM_MASTER_CONVERSION_FACTORS = {
	VOLUME: KNOW_SYSTEM_MASTER_CONVERSION_FACTORS_VOLUME,
	WEIGHT: KNOW_SYSTEM_MASTER_CONVERSION_FACTORS_WEIGHT,
};
export default class UnitSystem {
	private _unit: Unit;
	protected _system: KNOWN_SYSTEMS;
	constructor(unit: Unit, system: KNOWN_SYSTEMS) {
		this._unit = unit;
		this._system = system;
	}
	public convertBetweenUnitInSameSystem(
		currentUnit: Unit,
		magnitude: number,
	): number {
		//Check if same unit system is used
		if (currentUnit.system != this._unit.system) {
			throw "Unit System Mismatch";
		}
		if (currentUnit.measure != this._unit.measure) {
			throw (
				"Unit measure cannot be converted. Attempted to convert " +
				currentUnit.measure +
				" to " +
				this._unit.measure
			);
		}
		return (
			(currentUnit.convertionFactor * magnitude) / this._unit.convertionFactor
		);
	}
	//convert between systems using the conversion if know
	private convertSystems(
		conversion: SystemConversion,
		magnitude: number,
	): number {
		return conversion.convert * magnitude;
	}

	public convertIntoSystem(
		unit: Unit,
		systemToConvertInto: KNOWN_SYSTEMS,
		magnitude: number,
	): number {
		let conversion: SystemConversion | undefined = undefined;
		switch (unit.measure) {
			case "VOLUME":
				KNOW_SYSTEM_MASTER_CONVERSION_FACTORS.VOLUME.map((con) => {
					if (
						con.baseSystem == unit.system &&
						con.finalSystem == systemToConvertInto
					) {
						conversion = con;
					}
				});
				break;
			case "WEIGHT":
				KNOW_SYSTEM_MASTER_CONVERSION_FACTORS.WEIGHT.map((con) => {
					if (
						con.baseSystem == unit.system &&
						con.finalSystem == systemToConvertInto
					) {
						conversion = con;
					}
				});
				break;
		}
		if (!conversion) {
			throw "Cannot convert, system conversion unknown";
		} else {
			return this.convertSystems(conversion, magnitude);
		}
	}
}
