/*
* Task 2: If all in range, return undefined.
* */

// ORIGINAL PROBLEM:
// function fearNotLetter(str) {
//     return str;
// }
//
// fearNotLetter("abce");


function fearNotLetter(str) {
	var missingCharCode;
	for (let i = 0; i < str.length; i++) {
		if (str.charCodeAt(i)+1 !== str.charCodeAt(i+1)) {
			missingCharCode = str.charCodeAt(i+1)-1;
			str = String.fromCharCode(missingCharCode);
		} 
	}
	if (isNaN(missingCharCode)) {
		str = undefined;
	}
	
	//console.log(str);
	return str;
}

fearNotLetter('bcd');