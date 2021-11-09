import React, { useState } from "react";
import { Day } from "../../Interfaces/Day";
import Card from "../UI/Card/Card";
import CalendarDate from "./CalendarDay";

import "./Calendar.css";

interface Props {}

const year = new Date().getFullYear();

const testLeapYear = (year: number) => {
	if (year % 4 === 0) {
		if (year % 100 === 0 && year % 400 !== 0) {
			return 29;
		}
		return 28;
	}
	return 29;
};

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

const MONTHSIZE = [
	31,
	testLeapYear(year),
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31,
];

const MONTH = 9;

const daysPre: Day[] = [
	{ date: new Date("January 01, 2021 00:00:00"), events: ["Eat Food", "Eat More Food"] },
	{ date: new Date("January 02, 2021 00:00:00"), events: ["Eat Too much food"] },
	{ date: new Date("January 03, 2021 00:00:00"), events: ["EAT", "Become poor"] },
	{ date: new Date("January 04, 2021 00:00:00"), events: ["Poorer"] },
	{ date: new Date("January 17, 2021 00:00:00"), events: ["Help no more monies"] },
	{ date: new Date("January 06, 2021 00:00:00"), events: ["Pantry empty", "Stomach growls"] },
	{ date: new Date("January 07, 2021 00:00:00"), events: ["Dont Eat"] },
	{ date: new Date("January 08, 2021 00:00:00"), events: ["Suffer"] },
	{ date: new Date("January 11, 2021 00:00:00"), events: ["Starve"] },
	{ date: new Date("February 11, 2021 00:00:00"), events: ["Starve"] },
	{ date: new Date("March 11, 2021 00:00:00"), events: ["Starve"] },
	{ date: new Date("October 20, 2021 00:00:00"), events: ["Bday events"], holiday: "Birthday"}
];

const Calendar = (props: Props) => {
	//eslint-disable-next-line
	const [days, setDays] = useState<Array<Day>>(daysPre);
	const generateRows: (weekLength: number) => Array<Array<Day>> = (
		weekLength: number = 7,
	) => {

		const checkDay = (day: number) => {
			return days.find(d => d.date.getDate()-1 === day && d.date.getMonth() === MONTH);
		}

		// Initialize an empty array of days to be populated with Day objects representing the days of MONTH
		const dayObjArr: Array<Day> = [];

		// Initialize a reference date set to the first day of the MONTH
		const refDate: Date = new Date();
		refDate.setMonth(MONTH);
		refDate.setDate(1); 

		for (let j: number = 0; j<refDate.getDay(); j++) {
			const overflowDate = new Date();
			overflowDate.setDate(refDate.getDate()-refDate.getDay());
			const dateObj: { date: Date; events: Array<string> } = {
				date: overflowDate,
				events: [],
			};
		}

		for (let i: number = 0; i<MONTHSIZE[MONTH]-refDate.getDay(); i++) {
			
		}

		// if (days) {
		// 	// let weeks = days.length / weekLength;
		// 	// let weeks = MONTHSIZE[MONTH] / weekLength;
		// 	let weeks = 5;
		// 	let day = 0;
		// 	let rows = [];
		// 	for (let i: number = 0; i < weeks; i++) {
		// 		let row = [];
		// 		for (let o: number = 0; o < weekLength; o++) {
		// 			let foundDayObj = checkDay(day);
		// 			// console.log(day + " : " + foundDayObj + " : " + row.length + " : " + rows.length)
					
		// 			//if there are events for this day of this month
		// 			if (foundDayObj !== undefined) {
		// 				//add the appropriate Day object to the end of this week
		// 				row.push(foundDayObj);
		// 			} else {
		// 				const newDate = new Date();
		// 				let oldDate: Date;
		// 				//if not the first day in the week
		// 				if (row.length !== 0) {
		// 					//oldDate is equal to the previous day in the week
		// 					oldDate = new Date(row[row.length-1].date);
		// 				} else {
		// 					//if first day in the month
		// 					if(rows.length===0) {
		// 						//oldDate is equal to the 1st day of MONTH
		// 						oldDate = new Date();
		// 						oldDate.setMonth(MONTH);
		// 						oldDate.setDate(1);
		// 						console.log(oldDate);
		// 					} else {
		// 						//oldDate is equal to the last day of previous week
		// 						oldDate = new Date(rows[rows.length-1][weekLength-1].date);
		// 					}
		// 				}

		// 				//find the day after the oldDate
		// 				if(rows.length===0&&row.length===0) {
		// 					newDate.setDate(oldDate.getDate())
		// 				} else {
		// 					newDate.setDate(oldDate.getDate() + 1);
		// 				}
						// const dateObj: { date: Date; events: Array<string> } = {
						// 	date: newDate,
						// 	events: [],
						// };
						
		// 				row.push(dateObj);
		// 			}
		// 			day++;
		// 		}
		// 		rows.push(row);
		// 	}
		// 	return rows;
		// }
		return [];
	};
	return (
		<Card className="card">
			<table>
				<caption>{MONTHS[MONTH]}</caption>
				<colgroup>
					<col className="weekend" />
					<col className="weekday" span={5} />
					<col className="weekend" />
				</colgroup>
				<thead>
					<tr id="days">
						<th>Sun</th>
						<th>Mon</th>
						<th>Tue</th>
						<th>Wed</th>
						<th>Thu</th>
						<th>Fri</th>
						<th>Sat</th>
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
