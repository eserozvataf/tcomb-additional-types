import validator = require('validator');
import t = require('tcomb');

// Float
const Float = t.refinement(t.Number, (val) => validator.isFloat(String(val)));

// Float.getValidationErrorMessage = (value, path, context) => 'Must be a floating point number (1.2).';

export {
    Float,
};

export default Float;
