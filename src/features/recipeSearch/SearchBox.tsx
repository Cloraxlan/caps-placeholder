import React, { useRef } from "react";
import Recipe from "../../Interfaces-Classes/Recipe";
import SearchQuery, { Query } from "./SearchQuery";

interface Props {
	setResults: React.Dispatch<React.SetStateAction<Recipe[]>>;
}
const recipes = [
	new Recipe("cade", "yes", ["apple", "bananna"]),
	new Recipe("obama", "yes", ["keyboard", "monkey"]),
	new Recipe("obamacade", "yes", ["water"]),
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
			<input
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						search();
					}
				}}
				ref={searchBox}
			></input>
			<button onClick={search}>Submit</button>
		</div>
	);
};

export default SearchBox;
