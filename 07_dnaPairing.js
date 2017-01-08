
function pairElement(str) {
	let arr = str.split('');
	let dnaPairs = {
		A: ['A', 'T'],
		T: ['T', 'A'],
		C: ['C', 'G'],
		G: ['G', 'C']
	};
	let arr2 = [];
 	for (let i = 0; i < arr.length; i++) {
 		if (dnaPairs.hasOwnProperty(arr[i])) {
			var j = arr[i];
			arr2.push(dnaPairs[j]);
		}
	}
	return arr2;
}


pairElement('ATCGA');

