import React, { CSSProperties, useState } from "react";
import Recipe from "../../Interfaces-Classes/Recipe";
import SearchBox from "./SearchBox";
import SaveRecipe from "./SaveRecipe";
interface Props {}
//idrc enough to style this rn, its all gonna be remade anyway. enjoy funny flexbox
const style: CSSProperties = {
	display: "flex",
	flexDirection: "row",
};
const Search = (props: Props) => {
	const [results, setResults] = useState<Recipe[]>([]);

	return (
		<div>
			<SearchBox setResults={setResults}></SearchBox>
			<ul>
				{results.map((result) => {
					return (
						<div style={style}>
							<SaveRecipe recipe={result}></SaveRecipe>
							<li>
								<div>
									<p>{result.name}</p>
								</div>
								<ul>
									<li>{result.description}</li>

									<ul>
										{result.ingredientList.map((ingredient) => {
											return <li>{ingredient}</li>;
										})}
									</ul>
								</ul>
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default Search;
