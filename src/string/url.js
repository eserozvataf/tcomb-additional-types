const validator = require('validator');
const t = require('tcomb-form');

// URL
const URL = t.refinement(t.String, validator.isURL);

URL.getValidationErrorMessage = (value, path, context) => 'Must be a valid URL.';

module.exports = URL;
