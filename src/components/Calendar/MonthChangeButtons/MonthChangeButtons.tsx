import { Fragment } from "react";
import "./MonthChangeButtons.css";

const MonthChangeButtons = (props: any) => {
	const filterChangeHandler = (event: any) => {
		const val = event.target.innerText === "Next" ? 1 : -1;
		props.onMonthChange(val);
	};

	return (
		<div className="monthChangeButtons">
			<button type="submit" className="arrow" onClick={filterChangeHandler}>
				ᐊ
			</button>
			<button type="submit" className="arrow" onClick={filterChangeHandler}>
				ᐅ
			</button>
		</div>
	);
};

export default MonthChangeButtons;
