import validator = require('validator');
import t = require('tcomb');

// MobilePhone
const MobilePhone = t.refinement(t.String, (val) => validator.isMobilePhone(val, 'any'));

// MobilePhone.getValidationErrorMessage = (value, path, context) => 'Must be a valid mobile phone number.';

export {
    MobilePhone,
};

export default MobilePhone;
