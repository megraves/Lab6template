const assert = require('assert');
const calculator = require('../calculator');

// Test memory functions
describe('Calculator Memory Functions', function() {
    
});


// Test calculation functions
describe('Calculator Calculation Functions', function() {
    const res = calculator.calculateSquareRoot(4);
    it('should return 2', function() {
        assert.strictEqual(res, 2);
    });
});


// Add your tests here
describe('Calculate Square', function() {
    const ans = calculator.calculateSquare(7);
    it('should return 49', function () {
        assert.strictEqual(ans, 49);
    });
});