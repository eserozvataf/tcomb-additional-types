const validator = require('validator');
const t = require('tcomb-form');

// Base64
const Base64 = t.refinement(t.String, validator.isBase64);

Base64.getValidationErrorMessage = (value, path, context) => 'Must be a Base64 string.';

module.exports = Base64;
