import React from "react";
import { Day } from "../../Interfaces/Day";

import "./Calendar.css";

interface Props {
	day: Day;
}
// const MONTHS = [
// 	"January",
// 	"February",
// 	"March",
// 	"April",
// 	"May",
// 	"June",
// 	"July",
// 	"August",
// 	"September",
// 	"October",
// 	"November",
// 	"December",
// ];
const CalendarDay = (props: Props) => {
	// const monthNumToName: (num: number) => string = (num: number) => {
	// 	return MONTHS[num - 1];
	// };

	const checkHoliday = () => {
		//if today is a holiday, highlight the calendar box and add the name of the holiday above the event list
		if(props.day.holiday) {
			return (
				<div className="notes highlight">
					<div>{props.day.holiday}</div>
					{props.day.events.map((event) => {
						return <div>{event}</div>;
					})}
				</div>
			);
		}
		//if today is not a holiday, render the calendar box as normal
		return (
			<div className="notes">
				{props.day.events.map((event) => {
					return <div key={Math.random().toString()}>{event}</div>;
				})}
			</div>
		);
	}
	if(props.day.date) {
		return (
			<td>
				<div className="day">
					<div>{props.day.date.getDate()}</div>
					{checkHoliday()}
				</div>
			</td>
		);
	} else {
		return (
			<td>
				<div className="day">
					<div> </div>
				</div>
			</td>
		);
	}
	
};

export default CalendarDay;
