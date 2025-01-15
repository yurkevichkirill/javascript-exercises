const findTheOldest = function(people) {
   people.sort((a, b) => {
    const aAge = (a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth;
    const bAge = (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth;
    return bAge - aAge;
   });
   return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
