import React from "react";
import { useGoogleLogout } from "react-google-login";
import Button from "../UI/Button/Button";
import "./LoginPage.css";
import { useAppDispatch } from "../../app/hooks";
import { setLogout } from "../../features/login/loginSlice";
const clientId =
	"201437708650-9ndfuhshviue7au27pa3e3me4vrqlhu5.apps.googleusercontent.com";

function LogoutHooks() {
	const dispatch = useAppDispatch();

	const onLogoutSuccess = () => {
		console.log("Logged out Success");
		dispatch(setLogout({}));
	};

	const onFailure = () => {
		console.log("Handle failure cases");
	};

	const { signOut } = useGoogleLogout({
		clientId,
		onLogoutSuccess,
		onFailure,
	});

	return (
		<Button
			type="submit"
			onClick={() => {
				signOut();
			}}
		>
			<div className="LogButton">
				<span>Sign out</span>
			</div>
		</Button>
	);
}

export default LogoutHooks;
