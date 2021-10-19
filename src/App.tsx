import React from "react";
// import Header from "./components/Header";
import Login from "./components/Login";
import Logout from "./components/Logout";

import Layout from "./components/Layout/Layout";
import Calendar from "./components/Calendar/Calendar";

function App() {
	return (
		<div>
			<Layout>
				<Calendar />
				<ul style={{listStyle: "none"}}>
					<li><Login /></li>
					<br />
					<li><Logout/></li>
				</ul>
			</Layout>
			{/* <Header />*/}
		</div>
	);
}

export default App;
