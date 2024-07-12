const findTheOldest = function(people) {
    
    people.sort(function(a,b) {
        let aAge = a.yearOfDeath - a.yearOfBirth;
        let bAge = b.yearOfDeath - b.yearOfBirth;

        // if person is alive, change age using the current year for death
        let date = new Date().getFullYear()
        if (!a.hasOwnProperty("yearOfDeath")) {
            aAge = date - a.yearOfBirth;
        }
        if (!b.hasOwnProperty("yearOfDeath")) {
            bAge = date - b.yearOfBirth;
        }
        return aAge > bAge ? -1 : 1;
    })
    console.table(people)
    return people[0]

};

// Do not edit below this line
module.exports = findTheOldest;
