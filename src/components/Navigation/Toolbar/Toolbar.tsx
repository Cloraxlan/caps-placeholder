import React from "react";
import NavItems from "../NavItems/NavItems";
import "./Toolbar.css";

const Toolbar = () => (
	<React.Fragment>
		<style>
			@import
			url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@300&display=swap');
		</style>
		<header className="Toolbar">
			<div>MENU</div>
			<nav>
				<NavItems />
			</nav>
		</header>
	</React.Fragment>
);

export default Toolbar;
