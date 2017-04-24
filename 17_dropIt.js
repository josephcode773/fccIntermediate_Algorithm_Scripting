function dropElements(arr, func) {
	let arr2 = arr.map(func);
	let arr3 = arr2.findIndex(function (element) {
		return element === true;
	});
	let arr4 = [];
	if (arr3 !== -1) {
		arr4 = arr.slice(arr3);
	}
	return arr4;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
