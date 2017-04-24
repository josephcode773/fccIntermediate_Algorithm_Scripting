<h2>Steamroller</h2>

https://www.freecodecamp.com/challenges/steamroller

Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

- Array.isArray()

<h3>Problem:</h3>
```javascript
function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
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
