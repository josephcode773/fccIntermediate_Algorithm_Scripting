
/*
Task 4: Merge both 'vowel' and 'consonant' for-loops. Make both play nice.
*/

/* ORIGINAL PROBLEM:
function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");
*/

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


	// for (let i = 0; i < str.length; i++) {
	// 	if (str.indexOf(vowel[i]) !== -1) {
	// 		pos=str.indexOf(vowel[i]);
	// 	}
	// }
	// let newStr = str.split('');
	// let connie = newStr.splice(0,pos[0]);
	// str = newStr.join('') + connie.join('') + 'ay';



	//return str;
	console.log(stringy);
}

translatePigLatin('california'); //should return "ove.gl+ay"