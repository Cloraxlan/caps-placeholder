import React from "react";
import RandomRecipe from "./RandomRecipe";
interface Props {}

const Landing = (props: Props) => {
	return (
		<div>
			<h1>Caps Placeholder</h1>
			<h3>Check this Recipe Out!</h3>
			<RandomRecipe></RandomRecipe>
		</div>
	);
};

export default Landing;
