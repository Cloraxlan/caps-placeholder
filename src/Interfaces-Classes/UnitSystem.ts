/* eslint-disable */
import { MASTER_VOLUME_CUSTOMARY, MASTER_WEIGHT_CUSTOMARY } from "./CustomarySystem";
import { MASTER_VOLUME_METRIC, MASTER_WEIGHT_METRIC } from "./MetricSystem";
import Unit from "./Unit";
export interface SystemConversion {
	baseSystem: string;
	finalSystem: string;
	measure: "VOLUME" | "WEIGHT";
	convert: number;
	initMaster: Unit;
	finalMaster: Unit;
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
			initMaster: MASTER_VOLUME_CUSTOMARY,
			finalMaster: MASTER_VOLUME_METRIC,
		},
		{
			baseSystem: "METRIC",
			finalSystem: "CUSTOMARY",
			measure: "VOLUME",
			convert: 0.264172,
			initMaster: MASTER_VOLUME_METRIC,
			finalMaster: MASTER_VOLUME_CUSTOMARY,
		},
	];
export const KNOW_SYSTEM_MASTER_CONVERSION_FACTORS_WEIGHT: SystemConversion[] =
	[
		
		{
			baseSystem: "CUSTOMARY",
			finalSystem: "METRIC",
			measure: "WEIGHT",
			convert: 0.453592,
			initMaster: MASTER_WEIGHT_CUSTOMARY,
			finalMaster: MASTER_WEIGHT_METRIC,
		},
		{
			baseSystem: "METRIC",
			finalSystem: "CUSTOMARY",
			measure: "WEIGHT",
			convert: 2.20462,
			initMaster: MASTER_WEIGHT_METRIC,
			finalMaster: MASTER_WEIGHT_CUSTOMARY,
		},
	];
	
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
			//NOTE FOR TOMMOROW UNIT IS NOT BEING CONVERTED IN RIGHT ORDER!!!
			console.log(finalUnit.system);
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
	//Basic conversion with no logic used when everything is already know to work
	private convertSystems(
		conversion: SystemConversion,
		magnitude: number,
	): number {
		return conversion.convert * magnitude;
	}
	//More logical version of conversion that finds what system to convert into
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
			console.log(this._unit);

			console.log(this._unit);
			//Convert into the master so you can convert into the other systems master
			magnitude = this.convertBetweenUnitInSameSystem(
				(conversion as SystemConversion).initMaster,
				magnitude,
			);
			this._unit = (conversion as SystemConversion).finalMaster;

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
			console.log("oii");
		}
		return this.convertBetweenUnitInSameSystem(finalUnit, magnitude);
	}
}
