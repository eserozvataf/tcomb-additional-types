import validator = require('validator');
import t = require('tcomb');

// Base64
const Base64 = t.refinement(t.String, validator.isBase64);

// Base64.getValidationErrorMessage = (value, path, context) => 'Must be a Base64 string.';

export {
    Base64,
};

export default Base64;
