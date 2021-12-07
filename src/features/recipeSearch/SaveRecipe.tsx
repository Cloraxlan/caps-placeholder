import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Recipe from "../../Interfaces-Classes/Recipe";
import "./SaveRecipe.css";
import calendarSlice, {
	addRecipeDate,
	CalendarState,
	RecipeDate,
	selectRecipeDates,
} from "./calendarSlice";

interface Props {
	recipe: Recipe;
	className2?: string;
}

const SaveRecipe = (props: Props) => {
	const [showRecipeSave, setShowRecipeSave] = useState(false);
	let [currentNote, setCurrentNote] = useState();
	let [currentDate, setCurrentDate] = useState();
	const dispatch = useAppDispatch();
	const calendarr: Array<RecipeDate> = useAppSelector(selectRecipeDates);

	let changeNote = (event: any) => {
		setCurrentNote(event.target.value);
		console.log(event.target.value);
	};
	let changeDate = (event: any) => {
		setCurrentDate = event.target.value;
		console.log(event.target.value);
	};
	let save = () => {
		setShowRecipeSave(true);
		// let month = prompt("Month (as name)");
		// let day = prompt("Day(as number)");
		// let date = new Date(month + " " + day + ", 2021");
		// dispatch(addRecipeDate({ date: date, recipe: props.recipe.serialize() }));
	};
	let setClassName: () => string = () => {
		if (props.className2) {
			return props.className2;
		}
		return "Save";
	};

	const submitSave = (event: any) => {
		event.preventDefault();
		setShowRecipeSave(false);
		console.log("HELLO");
		let note = event.nativeEvent.submitter;
		console.log(note);
	};

	return (
		<div>
			{showRecipeSave && (
				<div>
					<div className="BlackBackground" />
					<form onSubmit={submitSave} className="SaveOverlay">
						<button
							type="button"
							className="close"
							onClick={() => {
								setShowRecipeSave(false);
							}}
						>
							X
						</button>
						<div>
							{/* <input
								contentEditable="true"
								className="SaveRecipeNote"
								placeholder="Add a note"
								type="text"
							></input> */}
							<div className="NoteStyling">Note: </div>
							<input
								onChange={changeNote}
								className="SaveRecipeNote"
								role="textbox"
								contentEditable="true"
								placeholder="Add a note"
							></input>
						</div>
						<div className="SaveRecipeDate">
							<input onChange={changeDate} type="date"></input>
						</div>
						<button type="submit" className="SaveButtonOverlay">
							Save
						</button>
					</form>
				</div>
			)}
			<button onClick={save} className={setClassName()}>
				Save Recipe
			</button>
		</div>
	);
};

export default SaveRecipe;
