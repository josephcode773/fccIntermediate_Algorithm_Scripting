function findElement(arr, func) {
    var nuArr = arr.filter(func,0);
    var num = nuArr[0];
    return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
