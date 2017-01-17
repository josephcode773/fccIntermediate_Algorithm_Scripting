/*
* Final, Submitted Version
* */

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