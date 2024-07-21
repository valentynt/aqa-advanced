import axios from '../axiosConfig';

test('Get all posts and expect status code 200', async () => {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/posts'
	);
	expect(response.status).toBe(200);
	expect(
		response.data.length
	).toBeGreaterThan(0);
});

test('Get a single post and expect status code 200', async () => {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/posts/1'
	);
	expect(response.status).toBe(200);
	expect(response.data).toHaveProperty(
		'id',
		1
	);
});

test('Create a new post and expect status code 201', async () => {
	const newPost = {
		title: 'Test Title',
		body: 'Test body',
		userId: 1,
	};
	const response = await axios.post(
		'https://jsonplaceholder.typicode.com/posts',
		newPost
	);
	expect(response.status).toBe(201);
	expect(response.data).toHaveProperty(
		'id'
	);
});

test('Get comments for a post and expect status code 200', async () => {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/posts/1/comments'
	);
	expect(response.status).toBe(200);
	expect(
		response.data.length
	).toBeGreaterThan(0);
	response.data.forEach((comment) => {
		expect(comment).toHaveProperty(
			'postId',
			1
		);
	});
});

test('Create a new comment for a post and expect status code 201', async () => {
	const newComment = {
		postId: 1,
		name: 'Test Commenter',
		email: 'tester@example.com',
		body: 'This is a test comment.',
	};
	const response = await axios.post(
		'https://jsonplaceholder.typicode.com/comments',
		newComment
	);
	expect(response.status).toBe(201);
	expect(response.data).toHaveProperty(
		'id'
	);
});
