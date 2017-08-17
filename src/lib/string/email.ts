import validator = require('validator');
import t = require('tcomb');

// Email
const Email = t.refinement(t.String, validator.isEmail);

// Email.getValidationErrorMessage = (value, path, context) => 'Must be a valid email address.';

export {
    Email,
};

export default Email;
