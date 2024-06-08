import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

function RootLayout() {
	return (
		<div>
			<style>
				{`
				header .logo{
					font-size: 32px;
				}
          .nav-link {
            color: black;
            text-decoration: none;
            padding: 10px;
          }
          .nav-link.active {
            font-weight: bold;
            color: red;
          }
        `}
			</style>
			<header className="d-flex justify-content-around align-items-center py-3">
				<Link to={'/'} className="logo">KarimovM</Link>
				<ul className="nav nav-pills d-flex g-5">
					<li className="nav-item">
						<NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/register" className="nav-link" activeClassName="active">Register</NavLink>
					</li>
				</ul>
			</header>
			<main>
				<Outlet />
			</main>
			<footer></footer>
		</div>
	);
}

export default RootLayout;
