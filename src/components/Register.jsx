import { useState } from 'react'
import UiInput from './../ui/UiInput';
import { useDispatch, useSelector } from 'react-redux';
import { siginUserFailure, siginUserStart, siginUserSuccess } from '../slice/auth';
import AuthService from '../service/auth';

function Register() {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useDispatch()
	const { isLoading } = useSelector(state => state.auth)

	const handleSubmit = async (e) => {
		e.preventDefault()
		dispatch(siginUserStart())
		const user = {username: name, email, password}
		try {
			const response = await AuthService.userRegister(user)
			dispatch(siginUserSuccess(response.user))
		} catch (error) {
			dispatch(siginUserFailure(error.response.data.errors))
		}
	}

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
			<form onSubmit={handleSubmit} style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
				<h1 className="h3 mb-3 fw-normal">Sign in</h1>
				<UiInput label="Username" type="text" state={name} setState={setName} />
				<UiInput label="Email Adress" type="text" state={email} setState={setEmail} />
				<UiInput label="Password" type="password" state={password} setState={setPassword} />
				<button className="btn btn-primary w-100 py-2" type="submit" disabled={isLoading}>{isLoading ? 'Yuklanmoqda...' : 'Sign in'}</button>
			</form>
		</div>
	)
}

export default Register