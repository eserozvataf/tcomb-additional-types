const validator = require('validator');
const t = require('tcomb-form');

// Integer
const Integer = t.refinement(t.Number, validator.isInt);

Integer.getValidationErrorMessage = (value, path, context) => 'Must be an integer number.';

module.exports = Integer;
