<h2>Finders Keepers</h2>

https://www.freecodecamp.com/challenges/finders-keepers

FCreate a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

- Array.prototype.filter()


<h3>Problem:</h3>
```javascript
function findElement(arr, func) {
  var num = 0;
  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
```

<h3>Solution:</h3>
```javascript
function findElement(arr, func) {
    var nuArr = arr.filter(func,0);
    var num = nuArr[0];
    return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

```
