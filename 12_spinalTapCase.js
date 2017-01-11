/*
* Task 1: Remove Spaces and add hyphen
* */

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

	// let tapTap = str.replace(/ /g, '-').replace(/_/g, '-');
	// console.log(tapTap);
	
	// function upperToHyphenLower(match) {
	//   return '-' + match.toLowerCase();
	// }

	// function lowerHyphenUpper(match) {
	// 	return '-' + match.toLowerCase();
	// }
  // var holder =  str.replace(/[A-Z]/g, upperToHyphenLower);
  //var holder =  str.replace(/([a-z])([A-Z])/g,'$1' + '-' + '$2');
	var holder =  str.replace(/ /g, '-').replace(/_/g, '-').replace(/([a-z])([A-Z])/g,'$1' + '-' + '$2');
  
	console.log(holder);
  //.replace(/ /g,"_")
  //return str;
}

spinalCase('This Is Spinal Tap');