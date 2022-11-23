const fibonacci = function(number) {
    let numbers = [];
    let i = 0;
    while (i <= number) {
        if (i == 0 || i == 1) {
            numbers.push(i);
        } else {
            numbers.push(numbers[numbers.length - 1] + numbers[numbers.length - 2]);
        }
        i++;
    }
    return number < 0 ? 'OOPS' : numbers[number];
};

// Do not edit below this line
module.exports = fibonacci;
