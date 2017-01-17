<h2>Sum All Primes</h2>

https://www.freecodecamp.com/challenges/sum-all-primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

- For Loops
- Array.prototype.push()

<h3>Problem:</h3>
```javascript
function sumPrimes(num) {
  return num;
}

sumPrimes(10);

```

<h3>Solution:</h3>
```javascript
function sumPrimes(num) {
	const numArray = [];
	for (let j = 2; j <= num; j++) {
		numArray.push(j);
	}
	function isPrime(element) {
		let start = 2;
		while (start <= Math.sqrt(element)) {
			if (element % start++ < 1) {
				return false;
			}
		}
		return element > 1;
	}
	const jojo = numArray.filter(isPrime);
	function addEmUp(a, b) {
		return a + b;
	}
	const numArray2 = jojo.reduce(addEmUp, 0);
	return numArray2;
}


sumPrimes(10);
```
