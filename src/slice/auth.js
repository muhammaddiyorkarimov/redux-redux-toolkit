	import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	loggedIn: false,
	error: null,
	user: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// login
		loginUserStart: state => {
			state.isLoading = true
		},
		loginUserSuccess: (state, action) => {
		},
		loginUserFailure: (state, action) => {
		},
		// register
		registerUserStart: state => {
			state.isLoading = true
		},
		registerUserSuccess: (state, action) => {
			state.loggedIn = true
			state.isLoading = false
		},
		registerUserFailure: (state, action) => {
			state.isLoading = false
			state.error = 'error'
		},
	},
})

export const { loginUserStart, registerUserStart, registerUserSuccess, registerUserFailure } = authSlice.actions
export default authSlice.reducer
