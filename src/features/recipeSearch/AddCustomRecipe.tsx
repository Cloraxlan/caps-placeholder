import { current } from "@reduxjs/toolkit";
import React from "react";
import { useState, useEffect } from "react";
import { isIdentifier } from "typescript";
import Recipe, {
	constructIngredientFromString,
	recipeMetadata,
} from "../../Interfaces-Classes/Recipe";
import SaveRecipe from "./SaveRecipe";
// interface Props {
// 	ingredients: String[];
// 	setIngredients: React.Dispatch<React.SetStateAction<String[]>>;
// }

const AddCustomRecipe = () => {
	const [addRecipeOverlayShown, setAddRecipeOverlayShown] = useState(false);
	const [saveRecipeOverlayShown, setSaveRecipeOverlayShown] = useState(false);
	let [currentName, setCurrentName] = useState<string>();
	let [currentDescription, setCurrentDescription] = useState<string>();
	let [currentSingleIngredient, setCurrentSingleIngredient] =
		useState<string>();
	let [currentIngredients, setCurrentIngredients] = useState<string[]>([]);
	let [currentInstructions, setCurrentInstructions] = useState<string>();
	/*let tempCurrentIngredients: String[] = [];
	tempCurrentIngredients = [...props.ingredients];*/
	let tempRecipe: Recipe = new Recipe("", "", [], [], [] as recipeMetadata);
	const changeName = (event: any) => {
		setCurrentName(event.target.value);
	};

	const changeDescription = (event: any) => {
		setCurrentDescription(event.target.value);
	};

	const changeIngredients = (event: string) => {
		setCurrentIngredients((prevIngredients) => {
			const tempIngredients = [...prevIngredients, event];
			console.log(tempIngredients);
			return tempIngredients;
		});
	};

	const changeSingleIngredient = (event: any) => {
		setCurrentSingleIngredient(event.target.value);
	};

	const changeInstructions = (event: any) => {
		setCurrentInstructions(event.target.value);
	};

	const isEnter = (event: any) => {
		if (event.key === "Enter") {
			if (event.target.value != "") {
				changeIngredients(event.target.value);
				setCurrentSingleIngredient("");
			} else {
				alert("Please input an ingredient");
			}
		}
	};

	/*useEffect(() => {
		tempCurrentIngredients = [...props.ingredients];
	}, [props.ingredients]);*/

	const submitRecipe = (event: any) => {
		event.preventDefault();
		console.log(event);
		//Add a new recipe with the stuff
		let ingredientsWithTyping = currentIngredients.map((ingredient) => {
			return constructIngredientFromString(ingredient);
		});
		tempRecipe = new Recipe(
			currentName as string,
			currentDescription as string,
			ingredientsWithTyping,
			[currentInstructions] as string[],
			[] as recipeMetadata,
		);
		console.log(tempRecipe);
		setCurrentName("");
		setCurrentDescription("");
		setCurrentIngredients([]);
		setCurrentInstructions("");
		setCurrentSingleIngredient("");
		if (event.nativeEvent.submitter.innerText == "Save and Add Recipe") {
			setSaveRecipeOverlayShown(true);
			//Save a new recipe onto calendar with the stuff
		}
	};

	// if(document.getElementById('name') != null){
	// 	document.getElementById('name').addEventListener('keypress', function(event) {
	// 		if (event.keyCode == 13) {
	// 			event.preventDefault();
	// 		}
	// 	});}
	return (
		<div>
			{saveRecipeOverlayShown && <SaveRecipe recipe={tempRecipe}></SaveRecipe>}
			{addRecipeOverlayShown && (
				<div className="calendarOverlay">
					<button
						className="close"
						onClick={(e) => {
							e.preventDefault();
							setAddRecipeOverlayShown(false);
						}}
					>
						X
					</button>
					<form onSubmit={submitRecipe} id="submitRecipeForm">
						<div>Add a Recipe </div>
						<input
							placeholder="Name"
							id="name"
							form="notSubmitRecipeForm"
							onChange={changeName}
							value={currentName}
						></input>
						<input
							placeholder="Description"
							onChange={changeDescription}
							form="notSubmitRecipeForm"
							value={currentDescription}
						></input>
						<input
							placeholder="Ingredient"
							onChange={changeSingleIngredient}
							onKeyPress={isEnter}
							form="notSubmitRecipeForm"
							value={currentSingleIngredient}
						></input>
						<input
							placeholder="Instructions"
							onChange={changeInstructions}
							form="notSubmitRecipeForm"
							value={currentInstructions}
						></input>
						<button type="submit"> Add Recipe </button>
						<button type="submit"> Save and Add Recipe</button>
					</form>
					<ul>
						{currentIngredients.map((currentIngredient) => {
							return <li key={String(Math.random())}>{currentIngredient}</li>;
						})}
					</ul>
				</div>
			)}
			<button
				onClick={() => {
					setAddRecipeOverlayShown(true);
				}}
			>
				Add Recipe
			</button>
		</div>
	);
};

export default AddCustomRecipe;
