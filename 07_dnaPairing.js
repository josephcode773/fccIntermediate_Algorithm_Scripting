/*
Task 3: Change to dnaPairs, change for if loop.
 */

function pairElement(str) {
	let arr = str.split('');
	let dnaPairs = {
		A: ['A', 'T'],
		T: ['T', 'A'],
		C: ['C', 'G'],
		G: ['G', 'C']
	};
	let arr2 = [];
    // dnaPairs.hasOwnProperty(arr[i])
    // dnaPairs.hasOwnProperty(A)
    //arr[0] == dnaPairs[]
	debugger;
	for (let i = 0; i < arr.length; i++) {
        //let i = value that 0 index represents
//		j = arr[i];
		if (dnaPairs.hasOwnProperty(arr[i] )) {
			var j = arr[i];
			arr2.push(dnaPairs[j]);
		}

	}
    // let myarray=new Array(5);

    // for (let i=0; i <5; i++)

    // 	myarray[i]=new Array(2);


    //return str;

	console.log(arr2);

}


pairElement('ATCGA');

