import { ReactElement, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Login from "../../components/Login";
import Logout from "../../components/Logout";
import { selectLogin } from "../../features/login/loginSlice";
import "../LoginPage/LoginPage.css";

function LoginPage(): ReactElement {
	const selector = useAppSelector(selectLogin);
	const [status, setStatus] = useState(false);
	useEffect(() => {
		setStatus(selector.profile != undefined);
	}, [selector]);
	let getStatus = () => {
		if (status) {
			return "Signed In";
		} else {
			return "Signed Out";
		}
	};
	let SignedInAs = () => {
		if (selector.profile != undefined) {
			return "Signed in as: as das ds da " + selector.profile.name;
		} else {
			return "";
		}
	};
	return (
		<div>
			<div className="StatusBox">
				<div>Status: {getStatus()}</div>
				<div>{SignedInAs()}</div>
			</div>
			<ul className="LoginMargin">
				<Login />
			</ul>
			<ul className="LogoutMargin">
				<Logout />
			</ul>
		</div>
	);
}

export default LoginPage;
