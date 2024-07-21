async function fetchData() {
	try {
		const todoPromise = fetch(
			'https://jsonplaceholder.typicode.com/todos/1'
		).then((response) =>
			response.json()
		);
		const userPromise = fetch(
			'https://jsonplaceholder.typicode.com/users/1'
		).then((response) =>
			response.json()
		);

		const [todo, user] =
			await Promise.all([
				todoPromise,
				userPromise,
			]);
		console.log(todo, user);

		const firstFinished =
			await Promise.race([
				todoPromise,
				userPromise,
			]);
		console.log(
			'First finished:',
			firstFinished
		);
	} catch (error) {
		console.log('Error:', error);
	}
}

fetchData();
