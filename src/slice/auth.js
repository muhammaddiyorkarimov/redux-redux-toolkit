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
		loginAndRegisterStart: state => {
			state.isLoading = true
		},
		loginAndRegisterSuccess: (state, action) => {
			state.loggedIn = true
			state.isLoading = false
			state.user = action.payload
		},
		loginAndRegisterFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		}
	},
})

export const { loginAndRegisterStart, loginAndRegisterSuccess, loginAndRegisterFailure } = authSlice.actions
export default authSlice.reducer
