const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let sum = 0;
  array.forEach(value => sum += value);
  return sum;
};

const multiply = function(array) {
  let res = 1;
  array.forEach(value => res *= value);
  return res;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  if(num === 0 || num === 1){
    return 1;
  }
  return num * factorial(num - 1);
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
