import React from "react";
import {
	GoogleLoginResponse,
	GoogleLoginResponseOffline,
	useGoogleLogin,
} from "react-google-login";
import { useAppDispatch } from "../../app/hooks";
import { setProfile } from "../../features/login/loginSlice";
import "./LoginPage.css";
// refresh token
import { refreshTokenSetup } from "../refreshTokenSetup";
import Button from "../UI/Button/Button";

const clientId =
	"201437708650-9ndfuhshviue7au27pa3e3me4vrqlhu5.apps.googleusercontent.com";

function LoginHooks() {
	const dispatch = useAppDispatch();
	const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
		console.log("Login Success: currentUser:", (res as any).profileObj);
		dispatch(setProfile((res as any).profileObj));
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
		<Button type="submit" onClick={signIn}>
			<div className="LogButton">
				<span>Sign in with Google</span>
			</div>
		</Button>
	);
}

export default LoginHooks;
