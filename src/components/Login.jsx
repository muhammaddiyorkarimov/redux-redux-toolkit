import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UiInput from "./../ui/UiInput";
import {
	siginUserFailure,
	siginUserStart,
	siginUserSuccess,
} from "../slice/auth";
import AuthService from "../service/auth";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const { isLoading } = useSelector((state) => state.auth);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(siginUserStart());
		const user = { email, password }
		try {
			const response = await AuthService.userLogin(user)
			console.log(response);
			dispatch(siginUserSuccess(response.user));
		} catch (error) {
			dispatch(siginUserFailure(error.response.data.errors));
		}
	};

	return (
		<div className="login-wrapper">
			<style>
				{`
				.login-wrapper {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 80vh;
				}
			`}
			</style>
			<form
				onSubmit={handleSubmit}
				style={{
					width: "400px",
					display: "flex",
					flexDirection: "column",
					gap: "20px",
				}}
			>
				<h1 className="h3 mb-3 fw-normal">Login</h1>
				<UiInput
					label="Email Adress"
					type="text"
					state={email}
					setState={setEmail}
				/>
				<UiInput
					label="Password"
					type="password"
					state={password}
					setState={setPassword}
				/>
				<button
					className="btn btn-primary w-100 py-2"
					type="submit"
					disabled={isLoading}
				>
					{isLoading ? "Yuklanmoqda..." : "Login"}
				</button>
			</form>
		</div>
	);
}

export default Login;
