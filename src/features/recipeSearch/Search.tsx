import React, { useState } from "react";
import Recipe from "../../Interfaces-Classes/Recipe";
import SearchBox from "./SearchBox";

interface Props {}

const Search = (props: Props) => {
	const [results, setResults] = useState<Recipe[]>([]);

	return (
		<div>
			<SearchBox setResults={setResults}></SearchBox>
			<ul>
				{results.map((result) => {
					return (
						<li>
							{result.name}
							<ul>
								<li>{result.description}</li>
							</ul>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Search;
