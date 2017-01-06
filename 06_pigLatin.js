
/*
Task 2: Find index number of 1st vowel in str, if not in 0 pos.
*/

/* ORIGINAL PROBLEM:
function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");
*/

function translatePigLatin(str) {
	let vowel = ['a', 'e', 'i', 'o', 'u'];
	let pos;
	for (let x = 0; x < vowel.length; x++) {
		if (str.charAt() === vowel[x]) {
			str = str + 'way';
		}
	}
	for (let j = 0; j < str.length; j++) {
		if (str.indexOf(vowel[j]) !== -1) {
			pos=str.indexOf(vowel[j]);
		}
	}
	//return str;
	console.log(str);
}

translatePigLatin('glove'); //should return "ove.gl+ay"
