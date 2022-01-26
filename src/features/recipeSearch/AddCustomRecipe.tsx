import React from "react";
import { useState } from "react";

interface Props {}

const AddCustomRecipe = (props: Props) => {
	const [addRecipeOverlayShown, setAddRecipeOverlayShown] = useState(false);

	// const submitRecipe;

	return (
		<div>
			{addRecipeOverlayShown && (
				<form /*onSubmit={submitRecipe}*/ className="calendarOverlay">
					<button
						className="close"
						onClick={() => {
							setAddRecipeOverlayShown(false);
						}}
					>
						X
					</button>
					<div>Add a Recipe </div>
					<input placeholder="Name"></input>
					<input placeholder="Description"></input>
					<input placeholder="Ingredients"></input>
					<input placeholder="Instructions"></input>
					<button type="submit"> Add Recipe </button>
					<button type="submit"> Save Recipe</button>
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
