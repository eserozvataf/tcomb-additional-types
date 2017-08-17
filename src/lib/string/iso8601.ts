import validator = require('validator');
import t = require('tcomb');

// ISO8601
const ISO8601 = t.refinement(t.String, validator.isISO8601);

// ISO8601.getValidationErrorMessage = (value, path, context) => 'Must be a valid ISO8601 date string.';

export {
    ISO8601,
};

export default ISO8601;
