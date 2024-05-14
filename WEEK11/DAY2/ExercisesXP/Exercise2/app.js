import persons from './data.js';

console.log(persons);

const averageAge = persons.reduce((sum, person) => sum + person.age, 0) / persons.length;
console.log(`Average age: ${averageAge}`);

