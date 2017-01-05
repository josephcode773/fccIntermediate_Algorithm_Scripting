<h3>Search and Replace</h3>

https://www.freecodecamp.com/challenges/search-and-replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

- Array.prototype.splice()
- String.prototype.replace()
- Array.prototype.join()


<h2>Problem:</h2>
```javascript
function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

<h2>Solution:</h2>
```javascript
function myReplace(str, before, after) {
	let wordOne = before;
	let wordTwo = after;
	let first = wordOne.charAt(0);
	if (first === first.toUpperCase()) {
	    wordTwo = wordTwo.charAt(0).toUpperCase() + wordTwo.slice(1);
	}
	str = str.replace(wordOne, wordTwo);

	return str;

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```
