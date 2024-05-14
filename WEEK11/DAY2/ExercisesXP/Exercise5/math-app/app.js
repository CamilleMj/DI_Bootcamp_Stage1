const _ = require('lodash');
const math = require('./math');

const num1 = 5;
const num2 = 3;

const sum = math.add(num1, num2);
const product = math.multiply(num1, num2);

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);