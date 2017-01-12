/*
* Final, Submitted Version
* */

function sumFibs(num) {
	let arr = [1, 1, 3, 5];
	for (var i = 0; i < num; i++) {
		arr[i + 2] = arr[i + 1] + arr[i];
	}
	function lessThanNum(value) {
		return value <= num;
	}
	function oddNumbers(params) {
		return params % 2 == 1;
	}
	function addEmUp(a, b) {
		return a + b;
	}
	var filtered = arr.filter(lessThanNum).filter(oddNumbers).reduce(addEmUp, 0);
	return filtered;
}

sumFibs(75025);