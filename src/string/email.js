const validator = require('validator');
const t = require('tcomb-form');

// Email
const Email = t.refinement(t.String, validator.isEmail);

Email.getValidationErrorMessage = (value, path, context) => 'Must be a valid email address.';

module.exports = Email;
