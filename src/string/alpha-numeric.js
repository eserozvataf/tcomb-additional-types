const validator = require('validator');
const t = require('tcomb-form');

// AlphaNumeric
const AlphaNumeric = t.refinement(t.String, validator.isAlphanumeric);

AlphaNumeric.getValidationErrorMessage = (value, path, context) => 'May only contain alphanumeric characters.';

module.exports = AlphaNumeric;
