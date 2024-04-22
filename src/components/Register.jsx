import React, { useState } from 'react'

// hooks
import Input from '../ui/input'

function Register() {

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	return (
		<div className='d-flex align-items-center'>
			<main className="form-signin w-50 m-auto mt-5">
				<form>
					<h1 className="h3 mb-3 fw-normal text-center">Register</h1>

					<Input label={"Username"} setState={setName} />
					<Input label={"Email adress"} setState={setEmail} />
					<Input label={"Password"} setState={setPassword} type={"password"} />

					<button className="btn btn-primary w-100 py-2 mt-2" type="submit">Register</button>
				</form>
			</main>
		</div>
	)
}

export default Register
