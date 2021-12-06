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
	const dispatch = useAppDispatch();
	const calendarr: Array<RecipeDate> = useAppSelector(selectRecipeDates);
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
	console.log(setClassName());

	const submitSave = (event: any) => {
		event.preventDefault();
		console.log(event);
	};

	return (
		<div>
			{showRecipeSave && (
				<div>
					<div className="BlackBackground" />
					<form onSubmit={submitSave} className="SaveOverlay">
						<button
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
							<span
								className="SaveRecipeNote"
								role="textbox"
								contentEditable="true"
								placeholder="Add a note"
							></span>
						</div>
						<div className="SaveRecipeDate">
							<input type="date"></input>
						</div>
						<button
							type="submit"
							className="SaveButtonOverlay"
							onClick={() => {
								setShowRecipeSave(false);
							}}
						>
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
