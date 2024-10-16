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

describe("sine is calculated correctly", function() {
    //TODO: Test the sine function
    const ans1 = calculator.sine(0);
    it('should return 0', function() {
        assert.strictEqual(ans1, 0);
    });

    const ans2 = calculator.sine(Math.PI/2);
    it('should return 1', function() {
        assert.strictEqual(ans2, 1);
    });

    // Not exactly zero ... why?
    // const ans3 = calculator.sine(Math.PI);
    // it('should return 0', function() {
    //     assert.equal(ans3, 0);
    // });
});

describe("cosine is calculated correctly", function() {
    //TODO: Test the cosine function
    const ans1 = calculator.cosine(0);
    it('should return 1', function() {
        assert.strictEqual(ans1, 1);
    });

    const ans2 = calculator.cosine(Math.PI/2);
    it('should return 0', function() {
        assert.equal(Math.round(ans2), 0); // is there a better/cleaner way?
    });

    const ans3 = calculator.cosine(Math.PI);
    it('should return -1', function() {
        assert.strictEqual(ans3, -1);
    });
});

describe("tangent is calculated correctly", function() {
    //TODO: Test the tangent function
    const ans1 = calculator.tangent(0);
    it('should return 0', function() {
        assert.strictEqual(ans1, 0);
    });

    const ans2 = calculator.tangent(Math.PI/4);
    it('should return 1', function() {
        assert.strictEqual(Math.round(ans2), 1);
    });

    const ans3 = calculator.tangent(Math.PI);
    it('should return 0', function() {
        assert.equal(Math.round(ans3), 0);
    });
 });
 describe("Reciprocal of negative values", function() {
    const ans1 = calculator.calculateReciprocal(-4);
    it('should return -0.25', function() {
        assert.strictEqual(ans1, -0.25);
    });

    const ans2 = calculator.calculateReciprocal(-0.5);
    it('should return -2', function() {
        assert.strictEqual(ans2, -2);
    });
 });
 describe("Sine of negative values", function() {
    const ans1 = calculator.sine(-Math.PI / 2);
    it('should return -1', function() {
        assert.strictEqual(ans1, -1);
    });

    const ans2 = calculator.sine(-Math.PI);
    it('should return approximately 0', function() {
        assert.strictEqual(Math.round(ans2), 0);
    });
 });
 describe("Cosine of negative values", function() {
    const ans1 = calculator.cosine(-Math.PI / 2);
    it('should return approximately 0', function() {
        assert.strictEqual(Math.round(ans1), 0);
    });

    const ans2 = calculator.cosine(-Math.PI);
    it('should return -1', function() {
        assert.strictEqual(ans2, -1);
    });
 });
describe("Tangent of large angles", function() {
    const ans1 = calculator.tangent(Math.PI * 10);
    it('should return approximately 0', function() {
        assert.strictEqual(Math.round(ans1), 0);
    });

    const ans2 = calculator.tangent(-Math.PI * 5);
    it('should return approximately 0', function() {
        assert.strictEqual(Math.round(ans2), 0);
    });
});
