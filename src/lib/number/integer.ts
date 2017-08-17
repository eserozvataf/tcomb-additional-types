import validator = require('validator');
import t = require('tcomb');

// Integer
const Integer = t.refinement(t.Number, (val) => validator.isInt(String(val)));

// Integer.getValidationErrorMessage = (value, path, context) => 'Must be an integer number.';

export {
    Integer,
};

export default Integer;
