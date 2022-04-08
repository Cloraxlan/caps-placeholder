import "./MonthsFilter.css";

const MonthsFilter = (props: {
	onFilterMonth: (arg0: any) => void;
	month: string | number | readonly string[] | undefined;
	year?: string | number | readonly string[] | undefined;
}) => {
	const filterChangeHandler = (event: { target: { value: any } }) => {
		props.onFilterMonth(event.target.value);
	};

	const dropClickHandler = () => {
		// (document.firstElementChild as HTMLElement)?.focus();
	};

	return (
		<div className="months-filter">
			<div id="drop" className="months-filter__control">
				{/* <label>Filter by month</label> */}
				<select
					onChange={filterChangeHandler}
					onClick={dropClickHandler}
					defaultValue={new Date().getMonth().toString()}
					value={props.month}
					id="drop2"
				>
					<option value="0">January {props.year}</option>
					<option value="1">February {props.year}</option>
					<option value="2">March {props.year}</option>
					<option value="3">April {props.year}</option>
					<option value="4">May {props.year}</option>
					<option value="5">June {props.year}</option>
					<option value="6">July {props.year}</option>
					<option value="7">August {props.year}</option>
					<option value="8">September {props.year}</option>
					<option value="9">October {props.year}</option>
					<option value="10">November {props.year}</option>
					<option value="11">December {props.year}</option>
				</select>
			</div>
		</div>
	);
};

export default MonthsFilter;
