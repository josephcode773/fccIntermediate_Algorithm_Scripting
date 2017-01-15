/*
* Task 1: Make Array of Odd Numbers
* */

function sumPrimes(num) {
	let numArray = [];
	for (let j = 2; j <= num; j++) {
	    numArray.push(j);
	}
    function oddNumbers(params) {
        return params % 2 == 1;
    }
    let numArray2 = numArray.filter(oddNumbers);
	numArray2.unshift(2);
	let yaya = Math.sqrt(num);
    for (var i = 2; i <= yaya; i++) {
        var element = num % i;
        console.log(element);
        if (element === 0) {
            console.log("This is NOT prime");
            break;
        }
    }
	console.log(numArray2);
    //return num;
}

sumPrimes(17);
