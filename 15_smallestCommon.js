/**
 * Final, Submitted Version
 */


function smallestCommons(arr) {
	arr.sort(function (a,b) {
		return a - b;
	});
	
	let fullArr = [];
	for (let i = arr[0]; i <= arr[1]; i++) {
		fullArr.push(i);	
	}
	arr = fullArr;
	
	var n = arr.length, numOne = Math.abs(arr[0]);
	for (var i = 1; i < arr.length; i++) { 
		var numTwo = Math.abs(arr[i]), origNumOne = numOne;
		while (numOne && numTwo){ numOne > numTwo ? numOne %= numTwo : numTwo %= numOne; }
		numOne = Math.abs(origNumOne*arr[i])/(numOne+numTwo);
	}
	return numOne;
}

smallestCommons([23,18]);