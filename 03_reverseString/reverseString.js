const reverseString = function(x) {

    let stringToReverse = x.split('');
    let arrayReverse = stringToReverse.reverse('')
    let joinArr = arrayReverse.join('');


    return joinArr;

    

};

// Do not edit below this line
module.exports = reverseString;
