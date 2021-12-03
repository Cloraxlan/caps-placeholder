import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { GoogleLoginResponse } from "react-google-login";
import { RootState } from "../../app/store";
export interface LoginState {
	profile: GoogleLoginResponse | null;
}
const initialState: any = {};
export const loginSlice: Slice = createSlice({
	name: "login",
	initialState,
	reducers: {
		setProfile: (
			state: LoginState,
			action: PayloadAction<GoogleLoginResponse>,
		) => {
			state.profile = action.payload;
		},
		setLogout: (state: LoginState) => {
			state.profile = null;
			console.log(state.profile + "oi");
		},
	},
});
export const selectLogin = (state: RootState) => state.login;

export const { setProfile, setLogout } = loginSlice.actions;

export default loginSlice.reducer;
