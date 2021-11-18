import { ReactElement } from "react";
import Login from "../../components/Login";
import Logout from "../../components/Logout";

function LoginPage(): ReactElement {
	return (
		<div>
			<div>Status: ____</div>
			<div>Signed in as: ______</div>
			<div className="Login">
				<Login />
			</div>
			<div className="Logout">
				<Logout />
			</div>
		</div>
	);
}

export default LoginPage;
