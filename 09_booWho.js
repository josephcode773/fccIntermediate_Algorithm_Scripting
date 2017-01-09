/*
* Task 1: Check if a value is classified as a boolean primitive.
* */

function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
	if (bool === true || bool === false) {
	    bool = true;
	} else {
	    bool = false;
	}

	//bool = bool <= 0;
	//return bool;
	console.log(bool);
}

booWho(true);