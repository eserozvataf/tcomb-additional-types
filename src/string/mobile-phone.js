const validator = require('validator');
const t = require('tcomb-form');

// MobilePhone
const MobilePhone = t.refinement(t.String, validator.isMobilePhone);

MobilePhone.getValidationErrorMessage = (value, path, context) => 'Must be a valid mobile phone number.';

module.exports = MobilePhone;
