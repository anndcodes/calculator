// calculator buttons and display screen to use with event listener
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const decimalButton = document.querySelector('[data-decimal]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const display = document.querySelector('.display');

// variables to handle operations 
let firstNum = "";
let secNum = "";
let operator = "";
let currentNum = "0";
let result = "";

// variables to make cursor animation on clear
let blink = document.createElement("div");
blink.className = "blink";
blink.textContent = "|";

// event to clear the display
clearButton.addEventListener('click', function(){
  console.clear();
  display.textContent = "";
  display.appendChild(blink);

  firstNum = "";
  secNum = "";
  currentNum = "0";
  operator = "";
  result = "";
})

// event to delete last number
deleteButton.addEventListener('click', function() {
  if(result) {
    currentNum = "0";
    firstNum = "";
    display.textContent = currentNum;
  } else {
    currentNum = Number(currentNum.toString().slice(0, -1));
    display.textContent = currentNum;
  }
})

// event to populate numbers on display and get the current number
numberButtons.forEach(number => {
  number.addEventListener('click', function() {
    currentNum = parseFloat(currentNum + this.value);
    display.textContent = currentNum;
  })
})


// event to to make operation with decimal
decimalButton.addEventListener('click', function(){
  currentNum.toString().includes(".") ? currentNum : currentNum += ".";
  display.textContent = currentNum;
})


// event to save operator 
operationButtons.forEach(op => {
  op.addEventListener('click', function() {
    if(firstNum && op && currentNum) {
      secNum = currentNum;
      result = parseFloat(operate(firstNum, operator, secNum).toFixed(1));
      display.textContent = result;
      firstNum = result;
      currentNum = "0";
      operator = this.value;
    } else if(op !== "" && currentNum !== "" && firstNum === "") {
      operator = this.value;
      firstNum = currentNum;
      currentNum = "0";
     } else if(firstNum && op) {
      operator = this.value;
      secNum = currentNum;
    } 
  })
})


// event to make operations when pressing "=" key
equalsButton.addEventListener('click', function() {
  if(operator === "") {
    currentNum = 0;
  } else if(operator && currentNum === "0") {
    currentNum = 0;
  } else {
    secNum = currentNum;
    result = parseFloat((operate(firstNum, operator, secNum)).toFixed(1));
    display.textContent = result;
    console.log(`this is the result ${result}`);
    firstNum = result;
    secNum = "";
    currentNum = 0;
  }
})

// function to make operations
function operate(num1, op, num2) {
  console.log(`the operation is ${num1} ${op} ${num2}`);
  switch(op) {
    case "+":
      console.log(`the result is ${num1 + num2}`);
      return num1 + num2;
      break;
    case "-":
      console.log(`the result is ${num1 - num2}`);
      return num1 - num2;
      break;
    case "×":
      console.log(`the result is ${num1 * num2}`);
      return num1 * num2;
      break;
    case "÷":
      console.log(`the result is ${num1 / num2}`);
      return num1 / num2;
      break;
  }
}
