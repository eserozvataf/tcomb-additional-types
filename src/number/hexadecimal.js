const validator = require('validator');
const t = require('tcomb-form');

// Hexadecimal
const Hexadecimal = t.refinement(t.Number, validator.isHexadecimal);

Hexadecimal.getValidationErrorMessage = (value, path, context) => 'Must be a hexadecimal number (0x19F).';

module.exports = Hexadecimal;
