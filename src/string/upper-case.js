const validator = require('validator');
const t = require('tcomb-form');

// Uppercase
const UpperCase = t.refinement(t.String, validator.isUppercase);

UpperCase.getValidationErrorMessage = (value, path, context) => 'Must be only upper case characters.';

module.exports = UpperCase;
