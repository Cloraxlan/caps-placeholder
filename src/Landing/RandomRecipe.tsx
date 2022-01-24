import React from "react";
import Recipe, {
	constructIngredientFromString,
} from "../Interfaces-Classes/Recipe";
import RecipeShowcase from "./RecipeShowcase";

interface Props {}

const RandomRecipe = (props: Props) => {
	return (
		<div>
			<RecipeShowcase
				recipe={
					new Recipe(
						"Apple Pie",
						"It is very good takes like an hour to make",
						[
							constructIngredientFromString("5 cups of apples"),
							constructIngredientFromString("1 pie crust"),

							constructIngredientFromString("3 teaspoons of cinnamon"),
						],
						["combine ingredients", "bake"],
						{},
					)
				}
			></RecipeShowcase>
		</div>
	);
};

export default RandomRecipe;
