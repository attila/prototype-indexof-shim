/* jshint node: true */
var assert = require('assert');

delete Array.prototype.indexOf;
require('./index.js');

var arr = [0,'a',2,'xy',4,5];

assert.strictEqual(
  arr.indexOf('a'),
  1,
  'Plain matching'
);
assert.strictEqual(
  arr.indexOf('a', 1),
  1,
  'Plain matching using starting index'
);
assert.strictEqual(
  arr.indexOf('x'),
  -1,
  'Not matching'
);
assert.strictEqual(
  [].indexOf('x'),
  -1,
  'Return -1 on zero length'
);
assert.strictEqual(
  [].indexOf('x', 6),
  -1,
  'Return -1 when fromIndex >= length'
);

console.log('Tests successful');
