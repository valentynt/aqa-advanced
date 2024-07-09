function fetchTodo() {
	return fetch(
		'https://jsonplaceholder.typicode.com/todos/1'
	).then((response) => response.json());
}

function fetchUser() {
	return fetch(
		'https://jsonplaceholder.typicode.com/users/1'
	).then((response) => response.json());
}

Promise.all([fetchTodo(), fetchUser()])
	.then((results) => {
		const [todo, user] = results;
		console.log(todo, user);
	})
	.catch((error) =>
		console.log('Error:', error)
	);

Promise.race([fetchTodo(), fetchUser()])
	.then((result) => {
		console.log(
			'First finished:',
			result
		);
	})
	.catch((error) =>
		console.log('Error:', error)
	);
