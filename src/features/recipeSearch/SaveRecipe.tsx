import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Recipe from "../../Interfaces-Classes/Recipe";
import "./SaveRecipe.css";
import calendarSlice, {
	addRecipeDate,
	CalendarState,
	RecipeDate,
	selectRecipeDates,
} from "./calendarSlice";

interface Props {
	recipe: Recipe;
}

const SaveRecipe = (props: Props) => {
	const dispatch = useAppDispatch();
	const calendarr: Array<RecipeDate> = useAppSelector(selectRecipeDates);
	let save = () => {
		let month = prompt("Month (as name)");
		let day = prompt("Day(as number)");
		let date = new Date(month + " " + day + ", 2021");
		dispatch(addRecipeDate({ date: date, recipe: props.recipe.serialize() }));
	};
	return (
		<div>
			<button onClick={save} className="Save">
				Save Recipe
			</button>
		</div>
	);
};

export default SaveRecipe;
