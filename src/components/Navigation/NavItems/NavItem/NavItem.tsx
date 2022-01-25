import { Link } from "react-router-dom";
import "./NavItem.css";

const NavItem = (props: {
	link: any;
	active: any;
	children:
		| boolean
		| React.ReactChild
		| React.ReactFragment
		| React.ReactPortal
		| null
		| undefined;
}) => (
	<li className="NavItem">
		<div className={props.active ? "active" : undefined}>
			<Link to={props.link}>{props.children}</Link>
		</div>
	</li>
);

export default NavItem;
