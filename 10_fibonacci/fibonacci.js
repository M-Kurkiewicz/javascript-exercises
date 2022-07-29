const fibonacci = function(num) {
    const fibonacciNumbers = [1,1];
    if(typeof num == 'string'){
        num = parseInt(num);
    };
    if(num < 0) {
        return "OOPS"
    }

    for(i=1;i<num-1;i++){
        fibonacciNumbers.push(fibonacciNumbers[i] + fibonacciNumbers[i-1])
    }
    return fibonacciNumbers[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
