import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
// import { NotEmittedStatement } from "typescript";
import { RootState } from "../../app/store";
import {
	MASTER_VOLUME_METRIC,
	MASTER_WEIGHT_METRIC,
} from "../../Interfaces-Classes/MetricSystem";
import {
	serialRecipe,
	constructIngredientFromString,
} from "../../Interfaces-Classes/Recipe";

export interface RecipeDate {
	recipe: serialRecipe;
	date: string;
	note?: String;
}
export interface CalendarState {
	recipeDates: Array<RecipeDate>;
}
const initialState: CalendarState = {
	recipeDates: [
		{
			recipe: {
				name: "Bread",
				description: "dough of flour",
				ingredients: [
					constructIngredientFromString("1 cup of water").serialize(),
				],
				instructions: [],
				metadata: {},
				servings: 1
			},
			date: new Date("January 3rd 2022").toDateString(),
		},
	],
};
export const calendarSlice: Slice = createSlice({
	name: "calendar",
	initialState,
	reducers: {
		addRecipeDate: (state: any, action: PayloadAction<RecipeDate>) => {
			console.log(action.payload);
			state.recipeDates.push(action.payload);
		},
	},
});

export const { addRecipeDate } = calendarSlice.actions;
export const selectRecipeDates = (state: RootState) =>
	state.calendar.recipeDates;

export default calendarSlice.reducer;
