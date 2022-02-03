import { stat } from "fs";
import React, { useState } from "react";
import Recipe, { serialRecipe } from "../../Interfaces-Classes/Recipe";
import SaveRecipe from "./SaveRecipe";
import "../recipeSearch/ResultItem.css";
import { v4 as uuidv4 } from "uuid";

interface Props {
	result: Recipe | serialRecipe;
}


const ResultItem = (props: Props) => {
	const [showIngredients, setShowIngredients] = useState(false);
	const [showInstructions, setshowInstructions] = useState(false);
	const [searchOverlayShown, setSearchOverlayShown] = useState(false);
	
	let rec: Recipe | serialRecipe = props.result;
	
	if(!(rec instanceof Recipe)) {
		rec = Recipe.constructFromInterface(rec);
	}

	const arrowDirection = (state: boolean) => {
		switch (state) {
			case true:
				return "▲";

			default:
				return "▼";
		}
	};
	return (
		<div>
			{/*Overlay system for recipe*/}
			{searchOverlayShown && (
				<div className="calendarOverlay">
					<button
						className="close"
						onClick={() => {
							setSearchOverlayShown(false);
						}}
					>
						X
					</button>
					<div className="OverlayName">{rec.name}</div>
					<div className="OverlayDescription">{rec.description}</div>
					<div className="OverlayListTitle"> Ingredient List </div>
					<div className="OverlayIngredientItem">
						{rec.ingredients.map((ingredient) => {
							return <li key={uuidv4()}>{ingredient.fullName()}</li>;
						})}
					</div>
					<div className="OverlayListTitle"> Instructions </div>
					<div className="OverlayInstructions">
						{rec.listInstrutions()}
					</div>

					<SaveRecipe
						className2="OverlaySaveRecipe"
						recipe={rec}
					></SaveRecipe>
				</div>
			)}
			{/*Displaying all the recipies when searches*/}
			<div className="Font">
				<div>
					<p
						className="Name"
						onClick={() => {
							setSearchOverlayShown(true);
						}}
					>
						{rec.name}
					</p>
				</div>
				{/* <ul>
									<div className="Description">{result.description}</div>

									<ul>
										{result.ingredientList.map((ingredient) => {
											return <div>{ingredient}</div>;
										})}
									</ul>
								</ul> */}
				<div className="Description">{rec.description}</div>
				<p
					className="DropDownButton "
					onClick={() => {
						setShowIngredients((state) => {
							return !state;
						});
					}}
				>
					Ingredients
					{arrowDirection(showIngredients)}
				</p>
				{showIngredients && (
					<ol>
						{rec.ingredients.map((ingredient) => {
							return (
								<li  key={uuidv4()} style={{ textAlign: "left" }} className="Ingredient">
									{ingredient.fullName()}
								</li>
							);
						})}
					</ol>
				)}
				<p
					className="DropDownButton "
					onClick={() => {
						setshowInstructions((state) => {
							return !state;
						});
					}}
				>
					Instructions
					{arrowDirection(showInstructions)}
				</p>
				{showInstructions && (
					<p className="DropDownText">{rec.listInstrutions()}</p>
				)}
				<SaveRecipe recipe={rec as Recipe}></SaveRecipe>
			</div>
		</div>
	);
};

export default ResultItem;
