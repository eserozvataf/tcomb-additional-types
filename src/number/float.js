const validator = require('validator');
const t = require('tcomb-form');

// Float
const Float = t.refinement(t.Number, validator.isFloat);

Float.getValidationErrorMessage = (value, path, context) => 'Must be a floating point number (1.2).';

module.exports = Float;
