let firstNumber = "";
let operator = "";
let displayValue = document.querySelector("#calculatorScreenLower");
let storedNumber = "";
let result = ""
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const backspaceButton = document.querySelector("#backspace");
const showResult = document.querySelector(".result");
const previousOperand = document.querySelector("#calculatorScreenUpper");
const equalsButton = document.querySelector("#equals");

function addition(a, b) {
    return a + b;
};

function subtraction(a, b) {
    return a - b;
};

function multiplication(a, b) {
    return a * b;
};

function division(a, b) {
    if (b != "0") {
        return a / b;
    } else if (b == "0") {
        alert("You know you can't divide by 0, stop trying to break the calculator!");
    } 
};

function operate(operator, firstNumber, secondNumber) {
    if (operator == "+") {
        return addition(firstNumber, secondNumber);
    } else if (operator == "-") {
        return subtraction(firstNumber, secondNumber);
    } else if (operator == "x") {
        return multiplication(firstNumber, secondNumber);
    } else if (operator == "÷") {
        return division(firstNumber, secondNumber);
    }
};

numberButtons.forEach(button => {
    button.addEventListener("click", function() {
        storedNumber += button.value;
        console.log(storedNumber);
        document.querySelector("#calculatorScreenLower").textContent += button.textContent;
    })
});

operatorButtons.forEach(button => {
    button.addEventListener("click", function() {
        firstNumber = storedNumber;
        operator = button.textContent;
        previousOperand.textContent = storedNumber + operator;
        storedNumber = "";
        displayValue.textContent = "";
    })
});

equalsButton.addEventListener("click", function() {
    if (firstNumber == "") {
        result = storedNumber;
    } else {
        result = operate(operator, parseFloat(firstNumber), parseFloat(storedNumber));
        console.log(result);
        document.querySelector("#calculatorScreenUpper").textContent += storedNumber;
        document.querySelector("#calculatorScreenLower").textContent = result;
        firstNumber = "";
        storedNumber = result;
    }

});

clearButton.addEventListener("click", function() {
    storedNumber = ""
    firstNumber = ""
    document.querySelector("#calculatorScreenLower").textContent = "";
    document.querySelector("#calculatorScreenUpper").textContent = "";
});

backspaceButton.addEventListener("click", function () {
    storedNumber = storedNumber.slice(0, -1);
    displayValue.textContent = displayValue.textContent.slice(0, -1);
});
