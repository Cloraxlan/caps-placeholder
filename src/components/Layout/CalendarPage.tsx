import Calendar from "../Calendar/Calendar";
import CalendarSearchBox from "../Calendar/CalendarSearch/CalendarSearchBox";
// import CalendarResultItem from "../Calendar/CalendarSearch/test";
import React, { CSSProperties, useState } from "react";
import {
	RecipeDate,
	selectRecipeDates,
} from "../../features/recipeSearch/calendarSlice";
import { useAppSelector } from "../../app/hooks";
import { v4 as uuidv4 } from "uuid";
import ResultItem from "../../features/recipeSearch/ResultItem";
import Recipe from "../../Interfaces-Classes/Recipe";

const searchBoxStyle: CSSProperties = {
	float: "left",
	padding: "4rem",
	paddingLeft: "1rem",
	paddingRight: "5rem",
};

const searchStyle: CSSProperties = {
	borderRadius: "1vw",
	boxShadow: "0 0.1vw 0.5vw rgba(0, 0, 0, 0.25)",
	padding: "0.5rem",
	paddingBottom: "3rem",
};

const itemStyle: CSSProperties = {
	display: "flex",
	flexDirection: "row",
};

const CalendarPage = () => {
	const [results, setResults] = useState<RecipeDate[]>([]);
	let recipeDateList = useAppSelector(selectRecipeDates);
	return (
		<React.Fragment>
			<div style={searchBoxStyle}>
				<div style={searchStyle}>
					<CalendarSearchBox
						setResults={setResults}
						recipeList={recipeDateList}
					/>
					<ul style={{ padding: "1rem", margin: 0 }}>
						<React.Fragment>
							{/* <div className="SideBox"></div> */}
							{results.map((result) => {
								return (
									<div key={uuidv4()}>
										<div></div>
										<div style={itemStyle}>
											<ResultItem
												result={Recipe.constructFromInterface(result.recipe)}
											></ResultItem>
										</div>
									</div>
								);
							})}
						</React.Fragment>
					</ul>
				</div>
			</div>
			<div style={{ float: "right", paddingTop: "3rem" }}>
				<Calendar />
			</div>
		</React.Fragment>
	);
};

export default CalendarPage;
