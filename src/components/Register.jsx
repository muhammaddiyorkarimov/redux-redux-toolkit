import React, { useState } from 'react'

// hooks
import Input from '../ui/input'
// auth reducer
import { useDispatch, useSelector } from 'react-redux'
import { loginAndRegisterFailure, loginAndRegisterStart, loginAndRegisterSuccess, } from '../slice/auth';
// service
import AuthService from './../service/auth';

function Register() {

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const dispatch = useDispatch()
	const { isLoading } = useSelector(state => state.auth)

	const handleRegister = async (e) => {
		e.preventDefault();
		dispatch(loginAndRegisterStart())
		const user = {
			username: name,
			email: email,
			password: password
		}
		try {
			const response = await AuthService.userRegister(user)
			dispatch(loginAndRegisterSuccess(response.user))
		} catch (error) {
			dispatch(loginAndRegisterFailure(error.response.data.errors))
		}
	}

	return (
		<div className='d-flex align-items-center'>
			<main className="form-signin w-50 m-auto mt-5">
				<form onSubmit={handleRegister}>
					<h1 className="h3 mb-3 fw-normal text-center">Register</h1>

					<Input label={"Username"} setState={setName} />
					<Input label={"Email adress"} setState={setEmail} />
					<Input label={"Password"} setState={setPassword} type={"password"} />

					<button className="btn btn-primary w-100 py-2 mt-2" disabled={isLoading} type="submit" >{isLoading ? 'loading...' : 'Register'}</button>
				</form>
			</main>
		</div>
	)
}

export default Register
