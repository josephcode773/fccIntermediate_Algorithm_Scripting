/*
Task 1: Split 'str', create DNA pair array, create 2d array structure.
 */

function pairElement(str) {
	let arr = str.split('');
	let basedPaired = {
		A: 'T',
		T: 'A',
		C: 'G',
		G: 'C'
	};
	let myarray=new Array(5);
	for (let i=0; i <5; i++)
		myarray[i]=new Array(2);

	//return str;
	console.log(arr);
}

pairElement('GCG');
