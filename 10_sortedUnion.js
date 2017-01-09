/*
* Task 1: Combine Arrays.
* */

function uniteUnique(arr, arr2, arr3, arr4) {
	let arrHolder = [];
	arrHolder.push(arr);
	arrHolder.push(arr2);
	arrHolder.push(arr3);
	arrHolder.push(arr4);
    //console.log(arrHolder);

	let nuArr = arr;
	//let x = 1;

	for (let x = 1; x < 4; x++) {
		for (let i = 0; i < arguments[x].length; i++) {
			if (arr.includes(arguments[x][i]) === false) {
				nuArr.push(arguments[x][i]);
			}
		}
	}

    // for (let i = 0; i < arguments[x].length; i++) {
    //     if (arr.includes(arguments[x][i]) === false) {
    //         nuArr.push(arguments[x][i]);
    //     }
    // }

    // for (let i = 0; i < arr3.length; i++) {
    //     if (arr.includes(arr3[i]) === false) {
    //         nuArr.push(arr3[i])
    //     }
    // }

	console.log(nuArr);
    //return arr;
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
//should return [1, 3, 2, [5], [4]].