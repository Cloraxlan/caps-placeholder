import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
//import counterReducer from '../features/counter/counterSlice';
import loginReducer from "../features/login/loginSlice";
import calendarSlice from "../features/recipeSearch/calendarSlice";
import prefrencesSlice from "../prefrencesSlice";
import sessionSlice from "../sessionSlice";

export const store = configureStore({
	reducer: {
		login: loginReducer,
		calendar: calendarSlice,
		prefrences: prefrencesSlice,
		session: sessionSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
