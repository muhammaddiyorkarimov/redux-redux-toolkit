import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function RootLayout() {
	return (
		<>
			<div className='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3'>
				<Link to={'/'}>
					<h1>KarimovM</h1>
				</Link>

				<nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
					<Link className='me-3 py-2 text-dark text-decoration-none' to={'/login'}>
						Login
					</Link>
					<Link className='me-3 py-2 text-dark text-decoration-none' to={'/register'}>
						Register
					</Link>
				</nav>
			</div>

			<main>
				<Outlet />
			</main>
		</>
	)
}

export default RootLayout