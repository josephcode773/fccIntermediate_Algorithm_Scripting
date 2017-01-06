
/*
Task 1: Test if each 1st char is vowel, then add "way" to end.
*/

/* ORIGINAL PROBLEM:
function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");
*/


function translatePigLatin(str) {
	let vowel = ['a', 'e', 'i', 'o', 'u'];
	for (let x = 0; x < str.length; x++) {
		if (str.charAt() === vowel[x]) {
			str = str + 'way';
		}
	}
	//return str;
	console.log(str);
}

translatePigLatin('apple');
