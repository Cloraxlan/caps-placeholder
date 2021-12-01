import { CSSProperties } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectRecipeDates } from "../../../features/recipeSearch/calendarSlice";
import NavItem from "./NavItem/NavItem";
const navItemsStyling: CSSProperties = {
	margin: "0",
	padding: "0",
	listStyle: "none",
	display: "flex",
	alignItems: "center",
	height: "100%",
};

const NavItems = () => {
	let calendarState = useAppSelector(selectRecipeDates);

	return (
		<ul style={navItemsStyling}>
			<NavItem link="/" active={document.location.pathname === "/"}>
				Home
			</NavItem>
			<NavItem link="/" active={false}>
				Feature
			</NavItem>
			<NavItem
				link="/LoginPage"
				active={document.location.pathname === "/LoginPage"}
			>
				Future Login Page
			</NavItem>
			<NavItem link="/Search" active={document.location.pathname === "/Search"}>
				Recipe Search
			</NavItem>
			<NavItem
				link={{ pathname: "/Calendar", state: { calendarState } }}
				active={document.location.pathname === "/Calendar"}
			>
				Calendar
			</NavItem>
			<NavItem
				link={{ pathname: "/Grocery", state: { calendarState } }}
				active={document.location.pathname === "/Grocery"}
			>
				Grocery
			</NavItem>
		</ul>
	);
};

export default NavItems;
