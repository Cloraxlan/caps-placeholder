import React from "react";
import { useState, useEffect } from "react";
import { isIdentifier } from "typescript";

interface Props {}

const AddCustomRecipe = (props: Props) => {
	const [addRecipeOverlayShown, setAddRecipeOverlayShown] = useState(false);
	let [currentName, setCurrentName] = useState();
	let [currentDescription, setCurrentDescription] = useState();
	let [currentIngredients, setCurrentIngredients] = useState<String[]>([]);
	let [currentSingleIngredient, setCurrentSingleIngredient] = useState();
	let [currentInstructions, setCurrentInstructions] = useState();

	useEffect(() => {}, []);

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
			changeIngredients(event.target.value);
		}
	};

	const submitRecipe = (event: any) => {
		event.preventDefault();
		console.log(event);
		if (event.nativeEvent.submitter.innerText == "Add Recipe") {
			//Add a new recipe with the stuff
		} else if (event.nativeEvent.submitter.innerText == "Save and Add Recipe") {
			//Save a new recipe onto calendar with the stuff
		}
	};

	return (
		<div>
			{addRecipeOverlayShown && (
				<form onSubmit={submitRecipe} className="calendarOverlay">
					<button
						className="close"
						onClick={() => {
							setAddRecipeOverlayShown(false);
						}}
					>
						X
					</button>
					<div>Add a Recipe </div>
					<input placeholder="Name" onChange={changeName}></input>
					<input placeholder="Description" onChange={changeDescription}></input>
					<input
						placeholder="Ingredient"
						onChange={changeSingleIngredient}
						onKeyPress={isEnter}
					></input>
					<input
						placeholder="Instructions"
						onChange={changeInstructions}
					></input>
					<button type="submit"> Add Recipe </button>
					<button type="submit"> Save and Add Recipe</button>
					{currentIngredients.map((currentIngredient) => {
						<li>{currentIngredient}</li>;
					})}
				</form>
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
