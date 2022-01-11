//import React, { CSSProperties } from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import Search from "./features/recipeSearch/Search";
import Calendar from "./components/Calendar/Calendar";
import Ingredient from "./Interfaces-Classes/Ingredient";
import UnitSystem from "./Interfaces-Classes/UnitSystem";

function App() {
	console.log(
		new UnitSystem({
			fullName: "cup",
			abbreviations: ["cp.", "cp"],
			system: "CUSTOMARY",
			measure: "VOLUME",
			convertionFactor: 16,
		}).convert(5, {
			fullName: "mililiter",
			abbreviations: ["ml", "ml."],
			system: "METRIC",
			measure: "VOLUME",
			convertionFactor: 1000,
		}),
	);

	return (
		<body>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Layout>
					<Switch>
						<Route path="/LoginPage" component={LoginPage} />
						<Route path="/Search" component={Search} />
						<Route path="/Calendar" component={Calendar} />

						<ul style={{ listStyle: "none" }}></ul>
					</Switch>
				</Layout>
			</div>
		</body>
	);
}

export default App;
