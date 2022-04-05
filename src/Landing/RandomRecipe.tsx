import React, { useEffect, useState } from "react";
import Recipe, {
	constructIngredientFromString,
	serialRecipe,
} from "../Interfaces-Classes/Recipe";
import RecipeShowcase from "./RecipeShowcase";
let r: Recipe[] = [];
interface Props {}
const RandomRecipe = (props: Props) => {
	const [recipes, setRecipes] = useState(r);

	useEffect(() => {
		let r: Recipe[] = [];
		let x = fetch("http://rozpadek.me/search/findAll/");
		x.then((res) => {
			res.json().then((json) => {
				json.map((recipe: serialRecipe) => {
					r.push(Recipe.constructFromInterface(recipe));
				});
				setRecipes(r);
			});
		});
	}, []);
	console.log(Math.floor(Math.random() * recipes.length));
	console.log(recipes.length);
	return (
		<div>
			{recipes.length > 0 && (
				<RecipeShowcase
					recipe={recipes[Math.floor(Math.random() * recipes.length)]}
				></RecipeShowcase>
			)}
		</div>
	);
};

export default RandomRecipe;
