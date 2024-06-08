import React from 'react'

function Login() {

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
				<form style={{width: '400px', display:'flex', flexDirection: 'column', gap: '20px'}}>
					<h1 className="h3 mb-3 fw-normal">Login</h1>
					<div className="form-floating">
						<input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
						<label htmlFor="floatingInput">Email address</label>
					</div>
					<div className="form-floating">
						<input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
						<label htmlFor="floatingPassword">Password</label>
					</div>
					<button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
				</form>
		</div>
	)
}

export default Login