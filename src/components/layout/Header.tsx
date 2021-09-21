import React, { CSSProperties } from "react";
import { useAppSelector } from "../../app/hooks";
import Login from "../../features/login/Login";
import { LoginState, selectLogin } from "../../features/login/loginSlice";

interface Props {}
const headerStyle: CSSProperties = {
	display: "flex",
	flexDirection: "row",
};
const buttonStyle: CSSProperties = {
	padding: "10px",
	backgroundColor: "green",
	borderRadius: "3px",
	color: "white",
};
const title: CSSProperties = {
	display: "flex",
	alignContent: "center",
	justifyContent: "center",
	fontFamily: "Prompt",
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
				url('https://fonts.googleapis.com/css2?family=Prompt:ital,wght@1,200&display=swap');
			</style>

			<h1 style={title}>Caps placeholder</h1>
			<div style={headerStyle}>
				<button style={buttonStyle}>hello jeremy</button>
				<button style={buttonStyle}>test hello konrad</button>
				<button style={buttonStyle}>jeremy?</button>
				<p>{loginStatus()}</p>
				<Login />
			</div>
		</React.Fragment>
	);
};

export default Header;
