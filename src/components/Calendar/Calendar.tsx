import React, { useState } from "react";
import { Day } from "../../Interfaces/Day";
import CalendarDate from "./CalendarDay";
interface Props {}
const daysPre: Day[] = [
	{ date: 1, events: ["Eat Food", "Eat More Food"], month: 1 },
	{ date: 2, events: ["Eat Too much food"], month: 1 },
	{ date: 3, events: ["EAT", "Become poor"], month: 1 },
	{ date: 4, events: ["Poorer"], month: 1 },
	{ date: 5, events: ["Help no more monies"], month: 1 },
	{ date: 6, events: ["Pantry empty", "Stomach growls"], month: 1 },
	{ date: 7, events: ["Dont Eat"], month: 1 },
	{ date: 8, events: ["Suffer"], month: 1 },
	{ date: 9, events: ["Starve"], month: 1 },
];
const Calendar = (props: Props) => {
	const [days, setDays] = useState<Array<Day> | null>(daysPre);
	const generateRows: (weekLength: number) => Array<Array<Day>> = (
		weekLength: number = 7,
	) => {
		if (days) {
			let weeks = days.length / weekLength;
			let date = 0;
			let rows = [];
			for (let i: number = 0; i < weeks; i++) {
				let row = [];
				for (let o: number = 0; o < weekLength; o++) {
					if (days[date]) {
						row.push(days[date]);
						date++;
					} else {
						break;
					}
				}
				rows.push(row);
			}
			return rows;
		}
		return [];
	};
	console.log(generateRows(7));
	return (
		<div>
			<ul>
				{generateRows(7).map((row, i) => {
					return (
						<table>
							<tr>
								{row.map((day, j) => {
									return (
										<CalendarDate
											key={i.toString() + ":" + j.toString()}
											day={day}
										></CalendarDate>
									);
								})}
							</tr>
						</table>
					);
				})}
			</ul>
		</div>
	);
};

export default Calendar;
