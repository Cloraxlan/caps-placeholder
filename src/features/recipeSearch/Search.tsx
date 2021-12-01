import React, { CSSProperties, useState } from "react";
import Recipe from "../../Interfaces-Classes/Recipe";
import SearchBox from "./SearchBox";
import ResultItem from "./ResultItem";
import "./Search.css";
//import selectRecipeDates from "./calendarSlice";
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
							<div>
								<div></div>
								<div style={style}>
									<ResultItem result={result}></ResultItem>
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
