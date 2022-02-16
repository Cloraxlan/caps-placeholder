import { current } from "@reduxjs/toolkit";
import React from "react";
import { useState, useEffect } from "react";

import { isIdentifier } from "typescript";
import Recipe, {
	constructIngredientFromString,
	recipeMetadata,
} from "../../Interfaces-Classes/Recipe";
import SaveRecipe from "./SaveRecipe";
import nlp from "compromise";
import nlpNumbers from "compromise-numbers";
import UnitIngredient from "../../Interfaces-Classes/UnitIngredient";
import calendarSlice, {
	addRecipeDate,
	CalendarState,
	RecipeDate,
	selectRecipeDates,
} from "./calendarSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import "./AddCustomRecipe.css";

// interface Props {
// 	ingredients: String[];
// 	setIngredients: React.Dispatch<React.SetStateAction<String[]>>;
// }

const AddCustomRecipe = () => {
	const [addRecipeOverlayShown, setAddRecipeOverlayShown] = useState(false);
	const [saveRecipeOverlayShown, setSaveRecipeOverlayShown] = useState(false);
	let [currentName, setCurrentName] = useState<string>("");
	let [currentDescription, setCurrentDescription] = useState<string>("");
	let [currentSingleIngredient, setCurrentSingleIngredient] =
		useState<string>("");
	let [currentIngredients, setCurrentIngredients] = useState<string[]>(
		[] as string[],
	);
	let [currentInstructions, setCurrentInstructions] = useState<string>("");
	let [tempRecipeState, setTempRecipeState] = useState<Recipe>(
		new Recipe("", "", [], [], [] as recipeMetadata),
	);
	let [currentNote, setCurrentNote] = useState();
	let [currentDate, setCurrentDate] = useState("");
	const dispatch = useAppDispatch();

	// let tempRecipe: Recipe = new Recipe("", "", [], [], [] as recipeMetadata);

	/*let tempCurrentIngredients: String[] = [];
	tempCurrentIngredients = [...props.ingredients];*/
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

	let changeDate = (event: any) => {
		setCurrentDate(event.target.value);
		let d = new Date(event.target.value);
		d.setDate(d.getDate() + 1);
		d.setHours(0, 0, 0, 0);
		// console.log(d);
	};

	let changeNote = (event: any) => {
		setCurrentNote(event.target.value);
		// console.log(event.target.value);
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
		//it reloads after the prevent default
		event.preventDefault();
		console.log("submitran");
		console.log("event below");
		console.log(event);
		//Add a new recipe with the stuff
		let ingredientsWithTyping = currentIngredients.map((ingredient) => {
			const nlpI = nlp;
			let plugin = nlpNumbers;
			nlp.extend(plugin);
			let doc: any = nlpI(ingredient);
			if (doc.numbers().get().length < 1) {
				ingredient = "1 " + ingredient;
			}
			console.log("ingredient", ingredient);
			new UnitIngredient(ingredient);
			return constructIngredientFromString(ingredient);
		});
		let tempRecipe: Recipe = new Recipe(
			currentName as string,
			currentDescription as string,
			ingredientsWithTyping,
			[currentInstructions] as string[],
			[] as recipeMetadata,
		);
		setTempRecipeState(tempRecipe);
		console.log("TempRecipestate below");
		console.log(tempRecipeState);

		setCurrentName("");
		setCurrentDescription("");
		setCurrentIngredients([]);
		setCurrentInstructions("");
		setCurrentSingleIngredient("");
		console.log(
			"currentname:",
			currentName,
			"currentdescription:",
			currentDescription,
			"currentingrediants:",
			currentIngredients,
			"currentinstructions:",
			currentInstructions,
			"currentsingleingredient:",
			currentSingleIngredient,
		);
		if (event.target.innerText == "Save and Add Recipe") {
			let d = new Date(currentDate);
			d.setDate(d.getDate() + 1);
			d.setHours(0, 0, 0, 0);
			dispatch(
				addRecipeDate({
					date: d.toDateString(),
					recipe: tempRecipe.serialize(),
					note: currentNote,
				}),
			);
		}
		setAddRecipeOverlayShown(false);
	};

	return (
		<div>
			{addRecipeOverlayShown && (
				<div>
					<div
						className="BlackBackground"
						onClick={() => {
							setAddRecipeOverlayShown(false);
						}}
					/>
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
						<div className="AddARecipe">Add a Recipe </div>
						<input
							placeholder="Name"
							id="name"
							// form="notSubmitRecipeForm"
							onChange={changeName}
							value={currentName}
						></input>
						<input
							placeholder="Description"
							onChange={changeDescription}
							// form="notSubmitRecipeForm"
							value={currentDescription}
						></input>
						<input
							placeholder="Ingredient"
							onChange={changeSingleIngredient}
							onKeyPress={isEnter}
							// form="notSubmitRecipeForm"
							value={currentSingleIngredient}
						></input>
						<input
							placeholder="Instructions"
							onChange={changeInstructions}
							// form="notSubmitRecipeForm"
							value={currentInstructions}
						></input>
						<button onClick={submitRecipe}> Add Recipe </button>
						<button onClick={submitRecipe}> Save and Add Recipe</button>
						<input onChange={changeDate} type="date"></input>
						<input
							onChange={changeNote}
							role="textbox"
							contentEditable="true"
							placeholder="Add a note"
						></input>
						{/* <SaveRecipe
						buttonTyping="button"
						recipe={tempRecipeState}
						parentFunction={submitRecipe}
					></SaveRecipe> */}
						<ul>
							{currentIngredients.map((currentIngredient) => {
								return <li key={String(Math.random())}>{currentIngredient}</li>;
							})}
						</ul>
					</div>
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
