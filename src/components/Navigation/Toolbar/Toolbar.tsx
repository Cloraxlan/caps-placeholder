import { Fragment } from "react";
import NavItems from "../NavItems/NavItems";
import "./Toolbar.css";

const Toolbar = () => (
	<Fragment>
		<style>
			@import
			url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@300&display=swap');
		</style>
		<header className="Toolbar">
			<div>CAPS-PLACEHOLDER</div>
			<nav>
				<NavItems />
			</nav>
		</header>
	</Fragment>
);

export default Toolbar;
