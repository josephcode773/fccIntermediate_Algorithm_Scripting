<h2>Missing letters</h2>

https://www.freecodecamp.com/challenges/missing-letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

- String.prototype.charCodeAt()
- String.fromCharCode()

<h3>Problem:</h3>
```javascript
function fearNotLetter(str) {
     return str;
 }
 
 fearNotLetter("abce");
```

<h3>Solution:</h3>
```javascript
function fearNotLetter(str) {
	var missingCharCode;
	for (let i = 0; i < str.length; i++) {
		if (str.charCodeAt(i)+1 !== str.charCodeAt(i+1)) {
			missingCharCode = str.charCodeAt(i+1)-1;
			str = String.fromCharCode(missingCharCode);
		} 
	}
	if (isNaN(missingCharCode)) {
		str = undefined;
	}
	
	return str;
}

fearNotLetter('bcd');
```
