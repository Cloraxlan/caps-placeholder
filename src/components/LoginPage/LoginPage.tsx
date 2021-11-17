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
		setStatus(() => {
			console.log("changed");
			return selector.profile != undefined || selector.profile != null;
		});
		console.log(selector.profile);
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
	return (
		<div>
			<div className="Status">Status: {getStatus()}</div>
			<div className="Status">{SignedInAs()}</div>
			<div></div>
			<div className="LoginMargin">
				<Login />
			</div>
			<div className="LogoutMargin">
				<Logout />
			</div>
		</div>
	);
}

export default LoginPage;
