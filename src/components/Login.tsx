import React from "react";
import {
	GoogleLoginResponse,
	GoogleLoginResponseOffline,
	useGoogleLogin,
} from "react-google-login";

// refresh token
import { refreshTokenSetup } from "./refreshTokenSetup";

const clientId =
	"201437708650-9ndfuhshviue7au27pa3e3me4vrqlhu5.apps.googleusercontent.com";

function LoginHooks() {
	const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
		console.log("Login Success: currentUser:", (res as any).profileObj);
		refreshTokenSetup(res);
	};

	/*const onFailure = (res) => {
		console.log("Login failed: res:", res);
	};*/

	const { signIn } = useGoogleLogin({
		onSuccess,
		//onFailure,
		clientId,
		isSignedIn: true,
		accessType: "offline",
		// responseType: 'code',
		// prompt: 'consent',
	});

	return (
		<button onClick={signIn} className="button">
			<img
				/*src="icons/google.svg"*/ /*alt="google login"*/ className="icon"
			></img>

			<span className="buttonText">Sign in with Google</span>
		</button>
	);
}

export default LoginHooks;
