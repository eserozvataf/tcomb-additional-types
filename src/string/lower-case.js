const validator = require('validator');
const t = require('tcomb-form');

// Lowercase
const LowerCase = t.refinement(t.String, validator.isLowercase);

LowerCase.getValidationErrorMessage = (value, path, context) => 'Must be only lower case characters.';

module.exports = LowerCase;
