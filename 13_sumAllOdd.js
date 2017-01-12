/*
* Task 1: Made arr of fibonacci
* */

function sumFibs(num) {
	let nummy = '';
	let arr = [1, 1, 3, 5];
	for (var i = 0; i < num; i++) {
		arr[i + 2] = arr[i + 1] + arr[i];
	}
	function lessThanNum(value) {
		return value <= num;
	}
	
	var filtered = arr.filter(lessThanNum);
	//return num;
	console.log(arr);

}

sumFibs(10);