import React from "react";
// import Header from "./components/Header";
import Login from "./components/Login";
import Logout from "./components/Logout";

import Layout from "./components/Layout/Layout";

function App() {
	return (
		<div>
			<Layout>
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
