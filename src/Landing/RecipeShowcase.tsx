import React from "react";
import SaveRecipe from "../features/recipeSearch/SaveRecipe";
import Recipe from "../Interfaces-Classes/Recipe";
interface Props {
	recipe: Recipe;
}

const RecipeShowcase = (props: Props) => {
	return (
		<div>
			<h2>{props.recipe.name}</h2>
			<p>{props.recipe.description}</p>
			<SaveRecipe recipe={props.recipe}></SaveRecipe>
		</div>
	);
};

export default RecipeShowcase;
