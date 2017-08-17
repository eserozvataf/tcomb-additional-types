import validator = require('validator');
import t = require('tcomb');

// MD5
const MD5 = t.refinement(t.String, validator.isMD5);

// MD5.getValidationErrorMessage = (value, path, context) => 'Must be a valid MD5 hash.';

export {
    MD5,
};

export default MD5;
