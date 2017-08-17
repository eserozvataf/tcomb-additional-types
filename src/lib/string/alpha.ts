import validator = require('validator');
import t = require('tcomb');

// Alpha
const Alpha = t.refinement(t.String, validator.isAlpha);

// Alpha.getValidationErrorMessage = (value, path, context) => 'May only contain letters.';

export {
    Alpha,
};

export default Alpha;
