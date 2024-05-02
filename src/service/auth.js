import axios from "./api";

const AuthService = {
	async userRegister(user) {
		const response = await axios.post('/users', {user: user});

		return response
	},
	async userLogin() {
		//  const response = await axiosAPI.post('/users/login');
	},
	async getUser() {
		// const response = await axiosAPI.get('/user');
	}
}

export default AuthService;