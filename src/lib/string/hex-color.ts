import validator = require('validator');
import t = require('tcomb');

// HexColor
const HexColor = t.refinement(t.String, validator.isHexColor);

// HexColor.getValidationErrorMessage = (value, path, context) => 'Must be a hexadecimal color (#336699).';

export {
    HexColor,
};

export default HexColor;
