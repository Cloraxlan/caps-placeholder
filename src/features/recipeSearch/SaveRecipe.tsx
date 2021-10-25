import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Recipe from "../../Interfaces-Classes/Recipe";
import calendarSlice, {
	addRecipeDate,
	CalendarState,
	RecipeDate,
	recipeDates,
} from "./calendarSlice";

interface Props {
	recipe: Recipe;
}

const SaveRecipe = (props: Props) => {
	const dispatch = useAppDispatch();
	const calendarr: Array<RecipeDate> = useAppSelector(recipeDates);
	let save = () => {
		dispatch(addRecipeDate(props.recipe.serialize()));
	};
	return (
		<div>
			<button onClick={save}>Save Recipe</button>
			{console.log(calendarr)}
		</div>
	);
};

export default SaveRecipe;
