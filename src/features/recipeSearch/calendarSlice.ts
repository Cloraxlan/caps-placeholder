import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import Recipe from "../../Interfaces-Classes/Recipe";

export interface RecipeDate {
	recipe: Recipe;
	date: Date;
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
			state.recipeDates.push(action.payload);
		},
	},
});

export const { addRecipeDate } = calendarSlice.actions;
export const recipeDates = (state: RootState) => state.calendar.recipeDates;

export default calendarSlice.reducer;
