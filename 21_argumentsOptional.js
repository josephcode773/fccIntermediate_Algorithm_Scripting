

function addTogether() {
	var arg = [...arguments];
	//debugger;
  /*
   if ( !typeof (arg[0]) === 'number' || !typeof (arg[1]) === 'number' ) {
   return undefined;
   };
   */
	if (arg.length === 1 && typeof (arg[0]) === 'number') {
		return function (x) {
			if (typeof x === 'number') {
				return x + arg[0];
			} else {
				return undefined;
			}
			//(typeof x === 'number') ? x + arg[0] : undefined
			//return x + arg[0]
		}
	};

	if (arg.length > 1 && ( typeof (arg[0]) === 'number' && typeof (arg[1]) === 'number' )) {
		return arg[0] + arg[1]
	};

	return undefined;
}


addTogether(2,3);
