import React, { useRef } from "react";
import Recipe from "../../Interfaces-Classes/Recipe";
import SearchQuery, { Query } from "./SearchQuery";
import "./SearchBox.css";

interface Props {
	setResults: React.Dispatch<React.SetStateAction<Recipe[]>>;
}
const recipes = [
	new Recipe("Apple Pie", "It is very good takes like an hour to make", [
		"apple",
		"pie crust",
	]),
	new Recipe("Jeramisu", "Yummy Jeremy mmmmmm yummy", ["Jeremy", "yum powder"]),
	new Recipe("Pizzella", "yes", [
		"poptarts mostly",
		"Pizza",
		"A kiss from Marcello",
	]),
	new Recipe("Popkornrad", "Pop pop!", [
		"Konrad",
		"oil",
		"budder",
		"souls of the dead",
	]),
	new Recipe("CanDees Cade", "Run.", [
		"Sugar",
		"Anger",
		"Red Food Coloring(blood)",
		"Santa",
	]),
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
			<h1>Search For Recipe</h1>
			<div className="Flex">
				<input
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
					className="Submit"
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
