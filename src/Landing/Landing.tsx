import React from "react";
import NutriFacts from "./NutriFacts/NutriFacts";
import RandomRecipe from "./RandomRecipe";
interface Props {}

const Landing = (props: Props) => {
	return (
		<div>
			<h1>Caps Placeholder</h1>
			<h3>Check this Recipe Out!</h3>
			<RandomRecipe></RandomRecipe>
			<NutriFacts />
		</div>
	);
};

export default Landing;
