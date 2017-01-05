
function whatIsInAName(collection, source) {
    // What's in a name?
	//var arr = [];
    // Only change code below this line
	const arr = collection.filter(function (item) {
		for(let i in source) {
			if(source[i] != item[i]) {
				return false;
			}
		}
		return true;
	});
    // Only change code above this line
	//return arr;
	console.log(arr);
}

whatIsInAName([{ 'a': 1, 'b': 2 }, { 'a': 1 }, { 'a': 1, 'b': 2, 'c': 2 }], { 'a': 1, 'b': 2 });
//should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]
