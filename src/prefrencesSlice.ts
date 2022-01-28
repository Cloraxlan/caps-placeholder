import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./app/store";
import { MASTER_VOLUME_CUSTOMARY } from "./Interfaces-Classes/CustomarySystem";
import { MASTER_WEIGHT_METRIC } from "./Interfaces-Classes/MetricSystem";
import Unit from "./Interfaces-Classes/Unit";

export type measureSetting = "DEFAULTW" | "DEFAULTV" | Unit;

export interface PreferenceState {
	prefferedVolume: measureSetting;
	prefferedWeight: measureSetting;
}

const initialState: PreferenceState = {
	prefferedVolume: MASTER_VOLUME_CUSTOMARY,
	prefferedWeight: MASTER_WEIGHT_METRIC,
};

export const prefrencesSlice: Slice = createSlice({
	name: "prefrences",
	initialState,
	reducers: {
		changeUnit: (state: any, action: PayloadAction<measureSetting>) => {
			switch (action.payload) {
				case "DEFAULTV":
					state.prefferedVolume = "DEFAULTV";
					break;
				case "DEFAULTW":
					state.prefferedWeight = "DEFAULTW";
					break;
				default:
					switch ((action.payload as Unit).measure) {
						case "VOLUME":
							state.prefferedVolume = action.payload as Unit;
							break;
						case "WEIGHT":
							state.prefferedWeight = action.payload as Unit;
							break;
					}
					break;
			}
		},
	},
});

export const { changeUnit } = prefrencesSlice.actions;
export const selectDefaultVolume = (state: RootState) =>
	state.prefrences.prefferedVolume;
export const selectDefaultWeight = (state: RootState) =>
	state.prefrences.prefferedWeight;
export default prefrencesSlice.reducer;
