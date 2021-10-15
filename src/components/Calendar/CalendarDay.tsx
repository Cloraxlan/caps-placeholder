import React from "react";
import { Day } from "../../Interfaces/Day";

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
	" September",
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
			<ul>
				<li>{monthNumToName(props.day.month)}</li>
				<li> {props.day.date}</li>
				<li>
					<ul>
						{props.day.events.map((event) => {
							return <li>{event}</li>;
						})}
					</ul>
				</li>
			</ul>
		</td>
	);
};

export default CalendarDay;
