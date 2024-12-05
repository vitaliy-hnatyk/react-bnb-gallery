'use strict';

var floor = Math.floor;
var finite = isFinite;

module.exports = Number.isInteger
  || function (x) { return typeof x === 'number' && finite(x) && floor(x) === x; };
