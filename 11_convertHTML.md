<h2>Convert HTML</h2>

https://www.freecodecamp.com/challenges/convert-html-entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

- RegExp
- HTML Entities
- String.prototype.replace()

<h3>Problem:</h3>
```javascript

function convertHTML(str) {
  // &colon;&rpar;
  return str;
}

convertHTML("Dolce & Gabbana");

```

<h3>Solution:</h3>
```javascript
function convertHTML(str) {
	return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
```
