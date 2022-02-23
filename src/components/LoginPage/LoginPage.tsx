/* eslint-disable */
import { ReactElement, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Login from "./Login";
import Logout from "./Logout";
import { selectLogin } from "../../features/login/loginSlice";
import "../LoginPage/LoginPage.css";
import Card from "../../components/UI/Card/Card";
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
			<div className="StatusBox">
				<div className="Text">Status: {getStatus()}</div>
				<div className="Text">{SignedInAs()}</div>
			</div>
			<Card className="StatusMessage">{statusMessage()}</Card>
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
