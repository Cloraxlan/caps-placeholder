import { stat } from "fs";
import React, { useState } from "react";
import Recipe, { serialRecipe } from "../../Interfaces-Classes/Recipe";
import SaveRecipe from "./SaveRecipe";
import "../recipeSearch/ResultItem.css";
import { v4 as uuidv4 } from "uuid";
import FindRecipe from "../../components/Calendar/CalendarSearch/FindRecipe";
import { RecipeDate } from "./calendarSlice";

interface Props {
	result: Recipe | serialRecipe;
	onSwitchMonth?: (date: RecipeDate | undefined) => void;
}


const ResultItem = (props: Props) => {
	const [showIngredients, setShowIngredients] = useState(false);
	const [showInstructions, setshowInstructions] = useState(false);
	const [searchOverlayShown, setSearchOverlayShown] = useState(false);
	
	let rec: Recipe | serialRecipe = props.result;
	let showSave = true;
	if(!(rec instanceof Recipe)) {
		showSave = false;
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

	const foundDateHandler = (date: RecipeDate | undefined) => {
		console.log("Ran foundDateHandler in ResultItem")
		// if(props.onSwitchMonth)
		// 	props.onSwitchMonth(date);
	}

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
					{showSave ? 
						<SaveRecipe className2="OverlaySaveRecipe" recipe={rec} ></SaveRecipe>
					: 
						<FindRecipe recipe={rec} onDateFound={foundDateHandler}/> 
					}
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
				{showSave ? 
					<SaveRecipe className2="OverlaySaveRecipe" recipe={rec as Recipe} ></SaveRecipe>
				: 
					<FindRecipe recipe={rec} onDateFound={foundDateHandler}/> 
				}
			</div>
		</div>
	);
};

export default ResultItem;
