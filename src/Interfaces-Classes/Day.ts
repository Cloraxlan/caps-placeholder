import { Interface } from "readline";
import { RecipeDate } from "../features/recipeSearch/calendarSlice";
import Recipe from "./Recipe";

export interface Day {
	date: Date;
	//Eventually will be expanded into more complex data, for now strings work
	events: Array<{ recipe: Recipe; note: string }>;
	holiday?: string;
}
