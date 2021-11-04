import "./NavItem.css";

const NavItem = (props: {
	link: string | undefined;
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
		<a href={props.link} className={props.active ? "active" : undefined}>
			{props.children}
		</a>
	</li>
);

export default NavItem;
