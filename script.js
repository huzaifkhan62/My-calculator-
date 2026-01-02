const display = document.getElementById('display');

function appendToDisplay(input) {
    if (display.value === '0') display.value = input;
    else display.value += input;
}

function clearDisplay() { display.value = ''; }

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
        setTimeout(clearDisplay, 1000);
    }
}

function calculateRoot() {
    display.value = Math.sqrt(eval(display.value));
}
