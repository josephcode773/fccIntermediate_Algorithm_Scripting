/**
 * Plan of Action:
 * - convert arr to 2 seperate arrays of multiples of value
 * - test if locate arr1[0](then arr1[2], etc.) in arr2 exist
 * - if true, then place in new array 
 * - test if locate arr2 values are in arr3...
 */

function smallestCommons(arr) {
	var arr = [5,4,3,2,1]
	var holder = [];

	let puff0 = arr[0];
	let puff0Array = [];
	for (let i = puff0; i < 100000; i+=puff0) {
		puff0Array.push(i);
	}

	let puff1 = arr[1];
	let puff1Array = [];
	for (let i = puff1; i < 100000; i+=puff1) {
		puff1Array.push(i);
	}

	let puff2 = arr[2];
	let puff2Array = [];
	for (let i = puff2; i < 100000; i+=puff2) {
		puff2Array.push(i);
	}

	let puff3 = arr[3];
	let puff3Array = [];
	for (let i = puff3; i < 100000; i+=puff3) {
		puff3Array.push(i);
	}

	let puff4 = arr[4];
	let puff4Array = [];
	for (let i = puff4; i < 100000; i+=puff4) {
		puff4Array.push(i);
	}

	holder = puff1Array.filter(function lookItUp(element) {
		for (var i = 0; i < puff0Array.length; i++) {
			return puff0Array[i] === element
			
		}
		
	});

	// let holder = [];
	// arr.find(callback[, thisArg])
	//var new_array = arr.filter(callback[, thisArg])
	// function multiplesOf(params) {
	// 	for (var i = 0; i < 100; i = i + params) {
	// 		var element = array[i];
			
	// 	}
	// }
	//return arr;
	console.log(holder);
}


smallestCommons([1,5]);
