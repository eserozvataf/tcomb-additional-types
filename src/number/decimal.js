const validator = require('validator');
const t = require('tcomb-form');

// Decimal
const Decimal = t.refinement(t.Number, validator.isDecimal);

Decimal.getValidationErrorMessage = (value, path, context) => 'Must be a decimal number.';

module.exports = Decimal;
