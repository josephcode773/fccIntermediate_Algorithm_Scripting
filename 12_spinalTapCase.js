/*
* Final, Submitted Version
* */

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

	return str =  str.replace(/ /g, '-').replace(/_/g, '-').replace(/([a-z])([A-Z])/g,'$1' + '-' + '$2').toLowerCase();
}

spinalCase('Teletubbies say Eh-oh');