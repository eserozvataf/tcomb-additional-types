import validator = require('validator');
import t = require('tcomb');

// Hexadecimal
const Hexadecimal = t.refinement(t.String, validator.isHexadecimal);

// Hexadecimal.getValidationErrorMessage = (value, path, context) => 'Must be a hexadecimal number (0x19F).';

export {
    Hexadecimal,
};

export default Hexadecimal;
