
function truthCheck(collection, pre) {
	var holder = pre;
	var timbo = collection.map(function (winky) {
		return Boolean(winky.sex);
	});
	return (timbo.includes(false)) ? false : true;
	//console.log((timbo.includes(false)) ? false : true);
}

truthCheck([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');


