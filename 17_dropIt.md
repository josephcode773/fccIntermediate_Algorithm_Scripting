<h2>Drop It</h2>

https://www.freecodecamp.com/challenges/drop-it

Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

- Arguments object
- Array.prototype.shift()
- Array.prototype.slice()

<h3>Problem:</h3>
```javascript
function dropElements(arr, func) {
  // Drop them elements.
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
```

<h3>Solution:</h3>
```javascript
function dropElements(arr, func) {
  // Drop them elements.
  let arr2 = arr.map(func);
  
  let arr3 = arr2.findIndex(function (element) {
  	return element == true;
	});
  
  let arr4 = [];
  if (arr3 !== -1) {
  	arr4 = arr.slice(arr3);
  };
  return arr4;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
```
