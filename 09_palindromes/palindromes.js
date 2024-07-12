const palindromes = function (str) {
    // split str into array of letters
    const regex = /[a-zA-Z0-9]/
    let characters = str.split("")
    characters = characters.map((char) => char.toUpperCase())
    let forward = characters.filter((char) => (regex.test(char)))

    // reverse characters
    let copy = forward.slice(0,)
    let reverse = copy.reverse()

    // test every character in both
    for (let i = 0; i < forward.length; i++) {
        if (forward[i] != reverse[i]) {
            return false
        }
    } return true
};
// Do not edit below this line
module.exports = palindromes;
