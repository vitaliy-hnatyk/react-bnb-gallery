'use strict';

var isInteger = require('./isInteger');
var wrapValidator = require('./wrapValidator');

function requiredInteger(props, propName, componentName) {
  var propValue = props[propName];
  if (propValue == null || !isInteger(propValue)) {
    return new RangeError('`' + propName + '` in `' + componentName + '` must be an integer');
  }
  return null;
}

var validator = function integer(props, propName) {
  var propValue = props[propName];

  if (propValue == null) {
    return null;
  }

  return requiredInteger.apply(this, arguments);
};

validator.isRequired = requiredInteger;

module.exports = function () {
  return wrapValidator(validator, 'integer');
};
