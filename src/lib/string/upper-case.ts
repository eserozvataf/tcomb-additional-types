import validator = require('validator');
import t = require('tcomb');

// Uppercase
const UpperCase = t.refinement(t.String, validator.isUppercase);

// UpperCase.getValidationErrorMessage = (value, path, context) => 'Must be only upper case characters.';

export {
    UpperCase,
};

export default UpperCase;
