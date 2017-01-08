<h2>DNA Pairing</h2>

https://www.freecodecamp.com/challenges/dna-pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

- Array.prototype.push()
- String.prototype.split()

<h3>Problem:</h3>
```javascript

function pairElement(str) {
  return str;
}

pairElement("GCG");

```

<h3>Solution:</h3>
```javascript
function pairElement(str) {
	let arr = str.split('');
	let dnaPairs = {
		A: ['A', 'T'],
		T: ['T', 'A'],
		C: ['C', 'G'],
		G: ['G', 'C']
	};
	let arr2 = [];
 	for (let i = 0; i < arr.length; i++) {
 		if (dnaPairs.hasOwnProperty(arr[i])) {
			var j = arr[i];
			arr2.push(dnaPairs[j]);
		}
	}
	return arr2;
}


pairElement('ATCGA');
```
