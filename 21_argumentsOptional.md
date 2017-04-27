<h2>Arguments Optional</h2>

https://www.freecodecamp.com/challenges/arguments-optional

Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

- Closures
- Arguments object

<h3>Problem:</h3>
```javascript

function addTogether() {
  return false;
}

addTogether(2,3);

```

<h3>Solution:</h3>
```javascript
function steamrollArray (arr) {
  return arr.reduce(
    (acc, val) => acc.concat(
        Array.isArray(val) ? steamrollArray(val) : val
    ), []
);}

steamrollArray([1, {}, [3, [[4]]]]);
```
