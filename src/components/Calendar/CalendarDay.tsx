import React, { CSSProperties, useState } from "react";
import { Day } from "../../Interfaces-Classes/Day";
import { v4 as uuidv4 } from "uuid";

import "./Calendar.css";
import { RecipeDate } from "../../features/recipeSearch/calendarSlice";
import ResultItem from "../../features/recipeSearch/ResultItem";

interface Props {
	day: Day;
	results: RecipeDate[];
}
const highlight: CSSProperties = {
	backgroundColor: "yellow",
};
const CalendarDay = (props: Props) => {
	//Value is the name, or eventually id for the event
	const [overlayShown, setOverlayShown] = useState("");
	let renderOverlay = () => {
		for (let i = 0; i < props.day.events.length; i++) {
			let event = props.day.events[i];
			if (event.recipe.name === overlayShown) {
				return (
					<div className="recipeOverlayText">
						<h1>{event.recipe.name}</h1>
						<p>Note: {event.note}</p>
						<p>{event.recipe.description}</p>
						<div className="ingrdientItem">
							{event.recipe.ingredients.map((ingredient) => {
								return <li key={uuidv4()}>{ingredient.fullName}</li>;
							})}
						</div>
					</div>
				);
			}
		}
	};
	let contains = false;
	for (let i = 0; i < props.results.length; i++) {
		for (let o = 0; o < props.day.events.length; o++) {
			if (props.results[i].recipe.name == props.day.events[o].recipe.name) {
				contains = true;
			}
		}
	}
	return (
		<React.Fragment>
			<td>
				<div className="day">
					{/* <li>{monthNumToName(props.day.month)}</li> */}
					<div>{props.day.date?.getDate()}</div>
					<div className="notes">
						{props.day.events.map((event) => {
							if (contains) {
								return (
									<div
										style={highlight}
										key={uuidv4()}
										onClick={() => {
											//Or whatever should be the id
											setOverlayShown(event.recipe.name);
										}}
									>
										{event.recipe.name}
									</div>
								);
							} else {
								return (
									<div
										key={uuidv4()}
										onClick={() => {
											//Or whatever should be the id
											setOverlayShown(event.recipe.name);
										}}
									>
										{event.recipe.name}
									</div>
								);
							}
						})}
					</div>
				</div>
				{overlayShown && (
					<div className="calendarOverlay">
						<button
							className="close"
							onClick={() => {
								setOverlayShown("");
							}}
						>
							X
						</button>
						{renderOverlay()}
					</div>
				)}
			</td>
		</React.Fragment>
	);
};

export default CalendarDay;
