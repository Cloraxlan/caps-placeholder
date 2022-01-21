import React, { useEffect, useState } from "react";
import { convertToDays, Day } from "./../../Interfaces-Classes/Day";
import Card from "../UI/Card/Card";
import CalendarDate from "./CalendarDay";
import MonthsFilter from "./MonthsFilter/MonthsFilter";
import { v4 as uuidv4 } from "uuid";

import "./Calendar.css";
import Recipe from "../../Interfaces-Classes/Recipe";
import {
	addRecipeDate,
	RecipeDate,
	selectRecipeDates,
} from "../../features/recipeSearch/calendarSlice";
import { useAppSelector } from "../../app/hooks";

import CalendarSearchBox from "./CalendarSearch/CalendarSearchBox";
import MonthChangeButtons from "./MonthChangeButtons/MonthChangeButtons";

interface Props {}

const year = new Date().getFullYear();

const testLeapYear = (year: number) => {
	if (year % 4 === 0) {
		if (year % 100 === 0 && year % 400 !== 0) {
			return 28;
		}
		return 29;
	}
	return 28;
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

let MONTH = new Date().getMonth();

const daysPre: Day[] = [];

const Calendar = (props: Props) => {
	//eslint-disable-next-line
	const [month, setMonth] = useState(MONTH);
	const [results, setResults] = useState<Day[]>([]);
	let recipeDateList = useAppSelector(selectRecipeDates);
	//convert to recipeDates into days
	let days = convertToDays(recipeDateList);
	// not sure how to use this hook as a fix to the rendering bug
	useEffect(() => {
		days = convertToDays(recipeDateList);
		//console.log(generateRows(7));
		return;
	}, [recipeDateList]);

	const filterMonthHandler = (selectedMonth: number) => {
		setMonth(selectedMonth);
	};

	const monthChangeHandler = (iterand: number) => {
		console.log("ran");
		setMonth((prevMonth) => {
			let newMonth = prevMonth + iterand;
			if (newMonth < 0) newMonth = 11;
			if (newMonth > 11) newMonth = 0;
			return newMonth;
		});
	};

	const generateRows: (weekLength: number) => Array<Array<Day>> = (
		weekLength: number = 7,
	) => {
		// console.log(mth + ' ' + month)

		// recieves a number representing the day of the month, and searches through the state
		// for a day object on that day of MONTH. Returns the found day object
		const checkDay = (day: number) => {
			// console.log(days)
			// console.log(day+1 + ' ' + mth)

			/**/
			return days.find(
				(d) =>
					d.date && d.date.getDate() - 1 === day && d.date.getMonth() == month,
			);
		};

		// recieves a Date and returns the a Day object on that Date with no events
		const genDayObj = (date: Date) => {
			const dayObj: {
				date: Date;
				events: Array<{ recipe: Recipe; note: string }>;
			} = {
				date: new Date(date),
				events: [],
			};
			return dayObj;
		};

		// returns a Day object with no Date and an empty events array
		const genEmptyDayObj: () => Day = () => {
			const dayObj: {
				date?: Date;
				events: Array<{ recipe: Recipe; note: string }>;
			} = {
				events: [],
			};
			return dayObj;
		};

		// Initialize an empty array of days to be populated with Day objects representing the days of MONTH
		const dayObjArr: Array<Day> = [];

		// Initialize a reference date set to the first day of the MONTH
		const refDate: Date = new Date();
		refDate.setMonth(month);
		refDate.setDate(1);

		// refDate.getDay() is the day of the week that the first day of the MONTH starts on.
		// if the month starts on a day other than sunday, this loops through and fills up to that point with empty Day objects
		for (let j: number = 0; j < refDate.getDay(); j++) {
			const overflowDate = new Date();
			overflowDate.setDate(refDate.getDate() - refDate.getDay());
			dayObjArr.push(genEmptyDayObj());
		}

		// loops through every day of the month. testDate is initialized as a Date object on the same day as refDate (first of the MONTH)
		const testDate: Date = new Date(refDate);
		for (let i: number = 0; i < MONTHSIZE[month]; i++) {
			// sets dayObj equal to the Day associated with 'i' day of MONTH. (if 'i' is 0, searches for a Day representing the first day of the MONTH)
			let dayObj: Day | undefined = checkDay(i);
			// console.log(dayObj);
			// if no Day is found, set testDate to the Date associated with this value of 'i', and generate a Day object with no events using testDate
			if (dayObj === undefined) {
				testDate.setDate(i + 1);
				dayObj = genDayObj(testDate);
			}
			dayObjArr.push(dayObj);
		}

		// slice dayObjArr into 7 element long mini arrays and add to 2d array "weeks"
		const weeks: Array<Array<Day>> = [];
		for (let o: number = 0; o < dayObjArr.length / 7; o++) {
			weeks.push(dayObjArr.slice(0 + 7 * o, 7 + 7 * o));
		}
		//fill final week with empty days
		const finalWeek = weeks[weeks.length - 1];
		const finalElement = finalWeek[finalWeek.length - 1];
		finalWeek.length = 7;
		finalWeek.fill(genEmptyDayObj(), finalWeek.indexOf(finalElement) + 1, 6);

		return weeks;
	};

	useEffect(() => {
		window.addEventListener("keydown", (event: any) => {
			if (event.key === "Enter") {
				console.log("Enter key pressed");
			}
			console.log("Key Pressed");
			console.log(window);
		});
	}, []);
	return (
		<React.Fragment>
			<CalendarSearchBox setResults={setResults} recipeList={recipeDateList}/>
			<Card className="card">
				<Card className="drop">
					<MonthsFilter onFilterMonth={filterMonthHandler} />
				</Card>
				<MonthChangeButtons onMonthChange={monthChangeHandler} />
				<table>
					<caption>{MONTHS[month]}</caption>
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
							//console.log(row);
							return (
								<tr key={uuidv4()}>
									{row.map((day, j) => {
										//console.log(day);

										return (
											<CalendarDate
												key={uuidv4()}
												day={day as Day}
											></CalendarDate>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</Card>
		</React.Fragment>
	);
};

export default Calendar;
