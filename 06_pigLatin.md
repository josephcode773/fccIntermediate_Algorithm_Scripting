<h2>Pig Latin</h2>

https://www.freecodecamp.com/challenges/pig-latin

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

- Array.prototype.indexOf()
- Array.prototype.push()
- Array.prototype.join()
- String.prototype.substr()
- String.prototype.split()

<h3>Problem:</h3>
```javascript
function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");
```

<h3>Solution:</h3>
```javascript

function translatePigLatin(str) {
	let stringy = str;
	const vowel = ['a', 'e', 'i', 'o', 'u'];
	let pos = [];

	let vowels = function () {
		for (let x=0; x<vowel.length; x++) {
			if (stringy.charAt() === vowel[x]) {
				stringy = stringy + 'way';
			}
		}
	};

	let consonants = function () {
		for (let j = 0; j < stringy.length; j++) {
			if (stringy.indexOf(vowel[j]) !== -1) {
				pos.push(stringy.indexOf(vowel[j]));
			}
		}
		pos.sort(function(a, b){return a-b});
		let newStr = stringy.split('');
		let connie = newStr.splice(0,pos[0]);
		stringy = newStr.join('') + connie.join('') + 'ay';
	};

	vowels();
	if (stringy == str) {consonants();}

	return stringy;
}

translatePigLatin('california');
```
