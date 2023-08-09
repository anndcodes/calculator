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