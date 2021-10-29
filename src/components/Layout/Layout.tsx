import React, { CSSProperties } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const childrenStyle: CSSProperties = {
	marginTop: "72px",
};

const Layout = (props: {
	children:
		| boolean
		| React.ReactChild
		| React.ReactFragment
		| React.ReactPortal
		| null
		| undefined;
}) => (
	<React.Fragment>
		<Toolbar />
		<main style={childrenStyle}>{props.children}</main>
	</React.Fragment>
);

export default Layout;
