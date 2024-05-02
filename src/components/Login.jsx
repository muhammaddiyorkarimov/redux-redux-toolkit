import React, { useState } from 'react'

// hooks
import Input from '../ui/input'

// redux
import { useSelector, useDispatch } from "react-redux";
// reducers
import { loginUserStart } from '../slice/auth';

function Login() {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const dispatch = useDispatch()
	const {isLoading} = useSelector(state => state.auth)

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(loginUserStart())
	}


	return (
		<div className='d-flex align-items-center'>
			<main className="form-signin w-50 m-auto mt-5">
				<form onSubmit={handleSubmit} >
					<h1 className="h3 mb-3 fw-normal text-center">Sign in</h1>

					<Input label={"Email adresss"} state={email} setState={setEmail} />
					<Input label={"Password"} state={password} setState={setPassword} type={"password"} />

					<button className="btn btn-primary w-100 py-2 mt-2" disabled={isLoading} type="submit" >{isLoading ? 'loading...' : 'Sign in'}</button>
				</form>
			</main>
		</div>
	)
}

export default Login
