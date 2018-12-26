// JavaScript Document
const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

//updates the disabled form that is the display, displayValue keeps at as 0
function updateDisplay() {
  const display = document.querySelector('.calc-scn'); //looks for class calc-scn(the disabled form)
  display.value = calculator.displayValue;
  }
  
  updateDisplay();
  
const keys = document.querySelector('.grid-container'); //looks for grid-container and its children
keys.addEventListener('click', (event) => {
const { target } = event;
if (!target.matches('button')) {
  return;
}

if (target.classList.contains('operator')) {
  handleOperator(target.value);
      updateDisplay();
  return;
}

if (target.classList.contains('decimal')) {
  inputDecimal(target.value);
      updateDisplay();
  return;
}

if (target.classList.contains('all-clear')) {
  resetCalc();
      updateDisplay();
  return;
}

entDig(target.value);
updateDisplay();
});

function entDig(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }

  console.log(calculator);
}

function inputDecimal(dot) {
  // If the `displayValue` does not contain a decimal point
  if (!calculator.displayValue.includes(dot)) {
    // Append the decimal point
    calculator.displayValue += dot;
  }
}

//looks for opereator key press then stores first number in firstoperand and operator then waits for seocnd number
function handleOperator(nextOperator) {
const { firstOperand, displayValue, operator } = calculator
const inputValue = parseFloat(displayValue);

if (firstOperand == null) {
  calculator.firstOperand = inputValue;
} else if (operator) {
  const result = equals [operator](firstOperand, inputValue); //calls function equals below

  calculator.displayValue = String(result);
  calculator.firstOperand = result;
}

calculator.waitingForSecondOperand = true;
calculator.operator = nextOperator;
console.log(calculator);
}

//looks for operator passed through, works like if/else until it finds the correct opertator, then
//performs function
const equals = {
  '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,

  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
//'%':

  '=': (firstOperand, secondOperand) => secondOperand
};

//resets calculator obj to defaults  
function resetCalc() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator);
}