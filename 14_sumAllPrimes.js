/*
* Task 2: Test each number for primeness
* */

function sumPrimes(num) {
	let numArray = [];
	for (let j = 2; j <= num; j++) {
		numArray.push(j);
	}
	numArray.forEach(function(element) {
		if (element > 2 && element % 2 === 0) {
			numArray.splice(numArray.indexOf(element), 1);
		}
	});
	numArray.forEach(function(element) {
		if (element > 3 && element % 3 === 0) {
			numArray.splice(numArray.indexOf(element), 1);
		}
	});
	numArray.forEach(function(element) {
		if (element > 5 && element % 5 === 0) {
			numArray.splice(numArray.indexOf(element), 1);
		}
	});
	numArray.forEach(function(element) {
		if (element > 7 && element % 7 === 0) {
			numArray.splice(numArray.indexOf(element), 1);
		}
	});	
		// if (element % 3 === 0) {
		// 	numArray.splice(numArray.indexOf(element), 1);
		// }
		// if (element % 5 === 0) {
		// 	numArray.splice(numArray.indexOf(element), 1);
		// }
		// if (element % 7 === 0) {
		// 	numArray.splice(numArray.indexOf(element), 1);
		// }
	

	// function oddNumbers(params) {
	// 	return params % 2 == 1;
	// }
	// let numArray2 = numArray.filter(oddNumbers);
	// numArray2.unshift(2);

	// for (var k = 0; k < numArray2.length; k++) {
	// 	var holder = numArray2[k];
	// 	var yaya = Math.sqrt(holder);
	// 	for (var i = 2; i <= yaya; i++) {
	// 		var element = holder % i;
	// 		//console.log(element);
	// 		if (element === 0) {
	// 			//console.log("This is NOT prime");
	// 			numArray2.splice(numArray2.indexOf(holder), 1);
	// 			//break;
	// 		}
	// 	}
	// }

	// numArray2.forEach(function (params) {
	// 	let yaya = Math.sqrt(params);
	// 	for (var i = 2; i <= yaya; i++) {
	// 		var element = params % i;
	// 		//console.log(element);
	// 		if (element === 0) {
	// 			//console.log("This is NOT prime");
	// 			numArray2.splice(numArray.indexOf(params), 1);
	// 			break;
	// 		}
	// 	}
	// });

	// let yaya = Math.sqrt(num);
	// for (var i = 2; i <= yaya; i++) {
	// 	var element = num % i;
	// 	console.log(element);
	// 	if (element === 0) {
	// 		console.log("This is NOT prime");
	// 		break;
	// 	}
	// }

	console.log(numArray);
	//return num;
}

sumPrimes(89);
