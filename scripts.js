// const { naturalLog } = require("./calculator");

let display = document.getElementById('display');

// Append number or operator to the display
function appendToDisplay(value) {
    display.value += value;
}

// Clear the entire display
function clearDisplay() {
    display.value = '';
}

// Delete the last character from the display
function deleteLast() {

    display.value = display.value.slice(0, -1);
}

//TODO: run store, recall, and reset memory functions:

// Memory Functions

// Get corresponding memory items with id
const memButton = document.getElementById("memoryButton");
const recallButton = document.getElementById("recallButton");
const memoClearButton = document.getElementById("memoryClearButton");
const memDisplay = document.getElementById("memoryDisplay");

// Variable to store memory item
let memoryItem = 0;

// Memory store function
function memoryStore() {
    memoryItem = display.value;
    memDisplay.value = `Memory: ${memoryItem}`; // Update the memory display
}

// Memory recall function
function memoryRecall() {
    const lastChar = display.value.slice(-1);
    if (!/\d/.test(lastChar)) {
        display.value += memoryItem;
    }
}

// Memory clear function
function memoryClear() {
    memoryItem = 0;
    memDisplay.value = `Memory: ${memoryItem}`; // Reset memory display
}


// Calculate and show the result
function calculateResult() {

    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function runSquareRoot() {
    const v = calculateSquareRoot(display.value);
    display.value = v;
    
}

function runSquare() {
    // Hint: Use exponentiation
    const v = calculateSquare(display.value);
    display.value = v;
}

function runReciprocal() {
    // Hint: Reciprocal is 1/x
    const v = calculateReciprocal(display.value);
    display.value = v;
}

// TODO: Implement run your functions here
function runSine() {
    const v = sine(display.value);
    display.value = v;
}

function runCosine() {
    const v = cosine(display.value);
    display.value = v;
}

function runTangent() {
    const v = tangent(display.value);
    display.value = v;
}

function runNaturalLog() {
    const v = naturalLog(display.value);
    display.value = v;
}
