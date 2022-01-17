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
import { MASTER_VOLUME_METRIC, MASTER_WEIGHT_METRIC } from "../../Interfaces-Classes/MetricSystem";
import BulkIngredient from "../../Interfaces-Classes/BulkIngredient";

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
		props.recipe.convertIntoSingleUnit(MASTER_VOLUME_METRIC, MASTER_WEIGHT_METRIC);
		//console.log((props.recipe.ingredientList[3] as BulkIngredient).unit)
		console.log((props.recipe.ingredientList[3] ).measure)

		dispatch(addRecipeDate({ date: date, recipe: props.recipe.serialize() }));
	};
	return (
		<div>
			<button onClick={save} className="Save">
				Save Recipe
			</button>
			{console.log(calendarr)}
		</div>
	);
};

export default SaveRecipe;
