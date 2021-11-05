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
];
const SearchBox = (props: Props) => {
	const searchBox = useRef(null);
	//Gets value in input and clears it
	const getSearchValue: () => string = () => {
		let r = (searchBox.current as any).value;
		(searchBox.current as any).value = "";
		return r;
	};
	const search = () => {
		let query: Query = {
			searchString: getSearchValue(),
		};
		let searchQ = new SearchQuery(query);

		props.setResults(searchQ.basicSearch(recipes));
	};
	return (
		<div className="Title">
			<h1>Search For Recipe</h1>
			<div className="Flex">
				<input
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							search();
						}
					}}
					ref={searchBox}
				></input>
				<button className="Submit" onClick={search}>
					Search
				</button>
			</div>
		</div>
	);
};

export default SearchBox;
