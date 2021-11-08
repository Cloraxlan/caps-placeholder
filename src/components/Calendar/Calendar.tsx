import { convertToDays, Day } from "./../../Interfaces-Classes/Day";
import Card from "../UI/Card/Card";
import CalendarDate from "./CalendarDay";

import "./Calendar.css";
import Recipe from "../../Interfaces-Classes/Recipe";
import {
	addRecipeDate,
	RecipeDate,
	selectRecipeDates,
} from "../../features/recipeSearch/calendarSlice";
import { useAppSelector } from "../../app/hooks";

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

const MONTH = 0;

const daysPre: Day[] = [
	{
		date: new Date("January 01, 2021 00:00:00"),
		events: [
			{
				recipe: new Recipe("Knuckle Sandwitch", "For cade", ["hand", "anger"]),
				note: "when cade makes us :(",
			},
		],
	},
];

const Calendar = (props: Props) => {
	//eslint-disable-next-line
	let recipeDateList = useAppSelector(selectRecipeDates);
	//convert to recipeDates into days
	console.log(recipeDateList);
	let days = convertToDays(recipeDateList);

	//const [days, setDays] = useState(daysPre);
	const generateRows = (weekLength: number = 7) => {
		const checkDay = (day: number) => {
			return days.find((d: Day) => d.date.getDate() - 1 === day);
		};

		if (days) {
			// let weeks = days.length / weekLength;
			let weeks = MONTHSIZE[MONTH] / weekLength;
			let day = 0;
			let rows = [];
			for (let i: number = 0; i < weeks; i++) {
				let row = [];
				for (let o: number = 0; o < weekLength; o++) {
					// console.log(o + " " + i);
					let foundDayObj = checkDay(day);

					if (foundDayObj !== undefined) {
						row.push(foundDayObj);
					} else {
						const newDate = new Date();
						let oldDate;
						if (row.length !== 0) {
							oldDate = new Date(row[row.length - 1].date);
						} else {
							oldDate = new Date(rows[rows.length - 1][weekLength - 1].date);
						}
						newDate.setDate(oldDate.getDate() + 1);
						const dateObj: { date: Date; events: Array<string> } = {
							date: newDate,
							events: [],
						};
						row.push(dateObj);
					}
					day++;
				}
				rows.push(row);
			}
			return rows;
		}
		return [];
	};
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
	);
};

export default Calendar;
