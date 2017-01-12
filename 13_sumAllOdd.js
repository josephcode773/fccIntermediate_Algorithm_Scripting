/*
* Task 2: filter into array2 all odd numbers from array1
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
	//return num;
	console.log(arr);

}

sumFibs(10);