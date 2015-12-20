const validator = require('validator');
const t = require('tcomb-form');

// HexColor
const HexColor = t.refinement(t.String, validator.isHexColor);

HexColor.getValidationErrorMessage = (value, path, context) => 'Must be a hexadecimal color (#336699).';

module.exports = HexColor;
