/*
* Final, Submitted Version.
* */

function uniteUnique(arr) {
    let nuArr = arguments[0];
    for (let x = 1; x < arguments.length; x++) {
        for (let i = 0; i < arguments[x].length; i++) {
            if (arr.includes(arguments[x][i]) === false) {
                nuArr.push(arguments[x][i]);
            }
        }
    }
    return nuArr;
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);