/* eslint-disable */
import { RecipeDate } from "../features/recipeSearch/calendarSlice";
import { serialRecipe } from "./Recipe";

export interface Day {
	date?: Date;
	//Eventually will be expanded into more complex data, for now strings work
	events: Array<{ recipe: serialRecipe; note: string }>;
	holiday?: string;
}
//Converts a list of recipeDates into Days
export const convertToDays = (recipeDates: Array<RecipeDate>) => {
	let days: Array<Day> = [];
	recipeDates.forEach((recipeDate) => {
		let date = recipeDate.date;
		let found = false;
		for (let i = 0; i < days.length; i++) {
			if (days[i].date?.toDateString() === date) {
				found = true;
				days[i].events.push({
					recipe: recipeDate.recipe,
					note: recipeDate.note as string,
				});
			}
		}
		if (!found) {
			//Add holiday stuff TODO
			days.push({
				date: new Date(recipeDate.date),
				events: [
					{ recipe: recipeDate.recipe, note: recipeDate.note as string },
				],
			});
		}
	});
	return days;
};
