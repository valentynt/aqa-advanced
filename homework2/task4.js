class Api {
	static async fetchTodo() {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/todos/1'
		);
		return response.json();
	}

	static async fetchUser() {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/users/1'
		);
		return response.json();
	}
}

class Application {
	static async fetchData() {
		try {
			const todo =
				await Api.fetchTodo();
			const user =
				await Api.fetchUser();
			console.log(todo, user);
		} catch (error) {
			console.log('Error:', error);
		}
	}
}

Application.fetchData();
