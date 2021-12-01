import { stat } from "fs";
import React, { useState } from "react";
import Recipe from "../../Interfaces-Classes/Recipe";
import SaveRecipe from "./SaveRecipe";
import "../recipeSearch/ResultItem.css";

interface Props {
	result: Recipe;
}

const ResultItem = (props: Props) => {
	const [showIngredients, setShowIngredients] = useState(false);
	const [showInstructions, setshowInstructions] = useState(false);
	const [searchOverlayShown, setSearchOverlayShown] = useState(false);

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
					<div className="OverlayName">{props.result.name}</div>
					<div className="OverlayDescription">{props.result.description}</div>
					<div className="OverlayListTitle"> Ingredient List </div>
					<div className="OverlayIngredientItem">
						{props.result.ingredientList.map((ingredient) => {
							return <li>{ingredient}</li>;
						})}
					</div>
					<div> Instructions </div>
					<div className="OverlayInstructions">{props.result.instuctions}</div>
				</div>
			)}
			<div className="Font">
				<div>
					<p
						className="Name"
						onClick={() => {
							setSearchOverlayShown(true);
							console.log("Hi");
						}}
					>
						{props.result.name}
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
				<div className="Description">{props.result.description}</div>
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
					<ul>
						{props.result.ingredientList.map((ingredient) => {
							return <li className="Ingredient">{ingredient}</li>;
						})}
					</ul>
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
					<p className="DropDownText">{props.result.instuctions}</p>
				)}
				<SaveRecipe recipe={props.result}></SaveRecipe>
			</div>
		</div>
	);
};

export default ResultItem;
