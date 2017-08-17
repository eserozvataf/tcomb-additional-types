import validator = require('validator');
import t = require('tcomb');

// JSON
const JSON = t.refinement(t.String, validator.isJSON);

// JSON.getValidationErrorMessage = (value, path, context) => 'Must be valid JSON.';

export {
    JSON,
};

export default JSON;
