
function truthCheck(collection, pre) {
	return collection.every( (groupie) => groupie[pre] );
}

truthCheck([{'user': 'Tinky-Winky'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');