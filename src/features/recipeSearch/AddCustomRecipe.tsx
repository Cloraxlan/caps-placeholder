import { useState } from "react";

import Recipe, {
	constructIngredientFromString,
	recipeMetadata,
} from "../../Interfaces-Classes/Recipe";
import nlp from "compromise";
import nlpNumbers from "compromise-numbers";
import UnitIngredient from "../../Interfaces-Classes/UnitIngredient";
import { addRecipeDate } from "./calendarSlice";
import { useAppDispatch } from "../../app/hooks";
import "./AddCustomRecipe.css";

// interface Props {
// 	ingredients: String[];
// 	setIngredients: React.Dispatch<React.SetStateAction<String[]>>;
// }

const AddCustomRecipe = () => {
	//Defines all the different states used to store the input fields, as well as to save the recipe in the future
	const [addRecipeOverlayShown, setAddRecipeOverlayShown] = useState(false);
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

	//Methods for changing the state
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
	//If the enter key is pressed when there is no ingreient typed in the ingredient input, an alert pops up
	const isEnter = (event: any) => {
		if (event.key === "Enter") {
			if (event.target.value !== "") {
				changeIngredients(event.target.value);
				setCurrentSingleIngredient("");
			} else {
				alert("Please input an ingredient");
			}
		}
	};

	const submitRecipe = (event: any) => {
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
		//Resetting the states for next recipe
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
		// if (event.target.innerText == "Save and Add Recipe") {
		//If the save and add recipe button is pressed it will get the date so it can be added to the calendar
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
		// }
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
						<div className="Flex">
							<div className="FlexHolderAdd">
								<input
									className="RemoveMargin"
									placeholder="Name"
									id="name"
									// form="notSubmitRecipeForm"
									onChange={changeName}
									value={currentName}
								></input>
								<input
									className="RemoveMargin"
									placeholder="Description"
									onChange={changeDescription}
									// form="notSubmitRecipeForm"
									value={currentDescription}
								></input>
								<input
									className="RemoveMargin"
									placeholder="Ingredient (With units)"
									onChange={changeSingleIngredient}
									onKeyPress={isEnter}
									// form="notSubmitRecipeForm"
									value={currentSingleIngredient}
								></input>
								<input
									className="RemoveMargin"
									placeholder="Instructions"
									onChange={changeInstructions}
									// form="notSubmitRecipeForm"
									value={currentInstructions}
								></input>
								<button onClick={submitRecipe}> Add Recipe </button>
							</div>
							<div className="FlexHolderSave">
								<input
									className="RemoveMargin"
									onChange={changeNote}
									contentEditable="true"
									placeholder="Add a note"
								></input>
								<input onChange={changeDate} type="date"></input>
								<button onClick={submitRecipe}>Save and Add Recipe</button>
							</div>
						</div>
						<ul>
							{currentIngredients.map((currentIngredient) => {
								return <li key={String(Math.random())}>{currentIngredient}</li>;
							})}
						</ul>
					</div>
				</div>
			)}
			<div className="AddRecipeReccomendation">
				Don't like any recipies? Add one yourself!
			</div>
			<button
				className="AddRecipeButton"
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
