const axios = require('axios');

const baseUrl =
	'https://jsonplaceholder.typicode.com';

async function getPosts() {
	const response = await axios.get(
		`${baseUrl}/posts`
	);
	if (response.status === 200) {
		console.log('GET /posts: Success');
	}
}

async function getPostById(id) {
	const response = await axios.get(
		`${baseUrl}/posts/${id}`
	);
	if (
		response.status === 200 &&
		response.data.id === id
	) {
		console.log(
			`GET /posts/${id}: Success`
		);
		// Additional validation can be performed here
	}
}

// POST Requests
async function createPost() {
	const postData = {
		title: 'foo',
		body: 'bar',
		userId: 1,
	};
	const response = await axios.post(
		`${baseUrl}/posts`,
		postData
	);
	if (
		response.status === 201 &&
		response.data.id
	) {
		console.log('POST /posts: Success');
		// Additional validation can be performed here
	}
}

async function updatePost(id) {
	const updateData = {
		id: id,
		title: 'updated title',
		body: 'updated body',
		userId: 1,
	};
	const response = await axios.put(
		`${baseUrl}/posts/${id}`,
		updateData
	);
	if (
		response.status === 200 &&
		response.data.title ===
			'updated title'
	) {
		console.log(
			`PUT /posts/${id}: Success`
		);
		// Additional validation can be performed here
	}
}

async function patchPost(id) {
	const patchData = {
		title: 'new title',
	};
	const response = await axios.patch(
		`${baseUrl}/posts/${id}`,
		patchData
	);
	if (
		response.status === 200 &&
		response.data.title === 'new title'
	) {
		console.log(
			`PATCH /posts/${id}: Success`
		);
		// Additional validation can be performed here
	}
}

// Interceptors for logging
axios.interceptors.request.use(
	(request) => {
		console.log(
			'Starting Request',
			request
		);
		return request;
	}
);

axios.interceptors.response.use(
	(response) => {
		console.log('Response:', response);
		return response;
	}
);

// Running tests
async function runTests() {
	await getPosts();
	await getPostById(1);
	await createPost();
	await updatePost(1);
	await patchPost(1);
}

runTests();
