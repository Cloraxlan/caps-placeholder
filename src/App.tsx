//import React, { CSSProperties } from "react";
// import Header from "./components/Header";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Layout from "./components/Layout/Layout";
import "./App.css";
import Calendar from "./components/Calendar/Calendar";
// const bodyStyling: CSSProperties = {
// 	backgroundColor: "black",
// };
function App() {
	return (
		<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
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
