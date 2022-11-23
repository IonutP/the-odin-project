const snakeCase = function(text) {
    let removeEndingChars = text.replace(/[^a-zA-Z]+$/g, '');
    let textClean = removeEndingChars.replace(/[^a-zA-Z]+/g, '_'); // remove non letters or non spaces

    const regexp = /[A-Z]/g;
    const matches = textClean.matchAll(regexp);
    for (const match of matches) {
        if (textClean.indexOf('_') == - 1) {
            textClean = textClean.replace(match[0], '_' + match[0].toLowerCase());
        } else {
            textClean = textClean.replace(match[0], match[0].toLowerCase());
        }
    }
    return textClean;
};

// Do not edit below this line
module.exports = snakeCase;
