const palindromes = function (string) {
    let cleanString = string.replace(/[^\w]/g,'');
    let inverseCleanString = cleanString.split("").reverse().join("");
    return inverseCleanString.toLowerCase() == cleanString.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
