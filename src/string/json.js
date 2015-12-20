const validator = require('validator');
const t = require('tcomb-form');

// JSON
const JSON = t.refinement(t.String, validator.isJSON);

JSON.getValidationErrorMessage = (value, path, context) => 'Must be valid JSON.';

module.exports = JSON;
