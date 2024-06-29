import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	isLoggedIn: false,
	error: null,
	user: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		siginUserStart: (state) => {
			state.isLoading = true;
		},
		siginUserSuccess: (state, action) => {
			state.isLoggedIn = true;
			state.isLoading = false;
			state.user = action.payload
		},
		siginUserFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		}
	},
});

export const {
	siginUserStart, siginUserSuccess, siginUserFailure
} = authSlice.actions;
export default authSlice.reducer;
