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
		<div>
			<h1 className="Title">Search For Recipe</h1>
			<input
				className="SearchBox"
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						search();
					}
				}}
				ref={searchBox}
			></input>
			<button onClick={search} className="Title">
				Submit
			</button>
		</div>
	);
};

export default SearchBox;
