class Auth {
	static onAuthChangeCallback = null;

	static login(token) {
		localStorage.setItem('token', token)
		Auth.onAuthChangeCallback(token);
	}

	static logout() {
		localStorage.removeItem('token');
		Auth.onAuthChangeCallback(false);
	}

	static getToken() {
		return localStorage.getItem('token')
	}

	static isAuthenticated() {
		return !!Auth.getToken();
	}

	static onAuthChange(callback) {
		Auth.onAuthChangeCallback = callback;
	}
	
}
export default Auth;