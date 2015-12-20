const validator = require('validator');
const t = require('tcomb-form');

// ISBN
const ISBN = t.refinement(t.String, validator.isISBN);

ISBN.getValidationErrorMessage = (value, path, context) => 'Must be a valid ISBN.';

module.exports = ISBN;
