<h2>Smallest Common Multiple</h2>

https://www.freecodecamp.com/challenges/smallest-common-multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

- Smallest Common Multiple

<h3>Problem:</h3>
```javascript
function smallestCommons(arr) {
  return arr;
}


smallestCommons([1,5]);


```

<h3>Solution:</h3>
```javascript
function smallestCommons(arr) {
	arr.sort(function (a,b) {
		return a - b;
	});
	
	let fullArr = [];
	for (let i = arr[0]; i <= arr[1]; i++) {
		fullArr.push(i);	
	}
	arr = fullArr;
	
	var n = arr.length, numOne = Math.abs(arr[0]);
	for (var i = 1; i < arr.length; i++) { 
		var numTwo = Math.abs(arr[i]), origNumOne = numOne;
		while (numOne && numTwo){ numOne > numTwo ? numOne %= numTwo : numTwo %= numOne; }
		numOne = Math.abs(origNumOne*arr[i])/(numOne+numTwo);
	}
	return numOne;
}

smallestCommons([23,18]);
```
