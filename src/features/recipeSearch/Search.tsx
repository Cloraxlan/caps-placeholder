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
	const search = () => {
		if (searchBox.current) {
			let query: Query = {
				searchString: (searchBox.current as any).value,
			};
			let searchQ = new SearchQuery(query);

			console.log(searchQ.basicSearch(recipes));
		}
	};
	return (
		<div>
			<input ref={searchBox}></input>
			<button onClick={search}>Submit</button>
		</div>
	);
};

export default Search;
