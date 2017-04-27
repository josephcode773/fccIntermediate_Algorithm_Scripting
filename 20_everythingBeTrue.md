<h2>Everything Be True</h2>

https://www.freecodecamp.com/challenges/everything-be-true

Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

<h3>Problem:</h3>
```javascript

function truthCheck(collection, pre) {
  // Is everyone being true?
  return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

```

<h3>Solution:</h3>
```javascript

function truthCheck(collection, pre) {
	return collection.every( (groupie) => groupie[pre] );
}

truthCheck([{'user': 'Tinky-Winky'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
```
