/*
* Task 1: Initial Commit
* */

// ORIGINAL PROBLEM:
// function fearNotLetter(str) {
//     return str;
// }
//
// fearNotLetter("abce");


function fearNotLetter(str) {
	for (let i = 0; i < str.length; i++) {
		str.charCodeAt(i);

		if (str.charCodeAt(i)) {
			var j = arr[i];
			arr2.push(dnaPairs[j]);
		}
	}

	return str;
}

fearNotLetter('abce');