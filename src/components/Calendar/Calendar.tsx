import React, { useState } from "react";
import { Day } from "../../Interfaces/Day";
import Card from "../UI/Card/Card";
import CalendarDate from "./CalendarDay";

import "./Calendar.css";

interface Props {}


// const year = new Date().getFullYear();

// const testLeapYear = (year: number) => {
	
// }

// const MONTHSIZE = [
// 	31,
// 	(year: any) => {}
// ]

const daysPre: Day[] = [
	{ date: new Date('January 01, 2021 00:00:00'), events: ["Eat Food", "Eat More Food"] },
	{ date: new Date('January 02, 2021 00:00:00'), events: ["Eat Too much food"] },
	{ date: new Date('January 03, 2021 00:00:00'), events: ["EAT", "Become poor"] },
	{ date: new Date('January 04, 2021 00:00:00'), events: ["Poorer"] },
	{ date: new Date('January 05, 2021 00:00:00'), events: ["Help no more monies"] },
	{ date: new Date('January 06, 2021 00:00:00'), events: ["Pantry empty", "Stomach growls"] },
	{ date: new Date('January 07, 2021 00:00:00'), events: ["Dont Eat"] },
	{ date: new Date('January 08, 2021 00:00:00'), events: ["Suffer"] },
	{ date: new Date('January 09, 2021 00:00:00'), events: ["Starve"] },
];
const Calendar = (props: Props) => {
	//eslint-disable-next-line
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
		<Card className="card">
			<table>
				<caption>June</caption>
				<colgroup>
					<col className="weekend" />
					<col className="weekday" span={5} />
					<col className="weekend" />
				</colgroup>
				<thead>
					<tr id="days">
						<th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
					</tr>
				</thead>
				<tbody>
					{generateRows(7).map((row, i) => {
						return (
							
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
						);
					})}
				</tbody>
			</table>
		</Card>
	);
};

export default Calendar;
