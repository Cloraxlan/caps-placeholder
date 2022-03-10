import React, { useState } from "react";
import { Day } from "../../Interfaces-Classes/Day";
import { v4 as uuidv4 } from "uuid";

import "./Calendar.css";

interface Props {
	day: Day;
}
const MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

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
	return (
		<React.Fragment>
			<td>
				<div className="day">
					{/* <li>{monthNumToName(props.day.month)}</li> */}
					<div>{props.day.date?.getDate()}</div>
					<div className="notes">
						{props.day.events.map((event) => {
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
