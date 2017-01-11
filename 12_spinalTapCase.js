/*
* Task 1: Revmoe Spaces
* */

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  //return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

	let tapTap = str.replace(/ /g, '-').replace(/_/g, '-');
	console.log(tapTap);
	
  //.replace(/ /g,"_")
  //return str;
}

spinalCase('thisIsSpinalTap');