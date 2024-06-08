import React, { useState } from 'react'
import UiInput from './../ui/UiInput';

function Register() {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<div className='login-wrapper'>
			<style>
				{
					`
				.login-wrapper {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 80vh;
				}
			`
				}
			</style>
			<form style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
				<h1 className="h3 mb-3 fw-normal">Register</h1>
				<UiInput label="Username" type="text" state={name} setState={setName}/>
				<UiInput label="Email Adress" type="email" state={email} setState={setEmail}/>
				<UiInput label="Password" type="password" state={password} setState={setPassword}/>
				<button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
			</form>
		</div>
	)
}

export default Register