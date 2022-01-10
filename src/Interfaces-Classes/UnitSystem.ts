import { MASTER_VOLUME_CUSTOMARY } from "./CustomarySystem";
import { MASTER_VOLUME_METRIC } from "./MetricSystem";
import Unit from "./Unit";
export interface SystemConversion {
	baseSystem: string;
	finalSystem: string;
	measure: "VOLUME" | "WEIGHT";
	convert: number;
	master: Unit;
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
			master: MASTER_VOLUME_CUSTOMARY,
		},
		{
			baseSystem: "METRIC",
			finalSystem: "CUSTOMARY",
			measure: "VOLUME",
			convert: 0.264172,
			master: MASTER_VOLUME_METRIC,
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
	//private _system: KNOWN_SYSTEMS;
	constructor(unit: Unit) {
		this._unit = unit;
		//this._system = system;
	}
	private convertBetweenUnitInSameSystem(
		finalUnit: Unit,
		magnitude: number,
	): number {
		//Check if same unit system is used
		if (finalUnit.system != this._unit.system) {
			throw "Unit System Mismatch";
		}
		if (finalUnit.measure != this._unit.measure) {
			throw (
				"Unit measure cannot be converted. Attempted to convert " +
				finalUnit.measure +
				" to " +
				this._unit.measure
			);
		}
		return (
			(finalUnit.convertionFactor * magnitude) / this._unit.convertionFactor
		);
	}
	//convert between systems using the conversion if know
	private convertSystems(
		conversion: SystemConversion,
		magnitude: number,
	): number {
		return conversion.convert * magnitude;
	}

	private convertIntoSystem(
		systemToConvertInto: KNOWN_SYSTEMS,
		magnitude: number,
	): number {
		let conversion: SystemConversion | undefined = undefined;
		switch (this._unit.measure) {
			case "VOLUME":
				KNOW_SYSTEM_MASTER_CONVERSION_FACTORS.VOLUME.map((con) => {
					if (
						con.baseSystem == this._unit.system &&
						con.finalSystem == systemToConvertInto
					) {
						conversion = con;
					}
				});
				break;
			case "WEIGHT":
				KNOW_SYSTEM_MASTER_CONVERSION_FACTORS.WEIGHT.map((con) => {
					if (
						con.baseSystem == this._unit.system &&
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
			this._unit = (conversion as SystemConversion).master;
			return this.convertSystems(conversion, magnitude);
		}
	}
	//Converts between systems and units
	public convert(magnitude: number, finalUnit: Unit) {
		if (this._unit.system != finalUnit.system) {
			magnitude = this.convertIntoSystem(
				finalUnit.system as KNOWN_SYSTEMS,
				magnitude,
			);
		}
		this.convertBetweenUnitInSameSystem(finalUnit, magnitude);
	}
}
