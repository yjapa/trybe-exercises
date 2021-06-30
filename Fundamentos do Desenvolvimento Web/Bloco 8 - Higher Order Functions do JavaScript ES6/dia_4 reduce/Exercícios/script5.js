const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = names.reduce((accumulator, currentValue) => accumulator + currentValue.toLowerCase().split('a').length - 1, '')

console.log(containsA);

assert.deepStrictEqual(containsA, 20);

// assert.deepStrictEqual(containsA(), 20);
