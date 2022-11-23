const leapYears = function(year) {
    let isLeapYear = false;
    if (year % 100 == 0) {
        isLeapYear = year % 400 == 0 ? true : false; 
    } else if (year % 4 == 0) {
        isLeapYear = true;
    }
    return isLeapYear
};

// Do not edit below this line
module.exports = leapYears;
