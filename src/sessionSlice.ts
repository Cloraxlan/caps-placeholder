import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./app/store";

export interface SessionState {
	token?: string;
	loggedIn: boolean;
}

const initialState: SessionState = {
	loggedIn: false,
	//FOR TESTING
};
export const sessionSlice: Slice = createSlice({
	name: "session",
	initialState,
	reducers: {
		//Give a token
		logIn: (state: SessionState, action: PayloadAction<string>) => {
			state.token = action.payload;
			state.loggedIn = true;
		},
	},
});

export const { logIn } = sessionSlice.actions;
export const selectToken = (state: RootState) => state.session.token;

export default sessionSlice.reducer;
