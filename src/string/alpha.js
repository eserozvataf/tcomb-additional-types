const validator = require('validator');
const t = require('tcomb-form');

// Alpha
const Alpha = t.refinement(t.String, validator.isAlpha);

Alpha.getValidationErrorMessage = (value, path, context) => 'May only contain letters.';

module.exports = Alpha;
