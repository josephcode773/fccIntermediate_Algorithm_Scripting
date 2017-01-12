/*
* Task 3: add numbers in array
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
	var filtered = arr.filter(lessThanNum).filter(oddNumbers);
	var total = filtered.reduce(function (a, b) {
		return a + b;
	}, 0);
	//return num;
	console.log(total);

}

sumFibs(1000);