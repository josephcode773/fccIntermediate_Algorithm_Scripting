<h2>Sorted Union</h2>

https://www.freecodecamp.com/challenges/sorted-union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

- Arguments object
- Array.prototype.reduce()

<h3>Problem:</h3>
```javascript
function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

<h3>Solution:</h3>
```javascript
function uniteUnique(arr) {
    let nuArr = arguments[0];
    for (let x = 1; x < arguments.length; x++) {
        for (let i = 0; i < arguments[x].length; i++) {
            if (arr.includes(arguments[x][i]) === false) {
                nuArr.push(arguments[x][i]);
            }
        }
    }
    return nuArr;
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
```
