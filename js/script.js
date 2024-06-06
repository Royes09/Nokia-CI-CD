// js/script.js

function calculateSum() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const result = number1 + number2;
    document.getElementById('result').textContent = `Result: ${result}`;
}

// Export the function for testing
module.exports = {
    calculateSum
};
