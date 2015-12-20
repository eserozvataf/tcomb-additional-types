const validator = require('validator');
const t = require('tcomb-form');

// MACAddress
const MacAddress = t.refinement(t.String, validator.isMACAddress);

MacAddress.getValidationErrorMessage = (value, path, context) => 'Must be a valid MAC address.';

module.exports = MacAddress;
