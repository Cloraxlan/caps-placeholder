//import React, { CSSProperties } from "react";
// import Header from "./components/Header";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Layout from "./components/Layout/Layout";
import "./App.css";
// const bodyStyling: CSSProperties = {
// 	backgroundColor: "black",
// };
function App() {
	return (
		<body>
			<div /*style={bodyStyling}*/>
				<Layout>
					<ul style={{ listStyle: "none" }}>
						<div className="Login">
							<Login />
						</div>
						<div className="Logout">
							<Logout />
						</div>
					</ul>
				</Layout>
				{/* <Header />*/}
			</div>
		</body>
	);
}

export default App;
