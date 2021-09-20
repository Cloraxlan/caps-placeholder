import React, { CSSProperties } from "react";
import Login from "../../features/login/Login";

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
	return (
		<React.Fragment>
			{/*Font for title */}
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Prompt:ital,wght@1,200&display=swap');
			</style>

			<h1 style={title}>CAPS PLACEHOLDER</h1>
			<div style={headerStyle}>
				<button style={buttonStyle}>test</button>
				<button style={buttonStyle}>test</button>
				<button style={buttonStyle}>kill cade?</button>
				<Login />
			</div>
		</React.Fragment>
	);
};

export default Header;
