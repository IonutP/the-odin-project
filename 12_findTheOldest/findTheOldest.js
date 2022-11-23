const findTheOldest = function(people) {
    let ages = people.map((item) => item.yearOfDeath ? item.yearOfDeath - item.yearOfBirth : new Date().getFullYear() - item.yearOfBirth);
    let maxAge = Math.max(...ages);
    let matchedPerson = people.filter(item => {
        if (item.yearOfDeath) {
            return item.yearOfDeath - item.yearOfBirth == maxAge;
        } else {
            return new Date().getFullYear() - item.yearOfBirth == maxAge
        }
    })[0];
    console.log(matchedPerson);
    return matchedPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
