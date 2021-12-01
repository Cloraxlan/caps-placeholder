import React, { ReactElement } from "react";
import { useAppSelector } from "../../app/hooks";
import { RecipeDate, selectRecipeDates } from "../recipeSearch/calendarSlice";

interface Props {}

function GroceryList({}: Props): ReactElement {
	let recipes: RecipeDate[] = useAppSelector(selectRecipeDates);
	console.log(recipes);
	return (
		<div>
			<ul>
				{recipes.map((recipe) => {
					return <li>{recipe.recipe.ingredientList}</li>;
				})}
			</ul>
		</div>
	);
}

export default GroceryList;
