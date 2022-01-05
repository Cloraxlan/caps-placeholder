//import React, { CSSProperties } from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import Search from "./features/recipeSearch/Search";
import Calendar from "./components/Calendar/Calendar";

function App() {
	return (
		<body>

			{/* Centers content on each page */}
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
				{/* Renders page content with a toolbar */}
				<Layout>
					{/* links toolbar nav items to pages */}
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
