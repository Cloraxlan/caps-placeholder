//import React, { CSSProperties } from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
	return (
		<body>
			<div>
				<Layout>
					<Switch>
						<Route path="/LoginPage" component={LoginPage} />
						<ul style={{ listStyle: "none" }}></ul>
					</Switch>
				</Layout>
			</div>
		</body>
	);
}

export default App;
