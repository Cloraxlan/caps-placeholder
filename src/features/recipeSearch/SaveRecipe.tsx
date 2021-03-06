/* eslint-disable */
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Recipe from "../../Interfaces-Classes/Recipe";
import "./SaveRecipe.css";
import {
	addRecipeDate,
	RecipeDate,
	selectRecipeDates,
	// CalendarState,
} from "./calendarSlice";
import {
	MASTER_VOLUME_METRIC,
	MASTER_WEIGHT_METRIC,
} from "../../Interfaces-Classes/MetricSystem";
import BulkIngredient from "../../Interfaces-Classes/BulkIngredient";
import { prototype } from "events";
import { selectToken } from "../../sessionSlice";

interface Props {
	recipe: Recipe;
	className2?: string;
	buttonTyping?: string;
	parentFunction?: any;
}

const SaveRecipe = (props: Props, ref: any) => {
	const [showRecipeSave, setShowRecipeSave] = useState(false);
	let [currentNote, setCurrentNote] = useState();
	let [currentDate, setCurrentDate] = useState("");
	const dispatch = useAppDispatch();
	const calendarr: Array<RecipeDate> = useAppSelector(selectRecipeDates);
	const token: string = useAppSelector(selectToken);
	let changeNote = (event: any) => {
		setCurrentNote(event.target.value);
		// console.log(event.target.value);
	};
	let changeDate = (event: any) => {
		setCurrentDate(event.target.value);
		let d = new Date(event.target.value);
		d.setDate(d.getDate() + 1);
		d.setHours(0, 0, 0, 0);
		// console.log(d);
	};
	let save = (event: any) => {
		setShowRecipeSave(true);
		console.log(event);
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
		console.log("submitSave");
		if (props.parentFunction) {
			props.parentFunction();
		}
		event.preventDefault();
		setShowRecipeSave(false);
		let d = new Date(currentDate);
		d.setDate(d.getDate() + 1);
		d.setHours(0, 0, 0, 0);
		// console.log("Date");
		// console.log(d);
		// console.log("Recipe");
		// console.log(props.recipe.serialize());
		// console.log("Note");
		// console.log(currentNote);
		let recipe = props.recipe.serialize();
		dispatch(
			addRecipeDate({
				date: d.toDateString(),
				recipe: recipe,
				note: currentNote,
			}),
		);
		fetch("http://rozpadek.me/account/saveRecipe", {
			method: "POST",

			body: new URLSearchParams({
				recipe: JSON.stringify({
					date: d.toDateString(),
					recipe: recipe,
				}),
				token: token,
			}),
		});
	};

	return (
		<div>
			{/*Recipe save*/}
			{showRecipeSave && (
				<div>
					<div
						className="BlackBackground"
						onClick={() => {
							setShowRecipeSave(false);
						}}
					/>
					<form
						id="saveRecipeForm"
						onSubmit={submitSave}
						className="SaveOverlay"
					>
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
								// role="textbox"
								contentEditable="true"
								placeholder="Add a note"
							></input>
						</div>
						<div className="SaveRecipeDate">
							<input onChange={changeDate} type="date"></input>
						</div>
						<button
							form="saveRecipeForm"
							type="submit"
							className="SaveButtonOverlay"
						>
							Save
						</button>
					</form>
				</div>
			)}
			{/*When "Save Recipe" in the recipe overlay is clicked, show the recipe save*/}
			{props.buttonTyping &&
			(props.buttonTyping === "button" ||
				props.buttonTyping === "submit" ||
				props.buttonTyping === "reset" ||
				props.buttonTyping === undefined) ? (
				<button
					type={props.buttonTyping}
					onClick={save}
					className={setClassName()}
				>
					Save Recipe
				</button>
			) : (
				<button onClick={save} className={setClassName()}>
					Save Recipe
				</button>
			)}
		</div>
	);
};

export default SaveRecipe;
