'use strict';


function add(value) {
    let sum = 0;
    const isSeparator = value.indexOf('//');
    let separator = ',';
    if (isSeparator === 0) {
        separator = value[value.search('//') + 2];
        value = value.substring(3, value.length);
    }
    value = value.split('\n').join(separator);
    const array = value.split(separator).map(Number);
    let errorMessage = 'Negatives not allowed: ';
    const errorMessageDefaultLength = errorMessage.length;
    array.forEach(element => {
        if (element < 0) {
            errorMessage += element + ', ';
        }
        sum += element;
    });
    return errorMessage.length <= errorMessageDefaultLength ? sum : errorMessage.substring(0, errorMessage.length -2);
}

module.exports = add;