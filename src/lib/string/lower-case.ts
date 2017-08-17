import validator = require('validator');
import t = require('tcomb');

// Lowercase
const LowerCase = t.refinement(t.String, validator.isLowercase);

// LowerCase.getValidationErrorMessage = (value, path, context) => 'Must be only lower case characters.';

export {
    LowerCase,
};

export default LowerCase;
