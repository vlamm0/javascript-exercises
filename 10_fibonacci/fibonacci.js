const fibonacci = function(num) {
    // convert str to num
    num = Number(num);

    // deal with zero
    if (num == 0) {return 0};

    // deal with negatives
    if (num < 0) {return "OOPS"}

    let fib = [1,1];
    for (let i = 2; i < num; i++) {
        fib.push(fib[i-2]+ fib[i-1])    
    }
    
    return fib[num-1]


};

// Do not edit below this line
module.exports = fibonacci;
