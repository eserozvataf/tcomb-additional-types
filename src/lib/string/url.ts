import validator = require('validator');
import t = require('tcomb');

// URL
const URL = t.refinement(t.String, validator.isURL);

// URL.getValidationErrorMessage = (value, path, context) => 'Must be a valid URL.';

export {
    URL,
};

export default URL;
