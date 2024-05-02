import React, { useState } from 'react'

// hooks
import Input from '../ui/input'
// auth reducer
import { useDispatch, useSelector } from 'react-redux'
import { registerUserFailure, registerUserStart, registerUserSuccess } from '../slice/auth'
// service
import AuthService from './../service/auth';

function Register() {

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const dispatch = useDispatch()
	const { isLoading } = useSelector(state => state.auth)

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(registerUserStart())
		const user = {
			username: name,
			email: email,
			password: password
		}
		try {
			const response = await AuthService.userRegister(user)
			console.log(response);
			console.log(user);
			dispatch(registerUserSuccess())
		} catch (error) {
			console.log(error);
			dispatch(registerUserFailure())
		}
	}

	return (
		<div className='d-flex align-items-center'>
			<main className="form-signin w-50 m-auto mt-5">
				<form onSubmit={handleSubmit}>
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
