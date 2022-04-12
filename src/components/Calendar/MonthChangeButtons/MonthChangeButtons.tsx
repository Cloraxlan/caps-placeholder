import { useEffect } from "react";
import "./MonthChangeButtons.css";
import useArrowKeys from "use-arrow-keys";

interface Props {
	month: number;
	onMonthChange: any;
}

const MonthChangeButtons = (props: Props) => {
	const onLeftKey = () => {
		monthChangeMerger(-1);
	};
	const onRightKey = () => {
		monthChangeMerger(1);
	};
	//useArrowKeys({ left, right });
	useArrowKeys({ onLeftKey, onRightKey });

	const filterChangeHandler = (event: any) => {
		const val = event.target.innerText === "ᐅ" ? 1 : -1;
		console.log("ran");
		monthChangeMerger(val);
	};
	console.log("OBMAMA", props.month);
	const monthChangeMerger = (x: any) => {
		props.onMonthChange(x);
	};

	/*let keyPressEvent: any = window.addEventListener("keydown", (event: any) => {
		let monthChanger: number = 0;
		if (event.key === "ArrowLeft") {
			monthChanger = -1;
		} else if (event.key === "ArrowRight") {
			monthChanger = 1;
		}
		// props.onMonthChange(monthChanger);
		monthChangeMerger(monthChanger);
	});
	/*return () => {
		window.removeEventListener("keydown", keyPressEvent);
	};*/
	/*useEffect(() => {
		let keyPressEvent: any = window.addEventListener(
			"keydown",
			(event: any) => {
				let monthChanger: number = 0;
				if (event.key === "ArrowLeft") {
					monthChanger = -1;
				} else if (event.key === "ArrowRight") {
					monthChanger = 1;
				}
				// props.onMonthChange(monthChanger);
				monthChangeMerger(monthChanger);
				window.removeEventListener("keydown", keyPressEvent);
			},
		);
	}, []);*/
	/*useEffect(() => {
		let e = (event: any) => {
			let monthChanger: number = 0;
			if (event.key === "ArrowLeft") {
				monthChanger = -1;
			} else if (event.key === "ArrowRight") {
				monthChanger = 1;
			}
		};
		console.log("yoyoyo");
		// let keyPressEvent: any =
		window.addEventListener("keydown", (event: any) => {
			let monthChanger: number = 0;
			if (event.key === "ArrowLeft") {
				monthChanger = -1;
			} else if (event.key === "ArrowRight") {
				monthChanger = 1;
			}
			// props.onMonthChange(monthChanger);
			monthChangeMerger(monthChanger);
			window.removeEventListener("keydown", event);
		});
		// keyPressEvent;
	}, [props.month]);*/
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
