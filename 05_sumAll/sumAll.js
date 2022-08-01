const sumAll = function(a, b) {

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    }
    if ( a < 0|| b < 0) {
        return 'ERROR';
    }
    if ( a > b) {
        const aux = a;
        a = b
        b = aux;

    }

    let soma = 0;
    for (let i = a  ; i < b + 1 ; i++) {
        soma += i;
    }

    return soma;

};

// Do not edit below this line
module.exports = sumAll;
