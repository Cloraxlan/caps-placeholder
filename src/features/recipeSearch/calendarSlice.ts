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
					constructIngredientFromString("500g of flour").serialize(),
				],
				instructions: [ "Stir water", "add flour" ],
				metadata: {},
				servings: 1
			},
			date: new Date("January 3 2022").toDateString(),
		},
		{
			recipe: {
				name: "Cake",
				description: "sugar dough of flour",
				ingredients: [
					constructIngredientFromString("1 cup of water").serialize(),
					constructIngredientFromString("500g of flour").serialize(),
					constructIngredientFromString("3 tablespoons of sugar").serialize(),
				],
				instructions: [ "Stir water", "add flour with sugar" ],
				metadata: {},
				servings: 4
			},
			date: new Date("February 7 2022").toDateString(),
		},
	],
};
export const calendarSlice: Slice = createSlice({
	name: "calendar",
	initialState,
	reducers: {
		addRecipeDate: (state: any, action: PayloadAction<RecipeDate>) => {
			console.log(state);
			console.log(action.payload);
			state.recipeDates.push(action.payload);
		},
	},
});

export const { addRecipeDate } = calendarSlice.actions;
export const selectRecipeDates = (state: RootState) =>
	state.calendar.recipeDates;

export default calendarSlice.reducer;
