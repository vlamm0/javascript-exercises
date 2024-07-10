const sumAll = function(x,y) {
    // both numbers
    if ((typeof x != ("number" || "bigint")) || (typeof y != ("number" || "bigint"))) {
        return 'ERROR';
    }
    // negative 
    if (x < 0 || y < 0) {return 'ERROR'}
    //find smaller
    var sum = 0;
    var small;
    var big;
    if (x>y) {
        big = x;
        small = y;
    }
    else {
        big = y;
        small = x;
    }
    for (let i = small; i <= big; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
