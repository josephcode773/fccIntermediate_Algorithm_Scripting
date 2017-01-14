/*
13_sumAllOdd.js
---------------

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are [1, 1, 3, 5].

sumFibs(10) should return 10. [1, 1, 3, 5]
sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.
----------------------------------
x % 2 == 0 -- Even
x % 2 == 1 -- Odd

PLAN OF ACTION:
+ make array1 of fibonacci sequence < or = to num.
+ filter into array2 all odd numbers from array1.
+ add all numbers in array2 together for solution.

*/
//
// var p = Promise.reject( "Oops" );
//
// p.then(
//     function fulfilled(){
//         // never gets here
//     },
//     function rejected(err){
//         console.log( err ); // "Oops"
//     }
// );

/*
 14_sumAllPrimes.js
 ---------------

sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.

 When a number has more than two factors it is called a composite number.
 Here are the first few prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, etc.

 When using the calculator to determine prime, begin by dividing it by 2 or 3 first.
 Try 2: Any number ending in 2 is an even number and it will be divisible by 2, therefore it is not prime.
 nummy % 2 = 0; even
 nummy % 2 = 1; odd*
 Try 3. Take the number, and add the digits up, when those digits are divisible by 3, the number is not prime.

*/

//Test 23+, 24-, 25- for Prime or Not Prime. 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, etc

let nummy = 10;
let nummyArray = [];
for (var j = 2; j <= nummy; j++) {
	nummyArray.push(j);
}
// function oddNumbers(params) {
// 		return params % 2 == 1;
// }
// let archie = nummyArray.filter(oddNumbers);
// console.log(archie);
console.log(nummyArray);


// if (nummy % 2 === 1) {
//     //console.log("I is ODD!");
//     // var icy = nummy.toString();
//     // var icy2 = Number(icy[0]) + Number(icy[1]); // 11
//     //console.log(icy2 / 2); // any number if yes, 0 if no
// 	var yaya = Math.sqrt(nummy);
// 	var arr = [];
// 	console.log("square root is: " + yaya);
// 	for (var i = 2; i <= yaya; i++) {
// 		var element = nummy % i;
// 		console.log(element);
// 		if (element === 0) {
// 			console.log("This is NOT prime")
// 			break;
// 		}
// 	}
// }

