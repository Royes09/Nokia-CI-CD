// test/test_calculateSum.js

const { JSDOM } = require('jsdom');
const { expect } = require('chai');
const { calculateSum } = require('../js/script');

// Simulate a DOM environment
const dom = new JSDOM(`
<!DOCTYPE html>
<html>
  <body>
    <input type="text" id="number1" value="5">
    <input type="text" id="number2" value="10">
    <div id="result"></div>
  </body>
</html>
`);

global.document = dom.window.document;

describe('calculateSum', () => {
    it('should correctly sum two numbers', () => {
        calculateSum();
        const result = document.getElementById('result').textContent;
        expect(result).to.equal('Result: 15');
    });

    it('should handle invalid inputs gracefully', () => {
        document.getElementById('number1').value = 'invalid';
        document.getElementById('number2').value = '10';
        calculateSum();
        const result = document.getElementById('result').textContent;
        expect(result).to.equal('Result: NaN');
    });

});
