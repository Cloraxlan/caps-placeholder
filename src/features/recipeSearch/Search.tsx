import React, { CSSProperties, useState } from "react";
import Recipe from "../../Interfaces-Classes/Recipe";
import SearchBox from "./SearchBox";
import SaveRecipe from "./SaveRecipe";
import "./Search.css";
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
				<React.Fragment>
					{/* <div className="SideBox"></div> */}
					{results.map((result) => {
						return (
							<div style={style}>
								<div className="Font">
									<div>
										<p className="Name">{result.name}</p>
									</div>
									{/* <ul>
									<div className="Description">{result.description}</div>

									<ul>
										{result.ingredientList.map((ingredient) => {
											return <div>{ingredient}</div>;
										})}
									</ul>
								</ul> */}
									<div className="Description">{result.description}</div>

									<ul>
										{result.ingredientList.map((ingredient) => {
											return <li className="Ingredient">{ingredient.fullName()}</li>;
										})}
									</ul>
									<SaveRecipe recipe={result}></SaveRecipe>
								</div>
							</div>
						);
					})}
				</React.Fragment>
			</ul>
		</div>
	);
};

export default Search;
