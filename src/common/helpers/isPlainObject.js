'use strict';

var isArray = require('isarray');

module.exports = function isPlainObject(x) {
  return x && typeof x === 'object' && !isArray(x);
};
