import React, { useState } from "react";
import { Day } from "../../Interfaces-Classes/Day";

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
	const monthNumToName: (num: number) => string = (num: number) => {
		return MONTHS[num - 1];
	};
	//Value is the name, or eventually id for the event
	const [overlayShown, setOverlayShown] = useState("");
	return (
		<React.Fragment>
			<td>
				<div
					className="day"
				
				>
					{/* <li>{monthNumToName(props.day.month)}</li> */}
					<div>{props.day.date.getDate()}</div>
					<div className="notes">
						{props.day.events.map((event) => {
							return <div 	onClick={() => {
						//Or whatever should be the id
						setOverlayShown(event.recipe.name);
					}}>{event.recipe.name}</div>;
						})}
					</div>
				</div>
				{overlayShown && (
					<div className="calendarOverlay">
						<button
							className="recipeOverlayText"
							onClick={() => {
								setOverlayShown("");
							}}
						>
							X
						</button>
						{props.day.events.map((event) => {
							//Again, check whatever identifies the overlay to show 
							if(event.recipe.name == overlayShown){
								return (
								<div className="recipeOverlayText">
									<h1>{event.recipe.name}</h1>
									<p>Note: {event.note}</p>
									<p>{event.recipe.description}</p>
									<div className="ingrdientItem">
										{event.recipe.ingredientList.map((ingredient) => {
											return <li>{ingredient}</li>;
										})}
									</div>
								</div>
							);
							}
						})}
					</div>
				)}
			</td>
		</React.Fragment>
	);
};

export default CalendarDay;
