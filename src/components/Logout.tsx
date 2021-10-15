import React from "react";
import { useGoogleLogout } from "react-google-login";
import Button from "./UI/Button/Button";

const clientId =
	"201437708650-9ndfuhshviue7au27pa3e3me4vrqlhu5.apps.googleusercontent.com";

function LogoutHooks() {
	const onLogoutSuccess = () => {
		console.log("Logged out Success");
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
		<Button type="submit" onClick={signOut}>
			<img /*src="icons/google.svg" alt="google login"*/ className="icon" alt=""></img>

			<span>Sign out</span>
		</Button>
	);
}

export default LogoutHooks;