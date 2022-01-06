import React from "react";

interface Props {
	calories: number;
}

const CalorieCounter = (props: Props) => {
	return (
		<div>
			<h1 className="bigCalorie">{props.calories}</h1>
		</div>
	);
};

export default CalorieCounter;
