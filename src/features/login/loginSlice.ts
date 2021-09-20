import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
export interface LoginState {
	username: string;
	password: string;
}
const initialState: LoginState = {
	username: "",
	password: "",
};
export const loginSlice: Slice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		setPassword: (state: LoginState, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
		setUsername: (state: LoginState, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
	},
});
export const selectLogin = (state: RootState) => state.login;

export const { setPassword, setUsername } = loginSlice.actions;

export default loginSlice.reducer;
