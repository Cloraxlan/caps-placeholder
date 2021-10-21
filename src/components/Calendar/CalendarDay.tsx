import React from "react";
import { Day } from "../../Interfaces/Day";

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
	return (
		<td>
			<div className="day">
				{/* <li>{monthNumToName(props.day.month)}</li> */}
				<div>{props.day.date}</div>
				<div className="notes">
					{props.day.events.map((event) => {
						return <div>{event}</div>;
					})}
				</div>
			</div>
		</td>
	);
};

export default CalendarDay;
