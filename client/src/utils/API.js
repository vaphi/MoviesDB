export default {
	getMessage: token => {
		return fetch('/api/message', {
			headers: {
				"authorization": `Bearer ${token}`
			},
		});
	}
};