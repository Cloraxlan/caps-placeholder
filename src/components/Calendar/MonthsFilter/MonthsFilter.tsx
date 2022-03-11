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
					<option value="0">January</option>
					<option value="1">February</option>
					<option value="2">March</option>
					<option value="3">April</option>
					<option value="4">May</option>
					<option value="5">June</option>
					<option value="6">July</option>
					<option value="7">August</option>
					<option value="8">September</option>
					<option value="9">October</option>
					<option value="10">November</option>
					<option value="11">December</option>
				</select>
			</div>
		</div>
	);
};

export default MonthsFilter;
