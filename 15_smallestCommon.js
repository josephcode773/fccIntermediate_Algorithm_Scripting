/**
 * Plan of Action:
 * - convert arr to 2 seperate arrays of multiples of value
 * - test if locate arr1[0](then arr1[2], etc.) in arr2 exist
 * - if true, then place in new array 
 * - test if locate arr2 values are in arr3...
 */

function smallestCommons(arr) {
	
	let puff1 = arr[0];
	let puffArray = [];
	for (let i = 0; i < 100; i+=puff1) {
		puffArray.push(i);
	}

	let puff2 = arr[1];
	let puffArray2 = [];
	for (let i = 0; i < 100; i+=puff2) {
		puffArray2.push(i);
	}

	// let holder = [];

	// function multiplesOf(params) {
	// 	for (var i = 0; i < 100; i = i + params) {
	// 		var element = array[i];
			
	// 	}
	// }
	//return arr;
}


smallestCommons([1,5]);
