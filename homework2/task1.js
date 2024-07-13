function printAfterDelay(
	text,
	milliseconds
) {
	setTimeout(() => {
		console.log(text);
	}, milliseconds);
}

printAfterDelay('Hello, world!', 2000);
