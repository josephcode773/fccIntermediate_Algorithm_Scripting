/*
* Task 2: Add toLowerCase to 'str'
* */

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  str =  str.toLowerCase().replace(/ /g, '-').replace(/_/g, '-').replace(/([a-z])([A-Z])/g,'$1' + '-' + '$2');
	//console.log(holder.toLowerCase());
  console.log(str);
  //return str;
}

spinalCase('This Is Spinal Tap');