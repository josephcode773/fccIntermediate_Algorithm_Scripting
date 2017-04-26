
function truthCheck(collection, pre) {
	//console.log( collection);
	// let arry = collection;
	// console.log(arry);
	// let arry2 = collection[0];
	// Object.keys(arry2).forEach(function (key) {
	// 	let obj = arry2[key];
	// 	// do something with obj
	// });

	// for (oblong of collection) {
	// 	console.log(Boolean(oblong.sex));
	// }
	var timbo = collection.map(function (winky) {
		if (Boolean(winky.sex)) {
			return true
		} else {
			return false;
			//break;
		}
	});
	console.log(timbo)
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


