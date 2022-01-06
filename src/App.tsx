//import React, { CSSProperties } from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import Search from "./features/recipeSearch/Search";
import Calendar from "./components/Calendar/Calendar";
import Ingredient from "./Interfaces-Classes/Ingredient";

function App() {
	["6 cups thinly sliced, peeled apples (6 medium)", "3/4 cup sugar"].map(
		(x) => {
			new Ingredient(x);
		},
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
