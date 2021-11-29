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
			return "Signed in as: " + selector.profile.name;
		} else {
			return "";
		}
	};

	let getFirstName = () => {
		if (selector.profile != undefined) {
			return selector.profile.name.substring(
				0,
				selector.profile.name.indexOf(" "),
			);
		}
	};

	let statusMessage = () => {
		if (selector.profile != undefined) {
			return "Welcome back " + getFirstName() + "!";
		} else {
			return "Please Sign in";
		}
	};
	return (
		<div>
			<div className="StatusMessage">{statusMessage()}</div>
			<div className="StatusBox">
				<div className="Text">Status: {getStatus()}</div>
				<div className="Text">{SignedInAs()}</div>
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
