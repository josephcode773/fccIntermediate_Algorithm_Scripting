function binaryAgent(str) {

	/*
	//Semi-Declarative Solution:
	let arr = str.split(' ');
	let arr2 = arr.map(function (curVal) {
		return String.fromCharCode(parseInt(curVal, 2));
	});
	return arr2.join('');
	*/

	//Refactored Functional Javascript Solution:
	return str.split(' ').map( (curVal) => String.fromCharCode(parseInt(curVal, 2)) ).join('');
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');
