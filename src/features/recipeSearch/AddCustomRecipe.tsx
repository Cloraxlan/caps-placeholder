import React from "react";
import { useState } from "react";

interface Props {}

const AddCustomRecipe = (props: Props) => {
	const [addRecipeOverlayShown, setAddRecipeOverlayShown] = useState(false);

	return (
		<div>
			{addRecipeOverlayShown && (
				<div className="calendarOverlay">
					<button
						className="close"
						onClick={() => {
							setAddRecipeOverlayShown(false);
						}}
					>
						X
					</button>
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
