const findTheOldest = function(people) {
    // const people = [
    //     {
    //       name: "Carly",
    //       yearOfBirth: 1942,
    //       yearOfDeath: 1970,
    //     },
    //     {
    //       name: "Ray",
    //       yearOfBirth: 1962,
    //       yearOfDeath: 2011,
    //     },
    //     {
    //       name: "Jane",
    //       yearOfBirth: 1912,
    //       yearOfDeath: 1941,
    //     },
    // ]
    
    people.sort(function(a,b) {
        let aAge = a.yearOfDeath - a.yearOfBirth;
        let bAge = b.yearOfDeath - b.yearOfBirth;
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
