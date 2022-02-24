import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { NotEmittedStatement } from "typescript";
import { RootState } from "../../app/store";
import {
	MASTER_VOLUME_METRIC,
	MASTER_WEIGHT_METRIC,
} from "../../Interfaces-Classes/MetricSystem";
import Recipe, { serialRecipe } from "../../Interfaces-Classes/Recipe";

export interface RecipeDate {
	recipe: serialRecipe;
	date: string;
	note?: String;
}
export interface CalendarState {
	recipeDates: Array<RecipeDate>;
}
const initialState: CalendarState = {
	recipeDates: [],
};
export const calendarSlice: Slice = createSlice({
	name: "calendar",
	initialState,
	reducers: {
		addRecipeDate: (state: any, action: PayloadAction<RecipeDate>) => {
			console.log(action.payload);

			state.recipeDates.push(action.payload);
			fetch("http://rozpadek.me/search/add", {
				method: "POST",

				body: new URLSearchParams({
					recipe: JSON.stringify(action.payload.recipe),
				}),
			});
			console.log(JSON.stringify(action.payload.recipe));
		},
	},
});

export const { addRecipeDate } = calendarSlice.actions;
export const selectRecipeDates = (state: RootState) =>
	state.calendar.recipeDates;

export default calendarSlice.reducer;
