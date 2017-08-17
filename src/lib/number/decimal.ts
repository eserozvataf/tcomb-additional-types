import validator = require('validator');
import t = require('tcomb');

// Decimal
const Decimal = t.refinement(t.Number, (val) => validator.isDecimal(String(val)));

// Decimal.getValidationErrorMessage = (value, path, context) => 'Must be a decimal number.';

export {
    Decimal,
};

export default Decimal;
