import './Landing.css';
import Card from "../components/UI/Card/Card";
import NutriFacts from "./NutriFacts/NutriFacts";
import RandomRecipe from "./RandomRecipe";
import React from 'react';

interface Props {}

const Landing = (props: Props) => {
	return (
		<React.Fragment>
			<h1 style={{ textAlign: "center" }}>Caps Placeholder</h1>
			<Card className='content'>
				<h3>Check this Recipe Out!</h3>
				<RandomRecipe />
			</Card>
			<Card className="facts">
				<NutriFacts />
			</Card>
		</React.Fragment>
	);
};

export default Landing;
