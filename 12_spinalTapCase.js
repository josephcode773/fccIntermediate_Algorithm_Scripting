/*
* Task 3: Add toLowerCase to end of 'str'
* */

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

	return str =  str.replace(/ /g, '-').replace(/_/g, '-').replace(/([a-z])([A-Z])/g,'$1' + '-' + '$2').toLowerCase();
}

spinalCase('AllThe-small Things');