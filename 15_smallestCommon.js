/**
 * Plan of Action:
 */


function smallestCommons(arr) {
	// Formula to sort from Smallest to Largest Number
	arr.sort(function (a,b) {
		return a - b;
	});
	// Formula to get all values between Smallest and Largest Numbers
	let fullArr = [];
	for (let i = arr[0]; i <= arr[1]; i++) {
		fullArr.push(i);	
	}
	arr = fullArr;
	// Formula to get LCD
	var n = arr.length, numOne = Math.abs(arr[0]);
	for (var i = 1; i < arr.length; i++) { 
		var numTwo = Math.abs(arr[i]), origNumOne = numOne;
		while (numOne && numTwo){ numOne > numTwo ? numOne %= numTwo : numTwo %= numOne; }
		numOne = Math.abs(origNumOne*arr[i])/(numOne+numTwo);
	}
	return numOne;
}

smallestCommons([23,18]);