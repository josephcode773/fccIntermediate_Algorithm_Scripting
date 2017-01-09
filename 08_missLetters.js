/*
* Task 1: Find the missing letter in the passed letter range and return it.
* */

// ORIGINAL PROBLEM:
// function fearNotLetter(str) {
//     return str;
// }
//
// fearNotLetter("abce");


function fearNotLetter(str) {
	for (let i = 0; i < str.length; i++) {
		if (str.charCodeAt(i)+1 !== str.charCodeAt(i+1)) {
			var missingCharCode = str.charCodeAt(i+1)-1;
			str = String.fromCharCode(missingCharCode);
		}
	}

	console.log(str);
	//return str;
}

fearNotLetter('abce');