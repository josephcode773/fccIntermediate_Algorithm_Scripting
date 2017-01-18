/**
 * Plan of Action:
 * - convert arr to 2 seperate arrays of multiples of value
 * - test if locate arr1[0](then arr1[2], etc.) in arr2 exist
 * - if true, then place in new array 
 * - test if locate arr2 values are in arr3...
 */

// function smallestCommons(arr) {
// 	// var arr = [5,4,3,2,1];
// 	// var holder = [];
//     //
// 	// let puff0 = arr[0];
// 	// let puff0Array = [];
// 	// for (let i = puff0; i < 100000; i+=puff0) {
// 	// 	puff0Array.push(i);
// 	// }
//     //
// 	// let puff1 = arr[1];
// 	// let puff1Array = [];
// 	// for (let i = puff1; i < 100000; i+=puff1) {
// 	// 	puff1Array.push(i);
// 	// }
//     //
// 	// let puff2 = arr[2];
// 	// let puff2Array = [];
// 	// for (let i = puff2; i < 100000; i+=puff2) {
// 	// 	puff2Array.push(i);
// 	// }
//     //
// 	// let puff3 = arr[3];
// 	// let puff3Array = [];
// 	// for (let i = puff3; i < 100000; i+=puff3) {
// 	// 	puff3Array.push(i);
// 	// }
//     //
// 	// let puff4 = arr[4];
// 	// let puff4Array = [];
// 	// for (let i = puff4; i < 100000; i+=puff4) {
// 	// 	puff4Array.push(i);
// 	// }
//
//     // holder = puff1Array.filter(puff0Array);
//
// 	function LCM(A)
//     {
// 		var n = A.length, a = Math.abs(A[0]);
// 		for (var i = 1; i < n; i++)
//         { var b = Math.abs(A[i]), c = a;
// 			while (a && b){ a > b ? a %= b : b %= a; }
// 			a = Math.abs(c*A[i])/(a+b);
// 		}
// 		return a;
// 	}
//
//     /* For example:
//      LCM([-50,25,-45,-18,90,447]) -> 67050
//      */
//
// 	//return arr;
// 	console.log(a);
// }
//
// LCM([1,2,3,4,5]);
// //smallestCommons([1,5]);


function LCM(A) {
	var n = A.length, a = Math.abs(A[0]);
	for (var i = 1; i < n; i++)
    { var b = Math.abs(A[i]), c = a;
		while (a && b){ a > b ? a %= b : b %= a; }
		a = Math.abs(c*A[i])/(a+b);
	}
	return a;
}


//return arr;

LCM([5,4,1,2,3]);