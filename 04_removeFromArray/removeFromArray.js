const removeFromArray = function (...arr) {

    const array = arr[0];

    const newArray = [];

    array.forEach((value) => {
        if (!arr.includes(value)) {
            newArray.push(value);
        };
});

return newArray;


};

// Do not edit below this line
module.exports = removeFromArray;
