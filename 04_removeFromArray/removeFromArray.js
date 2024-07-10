const removeFromArray = function(arr, ...args) {
    const container = [...args];
    for (let i = 0; i < container.length; i++) {
        while (arr.indexOf(container[i]) >= 0) {
            arr.splice(arr.indexOf(container[i]),1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
