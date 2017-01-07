
/*
Task 3: Splice with "pos" index number, in sorted array, and rearrange "str".
*/

/* ORIGINAL PROBLEM:
function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");
*/

function translatePigLatin(str) {
	const vowel = ['a', 'e', 'i', 'o', 'u'];
	let pos = [];
	// for (let x=0; x<vowel.length; x++) {
	// 	if (str.charAt() === vowel[x]) {
	// 		str = str + 'way';
	// 	}
	for (let i = 0; i < str.length; i++) {
		if (str.indexOf(vowel[i]) !== -1) {
			pos.push(str.indexOf(vowel[i]));
		}
	}
	pos.sort(function(a, b){return a-b});
	let newStr = str.split('');
	let connie = newStr.splice(0,pos[0]);
	str = newStr.join('') + connie.join('') + 'ay';


	debugger;
	// for (let i = 0; i < str.length; i++) {
	// 	if (str.indexOf(vowel[i]) !== -1) {
	// 		pos=str.indexOf(vowel[i]);
	// 	}
	// }
	// let newStr = str.split('');
	// let connie = newStr.splice(0,pos[0]);
	// str = newStr.join('') + connie.join('') + 'ay';



	//return str;
	console.log(str);
}

translatePigLatin('glove'); //should return "ove.gl+ay"
