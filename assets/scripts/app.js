const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
// This is a comment
/*
    This is multi
            Line 
            Commenet
*/

// Gets input from input field
function getUserNumberInput() {
    return +userInput.value;
}

// Generates and writes calculations log
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor.js file
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operations: operationIdentifier,
        prevResult: prevResult,
        operand: operationNumber,
        resultAfter: newResult,
    };
    logEntries.push(logEntry);
    // console.log(logEntry.operations);
    console.log(logEntries);
}

function add() {
    const userValue = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += userValue;
    createAndWriteLog("+", initialResult, userValue);
    writeToLog("ADD", initialResult, userValue, currentResult);
}

function subtract() {
    const userValue = getUserNumberInput();
    initialResult = currentResult;
    currentResult -= userValue;
    createAndWriteLog("-", initialResult, userValue);
    writeToLog("SUBTRACT", initialResult, userValue, currentResult);
}

function multiply() {
    const userValue = getUserNumberInput();
    initialResult = currentResult;
    currentResult *= userValue;
    createAndWriteLog("*", initialResult, userValue);
    writeToLog("MULTIPLY", initialResult, userValue, currentResult);
}

function divide() {
    const userValue = getUserNumberInput();
    initialResult = currentResult;
    currentResult /= userValue;
    createAndWriteLog("/", initialResult, userValue);
    writeToLog("DIVIDE", initialResult, userValue, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
