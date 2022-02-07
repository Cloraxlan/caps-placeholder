import { stat } from "fs";
import React, { useState } from "react";
import Recipe from "../../Interfaces-Classes/Recipe";
import SaveRecipe from "./SaveRecipe";
import "../recipeSearch/ResultItem.css";
import {
	measureSetting,
	selectDefaultVolume,
	selectDefaultWeight,
} from "../../prefrencesSlice";
import { useAppSelector } from "../../app/hooks";
import Unit from "../../Interfaces-Classes/Unit";

interface Props {
	result: Recipe;
}

const ResultItem = (props: Props) => {
	const [showIngredients, setShowIngredients] = useState(false);
	const [showInstructions, setshowInstructions] = useState(false);
	const [searchOverlayShown, setSearchOverlayShown] = useState(false);
	let defaultWeight: measureSetting = useAppSelector(selectDefaultWeight);
	let defaultVolume: measureSetting = useAppSelector(selectDefaultVolume);

	if (defaultWeight == "DEFAULTW" && defaultVolume != "DEFAULTV") {
		props.result.convertIntoSingleUnit(defaultVolume as Unit, null);
	} else if (defaultWeight != "DEFAULTW" && defaultVolume == "DEFAULTV") {
		props.result.convertIntoSingleUnit(null, defaultWeight as Unit);
	} else if (defaultWeight != "DEFAULTW" && defaultVolume != "DEFAULTV") {
		props.result.convertIntoSingleUnit(
			defaultVolume as Unit,
			defaultWeight as Unit,
		);
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
					<div className="OverlayName">{props.result.name}</div>
					<div className="OverlayDescription">{props.result.description}</div>
					<div className="OverlayListTitle"> Ingredient List </div>
					<div className="OverlayIngredientItem">
						{props.result.ingredients.map((ingredient) => {
							return <li>{ingredient.fullName()}</li>;
						})}
					</div>
					<div className="OverlayListTitle"> Instructions </div>
					<div className="OverlayInstructions">
						{props.result.listInstrutions()}
					</div>

					<SaveRecipe
						className2="OverlaySaveRecipe"
						recipe={props.result}
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
					<ol>
						{props.result.ingredients.map((ingredient) => {
							return (
								<li style={{ textAlign: "left" }} className="Ingredient">
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
					<p className="DropDownText">{props.result.listInstrutions()}</p>
				)}
				<SaveRecipe recipe={props.result}></SaveRecipe>
			</div>
		</div>
	);
};

export default ResultItem;
