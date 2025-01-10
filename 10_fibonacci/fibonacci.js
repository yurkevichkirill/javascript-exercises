const fibonacci = function(num) {
    if(num < 0) return "OOPS";
    if(num == 0) return 0;
    let fib1 = 1;
    let fib2 = 1;
    for(let i = 2; i < num; i++){
        let temp = fib1;
        fib1 = fib2;
        fib2 += temp;
    }
    return fib2;
};

// Do not edit below this line
module.exports = fibonacci;
