import React, { CSSProperties } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const childrenStyle: CSSProperties = {
	// marginTop: "10vh",
	marginTop: "72px",
};

// wraps other components and renders them alongside the toolbar
const Layout = (props: {
	children:
		| boolean
		| React.ReactChild
		| React.ReactFragment
		| React.ReactPortal
		| null
		| undefined;
}) => (
	// React.Fragment allows a component to return multiple top level tags
	<React.Fragment>
		{/* Toolbar renders a list of NavItems along with a header for the name of the website*/}
		<Toolbar />
		<main style={childrenStyle}>{props.children}</main>
	</React.Fragment>
);

export default Layout;
