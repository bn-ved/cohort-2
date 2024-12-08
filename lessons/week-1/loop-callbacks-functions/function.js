function findSum(n) {
	let ans = 0;
	for (let i = 0; i <= n; i++) {
		ans += i;
	}
	return ans;
}

console.log(findSum(100));

// Callback Functions
function square(n) {
	return n * n;
}

function cube(n) {
	return n * n * n;
}

function sumOfSomething(a, b, func) {
	const first = func(a);
	const second = func(b);

	return first + second;
}

console.log(sumOfSomething(2, 2, cube));
