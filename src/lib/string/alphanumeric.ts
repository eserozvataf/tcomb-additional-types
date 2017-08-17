import validator = require('validator');
import t = require('tcomb');

// Alphanumeric
const Alphanumeric = t.refinement(t.String, validator.isAlphanumeric);

// Alphanumeric.getValidationErrorMessage = (value, path, context) => 'May only contain alphanumeric characters.';

export {
    Alphanumeric,
};

export default Alphanumeric;
