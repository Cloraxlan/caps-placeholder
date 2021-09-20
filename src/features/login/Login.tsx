import React, { CSSProperties, useRef, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setPassword, setUsername } from "./loginSlice";

interface Props {}
const loginStyle: CSSProperties = {
	marginLeft: "80%",
};
const overlay: CSSProperties = {
	position: "fixed",
	display: "block",
	width: "100%",
	height: "100%",
	top: "0",
	left: "0",
	right: "0",
	bottom: "0",
	backgroundColor: "rgba(0,0,0,0.5)",
	zIndex: 2,
};
const overlayPanel: CSSProperties = {
	position: "absolute",

	top: "20%",
	left: "20%",
	width: "60%",
	height: "50%",
	backgroundColor: "white",
};
const loginInputCSS: CSSProperties = {
	paddingLeft: "10%",
	paddingTop: "10px",
	display: "flex",
	flexDirection: "row",
};

const Login = (props: Props) => {
	//Access Store
	const dispatch = useAppDispatch();

	const [showOverlay, setShowOverlay] = useState(false);
	const username = useRef(null);
	const password = useRef(null);

	const login = () => {
		//Updates username and password in store and clears inputs
		if (username.current && password.current) {
			let usernameValue: string = (username.current as any).value;
			let passwordValue: string = (password.current as any).value;
			dispatch(setUsername(usernameValue));
			dispatch(setPassword(passwordValue));
			setShowOverlay(false);
			(username.current as any).value = "";
			(password.current as any).value = "";
		}
	};
	return (
		<React.Fragment>
			{showOverlay && (
				<div style={overlay}>
					<div style={overlayPanel}>
						<button
							onClick={() => {
								setShowOverlay(false);
							}}
						>
							X
						</button>
						<div style={loginInputCSS}>
							<p>Username:</p>
							<input ref={username} type="text"></input>
						</div>
						<div style={loginInputCSS}>
							<p>Password: </p>
							<input ref={password} type="password"></input>
						</div>
						<button onClick={login}>Login</button>
					</div>
				</div>
			)}
			<button
				onClick={() => {
					setShowOverlay(!showOverlay);
				}}
				style={loginStyle}
			>
				Login
			</button>
		</React.Fragment>
	);
};

export default Login;
