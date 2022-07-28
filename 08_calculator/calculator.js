const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  suma = 0
	for(i=0;i<array.length;i++) {
    suma += array[i];
  }
  return suma
};

const multiply = function(array) {
  multiplied = 1
	for(i=0;i<array.length;i++) {
    multiplied *= array[i];
  }
  return multiplied
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	factorialValue = 1;
  for(i=1;i<=a;i++){
    factorialValue *= i;
  }
  return factorialValue
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
