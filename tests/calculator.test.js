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
    it('should return 49', function() {
        assert.strictEqual(ans, 49);
    });
    
    const ans2 = calculator.calculateSquare(0);
    it('should return 0', function() {
        assert.strictEqual(ans2, 0);
    });

    const ans3 = calculator.calculateSquare(-2);
    it('should return 4', function() {
        assert.strictEqual(ans3, 4);
    })
});

describe('Bug fixed in reciprocal', function() {
    const ans1 = calculator.calculateReciprocal(0.25);
    it('should return 4', function() {
        assert.strictEqual(ans1, 4);
    });

    const ans2 = calculator.calculateReciprocal(4);
    it('should return 0.25', function() {
        assert.strictEqual(ans2, 0.25);
    });
});

describe("Root is calculated correctly", function() {
    const ans1 = calculator.calculateSquareRoot(64);
    it('should return 8', function() {
        assert.strictEqual(ans1, 8);
    });

    const ans2 = calculator.calculateSquareRoot(1/16);
    it('should return 1/4', function() {
        assert.strictEqual(ans2, 1/4);
    });

    const ans3 = calculator.calculateSquareRoot(-2);
    it('should not return a number', function() {
        assert.strictEqual(ans3, NaN);
    });
});

describe("natural log is calculated correctly", function() {
    const ans1 = calculator.naturalLog(1);
    it('should return 0', function() {
        assert.strictEqual(ans1, 0);
    });

    const ans2 = calculator.naturalLog(Math.E);
    it('should return 1', function() {
        assert.strictEqual(ans2, 1);
    });
});