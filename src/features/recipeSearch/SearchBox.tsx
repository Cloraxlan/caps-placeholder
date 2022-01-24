import React, { useRef } from "react";
import Recipe, {
	constructIngredientFromString,
} from "../../Interfaces-Classes/Recipe";
import SearchQuery, { Query } from "./SearchQuery";
import "./SearchBox.css";
// import Ingredient from "../../Interfaces-Classes/Ingredient";

interface Props {
	setResults: React.Dispatch<React.SetStateAction<Recipe[]>>;
}
const recipes = [
	new Recipe(
		"Apple Pie",
		"It is very good takes like an hour to make",
		[
			constructIngredientFromString("5 cups of apples"),
			constructIngredientFromString("1 pie crust"),

			constructIngredientFromString("3 teaspoons of cinnamon"),
		],
		["combine ingredients", "bake"],
		{},
	),
];
const SearchBox = (props: Props) => {
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
		console.log(getSearchValue(false));
		props.setResults(searchQ.basicSearch(recipes));
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
					onChange={() => {
						//Search in realtime, probably wanna remove later on when search is more complex but for now it fancy
						search(false);
					}}
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

export default SearchBox;
