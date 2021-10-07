import React, { CSSProperties } from "react";
import { useAppSelector } from "../app/hooks";
import Login from "../features/login/Login";
import { LoginState, selectLogin } from "../features/login/loginSlice";

interface Props {}
const headerStyle: CSSProperties = {
	display: "flex",
	flexDirection: "row",
};
const buttonStyle: CSSProperties = {
	padding: "0.5rem 1.5rem",
	background: "#8b005d",
	border: "1px solid #8b005d",
	boxShadow: "0 0 4px rgba(0, 0, 0, 0.26)",
	// borderRadius: "3px",
	color: "white",
	cursor: "pointer",
};
const title: CSSProperties = {
	display: "flex",
	alignContent: "center",
	justifyContent: "center",
	fontFamily: "Creepster",
};
const Header = (props: Props) => {
	//Access store's login state
	const login: LoginState = useAppSelector(selectLogin);

	const loginStatus = () => {
		switch (login.username) {
			case "":
				return "Not Logged In";

			default:
				return "Logged in as " + login.username;
		}
	};
	return (
		<React.Fragment>
			{/*Font for title */}
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');
			</style>

			<h1 style={title}>Caps placeholder</h1>
			<div style={headerStyle}>
				<button style={buttonStyle}>Poggers</button>
				<button style={buttonStyle}>Fortnite</button>
				<button style={buttonStyle}>Keanu</button>
				<button style={buttonStyle}>Chungus</button>
				<button style={buttonStyle}>Wholesome</button>
				<button style={buttonStyle}>100</button>
				<p>{loginStatus()}</p>
				<Login />
			</div>
		</React.Fragment>
	);
};

export default Header;
