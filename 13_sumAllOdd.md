<h2>Sum All Odd Fibonacci Numbers</h2>

https://www.freecodecamp.com/challenges/sum-all-odd-fibonacci-numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

- Remainder

<h3>Problem:</h3>
```javascript
function sumFibs(num) {
  return num;
}

sumFibs(4);
```

<h3>Solution:</h3>
```javascript
function sumFibs(num) {
	let arr = [1, 1, 3, 5];
	for (var i = 0; i < num; i++) {
		arr[i + 2] = arr[i + 1] + arr[i];
	}
	function lessThanNum(value) {
		return value <= num;
	}
	function oddNumbers(params) {
		return params % 2 == 1;
	}
	function addEmUp(a, b) {
		return a + b;
	}
	var filtered = arr.filter(lessThanNum).filter(oddNumbers).reduce(addEmUp, 0);
	return filtered;
}

sumFibs(75025);
```
