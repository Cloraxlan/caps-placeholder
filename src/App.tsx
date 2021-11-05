//import React, { CSSProperties } from "react";
// import Header from "./components/Header";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Layout from "./components/Layout/Layout";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import Search from "./features/recipeSearch/Search";
import Calendar from "./components/Calendar/Calendar";

// const bodyStyling: CSSProperties = {
// 	backgroundColor: "black",
// };
function App() {
	return (
		<body>
			<div /*style={bodyStyling}*/>
				<Layout>
					<Switch>
						<Route path="/LoginPage" component={LoginPage} />
						<Route path="/Search" component={Search} />
						<Route path="/Calendar" component={Calendar} />

						<ul style={{ listStyle: "none" }}></ul>
					</Switch>
					{/* <ul style={{ listStyle: "none" }}>
						<div className="Login">
							<Login />
						</div>
						<div className="Logout">
							<Logout />
						</div>
					</ul> */}
				</Layout>
				{/* <Header />*/}
			</div>
		</body>
	);
}

export default App;
