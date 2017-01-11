<h2>Spinal Tap Case</h2>

https://www.freecodecamp.com/challenges/spinal-tap-case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

- RegExp
- String.prototype.replace()

<h3>Problem:</h3>
```javascript
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str;
}

spinalCase('This Is Spinal Tap');
```

<h3>Solution:</h3>
```javascript
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

	return str =  str.replace(/ /g, '-').replace(/_/g, '-').replace(/([a-z])([A-Z])/g,'$1' + '-' + '$2').toLowerCase();
}

spinalCase('Teletubbies say Eh-oh');
```
