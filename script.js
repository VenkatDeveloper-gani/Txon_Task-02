let display = document.getElementById('display');
let calculation = '';

function appendToDisplay(value) {
    calculation += value;
    display.innerHTML = calculation;
}

function clearDisplay() {
    calculation = '';
    display.innerHTML = '0';
}

function calculate() {
    calculation = eval(calculation);
    display.innerHTML = calculation;
}
