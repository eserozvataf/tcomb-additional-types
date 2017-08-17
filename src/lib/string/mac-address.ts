import validator = require('validator');
import t = require('tcomb');

// MACAddress
const MacAddress = t.refinement(t.String, validator.isMACAddress);

// MacAddress.getValidationErrorMessage = (value, path, context) => 'Must be a valid MAC address.';

export {
    MacAddress,
};

export default MacAddress;
