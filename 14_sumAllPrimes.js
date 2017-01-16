/*
* Task 4: Solution Test
* */

function sumPrimes(num) {
	let numArray = [];
	for (let j = 2; j <= num; j++) {
		numArray.push(j);
	}
	function isPrime(element, index, array) {
		var start = 2;
		while (start <= Math.sqrt(element)) {
			if (element % start++ < 1) {
				return false;
			}
		}
		return element > 1;
	}
	let jojo = numArray.filter(isPrime);
	function addEmUp(a, b) {
		return a + b;
	}
	let numArray2 = jojo.reduce(addEmUp, 0);
	return numArray2;
}


sumPrimes(10);

