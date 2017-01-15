/*
* Task 3: Add all Primes...
* */

function sumPrimes(num) {
	let numArray = [];
	for (let j = 2; j <= num; j++) {
		numArray.push(j);
	}
	numArray.forEach(function(element) {
		var squElement = Math.round(Math.sqrt(element));
		if (element > 2 && element % squElement === 0) {
			numArray.splice(numArray.indexOf(element), 1);
		}
	});
	// numArray.forEach(function(element) {
	// 	if (element > 3 && element % 3 === 0) {
	// 		numArray.splice(numArray.indexOf(element), 1);
	// 	}
	// });
	// numArray.forEach(function(element) {
	// 	if (element > 5 && element % 5 === 0) {
	// 		numArray.splice(numArray.indexOf(element), 1);
	// 	}
	// });
	// numArray.forEach(function(element) {
	// 	if (element > 7 && element % 7 === 0) {
	// 		numArray.splice(numArray.indexOf(element), 1);
	// 	}
	// });	
	function addEmUp(a, b) {
		return a + b;
	}
	let numArray2 = numArray.reduce(addEmUp,0);
	console.log(numArray);
	//return num;
}

sumPrimes(127);
