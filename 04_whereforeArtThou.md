<h3>Wherefore art thou</h3>

https://www.freecodecamp.com/challenges/wherefore-art-thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
- Global Object
- Object.prototype.hasOwnProperty()
- Object.keys()


<h2>Problem:</h2>
```javascript
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
```

<h2>Solution:</h2>
```javascript
function whatIsInAName(collection, source) {
    // What's in a name?
	//var arr = [];
    // Only change code below this line
	var arr = collection.filter(function (item) {
		for(let i in source) {
			if(source[i] != item[i]) {
				return false;
			}
		}
		return true;
	});
    // Only change code above this line
	return arr;
}

whatIsInAName([{ 'a': 1, 'b': 2 }, { 'a': 1 }, { 'a': 1, 'b': 2, 'c': 2 }], { 'a': 1, 'b': 2 });
//should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]
```
