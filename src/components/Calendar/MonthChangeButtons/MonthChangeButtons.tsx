import  { Fragment } from "react"

const MonthChangeButtons = (props: any) => {

    const filterChangeHandler = (event: any) => {
        const val = event.target.innerText === "Next" ? 1 : -1;
        props.onMonthChange(val);
    }

    return (
        <Fragment>
            <button type="submit" onClick={filterChangeHandler}>Previous</button>
            <button type="submit" onClick={filterChangeHandler}>Next</button>
        </Fragment>
    )
}

export default MonthChangeButtons;
