import React, { CSSProperties, useState } from "react";
import Recipe from "../../Interfaces-Classes/Recipe";
import SearchBox from "./SearchBox";
import ResultItem from "./ResultItem";
import "./Search.css";
import Card from "../../components/UI/Card/Card";
import { v4 as uuidv4 } from "uuid";

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
		<Card className="CardPad">
			<SearchBox setResults={setResults}></SearchBox>
			<ul style={{ padding: "1rem", margin: 0 }}>
				<React.Fragment>
					{/* <div className="SideBox"></div> */}
					{results.map((result) => {
						return (
							<div key={uuidv4()}>
								<div></div>
								<div style={style}>
									<ResultItem result={result}></ResultItem>
								</div>
							</div>
						);
					})}
				</React.Fragment>
			</ul>
		</Card>
	);
};

export default Search;
