//import React, { CSSProperties } from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import Search from "./features/recipeSearch/Search";
import Calendar from "./components/Calendar/Calendar";
import Ingredient from "./Interfaces-Classes/Ingredient";
import UnitSystem from "./Interfaces-Classes/UnitSystem";
import Debug from "./Debug";
import Landing from "./Landing/Landing";

function App() {
	// console.log(
	// 	new UnitSystem({
	// 		fullName: "cup",
	// 		abbreviations: ["cp.", "cp"],
	// 		system: "CUSTOMARY",
	// 		measure: "VOLUME",
	// 		convertionFactor: 16,
	// 	}).convert(5, {
	// 		fullName: "mililiter",
	// 		abbreviations: ["ml", "ml."],
	// 		system: "METRIC",
	// 		measure: "VOLUME",
	// 		convertionFactor: 1000,
	// 	}),
	// );

	return (
		<body>
			{/* Centers content on each page */}
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{/* Renders page content with a toolbar */}
				<Layout>
					{/* links toolbar nav items to pages */}
					<Switch>
						<Route exact={true} path="/" component={Landing} />
						<Route path="/LoginPage" component={LoginPage} />
						<Route path="/Search" component={Search} />
						<Route path="/Calendar" component={Calendar} />
						<Route path="/Debug" component={Debug} />

						<ul style={{ listStyle: "none" }}></ul>
					</Switch>
				</Layout>
			</div>
		</body>
	);
}

export default App;
