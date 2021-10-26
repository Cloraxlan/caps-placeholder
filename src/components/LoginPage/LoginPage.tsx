import React, { ReactElement } from "react";
import Login from "../../components/Login";
import Logout from "../../components/Logout";
interface Props {}

function LoginPage({}: Props): ReactElement {
	return (
		<div>
			<div className="Login">
				<Login />
			</div>
			<div className="Logout">
				<Logout />
			</div>
			{/* <NavItem link="/LoginPage" active={false}>
				Future Login Page
			</NavItem> */}
		</div>
	);
}

export default LoginPage;
