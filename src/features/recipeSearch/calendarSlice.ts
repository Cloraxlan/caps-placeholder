import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { NotEmittedStatement } from "typescript";
import { RootState } from "../../app/store";
import Recipe from "../../Interfaces-Classes/Recipe";

import Ingredient from "../../Interfaces-Classes/Ingredient";

export interface RecipeDate {
	recipe: Recipe;
	date: Date;
	note?: String;
}
export interface CalendarState {
	recipeDates: Array<RecipeDate>;
}
const initialState: CalendarState = {
	recipeDates: [
		// { 
		// 	recipe: 
		// 	{
		// 		name: "Bread",
		// 		description: "dough of flour",
		// 		ingredients: [ new Ingredient("1 cup warm water", "VOLUME") ],
		// 		instructions: [],
		// 	}, 
		// 	date: new Date("January 3rd 2022")
		// }
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
