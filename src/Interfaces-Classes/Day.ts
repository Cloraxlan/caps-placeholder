import { Interface } from "readline";
import { RecipeDate } from "../features/recipeSearch/calendarSlice";
import Recipe from "./Recipe";

export interface Day {
	date: Date;
	//Eventually will be expanded into more complex data, for now strings work
	events: Array<{ recipe: Recipe; note: string }>;
	holiday?: string;
}
//Converts a list of recipeDates into Days
export const convertToDays = (recipeDates: Array<RecipeDate>) => {
	let days: Array<Day> = [];
	recipeDates.map((recipeDate) => {
		let date = recipeDate.date;
		let found = false;
		for (let i = 0; i < days.length; i++) {
			if (days[i].date == date) {
				found = true;
				days[i].events.push({
					recipe: recipeDate.recipe,
					note: "TODO REMEBER OKAY!!",
				});
				break;
			}
		}
		if (!found) {
			//Add holiday stuff TODO
			days.push({
				date: recipeDate.date,
				events: [{ recipe: recipeDate.recipe, note: "TODO REMEBER OKAY!!" }],
			});
		}
	});
	return days;
};
