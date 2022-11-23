const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
    return array.length ? array.reduce((accumulator, nextItem) => accumulator * nextItem) : 0;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	let results = 1;
    for (let i = a; i > 1; i--) {
        results *= i;
    }
    return a == 0 ? 1 : results;
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
