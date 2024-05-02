import React, { useState } from 'react'

// hooks
import Input from '../ui/input'

// redux
import { useSelector, useDispatch } from "react-redux";
// reducers
import { loginAndRegisterFailure, loginAndRegisterStart, loginAndRegisterSuccess, } from '../slice/auth';
import AuthService from './../service/auth';

function Login() {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const dispatch = useDispatch()
	const { isLoading } = useSelector(state => state.auth)

	const handleLogin = async (e) => {
		e.preventDefault()
		dispatch(loginAndRegisterStart())
		const user = { email: email, password: password }
		try {
			const response = await AuthService.userLogin(user)
				dispatch(loginAndRegisterSuccess(response.user))
		} catch (error) {
			dispatch(loginAndRegisterFailure(error.response.data.errors))
		}
	}


	return (
		<div className='d-flex align-items-center'>
			<main className="form-signin w-50 m-auto mt-5">
				<form onSubmit={handleLogin} >
					<h1 className="h3 mb-3 fw-normal text-center">Login</h1>

					<Input label={"Email adresss"} state={email} setState={setEmail} />
					<Input label={"Password"} state={password} setState={setPassword} type={"password"} />

					<button className="btn btn-primary w-100 py-2 mt-2" disabled={isLoading} type="submit" >{isLoading ? 'loading...' : 'Login'}</button>
				</form>
			</main>
		</div>
	)
}

export default Login
