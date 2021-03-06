import React, { useRef } from "react";

import SearchQuery, { Query } from "./CalendarQuery";
import { RecipeDate } from "../../../features/recipeSearch/calendarSlice";

interface Props {
	setResults: React.Dispatch<React.SetStateAction<RecipeDate[]>>;
	recipeList: Array<RecipeDate>;
}
// const recipes = [
// 	new Recipe(
// 		"Apple Pie",
// 		"It is very good takes like an hour to make",
// 		[
// 			constructIngredientFromString("5 cups of apples"),
// 			constructIngredientFromString("1 pie crust"),

// 			constructIngredientFromString("3 teaspoons of cinnamon"),
// 		],
// 		["combine ingredients", "bake"],
// 		{},
// 	),
// ];
const CalendarSearchBox = (props: Props) => {
	const searchBox = useRef(null);
	//Gets value in input and clears it
	const getSearchValue: (clear: boolean) => string = (clear: boolean) => {
		let r = (searchBox.current as any).value;
		if (clear) {
			(searchBox.current as any).value = "";
		}
		return r;
	};
	const search = (clear: boolean) => {
		let query: Query = {
			searchString: getSearchValue(clear),
		};
		let searchQ = new SearchQuery(query);
		props.setResults(searchQ.basicSearch(props.recipeList));
	};
	return (
		<div className="Title">
			<h1 className="TitleSize">Search For Recipe</h1>
			<div className="Flex">
				<input
					className="InputFont"
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							search(true);
						}
					}}
					ref={searchBox}
					// onChange={() => {
					// 	//Search in realtime, probably wanna remove later on when search is more complex but for now it fancy
					// 	search(false);
					// }}
				></input>
				<button
					className="SearchButton"
					onClick={() => {
						search(true);
					}}
				>
					Search
				</button>
			</div>
		</div>
	);
};

export default CalendarSearchBox;
