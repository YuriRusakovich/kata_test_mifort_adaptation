const chai = require('chai');
const assert = chai.assert;
const mocha = require('mocha');
const describe = mocha.describe;

const add = require('../calculator');

describe('add()', function () {
    it('should return zero when string is empty', function () {
        const result = add('0');
        assert.equal(result, 0, 'zero');
    });

    it('should return number equal a value of string when string contain only one number', function () {
        const result = add('1');
        assert.equal(result, 1, 'one number');
    });

    it('should return sum of numbers in accordance with string when string contain two numbers and "," separator', function () {
        const result = add('1,2');
        assert.equal(result, 3, 'two number');
    });

    it('should return sum of numbers in accordance with string when string contain any count of numbers and "," separator', function () {
        const result = add('1,2,3,4');
        assert.equal(result, 10, 'any count of numbers');
    });
    it('should return sum of numbers in accordance with string when string contain any count of numbers, "," separator and new lines', function () {
        const result = add('1\n2,3,4');
        assert.equal(result, 10, 'new lines');
    });
    it('should return sum of numbers in accordance with string when string contain any count of numbers, ";" separator and new lines', function () {
        const result = add('//;\n1;2;3;4');
        assert.equal(result, 10, 'new separator');
    });
    it('should return error message and error elements when string contain negative numbers', function () {
        const result = add('//;\n1;-2;3;-4');
        assert.equal(result, 'Negatives not allowed: -2, -4', 'error message');
    });
});