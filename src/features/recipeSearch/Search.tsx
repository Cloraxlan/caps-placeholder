import React, { useRef } from "react";
import Recipe from "../../Interfaces-Classes/Recipe";
import SearchQuery, { Query } from "./SearchQuery";

interface Props {}
const recipes = [
	new Recipe("cade", "yes"),
	new Recipe("obama", "yes"),
	new Recipe("obamacade", "yes"),
];
const Search = (props: Props) => {
	const searchBox = useRef(null);
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

		console.log(searchQ.basicSearch(recipes));
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

export default Search;
