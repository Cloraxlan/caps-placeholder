import React from "react";
import { useGoogleLogout } from "react-google-login";

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
		<button onClick={signOut} className="button">
			<img /*src="icons/google.svg" alt="google login"*/ className="icon"></img>

			<span className="buttonText">Sign out</span>
		</button>
	);
}

export default LogoutHooks;
