const assert = require('assert');

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
}

console.log(flatten());

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

