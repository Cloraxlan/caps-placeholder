import React from "react";
import Header from "./components/layout/Header";
import Login from "./components/Login";
import Logout from "./components/layout/Logout";
function App() {
	return (
		<div>
			<Header />
			<Login />
			<Logout />
		</div>
	);
}

export default App;
