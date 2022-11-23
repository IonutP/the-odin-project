const removeFromArray = function(...args) {
    const array = args[0];
    let finalArray = [];

    array.forEach(element => {
        if (!args.includes(element)) finalArray.push(element);
    });
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
