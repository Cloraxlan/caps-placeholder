import React, { CSSProperties } from "react";
import NavItem from "./NavItem/NavItem";
import LoginPage from "../../LoginPage/LoginPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const navItemsStyling: CSSProperties = {
	margin: "0",
	padding: "0",
	listStyle: "none",
	display: "flex",
	alignItems: "center",
	height: "100%",
};

const NavItems = () => {
	console.log(document.location.href);
	return (
		<ul style={navItemsStyling}>
			<NavItem link="/" active={document.location.pathname == "/"}>
				Home
			</NavItem>
			<NavItem link="/" active={false}>
				Feature
			</NavItem>
			<NavItem
				link="/LoginPage"
				active={document.location.pathname == "/LoginPage"}
			>
				Future Login Page
			</NavItem>
		</ul>
	);
};

export default NavItems;
