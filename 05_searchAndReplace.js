/*
Task 1 - Make first letter in "after" string Uppercase, if first letter in "before" is Uppercase.
 */

/* ORIGINAL CODE
function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
*/

function myReplace(str, before, after) {
	let wordOne = before;
	let wordTwo = after;
	let first = wordOne.charAt(0);
	if (first === first.toUpperCase()) {
	    wordTwo = wordTwo.charAt(0).toUpperCase() + wordTwo.slice(1);
	}

	//return str;
	console.log(wordTwo);
}

myReplace('His name is Tom', 'Tom', 'john');
